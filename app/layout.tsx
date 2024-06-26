import "../styles/global.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main className="bg-page-gradient pt-[var(--navigation-height)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
