"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tag } from "@/app/components/ui/Tag";
import { Button } from "@/app/components/ui/Button";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { blogs } from "@/app/data";

export function Blog() {
	const [visible, setVisible] = useState(3);

	return (
		<section id="blog" data-nav="blog" className="mx-auto max-w-6xl px-6 py-28">
			<SectionHeading
				pre="The"
				highlight="Garden Journal"
				from="#a855f7"
				to="#10b981"
				subtitle="cat ~/thoughts/*.md | render"
			/>

			<div className="mx-auto flex max-w-3xl flex-col gap-5">
				{blogs.slice(0, visible).map((post, i) => (
					<motion.article
						key={post.id}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.08 }}
						whileHover={{
							x: 6,
							boxShadow: "0 12px 40px rgba(16,185,129,0.06)",
							borderColor: "rgba(16,185,129,0.2)",
						}}
						className="cursor-pointer rounded-2xl border border-garden-500/[0.08] bg-garden-500/[0.03] p-7 transition-colors duration-300"
					>
						<div className="mb-2 flex items-center justify-between gap-2 flex-wrap">
							<div className="flex flex-wrap gap-2">
								{post.tags.map((t) => (
									<Tag key={t} color="#a855f7">
										{t}
									</Tag>
								))}
							</div>
							<span className="font-mono text-xs text-slate-600">
								{post.readTime} read
							</span>
						</div>

						<h3 className="mb-2 text-lg font-bold leading-snug text-garden-50">
							{post.title}
						</h3>

						<p className="mb-3 text-sm leading-relaxed text-slate-400">
							{post.excerpt}
						</p>

						<div className="flex items-center justify-between">
							<span className="font-mono text-xs text-slate-600">
								{new Date(post.date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</span>
							<span className="font-mono text-[13px] text-garden-500">
								Read more ⟶
							</span>
						</div>
					</motion.article>
				))}

				{visible < blogs.length && (
					<div className="mt-4 text-center">
						<Button variant="ghost" onClick={() => setVisible(blogs.length)}>
							Load more entries ↓
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
