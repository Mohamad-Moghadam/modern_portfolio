interface TagProps {
	children: React.ReactNode;
	color?: string;
}

export function Tag({ children, color = "#10b981" }: TagProps) {
	return (
		<span
			className="inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px]"
			style={{
				background: `${color}18`,
				color: color,
				borderColor: `${color}30`,
			}}
		>
			{children}
		</span>
	);
}
