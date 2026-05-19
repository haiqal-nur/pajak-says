"use client";

import { Content } from "next/font/google";
import { useState } from "react";

const materiList = [
  {
    id: "umum-perpajakan",
    number: "1",
    title: "Umum Perpajakan dan PPh",
    level: 1,
    content: [
      "Pajak merupakan kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan, bersifat memaksa berdasarkan undang-undang, tidak memperoleh imbalan secara langsung, dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat. Dalam sistem keuangan negara, pajak memiliki peranan penting karena menjadi salah satu sumber utama penerimaan negara untuk membiayai pembangunan, pelayanan publik, pendidikan, kesehatan, infrastruktur, serta berbagai program pemerintahan.",
      "Salah satu jenis pajak yang memiliki peranan besar adalah Pajak Penghasilan atau PPh. PPh dikenakan atas penghasilan yang diterima atau diperoleh wajib pajak dalam suatu tahun pajak. Penghasilan dalam konteks ini tidak hanya berupa gaji, tetapi juga dapat berupa laba usaha, keuntungan penjualan harta, bunga, dividen, royalti, sewa, hadiah, imbalan jasa, dan tambahan kemampuan ekonomis lainnya. Dalam pelaksanaannya, PPh dapat dibayar sendiri oleh wajib pajak atau dipotong/dipungut oleh pihak tertentu sesuai ketentuan perpajakan.",
      "Dalam sistem PPh di Indonesia, terdapat beberapa jenis pemotongan dan pemungutan pajak, seperti PPh Pasal 21, PPh Pasal 22, PPh Pasal 23, PPh Pasal 24, PPh Pasal 25, dan PPh Pasal 26. Setiap jenis memiliki objek, mekanisme, tarif, dan pihak yang terlibat berbeda. PPh Pasal 22 menjadi salah satu bentuk pemungutan PPh yang penting karena berkaitan erat dengan transaksi barang, kegiatan impor, pembelian oleh pemerintah atau badan tertentu, penjualan hasil industri tertentu, serta kegiatan usaha lain yang ditetapkan oleh peraturan.",
    ],
  },
  {
    id: "pph-22",
    number: "2",
    title: "Pajak Penghasilan Pasal 22",
    level: 1,
    content: [
      "PPh Pasal 22 merupakan salah satu jenis Pajak Penghasilan yang dipungut oleh pihak tertentu atas transaksi tertentu.",
      "Jenis pajak ini sering berkaitan dengan kegiatan impor, pembelian barang oleh pemerintah, serta transaksi tertentu pada badan usaha atau industri tertentu.",
    ],
  },
  {
    id: "pengertian-pph-22",
    number: "2.1",
    title: "Pengertian PPh Pasal 22",
    level: 2,
    content: [
      "PPh Pasal 22 adalah pemungutan PPh yang dilakukan oleh pihak tertentu yang ditunjuk oleh pemerintah atas transaksi tertentu. Transaksi tersebut umumnya berkaitan dengan penyerahan barang, impor barang, ekspor komoditas tertentu, pembelian barang oleh instansi pemerintah, pembelian barang oleh badan usaha tertentu, penjualan hasil produksi industri tertentu, penjualan bahan bakar, transaksi emas, serta kegiatan usaha lain yang diatur dalam ketentuan perpajakan. Ketentuan terbaru yang menjadi rujukan utama adalah PMK Nomor 51 Tahun 2025 tentang pemungutan PPh Pasal 22 sehubungan dengan pembayaran atas penyerahan barang dan kegiatan di bidang impor atau kegiatan usaha di bidang lain.",
      "Secara sederhana, PPh Pasal 22 dapat dipahami sebagai pajak yang dipungut di muka pada saat transaksi tertentu terjadi. Berbeda dengan pajak yang dibayar sendiri oleh wajib pajak, PPh Pasal 22 melibatkan pihak pemungut, seperti instansi pemerintah, Direktorat Jenderal Bea dan Cukai, bank devisa, BUMN, industri tertentu, produsen/importir BBM, BBG, dan pelumas, serta pihak lain yang ditunjuk. Dengan mekanisme ini, negara dapat mengamankan penerimaan pajak lebih awal dan mengawasi transaksi yang memiliki potensi pajak cukup besar.",
    ],
  },
  {
    id: "definisi-pph-22",
    number: "2.2",
    title: "Definisi PPh Pasal 22 Menurut Ketentuan Perpajakan",
    level: 2,
    content: [
      "Menurut ketentuan perpajakan, PPh Pasal 22 merupakan pajak yang dipungut oleh pihak-pihak tertentu atas kegiatan tertentu, terutama yang berhubungan dengan pembayaran atas penyerahan barang, kegiatan impor, atau kegiatan usaha lainnya. Ketentuan ini diatur lebih lanjut dalam Peraturan Menteri Keuangan mengenai pemungutan PPh Pasal 22 atas pembayaran penyerahan barang dan kegiatan di bidang impor atau kegiatan usaha di bidang lain.",
      "Definisi tersebut menunjukkan bahwa terdapat tiga unsur penting dalam PPh Pasal 22, yaitu:",
    ],
    points: [
      "Adanya transaksi atau kegiatan tertentu, seperti impor, pembelian barang, dan penjualan barang tertentu.",
      "Adanya pihak pemungut, yaitu pihak yang ditunjuk oleh pemerintah.",
      "Adanya kewajiban pemungutan pajak, yaitu pajak dipungut pada saat transaksi terjadi atau pada saat pembayaran dilakukan.",
    ],
    afterPoints: [
      "Dengan demikian, PPh Pasal 22 bukan pajak yang berlaku umum untuk semua penghasilan, melainkan pajak yang dikenakan secara khusus atas transaksi tertentu yang telah ditentukan dalam peraturan perpajakan.",
    ],
  },
  {
    id: "latar-belakang",
    number: "2.3",
    title: "Latar Belakang dan Tujuan Pemungutan PPh Pasal 22",
    level: 2,
    content: [
      "PPh Pasal 22 dilatarbelakangi oleh kebutuhan pemerintah untuk mengamankan penerimaan pajak dari transaksi yang bernilai ekonomi besar dan mudah diidentifikasi. Transaksi seperti impor, belanja barang pemerintah, pembelian oleh BUMN, penjualan hasil produksi industri tertentu, penjualan BBM, BBG, pelumas, transaksi komoditas tambang, serta transaksi emas merupakan kegiatan ekonomi yang memiliki potensi penerimaan pajak. Oleh karena itu, pemungutan dilakukan langsung pada saat transaksi agar penerimaan pajak dapat dihimpun lebih awal.",
      "Tujuan pemungutan PPh Pasal 22 antara lain:",
    ],
    points: [
      "Mengamankan penerimaan negara PPh Pasal 22 membantu negara memperoleh penerimaan pajak lebih awal melalui pemungutan pada saat transaksi terjadi.",
      "Meningkatkan kepatuhan Wajib Pajak Karena pajak dipungut oleh pihak tertentu, risiko Wajib Pajak tidak melaporkan penghasilan dapat dikurangi.",
      "Mempermudah pengawasan transaksi Transaksi impor, belanja pemerintah, dan penjualan barang tertentu lebih mudah diawasi karena melibatkan pihak pemungut resmi.",
      "Mendorong tertib administrasi perpajakan Adanya bukti pungut, penyetoran, dan pelaporan membuat transaksi lebih terdokumentasi.",
      "Menjadi alat kontrol atas transaksi strategis Pemerintah dapat mengawasi transaksi tertentu, terutama impor, komoditas, penjualan barang sangat mewah, dan transaksi yang melibatkan badan usaha tertentu.",
    ],
  },
  {
    id: "karakteristik",
    number: "2.4",
    title: "Karakteristik PPh Pasal 22",
    level: 2,
    content: [
      "PPh Pasal 22 memiliki beberapa karakteristik utama. Pertama, menggunakan mekanisme pemungutan oleh pihak tertentu yang ditunjuk. Kedua, objeknya banyak berhubungan dengan transaksi barang, bukan semata-mata penghasilan dari pekerjaan atau jasa. Ketiga, tarifnya tidak tunggal karena bergantung pada jenis transaksi, pihak yang terlibat, serta dasar pengenaan pajaknya.",
      "Karakteristik lain yang penting adalah sifat pemungutannya. Pada umumnya, PPh Pasal 22 bersifat tidak final dan dapat diperhitungkan sebagai kredit pajak dalam SPT Tahunan. Namun, terdapat transaksi tertentu yang bersifat final, yaitu penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen. DJP menegaskan bahwa semua pemungutan PPh Pasal 22 pada dasarnya tidak final, kecuali transaksi BBM, BBG, dan pelumas tersebut.",
    ],
  },
  {
    id: "kedudukan",
    number: "2.5",
    title: "Kedudukan PPh Pasal 22 dalam Pajak Penghasilan",
    level: 2,
    content: [
      "Dalam sistem PPh, PPh Pasal 22 berkedudukan sebagai salah satu mekanisme pelunasan pajak dalam tahun berjalan. Apabila bersifat tidak final, pajak yang telah dipungut dapat digunakan sebagai kredit pajak untuk mengurangi PPh terutang pada akhir tahun. Dengan demikian, PPh Pasal 22 bukan pajak tambahan yang berdiri sendiri, melainkan bagian dari sistem pelunasan kewajiban PPh.",
      "Kedudukan PPh Pasal 22 juga menunjukkan bahwa sistem perpajakan Indonesia tidak hanya menggunakan mekanisme pembayaran mandiri, tetapi juga mekanisme pemungutan oleh pihak ketiga. Melalui sistem ini, pemerintah dapat menjangkau transaksi tertentu sejak awal, terutama transaksi yang bernilai besar, rutin, dan berada pada titik pengawasan yang jelas.",
    ],
  },
  {
    id: "dasar-hukum",
    number: "3",
    title: "Dasar Hukum PPh Pasal 22",
    level: 1,
    content: [
      "Dasar hukum PPh Pasal 22 berasal dari ketentuan peraturan perpajakan yang mengatur tentang Pajak Penghasilan dan mekanisme pemungutannya.",
      "Bagian dasar hukum penting dipahami agar pembelajaran PPh Pasal 22 tidak hanya bersifat praktis, tetapi juga memiliki landasan aturan yang jelas.",
    ],
  },
  {
    id: "uu-pph",
    number: "3.1",
    title: "Undang-Undang Pajak Penghasilan",
    level: 2,
    content: [
      "Dasar utama PPh Pasal 22 terdapat dalam Undang-Undang Nomor 7 Tahun 1983 tentang Pajak Penghasilan sebagaimana telah beberapa kali diubah, terakhir melalui Undang-Undang Nomor 6 Tahun 2023. Pasal 22 UU PPh memberikan kewenangan kepada Menteri Keuangan untuk menunjuk pihak tertentu sebagai pemungut PPh atas transaksi yang ditetapkan. PMK Nomor 51 Tahun 2025 juga dinyatakan sebagai aturan pelaksanaan dari Pasal 22 ayat (2) UU PPh tersebut.",
      "Dengan dasar hukum ini, PPh Pasal 22 memiliki legitimasi yuridis yang jelas. Pemungutan tidak boleh dilakukan oleh sembarang pihak, tetapi hanya oleh pihak yang ditunjuk berdasarkan ketentuan peraturan perundang-undangan. Undang-Undang PPh menjadi dasar normatif, sedangkan rincian teknisnya diatur lebih lanjut dalam Peraturan Menteri Keuangan dan ketentuan administrasi perpajakan.",
    ],
  },
  {
    id: "pmk-pph-22",
    number: "3.2",
    title: "Peraturan Menteri Keuangan tentang PPh Pasal 22",
    level: 2,
    content: [
      "Peraturan Menteri Keuangan berfungsi sebagai aturan pelaksana yang menjelaskan lebih rinci mengenai ruang lingkup, pemungut, objek, tarif, pengecualian, serta tata cara pelaksanaan PPh Pasal 22. Ketentuan terbaru yang menjadi rujukan utama adalah PMK Nomor 51 Tahun 2025. Peraturan ini mengatur pemungutan PPh Pasal 22 atas pembayaran penyerahan barang, impor, ekspor komoditas tambang tertentu, kegiatan usaha bulion, dan kegiatan usaha lain.",
      "Selain PMK Nomor 51 Tahun 2025, terdapat ketentuan khusus untuk objek tertentu. Misalnya, transaksi emas perhiasan dan emas batangan diatur melalui PMK Nomor 48 Tahun 2023 yang telah diubah, antara lain dengan PMK Nomor 52 Tahun 2025. Ketentuan tersebut mengatur perlakuan PPh dan PPN atas penjualan atau penyerahan emas perhiasan, emas batangan, serta transaksi terkait emas.",
    ],
  },
  {
    id: "ketentuan-teknis",
    number: "3.3",
    title: "Ketentuan Teknis Pelaksanaan PPh Pasal 22",
    level: 2,
    content: [
      "Ketentuan teknis pelaksanaan PPh Pasal 22 mencakup tata cara pemungutan, penyetoran, pelaporan, bukti pemungutan, penggunaan NPWP atau identitas perpajakan, serta pengecualian. Ketentuan teknis ini penting karena setiap jenis transaksi memiliki dasar pengenaan, tarif, saat terutang, dan pihak pemungut yang berbeda.",
      "Dalam praktiknya, pemungut harus memastikan apakah suatu transaksi termasuk objek PPh Pasal 22, apakah terdapat pengecualian, tarif apa yang digunakan, serta bagaimana cara menyetor dan melaporkan pajaknya. Ketelitian ini penting agar tidak terjadi kesalahan pemungutan, kekurangan setor, atau kesalahan administrasi dalam pelaporan.",
    ],
  },
];

