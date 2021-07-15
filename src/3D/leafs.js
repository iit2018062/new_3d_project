import React from "react";
import CautionModel from "./models/Caution";
import LeafModel from "./models/Leaf";

export default function RenderLeafs({
	leafs,
	focusNodeLevel1,
	setHoverNode,
	selectedNode,
	level3,
	level2leaf,
}) {
	var counter=0;
	if(level2leaf!==undefined && level2leaf.length!==0 && selectedNode!==null && selectedNode.data.nodeRole=="spine")
	{//console.log(level2leaf);
		leafs = level2leaf;
	}
	return (
		<group>
			{leafs.map((node) => {
				const score = node.data.anomalyScore;
				const caution = score > 20 && score <= 100;
				counter++;
				if (
					level3 === false &&
					(selectedNode === null ||
						selectedNode.data.nodeName === node.data.nodeName ||
						(selectedNode.data.fabricLinks !== undefined &&
							selectedNode.data.fabricLinks.find((obj) => {
								if (obj.neighbourNode === node.data.nodeName){
									//flag = 1;
									return true;
								}
								return false;
							})))
				)  {
					return (
						<group key={node.data.serial+counter}>
							{caution && (
								<CautionModel position={node.position} />
							)}
							
							<LeafModel
								nodeData={node}
								focusNodeLevel1={focusNodeLevel1}
								setHoverNode={setHoverNode}
								level3 = {level3}
							/>
						</group>
					);
				} else return null;
			})}
		</group>
	);
}
