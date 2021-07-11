import React from "react";
import EndpointModel from "./models/Endpoint";
export default function RenderEndpoints({ endpoints,level3,setHoverNode3 }) {
	var counter = 0;
	return (
		<>
			{endpoints !== undefined && endpoints.map((node) => {
				counter++;
				return (
					<EndpointModel
						node={node}
						key={counter+node.position}
						setHoverNode3 = {setHoverNode3}
					/>
				);
			})}
		</>
	);
}
