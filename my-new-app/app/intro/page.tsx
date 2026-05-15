"use client";
import Link from 'next/link';

export default function IntroPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 mt-10">
        مرحباً بك في رحلة استكشاف الجهاز التنفسي
      </h1>
      
      {/* إطار الفيديو التعليمي */}
      <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden mb-8">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/t0dfX0B6Oas" 
          title="شرح الجهاز التنفسي"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl text-center mb-8 border-r-4 border-blue-500">
        <p className="text-slate-700 text-lg leading-relaxed">
          شاهد الفيديو التمهيدي لتعرف كيف نتنفس، ثم اضغط على الزرار بالأسفل لتجربة الدروس التفاعلية بنفسك!
        </p>
      </div>

      <Link href="/learn">
        <button className="bg-green-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-lg">
          انتقل إلى الدروس الآن ←
        </button>
      </Link>
    </main>
  );
}