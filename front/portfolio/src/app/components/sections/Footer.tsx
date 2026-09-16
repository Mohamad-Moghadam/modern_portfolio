export function Footer({
	email,
	githubUrl,
	linkedinUrl,
	resumeUrl,
}: {
	email: string;
	githubUrl: string;
	linkedinUrl: string;
	resumeUrl?: string | null;
}) {
	const year = new Date().getFullYear();

	const links = [
		{ label: "GitHub", href: githubUrl },
		{ label: "LinkedIn", href: linkedinUrl },
		{ label: "Email", href: email ? `mailto:${email}` : "" },
		{ label: "Resume", href: resumeUrl || "" },
	].filter((l) => l.href);

	return (
		<footer className="border-t border-garden-500/10 bg-garden-950/60">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
				<p className="font-mono text-xs text-slate-600">
					© {year} — grown with 🌱 and clean code
				</p>

				<div className="flex items-center gap-6">
					{links.map((l) => (
						<a
							key={l.label}
							href={l.href}
							target={l.href.startsWith("mailto") ? undefined : "_blank"}
							rel="noopener noreferrer"
							className="font-mono text-xs text-slate-500 transition-colors hover:text-garden-500"
						>
							{l.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
