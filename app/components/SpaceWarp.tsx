"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, ChromaticAberrationEffect } from "postprocessing";

const COUNT = 2500;
const XY_BOUNDS = 80;
const Z_BOUNDS = 25;

/*
    Originally I had the speed factor set to 2 and the scale factor set to 50 so it would feel like
    in the Star Wars movies/shows when ships would exit a hyperspace jump - think of looking out of
    the cockpit of the Millennium Falcon and all the stars are warping past them. I lowered these values,
    however, as the flashing lights, due to the added effects, have the potential to trigger 
    photosensitive epilepsy. If you want to achieve such an effect, or see it in action, I highly
    recommend changing the values or checking out o2bomb's GitHub repo titled "space-warp" 
*/
const MAX_SPEED_FACTOR = 0.1;
const MAX_SCALE_FACTOR = 10;
const CHROMATIC_ABBERATION_OFFSET = 0.007;

const generatePosition = () => (Math.random() - 0.5) * XY_BOUNDS;

export interface SceneProps { }

export const SpaceWarp = ({ }: SceneProps) => {
    const meshRef = useRef<THREE.InstancedMesh>();
    const effectsRef = useRef<ChromaticAberrationEffect>();

    useEffect(() => {
        if (!meshRef.current) return;

        const t = new THREE.Object3D();
        let j = 0;

        for (let i = 0; i < COUNT * 3; i += 3) {
            t.position.x = generatePosition();
            t.position.y = generatePosition();
            t.position.z = (Math.random() - 0.5) * Z_BOUNDS;
            t.updateMatrix();
            meshRef.current.setMatrixAt(j++, t.matrix);
        }
    }, []);

    const temp = new THREE.Matrix4();
    const tempPos = new THREE.Vector3();
    const tempObject = new THREE.Object3D();
    const tempColor = new THREE.Color();

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        const elapsedTime = state.clock.elapsedTime;
        const initialDeceleration = 1 / Math.pow(elapsedTime + 3, elapsedTime + 3);
        const stableVelocity = 0.05;
        const velocity = elapsedTime < 21 ? initialDeceleration : stableVelocity;

        for (let i = 0; i < COUNT; i++) {
            meshRef.current.getMatrixAt(i, temp);

            tempObject.scale.set(1, 1, Math.max(1, velocity * MAX_SCALE_FACTOR));

            tempPos.setFromMatrixPosition(temp);

            if (tempPos.z > Z_BOUNDS / 2) {
                tempPos.z = -Z_BOUNDS / 2 + Math.random() * Z_BOUNDS;
            } else {
                tempPos.z += Math.max(delta, velocity * MAX_SPEED_FACTOR);
            }

            tempObject.position.set(tempPos.x, tempPos.y, tempPos.z);

            tempObject.updateMatrix();
            meshRef.current.setMatrixAt(i, tempObject.matrix);

            if (tempPos.z > 0) {
                tempColor.r = tempColor.g = tempColor.b = 1;
            } else {
                tempColor.r =
                    tempColor.g =
                    tempColor.b =
                    1 - tempPos.z / (-Z_BOUNDS / 2);
            }
            meshRef.current.setColorAt(i, tempColor);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;

        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

        if (!effectsRef.current) return;
        effectsRef.current.offset.x = Math.max(
            0,
            Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABBERATION_OFFSET
        );
        effectsRef.current.offset.y = Math.max(
            0,
            Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABBERATION_OFFSET
        );
    });

    return (
        <>
            <color args={["#000000"]} attach="background" />
            <instancedMesh
                ref={meshRef as any}
                args={[undefined, undefined, COUNT]}
                matrixAutoUpdate
            >
                <sphereGeometry args={[0.05]} />
                <meshBasicMaterial color={[1.5, 1.5, 1.5]} toneMapped={false} />
            </instancedMesh>
            <EffectComposer>
                <Bloom luminanceThreshold={0.2} mipmapBlur />
                <ChromaticAberration
                    ref={effectsRef as any}
                    blendFunction={BlendFunction.NORMAL} // Blend mode
                    offset={
                        new THREE.Vector2(
                            CHROMATIC_ABBERATION_OFFSET,
                            CHROMATIC_ABBERATION_OFFSET
                        )
                    }
                    modulationOffset={0.15}
                    radialModulation={false}
                />
            </EffectComposer>
        </>
    );
}