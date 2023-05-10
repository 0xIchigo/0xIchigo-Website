"use client";

//import { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpaceWarp } from "./SpaceWarp";

/*const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () =>  setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
  }, []);

  return size;
}*/

export default function Background() {
  //const [height, width] = useWindowSize();

  return (
    <div className="h-screen w-screen min-h-full overflow-hidden object-cover block absolute top-0 left-0 z-[-100] ">
      <Canvas camera={{ fov: 100, near: 0.1, far: 200 }} resize={{debounce: 0, scroll: false}}>
        <OrbitControls />
        <SpaceWarp />
      </Canvas>
    </div>
  )
}
