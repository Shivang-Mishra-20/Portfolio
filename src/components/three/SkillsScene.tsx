"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const skillLabels = [
  "React", "Python", "JS", "TF", "Next.js",
  "Django", "PyTorch", "Git", "CSS", "Flask"
];

const colors = [
  "#6366F1", "#06B6D4", "#F59E0B", "#F472B6",
  "#10b981", "#8b5cf6", "#ef4444", "#f97316",
  "#06B6D4", "#6366F1"
];

function SkillNode({ label, color, position }: { label: string; color: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.2}>
      <group position={position}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  const positions = useMemo(() => {
    return skillLabels.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skillLabels.length);
      const theta = Math.sqrt(skillLabels.length * Math.PI) * phi;
      const r = 2.5;
      return [
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  // Connection lines
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    positions.forEach((pos, i) => {
      if (i < positions.length - 1) {
        points.push(new THREE.Vector3(...pos));
        points.push(new THREE.Vector3(...positions[i + 1]));
      }
    });
    return points;
  }, [positions]);

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#6366F1"
          emissive="#4338ca"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Skill nodes */}
      {skillLabels.map((label, i) => (
        <SkillNode key={label} label={label} color={colors[i]} position={positions[i]} />
      ))}

      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshStandardMaterial
          color="#6366F1"
          opacity={0.04}
          transparent
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function SkillsScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6366F1" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#06B6D4" />

      <SkillSphere />
    </Canvas>
  );
}
