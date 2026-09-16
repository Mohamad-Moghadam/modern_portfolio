import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/api";
import type { Paginated, PostListItem } from "@/lib/types";

export const revalidate = 3600;

export const metadata: Metadata = { title: "Blog" };

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page } = await searchParams;
    const pageNum = Math.max(1, Number(page) || 1);

    let data: Paginated<PostListItem> = { count: 0, next: null, previous: null, results: [] };
    try {
        data = await getPosts(pageNum);
    } catch {
        // Django unreachable — render the shell rather than failing the build
    }

    const totalPages = Math.ceil(data.count / 6) || 1;

    return (
        <div className="mx-auto max-w-3xl px-6 pb-28 pt-32">
            <p className="mb-2 font-mono text-[13px] uppercase tracking-[0.15em] text-garden-500">
                ─── cd ~/thoughts
            </p>
            <h1 className="mb-10 text-[clamp(28px,4vw,40px)] font-bold text-garden-50">
                The Garden Journal
            </h1>

            <div className="flex flex-col gap-5">
                {data.results.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="rounded-2xl border border-garden-500/[0.08] bg-garden-500/[0.03] p-7 transition-colors duration-300 hover:border-garden-500/25"
                    >
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                            {post.category && (
                                <span className="font-mono text-xs uppercase tracking-wider text-cyber-500">
                                    #{post.category.name}
                                </span>
                            )}
                            <span className="font-mono text-xs text-slate-600">
                                {post.read_time} min read
                            </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-garden-50">{post.title}</h2>
                        <p className="mb-3 text-sm leading-relaxed text-slate-400">
                            {post.excerpt}
                        </p>
                        <span className="font-mono text-xs text-slate-600">
                            {post.author} · {formatDate(post.published_at)}
                        </span>
                    </Link>
                ))}

                {data.results.length === 0 && (
                    <p className="py-16 text-center font-mono text-sm text-slate-600">
                        $ cat ~/thoughts/*.md → no entries yet
                    </p>
                )}
            </div>

            <nav className="mt-10 flex items-center justify-between font-mono text-sm">
                {pageNum > 1 ? (
                    <Link href={`/blog?page=${pageNum - 1}`} className="text-garden-500 hover:text-garden-300">
                        ← Newer
                    </Link>
                ) : (
                    <span />
                )}
                <span className="text-slate-600">
                    page {pageNum} / {totalPages}
                </span>
                {pageNum < totalPages ? (
                    <Link href={`/blog?page=${pageNum + 1}`} className="text-garden-500 hover:text-garden-300">
                        Older →
                    </Link>
                ) : (
                    <span />
                )}
            </nav>
        </div>
    );
}