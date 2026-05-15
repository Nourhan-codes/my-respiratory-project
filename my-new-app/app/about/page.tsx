"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-[calc(screen-64px)] p-8 flex flex-col items-center max-w-4xl mx-auto" dir="rtl">
      
      {/* عنوان الصفحة */}
      <h1 className="text-3xl font-bold text-slate-800 mb-2 mt-10 border-b-4 border-emerald-600 pb-2">
        حول منصة العلوم التفاعلية
      </h1>
      <p className="text-slate-500 mb-12">تعرّف على الرؤية والهدف من وراء هذا المشروع التعليمي</p>

      {/* بطاقة معلومات المنصة */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 w-full space-y-8 text-right">
        
        {/* القسم الأول: الهدف */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-3">🎯 رؤية وهدف المنصة:</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            تم تصميم هذه المنصة لتكون أداة تعليمية تفاعلية حديثة تساعد طلاب المدارس على فهم مادة العلوم بشكل مبسط وممتع. نهدف إلى تحويل التعليم النظري التقليدي إلى تجربة استكشافية حية من خلال الرسوم والمحاكاة التفاعلية للجسم البشري.
          </p>
        </div>

        {/* القسم الثاني: ماذا تقدم */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-3">🛠️ التقنيات والمميزات:</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            تعتمد المنصة على تقنيات الويب الحديثة لتقديم استجابة سريعة وتصميم مريح للعين، وتضم وسائل إيضاحية مثل محاكاة حركات الحجاب الحاجز (الشهيق والزفير)، وخريطة تفاعلية للتعرف على وظائف أعضاء الجهاز التنفسي، واختبار فوري لتقييم مستوى الطالب وتحفيزه.
          </p>
        </div>

        {/* القسم الثالث: فريق العمل */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">🎓 إعداد وتطوير:</h2>
          <p className="text-emerald-900 text-lg font-medium">
            الطالبة: <span className="font-bold underline">نورهان</span>
          </p>
          <p className="text-slate-600 mt-1">
            مشروع تخرج / نشاط أكاديمي تحت إشراف "الدكتور" لتقديم نموذج متطور لوسائل تكنولوجيا التعليم الحديثة.
          </p>
        </div>

      </div>

      {/* زرار سريع للعودة للرئيسية */}
      <Link href="/" className="mt-8">
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-all font-bold shadow-md active:scale-95">
          العودة للصفحة الرئيسية 🏠
        </button>
      </Link>

    </main>
  );
}