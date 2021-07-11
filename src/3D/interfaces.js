import React from "react";

import InterfaceModel from "./models/interfac1";

export default function RenderInterfaces({
	interfaces,
	level3,
	setHoverNode1,
	focusNodeLevel2,
	selectedNode,
}) {
	// useEffect(() => {
// console.log(interfaces);
// console.log(level3);
	// }, [interfaces]);
	var counter = 1;

	return (
		<>
			{((level3===true || selectedNode !== null) &&
				(interfaces !== undefined)) &&
				interfaces.map((node) => {
					counter++;
					return (
						<group
							key={
								
								node.data.sourceName +
								counter+node.position
							}
						>
							<InterfaceModel
								node={node}
								setHoverNode1={setHoverNode1}
								focusNodeLevel2={focusNodeLevel2}
								
							/>
						</group>
					);
				})}
		</>
	);
}
