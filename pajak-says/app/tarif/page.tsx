"use client";

import { useState } from "react";

type MateriItem = {
  id: string;
  number: string;
  title: string;
  level: 1 | 2;
  content: string[];
  formulas?: string[];
  notes?: string[];
  afterTables?: string[];
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
};

const materiList: MateriItem[] = [
  {
    id: "tarif-pph-22",
    number: "1",
    title: "Tarif PPh Pasal 22",
    level: 1,
    content: [
      "Tarif PPh Pasal 22 merupakan besaran persentase pajak yang dikenakan atas transaksi tertentu.",
      "Besarnya tarif tidak selalu sama karena bergantung pada jenis transaksi, objek pajak, pihak yang melakukan transaksi, dan ketentuan perpajakan yang berlaku.",
      "Dalam praktiknya, PPh Pasal 22 banyak ditemui pada transaksi impor, pembelian barang oleh pemerintah, penjualan hasil produksi industri tertentu, serta transaksi tertentu lainnya.",
    ],
    notes: [
      "Bagian ini berfungsi sebagai pengantar sebelum mempelajari tarif berdasarkan jenis transaksi.",
    ],
  },
  {
    id: "pengantar-tarif",
    number: "1.1",
    title: "Pengantar Tarif PPh Pasal 22",
    level: 2,
    content: [
      "Tarif PPh Pasal 22 tidak bersifat tunggal. Tarifnya berbeda-beda sesuai jenis transaksi, objek pajak, dan pihak yang terlibat. Perbedaan tarif ini muncul karena objek PPh Pasal 22 sangat beragam, mulai dari impor, pembelian barang, penjualan hasil industri, penjualan BBM, BBG, pelumas, barang sangat mewah, transaksi emas, hingga transaksi melalui sistem pengadaan. Secara umum, tarif PPh Pasal 22 diterapkan atas dasar pengenaan tertentu, seperti nilai impor, harga pembelian, harga jual, atau nilai pembayaran. Karena itu, sebelum menghitung PPh Pasal 22, pemungut harus menentukan terlebih dahulu jenis transaksi dan dasar pengenaan yang benar.",
    ],
  },
  {
    id: "impor-ekspor",
    number: "1.2",
    title: "Tarif PPh Pasal 22 atas Impor dan Ekspor Barang",
    level: 2,
    content: [
      "Tarif PPh Pasal 22 atas impor dan ekspor barang umumnya dibedakan berdasarkan status importir dan jenis barang.",
      "Beberapa tarif penting dalam PPh Pasal 22 atas impor dan ekspor barang adalah sebagai berikut:",
    ],
    tables: [
      {
        title: "Tabel Impor",
        headers: ["Jenis Barang", "Status", "Tarif"],
        rows: [
          ["Barang Tertentu (Lamp. A)", "Dengan/tanpa API", "10% × Nilai Impor"],
          ["Barang Tertentu Lainnya (Lamp. B)", "Dengan/tanpa API", "7,5% × Nilai Impor"],
          ["Kedelai, Gandum, Tepung Terigu", "Dengan/tanpa API", "0,5% × Nilai Impor"],
          ["Barang Selain di atas", "Dengan API", "2,5% × Nilai Impor"],
          ["Barang Selain di atas", "Tanpa API", "7,5% × Nilai Impor"],
          ["Barang yang Tidak Dikuasai", "Tanpa Syarat", "7,5% × Harga Jual Lelang"],
        ],
      },
      {
        title: "Tabel Ekspor",
        headers: ["Jenis Barang", "Status", "Tarif"],
        rows: [
          [
            "Komoditas Tambang seperti Batubara, Mineral Logam, dan Bukan Logam",
            "Dilakukan oleh eksportir",
            "1,5% × Nilai Ekspor",
          ],
        ],
      },
    ],
    notes: [
      "DJP mencantumkan tarif non-API sebesar 7,5% dari nilai impor dan menjelaskan bahwa untuk barang tertentu, tarif dapat mengikuti lampiran PMK yang berlaku.",
    ],
  },
  {
    id: "pembelian-pemerintah",
    number: "1.3",
    title: "Tarif PPh Pasal 22 atas Pembelian Barang oleh Pemerintah",
    level: 2,
    content: [
      "Pembelian barang oleh pemerintah dikenai tarif 1,5% dari harga pembelian tidak termasuk PPN. Tarif ini berlaku atas belanja barang yang memenuhi syarat pemungutan, terutama transaksi yang nilainya melebihi batas pengecualian dan bukan transaksi yang dipecah-pecah. Apabila pembayaran dilakukan melalui mekanisme atau sistem tertentu yang telah dipungut oleh pihak lain, pemungutan dapat mengikuti ketentuan khusus yang berlaku. Oleh karena itu, transaksi pengadaan pemerintah harus dilihat dari mekanisme pembayarannya.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Harga Pembelian",
    ],
    notes: [
      "Contoh umum yang sering digunakan dalam pembelajaran: pembelian barang oleh pemerintah dikenakan tarif 1,5%.",
    ],
  },
  {
    id: "produksi-industri",
    number: "1.4",
    title: "Tarif PPh Pasal 22 atas Penjualan Hasil Produksi Industri Tertentu",
    level: 2,
    content: [
      "Tarif PPh Pasal 22 atas penjualan hasil produksi industri tertentu berbeda-beda tergantung jenis industrinya.",
      "Secara umum, tarif yang digunakan adalah sebagai berikut:",
    ],
    tables: [
      {
        title: "Tabel Tarif Industri Tertentu",
        headers: ["Jenis Industri", "Tarif"],
        rows: [
          ["Industri kertas", "0,1% dari DPP PPN"],
          ["Industri semen", "0,25% dari DPP PPN"],
          ["Industri baja", "0,3% dari DPP PPN"],
          ["Industri otomotif", "0,45% dari DPP PPN"],
          ["Industri farmasi", "0,3% dari DPP PPN"],
        ],
      },
    ],
    afterTables: [
      "Tarif tersebut digunakan ketika industri menjual hasil produksinya kepada distributor di dalam negeri.",
      "Beberapa ketentuan teknis terkait industri kertas, semen, dan baja juga dapat diatur lebih lanjut dalam dokumen peraturan perpajakan yang berlaku.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif Industri × DPP PPN",
    ],
  },
  {
    id: "bbm-bbg-pelumas",
    number: "1.5",
    title: "Tarif PPh Pasal 22 atas Penjualan BBM, BBG, dan Pelumas",
    level: 2,
    content: [
      "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas ditentukan berdasarkan jenis produk dan pihak pembelinya.",
      "Berikut merupakan kategori energi dalam penjualan BBM, gas, dan pelumas:",
    ],
    tables: [
      {
        title: "Tabel Tarif BBM, BBG, dan Pelumas",
        headers: ["Kategori Penjualan", "Tarif"],
        rows: [
          [
            "BBM ke SPBU Pertamina",
            "0,25% × Penjualan tidak termasuk PPN",
          ],
          [
            "BBM ke SPBU Swasta / Non-SPBU",
            "0,3% × Penjualan tidak termasuk PPN",
          ],
          [
            "Bahan Bakar Gas / Pelumas",
            "0,3% × Penjualan tidak termasuk PPN",
          ],
        ],
      },
    ],
    afterTables: [
      "Untuk BBM, tarif dapat berbeda antara penjualan kepada SPBU tertentu dan pihak lain.",
      "Untuk BBG dan pelumas, tarif umumnya sebesar 0,3% dari nilai penjualan tidak termasuk PPN.",
      "Perlakuan final berlaku atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen. Hal ini membedakannya dari sebagian besar objek PPh Pasal 22 lainnya yang bersifat tidak final.",
    ],
  },
  {
    id: "pedagang-pengumpul",
    number: "1.6",
    title: "Tarif PPh Pasal 22 atas Pembelian Bahan dari Pedagang Pengumpul",
    level: 2,
    content: [
      "Pembelian bahan dari pedagang pengumpul oleh industri atau eksportir dikenai tarif 0,25% dari harga pembelian tidak termasuk PPN. Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur. Tarif ini digunakan untuk menjangkau transaksi bahan mentah dari sektor primer sebelum masuk ke proses industri atau ekspor. Dalam penerapannya, pemungut harus memastikan bahwa pembelian tersebut memang dilakukan oleh industri atau eksportir yang termasuk pihak pemungut.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Harga Pembelian Bahan",
    ],
  },
  {
    id: "barang-mewah",
    number: "1.7",
    title: "Tarif PPh Pasal 22 atas Barang Sangat Mewah",
    level: 2,
    content: [
      "Penjualan barang sangat mewah dikenai tarif 5% dari harga jual, tidak termasuk PPN dan PPnBM. Barang sangat mewah mencerminkan transaksi konsumsi bernilai tinggi, sehingga dipungut melalui mekanisme PPh Pasal 22. Pemungutan ini tidak bersifat final, sehingga dapat menjadi kredit pajak bagi pihak yang dipungut apabila memenuhi ketentuan pengkreditan.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif Barang Mewah × Harga Jual",
    ],
  },
  {
    id: "sistem-informasi-pengadaan",
    number: "1.8",
    title: "Tarif PPh Pasal 22 atas Transaksi Sistem Informasi Pengadaan",
    level: 2,
    content: [
      "Transaksi melalui Sistem Informasi Pengadaan dikenai tarif 0,5% dari seluruh nilai pembayaran yang tercantum dalam dokumen tagihan, tidak termasuk PPN dan PPnBM. Tarif ini berlaku pada transaksi pengadaan barang dan/atau jasa pemerintah yang dilakukan melalui pihak lain dalam sistem pengadaan elektronik. Ketentuan ini bertujuan mendukung administrasi pajak pada pengadaan pemerintah secara digital. Dengan adanya pemungutan oleh pihak lain, transaksi pengadaan dapat tercatat dan dipajaki secara lebih tertib.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Nilai Transaksi Pengadaan",
    ],
  },
  {
    id: "penjualan-emas",
    number: "1.9",
    title: "Tarif PPh Pasal 22 atas Penjualan Emas",
    level: 2,
    content: [
      "Penjualan emas perhiasan dan emas batangan dapat dikenakan PPh Pasal 22 oleh pihak yang ditunjuk. Tarif yang sering digunakan dalam ketentuan PPh Pasal 22 atas penjualan emas adalah 0,25% dari harga jual. Objek ini penting karena emas merupakan barang bernilai tinggi dan sering diperdagangkan, sehingga perlu ada mekanisme pemungutan agar transaksi tercatat dalam sistem perpajakan.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Harga Jual Emas",
    ],
  },
  {
    id: "tanpa-npwp",
    number: "1.10",
    title: "Tarif Lebih Tinggi bagi Wajib Pajak yang Tidak Memiliki NPWP",
    level: 2,
    content: [
      "Wajib pajak yang tidak memiliki NPWP dikenai tarif 100% lebih tinggi dari tarif normal untuk PPh Pasal 22 yang tidak final. Artinya, apabila tarif normal suatu transaksi adalah 1,5%, maka tarif bagi pihak tanpa NPWP menjadi 3%. Ketentuan ini bertujuan mendorong kepatuhan administrasi wajib pajak. Dengan adanya tarif lebih tinggi, wajib pajak didorong untuk memiliki NPWP dan memenuhi kewajiban perpajakan secara tertib.",
    ],
    formulas: [
      "Tarif Tanpa NPWP = Tarif Normal × 200%",
      "PPh Pasal 22 Tanpa NPWP = Tarif Tanpa NPWP × Dasar Pengenaan",
    ],
    notes: [
      "Dengan kata lain, tarifnya menjadi 100% lebih tinggi dari tarif normal.",
    ],
  },
  {
    id: "dasar-pengenaan-rumus",
    number: "2",
    title: "Dasar Pengenaan dan Rumus Perhitungan PPh Pasal 22",
    level: 1,
    content: [
      "Dasar pengenaan adalah nilai yang digunakan sebagai dasar untuk menghitung PPh Pasal 22.",
      "Setiap jenis transaksi dapat memiliki dasar pengenaan yang berbeda, misalnya nilai impor, harga pembelian, harga jual, atau nilai transaksi.",
      "Rumus perhitungan PPh Pasal 22 pada dasarnya adalah tarif dikalikan dasar pengenaan.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Dasar Pengenaan",
    ],
  },
  {
    id: "pengertian-dasar-pengenaan",
    number: "2.1",
    title: "Pengertian Dasar Pengenaan PPh Pasal 22",
    level: 2,
    content: [
      "Dasar pengenaan PPh Pasal 22 adalah nilai yang digunakan sebagai dasar untuk menghitung jumlah pajak yang harus dipungut. Dasar pengenaan dapat berbeda-beda tergantung jenis transaksinya. Beberapa dasar pengenaan PPh Pasal 22 antara lain:",
    ],
  },
  {
    id: "rumus-umum",
    number: "2.2",
    title: "Rumus Umum PPh Pasal 22",
    level: 2,
    content: [
      "Rumus umum PPh Pasal 22 digunakan untuk menghitung nilai pajak yang harus dipungut.",
      "Rumus ini dapat digunakan sebagai dasar sebelum mempelajari rumus yang lebih spesifik untuk tiap jenis transaksi.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Dasar Pengenaan",
    ],
  },
  {
    id: "rumus-impor",
    number: "2.3",
    title: "Rumus PPh Pasal 22 atas Impor",
    level: 2,
    content: [
      "Pada transaksi impor, dasar pengenaan biasanya menggunakan nilai impor.",
      "Nilai impor dihitung dari nilai CIF ditambah bea masuk dan pungutan pabean lainnya.",
      "Setelah nilai impor diketahui, nilai tersebut dikalikan dengan tarif PPh Pasal 22 sesuai kategori impor.",
    ],
    formulas: [
      "PPh Pasal 22 Impor=Tarif PPh Pasal 22 Impor×(Nilai Pabean+Bea Masuk)",
    ],
    notes:[
      "PPh Pasal 22 Impor 		: pajak yang dipungut atas kegiatan impor.",
      "Tarif PPh Pasal 22 Impor	: tarif yang berlaku atas impor, misalnya 2,5% atau 7,5%.",
      "Nilai Pabean			: nilai barang impor yang digunakan sebagai dasar perhitungan kewajiban kepabeanan.",
      "Bea Masuk			: pungutan negara atas barang impor.",
      "Nilai Pabean + Bea Masuk disebut sebagai dasar perhitungan PPh Pasal 22 impor. Rumus ini sesuai dengan penjelasan DJP bahwa PPh Pasal 22 impor dihitung dengan tarif dikalikan nilai pabean ditambah Bea Masuk.",
    ],
  },
  {
    id: "rumus-pembelian-barang",
    number: "2.4",
    title: "Rumus PPh Pasal 22 atas Pembelian Barang",
    level: 2,
    content: [
      "Pada pembelian barang oleh pemerintah atau pihak tertentu, dasar pengenaan biasanya berupa harga pembelian.",
      "Harga pembelian yang digunakan umumnya tidak termasuk PPN.",
      "Nilai PPh Pasal 22 diperoleh dengan mengalikan tarif dengan harga pembelian tersebut.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Harga Pembelian",
    ],
    notes: [
      "PPh Pasal 22		: pajak yang dipungut atas pembelian barang.",
      "Tarif			: tarif yang berlaku, misalnya 1,5% untuk pembelian barang oleh instansi pemerintah.",
      "Harga Pembelian	: nilai barang yang dibeli, umumnya tidak termasuk PPN.",
      "Rumus ini digunakan untuk transaksi seperti pembelian barang oleh instansi pemerintah, BUMN, atau badan usaha tertentu.",
    ],
  },
  {
    id: "rumus-penjualan-barang",
    number: "2.5",
    title: "Rumus PPh Pasal 22 atas Penjualan Barang",
    level: 2,
    content: [
      "Pada penjualan barang tertentu, dasar pengenaan dapat berupa harga jual atau dasar pengenaan lain sesuai ketentuan.",
      "Rumus ini digunakan untuk transaksi penjualan hasil produksi industri tertentu, barang tertentu, atau objek lain yang dikenakan PPh Pasal 22.",
    ],
    formulas: [
      "PPh Pasal 22 = Tarif × Harga Jual",
    ],
    notes: [
      "PPh Pasal 22		: pajak yang dipungut atas penjualan barang tertentu.",
"Tarif			: persentase sesuai jenis barang atau industri.",
"Harga Jual		: nilai penjualan barang.",
"DPP PPN		: Dasar Pengenaan Pajak Pertambahan Nilai yang digunakan sebagai dasar perhitungan dalam transaksi tertentu.",
"Rumus ini digunakan untuk penjualan hasil produksi industri tertentu, penjualan barang sangat mewah, penjualan emas, dan transaksi penjualan barang lainnya yang dikenakan PPh Pasal 22.",
    ],
  },
];

