import React, { useState, useRef, useEffect } from "react";

type Props = {};

const BaseKnob = (props: Props) => {
  const [value, setValue] = useState(0);
  const knobRef = useRef<HTMLDivElement>(null);





  // We'll store the Y position at mouse down, plus the knob's value at that time.
  const [startY, setStartY] = useState<number | null>(null);
  const [startValue, setStartValue] = useState<number | null>(null);

  // ============== MOUSE EVENT HANDLERS ==============

  // 1) Mouse down on the knob => record initial positions and add global listeners
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse down");
    console.log(e.button);
    
    
    if (e.button !== 0) return; // Only left-click

    setStartY(e.clientY);
    setStartValue(value);

    // Add global listeners (on the entire document)
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);
  };

  // 2) Global mouse move => update the knob value
  const handleGlobalMouseMove = (e: MouseEvent) => {

    console.log("Mouse move");
    console.log(startY, startValue);
    
    if (startY === null || startValue === null) return;

    

    const deltaY = e.clientY - startY;
    let newValue = startValue - Math.round(deltaY / 20);
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  };

  // 3) Global mouse up => remove global listeners
  const handleGlobalMouseUp = () => {
    setStartY(null);
    setStartValue(null);

    document.removeEventListener("mousemove", handleGlobalMouseMove);
    document.removeEventListener("mouseup", handleGlobalMouseUp);
  };

  // ============== SCROLL (WHEEL) HANDLERS ==============
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // ensure we can do preventDefault even in modern browsers
      setValue((prevValue) => {
        let newValue = prevValue + (e.deltaY < 0 ? 1 : -1);
        return Math.max(0, Math.min(100, newValue));
      });
    };


    // note:
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
        background: "rgba(139, 0, 0, 0.8)",
        filter: "blur(10px)",
      };
    } else {
      // Normal arc glow
      return {
        background: calculateGradient(val),
        filter: "blur(10px)",
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
      <div className="relative w-full h-full rounded-full bg-black">
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
