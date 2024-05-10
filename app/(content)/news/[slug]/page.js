import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function Page({ params }) {
    // Find the news by slug
    const news = await getNewsItem(params.slug);

    if (!news) {
        // Redirect to the 404 page if the news is not found
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${news.slug}/image`}>
                    <img src={`/images/news/${news.image}`} />
                </Link>

                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    );
}
