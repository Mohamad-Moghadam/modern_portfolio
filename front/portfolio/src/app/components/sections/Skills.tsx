"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { skills } from "@/app/data";

export function Skills() {
	return (
		<section
			id="skills"
			data-nav="skills"
			className="mx-auto max-w-6xl px-6 py-28"
		>
			<SectionHeading
				pre="Tools in the"
				highlight="Shed"
				from="#10b981"
				to="#a855f7"
				subtitle={`$ ls ~/toolchain | wc -l → ${skills.length}`}
			/>

			<div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,140px),1fr))] gap-4">
				{skills.map((skill, i) => (
					<motion.div
						key={skill.name}
                        data-cursor-hover
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						whileHover={{
							y: -4,
							borderColor: `${skill.color}40`,
							backgroundColor: `${skill.color}0a`,
						}}
						className="cursor-default rounded-xl border border-garden-500/[0.08] bg-garden-500/[0.03] px-4 py-5 text-center transition-colors duration-300"
					>
						<div className="mb-2 text-2xl">{skill.icon}</div>
						<div className="font-mono text-[13px] font-semibold text-slate-300">
							{skill.name}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
