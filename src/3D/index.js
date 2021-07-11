import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import RenderEndpoints from "./endpoints";
import RenderInterfaces from "./interfaces";
import RenderLeafs from "./leafs";
import Lights from "./light";
import RenderLinks from "./links";
import LoadingModel from "./models/Loading";
import MoveCamera from "./moveCamera";
import RenderSpines from "./spines";
import RenderVms from "./vms";
import Renderlevel3 from "./level3";
import RenderLinks1 from "./level3links";

export default function Main3DComp({
	setStatusMsg,
	targetPosition,
	targetLookAt,
	focusNodeLevel1,
	leafs,
	spines,
	links,
	setHoverNode,
	selectedNode,
	interfaces,
	interfaceLink,
	endpoints,
	vms,
	level3,
	level3details,
	level3nodes,
	setHoverNode1,
	focusNodeLevel2,
	setHoverNode2,
	setHoverNode3,
	level2spine,
	level2leaf,
}) {
	// console.log(level3);
	// console.log(level3details);
	// console.log(level3nodes);
	// console.log(endpoints);
	// console.log(vms);
	return (
		<Canvas>
			{/* lights */}
			<Lights />
			<fog attach="fog" args={["black", 10, 200]} />
			<gridHelper args={[400, 400, `red`, `blue`]} />
			<Suspense fallback={null}>
				<MoveCamera
					targetPosition={targetPosition}
					targetLookAt={targetLookAt}
					setStatusMsg={setStatusMsg}
				/>
			</Suspense>
			<Suspense fallback={null}>
				{!(spines.length && leafs.length) && <LoadingModel />}
			</Suspense>{" "}
			<Suspense fallback={null}>
				<RenderSpines
					spines={spines}
					focusNodeLevel1={focusNodeLevel1}
					setHoverNode={setHoverNode}
					selectedNode={selectedNode}
					level3 = {level3}
					level2spine = {level2spine}
				/>
			</Suspense>{" "}
			<Suspense fallback={null}>
				<RenderLeafs
					leafs={leafs}
					focusNodeLevel1={focusNodeLevel1}
					setHoverNode={setHoverNode}
					selectedNode={selectedNode}
					level3 = {level3}
					level2leaf = {level2leaf}
					
				/>
			</Suspense>
			<Suspense fallback={null}>
				<RenderLinks links={links} selectedNode={selectedNode}
				level3 = {level3} />
			</Suspense>
			<Suspense fallback={null}>
				<RenderLinks links={interfaceLink} selectedNode={null} 
				level3 = {level3}/>
			</Suspense>
			<Suspense fallback={null}>
				<RenderInterfaces interfaces={interfaces}
				level3 = {level3}
				setHoverNode1={setHoverNode1}
				focusNodeLevel2 ={focusNodeLevel2}
				selectedNode = {selectedNode}
				 />
			</Suspense>
			<Suspense fallback={null}>
				<RenderEndpoints endpoints={endpoints}
				level3 = {level3}
				setHoverNode3 = {setHoverNode3} />
			</Suspense>
			<Suspense fallback={null}>
				<RenderVms vms={vms} 
				level3 = {level3}
				setHoverNode2 = {setHoverNode2}/>
			</Suspense>
			<Suspense fallback={null}>
				<Renderlevel3 
				level3nodes = {level3nodes}
				focusNodeLevel1 = {focusNodeLevel1}
				setHoverNode = {setHoverNode}
				selectedNode = {selectedNode}
				level3 = {level3}
				/>
			</Suspense>
			<Suspense fallback={null}>
				<RenderLinks1 links={interfaceLink} selectedNode={null} 
				level3 = {level3}/>
			</Suspense>
		</Canvas>
	);
}
