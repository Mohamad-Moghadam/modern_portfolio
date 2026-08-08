import { Navbar } from "@/app/components/sections/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Skills } from "@/app/components/sections/Skills";
import { Projects } from "@/app/components/sections/Projects";
import { Blog } from "@/app/components/sections/Blog";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";
import { BinaryRain } from "@/app/components/BinaryRain";
import { CustomCursor } from "@/app/components/CustomCursor"; // ← add this

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-x-hidden bg-garden-950 text-slate-200">
			<CustomCursor /> {/* ← add this */}
			<BinaryRain />
			<Navbar />
			<main className="relative z-10">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Blog />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
