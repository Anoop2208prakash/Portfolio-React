import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from 'three'; // Import THREE for types

const skills = [
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Java", slug: "openjdk" },
  { name: "Spring Boot", slug: "spring" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Python", slug: "python" },
  { name: "Redux", slug: "redux" },
  { name: "Vite", slug: "vite" },
  { name: "Webpack", slug: "webpack" },
  { name: "Linux", slug: "linux" },
  { name: "NGINX", slug: "nginx" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Jest", slug: "jest" },
];

function getSpherePositions(radius: number, count: number) {
  const positions: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions.push([
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ]);
  }
  return positions;
}

function WireSphere() {
  // FIXED: Added type and initial value to useRef
  const mesh = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={mesh}>
      {/* Visible Wireframe */}
      <mesh>
        <icosahedronGeometry args={[3.2, 2]} />
        <meshBasicMaterial
          color="#ff6b00"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
      {/* Invisible solid sphere to trigger occlusion */}
      <mesh>
        <icosahedronGeometry args={[3.1, 2]} />
        <meshBasicMaterial visible={false} />
      </mesh>
    </group>
  );
}

function Icons() {
  // FIXED: Added type and initial value to useRef
  const group = useRef<THREE.Group>(null!);
  const positions = useMemo(() => getSpherePositions(4.5, skills.length), []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={group}>
      {skills.map((skill, i) => (
        <Html
          key={i}
          position={positions[i]}
          center
          distanceFactor={10}
          occlude="blending" // Enhanced occlusion logic
        >
          <div className="flex flex-col items-center select-none pointer-events-none">
            <img
              src={`https://cdn.simpleicons.org/${skill.slug}`}
              className="w-10 h-10 hover:scale-125 transition duration-300 pointer-events-auto"
              alt={skill.name}
            />
            <p className="text-xs text-gray-300 mt-1 font-mono">{skill.name}</p>
          </div>
        </Html>
      ))}
    </group>
  );
}

const Skills = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#0d0d0d]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} color="#ff6b00" />

        <WireSphere />
        <Icons />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.25}
        />
      </Canvas>
    </section>
  );
};

export default Skills;