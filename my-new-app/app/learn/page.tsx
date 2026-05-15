"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center" dir="rtl">
      <h1 className="text-5xl font-black text-slate-800 mb-6">
        مرحباً بك في <br/> <span className="text-blue-600">تطبيق الجهاز التنفسي</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 font-medium">ابدأ رحلتك التعليمية من خلال الأقسام التالية:</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/learn/anatomy">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transition-all">
            استكشاف الأعضاء 🫁
          </button>
        </Link>
        
        <Link href="/quiz">
          <button className="bg-white border-4 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-blue-50 transition-all">
            دخول الاختبار 📝
          </button>
        </Link>
      </div>
    </main>
  );
}