import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import LinkModel from "./models/Link";

export default function RenderLinks({ links, selectedNode ,level3}) {
	const group = useRef();
	useFrame((_, delta) => {
		if (group && group.current && group.current.children) {
			group.current.children.forEach(
				(line) => (line.material.uniforms.dashOffset.value -= delta)
			);
		}
	});
    var counter=0;
	if (selectedNode === null && level3===false) {

		return (
			<group ref={group}>
				{links.map((link) => {
					counter++;
					return <LinkModel key={link.id+counter} link={link} />;
				})}
			</group>
		);
	} else return null;
}
