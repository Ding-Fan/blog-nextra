import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEvent,
} from "react";

type Props = {};

const BaseKnob = (props: Props) => {
  const [value, setValue] = useState(0);
  const knobRef = useRef<HTMLDivElement>(null);

  // We'll store the Y position at mouse down, plus the knob's value at that time.
  const [startY, setStartY] = useState<number | null>(null);
  const [startValue, setStartValue] = useState<number | null>(null);

  // Wheel (scroll) handler
  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();
    setValue((prevValue) => {
      let newValue = prevValue + (event.deltaY < 0 ? 1 : -1);
      if (newValue < 0) newValue = 0;
      if (newValue > 100) newValue = 100;
      return newValue;
    });
  }, []);

  // When user presses down (left mouse button) on the knob
  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return; // Only respond to left button
    setStartY(event.clientY);
    setStartValue(value);
  };

  // When user moves the mouse *while* pressing down
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    // If we haven't pressed down (startY is null), do nothing
    if (startY === null || startValue === null) return;

    // deltaY = how many pixels the mouse has moved vertically since mouse down
    const deltaY = event.clientY - startY;

    // Adjust sensitivity: dividing deltaY by 20 means slower changes in value
    let newValue = startValue - Math.round(deltaY / 20);

    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  };

  // When user releases the mouse button
  const handleMouseUp = () => {
    setStartY(null);
    setStartValue(null);
  };

  // Register the wheel event (native) on mount/unmount
  useEffect(() => {
    const knobElement = knobRef.current;
    if (!knobElement) return;

    // note:
    // https://github.com/microsoft/TypeScript/issues/32912#issuecomment-522142969
    const options: AddEventListenerOptions & EventListenerOptions = {
      passive: false,
    };

    const wheelListener = (e: WheelEvent) => handleScroll(e);
    knobElement.addEventListener("wheel", wheelListener, options);

    return () => {
      knobElement.removeEventListener("wheel", wheelListener, options);
    };
  }, [handleScroll]);

  /**
   * Conic gradient for the "filled" portion: 0 -> value degrees.
   * Adjust RGBA color to control brightness or color of the fill.
   */
  const calculateGradient = (val: number) => {
    const fraction = val / 100;
    const degrees = fraction * 360;
    return `conic-gradient(
      rgba(255, 255, 255, 1) ${degrees}deg,
      transparent ${degrees}deg
    )`;
  };

  // Decide whether to display a full red glow or the normal gradient glow
  const getGlowStyle = (val: number) => {
    if (val === 0) {
      // Full-circle dark red glow
      return {
        background: "rgba(139, 0, 0, 0.8)", // or "darkred"
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
      // 1) Mouse down sets up drag start
      onMouseDown={handleMouseDown}
      // 2) Mouse move adjusts the knob only if startY and startValue are set
      onMouseMove={handleMouseMove}
      // 3) Mouse up resets dragging
      onMouseUp={handleMouseUp}
    >
      {/*
        1) Blurred glow layer behind the knob.
           - If value=0, use a full dark-red circle
           - Else use the normal conic gradient
      */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={getGlowStyle(value)}
      />

      {/* 2) Knob Face */}
      <div className="relative w-full h-full rounded-full bg-black">
        {/* "Filled" portion on top (same conic gradient, but not blurred) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: value === 0 ? "transparent" : calculateGradient(value),
          }}
        />

        {/* 3) Value Label */}
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
