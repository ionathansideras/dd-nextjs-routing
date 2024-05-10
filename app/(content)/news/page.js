import NewsList from "@/components/NewsList";

// this makes a server-side request to fetch news data because in next.js we
// can use the async components
// to fetch data on the server side and then render the page with the fetched data
// this way is better for SEO and performance
export default async function Page() {
    const response = await fetch("http://localhost:8080/news");

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    const dummyNews = await response.json();

    return (
        <>
            <h1>News page</h1>
            <NewsList news={dummyNews} />
        </>
    );
}
