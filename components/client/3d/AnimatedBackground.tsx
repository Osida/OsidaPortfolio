import React, {useRef} from "react";
import {Canvas, useFrame, Vector3} from "@react-three/fiber";
import {a, useSpring} from "@react-spring/three";

const shapes = ["box", "sphere", "cylinder", "cone", "torus", "octahedron"];

type ShapeType = typeof shapes[number];

interface ShapeProps {
    type: ShapeType;
    position: Vector3;
}

const Shape = ({type, position}: ShapeProps) => {
    const meshRef = useRef();
    const spring = useSpring({
        rotation: [0, Math.PI, 0],
        config: {tension: 150, friction: 50},
    });

    useFrame(() => {
        if (meshRef.current) {
            // @ts-ignore
            meshRef.current.rotation.x += 0.01;
            // @ts-ignore
            meshRef.current.rotation.y += 0.01;
        }
    });

    const geometry = {
        box: <boxGeometry args={[1, 1, 1]} attach="geometry"/>,
        sphere: <sphereGeometry args={[0.5, 32, 32]} attach="geometry"/>,
        cylinder: <cylinderGeometry args={[0.5, 0.5, 1, 32]} attach="geometry"/>,
        cone: <coneGeometry args={[0.5, 1, 32]} attach="geometry"/>,
        torus: <torusGeometry args={[0.3, 0.1, 16, 100]} attach="geometry"/>,
        octahedron: <octahedronGeometry args={[0.5]} attach="geometry"/>,
    };


    return (
        // @ts-ignore
        <a.mesh ref={meshRef} rotation={spring.rotation} position={position}>
            {/*@ts-ignore*/}
            {geometry[type]}
            <meshStandardMaterial color={"orange"} attach="material"/>
        </a.mesh>
    );
};

const AnimatedBackground = () => {
    const positions: Vector3[] = [
        [-2, 2, 1],  // sphere
        [-1, 1, 1],  // cylinder
        [0, 1, 1],   // box
        [1, 1, 1],   // cone
        [2, 1, 1],   // torus
        [3, 1, 1]    // octahedron
    ];

    return (
        <Canvas style={{position: "fixed"}}>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            {shapes.map((shape, index) => (
                <Shape key={index} type={shape} position={positions[index]}/>
            ))}
        </Canvas>
    );
};

export default AnimatedBackground;
