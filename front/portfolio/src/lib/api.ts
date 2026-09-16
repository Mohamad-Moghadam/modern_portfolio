import type {
	HomeData,
	Paginated,
	PostDetail,
	PostListItem,
	ResumeData,
	SiteSettings,
} from "./types";

const API = process.env.NEXT_PUBLIC_DJANGO_API_URL ?? "http://127.0.0.1:8000";
const REVALIDATE = 3600; // 1h fallback — the webhook revalidates sooner on changes

/** Prefixes Django origin to relative media paths; passes absolute URLs through. */
export function mediaUrl(path: string | null): string | null {
	if (!path) return null;
	return path.startsWith("http") ? path : `${API}${path}`;
}

export function formatDate(d: string | null): string {
	if (!d) return "Present";
	return new Date(d).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

async function get<T>(path: string): Promise<T> {
	const res = await fetch(`${API}${path}`, {
		next: { revalidate: REVALIDATE },
	});
	if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
	return res.json();
}

export const getSettings = (): Promise<SiteSettings> => get("/api/settings/");
export const getHome = (): Promise<HomeData> => get("/api/home/");
export const getResume = (): Promise<ResumeData> => get("/api/resume/");

export function getPosts(page = 1): Promise<Paginated<PostListItem>> {
	return get(`/api/posts/?page=${page}`);
}

/** Returns null on 404 so pages can call notFound(). */
export async function getPost(slug: string): Promise<PostDetail | null> {
	const res = await fetch(`${API}/api/posts/${slug}/`, {
		next: { revalidate: REVALIDATE },
	});
	if (res.status === 404) return null;
	if (!res.ok) throw new Error(`API ${res.status} on post ${slug}`);
	return res.json();
}
