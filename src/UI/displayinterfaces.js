import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper } from "@material-ui/core";

export default function DisplayAllNodes1({
	interfaces,
	isinterface,
	focusNodeLevel2,
	selectedNode,
	level3,
}) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	var counter =0;
	if (isinterface === true) {

		return (
			<div>
				<Accordion
					style={{ background: "none", color: "white" }}
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						expandIcon={
							<ExpandMoreIcon style={{ color: "white" }} />
						}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography>Interfaces</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ display: "block" }}>
						{(selectedNode!==null||level3===true) && interfaces.map((interface1) => {
							counter++;
							return (
								<Paper
									key={interface1.data.sourceNameLabel+counter+interface1.data.sourceName}
									style={{
										cursor: "pointer",
										padding: 5,
										marginBottom: 10,
										width: "100%",
										background: "none",
										color: "white",
									}}
									onClick={() => {
										focusNodeLevel2(interface1);
									}}
								>
									<Typography>
										{interface1.data.sourceNameLabel}
									</Typography>
								</Paper>
							);
						})}
					</AccordionDetails>
				</Accordion>
			</div>
		);
	} else return null;
}
