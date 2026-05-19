"use client";

import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "PPh Pasal 22 adalah pajak yang dipungut atas transaksi tertentu oleh pihak yang ditunjuk pemerintah. Contoh transaksi yang termasuk objek PPh Pasal 22 adalah ....",
    options: [
      "Pembayaran gaji karyawan",
      "Impor barang",
      "Pembayaran honor narasumber",
      "Pembayaran bunga tabungan",
    ],
    answer: "Impor barang",
    explanation:
      "Impor barang termasuk salah satu objek utama PPh Pasal 22.",
  },
  {
    question:
      "Pihak yang berwenang memungut PPh Pasal 22 atas kegiatan impor adalah ....",
    options: [
      "Direktorat Jenderal Bea dan Cukai",
      "Dinas Pendidikan",
      "Bank Indonesia",
      "Pemerintah daerah",
    ],
    answer: "Direktorat Jenderal Bea dan Cukai",
    explanation:
      "Dalam kegiatan impor, pemungutan PPh Pasal 22 dilakukan melalui mekanisme kepabeanan oleh Direktorat Jenderal Bea dan Cukai.",
  },
  {
    question:
      "Tarif PPh Pasal 22 atas impor barang dengan API secara umum adalah ....",
    options: ["0,25%", "1,5%", "2,5%", "7,5%"],
    answer: "2,5%",
    explanation:
      "Impor barang dengan API secara umum menggunakan tarif 2,5% dari nilai impor.",
  },
  {
    question:
      "Tarif PPh Pasal 22 atas impor barang non-API secara umum adalah ....",
    options: ["0,5%", "1,5%", "2,5%", "7,5%"],
    answer: "7,5%",
    explanation:
      "Impor barang tanpa API secara umum dikenakan tarif 7,5% dari nilai impor.",
  },
  {
    question:
      "Pembelian barang oleh instansi pemerintah umumnya dikenakan PPh Pasal 22 sebesar ....",
    options: ["0,25%", "0,5%", "1,5%", "5%"],
    answer: "1,5%",
    explanation:
      "Pembelian barang oleh instansi pemerintah umumnya dikenakan PPh Pasal 22 sebesar 1,5% dari harga pembelian tidak termasuk PPN.",
  },
  {
    question:
      "Jika Wajib Pajak tidak memiliki NPWP, tarif PPh Pasal 22 dapat dikenakan ....",
    options: [
      "Lebih rendah 50%",
      "Lebih tinggi 100%",
      "Tetap sama",
      "Tidak dipungut sama sekali",
    ],
    answer: "Lebih tinggi 100%",
    explanation:
      "Wajib Pajak yang tidak memiliki NPWP dapat dikenakan tarif 100% lebih tinggi dari tarif normal untuk PPh Pasal 22 yang tidak final.",
  },
  {
    question:
      "Penjualan barang sangat mewah tertentu dikenakan PPh Pasal 22 dengan tarif ....",
    options: ["0,25%", "1,5%", "2,5%", "5%"],
    answer: "5%",
    explanation:
      "Barang sangat mewah tertentu dikenakan PPh Pasal 22 sebesar 5% dari harga jual tidak termasuk PPN dan PPnBM.",
  },
  {
    question:
      'Istilah "Nilai Impor" sebagai Dasar Pengenaan Pajak PPh 22 Impor merupakan penjumlahan dari ....',
    options: [
      "Cost + Insurance + Freight",
      "CIF + PPN + PPnBM",
      "CIF + Bea Masuk",
      "Harga Barang di Luar Negeri + Biaya Kirim",
    ],
    answer: "CIF + Bea Masuk",
    explanation:
      "Dalam bentuk sederhana, nilai impor dihitung dari CIF ditambah Bea Masuk. Pada kasus tertentu dapat ditambah pungutan lain sesuai ketentuan kepabeanan.",
  },
  {
    question:
      "Sifat PPh Pasal 22 atas penjualan bahan bakar minyak oleh Pertamina kepada penyalur/SPBU swasta adalah ....",
    options: ["Tidak Final", "Final", "Semi-Final", "Bebas Pajak"],
    answer: "Final",
    explanation:
      "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur/agen dapat bersifat final.",
  },
  {
    question:
      "Objek pajak yang dikenakan tarif PPh Pasal 22 sebesar 5% karena termasuk barang sangat mewah adalah ....",
    options: [
      "Rumah dengan harga jual Rp5.000.000.000",
      "Apartemen seharga Rp10.000.000.000",
      "Kapal pesiar pribadi",
      "Kendaraan roda empat berkapasitas 1.500 cc",
    ],
    answer: "Kapal pesiar pribadi",
    explanation:
      "Kapal pesiar pribadi termasuk contoh barang sangat mewah yang dapat dikenakan PPh Pasal 22.",
  },
];

