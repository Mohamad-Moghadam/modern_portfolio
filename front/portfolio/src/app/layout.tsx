import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "garden.dev — Cultivating Digital Gardens",
	description:
		"Full-stack engineer crafting elegant systems where code grows like well-tended gardens.",
};

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
