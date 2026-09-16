import type { Metadata } from "next";
import { getSettings, mediaUrl } from "@/lib/api";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
	try {
		const s = await getSettings();
		return {
			title: { default: s.title, template: `%s | ${s.title}` },
			description: s.tagline || s.description,
			icons: s.favicon ? [{ url: mediaUrl(s.favicon)! }] : undefined,
		};
	} catch {
		// Django unreachable — fall back so the build doesn't die
		return {
			title: "garden.dev — Cultivating Digital Gardens",
			description:
				"Full-stack engineer crafting elegant systems where code grows like well-tended gardens.",
		};
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-garden-950">
			<body className="font-sans text-slate-200 antialiased">{children}</body>
		</html>
	);
}
