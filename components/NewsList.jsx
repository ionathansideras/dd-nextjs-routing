import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map((news) => (
                <li key={news.id}>
                    <Link href={`/news/${news.slug}`}>
                        <img src={`images/news/${news.image}`} fill />
                        <span>{news.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
