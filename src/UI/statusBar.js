import { Typography } from "@material-ui/core";
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

export default function StatusBarComp({ statusMsg, errorMsg }) {
	return (
		<div style={{ display: "flex", alignItems: "center", color: "white" }}>
			{errorMsg != null && (
				<>
					<div style={{ paddingLeft: 20, color: "red" }}>
						<ErrorIcon />
					</div>
					<div style={{ paddingLeft: 5, color: "red" }}>
						<Typography>{errorMsg}</Typography>
					</div>
				</>
			)}
			<div style={{ marginLeft: "auto", paddingRight: 20 }}>
				<Typography>{statusMsg}</Typography>
			</div>
		</div>
	);
}
