import React, { useRef } from "react";

export default function VMModel({ node,setHoverNode2 }) {
	const group = useRef();
	return (
		<group
			ref={group}
			position={node.position}

	
			onPointerOver={() => setHoverNode2(node)}
			onPointerLeave={() => setHoverNode2(null)}
		>
		<mesh  dispose={null}>
			<sphereBufferGeometry attach="geometry" args={[0.5, 15, 15]} />
			<meshStandardMaterial attach="material" color="green" />
		</mesh>
		</group>
	);
}
