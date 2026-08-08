interface TerminalCardProps {
	title: string;
	lines: { key: string; value: string }[];
	comment?: string;
}

export function TerminalCard({ title, lines, comment }: TerminalCardProps) {
	return (
		<div className="overflow-hidden rounded-2xl border border-garden-500/12 bg-garden-500/[0.04]">
			<div className="flex items-center gap-2 bg-garden-500/[0.08] px-4 py-3">
				<span className="inline-block h-3 w-3 rounded-full bg-red-500" />
				<span className="inline-block h-3 w-3 rounded-full bg-amber-500" />
				<span className="inline-block h-3 w-3 rounded-full bg-garden-500" />
				<span className="ml-3 font-mono text-xs text-slate-500">{title}</span>
			</div>
			<div className="space-y-0 p-6 font-mono text-[13px] leading-[2] text-slate-400">
				{lines.map((line) => (
					<div key={line.key}>
						<span className="text-garden-500">{line.key}</span>=
						<span className="text-amber-500">&quot;{line.value}&quot;</span>
					</div>
				))}
				{comment && (
					<div className="mt-2">
						<span className="text-slate-600"># </span>
						<span className="italic text-slate-500">{comment}</span>
					</div>
				)}
			</div>
		</div>
	);
}
