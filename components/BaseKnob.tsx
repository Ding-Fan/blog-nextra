"use client";

import React, { useState, useRef, useEffect } from "react";

interface KnobProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: number;
  label?: string;
  className?: string;
}

const BaseKnob: React.FC<KnobProps> = ({
  value: controlledValue,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 60,
  label = "Knob",
  className,
}) => {
  // Use controlled or uncontrolled value
  const [internalValue, setInternalValue] = useState(0);
  const value = controlledValue ?? internalValue;
  const setValue = (newValue: number) => {
    const clampedValue = Math.max(min, Math.min(max, newValue));
    if (onChange) {
      onChange(clampedValue);
    } else {
      setInternalValue(clampedValue);
    }
  };

  const knobRef = useRef<HTMLDivElement>(null);
  const dragInfoRef = useRef<{
    startY: number;
    startValue: number;
  } | null>(null);

  // ============== MOUSE EVENT HANDLERS ==============
  // 1) Mouse down on the knob => record initial positions and add global listeners
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only left-click
    if (e.button !== 0) return;

    // Store drag data in ref
    dragInfoRef.current = {
      startY: e.clientY,
      startValue: value,
    };

    // Add global listeners (on the entire document)
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);
  };

  // 2) Global mouse move => update the knob value
  const handleGlobalMouseMove = (e: MouseEvent) => {
    // If dragInfoRef.current is null, the user isn't dragging
    if (!dragInfoRef.current) return;

    // Extract the starting Y and knob value from the ref
    const { startY, startValue } = dragInfoRef.current;

    // How many pixels the mouse has moved vertically
    const deltaY = e.clientY - startY;
    const newValue = startValue - Math.round(deltaY / 20) * step;
    setValue(newValue);
  };

  const handleGlobalMouseUp = () => {
    dragInfoRef.current = null;
    document.removeEventListener("mousemove", handleGlobalMouseMove);
    document.removeEventListener("mouseup", handleGlobalMouseUp);
  };

  // ============== KEYBOARD CONTROLS ==============
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard events if this knob is focused
      if (document.activeElement !== knobElement) return;

      // Only handle arrow keys
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key))
        return;

      e.preventDefault();

      if (e.key === "ArrowUp" || e.key === "ArrowRight") {
        setValue(value + step);
      } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
        setValue(value - step);
      }
    };

    // Use capture phase to ensure our handler runs before other handlers
    knobElement.addEventListener("keydown", handleKeyDown, true);
    return () =>
      knobElement.removeEventListener("keydown", handleKeyDown, true);
  }, [value, step]);

  // ============== SCROLL (WHEEL) HANDLERS ==============
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events if this knob is focused or hovered
      if (
        document.activeElement !== knobElement &&
        !knobElement.contains(e.target as Node)
      )
        return;

      e.preventDefault();

      // Use similar sensitivity to mouse move (20 pixels per step)
      const deltaY = e.deltaY;
      const newValue = value - Math.round(deltaY / 20) * step;
      setValue(newValue);
    };

    // "passive: false" fix:
    // https://github.com/microsoft/TypeScript/issues/32912#issuecomment-522142969
    const options: AddEventListenerOptions & EventListenerOptions = {
      passive: false,
    };

    knobElement.addEventListener("wheel", handleWheel, options);
    return () => knobElement.removeEventListener("wheel", handleWheel, options);
  }, [value, step]);

  // ============== VISUAL STYLING ==============
  const calculateGradient = (val: number) => {
    const fraction = (val - min) / (max - min);
    const degrees = fraction * 360;
    return `conic-gradient(
      rgba(255, 255, 255, 1) ${degrees}deg,
      transparent ${degrees}deg
    )`;
  };

  const getGlowStyle = (val: number) => {
    if (val === min) {
      return {
        background: "rgba(80, 0, 82, .7)",
        filter: "blur(1px)",
      };
    }
    return {
      background: calculateGradient(val),
      filter: "blur(7px)",
    };
  };

  const knobSize = `${size}px`;
  const innerSize = `${size * 0.92}px`;

  return (
    <div
      ref={knobRef}
      role="slider"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
      className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black focus:animate-pulse focus:ring-opacity-75"
      style={{ width: knobSize, height: knobSize }}
      onMouseDown={handleMouseDown}
    >
      {/* Glow layer behind the knob */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={getGlowStyle(value)}
      />
      {/* Knob Face */}
      <div className="relative w-full h-full rounded-full bg-black border-solid border-zinc-900 border">
        {/* Filled portion */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              value === min ? "transparent" : calculateGradient(value),
          }}
        />
        {/* Value Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div
            className="bg-black rounded-full flex items-center justify-center select-none text-3xl"
            style={{ width: innerSize, height: innerSize }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseKnob;
