import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./(dashboard)/providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
          <footer className="w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="/about"
              title="about us"
            >
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">PureJS</p>
            </Link>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
