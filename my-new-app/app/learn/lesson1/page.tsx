"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson1Page() {
  const [isInhaling, setIsInhaling] = useState(true);

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center" dir="rtl">
      {/* عنوان الدرس الأول */}
      <h1 className="text-3xl font-bold text-blue-700 mb-2 mt-10">الدرس الأول: آلية الشهيق والزفير</h1>
      <p className="text-slate-500 mb-8">اضغط على الأزرار لتشاهد حركة الرئتين وتجربها بنفسك</p>

      {/* صندوق المحاكاة التفاعلي */}
      <div className="bg-white border p-8 rounded-2xl shadow-xl max-w-md w-full flex flex-col items-center mb-8">
        
        {/* الرئتين تتسع وتضيق بالأنيميشن (تكبر وتصغر) */}
        <div className={`w-40 h-40 rounded-full flex items-center justify-center text-white text-5xl transition-all duration-1000 shadow-inner ${
          isInhaling ? 'bg-blue-500 scale-110' : 'bg-blue-300 scale-90'
        }`}>
          🫁
        </div>

        {/* النص الشارح المتغير حسب العملية */}
        <div className="mt-8 text-center min-h-[80px]">
          {isInhaling ? (
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">عملية الشهيق (Inhalation)</h3>
              <p className="text-slate-600">ينقبض الحجاب الحاجز ويهبط لأسفل، فيتسع التجويف الصدري ويدخل الهواء محملاً بالأكسجين ليملأ الرئتين.</p>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-1">عملية الزفير (Exhalation)</h3>
              <p className="text-slate-600">ينبسط الحجاب الحاجز ويرتفع لأعلى، فيضيق التجويف الصدري ويخرج الهواء محملاً بثاني أكسيد الكربون خارج الجسم.</p>
            </div>
          )}
        </div>

        {/* أزرار التحكم بالأنيميشن */}
        <div className="flex gap-4 mt-6">
          <button 
            onClick={() => setIsInhaling(true)} 
            className={`px-6 py-2 rounded-full font-bold transition-all ${isInhaling ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-200 text-slate-700'}`}
          >
            شهيق 🔵
          </button>
          <button 
            onClick={() => setIsInhaling(false)} 
            className={`px-6 py-2 rounded-full font-bold transition-all ${!isInhaling ? 'bg-orange-500 text-white shadow-md' : 'bg-slate-200 text-slate-700'}`}
          >
            زفير 🟠
          </button>
        </div>
      </div>

      {/* زرار العودة للفهرس الرئيسي للدروس */}
      <Link href="/learn">
        <button className="bg-slate-600 text-white px-8 py-2 rounded-full hover:bg-slate-700 transition-colors">
          العودة لقائمة الدروس
        </button>
      </Link>
    </main>
  );
}