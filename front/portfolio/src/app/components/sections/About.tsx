"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/app/components/ui/TerminalCard";
import { Tag } from "@/app/components/ui/Tag";
import { siteConfig } from "@/app/data";

export function About() {
	return (
		<section
			id="about"
			data-nav="about"
			className="mx-auto max-w-6xl px-6 py-28"
		>
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<TerminalCard
					title="about.sh"
					lines={[
						{ key: "name", value: siteConfig.name },
						{ key: "role", value: siteConfig.role },
						{ key: "location", value: siteConfig.location },
						{ key: "education", value: siteConfig.education },
						{ key: "experience", value: siteConfig.experience },
					]}
					comment="where code meets cultivation 🌿"
				/>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight">
						<span className="text-garden-50">Growing</span>{" "}
						<span className="bg-gradient-to-br from-garden-500 to-cyber-500 bg-clip-text text-transparent">
							Software
						</span>{" "}
						<span className="text-garden-50">from Seed to Tree</span>
					</h2>
					<p className="mt-5 text-base leading-relaxed text-slate-400">
						I&apos;m a computer scientist who believes the best code, like the
						best gardens, requires patience, intention, and a deep understanding
						of the soil it grows in. From low-level systems programming to
						building delightful user interfaces, I tend every layer of the
						stack.
					</p>
					<p className="mt-4 text-base leading-relaxed text-slate-400">
						When I&apos;m not writing code, I&apos;m writing about code —
						exploring how computational thinking mirrors natural processes, and
						how the elegance of a well-pruned algorithm rivals any botanical
						arrangement.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						{[
							"Open Source",
							"Systems Design",
							"Developer Experience",
							"Technical Writing",
						].map((t) => (
							<Tag key={t}>{t}</Tag>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
