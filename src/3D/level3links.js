import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import LinkModel from "./models/Link";

export default function RenderLinks1({ links, selectedNode ,level3}) {
	const group = useRef();
	useFrame((_, delta) => {
		if (group && group.current && group.current.children) {
			group.current.children.forEach(
				(line) => (line.material.uniforms.dashOffset.value -= delta)
			);
		}
	});

	if (selectedNode === null && level3===true) {
		var counter = 0;
		return (
			<group ref={group}>
				{links !== undefined && links.map((link) => {
					counter++;
					return <LinkModel key={counter} link={link} />;
				})}
			</group>
		);
	} else return null;
}
