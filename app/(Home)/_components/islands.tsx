"use client"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Gltf, OrbitControls } from "@react-three/drei"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Color } from "three"

// position: [0, 12, 20]
const IslandCanvas = () => {
	const cameraPosition: [number, number, number] = [1.7, 0.9, 0.45]

	return (
		<div className="h-full lg:h-[calc(100vh-64px)]  w-full">
			<Canvas
				camera={{
					fov: 70,
					near: 0.1,
					far: 1000,
					position: cameraPosition,
				}}
				shadows
			>
				<axesHelper args={[5]} />
				<CanvasChildren />
			</Canvas>
		</div>
	)
}

const CanvasChildren = () => {
	const { camera } = useThree()

	camera

	return (
		<>
			<directionalLight
				castShadow
				position={[1, 1, -1]}
				color={Color.NAMES.azure}
				intensity={2.2}
			/>
			<ambientLight intensity={0.5} />

			<Island
				url="/floating_island.gltf"
				position={[-0.3, 0.1, 0.5]}
				scale={1.5}
			/>
			<Island
				url="/winter_island.gltf"
				scale={0.05}
				position={[0.4, -0.25, 0.15]}
			/>
			<Island url="/forest_mushroom_island.gltf" position={[-0.4, 0.1, -0.4]} />

			<OrbitControls
				enableZoom={false}
				enablePan={false}
				autoRotate={true}
				autoRotateSpeed={0.8}
			/>
		</>
	)
}

interface IslandProps {
	url: string
	position?: [number, number, number]
	scale?: number | [number, number, number]
	receiveShadow?: boolean
}

const Island = ({ url, position, scale }: IslandProps) => {
	const gltf = useLoader(GLTFLoader, url)
	const islandPrimitive = useRef<ThreeElements.primitive | undefined>()

	useFrame(({ clock, camera }) => {
		// console.log(camera.position)
		if (islandPrimitive.current) {
			islandPrimitive.current.rotation.y = clock.getElapsedTime() / 7
		}
	})

	return (
		<primitive
			object={gltf.scene}
			ref={islandPrimitive}
			position={position}
			scale={scale}
			recieveShadow
			castShadow
		/>
	)
}

export default IslandCanvas
