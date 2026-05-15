"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Lesson2Page() {
  const [activeInfo, setActiveInfo] = useState("اضغط على أي عضو من القائمة الجانبية لتتعرف على وظيفته الحيوية فوراً!");

  const organs = [
    { name: "👃 الأنف والفتحة الأنفية", info: "يقوم بتصفية الهواء الداخل وتدفئته وترطيبه قبل أن يصل إلى الرئتين بفضل الشعيرات والمخاط المبطن له." },
    { name: "🗣️ البلعوم", info: "هو ممر مشترك يمر منه الهواء القادم من الأنف إلى الجهاز التنفسي، ويمر منه الغذاء أيضاً إلى الجهاز الهضمي." },
    { name: "💨 القصبة الهوائية", info: "أنبوب مرن مدعم بحلقات غضروفية تجعله مفتوحاً باستمرار لمرور الهواء, ويحتوي على أهداب لطرد أي أجسام غريبة." },
    { name: "🫁 الرئتان والحويصلات الهوائية", info: "هما العضوان الرئيسيان للتنفس؛ وتحدث داخلهما عملية تبادل الغازات، حيث تأخذ الحويصلات الأكسجين وتطرد ثاني أكسيد الكربون." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center" dir="rtl">
      {/* عنوان الدرس الثاني */}
      <h1 className="text-3xl font-bold text-blue-700 mb-2 mt-10">الدرس الثاني: خريطة أعضاء الجهاز التنفسي</h1>
      <p className="text-slate-500 mb-8">اضغط على اسم العضو واستكشف وظيفته داخل جسم الإنسان</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
        {/* قائمة أزرار الأعضاء */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {organs.map((organ, index) => (
            <button 
              key={index}
              onClick={() => setActiveInfo(organ.info)}
              className="bg-white border-2 border-blue-500 text-blue-700 font-bold p-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-right shadow-sm active:scale-95"
            >
              {organ.name}
            </button>
          ))}
        </div>

        {/* لوحة عرض الشرح والمعلومات */}
        <div className="md:col-span-2 bg-blue-600 text-white p-8 rounded-2xl shadow-lg flex items-center justify-center min-h-[250px]">
          <p className="text-xl leading-relaxed text-center font-medium">
            {activeInfo}
          </p>
        </div>
      </div>

      {/* أزرار التنقل الأسفل */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {/* زرار العودة للفهرس */}
        <Link href="/learn">
          <button className="bg-slate-600 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors font-medium">
            العودة لقائمة الدروس
          </button>
        </Link>

        {/* الزرار الجديد اللي هيدخل الطالب على الاختبار فوراً */}
        <Link href="/quiz">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all font-bold shadow-md active:scale-95">
            الانتقال للاختبار النهائي 📝
          </button>
        </Link>
      </div>
    </main>
  );
}