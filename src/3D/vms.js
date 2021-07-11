import React from "react";
import Model from "./models/VMmodel";
export default function RenderVms({ vms,level3,setHoverNode2 }) {
	var counter = 0;
	return (
		<>
			{vms !== undefined && vms.map((node) => {
				counter++;
				return <Model node={node} key={counter+node.vmName} 
				setHoverNode2 = {setHoverNode2}/>;
			})}
		</>
	);
}
