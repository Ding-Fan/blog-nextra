"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Edges } from "@react-three/drei";
import { Group } from "three";

export default function XrCalendar() {
  return (
    <div className="h-[80vh] w-[80vw] border-solid border-2 relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />

        {/* Calendar grid */}
        <CalendarGrid />

        {/* OrbitControls allow interaction like zooming and rotating */}
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
      {/* Device orientation logger */}
      {/* <DeviceOrientationLogger /> */}
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

  const calendarRef = useRef<Group>(null);
  const [tiltDebug, setTiltDebug] = useState({ beta: 0, gamma: 0 });

  useEffect(() => {
    // Check if DeviceOrientationEvent is supported
    if (window.DeviceOrientationEvent) {
      // Request permission for iOS devices
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then((response) => {
            if (response === "granted") {
              window.addEventListener("deviceorientation", handleOrientation);
            }
          })
          .catch(console.error);
      } else {
        // For non-iOS devices, simply add the event listener
        window.addEventListener("deviceorientation", handleOrientation);
      }
    }

    function handleOrientation(event: DeviceOrientationEvent) {
      const { beta, gamma } = event; // beta: front-back tilt, gamma: left-right tilt
      setTiltDebug({ beta: beta || 0, gamma: gamma || 0 });
      const tiltX = gamma ? gamma / 30 : 0; // Normalize tilt
      const tiltY = beta ? beta / 30 : 0;
      if (calendarRef.current) {
        calendarRef.current.rotation.set(
          tiltY * (Math.PI / 180),
          tiltX * (Math.PI / 180),
          0
        );
      }
    }

    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <>
      <group ref={calendarRef}>
        {days.map((day, index) => {
          const x = (index % columns) * boxSize - gridWidth / 2 + boxSize / 2;
          const y = -(
            Math.floor(index / columns) * boxSize -
            gridHeight / 2 +
            boxSize / 2
          );
          return <DayBox key={day} position={[x, y, 0]} label={day.toString()} />;
        })}
      </group>
    </>
  );
};


// DeviceOrientationLogger component to display orientation values and move a ball
export const DeviceOrientationLogger: React.FC = () => {
  const [orientationData, setOrientationData] = useState({ beta: 0, gamma: 0 });
  const ballRef = useRef<HTMLDivElement>(null);
  const gardenRef = useRef<HTMLDivElement>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Debugging statement to check if the handler is called
      console.log('handleOrientation called', event);

      let beta = event.beta || 0;
      let gamma = event.gamma || 0;
      setOrientationData({ beta, gamma });

      // Constrain beta to [-90, 90]
      if (beta > 90) beta = 90;
      if (beta < -90) beta = -90;

      // Shift beta and gamma to [0, 180] for easier computation
      beta += 90;
      gamma += 90;

      if (ballRef.current && gardenRef.current) {
        const maxX = gardenRef.current.clientWidth - ballRef.current.clientWidth;
        const maxY = gardenRef.current.clientHeight - ballRef.current.clientHeight;

        // Update ball position, ensuring it moves smoothly within boundaries
        const leftPosition = (maxX * gamma) / 180;
        const topPosition = (maxY * beta) / 180;

        ballRef.current.style.left = `${leftPosition}px`;
        ballRef.current.style.top = `${topPosition}px`;
      }
    };

    // Check for secure context
    if (!window.isSecureContext) {
      alert('This application requires HTTPS to access device orientation data.');
      console.error('Device orientation data is only available in secure contexts (HTTPS).');
      return;
    }

    // Check if DeviceOrientationEvent is supported
    if (window.DeviceOrientationEvent) {
      // For iOS devices, request permission
      if (
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        // iOS 13+ requires permission via user interaction
        setPermissionGranted(false); // Show permission button
      } else {
        // Non-iOS devices, no permission request needed
        window.addEventListener('deviceorientation', handleOrientation);
        setPermissionGranted(true);
      }
    } else {
      alert('Device Orientation is not supported on your device/browser.');
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const requestPermission = () => {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
          setPermissionGranted(true);
        } else {
          alert('Permission not granted for Device Orientation');
        }
      })
      .catch((error) => {
        console.error('Error requesting device orientation permission:', error);
      });
  };

  return (
    <div
      ref={gardenRef}
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        border: '1px solid black',
        background: 'lightgray',
        overflow: 'hidden',
      }}
    >
      {!permissionGranted && typeof DeviceOrientationEvent.requestPermission === 'function' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 1,
          }}
        >
          <p>Please allow device orientation access.</p>
          <button onClick={requestPermission}>Enable Device Orientation</button>
        </div>
      )}
      <div
        ref={ballRef}
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: 'red',
          borderRadius: '50%',
          transition: 'top 0.1s ease, left 0.1s ease',
          left: '90px', // Center the ball initially
          top: '90px',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '5px',
          color: 'black',
        }}
      >
        <p>Beta (Front-Back Tilt): {orientationData.beta.toFixed(2)}</p>
        <p>Gamma (Left-Right Tilt): {orientationData.gamma.toFixed(2)}</p>
      </div>
    </div>
  );
};
