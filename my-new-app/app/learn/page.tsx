"use client";
import Link from 'next/link';

export default function LearnPage() {
  const lessons = [
    { 
      id: 1, 
      title: "الدرس الأول: آلية الشهيق والزفير", 
      desc: "استكشف كيف يعمل الصدر والحجاب الحاجز أثناء دخول الأكسجين وخروج ثاني أكسيد الكربون من الرئتين." 
    },
    { 
      id: 2, 
      title: "الدرس الثاني: خريطة أعضاء الجهاز التنفسي", 
      desc: "تعرف على الأنف، البلعوم، القصبة الهوائية، والرئتين، واكتشف وظيفة كل عضو بالتفصيل داخل جسم الإنسان." 
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center" dir="rtl">
      
      {/* العنوان الرئيسي لصفحة الفهرس */}
      <h1 className="text-3xl font-bold text-slate-800 mb-4 border-b-4 border-blue-600 pb-2 mt-10">
        الوحدة الأولى: رحلة داخل الجهاز التنفسي 🫁
      </h1>
      <p className="text-slate-500 mb-12 text-lg">اختر درساً لتبدأ رحلة التعلم الاستكشافية</p>

      {/* كروت عرض الدروس */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between text-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{lesson.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{lesson.desc}</p>
            </div>
            
            {/* الأزرار اللي هتنقل الطالب لـ lesson1 و lesson2 */}
            <Link href={lesson.id === 1 ? "/learn/lesson1" : "/learn/lesson2"}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium w-full md:w-auto">
                ابدأ الدرس الآن 🚀
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* زرار سريع للاختبار النهائي أسفل الفهرس */}
      <div className="text-center mt-4">
        <Link href="/quiz">
          <button className="bg-orange-500 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-orange-600 transition-all shadow-lg">
            هل أنت جاهز للاختبار النهائي؟ 📝
          </button>
        </Link>
      </div>

      <footer className="mt-auto pt-16 text-slate-400 text-sm">
        © 2026 منصة الجهاز التنفسي التفاعلية - إعداد الطالبة نورهان
      </footer>
    </main>
  );
}