import React, { useState, useRef, useEffect } from "react";

type Props = {};

const BaseKnob = (props: Props) => {
  const [value, setValue] = useState(0);
  const knobRef = useRef<HTMLDivElement>(null);

  // This ref will store information about the current drag
  // or null if the user isn't dragging.
  const dragInfoRef = useRef<{
    startY: number;      // initial mouse Y position
    startValue: number;  // knob value when drag started
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
    // If dragInfoRef.current is null, the user isn’t dragging
    if (!dragInfoRef.current) return;

    // Extract the starting Y and knob value from the ref
    const { startY, startValue } = dragInfoRef.current;

    // How many pixels the mouse has moved vertically
    const deltaY = e.clientY - startY;

    // Adjust the sensitivity by dividing deltaY
    let newValue = startValue - Math.round(deltaY / 20);
    newValue = Math.max(0, Math.min(100, newValue));
    setValue(newValue);
  };

  // 3) Global mouse up => remove global listeners
  const handleGlobalMouseUp = () => {
    // Clear the ref to indicate we’re no longer dragging
    dragInfoRef.current = null;

    document.removeEventListener("mousemove", handleGlobalMouseMove);
    document.removeEventListener("mouseup", handleGlobalMouseUp);
  };

  // ============== SCROLL (WHEEL) HANDLERS ==============
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // ensure we can do preventDefault
      setValue((prevValue) => {
        let newValue = prevValue + (e.deltaY < 0 ? 1 : -1);
        return Math.max(0, Math.min(100, newValue));
      });
    };

    // “passive: false” fix:
    // https://github.com/microsoft/TypeScript/issues/32912#issuecomment-522142969
    const options: AddEventListenerOptions & EventListenerOptions = {
      passive: false,
    };

    knobElement.addEventListener("wheel", handleWheel, options);
    return () => {
      knobElement.removeEventListener("wheel", handleWheel, options);
    };
  }, []);

  // ============== VISUAL STYLING ==============
  const calculateGradient = (val: number) => {
    const fraction = val / 100;
    const degrees = fraction * 360;
    return `conic-gradient(
      rgba(255, 255, 255, 1) ${degrees}deg,
      transparent ${degrees}deg
    )`;
  };

  const getGlowStyle = (val: number) => {
    if (val === 0) {
      // Full-circle dark red glow
      return {
        background: "rgba(80, 0, 82, .7)",
        filter: "blur(1px)",
      };
    } else {
      // Normal arc glow
      return {
        background: calculateGradient(val),
        filter: "blur(7px)",
      };
    }
  };

  return (
    <div
      ref={knobRef}
      className="relative w-20 h-20 rounded-full"
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
            background: value === 0 ? "transparent" : calculateGradient(value),
          }}
        />
        {/* Value Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="bg-black w-[4.7rem] h-[4.7rem] rounded-full flex items-center justify-center select-none text-3xl">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseKnob;
