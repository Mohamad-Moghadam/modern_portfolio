"use client";

import { GlowCard } from "@/app/components/ui/GlowCard";
import { Tag } from "@/app/components/ui/Tag";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { projects } from "@/app/lib/data";
import { ExternalLink } from "lucide-react";

export function Projects() {
	return (
		<section
			id="projects"
			data-nav="projects"
			className="mx-auto max-w-6xl px-6 py-28"
		>
			<SectionHeading
				pre="Planted"
				highlight="Projects"
				from="#06b6d4"
				to="#10b981"
				subtitle="git log --oneline --all | head -∞"
			/>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{projects.map((proj, i) => (
					<GlowCard key={proj.title} delay={i * 0.1}>
						<span className="absolute right-5 top-4 font-mono text-5xl font-extrabold leading-none text-garden-500/[0.06]">
							0{i + 1}
						</span>

						<div className="mb-3 flex items-center gap-2">
							<span className="text-xl">🌱</span>
							<h3 className="text-xl font-bold text-garden-50">{proj.title}</h3>
						</div>

						<p className="mb-5 text-sm leading-relaxed text-slate-400">
							{proj.desc}
						</p>

						<div className="mb-5 flex flex-wrap gap-2">
							{proj.tech.map((t) => (
								<Tag key={t} color="#06b6d4">
									{t}
								</Tag>
							))}
						</div>

						<a
							href={proj.link}
							className="inline-flex items-center gap-1.5 font-mono text-[13px] text-garden-500 transition-colors hover:text-garden-300"
						>
							View Source <ExternalLink size={14} />
						</a>
					</GlowCard>
				))}
			</div>
		</section>
	);
}
