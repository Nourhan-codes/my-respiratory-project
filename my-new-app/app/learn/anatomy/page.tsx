"use client";
import Link from 'next/link';

export default function Anatomy() {
  const parts = [
    { title: "الأنف", desc: "يفضل التنفس منه لأنه ينقي ويدفئ الهواء.", icon: "👃" },
    { title: "البلعوم", desc: "تجويف مشترك يمر منه الهواء والطعام.", icon: "👄" },
    { title: "القصبة الهوائية", desc: "أنبوب مزود بحلقات غضروفية ليبقى مفتوحاً.", icon: "🌬️" },
    { title: "الرئتان", desc: "أهم عضوين، يتم فيهما تبادل الغازات.", icon: "🫁" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8" dir="rtl">
      <h1 className="text-4xl font-black text-blue-900 mb-12 text-center">خريطة الجهاز التنفسي</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {parts.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[30px] shadow-lg border-r-8 border-blue-600">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="text-2xl font-black text-blue-800 mb-2">{item.title}</h2>
            <p className="text-slate-600 text-xl font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/learn/mechanics">
          <button className="bg-blue-600 text-white px-12 py-4 rounded-2xl text-2xl font-black shadow-lg hover:bg-blue-700">الخطوة التالية: كيف نتنفس؟ ⬅️</button>
        </Link>
      </div>
    </main>
  );
}