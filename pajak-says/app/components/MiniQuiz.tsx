"use client";

import { useMemo, useState } from "react";

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type MiniQuizProps = {
  questions: QuizQuestion[];
};

export default function MiniQuiz({ questions }: MiniQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(() => {
    return questions.filter((item, index) => selectedAnswers[index] === item.answer)
      .length;
  }, [questions, selectedAnswers]);

  const totalAnswered = Object.keys(selectedAnswers).length;

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResult(false);
  };

  return (
    <div className="mt-12 border border-orange-100 bg-white p-6 shadow-xl">
      <div className="mb-6">
        <p className="text-lg font-black text-orange-600">Mini Quiz</p>
        <h3 className="mt-2 text-3xl font-black text-slate-950">
          Tes Pemahaman Materi
        </h3>
        <p className="mt-3 text-lg font-semibold leading-8 text-slate-600">
          Jawab pertanyaan berikut untuk menguji pemahaman kamu terhadap materi ini.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={item.question} className="bg-orange-50 p-5">
            <p className="font-black text-orange-600">Soal {index + 1}</p>
            <h4 className="mt-2 text-xl font-black leading-8 text-slate-950">
              {item.question}
            </h4>

            <div className="mt-5 grid gap-3">
              {item.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrect = showResult && option === item.answer;
                const isWrong = showResult && isSelected && option !== item.answer;
                const letter = ["A", "B", "C", "D"][optionIndex];

                return (
                  <button
                    key={option}
                    onClick={() =>
                      setSelectedAnswers({
                        ...selectedAnswers,
                        [index]: option,
                      })
                    }
                    className={`border px-5 py-4 text-left transition ${
                      isCorrect
                        ? "border-green-500 bg-green-100 text-green-800"
                        : isWrong
                        ? "border-red-500 bg-red-100 text-red-800"
                        : isSelected
                        ? "border-orange-600 bg-orange-100 text-orange-800"
                        : "border-slate-200 bg-white text-slate-700 hover:border-orange-400"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                          isCorrect
                            ? "bg-green-600 text-white"
                            : isWrong
                            ? "bg-red-600 text-white"
                            : isSelected
                            ? "bg-orange-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {letter}
                      </span>

                      <span className="text-lg font-bold leading-7">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-5 border-l-4 border-orange-600 bg-white p-5">
                <p className="text-lg font-black text-slate-950">Pembahasan</p>
                <p className="mt-2 text-lg font-semibold leading-8 text-slate-700">
                  Jawaban benar:{" "}
                  <span className="font-black text-orange-600">
                    {item.answer}
                  </span>
                </p>
                <p className="mt-2 text-lg font-semibold leading-8 text-slate-700">
                  {item.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-bold text-slate-600">
          Terjawab: {totalAnswered} dari {questions.length}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={resetQuiz}
            className="bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800"
          >
            Reset
          </button>

          <button
            onClick={() => setShowResult(true)}
            disabled={totalAnswered < questions.length}
            className="bg-orange-600 px-6 py-4 font-black text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-300"
          >
            Cek Jawaban
          </button>
        </div>
      </div>

      {showResult && (
        <div className="mt-6 bg-slate-950 p-6 text-white">
          <p className="text-xl font-black">
            Skor kamu: {score} dari {questions.length}
          </p>
          <p className="mt-2 font-semibold text-orange-300">
            {score === questions.length
              ? "Mantap! Semua jawaban benar."
              : "Lumayan. Coba baca ulang bagian yang masih salah."}
          </p>
        </div>
      )}
    </div>
  );
}