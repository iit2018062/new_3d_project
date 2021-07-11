import React from "react";
import CautionModel from "./models/Caution";
import LeafModel from "./models/Leaf";
import TickModel from "./models/Tick";
import SpineModel from "./models/Spine";

export default function Renderlevel3({
	level3nodes,
	focusNodeLevel1,
	setHoverNode,
	selectedNode,
	level3,
}) {
	var counter = 0;
    //console.log(level3nodes);
	return (
		<group>
			{level3nodes.map((node) => {
				// const score = node.data.anomalyScore;
				// const tick = score < 20 && score >= 0;
				// const caution = score > 20 && score <= 100;
				counter++;
				if (level3 === true) {
					if (
						node.data.nodeRole === "leaf" 
						
					) {
						return (
							<group key={counter}>
								{/* {caution && (
									<CautionModel position={node.position} />
								)}
								{tick && <TickModel position={node.position} />} */}
								<LeafModel
									nodeData={node}
									focusNodeLevel1={focusNodeLevel1}
									setHoverNode={setHoverNode}
									level3 = {level3}
								/>
							</group>
						);
					} else if (
						node.data.nodeRole === "spine" 
					) {
						//console.log(node.data.nodeName);
						return (
							<group key={counter}>
								{/* {tick && <TickModel position={node.position} />}
								{caution && (
									<CautionModel position={node.position} />
								)} */}
								<SpineModel
									setHoverNode={setHoverNode}
									nodeData={node}
									focusNodeLevel1={focusNodeLevel1}
									level3 = {level3}
								/>
							</group>
						);
					}
				} else return null;
			})}
		</group>
	);
}
