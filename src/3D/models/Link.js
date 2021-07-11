//import { FormatListBulletedRounded } from "@material-ui/icons";
import { CubicBezierLine } from "@react-three/drei";

export default function LinkModel({ link }) {
	const midA = [link.src[0], link.target[1], link.src[2]];
	const midB = [link.target[0], link.src[1], link.target[2]];
	return (
		<CubicBezierLine
			start={link.src} // Starting point
			end={link.target} // Ending point
			midA={midA}
			midB={midB}
			// color="white"
			color={link.color || "yellow"}
			lineWidth={0.5}
			dashed={false}
			dashScale={2}
			dashSize={8}
		/>
	);
}
