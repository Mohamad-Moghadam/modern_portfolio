"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);

	const spring = { damping: 28, stiffness: 400, mass: 0.5 };
	const x = useSpring(mouseX, spring);
	const y = useSpring(mouseY, spring);

	const [hovering, setHovering] = useState(false);
	const [clicking, setClicking] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const move = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
			setVisible(true);
		};

		const over = (e: MouseEvent) => {
			if ((e.target as HTMLElement).closest("button, a, [data-cursor-hover]"))
				setHovering(true);
		};

		const out = (e: MouseEvent) => {
			if ((e.target as HTMLElement).closest("button, a, [data-cursor-hover]"))
				setHovering(false);
		};

		const down = () => setClicking(true);
		const up = () => setClicking(false);
		const leave = () => setVisible(false);
		const enter = () => setVisible(true);

		window.addEventListener("mousemove", move);
		window.addEventListener("mouseover", over);
		window.addEventListener("mouseout", out);
		window.addEventListener("mousedown", down);
		window.addEventListener("mouseup", up);
		document.addEventListener("mouseleave", leave);
		document.addEventListener("mouseenter", enter);

		return () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseover", over);
			window.removeEventListener("mouseout", out);
			window.removeEventListener("mousedown", down);
			window.removeEventListener("mouseup", up);
			document.removeEventListener("mouseleave", leave);
			document.removeEventListener("mouseenter", enter);
		};
	}, [mouseX, mouseY]);

	return (
		<>
			{/* Inner dot — follows mouse instantly, hides when hovering interactive */}
			<motion.div
				className="pointer-events-none fixed z-[100] rounded-full"
				style={{ left: mouseX, top: mouseY }}
				animate={{
					x: clicking ? -3 : -4,
					y: clicking ? -3 : -4,
					width: clicking ? 6 : 8,
					height: clicking ? 6 : 8,
					opacity: visible && !hovering ? 1 : 0,
					scale: hovering ? 0 : 1,
				}}
				transition={{ duration: 0.12 }}
			>
				<div className="h-full w-full rounded-full bg-garden-300 mix-blend-difference" />
			</motion.div>

			{/* Outer ring — follows with spring lag */}
			<motion.div
				className="pointer-events-none fixed z-[99] rounded-full"
				style={{ left: x, top: y }}
				animate={{
					width: hovering ? 60 : clicking ? 28 : 40,
					height: hovering ? 60 : clicking ? 28 : 40,
					x: hovering ? -30 : clicking ? -14 : -20,
					y: hovering ? -30 : clicking ? -14 : -20,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					width: { type: "spring", damping: 22, stiffness: 280 },
					height: { type: "spring", damping: 22, stiffness: 280 },
					x: { type: "spring", damping: 22, stiffness: 280 },
					y: { type: "spring", damping: 22, stiffness: 280 },
					opacity: { duration: 0.2 },
				}}
			>
				<motion.div
					className="h-full w-full rounded-full"
					animate={{
						borderColor: hovering
							? "rgba(6, 182, 212, 0.5)"
							: "rgba(16, 185, 129, 0.35)",
						backgroundColor: hovering
							? "rgba(16, 185, 129, 0.06)"
							: "rgba(16, 185, 129, 0.02)",
						borderWidth: hovering ? 2 : 1.5,
					}}
					transition={{ duration: 0.25 }}
					style={{ borderStyle: "solid" }}
				/>
			</motion.div>
		</>
	);
}
