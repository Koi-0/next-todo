import Providers from "@/providers/RQPproviders";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ErrorBoundary from "@/components/ui/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Todo",
  description: "Next.js, TypeScript, Tanstack Query로 만든 간단한 TodoList App",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tanstack Query",
    "TodoList App",
    "투두 앱",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <Providers>
            {children}
            <ToastContainer
              position="top-right"
              limit={1}
              autoClose={1000}
              hideProgressBar
            />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
