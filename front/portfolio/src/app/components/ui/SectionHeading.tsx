"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
	pre: string;
	highlight: string;
	post?: string;
	subtitle?: string;
	from?: string;
	to?: string;
}

export function SectionHeading({
	pre,
	highlight,
	post = "",
	subtitle,
	from = "#10b981",
	to = "#06b6d4",
}: SectionHeadingProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="mb-16 text-center"
		>
			<h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight">
				<span className="text-garden-50">{pre}</span>{" "}
				<span
					className="bg-clip-text text-transparent"
					style={{
						backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
					}}
				>
					{highlight}
				</span>{" "}
				{post && <span className="text-garden-50">{post}</span>}
			</h2>
			{subtitle && (
				<p className="mt-3 font-mono text-sm text-slate-500">{subtitle}</p>
			)}
		</motion.div>
	);
}
