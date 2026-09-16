export interface Category {
	name: string;
	slug: string;
}
export interface Tag {
	name: string;
	slug: string;
}

export interface Skill {
	name: string;
	category: string;
	level: string;
	icon?: string;
	color?: string;
}

export interface Project {
	title: string;
	slug: string;
	description: string;
	featured_image: string | null;
	live_url: string;
	repo_url: string;
	skills: Skill[];
}

export interface Experience {
	company: string;
	role: string;
	company_url: string;
	location: string;
	description: string; // one bullet per line
	start_date: string;
	end_date: string | null;
}

export interface Education {
	institution: string;
	degree: string;
	field_of_study: string;
	start_date: string;
	end_date: string | null;
	grade: string;
	description: string;
}

export interface Certification {
	name: string;
	issuer: string;
	issue_date: string;
	expiry_date: string | null;
	credential_id: string;
	credential_url: string;
}

export interface SiteSettings {
	title: string;
	tagline: string;
	description: string;
	role: string;
	location: string;
	favicon: string | null;
	logo: string | null;
	email: string;
	github_url: string;
	linkedin_url: string;
	twitter_url: string;
	resume: string | null;
}

export interface CommentPublic {
	name: string;
	body: string;
	created_at: string;
}

export interface PostListItem {
	title: string;
	slug: string;
	excerpt: string;
	featured_image: string | null;
	category: Category | null;
	tags: Tag[];
	author: string;
	published_at: string | null;
	read_time: number;
}

export interface PostDetail extends PostListItem {
	content: string;
	updated_at: string;
	comments: CommentPublic[];
}

export interface Paginated<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

export interface HomeData {
	profile: { education: string; experience: string };
	featured_projects: Project[];
	skills: Skill[];
}

export interface ResumeData {
	experiences: Experience[];
	education: Education[];
	skills: Skill[];
	certifications: Certification[];
}
