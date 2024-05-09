import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";

export default function Page() {
    return (
        <>
            <h1>News page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}
