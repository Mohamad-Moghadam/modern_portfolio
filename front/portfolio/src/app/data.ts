export const siteConfig = {
	name: "Your Name",
	handle: "garden.dev",
	role: "Full-Stack Engineer",
	location: "The Terminal Garden",
	education: "B.S. Computer Science",
	experience: "4+ years",
	email: "hello@garden.dev",
	github: "https://github.com",
	linkedin: "https://linkedin.com",
};

export const navItems = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "blog", label: "Blog" },
	{ id: "contact", label: "Contact" },
];

export const skills = [
	{ name: "TypeScript", icon: "TS", color: "#3b82f6" },
	{ name: "Rust", icon: "🦀", color: "#f97316" },
	{ name: "Python", icon: "🐍", color: "#a855f7" },
	{ name: "Go", icon: "Go", color: "#06b6d4" },
	{ name: "React", icon: "⚛", color: "#22d3ee" },
	{ name: "Next.js", icon: "▲", color: "#f8fafc" },
	{ name: "PostgreSQL", icon: "🐘", color: "#3b82f6" },
	{ name: "Docker", icon: "🐳", color: "#06b6d4" },
	{ name: "Linux", icon: "🐧", color: "#10b981" },
	{ name: "Git", icon: "⎇", color: "#f97316" },
	{ name: "AWS", icon: "☁", color: "#f59e0b" },
	{ name: "Neovim", icon: "vim", color: "#10b981" },
];

export const projects = [
	{
		title: "SynthGrid",
		desc: "A WebGL-powered infinite canvas for real-time collaborative algorithm visualization. Users see Dijkstra's bloom across a graph like mycelium.",
		tech: ["Rust", "WebGPU", "TypeScript"],
		link: "#",
	},
	{
		title: "HeapGarden",
		desc: "An interactive memory allocator visualizer. Allocate, free, and watch fragmentation grow — or compost it with compaction.",
		tech: ["C++", "Raylib", "Python"],
		link: "#",
	},
	{
		title: "pollen.rs",
		desc: "A minimal, actor-based message queue written in Rust. Zero-copy deserialization, back-pressure via semantic channels.",
		tech: ["Rust", "Tokio", "gRPC"],
		link: "#",
	},
	{
		title: "dotfiles",
		desc: "A garden-themed Neovim + tmux setup. Every keybind is a seed; every plugin, a cultivar. Managed by Nix flakes.",
		tech: ["Nix", "Lua", "Bash"],
		link: "#",
	},
];

export const blogs = [
	{
		id: 1,
		title: "Decompiling the Forest: How Trees Root Themselves in Memory",
		excerpt:
			"An exploration of B-trees, AVL rotations, and how data structures mirror botanical growth patterns — from root to leaf.",
		date: "2025-06-10",
		tags: ["Data Structures", "Algorithms"],
		readTime: "8 min",
		slug: "decompiling-the-forest",
	},
	{
		id: 2,
		title: "Threads in the Soil: Concurrent Gardening with Rust",
		excerpt:
			"What can tending parallel garden beds teach us about ownership, borrowing, and fearless concurrency?",
		date: "2025-05-28",
		tags: ["Rust", "Concurrency"],
		readTime: "12 min",
		slug: "threads-in-the-soil",
	},
	{
		id: 3,
		title: "Garbage Collection as Composting: Reclaiming Heap Memory",
		excerpt:
			"Tracing GC, generational heaps, and the beautiful analogy of turning dead objects into fertile allocation space.",
		date: "2025-05-14",
		tags: ["Systems", "Memory"],
		readTime: "10 min",
		slug: "gc-as-composting",
	},
	{
		id: 4,
		title: "Neural Roots: Training Decision Trees on Sensor Data",
		excerpt:
			"Building a real-time plant health classifier with scikit-learn and Arduino — from soil moisture to softmax.",
		date: "2025-04-30",
		tags: ["Machine Learning", "IoT"],
		readTime: "15 min",
		slug: "neural-roots",
	},
];
