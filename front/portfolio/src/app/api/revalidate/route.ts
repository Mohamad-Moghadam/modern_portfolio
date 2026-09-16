import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { secret, paths } = await req.json();
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }
    paths.forEach((p: string) => revalidatePath(p));
    return NextResponse.json({ revalidated: true });
}