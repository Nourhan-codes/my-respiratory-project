"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const questions = [
    { q: "ما هو العضو المشترك بين الطعام والهواء؟", options: ["الأنف", "البلعوم", "الحنجرة"], a: 1 },
    { q: "أين يتم تبادل الغازات؟", options: ["البلعوم", "الحويصلات الهوائية", "الأنف"], a: 1 },
    { q: "ماذا يحدث للحجاب الحاجز في الشهيق؟", options: ["يتحرك للأعلى", "يتحرك للأسفل", "يبقى ثابتاً"], a: 1 }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[current].a) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setDone(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center" dir="rtl">
      {!done ? (
        <div className="bg-white text-slate-800 p-10 rounded-[40px] w-full max-w-2xl shadow-2xl">
          <div className="mb-8 text-blue-600 font-black text-xl">سؤال {current + 1} من {questions.length}</div>
          <h2 className="text-3xl font-black mb-10">{questions[current].q}</h2>
          <div className="flex flex-col gap-4">
            {questions[current].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(i)} className="p-5 border-2 border-slate-200 rounded-2xl text-xl font-bold hover:bg-blue-50 hover:border-blue-500 transition-all text-right">
                {i + 1}. {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-6xl font-black mb-8">ممتاز يا بطل! 🏆</h2>
          <p className="text-4xl mb-12">درجتك هي: {score} من {questions.length}</p>
          <Link href="/"><button className="bg-blue-600 px-10 py-4 rounded-xl text-xl font-bold">العودة للرئيسية</button></Link>
        </div>
      )}
    </main>
  );
}