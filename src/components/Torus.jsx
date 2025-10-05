import { TorusParticles } from "./TorusParticles";
import { useMemo } from "react";
import { useThree } from "@react-three/fiber";

export const Torus = ({ active = true, onBloomUpdate }) => {
  const gl = useThree((state) => state.gl);
  const supportsWebGPU = useMemo(() => {
    // Prefer checking the actual renderer capabilities
    return !!(gl && (gl.isWebGPURenderer || typeof gl.compute === "function"));
  }, [gl]);

  // Hotfix: disable Torus on production to avoid blank screen until fallback is stable
  const isProd = import.meta && import.meta.env && import.meta.env.PROD;
  if (isProd) return null;

  if (!supportsWebGPU) {
    // WebGL fallback: particle-like torus using Points, tuned for visibility
    return (
      <>
        <points position={[0, 0.8, 0]} frustumCulled={false}>
          <torusGeometry args={[2.5, 0.8, 96, 384]} />
          <pointsMaterial color="#D1E40F" size={0.08} sizeAttenuation depthWrite={false} depthTest={false} transparent />
        </points>
      </>
    );
  }

  return (
    <>
      <TorusParticles active={active} onBloomUpdate={onBloomUpdate} />
    </>
  );
};
