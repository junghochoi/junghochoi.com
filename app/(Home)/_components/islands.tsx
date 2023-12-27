"use client"
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Gltf, OrbitControls } from "@react-three/drei"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

// position: [0, 12, 20]
const IslandCanvas = () => {
	return (
		<div className=" lg:h-[calc(100vh-64px)]  w-full">
			<Canvas
				camera={{
					fov: 63,
					near: 0.1,
					far: 1000,
					position: [1.25, 1, -1.4],
				}}
				shadows
			>
				<directionalLight castShadow />
				<ambientLight intensity={0.5} />

				<Island
					url="/floating_island.gltf"
					position={[0, 0.3, 1]}
					scale={2}
					receiveShadow
				/>
				<Island
					url="/winter_island.gltf"
					scale={0.05}
					position={[0.7, -0.3, -0.3]}
					receiveShadow
				/>
				<Island url="/forest_mushroom_island.gltf" position={[-0.4, 0, -0.2]} />
				{/* <OrbitControls /> */}
			</Canvas>
		</div>
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

	useFrame(({ clock }) => {
		if (islandPrimitive.current) {
			islandPrimitive.current.rotation.y = clock.getElapsedTime() / 10
		}
	})

	return (
		<primitive
			object={gltf.scene}
			ref={islandPrimitive}
			position={position}
			scale={scale}
		/>
	)
}

export default IslandCanvas
