import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TickModel({ position }) {
	const group = useRef();
	const { nodes, materials } = useGLTF(process.env.PUBLIC_URL  + "/3DModels/tick.glb");
	return (
		<group
			ref={group}
			position={[position[0], position[1] + 1, position[2]]}
			dispose={null}
			scale={0.3}
		>
			<mesh
				geometry={nodes.Plane.geometry}
				material={materials["Material.003"]}
				scale={0.18}
			/>
		</group>
	);
}

useGLTF.preload(process.env.PUBLIC_URL  + "/3DModels/tick.glb");
