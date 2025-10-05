import { TorusParticles } from "./TorusParticles";
import { useMemo } from "react";
import { useThree } from "@react-three/fiber";

export const Torus = ({ active = true, onBloomUpdate }) => {
  const supportsWebGPU = useMemo(() => typeof navigator !== "undefined" && "gpu" in navigator, []);

  if (supportsWebGPU) {
    return (
      <>
        <TorusParticles active={active} onBloomUpdate={onBloomUpdate} />
      </>
    );
  }

  // WebGL fallback: simple torus mesh so it renders without WebGPU
  return (
    <>
      <mesh position={[0, 0.8, 1.5]} castShadow receiveShadow>
        <torusGeometry args={[1.8, 0.6, 32, 128]} />
        <meshBasicMaterial color="#FF7A1A" wireframe={false} />
      </mesh>
    </>
  );
};
