import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CautionModel({ position }) {
	const group = useRef();
	const { nodes, materials } = useGLTF(process.env.PUBLIC_URL  + "/3DModels/caution.glb");
	return (
		<group
			ref={group}
			position={[position[0], position[1] + 1, position[2]]}
			scale={0.6}
		>
			<mesh
				geometry={nodes.Cube.geometry}
				material={nodes.Cube.material}
				position={[0.12, 0.81, 0]}
				scale={[0.11, 0.44, 0.11]}
			/>
			<mesh
				geometry={nodes.Cube001.geometry}
				material={nodes.Cube001.material}
				position={[-0.2, 0.81, 0]}
				scale={[0.11, 0.44, 0.11]}
			/>
			<mesh
				geometry={nodes.Plane.geometry}
				material={materials["Material.003"]}
				position={[0.18, 0.99, 0]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
		</group>
	);
}

useGLTF.preload(process.env.PUBLIC_URL  + "/3DModels/caution.glb");
