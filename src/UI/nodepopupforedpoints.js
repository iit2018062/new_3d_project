import {  Typography } from "@material-ui/core";
import React from "react";

export default function NodePopUp3({ nodeData }) {
	var ip=[];
	(nodeData!==undefined && nodeData!==null && nodeData.data.ip!==undefined && nodeData.data.ip!==null && nodeData.data.ip.map((protocol) => {
		ip.push(protocol);
		ip.push(" ,");
	}))
	if(ip!==undefined && ip!==null){
	ip.pop();}
	var hypervisor=[];
	(nodeData!==undefined && nodeData!==null &&nodeData.data.hypervisor!==undefined && nodeData.data.hypervisor!==null && nodeData.data.hypervisor.map((h) => {
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
				>
					<table
						border="4"
						cellPadding="2"
						cellSpacing="2"
						bordercolor="white"
						bgcolor="transparent"
						opacity={0.2}
						className='table'
					><thead><tr style={{textAlign:"right",verticalAlign:"middle"}}><strong>   Endpoint</strong></tr></thead><tbody>
								<tr key={nodeData.data.mac}><td>Tenant:</td><td key={nodeData.data.mac+"$"}>{nodeData.data.tenant}</td></tr>
								<tr key={nodeData.data.mac+"@@@"}><td>IP:</td><td key={nodeData.data.mac+"@"}>{ip}</td></tr>
								<tr key={nodeData.data.mac+"@~~"}><td>Mac:</td><td key={nodeData.data.mace+"~"}>{nodeData.data.mac}</td></tr>
								<tr key={nodeData.data.mac+"@1~"}><td>VM Name:</td><td key={nodeData.data.mac+"%"}>{nodeData.data.vmName}</td></tr>
								<tr key={nodeData.data.mac+"@2~"}><td>Hypervisor:</td><td key={nodeData.data.mac+"*"}>{hypervisor}</td></tr>
								<tr key={nodeData.data.mac+"@3~"}><td>Bd:</td><td key={nodeData.data.mac+"&"}>{nodeData.data.displayBd}</td></tr>
								<tr key={nodeData.data.mac+"@4~"}><td>Vrf:</td><td key={nodeData.data.mac+"&"}>{nodeData.data.displayVrf}</td></tr></tbody></table>
					
					{/* <Typography>
                    anomalyScore : {nodeData.data.anomalyScore}
					</Typography>
					<Typography>
                    mac : {nodeData.data.mac}
					</Typography>
					<Typography>
                    tenant : {nodeData.data.tenant}
					</Typography>
					<Typography>
					ip :{" "}
						{
						//if(nodeData.data.protocolList!==undefined){
						(nodeData.data.ip!==undefined && nodeData.data.ip.map((protocol) => {
							return `${protocol}${", "} `;
						}))}
					</Typography>
					
					<Typography>
					displayBd:{nodeData.data.displayBd}
					</Typography>
					<Typography>
					displayVrf:{nodeData.data.displayVrf}
					</Typography>
					<Typography>
					hypervisor :{" "}
						{
						//if(nodeData.data.protocolList!==undefined){
						(nodeData.data.hypervisor!==undefined && nodeData.data.hypervisor.map((hypervisor) => {
							return `${hypervisor}${", "} `;
						}))}
					</Typography> */}
					
				</div>
			)}
		</>
	);
}