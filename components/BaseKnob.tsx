import React, { useEffect, useRef, useState, useCallback } from "react";

type Props = {};

const BaseKnob = (props: Props) => {
  const [value, setValue] = useState(0);
  const knobRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();
    setValue((prevValue) => {
      let newValue = prevValue + (event.deltaY < 0 ? 1 : -1);
      if (newValue < 0) newValue = 0;
      if (newValue > 100) newValue = 100;
      return newValue;
    });
  }, []);

  // Drag Handler
  const handleDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const deltaY = event.clientY - centerY;

    setValue((prevValue) => {
      let newValue = prevValue - Math.round(deltaY / 5);
      if (newValue < 0) newValue = 0;
      if (newValue > 100) newValue = 100;
      return newValue;
    });
  };

  // Add native wheel event listener
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    const wheelListener = (e: WheelEvent) => handleScroll(e);
    knobElement.addEventListener("wheel", wheelListener, { passive: false });

    return () => {
      knobElement.removeEventListener("wheel", wheelListener, {
        passive: false,
      });
    };
  }, [handleScroll]);

  // Conic gradient (0 -> value degrees)
  // Change rgba(...) to your preferred glow/fill color
  const calculateGradient = (val: number) => {
    const fraction = val / 100;
    const degrees = fraction * 360;
    return `conic-gradient(
      rgba(0, 255, 0, 0.8) ${degrees}deg,   /* glowing fill color */
      transparent ${degrees}deg
    )`;
  };

  return (
    <div
      ref={knobRef}
      className="relative w-20 h-20 rounded-full"
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
    >
      {/* 
        1) Blurred glow layer behind the knob.
        Uses the same gradient, but blurred to create a glow
      */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: calculateGradient(value),
          filter: "blur(10px)", // Adjust to make glow softer/harder
        }}
      />

      {/* 2) Knob Face */}
      <div className="relative w-full h-full rounded-full bg-black">
        {/* "Filled" portion on top (same conic gradient, but not blurred) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: calculateGradient(value),
          }}
        />

        {/* 3) Value Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center select-none">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseKnob;
