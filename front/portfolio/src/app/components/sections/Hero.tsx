"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";

export function Hero() {
	const fullText = 'console.garden("hello, world 🌱")';
	const [typed, setTyped] = useState("");

	useEffect(() => {
		let i = 0;
		const iv = setInterval(() => {
			setTyped(fullText.slice(0, i + 1));
			i++;
			if (i >= fullText.length) clearInterval(iv);
		}, 55);
		return () => clearInterval(iv);
	}, []);

	const scrollTo = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="hero"
			data-nav="hero"
			className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-40"
		>
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
				viewBox="0 0 1200 800"
			>
				<defs>
					<linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#10b981" />
						<stop offset="100%" stopColor="#06b6d4" />
					</linearGradient>
				</defs>
				<path
					d="M0 400H200l50-50H450l50-50H700l50 50H950l50 50H1200"
					stroke="url(#cg)"
					strokeWidth="1.5"
					fill="none"
				/>
				<path
					d="M100 0V200l50 50V450l-50 50V800"
					stroke="url(#cg)"
					strokeWidth="1"
					fill="none"
				/>
				<path
					d="M900 0V150l50 50V500l-50 50V800"
					stroke="url(#cg)"
					strokeWidth="1"
					fill="none"
				/>
				<circle cx="250" cy="350" r="4" fill="#10b981" />
				<circle cx="500" cy="300" r="4" fill="#10b981" />
				<circle cx="750" cy="350" r="4" fill="#06b6d4" />
				<circle cx="1000" cy="400" r="4" fill="#06b6d4" />
			</svg>

			<div className="relative z-10 mx-auto max-w-6xl">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-6 font-mono text-[13px] uppercase tracking-[0.15em] text-garden-500"
				>
					─── root@garden ~ ./initialize.sh
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="text-[clamp(40px,7vw,80px)] font-extrabold leading-[1.05]"
				>
					<span className="text-garden-50">Cultivating</span>
					<br />
					<span className="bg-gradient-to-br from-garden-500 via-cyber-500 to-vine-500 bg-clip-text text-transparent">
						Digital Gardens
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mt-4 min-h-[28px] font-mono text-[clamp(14px,2vw,18px)] text-slate-500"
				>
					<span className="text-garden-500">❯</span> {typed}
					<span className="animate-blink text-garden-500">▌</span>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					className="mt-4 max-w-[600px] text-[clamp(16px,1.8vw,20px)] leading-relaxed text-slate-400"
				>
					Full-stack engineer crafting elegant systems where code grows like
					well-tended gardens — rooted in fundamentals, branching into
					innovation.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1 }}
					className="mt-10 flex flex-wrap gap-4"
				>
					<Button onClick={() => scrollTo("projects")}>
						Explore My Garden ⟶
					</Button>
					<Button variant="ghost" onClick={() => scrollTo("blog")}>
						Read the Blog 📝
					</Button>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
			>
				<span className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
					Scroll
				</span>
				<div className="h-10 w-[1px] animate-scroll-pulse bg-gradient-to-b from-garden-500 to-transparent" />
			</motion.div>
		</section>
	);
}