export default function KuisPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(() => {
    return quizQuestions.filter(
      (item, index) => selectedAnswers[index] === item.answer
    ).length;
  }, [selectedAnswers]);

  const totalAnswered = Object.keys(selectedAnswers).length;
  const progress = Math.round((totalAnswered / quizQuestions.length) * 100);
  const scorePercent = Math.round((score / quizQuestions.length) * 100);

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResult(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        label="Tes Pemahaman"
        title="Kuis PPh Pasal 22"
        description="Kerjakan latihan soal pilihan ganda berdasarkan modul pembelajaran PPh Pasal 22."
      />

      <section className="bg-orange-50 px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[330px_1fr]">
          {/* Side Panel */}
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">Panel Kuis</h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Jawab semua soal, lalu cek hasilnya.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold text-orange-300">
                  Progress Jawaban
                </p>
                <p className="mt-2 text-4xl font-black">{progress}%</p>

                <div className="mt-4 h-3 bg-white/20">
                  <div
                    className="h-3 bg-orange-600 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-3 text-sm font-bold text-slate-300">
                  {totalAnswered} dari {quizQuestions.length} soal terjawab
                </p>
              </div>

              {showResult && (
                <div className="mt-5 border border-orange-100 bg-orange-50 p-5">
                  <p className="text-sm font-black text-orange-600">
                    Skor Akhir
                  </p>
                  <p className="mt-2 text-4xl font-black text-slate-950">
                    {score}/{quizQuestions.length}
                  </p>
                  <p className="mt-2 text-lg font-black text-orange-600">
                    {scorePercent}
                  </p>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                    {scorePercent >= 80
                      ? "Mantap! Pemahaman kamu sudah sangat baik."
                      : scorePercent >= 60
                      ? "Lumayan. Coba baca ulang beberapa materi yang masih salah."
                      : "Perlu latihan lagi. Buka kembali materi Pengertian, Tarif, dan Pemungut."}
                  </p>
                </div>
              )}

              <button
                onClick={resetQuiz}
                className="mt-5 w-full bg-slate-950 px-5 py-4 font-black text-white transition hover:bg-slate-800"
              >
                Ulangi Kuis
              </button>
            </div>
          </aside>

          {/* Main Quiz */}
          <div>
            <div className="mb-8 border border-orange-100 bg-white p-7 shadow-xl">
              <p className="text-lg font-black text-orange-600">
                Soal Pilihan Ganda
              </p>
              <h2 className="mt-2 text-4xl font-black text-slate-950">
                Latihan Soal
              </h2>
              <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">
                Pilih satu jawaban yang paling tepat. Setelah menekan tombol cek
                jawaban, sistem akan menampilkan jawaban benar dan pembahasan.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="border border-orange-100 bg-white p-8 shadow-xl"
                >
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-black text-orange-600">
                        Soal {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-black leading-9 text-slate-950">
                        {item.question}
                      </h3>
                    </div>

                    {showResult && (
                      <div
                        className={`px-4 py-2 text-sm font-black ${
                          selectedAnswers[index] === item.answer
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {selectedAnswers[index] === item.answer
                          ? "Benar"
                          : "Salah"}
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4">
                    {item.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswers[index] === option;
                      const isCorrect = showResult && option === item.answer;
                      const isWrong =
                        showResult && isSelected && option !== item.answer;

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
                          className={`border px-5 py-5 text-left transition ${
                            isCorrect
                              ? "border-green-500 bg-green-100 text-green-800"
                              : isWrong
                              ? "border-red-500 bg-red-100 text-red-800"
                              : isSelected
                              ? "border-orange-600 bg-orange-100 text-orange-800"
                              : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:bg-orange-50"
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
                    <div className="mt-6 border-l-4 border-orange-600 bg-orange-50 p-5">
                      <p className="text-lg font-black text-slate-950">
                        Pembahasan
                      </p>
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

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowResult(true)}
                disabled={totalAnswered < quizQuestions.length}
                className="bg-orange-600 px-10 py-5 text-xl font-black text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-300"
              >
                Cek Jawaban
              </button>

              <button
                onClick={resetQuiz}
                className="bg-slate-950 px-10 py-5 text-xl font-black text-white transition hover:bg-slate-800"
              >
                Reset
              </button>
            </div>

            {totalAnswered < quizQuestions.length && !showResult && (
              <p className="mt-5 text-center font-bold text-slate-600">
                Jawab semua soal dulu agar tombol cek jawaban aktif.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}