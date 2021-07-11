import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import RenderAnnotations from "./Annotaions";

export default function LeafModel({ nodeData, focusNodeLevel1, setHoverNode,level3 }) {
	const group = useRef();
	const { nodes, materials } = useGLTF(process.env.PUBLIC_URL  + "/3DModels/leaf.glb");
	return (
		<group
			ref={group}
			position={nodeData.position}
			onClick={() => {
				focusNodeLevel1(nodeData);
			}}
			onPointerOver={() => setHoverNode(nodeData)}
			onPointerLeave={() => setHoverNode(null)}
		>
			<RenderAnnotations name={nodeData.data.nodeName} />
			<mesh
				geometry={nodes.Cube.geometry}
				material={materials["Material.001"]}
				scale={[1, 0.32, 1]}
			/>
			<mesh
				geometry={nodes.Cube001.geometry}
				material={nodes.Cube001.material}
				position={[0.53, 0.34, 0.17]}
				scale={[0.26, 0.08, 0.26]}
			/>
			<mesh
				geometry={nodes.Cube002.geometry}
				material={nodes.Cube002.material}
				position={[-0.17, 0.34, 0.17]}
				scale={[0.26, 0.08, 0.26]}
			/>
			<mesh
				geometry={nodes.Cube003.geometry}
				material={nodes.Cube003.material}
				position={[-0.53, 0.34, -0.16]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.26, 0.08, 0.26]}
			/>
			<mesh
				geometry={nodes.Cube004.geometry}
				material={nodes.Cube004.material}
				position={[0.17, 0.34, -0.16]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.26, 0.08, 0.26]}
			/>
		</group>
	);
}

useGLTF.preload(process.env.PUBLIC_URL  + "/3DModels/leaf.glb");
