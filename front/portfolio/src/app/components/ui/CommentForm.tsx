"use client";

import { useState, type FormEvent } from "react";

const API = process.env.NEXT_PUBLIC_DJANGO_API_URL!;

export default function CommentForm({ slug }: { slug: string }) {
    const [status, setStatus] = useState<
        "idle" | "sending" | "done" | "error" | "throttled"
    >("idle");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");

        try {
            const data = Object.fromEntries(new FormData(form));
            const res = await fetch(`${API}/api/posts/${slug}/comments/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.status === 429) setStatus("throttled");
            else if (res.ok) {
                setStatus("done");
                form.reset();
            } else setStatus("error");
        } catch {
            setStatus("error");
        }
    }

    const inputClass =
        "w-full rounded-lg border border-garden-500/[0.12] bg-garden-500/[0.03] px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-garden-500/50 focus:outline-none";

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* honeypot — hidden from humans, irresistible to bots */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" placeholder="Your name" required maxLength={100} className={inputClass} />
                <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                />
            </div>
            <textarea name="body" rows={4} placeholder="Your comment" required className={inputClass} />

            <button
                disabled={status === "sending"}
                className="self-start rounded-lg border border-garden-500/20 bg-garden-500/[0.06] px-5 py-2.5 font-mono text-sm text-garden-500 transition-colors hover:bg-garden-500/10 disabled:opacity-50"
            >
                {status === "sending" ? "Sending…" : "Submit ⟶"}
            </button>

            {status === "done" && (
                <p className="font-mono text-xs text-garden-500">
                    ✓ Submitted — awaiting approval.
                </p>
            )}
            {status === "throttled" && (
                <p className="font-mono text-xs text-vine-500">
                    Too many comments — try again later.
                </p>
            )}
            {status === "error" && (
                <p className="font-mono text-xs text-red-400">
                    Something went wrong — try again.
                </p>
            )}
        </form>
    );
}