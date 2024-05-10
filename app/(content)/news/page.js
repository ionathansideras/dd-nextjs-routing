import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

export default async function Page() {
    const dummyNews = await getAllNews();

    return (
        <>
            <h1>News page</h1>
            <NewsList news={dummyNews} />
        </>
    );
}
