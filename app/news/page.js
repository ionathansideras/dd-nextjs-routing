import Link from "next/link";

import { DUMMY_NEWS } from "@/dymmy-news";

export default function Page() {
    return (
        <>
            <h1>News page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((news) => (
                    <li key={news.id}>
                        <Link href={`/news/${news.slug}`}>
                            <img src={`images/news/${news.image}`} fill />
                            <span>{news.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
