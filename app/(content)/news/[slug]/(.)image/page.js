import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
    // Find the news by slug
    const newsItem = await getNewsItem(params.slug);

    if (!newsItem) {
        // Redirect to the 404 page if the news is not found
        notFound();
    }
    return (
        <div className="fullscreen-image">
            <h1>I came here by clicking the image its called Intercepting</h1>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
