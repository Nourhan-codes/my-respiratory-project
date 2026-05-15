import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "منصة العلوم التفاعلية | الجهاز التنفسي",
  description: "مشروع تعليمي تفاعلي عن الجهاز التنفسي بإعداد الطالبة نورهان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`} dir="rtl">
        
        {/* شريط التنقل العلوي الثابت */}
        <nav className="w-full bg-emerald-700 text-white p-4 flex justify-between items-center shadow-md px-8 sticky top-0 z-50">
          <div className="text-xl font-bold">منصة العلوم التفاعلية 🫁</div>
          <div className="flex gap-6 font-medium">
            <Link href="/" className="hover:underline">الرئيسية</Link>
            <Link href="/about" className="hover:underline">حول المنصة</Link>
            <Link href="/learn" className="hover:underline">الوحدات</Link>
            <Link href="/quiz" className="hover:underline">الاختبار</Link>
          </div>
        </nav>

        {/* محتوى الصفحات المتغيرة */}
        {children}

      </body>
    </html>
  );
}