export default function PengertianPage() {
  const [activeId, setActiveId] = useState("umum-perpajakan");

  const activeIndex = materiList.findIndex((item) => item.id === activeId);
  const activeMateri = materiList[activeIndex];

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveId(materiList[activeIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (activeIndex < materiList.length - 1) {
      setActiveId(materiList[activeIndex + 1].id);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-[78px]">
      {/* Header */}
      <section className="bg-orange-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-black text-orange-600">
            Materi Pembelajaran
          </p>
          <h1 className="mt-3 text-5xl font-black text-slate-950 md:text-6xl">
            Pengertian PPh Pasal 22
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            Pelajari konsep dasar PPh Pasal 22 melalui sub materi yang tersusun
            secara bertahap.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[360px_1fr]">
          {/* Side Panel */}
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="border-b border-orange-100 bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">Daftar Sub Materi</h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Klik materi untuk membuka isi pembahasan.
              </p>
            </div>

            <div className="max-h-[calc(100vh-190px)] overflow-y-auto p-3">
              {materiList.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`mb-2 w-full text-left transition ${
                      item.level === 2 ? "pl-6" : "pl-0"
                    }`}
                  >
                    <div
                      className={`border px-4 py-4 ${
                        isActive
                          ? "border-orange-600 bg-orange-600 text-white shadow-md"
                          : "border-orange-100 bg-orange-50 text-slate-800 hover:border-orange-400 hover:bg-white"
                      }`}
                    >
                      <div className="flex gap-3">
                        <span
                          className={`shrink-0 font-black ${
                            isActive ? "text-white" : "text-orange-600"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span className="font-bold leading-6">{item.title}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Materi */}
          <div>
            <div className="border border-orange-100 bg-white p-8 shadow-xl md:p-10">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-black text-orange-600">
                    Sub Materi {activeMateri.number}
                  </p>
                  <h2 className="mt-2 text-4xl font-black leading-tight text-slate-950">
                    {activeMateri.title}
                  </h2>
                </div>

                <div className="bg-orange-50 px-5 py-3 font-black text-orange-600">
                  {activeIndex + 1} / {materiList.length}
                </div>
              </div>

              <div className="space-y-6">
                {activeMateri.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xl font-semibold leading-9 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {activeMateri.points && (
  <ol className="mt-8 list-decimal space-y-4 pl-8 text-xl font-semibold leading-9 text-slate-700">
    {activeMateri.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ol>
)}

              {activeMateri.afterPoints && (
  <div className="mt-8 space-y-6">
    {activeMateri.afterPoints.map((paragraph, index) => (
      <p
        key={index}
        className="text-xl font-semibold leading-9 text-slate-700"
      >
        {paragraph}
      </p>
    ))}
  </div>
)}

              <div className="mt-10 border-l-4 border-orange-600 bg-orange-50 p-6">
                <p className="text-lg font-black text-slate-950">Catatan Belajar</p>
                <p className="mt-2 text-lg font-semibold leading-8 text-slate-700">
                  Setelah memahami bagian ini, lanjutkan ke sub materi berikutnya
                  agar alur pembelajaran lebih runtut.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-between gap-4">
                <button
                  onClick={goToPrevious}
                  disabled={activeIndex === 0}
                  className="bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  ← Sebelumnya
                </button>

                <button
                  onClick={goToNext}
                  disabled={activeIndex === materiList.length - 1}
                  className="bg-orange-600 px-7 py-4 text-lg font-black text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-300"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-8 bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-black">Progress Materi</p>
                <p className="font-bold text-orange-300">
                  {Math.round(((activeIndex + 1) / materiList.length) * 100)}%
                </p>
              </div>

              <div className="mt-4 h-3 bg-white/20">
                <div
                  className="h-3 bg-orange-600 transition-all"
                  style={{
                    width: `${((activeIndex + 1) / materiList.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}