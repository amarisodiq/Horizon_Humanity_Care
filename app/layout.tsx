import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title:
    "Horizon Humanity Care | Honouring Service, Empowering Retirement",
  description:
    "Horizon Humanity Care supports retired security personnel and their families through welfare, healthcare, economic empowerment, advocacy and skills development.",
  keywords: [
    "Horizon Humanity Care",
    "retired security personnel",
    "Nigeria",
    "retirement support",
    "humanity care",
  ],
  openGraph: {
    title: "Horizon Humanity Care",
    description:
      "Honouring Service, Empowering Retirement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}