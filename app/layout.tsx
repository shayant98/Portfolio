import Providers from "@components/Providers/Providers";
import { Metadata } from "next";
import "../styles/globals.css";
export const metadata: Metadata = {
  title: "Shayant Sital",
  description: "Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  authors: [
    {
      name: " Shayant Sital",
    },
  ],
  twitter: {
    images: ["/og.png"],
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="scrollbar scrollbar-w-2 scrollbar-thumb-navy-light hover:scrollbar-thumb-red-400 scrollbar-track-navy-normal ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
