import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/utils/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"></link>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="w-full min-h-screen bg-(--page-bg)">
            <Navbar />
            <main className="mt-14">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}