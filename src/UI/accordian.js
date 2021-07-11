import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper } from "@material-ui/core";

export default function DisplayAllNodes({ spines, leafs, focusNodeLevel1 }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	var counter = 0;

	return (
		<div>
			<Accordion
				style={{ background: "none", color: "white" }}
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography>Spines</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ display: "block" }}>
					{spines.map((spine) => {
						counter++;
						return (
							<Paper
								key={counter+spine.data.serial}
								style={{
									cursor: "pointer",
									padding: 5,
									marginBottom: 10,
									width: "100%",
									background: "none",
									color: "white",
								}}
								onClick={() => {
									focusNodeLevel1(spine);
								}}
							>
								<Typography>{spine.data.nodeName}</Typography>
							</Paper>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion
				style={{ background: "none", color: "white" }}
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography>Leafs</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ display: "block" }}>
					{leafs.map((leaf) => {
						counter++;
						return (
							<Paper
								key={counter}
								style={{
									cursor: "pointer",
									padding: 5,
									marginBottom: 10,
									width: "100%",
									background: "none",
									color: "white",
								}}
								onClick={() => {
									focusNodeLevel1(leaf);
								}}
							>
								<Typography>{leaf.data.nodeName}</Typography>
							</Paper>
						);
					})}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
