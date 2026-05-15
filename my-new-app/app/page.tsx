"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto mt-12" dir="rtl">
      
      {/* محتوى الصفحة الترحيبي العريض مثل الصورة المرفقة */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
        اكتشف عالم العلوم الممتع
      </h1>
      <p className="text-slate-500 text-xl mb-12 max-w-2xl leading-relaxed">
        تعلم مفاهيم آلية التنفس في جسم الإنسان ووظائف أعضاء الجهاز التنفسي بخطوات تفاعلية بسيطة.
      </p>

      {/* الأزرار الثنائية جنب بعض (بدء التعلم واختبار معلوماتك) */}
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
        
        {/* زرار ابدأ التعلم الآن اللي هينقل الطالب للفيديو التمهيدي */}
        <Link href="/intro" className="w-full sm:w-auto">
          <button className="bg-emerald-600 text-white text-xl font-bold px-12 py-4 rounded-xl shadow-md hover:bg-emerald-700 transition-all w-full sm:w-auto active:scale-95">
            ابدأ التعلم الآن 🚀
          </button>
        </Link>

        {/* زرار اختبر معلوماتك فوراً اللي هينقله لصفحة الكويز */}
        <Link href="/quiz" className="w-full sm:w-auto">
          <button className="bg-white text-emerald-700 border-2 border-emerald-600 text-xl font-bold px-12 py-4 rounded-xl shadow-sm hover:bg-slate-100 transition-all w-full sm:w-auto active:scale-95">
            اختبر معلوماتك 📝
          </button>
        </Link>

      </div>

      {/* أسفل الصفحة (الفوتر) */}
      <footer className="text-slate-400 text-sm mt-24">
        © 2026 منصة الأجهزة الحيوية التفاعلية - إعداد الطالبة نورهان
      </footer>
    </main>
  );
}