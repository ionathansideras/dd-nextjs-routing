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
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
