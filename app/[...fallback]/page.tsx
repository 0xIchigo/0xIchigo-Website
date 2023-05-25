/*
    The joys of working on Next.js 13 is finding out unresolved bugs in real time!
    This is a temporary fix for: https://stackoverflow.com/questions/76251448/why-is-link-tag-is-not-working-properly-when-the-content-inside-not-found-tsx 

    Which you can find here: https://github.com/vercel/next.js/issues/48367#issuecomment-1535208289
*/

import { notFound } from "next/navigation";

export default function ForceDynamicNotFound() {
    return notFound();
}

export const dynamic = "force-dynamic";