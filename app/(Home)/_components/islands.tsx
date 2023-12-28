"use client"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Gltf, OrbitControls } from "@react-three/drei"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Color } from "three"

// position: [0, 12, 20]
const IslandCanvas = () => {
	const cameraPosition: [number, number, number] = [1.5, 1.2, -0.5]

	return (
		<div className=" lg:h-[calc(100vh-64px)]  w-full">
			<Canvas
				camera={{
					fov: 60,
					near: 0.1,
					far: 1000,
					position: cameraPosition,
				}}
				shadows
			>
				{/* <axesHelper args={[5]} /> */}
				<CanvasChildren />
			</Canvas>
		</div>
	)
}

const CanvasChildren = () => {
	const { controls } = useThree()

	return (
		<>
			<directionalLight
				castShadow
				position={[1, 1, -1]}
				color={Color.NAMES.azure}
			/>
			<ambientLight intensity={0.5} />

			<Island
				url="/floating_island.gltf"
				position={[-0.3, 0.3, 0.5]}
				scale={1.5}
			/>
			<Island
				url="/winter_island.gltf"
				scale={0.05}
				position={[0.3, -0.4, 0.2]}
			/>
			<Island url="/forest_mushroom_island.gltf" position={[-0.4, 0, -0.4]} />
			<OrbitControls enableZoom={false} enablePan={false} />
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
	const spin = Math.random() * 5 + 2

	useFrame(({ clock, camera }) => {
		// console.log(camera.position)
		if (islandPrimitive.current) {
			islandPrimitive.current.rotation.y = clock.getElapsedTime() / spin
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
