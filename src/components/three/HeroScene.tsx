"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere, Torus, Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const torus2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !torusRef.current || !torus2Ref.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    meshRef.current.rotation.y = t * 0.2;
    torusRef.current.rotation.x = t * 0.15;
    torusRef.current.rotation.z = t * 0.1;
    torus2Ref.current.rotation.y = t * 0.2;
    torus2Ref.current.rotation.x = Math.cos(t * 0.3) * 0.4;
  });

  return (
    <group>
      {/* Central distorted sphere */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6366F1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
            emissive="#4338ca"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Orbiting torus 1 */}
      <Float speed={1.5} floatIntensity={0.3}>
        <Torus
          ref={torusRef}
          args={[2.2, 0.06, 16, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 3, 0, Math.PI / 6]}
        >
          <meshStandardMaterial
            color="#06B6D4"
            roughness={0}
            metalness={1}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </Torus>
      </Float>

      {/* Orbiting torus 2 */}
      <Float speed={1} floatIntensity={0.2}>
        <Torus
          ref={torus2Ref}
          args={[2.8, 0.04, 16, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 4, Math.PI / 3, 0]}
        >
          <meshStandardMaterial
            color="#F472B6"
            roughness={0}
            metalness={1}
            emissive="#ec4899"
            emissiveIntensity={0.5}
          />
        </Torus>
      </Float>

      {/* Floating small cubes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3.5;
        return (
          <Float key={i} speed={1 + i * 0.3} floatIntensity={0.5 + i * 0.1}>
            <Box
              args={[0.12, 0.12, 0.12]}
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 0.5) * 1.5,
                Math.sin(angle) * radius,
              ]}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? "#F59E0B" : "#6366F1"}
                emissive={i % 2 === 0 ? "#F59E0B" : "#6366F1"}
                emissiveIntensity={0.6}
                roughness={0}
                metalness={0.8}
              />
            </Box>
          </Float>
        );
      })}
    </group>
  );
}

function ParticleField() {
  const count = 150;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#6366F1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[0, 5, -10]} intensity={0.5} color="#F472B6" />

        <FloatingGeometry />
        <ParticleField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
