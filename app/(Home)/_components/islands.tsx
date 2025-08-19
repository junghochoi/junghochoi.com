"use client"

import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { OrbitControls } from "@react-three/drei"

import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import { Color, Mesh, PerspectiveCamera } from "three"

const screenSmallZoom = 1.8
const screenLargeZoom = 0.95

// position: [0, 12, 20]
const IslandCanvas = () => {
	const [allowRotate, setAllowRotate] = useState(false)
	const [fov, setFov] = useState(1)
	useEffect(() => {
		setAllowRotate(window.innerWidth > 640)
		setFov(window.innerWidth < 1024 ? screenSmallZoom : screenLargeZoom)

		const handleWindowResize = () => {
			setAllowRotate(window.innerWidth > 640)
			setFov(window.innerWidth < 1024 ? screenSmallZoom : screenLargeZoom)
		}

		window.addEventListener("resize", handleWindowResize)
		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	}, [])

	const cameraPosition: [number, number, number] = [1.7, 0.9, 0.45]

	return (
		<div id="main" className=" h-60 lg:h-[calc(100svh-64px)]  w-full">
			<Canvas
				camera={{
					fov: 70,
					near: 0.1,
					far: 1000,
					position: cameraPosition,
				}}
				shadows
			>
				<CameraHelper />
				<directionalLight castShadow position={[1, 1, -1]} color={Color.NAMES.azure} intensity={2.2} />
				<ambientLight intensity={0.5} />
				<Island url="/floating_island.gltf" position={[-0.3, 0.1, 0.5]} scale={1.5} />
				<Island url="/winter_island.gltf" scale={0.05} position={[0.4, -0.25, 0.15]} />
				<Island url="/forest_mushroom_island.gltf" position={[-0.2, 0.1, -0.3]} scale={0.75} />
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					enableRotate={allowRotate}
					autoRotate={true}
					autoRotateSpeed={0.8}
					onPointerUp={(e) => e.stopPropagation()}
				/>
				{/* <CanvasChildren /> */}
				{/* <axesHelper args={[5]} /> */}
			</Canvas>
		</div>
	)
}

const CameraHelper = () => {
	useFrame((state) => {
		// const perspectiveCamera = state.camera as PerspectiveCamera
		// perspectiveCamera.fov = fov

		// console.log(fov)
		state.camera.zoom = window.innerWidth < 1024 ? screenSmallZoom : screenLargeZoom
		state.camera.updateProjectionMatrix()
	})

	return null
}

const CanvasChildren = () => {
	return <></>
}

interface IslandProps {
	url: string
	position?: [number, number, number]
	scale?: number | [number, number, number]
	receiveShadow?: boolean
}

const Island = ({ url, position, scale }: IslandProps) => {
	const gltf = useLoader(GLTFLoader, url)
	const islandPrimitive = useRef<Mesh>(null!)

	useFrame(({ clock, camera }) => {
		// console.log(camera.position)
		if (islandPrimitive.current) {
			islandPrimitive.current.rotation.y = clock.getElapsedTime() / 7
		}
	})

	return (
		<primitive object={gltf.scene} ref={islandPrimitive} position={position} scale={scale} recieveShadow castShadow />
	)
}

export default IslandCanvas
