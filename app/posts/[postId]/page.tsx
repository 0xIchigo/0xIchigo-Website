import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData(); // Deduped - don't have to request again
    const { postId } = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    return (
        <div>page</div>
    )
}
