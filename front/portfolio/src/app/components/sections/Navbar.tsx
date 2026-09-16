"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "blog", label: "Blog" },
	{ id: "contact", label: "Contact" },
];

export function Navbar({
	title,
	resumeUrl,
}: {
	title: string;
	resumeUrl?: string | null;
}) {
	const [active, setActive] = useState("hero");
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const sections = document.querySelectorAll("section[data-nav]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setActive(e.target.id);
				});
			},
			{ threshold: 0.3 },
		);
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};

	return (
		<nav className="fixed top-0 right-0 left-0 z-50 border-b border-garden-500/10 bg-garden-950/80 backdrop-blur-xl backdrop-saturate-[1.8]">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<button
					onClick={() => scrollTo("hero")}
					className="bg-gradient-to-br from-garden-500 to-cyber-500 bg-clip-text font-mono text-lg font-bold text-transparent"
				>
					∴ {title}
				</button>

				<div className="flex items-center gap-5">
					<ul className="hidden items-center gap-8 md:flex">
						{navItems.map((n) => (
							<li key={n.id}>
								<button
									onClick={() => scrollTo(n.id)}
									className={`font-mono text-[13px] uppercase tracking-wider transition-colors duration-300 ${
										active === n.id
											? "border-b-2 border-garden-500 text-garden-500 pb-0.5"
											: "border-b-2 border-transparent text-slate-400 pb-0.5 hover:text-garden-500"
									}`}
								>
									{n.label}
								</button>
							</li>
						))}
					</ul>

					{resumeUrl && (
						<a
							href={resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden rounded-lg border border-garden-500/20 px-3 py-1.5 font-mono text-[12px] text-garden-500 transition-colors hover:bg-garden-500/10 md:inline-block"
						>
							resume ↓
						</a>
					)}

					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="text-garden-500 md:hidden"
					>
						{mobileOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="flex flex-col gap-5 border-t border-garden-500/10 bg-garden-950/95 px-6 py-6 backdrop-blur-xl md:hidden"
					>
						{navItems.map((n) => (
							<button
								key={n.id}
								onClick={() => scrollTo(n.id)}
								className={`font-mono text-left text-base uppercase tracking-wider transition-colors ${
									active === n.id ? "text-garden-500" : "text-slate-400"
								}`}
							>
								{n.label}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
