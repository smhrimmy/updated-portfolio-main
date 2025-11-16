
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingBox() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.3
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={mesh} position={[2, 1, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#667eea" />
    </mesh>
  )
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.3]} />
      <meshStandardMaterial color="#764ba2" wireframe />
    </mesh>
  )
}

function GeometricShapes() {
  return (
    <group>
      <FloatingBox />
      <FloatingSphere position={[-2, -1, 1]} />
      <FloatingSphere position={[1, -2, -1]} />
      <FloatingSphere position={[-1, 2, 0]} />
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GeometricShapes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
