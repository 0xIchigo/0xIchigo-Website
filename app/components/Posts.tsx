import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
    // No need to await since it's all on the server with the project rn my guy
    const posts = getSortedPostsData();

    return (
        <section className="mx-auto max-w-2xl text-black">
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}
