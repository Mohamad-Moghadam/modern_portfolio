import { Navbar } from "@/app/components/sections/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Skills } from "@/app/components/sections/Skills";
import { Projects } from "@/app/components/sections/Projects";
import { Blog } from "@/app/components/sections/Blog";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";
import { BinaryRain } from "@/app/components/BinaryRain";
import { CustomCursor } from "@/app/components/CustomCursor";
import { getHome, getPosts, getSettings } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
	const [settings, home, posts] = await Promise.all([
		getSettings(),
		getHome(),
		getPosts(1),
	]);

	return (
		<div className="relative min-h-screen overflow-x-hidden bg-garden-950 text-slate-200">
			<CustomCursor />
			<BinaryRain />
			<Navbar title={settings.title} resumeUrl={settings.resume} />
			<main className="relative z-10">
				<Hero tagline={settings.tagline} />
				<About
					profile={{
						name: settings.title,
						role: settings.role,
						location: settings.location,
						education: home.profile.education,
						experience: home.profile.experience,
					}}
					description={settings.description}
				/>
				<Skills skills={home.skills} />
				<Projects projects={home.featured_projects} />
				<Blog posts={posts.results} />
				<Contact
					email={settings.email}
					githubUrl={settings.github_url}
					linkedinUrl={settings.linkedin_url}
					twitterUrl={settings.twitter_url}
				/>
			</main>
			<Footer
				email={settings.email}
				githubUrl={settings.github_url}
				linkedinUrl={settings.linkedin_url}
				resumeUrl={settings.resume}
			/>
		</div>
	);
}
