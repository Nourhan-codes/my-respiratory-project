"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("home");
  
  // حالة الاختبار (Quiz State)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      question: "ما هو العضو الذي يعتبر ممراً مشتركاً للطعام والهواء؟",
      options: ["الأنف", "البلعوم", "الحنجرة", "القصبة الهوائية"],
      answer: 1
    },
    {
      question: "ماذا يحدث لعضلة الحجاب الحاجز أثناء عملية الشهيق؟",
      options: ["تنبسط وتتحرك للأعلى", "تنقبض وتتحرك للأسفل", "تظل ثابتة", "تتوقف عن العمل"],
      answer: 1
    },
    {
      question: "أين تتم عملية تبادل الغازات (الأكسجين وثاني أكسيد الكربون)؟",
      options: ["في الأنف", "في البلعوم", "في الحويصلات الهوائية", "في القصبة الهوائية"],
      answer: 2
    },
    {
      question: "أي من الفواكه التالية ينصح بها للوقاية من نزلات البرد وتقوية الجهاز التنفسي؟",
      options: ["الموز والبطيخ", "البرتقال والجوافة", "التفاح والبلح", "العنب والتين"],
      answer: 1
    }
  ];

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setView("quiz");
  };

  return (
    <main className="min-h-screen bg-slate-50" dir="rtl">
      {/* شريط التنقل العلوي الثابت */}
      <nav className="bg-blue-700 text-white p-4 shadow-xl flex justify-between items-center px-8 sticky top-0 z-50">
        <h1 className="text-2xl font-black cursor-pointer tracking-tighter" onClick={() => setView("home")}>
          موسوعة <span className="text-blue-200">الجهاز التنفسي</span>
        </h1>
        <div className="space-x-reverse space-x-4 font-bold">
          <button onClick={() => setView("home")} className={`px-5 py-2 rounded-xl transition-all ${view === "home" ? "bg-white text-blue-700 shadow-md" : "hover:bg-blue-600"}`}>الرئيسية</button>
          <button onClick={() => setView("learn")} className={`px-5 py-2 rounded-xl transition-all ${view === "learn" ? "bg-white text-blue-700 shadow-md" : "hover:bg-blue-600"}`}>الشرح المفصل</button>
          <button onClick={startQuiz} className={`px-5 py-2 rounded-xl transition-all ${view === "quiz" ? "bg-white text-blue-700 shadow-md" : "border border-blue-400 hover:bg-blue-600"}`}>الاختبار التفاعلي</button>
        </div>
      </nav>

      {/* 1. الصفحة الرئيسية الفخمة */}
      {view === "home" && (
        <div className="flex flex-col items-center justify-center pt-20 px-4 animate-in fade-in zoom-in duration-1000 pb-20">
          <div className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-black mb-8 shadow-lg animate-bounce">
            منهج العلوم - الصف الخامس الابتدائي
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 text-center leading-[1.2]">
            اكتشف أسرار <br/> <span className="text-blue-600">التنفس والحياة</span>
          </h1>
          <p className="text-2xl text-slate-600 mb-12 text-center max-w-4xl leading-relaxed font-medium px-4">
            انضم إلينا في رحلة تفاعلية مذهلة داخل جسم الإنسان، لتتعلم كيف تعمل رئتاك وكيف يحصل جسمك على الطاقة اللازمة لنموك وحركتك كل يوم.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <button onClick={() => setView("learn")} className="bg-blue-600 text-white px-14 py-6 rounded-[2rem] text-3xl font-black shadow-2xl hover:bg-blue-700 hover:-translate-y-2 transition-all duration-300">
              ابدأ الدراسة الآن
            </button>
            <button onClick={startQuiz} className="bg-white border-4 border-blue-600 text-blue-600 px-14 py-6 rounded-[2rem] text-3xl font-black hover:bg-blue-50 hover:-translate-y-2 transition-all duration-300 shadow-xl">
              دخول التحدي
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-400 rounded-[60px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img src="/lungs.jpg" alt="Respiratory System" className="relative rounded-[50px] shadow-2xl w-[650px] border-[16px] border-white ring-1 ring-slate-100" />
          </div>
        </div>
      )}

      {/* 2. صفحة الشرح (النسخة الأكثر كثافة وتفصيلاً) */}
      {view === "learn" && (
        <div className="p-6 md:p-12 max-w-6xl mx-auto animate-in slide-in-from-bottom-12 duration-1000 pb-40 text-slate-800">
          
          <header className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-8 leading-tight">الدليل المعرفي الشامل للجهاز التنفسي</h2>
            <div className="flex justify-center items-center gap-4 text-xl text-slate-500 font-bold mb-8">
              <span className="w-12 h-1 bg-blue-300 rounded-full"></span>
              <span>رحلة الهواء من الأنف إلى الخلايا</span>
              <span className="w-12 h-1 bg-blue-300 rounded-full"></span>
            </div>
          </header>

          {/* نواتج التعلم */}
          <section className="bg-white p-12 rounded-[50px] border-t-8 border-blue-600 shadow-2xl mb-24 relative">
            <h3 className="text-3xl font-black text-blue-800 mb-10 flex items-center gap-4">🎯 ماذا ستتعلم في هذا الدرس؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "فهم أهمية الأكسجين في عملية حرق الغذاء لتوليد الطاقة.",
                "حفظ وترتيب أعضاء الجهاز التنفسي ومعرفة وظيفة كل عضو بدقة.",
                "شرح ميكانيكية التنفس (الشهيق والزفير) ودور عضلة الحجاب الحاجز.",
                "فهم كيفية انتقال الأكسجين للدم داخل الحويصلات الهوائية."
              ].map((goal, index) => (
                <div key={index} className="flex gap-5 items-start bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 shadow-md">{index+1}</span>
                  <p className="text-xl font-bold text-slate-700 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </section>

          {/* أهمية التنفس */}
          <section className="mb-24 px-4">
             <h3 className="text-4xl font-black text-slate-800 mb-10 border-r-[12px] border-blue-600 pr-8 uppercase tracking-tighter">أولاً: سر الحياة (أهمية التنفس)</h3>
             <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-12 rounded-[60px] shadow-2xl text-2xl leading-[1.8] text-white font-medium">
                جسمك مثل السيارة، يحتاج إلى وقود لكي يتحرك. الوقود هو "الغذاء"، ولكن الغذاء وحده لا يكفي؛ فهو يحتاج إلى شرارة ليتحول إلى طاقة. 
                هذه الشرارة هي <strong>الأكسجين</strong>. عملية التنفس هي التي توفر هذا الأكسجين ليقوم "بحرق" الغذاء داخل خلاياك، مما يمنحك الطاقة لكي تنمو، تفكر، تلعب، وحتى لكي ينبض قلبك وأنت نائم.
             </div>
          </section>

          {/* الرحلة التشريحية المفصلة */}
          <section className="mb-24">
            <h3 className="text-4xl font-black text-slate-800 mb-12 border-r-[12px] border-blue-600 pr-8">ثانياً: خريطة الجهاز التنفسي</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "الأنف: بوابة الفلترة", desc: "يفضل التنفس من الأنف لأنه مبطن بطبقة مخاطية وشعيرات دقيقة تحجز الأتربة، كما يحتوي على شعيرات دموية تدفئ الهواء قبل دخوله للرئتين.", icon: "👃" },
                { title: "البلعوم: ملتقى الطرق", desc: "تجويف مشترك يقع خلف الأنف والفم، يمر منه الهواء في طريقه للحنجرة، والطعام في طريقه للمريء.", icon: "👄" },
                { title: "القصبة الهوائية: الأنبوب القوي", desc: "أنبوب مزود بحلقات غضروفية ليبقى مفتوحاً دائماً، ومبطن بـ (أهداب) تطرد الأجسام الغريبة بعيداً عن الرئتين.", icon: "🌬️" },
                { title: "الشعب الهوائية: الأغصان", desc: "تتفرع القصبة إلى فرعين يدخل كل منهما إلى رئة، وتستمر في التفرع داخل الرئة حتى تصل إلى أصغر نقطة.", icon: "🌿" },
                { title: "الرئتان: محرك الحياة", desc: "أهم عضوين، محميان داخل القفص الصدري. الرئة اليمنى أكبر قليلاً، واليسرى مصممة لتترك مساحة للقلب المجاور لها.", icon: "🫁" },
                { title: "الحويصلات: معجزة التبادل", desc: "أكياس مجهرية دقيقة جداً في نهاية الشعب، يحيط بها الدم ليأخذ الأكسجين ويعطيها ثاني أكسيد الكربون ليخرج مع الزفير.", icon: "🫧" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[45px] shadow-xl border border-slate-100 hover:scale-[1.03] transition-all duration-500 group">
                  <div className="text-6xl mb-8 group-hover:animate-pulse transition-all">{item.icon}</div>
                  <h4 className="text-2xl font-black text-blue-800 mb-5">{item.title}</h4>
                  <p className="text-slate-600 leading-[1.7] text-xl font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* قسم الفيديو */}
          <section className="mb-24">
            <h3 className="text-3xl font-black text-slate-800 mb-10 flex items-center gap-4 italic underline decoration-red-500">📺 المعمل المرئي: آلية عمل الرئة</h3>
            <div className="aspect-video w-full rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-white ring-4 ring-blue-50">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/mOKmjYwfDGU" title="Scientific Animation" allowFullScreen></iframe>
            </div>
          </section>

          {/* ميكانيكا التنفس */}
          <section className="mb-24">
            <h3 className="text-4xl font-black text-slate-800 mb-12 border-r-[12px] border-blue-600 pr-8 uppercase">ثالثاً: ميكانيكا الشهيق والزفير</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white border-b-[15px] border-blue-700 p-12 rounded-[50px] shadow-2xl">
                <h4 className="text-4xl font-black text-blue-700 mb-8 flex items-center gap-4">🌬️ عملية الشهيق</h4>
                <div className="space-y-6 text-2xl text-slate-700 font-bold">
                  <p>🔹 <strong>الحجاب الحاجز:</strong> ينقبض ويتحرك للأسفل.</p>
                  <p>🔹 <strong>التجويف الصدري:</strong> يتسع ليسمح للرئتين بالتمدد.</p>
                  <p>🔹 <strong>الهواء:</strong> يندفع للداخل محملاً بالأكسجين.</p>
                </div>
              </div>
              <div className="bg-white border-b-[15px] border-blue-400 p-12 rounded-[50px] shadow-2xl">
                <h4 className="text-4xl font-black text-blue-400 mb-8 flex items-center gap-4">💨 عملية الزفير</h4>
                <div className="space-y-6 text-2xl text-slate-700 font-bold">
                  <p>🔹 <strong>الحجاب الحاجز:</strong> ينبسط ويتحرك للأعلى.</p>
                  <p>🔹 <strong>التجويف الصدري:</strong> يضيق ويضغط على الرئتين.</p>
                  <p>🔹 <strong>الهواء:</strong> يخرج محملاً بثاني أكسيد الكربون.</p>
                </div>
              </div>
            </div>
          </section>

          {/* الصحة والقاموس */}
          <section className="bg-slate-900 text-white p-16 rounded-[70px] mb-24 shadow-2xl border-t-[12px] border-green-500">
            <h3 className="text-4xl font-black mb-12 text-blue-400 underline decoration-white decoration-double">🛡️ حماية المحرك الحيوي</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xl leading-loose">
              <div>
                 <h4 className="text-3xl font-bold mb-6 text-green-400">كيف نحافظ عليه؟</h4>
                 <ul className="space-y-6 text-slate-300">
                   <li>📍 تناول الفاكهة الغنية بفيتامين (C) مثل البرتقال والجوافة.</li>
                   <li>📍 تجنب الأماكن الملوثة بالدخان والمدخنين تماماً.</li>
                   <li>📍 ممارسة الرياضة لتقوية عضلات التنفس وزيادة سعة الرئة.</li>
                 </ul>
              </div>
              <div className="bg-white/5 p-8 rounded-[40px]">
                 <h4 className="text-3xl font-bold mb-6 text-blue-300">قاموس الطالب الذكي</h4>
                 <div className="space-y-4">
                   <p><strong className="text-white underline">الحجاب الحاجز:</strong> عضلة قوية تفصل الصدر عن البطن.</p>
                   <p><strong className="text-white underline">الأوعية الدموية:</strong> شبكة دقيقة تحيط بالحويصلات لنقل الأكسجين.</p>
                   <p><strong className="text-white underline">التنفس:</strong> عملية حرق الغذاء بالأكسجين للحصول على طاقة.</p>
                 </div>
              </div>
            </div>
          </section>

          <button onClick={startQuiz} className="bg-blue-600 text-white px-20 py-8 rounded-[3rem] text-4xl font-black shadow-2xl block mx-auto hover:bg-blue-700 hover:scale-110 transition-all duration-300 animate-pulse">
             هل أنت مستعد للاختبار؟ 🚀
          </button>
        </div>
      )}

      {/* 3. صفحة الاختبار (النسخة النهائية) */}
      {view === "quiz" && (
        <div className="p-6 md:p-8 max-w-4xl mx-auto animate-in zoom-in duration-500 min-h-[85vh] flex flex-col justify-center items-center pb-20">
          {!showResult ? (
            <div className="w-full bg-white p-12 rounded-[60px] shadow-2xl border-b-[20px] border-blue-600">
              <div className="flex justify-between items-center mb-12">
                <span className="text-blue-700 font-black text-3xl bg-blue-50 px-8 py-3 rounded-3xl tracking-tight">السؤال {currentQuestion + 1} / {questions.length}</span>
                <div className="text-center">
                  <span className="text-slate-400 block text-xs font-bold uppercase mb-1">النقاط الحالية</span>
                  <span className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-3xl font-black text-2xl shadow-sm">{score}</span>
                </div>
              </div>
              <h3 className="text-4xl font-black mb-16 text-slate-800 leading-snug text-center px-4">{questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 gap-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`p-7 rounded-[2rem] border-4 text-right text-2xl font-black transition-all duration-300
                      ${selectedOption === index 
                        ? (index === questions[currentQuestion].answer ? "bg-green-100 border-green-600 text-green-900 scale-95 shadow-inner" : "bg-red-100 border-red-600 text-red-900 scale-95 shadow-inner") 
                        : "border-slate-100 hover:border-blue-500 hover:bg-blue-50 shadow-md hover:-translate-x-2"}
                    `}
                  >
                    <span className="ml-4 opacity-30 italic">{index + 1}.</span> {option}
                  </button>
                ))}
              </div>
              {selectedOption !== null && (
                <div className={`mt-14 text-center font-black text-4xl animate-bounce ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "إجابة عبقرية! 🌟" : "ركز أكثر في المرة القادمة! ❌"}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center bg-white p-20 rounded-[80px] shadow-2xl w-full border-t-[25px] border-yellow-400 animate-in fade-in duration-1000">
              <div className="text-[10rem] mb-10 drop-shadow-xl animate-pulse">🏆</div>
              <h2 className="text-6xl font-black text-slate-800 mb-8">عمل مذهل يا بطل!</h2>
              <p className="text-4xl mb-14 text-slate-600 font-bold">لقد حققت نتيجة متميزة: <br/><span className="text-blue-600 text-[8rem] font-black leading-none">{score}</span> <span className="text-slate-300 text-4xl">من {questions.length}</span></p>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <button onClick={startQuiz} className="bg-blue-600 text-white px-16 py-6 rounded-[2.5rem] text-3xl font-black hover:bg-blue-700 shadow-2xl transition-all hover:scale-105">إعادة التحدي 🔄</button>
                <button onClick={() => setView("home")} className="bg-slate-200 text-slate-800 px-16 py-6 rounded-[2.5rem] text-3xl font-black hover:bg-slate-300 shadow-xl transition-all hover:scale-105">الرئيسية 🏠</button>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}