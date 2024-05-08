import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
    // Find the news by slug
    const newsItem = DUMMY_NEWS.find((news) => news.slug === params.slug);

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
