import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import RenderAnnotations1 from "../loadingannotation";
export default function LoadingModel() {
	const group = useRef();
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.02;
	});
	return (
		<group
			ref={group}
			position={[0, 3, 0]} 
			
		>
		<RenderAnnotations1 name={"Loding...."} />
		<mesh ref={mesh} scale={3}>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial color="blue" attachArray="material" />
			<meshStandardMaterial color="green" attachArray="material" />
			<meshStandardMaterial color="red" attachArray="material" />

			<meshStandardMaterial color="blue" attachArray="material" />
			<meshStandardMaterial color="green" attachArray="material" />
			<meshStandardMaterial color="red" attachArray="material" />
			
		</mesh>
		</group>
	);
}
