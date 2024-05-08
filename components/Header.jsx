import Link from "next/link";
import LinkHeader from "./LinkHeader";
export default function Header() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkHeader href="/news">News</LinkHeader>
                    </li>
                    <li>
                        <LinkHeader href="/archive">Archive</LinkHeader>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
