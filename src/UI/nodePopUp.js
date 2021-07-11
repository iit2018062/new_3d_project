import {  Typography } from "@material-ui/core";
import React from "react";

export default function NodePopUp1({ nodeData }) {
	var plist=[];
	(nodeData!==null && nodeData.data.protocolList!==undefined && nodeData.data.protocolList!==null && nodeData.data.protocolList.map((protocol) => {
				plist.push(protocol);
				plist.push(" ,");
			}))
	if(plist!==undefined  && plist!==null)
	{
		plist.pop();
	}
	 if(nodeData!==null && nodeData.data.protocolList===undefined)
	{
		//alert("hello");
		plist.push("None");
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
					><thead><tr style={{textAlign:"right",verticalAlign:"middle"}}><strong>   Interface</strong></tr></thead><tbody>
								<tr key={nodeData.data.sourceNameLabel}><td>Name:</td><td key={nodeData.data.sourceNameLabel+"$"}>{nodeData.data.sourceNameLabel}</td></tr>
								<tr key={nodeData.data.sourceNameLabel+"@@@"}><td>Admin Status:</td><td key={nodeData.data.sourceNameLabel+"@"}>{nodeData.data.adminStatus}</td></tr>
								<tr key={nodeData.data.sourceNameLabel+"@~~"}><td>Protocols Enabled:</td><td key={nodeData.data.sourceNameLabel+"~"}>{plist}</td></tr>
								<tr key={nodeData.data.sourceNameLabel+"@1~"}><td>Anomaly Score:</td><td key={nodeData.data.sourceNameLabel+"%"}>{nodeData.data.anomalyScore}</td></tr>
								<tr key={nodeData.data.sourceNameLabel+"@2~"}><td>InterfaceType:</td><td key={nodeData.data.sourceNameLabel+"*"}>{nodeData.data.interfaceType}</td></tr></tbody></table>
				</div>
			)}
		</>
	);
}