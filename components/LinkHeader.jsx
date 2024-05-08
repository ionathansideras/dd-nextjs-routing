"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkHeader({ href, children }) {
    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? "active" : ""}>
            {children}
        </Link>
    );
}
