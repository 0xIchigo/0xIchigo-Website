import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
    const posts = getSortedPostsData(); // Deduped - don't have to request again

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData(); // Deduped - don't have to request again
    const { postId } = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId);
    const pubDate = getFormattedDate(date);

    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1 min-w-[85%]">
                <div className="bg-dark-green">
                    <h2 className="text-white text-3xl px-2">
                        {title} - <span className="font-Aurebesh">{title}</span>
                    </h2>
                </div>
                <div className="prose italic px-2 pb-2 ml-4">
                    published on {pubDate}
                </div>
                <article className="text-black p-2 prose prose-lg min-w-full">
                    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </article>
                <p className="pb-2">
                    <Link href="/blog" className="flex items-center justify-center">Return to the article list</Link>
                </p>
            </div>
        </main>
    )
}
