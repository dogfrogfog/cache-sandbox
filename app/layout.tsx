import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caching sandbox",
  description: "Caching sandbox",
};

function Header() {
  return (
    <div className="z-10 mb-24 w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="text-2xl">
        <Link href="/">Caching sandbox</Link>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="text-2xl pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/dogfrogfog"
          target="_blank"
          rel="noopener noreferrer"
        >
          by{" "}
          <span className="transition-all font-bold hover:underline">
            @dogfrogfog
          </span>
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen p-24"}>
        <Header />
        {children}
      </body>
    </html>
  );
}

// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5
