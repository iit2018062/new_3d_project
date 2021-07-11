import React from "react";

export default function Lights() {
	return (
		<>
			<ambientLight intensity={0.3} />
			<directionalLight intensity={0.3} />
			<pointLight position={[-10, 40, -20]} intensity={2} />
			<pointLight position={[0, -10, 10]} intensity={1.5} />
		</>
	);
}
