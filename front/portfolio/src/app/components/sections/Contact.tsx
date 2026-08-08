"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Rss } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { siteConfig } from "@/app/lib/data";

const links = [
	{ label: "GitHub", icon: Github, href: siteConfig.github },
	{ label: "LinkedIn", icon: Linkedin, href: siteConfig.linkedin },
	{ label: "Email", icon: Mail, href: `mailto:${siteConfig.email}` },
	{ label: "RSS", icon: Rss, href: "#" },
];

export function Contact() {
	return (
		<section
			id="contact"
			data-nav="contact"
			className="mx-auto max-w-6xl px-6 py-28 text-center"
		>
			<SectionHeading
				pre="Open a"
				highlight="Connection"
				from="#10b981"
				to="#06b6d4"
			/>

			<motion.p
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mx-auto mb-8 max-w-md text-base leading-relaxed text-slate-400"
			>
				Like a socket awaiting a handshake, I&apos;m always listening for new
				connections. Let&apos;s build something beautiful together.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1 }}
				className="mb-10 inline-block rounded-xl border border-garden-500/15 bg-garden-500/[0.06] px-7 py-4 font-mono text-sm text-garden-500"
			>
				ping -c 1 garden.dev → 64 bytes, ttl=∞
			</motion.div>

			<div className="flex flex-wrap justify-center gap-4">
				{links.map((link, i) => {
					const Icon = link.icon;
					return (
						<motion.a
							key={link.label}
							href={link.href}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.15 + i * 0.08 }}
							whileHover={{
								y: -2,
								borderColor: "#10b981",
								color: "#10b981",
								backgroundColor: "rgba(16,185,129,0.1)",
							}}
							className="inline-flex items-center gap-2 rounded-xl border border-garden-500/12 bg-garden-500/[0.05] px-5 py-3 font-mono text-[13px] text-slate-300 transition-colors duration-300"
						>
							<Icon size={16} />
							{link.label}
						</motion.a>
					);
				})}
			</div>
		</section>
	);
}
