"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpaceWarp } from "./SpaceWarp";

export default function Background() {
  return (
    <div className="h-full w-full block absolute top-0 left-0 z-[-100] insert-0">
      <Canvas camera={{ fov: 100, near: 0.1, far: 200 }}>
        <OrbitControls />
        <SpaceWarp />
      </Canvas>
    </div>
  )
}
