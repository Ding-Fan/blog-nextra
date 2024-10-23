"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Edges } from "@react-three/drei";

export default function XrCalendar() {
  return (
    <div className="h-[100vh]">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />

        {/* Calendar grid */}
        <CalendarGrid />

        {/* OrbitControls allow interaction like zooming and rotating */}
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
}

// A single calendar day box component
const DayBox: React.FC<{
  position: [number, number, number];
  label: string;
}> = ({ position, label }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={[1.3, 1.5]} />
      <meshMatcapMaterial color="white" transparent={true} opacity={0.2} />

      <Edges scale={1.0} color="black" />
      {/* Day label on top of each box */}
      <Text position={[0, 0.4, 0]} fontSize={0.2} color="black">
        {label}
      </Text>
    </mesh>
  );
};

// A month grid component that renders 30 days (you can customize this to fit any layout)
const CalendarGrid: React.FC = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // Simulate 30 days for a month
  const columns = 7; // 7 days per row (like a calendar week)
  const rows = Math.ceil(days.length / columns); // Total number of rows
  const boxSize = 1.5; // The size and spacing of each box
  const gridWidth = columns * boxSize; // Total width of the grid
  const gridHeight = rows * boxSize; // Total height of the grid

  return (
    <>
      {days.map((day, index) => {
        const x = (index % columns) * boxSize - gridWidth / 2 + boxSize / 2;
        const y = -(
          Math.floor(index / columns) * boxSize -
          gridHeight / 2 +
          boxSize / 2
        );
        return <DayBox key={day} position={[x, y, 0]} label={day.toString()} />;
      })}
    </>
  );
};


