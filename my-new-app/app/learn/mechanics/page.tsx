"use client";
import Link from 'next/link';

export default function Mechanics() {
  return (
    <main className="min-h-screen bg-white p-8" dir="rtl">
      <h1 className="text-4xl font-black text-indigo-900 mb-16 text-center">آلية الشهيق والزفير</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-blue-50 p-10 rounded-[40px] border-b-8 border-blue-600">
          <h2 className="text-3xl font-black text-blue-700 mb-6 italic">🌬️ عملية الشهيق</h2>
          <ul className="text-xl space-y-4 font-bold text-slate-700">
            <li>• ينقبض الحجاب الحاجز لأسفل.</li>
            <li>• يتسع التجويف الصدري.</li>
            <li>• يدخل الهواء محملاً بالأكسجين.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-10 rounded-[40px] border-b-8 border-red-400">
          <h2 className="text-3xl font-black text-red-600 mb-6 italic">💨 عملية الزفير</h2>
          <ul className="text-xl space-y-4 font-bold text-slate-700">
            <li>• ينبسط الحجاب الحاجز لأعلى.</li>
            <li>• يضيق التجويف الصدري.</li>
            <li>• يخرج ثاني أكسيد الكربون.</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/quiz">
          <button className="bg-green-600 text-white px-16 py-6 rounded-full text-3xl font-black shadow-2xl hover:scale-110 transition-all">جاهز للتحدي؟ 🚀</button>
        </Link>
      </div>
    </main>
  );
}