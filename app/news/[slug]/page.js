import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function Page({ params }) {
    // Find the news by slug
    const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

    if (!news) {
        // Redirect to the 404 page if the news is not found
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${news.image}`} />
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    );
}
