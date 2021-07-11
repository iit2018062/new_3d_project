import { Paper, Typography } from "@material-ui/core";
import React from "react";

export default function NodePopUp({ nodeData,isinterface}) {
	//var c=0;
	return (
		<>
			{" "}
			{ nodeData != null && nodeData.spineinterface===undefined && (
				
				<Paper
					style={{
						backgroundColor: "rgba(0,0,0,0.3)",
						color: "white",
						padding: 10,
					}}
				>
					<table
						border="4"
						cellPadding="2"
						cellSpacing="2"
						bordercolor="white"
						bgcolor="transparent"
						opacity={0.2}
						className='table'
					><thead><tr style={{textAlign:"right",verticalAlign:"middle"}}><strong>   Node</strong></tr></thead><tbody>
								<tr key={nodeData.data.nodeName}><td>Name:</td><td key={nodeData.data.nodeName+"$"}>{nodeData.data.nodeName}</td></tr>
								<tr key={nodeData.data.nodeName+"@@@"}><td>Anomaly Score:</td><td key={nodeData.data.nodeName+"@"}>{nodeData.data.anomalyScore}</td></tr>
								<tr key={nodeData.data.nodeName+"@~~"}><td>Role:</td><td key={nodeData.data.nodeName+"~"}>{nodeData.data.nodeRole}</td></tr>
								<tr key={nodeData.data.nodeName+"@1~"}><td>Serial:</td><td key={nodeData.data.nodeName+"%"}>{nodeData.data.serial}</td></tr>
								<tr key={nodeData.data.nodeName+"@2~"}><td>Version:</td><td key={nodeData.data.nodeName+"*"}>{nodeData.data.version}</td></tr>
								<tr key={nodeData.data.nodeName+"@3~"}><td>Model:</td><td key={nodeData.data.nodeName+"&"}>{nodeData.data.model}</td></tr></tbody></table>
					
				
				</Paper>
			)}
			{nodeData != null && nodeData.spineinterface!==undefined &&  (
				<Paper
					style={{
						backgroundColor: "rgba(0,0,0,0.3)",
						color: "white",
						padding: 10,
					}}
				>
					<table
						border="4"
						cellPadding="2"
						cellSpacing="2"
						bordercolor="white"
						bgcolor="transparent"
						opacity={0.2}
						className='table'
					><thead><tr style={{textAlign:"right",verticalAlign:"middle"}}><strong>   Node</strong></tr></thead><tbody>
								<tr key={nodeData.data.nodeName}><td>Name:</td><td key={nodeData.data.nodeName+"$"}>{nodeData.data.nodeName}</td></tr>
								<tr key={nodeData.data.nodeName+"@@@"}><td>Anomaly Score:</td><td key={nodeData.data.nodeName+"@"}>{nodeData.data.anomalyScore}</td></tr>
								<tr key={nodeData.data.nodeName+"@~~"}><td>Role:</td><td key={nodeData.data.nodeName+"~"}>{nodeData.data.nodeRole}</td></tr>
								<tr key={nodeData.data.nodeName+"@1~"}><td>Serial:</td><td key={nodeData.data.nodeName+"%"}>{nodeData.data.serial}</td></tr>
								<tr key={nodeData.data.nodeName+"@2~"}><td>Version:</td><td key={nodeData.data.nodeName+"*"}>{nodeData.data.version}</td></tr>
								<tr key={nodeData.data.nodeName+"@3~"}><td>Model:</td><td key={nodeData.data.nodeName+"&"}>{nodeData.data.model}</td></tr>
								<tr key={nodeData.data.nodeName+"@4~"}><td>Interface:</td><td key={nodeData.data.nodeName+"&"}>{nodeData.leafinterface}</td></tr>
								<tr key={nodeData.data.nodeName+"@5~"}><td>Neighbour Interface:</td><td key={nodeData.data.nodeName+"&"}>{nodeData.spineinterface}</td></tr></tbody></table>
					
					
				</Paper>
			)}
		</>
	);
}
