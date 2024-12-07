import { Poppins } from "next/font/google"
import Head from "next/head"
import "./globals.css";
import Navbar from "@/components/navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Red Crimson Studio</title>
        <meta property="og:title" content="Red Crimson Studio" key="title" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <main className="overflow-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
