// components/ThreeDViewer.tsx
'use client'
import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  Preload,
  Html,
  ContactShadows,
  Grid,
} from '@react-three/drei'
import * as THREE from 'three'

interface ThreeDViewerProps {
  src: string
}

function Model({ src }: ThreeDViewerProps) {
  const { scene } = useGLTF(src)

    React.useLayoutEffect(() => {
  // 1) Flip the mesh upright around X:
  scene.rotation.set(Math.PI, 0, 0)

  // 2) Now compute the bounding box on the flipped model:
  const box    = new THREE.Box3().setFromObject(scene)
  const center = box.getCenter(new THREE.Vector3())
  const minY   = box.min.y

  // 3) Center X/Z and drop the bottom (minY) to world Y = 0
  scene.position.set(
    -center.x,
    -minY,
    -center.z,
  )
}, [scene])

  return <primitive object={scene} />
}

export default function ThreeDViewer({ src }: ThreeDViewerProps) {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Canvas
        shadows
        camera={{
          // “Up and to the right” start
          position: [10, 5, 10],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        {/* lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* ground */}
        <Grid
          cellSize={1}
          sectionSize={5}
          sectionColor="#444"
          cellColor="#888"
          infiniteGrid={false}
        />
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.5}
          width={10}
          height={10}
          blur={2}
          far={5}
        />

        {/* model loader */}
        <React.Suspense fallback={<Html center>Loading…</Html>}>
          <Model src={src} />
        </React.Suspense>

        {/* callback ref pins pivot at 0,0,0 */}
        <OrbitControls
          ref={(controls) => {
            if (!controls) return
            controls.target.set(0, 0, 0)
            controls.update()
          }}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minDistance={30}
          maxDistance={35}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        <Preload all />
      </Canvas>
    </div>
  )
}


