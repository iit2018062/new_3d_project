import { Typography } from "@material-ui/core";
import { Html } from "@react-three/drei";
import React, { useRef } from "react";

export default function RenderAnnotations1({ name }) {
	const mesh = useRef();

	return (
		<mesh position={[0, 0.1, 1.1]} ref={mesh} dispose={null}>
			{/* <Text
				color="white"
				anchorX="center"
				anchorY="middle"
				fontSize={0.3}
				outlineColor="red"
			>
				{name}
			</Text> */}
			<Html distanceFactor={15} dispose={null}>
				<div
					style={{
						width: "auto",
						backgroundColor: "transparent",
						//backdropFilter: "blur(5px)",
						borderRadius: 10,
						padding: 2,
						color: "white",
						fontWeight: 10000,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography>{name}</Typography>
				</div>
			</Html>
		</mesh>
	);
}
