import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

// we actually dont need a page.js but a default,js file because we are not using dynamic routes in this case
// so we will create a default.js so it will be used as the default page for the news folder always
export default function LatestPage() {
    const news = getLatestNews();
    return (
        <>
            <h2>latest</h2>
            <NewsList news={news} />
        </>
    );
}