export default function TarifPage() {
  const [activeId, setActiveId] = useState("tarif-pph-22");

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
            Tarif PPh Pasal 22
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            Pelajari jenis tarif, dasar pengenaan, dan rumus perhitungan PPh
            Pasal 22 berdasarkan jenis transaksinya.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[390px_1fr]">
          {/* Side Panel */}
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="border-b border-orange-100 bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">
                Daftar Sub Materi
              </h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Klik topik tarif untuk membuka pembahasan.
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
                        <span className="font-bold leading-6">
                          {item.title}
                        </span>
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

              {activeMateri.tables && (
  <div className="mt-10 space-y-8">
    {activeMateri.tables.map((table) => (
      <div
        key={table.title}
        className="overflow-hidden border border-slate-300 bg-white"
      >
        <div className="border-b border-slate-300 bg-orange-600 px-5 py-4">
          <h3 className="text-xl font-black text-white">{table.title}</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-orange-50">
                {table.headers.map((header) => (
                  <th
                    key={header}
                    className="border border-slate-300 px-5 py-4 text-lg font-black text-slate-950"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-orange-50">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-slate-300 px-5 py-4 text-lg font-semibold leading-7 text-slate-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
)}

{activeMateri.afterTables && (
  <div className="mt-8 space-y-6">
    {activeMateri.afterTables.map((paragraph, index) => (
      <p
        key={index}
        className="text-xl font-semibold leading-9 text-slate-700"
      >
        {paragraph}
      </p>
    ))}
  </div>
)}

              {activeMateri.formulas && (
                <div className="mt-10 bg-slate-950 p-7 text-white">
                  <p className="text-lg font-black text-orange-300">
                    Rumus / Bentuk Perhitungan
                  </p>

                  <div className="mt-5 space-y-4">
                    {activeMateri.formulas.map((formula) => (
                      <div
                        key={formula}
                        className="border border-white/10 bg-white/10 px-5 py-4 text-xl font-black"
                      >
                        {formula}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeMateri.notes && (
                <div className="mt-10 border-l-4 border-orange-600 bg-orange-50 p-6">
                  <p className="text-lg font-black text-slate-950">
                    Catatan Penting
                  </p>

                  <ul className="mt-3 space-y-2">
                    {activeMateri.notes.map((note) => (
                      <li
                        key={note}
                        className="text-lg font-semibold leading-8 text-slate-700"
                      >
                        • {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                <p className="text-lg font-black">Progress Materi Tarif</p>
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