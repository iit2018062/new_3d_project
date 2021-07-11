
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import RenderAnnotations from "./Annotaions";

export default function Model({node,setHoverNode2}) {
  const group = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL  + '/3DModels/interface.glb')
  return (
    <group
			ref={group}
			position={node.position}
			
			onPointerOver={() => setHoverNode2(node)}
			onPointerLeave={() => setHoverNode2(null)}
      scale={[0.19/2, 1/2, 1.56/2]}
		>
      <RenderAnnotations name={node.vmName} />
      {/* <group position={[0, 1.77, 0]} scale={[0.19, 1, 1.56]}> */}
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.001']} />
      </group>
    // </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL  + '/3DModels/interface.glb')
