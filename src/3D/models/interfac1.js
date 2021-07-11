import React, {useState, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import img from "./interface.png";
import * as THREE from "three";
import RenderAnnotations from "./Annotaions";

export default function InterfaceModel({ node ,setHoverNode1,focusNodeLevel2}) {
	const group = useRef();
	const mesh = useRef();
	var boxTexture = useLoader(THREE.TextureLoader, img);
	return (
		<group
			ref={group}
			position={node.position}
			onClick={() => {
				//setcolor("red");
				focusNodeLevel2(node);
			}}
			onPointerOver={() => setHoverNode1(node)}
			onPointerLeave={() => setHoverNode1(null)}
		>
			<RenderAnnotations name={node.data.sourceNameLabel} />
		<mesh
					
					ref={mesh}
					
				>
					<boxBufferGeometry attach="geometry" args={[0.8, 0.3, 0.8]} />
					<meshStandardMaterial
						attachArray="material"
						color={"white"}
						toneMapped={false}
						//map={boxTexture}
					/>

					<meshStandardMaterial
						attachArray="material"
					color={"white"}
						map={boxTexture}
					/>
					<meshStandardMaterial
						attachArray="material"
						
						color={"white"}
					/>
					<meshStandardMaterial
						attachArray="material"
						color={"white"}
						//map={boxTexture}
					/>
					<meshStandardMaterial
						attachArray="material"
						color={"white"}
						//map={boxTexture}
					/>
					<meshStandardMaterial
						attachArray="material"
						color={"white"}
						//map={boxTexture}
					/>
				</mesh>
		</group>
	);
}
