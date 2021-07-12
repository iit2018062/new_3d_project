import {  Typography } from "@material-ui/core";
import React from "react";

export default function NodePopUp2({ nodeData }) {
	var hypervisor=[];
	(nodeData!==undefined && nodeData!==null &&nodeData.hypervisor!==undefined && nodeData.hypervisor!==null && nodeData.hypervisor.map((h) => {
		hypervisor.push(h);
		hypervisor.push(" ,");
	}))
	if(hypervisor!==undefined && hypervisor!==null){
	hypervisor.pop();
	}
	return (
		<>
			{" "}
			{nodeData != null && (
				<div
					style={{
						backgroundColor: "rgba(0,0,0,0.2)",
						backdropFilter: "blur(5px)",
						color: "white",
						padding: 10,
					}}
				><table
						border="4"
						cellPadding="2"
						cellSpacing="2"
						bordercolor="white"
						bgcolor="transparent"
						opacity={0.2}
						className='table'
					><thead><tr style={{textAlign:"right",verticalAlign:"middle"}}><strong>   VM Name</strong></tr></thead><tbody>
								<tr key={nodeData.data.epg}><td>Epg:</td><td key={nodeData.data.epg+"$"}>{nodeData.data.epg}</td></tr>
								<tr key={nodeData.data.epg+"@@@"}><td>Tenant:</td><td key={nodeData.data.epg+"@"}>{nodeData.data.tenant}</td></tr>
								<tr key={nodeData.data.epg+"@2~"}><td>Hypervisor:</td><td key={nodeData.data.epg+"*"}>{hypervisor}</td></tr></tbody></table>
				
				</div>
			)}
		</>
	);
}