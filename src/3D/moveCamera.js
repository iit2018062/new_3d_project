import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import React, { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MoveCamera({
	targetPosition,
	targetLookAt,
	setStatusMsg,
}) {
	//setting up tween.js options
	const easing = TWEEN.Easing.Quadratic.InOut;
	//disable orbital camera when animating camera manually
	const [lockCamera, setLockCamera] = useState(false);
	const orbitRef = useRef();

	function animateCamera() {
		//get current lookAt vector of camera
		const temp = new THREE.Vector3(0, 0, -1)
			.applyQuaternion(camera.quaternion)
			.add(camera.position);

		const coords = {
			x: camera.position.x,
			y: camera.position.y,
			z: camera.position.z,
			la: [temp.x, temp.y, temp.z],
		};

		//animation
		new TWEEN.Tween(coords)
			.to({
				x: targetPosition.x,
				y: targetPosition.y,
				z: targetPosition.z,
				la: targetLookAt,
			})
			.easing(easing)
			.onUpdate(() => {
				camera.lookAt(...coords.la);
				camera.position.set(coords.x, coords.y, coords.z);
				camera.updateProjectionMatrix();

				//this will update orbital controls
				//fixes the weird flickering issues
				orbitRef.current.target = new THREE.Vector3(...coords.la);
				orbitRef.current.update();
			})
			.onComplete(() => {
				//resume orbital camera
				setLockCamera(false);
				setStatusMsg("camera moved!");
			})
			.start();
	}
	const {
		camera,
		gl: { domElement },
	} = useThree();

	useFrame(() => {
		TWEEN.update();
	});

	//this will keep look on target position and look at
	//and animate camera to new state whenever they change
	useLayoutEffect(() => {
		if (targetPosition && targetLookAt) {
			setStatusMsg("moving camera...");
			setLockCamera(true);
			animateCamera();
		}
	}, [targetPosition, targetLookAt]);

	return (
		<OrbitControls
			enabled={!lockCamera}
			ref={orbitRef}
			args={[camera, domElement]}
			//limit camera angle
			maxPolarAngle={Math.PI / 2}
		/>
	);
}
