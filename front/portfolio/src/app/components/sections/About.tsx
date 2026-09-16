"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/app/components/ui/TerminalCard";
import { Tag } from "@/app/components/ui/Tag";

export function About({
	profile,
	description,
}: {
	profile: {
		name: string;
		role: string;
		location: string;
		education: string;
		experience: string;
	};
	description: string;
}) {
	const lines = [
		{ key: "name", value: profile.name },
		{ key: "role", value: profile.role },
		{ key: "location", value: profile.location },
		{ key: "education", value: profile.education },
		{ key: "experience", value: profile.experience },
	].filter((l) => l.value);

	const paragraphs = description.split(/\n{2,}/).filter(Boolean);

	return (
		<section
			id="about"
			data-nav="about"
			className="mx-auto max-w-6xl px-6 py-28"
		>
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<TerminalCard
					title="about.sh"
					lines={lines}
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

					{paragraphs.map((p, i) => (
						<p
							key={i}
							className={`text-base leading-relaxed text-slate-400 ${
								i === 0 ? "mt-5" : "mt-4"
							}`}
						>
							{p}
						</p>
					))}
					{paragraphs.length === 0 && (
						<p className="mt-5 text-base leading-relaxed text-slate-400">
							Add a description in the Django admin to fill this space.
						</p>
					)}

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
