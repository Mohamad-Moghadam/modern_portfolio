export function Footer() {
	return (
		<footer className="border-t border-garden-500/[0.08] px-6 py-8 text-center">
			<div className="font-mono text-xs leading-loose text-slate-600">
				<div>
					<span className="text-garden-500">∴</span> crafted with care in the
					garden
				</div>
				<div>
					© {new Date().getFullYear()} garden.dev — all rights rooted 🌿
				</div>
				<div className="mt-1 text-slate-700">
					{"/* the best code grows slowly */"}
				</div>
			</div>
		</footer>
	);
}
