import { Grid, Paper, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import DisplayAllNodes from "./accordian";
import DisplayAllNodes1 from "./displayinterfaces.js";

export default function SideBarComp({
	resetCamera,
	leafs,
	spines,
	reloadLevel1,
	focusNodeLevel1,
	level3call,
	focusNodeLevel2,
	interfaces,
	isinterface,
	level3,
	level3leaf,
	level3spine,
	selectedNode,

}) {
	const [searchTerm, setSearchTerm] = useState("");
	function handleSearchSubmit() {
		const tempCombined = [...leafs, ...spines];
		const nodeIndex = tempCombined
			.map((node) => node.data.nodeName)
			.indexOf(searchTerm);
		const interfaceindex = interfaces
			.map((node) => node.data.sourceNameLabel)
			.indexOf(searchTerm);
		if (nodeIndex >= 0 && nodeIndex < tempCombined.length) {
			focusNodeLevel1(tempCombined[nodeIndex]);
		} else if (interfaceindex >= 0 && interfaceindex < interfaces.length) {
			focusNodeLevel2(interfaces[interfaceindex]);
		} else {
			level3call(searchTerm);
		}
		setSearchTerm("");
	}
	if (level3 === true) {
		spines = level3spine;
		leafs = level3leaf;
	}
	//console.log(interfaces);
	return (
		<div style={{ padding: 40, color: "white" }}>
			<Grid container direction="column" spacing={2}>
				<Grid
					item
					style={{
						display: "flex",
						alignItems: "center",
						justifyItems: "center",
					}}
				>
					<Paper style={{ width: "100%" }}>
						<TextField
							color="secondary"
							fullWidth
							variant="outlined"
							placeholder="Search "
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>{" "}
					</Paper>
					<Button
						color="secondary"
						variant="contained"
						style={{ height: "56px", marginLeft: 10 }}
						disableElevation
						onClick={handleSearchSubmit}
					>
						<Search fontSize="large" />
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" fullWidth onClick={resetCamera}>
						Back
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						fullWidth
						onClick={reloadLevel1}
					>
						Show Fabric Topology
					</Button>
				</Grid>
				<Grid item>
					<DisplayAllNodes
						spines={spines}
						leafs={leafs}
						focusNodeLevel1={focusNodeLevel1}
					/>
					{interfaces !== undefined && interfaces.length !== 0 && (
						<DisplayAllNodes1
							interfaces={interfaces}
							isinterface={isinterface}
							focusNodeLevel2={focusNodeLevel2}
							selectedNode={selectedNode}
							level3 = {level3}
						/>
					)}
				</Grid>
			</Grid>
		</div>
	);
}
