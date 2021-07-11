import React from "react";
import CautionModel from "./models/Caution";
import SpineModel from "./models/Spine";
import TickModel from "./models/Tick";

export default function RenderSpines({
	spines,
	focusNodeLevel1,
	setHoverNode,
	selectedNode,
	level3,
	level2spine,
}) {
	
	
	if(level2spine!==undefined && level2spine.length!==0 && selectedNode!==null )
	{//console.log(level2spine);
		spines = level2spine;
	}
	var count=0;
	return (
		<group>

			
			{spines.map((node) => {
				const score = node.data.anomalyScore;
				const tick = score < 20 && score >= 0;
				const caution = score > 20 && score <= 100;
				var flag  = 0;
				if (
					level3 === false &&
					(selectedNode === null ||
						selectedNode.data.nodeName === node.data.nodeName ||
						(selectedNode.data.fabricLinks !== undefined &&
							selectedNode.data.fabricLinks.find((obj) => {
								if (obj.neighbourNode === node.data.nodeName){
									flag = 1;
									return true;
								}
								return false;
							})))
				) {
					count++;
					return (
						<group key={node.data.serial+score+count}>
						
							{caution && (
								<CautionModel position={node.position} />
							)}
							<SpineModel
								setHoverNode={setHoverNode}
								nodeData={node}
								focusNodeLevel1={focusNodeLevel1}
								flag = {flag}
								level3 = {level3}
								

								
								
							/>
						</group>
					);
				} else return null;
			})}
		</group>
	);
}
