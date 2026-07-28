"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { FBXLoader } from "three-stdlib";
import * as THREE from "three";

function Loading() {
    return (
        <Html center>
            <p>Loading Interviewer...</p>
        </Html>
    );
}

function Interviewer() {
    const character = useLoader(FBXLoader, "/models/Interviewer.fbx");

    const group = useRef<THREE.Group>(null);

    useEffect(() => {
        character.scale.setScalar(0.015);

        // Move character upward
        character.position.set(0, -1.2, 0);

        // Make him face the camera
        character.rotation.set(0, Math.PI, 0);

        character.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [character]);

    useFrame((state) => {
        if (!group.current) return;

        // Tiny idle sway
        group.current.rotation.y =
            Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
    });

    return (
        <group ref={group}>
            <primitive object={character} />
        </group>
    );
}

export default function Avatar() {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 1.4, 2.2],
                fov: 30,
            }}
        >
            <ambientLight intensity={1.5} />

            <directionalLight
                castShadow
                intensity={2}
                position={[5, 5, 5]}
            />

            <Environment preset="city" />

            <Suspense fallback={<Loading />}>
                <Interviewer />
            </Suspense>
        </Canvas>
    );
}