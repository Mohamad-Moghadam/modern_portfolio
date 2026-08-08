"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

export function GlowCard({
	children,
	className = "",
	delay = 0,
}: GlowCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.5, delay }}
			whileHover={{
				y: -4,
				boxShadow: "0 20px 60px rgba(16,185,129,0.08)",
				borderColor: "rgba(16,185,129,0.2)",
			}}
			className={`relative overflow-hidden rounded-2xl border border-garden-500/[0.08] bg-garden-500/[0.03] p-8 transition-colors duration-300 ${className}`}
		>
			{children}
		</motion.div>
	);
}
