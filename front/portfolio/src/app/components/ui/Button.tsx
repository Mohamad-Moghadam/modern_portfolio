"use client";

import { motion } from "framer-motion";

interface ButtonProps {
	variant?: "primary" | "ghost";
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export function Button({
	variant = "primary",
	children,
	onClick,
	className = "",
}: ButtonProps) {
	const base =
		"inline-flex items-center gap-2 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer";

	const variants = {
		primary:
			"bg-gradient-to-br from-garden-500 to-cyber-500 text-garden-950 hover:shadow-[0_12px_40px_rgba(16,185,129,0.3)]",
		ghost:
			"bg-transparent text-garden-500 border border-garden-500/30 hover:bg-garden-500/10 hover:border-garden-500",
	};

	return (
		<motion.button
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.97 }}
			className={`${base} ${variants[variant]} px-7 py-3 ${className}`}
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
