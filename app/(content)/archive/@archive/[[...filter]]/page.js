import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";
import {
    getAvailableNewsYears,
    getNewsForYearAndMonth,
    getAvailableNewsMonths,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

// this is a dynamic route page gets all the routes that are dynamic
export default function YearPage({ params }) {
    let links = getAvailableNewsYears();

    // filter holds an array of the dynamic route segments
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    if (filter?.[2]) {
        notFound();
    }

    let news;

    if (selectedMonth) {
        // get news for the selected year and month
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    } else if (selectedYear) {
        // get news for the selected year
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    console.log(links);

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((year) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${year}`
                                : `/archive/${year}`;

                            return (
                                <li key={year}>
                                    <Link href={href}>{year}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {!news || news.length === 0 ? (
                <p>No news found</p>
            ) : (
                <NewsList news={news} />
            )}
        </>
    );
}
