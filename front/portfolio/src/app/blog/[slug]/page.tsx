import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CommentForm from "@/app/components/ui/CommentForm";
import { formatDate, getPost, mediaUrl } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getPost(slug);
        if (!post) return { title: "Not found" };
        return { title: post.title, description: post.excerpt };
    } catch {
        return { title: "Blog" };
    }
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    let post;
    try {
        post = await getPost(slug);
    } catch {
        post = null; // Django unreachable — treat as missing rather than crashing
    }
    if (!post) notFound();

    return (
        <article className="mx-auto max-w-3xl px-6 pb-28 pt-32">
            <Link
                href="/blog"
                className="font-mono text-[13px] text-garden-500 transition-colors hover:text-garden-300"
            >
                ← cd ~/thoughts
            </Link>

            <div className="mb-3 mt-8 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                    <span
                        key={t.slug}
                        className="rounded-md border border-vine-500/20 bg-vine-500/[0.06] px-2.5 py-0.5 font-mono text-xs text-vine-500"
                    >
                        #{t.name}
                    </span>
                ))}
            </div>

            <h1 className="text-[clamp(28px,4.5vw,44px)] font-extrabold leading-tight text-garden-50">
                {post.title}
            </h1>

            <p className="mt-4 font-mono text-xs text-slate-600">
                {post.author} · {formatDate(post.published_at)} · {post.read_time} min read
                {post.category && ` · ${post.category.name}`}
            </p>

            {post.featured_image && (
                <Image
                    src={mediaUrl(post.featured_image)!}
                    alt={post.title}
                    width={1200}
                    height={675}
                    priority
                    className="mt-8 w-full rounded-2xl border border-garden-500/10"
                />
            )}

            <div className="mt-10">
                {post.content.split(/\n{2,}/).map((para, i) => (
                    <p key={i} className="mb-5 text-base leading-relaxed text-slate-300">
                        {para}
                    </p>
                ))}
            </div>

            <section className="mt-16 border-t border-garden-500/10 pt-10">
                <h2 className="mb-6 font-mono text-lg font-bold text-garden-50">
                    Comments ({post.comments.length})
                </h2>

                <div className="mb-10 flex flex-col gap-5">
                    {post.comments.map((c, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-garden-500/[0.08] bg-garden-500/[0.03] p-5"
                        >
                            <p className="font-mono text-xs text-slate-500">
                                <span className="text-garden-500">{c.name}</span> ·{" "}
                                {formatDate(c.created_at)}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.body}</p>
                        </div>
                    ))}
                    {post.comments.length === 0 && (
                        <p className="font-mono text-sm text-slate-600">
                            No comments yet — plant the first seed.
                        </p>
                    )}
                </div>

                <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-slate-400">
                    Leave a comment
                </h3>
                <CommentForm slug={post.slug} />
            </section>
        </article>
    );
}