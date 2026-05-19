"use client";

import { useState } from "react";

type MateriItem = {
  id: string;
  number: string;
  title: string;
  level: 1 | 2;
  content: string[];
  examples?: string[];
  notes?: string[];
};

const materiList: MateriItem[] = [
  {
    id: "pemungut-pph-22",
    number: "1",
    title: "Pemungut PPh Pasal 22",
    level: 1,
    content: [
      "Pemungut PPh Pasal 22 adalah pihak tertentu yang ditunjuk oleh pemerintah untuk melakukan pemungutan pajak atas transaksi tertentu.",
      "Pihak pemungut tidak boleh sembarangan, karena kewenangannya harus berdasarkan ketentuan perpajakan yang berlaku.",
      "Pemungutan ini bertujuan membantu pemerintah mengawasi transaksi tertentu dan memastikan pajak dapat dipungut sejak transaksi berlangsung.",
    ],
  },
  {
    id: "pengertian-pemungut",
    number: "1.1",
    title: "Pengertian Pemungut PPh Pasal 22",
    level: 2,
    content: [
      "Pemungut PPh Pasal 22 adalah pihak yang ditunjuk oleh peraturan perpajakan untuk memungut pajak atas transaksi tertentu. Penunjukan pemungut dilakukan karena pihak tersebut berada pada posisi strategis dalam transaksi, sehingga pemungutan pajak dapat dilakukan secara lebih efektif dan mudah diawasi.",
      "Dalam PPh Pasal 22, pemungut tidak selalu merupakan pihak yang menerima penghasilan. Pemungut dapat berupa instansi pemerintah, DJBC, bank devisa, BUMN, badan usaha tertentu, industri tertentu, produsen atau importir, maupun pihak lain yang ditetapkan. Tugas utama pemungut adalah menghitung, memungut, menyetor, dan melaporkan PPh Pasal 22 sesuai ketentuan.",
    ],
    notes: [
      "Pemungut berbeda dengan wajib pajak yang dipungut. Pemungut bertugas memungut, sedangkan pihak yang dipungut adalah pihak yang dikenai pajak.",
    ],
  },
  {
    id: "bendahara-pemerintah",
    number: "1.2",
    title: "Bendahara Pemerintah dan Instansi Pemerintah",
    level: 2,
    content: [
      "Bendahara pemerintah dan instansi pemerintah bertindak sebagai pemungut atas pembayaran pembelian barang. Pemungutan dilakukan ketika pemerintah melakukan belanja barang kepada rekanan. Instansi pemerintah dapat mencakup pemerintah pusat, pemerintah daerah, dan pihak yang menggunakan anggaran pemerintah sesuai ketentuan. Untuk belanja barang oleh instansi pemerintah, DJP menjelaskan bahwa PPh Pasal 22 dipungut dengan tarif 1,5% atas belanja barang di atas Rp2.000.000,00 dan bukan transaksi yang dipecah-pecah. Dengan ketentuan ini, transaksi pengadaan barang oleh pemerintah menjadi salah satu titik penting dalam pemungutan PPh Pasal 22.",
    ],
    examples: [
      "Pembelian alat tulis kantor oleh instansi pemerintah.",
      "Pembelian perlengkapan operasional kantor pemerintah.",
      "Pengadaan barang oleh satuan kerja pemerintah.",
    ],
  },
  {
    id: "djbc",
    number: "1.3",
    title: "Direktorat Jenderal Bea dan Cukai",
    level: 2,
    content: [
      "Direktorat Jenderal Bea dan Cukai berperan sebagai pemungut dalam kegiatan impor barang. Posisi DJBC sangat strategis karena barang impor berada dalam pengawasan kepabeanan saat masuk ke wilayah Indonesia.",
      "Oleh karena itu, pemungutan PPh Pasal 22 atas impor dapat dilakukan bersamaan dengan proses kepabeanan. Selain DJBC, bank devisa juga dapat berperan dalam pemungutan PPh Pasal 22 atas transaksi impor. Pada kegiatan ekspor komoditas tambang tertentu, pemungutan juga melibatkan pihak yang ditunjuk sesuai ketentuan dalam PMK Nomor 51 Tahun 2025.",
    ],
    examples: [
      "Impor bahan baku produksi.",
      "Impor barang dagangan.",
      "Impor barang modal untuk kegiatan usaha.",
    ],
  },
  {
    id: "bumn-badan-usaha",
    number: "1.4",
    title: "Badan Usaha Milik Negara dan Badan Usaha Tertentu",
    level: 2,
    content: [
      "BUMN dan badan usaha tertentu dapat ditunjuk sebagai pemungut atas pembelian barang dan/atau bahan untuk keperluan kegiatan usahanya. Penunjukan ini dilakukan karena transaksi yang dilakukan badan usaha tertentu biasanya bernilai besar, rutin, dan memiliki struktur administrasi yang relatif tertib. Dalam transaksi ini, BUMN atau badan usaha tertentu berperan sebagai pihak pembeli sekaligus pemungut PPh Pasal 22. Pihak penjual atau pemasok menjadi pihak yang dipungut. Pemungutan dilakukan sesuai tarif dan dasar pengenaan yang berlaku.",
    ],
  },
  {
    id: "industri-tertentu",
    number: "1.5",
    title: "Industri Tertentu",
    level: 2,
    content: [
      "Pemungutan pada industri tertentu dilakukan atas penjualan hasil produksi kepada distributor di dalam negeri. Dengan demikian, PPh Pasal 22 tidak hanya dikenakan pada kegiatan impor atau belanja pemerintah, tetapi juga pada rantai distribusi industri tertentu. Pemungutan oleh industri tertentu bertujuan menjangkau transaksi penjualan hasil produksi yang memiliki nilai ekonomi besar dan berlangsung secara rutin. Setiap jenis industri memiliki tarif yang berbeda sesuai ketentuan.",
    ],
    examples: [
      "Penjualan semen oleh produsen semen.",
      "Penjualan produk baja oleh industri baja.",
      "Penjualan kendaraan oleh industri otomotif.",
    ],
  },
  {
    id: "produsen-importir-bbm",
    number: "1.6",
    title: "Produsen atau Importir BBM, BBG, dan Pelumas",
    level: 2,
    content: [
      "Produsen atau importir BBM, BBG, dan pelumas menjadi pemungut atas penjualan produk tersebut. Transaksi ini memiliki karakter khusus karena komoditas BBM, BBG, dan pelumas memiliki perputaran luas dan nilai ekonomi besar.",
      "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen bersifat final. Artinya, pajak yang sudah dipungut tidak dapat dikreditkan kembali dalam SPT Tahunan oleh pihak yang dipungut.",
    ],
  },
  {
    id: "pedagang-pengumpul",
    number: "1.7",
    title: "Industri atau Eksportir Pembeli Bahan dari Pedagang Pengumpul",
    level: 2,
    content: [
      "Industri atau eksportir tertentu menjadi pemungut ketika membeli bahan dari pedagang pengumpul. Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur. Pemungutan ini dilakukan karena transaksi bahan mentah tersebut menjadi bagian dari rantai produksi atau ekspor. Dengan adanya pemungutan pada titik pembelian, pemerintah dapat mengawasi transaksi sektor primer sebelum masuk ke proses industri atau perdagangan lebih lanjut.",
    ],
    examples: [
      "Industri membeli bahan hasil perkebunan dari pedagang pengumpul.",
      "Eksportir membeli komoditas dari pedagang pengumpul untuk dijual ke luar negeri.",
    ],
  },
  {
    id: "pihak-lain",
    number: "1.8",
    title: "Pihak Lain yang Ditunjuk sebagai Pemungut PPh Pasal 22",
    level: 2,
    content: [
      "Selain pihak-pihak di atas, terdapat pihak lain yang dapat ditunjuk sebagai pemungut PPh Pasal 22 sesuai jenis transaksi. Pihak tersebut dapat berupa agen atau importir kendaraan bermotor, badan usaha pembeli komoditas tambang, pihak lain dalam Sistem Informasi Pengadaan, pengusaha emas, serta lembaga jasa keuangan penyelenggara kegiatan usaha bulion. Cakupan pemungut yang luas menunjukkan bahwa PPh Pasal 22 dirancang untuk menjangkau transaksi yang berada pada titik ekonomi strategis. Pihak-pihak tersebut dipilih karena memiliki akses langsung terhadap transaksi yang menjadi objek pemungutan.",
    ],
  },
  {
    id: "objek-pph-22",
    number: "2",
    title: "Objek PPh Pasal 22",
    level: 1,
    content: [
      "Objek PPh Pasal 22 adalah transaksi atau kegiatan tertentu yang dikenakan pemungutan PPh Pasal 22.",
      "Objek ini dapat berupa impor barang, pembelian barang, penjualan hasil produksi, atau transaksi tertentu lainnya.",
      "Memahami objek PPh Pasal 22 penting karena tidak semua transaksi dikenakan PPh Pasal 22.",
    ],
  },
  {
    id: "pengertian-objek",
    number: "2.1",
    title: "Pengertian Objek PPh Pasal 22",
    level: 2,
    content: [
      "Objek PPh Pasal 22 adalah transaksi atau kegiatan tertentu yang berdasarkan ketentuan perpajakan dikenai pemungutan oleh pihak yang ditunjuk. Objek tersebut umumnya berkaitan dengan perdagangan barang, impor, pembelian barang, penjualan hasil produksi, penjualan BBM, BBG, pelumas, transaksi emas, dan pengadaan pemerintah.",
      "Objek PPh Pasal 22 tidak mencakup semua transaksi, melainkan hanya transaksi yang secara tegas diatur dalam ketentuan perpajakan. Oleh karena itu, untuk menentukan apakah suatu transaksi dikenai PPh Pasal 22, perlu dilihat jenis transaksi, pihak yang bertransaksi, nilai transaksi, dan ketentuan pengecualiannya.",

    ],
  },
  {
    id: "impor-barang",
    number: "2.2",
    title: "Impor Barang",
    level: 2,
    content: [
      "Impor barang merupakan salah satu objek utama PPh Pasal 22. Pemungutan dilakukan karena impor memiliki nilai ekonomi yang jelas dan berada dalam pengawasan kepabeanan. Dalam kegiatan impor, dasar pengenaan umumnya adalah nilai impor, yaitu nilai yang dihitung dari unsur cost, insurance, and freight ditambah bea masuk dan pungutan lain sesuai ketentuan kepabeanan.",
      "Tarif impor dapat berbeda tergantung jenis barang dan status Angka Pengenal Impor. Secara umum, importir yang memiliki API dikenai tarif lebih rendah dibandingkan importir tanpa API, sedangkan barang tertentu dapat dikenai tarif khusus.",

    ],
  },
  {
    id: "pembelian-pemerintah",
    number: "2.3",
    title: "Pembelian Barang oleh Pemerintah",
    level: 2,
    content: [
      "Pembelian barang oleh pemerintah menjadi objek PPh Pasal 22 ketika instansi pemerintah melakukan pembayaran kepada rekanan atas pembelian barang. Objek ini muncul dalam kegiatan pengadaan barang pemerintah, baik melalui mekanisme uang persediaan maupun pembayaran langsung.",
      "Dalam transaksi ini, instansi pemerintah bertindak sebagai pemungut, sedangkan rekanan atau penjual barang menjadi pihak yang dipungut. Namun, tidak semua pembelian barang oleh pemerintah dipungut PPh Pasal 22 karena terdapat pengecualian untuk nilai transaksi tertentu dan jenis pembayaran tertentu.",
    ],
  },
  {
    id: "pembelian-bumn",
    number: "2.4",
    title: "Pembelian Barang oleh BUMN atau Badan Usaha Tertentu",
    level: 2,
    content: [
      "Pembelian barang oleh BUMN atau badan usaha tertentu menjadi objek PPh Pasal 22 apabila barang atau bahan tersebut dibeli untuk keperluan kegiatan usaha. Transaksi ini biasanya melibatkan nilai pembelian yang cukup besar dan dilakukan secara rutin. Dalam transaksi tersebut, BUMN atau badan usaha tertentu bertindak sebagai pemungut, sedangkan pemasok atau penjual menjadi pihak yang dipungut. Dasar pengenaan umumnya adalah harga pembelian tidak termasuk PPN.",
    ],
  },
  {
    id: "penjualan-industri",
    number: "2.5",
    title: "Penjualan Hasil Produksi Industri Tertentu",
    level: 2,
    content: [
      "Penjualan hasil produksi industri tertentu menjadi objek PPh Pasal 22 apabila dilakukan oleh industri yang telah ditetapkan dalam ketentuan perpajakan. Industri tersebut meliputi industri semen, kertas, baja, otomotif, dan farmasi. Pemungutan dilakukan pada saat industri menjual hasil produksinya kepada distributor di dalam negeri. Objek ini menunjukkan bahwa PPh Pasal 22 juga diterapkan pada tahap distribusi produk industri, bukan hanya pada impor atau belanja pemerintah.",
    ],
  },
  {
    id: "penjualan-bbm",
    number: "2.6",
    title: "Penjualan BBM, BBG, dan Pelumas",
    level: 2,
    content: [
      "Penjualan BBM, BBG, dan pelumas oleh produsen atau importir termasuk objek PPh Pasal 22. Objek ini dikenakan karena komoditas tersebut memiliki nilai ekonomi tinggi dan perputaran transaksi yang luas. Perlakuan pajak atas transaksi ini perlu diperhatikan karena dalam kondisi tertentu bersifat final. PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen tidak dapat dikreditkan kembali.",
    ],
  },
  {
    id: "pembelian-bahan-pengumpul",
    number: "2.7",
    title: "Pembelian Bahan dari Pedagang Pengumpul",
    level: 2,
    content: [
      "Pembelian bahan dari pedagang pengumpul menjadi objek PPh Pasal 22 apabila dilakukan oleh industri atau eksportir tertentu. Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum diproses secara manufaktur. Objek ini bertujuan menjangkau transaksi bahan baku dari sektor primer. Dengan pemungutan pada saat pembelian, transaksi sebelum masuk ke proses industri atau ekspor dapat tercatat dan diawasi secara lebih baik.",
    ],
  },
  {
    id: "barang-sangat-mewah",
    number: "2.8",
    title: "Penjualan Barang Sangat Mewah",
    level: 2,
    content: [
      "Penjualan barang sangat mewah termasuk objek PPh Pasal 22. Barang yang tergolong sangat mewah dapat berupa kendaraan tertentu, rumah atau apartemen dengan nilai dan luas tertentu, kapal pesiar, atau pesawat udara pribadi sesuai ketentuan perpajakan. Pemungutan atas barang sangat mewah bertujuan menjangkau transaksi konsumsi bernilai tinggi. DJP mencantumkan bahwa PPh Pasal 22 atas barang sangat mewah dikenai tarif 5% dari harga jual, tidak termasuk PPN dan PPnBM.",
    ],
  },
  {
    id: "sistem-informasi-pengadaan",
    number: "2.9",
    title: "Transaksi Melalui Sistem Informasi Pengadaan",
    level: 2,
    content: [
      "Transaksi melalui Sistem Informasi Pengadaan menjadi objek PPh Pasal 22 dalam pengadaan barang dan/atau jasa pemerintah secara elektronik. Dalam mekanisme ini, pihak lain dalam sistem pengadaan dapat ditunjuk untuk memungut, menyetor, dan melaporkan pajak atas transaksi yang dilakukan rekanan. Ketentuan mengenai pengadaan melalui sistem informasi pengadaan pemerintah antara lain diatur dalam PMK Nomor 58/PMK.03/2022. PPh Pasal 22 atas transaksi ini dikenakan sebesar 0,5% dari nilai pembayaran dalam dokumen tagihan, tidak termasuk PPN dan PPnBM.",
    ],
  },
  {
    id: "emas",
    number: "2.10",
    title: "Penjualan Emas Perhiasan dan Emas Batangan",
    level: 2,
    content: [
      "Penjualan emas perhiasan dan emas batangan termasuk objek khusus PPh Pasal 22. Berdasarkan PMK Nomor 48 Tahun 2023 yang telah diubah dengan PMK Nomor 52 Tahun 2025, transaksi emas diatur secara khusus karena memiliki karakter perdagangan yang berbeda dari barang umum. Pengusaha emas perhiasan dan/atau emas batangan dapat ditunjuk untuk memungut, menyetor, dan melaporkan PPh Pasal 22 atas penjualan emas. Tarif yang umum dikenakan atas penjualan emas adalah 0,25% dari harga jual.",
    ],
  },
  {
    id: "pengecualian-pph-22",
    number: "3",
    title: "Pengecualian PPh Pasal 22",
    level: 1,
    content: [
      "Pengecualian PPh Pasal 22 adalah kondisi tertentu ketika transaksi tidak dipungut PPh Pasal 22.",
      "Pengecualian dapat diberikan karena jenis transaksi, nilai transaksi, dokumen tertentu, atau ketentuan khusus.",
      "Bagian ini penting agar wajib pajak tidak salah menerapkan pemungutan PPh Pasal 22.",
    ],
  },
  {
    id: "pengertian-pengecualian",
    number: "3.1",
    title: "Pengertian Pengecualian PPh Pasal 22",
    level: 2,
    content: [
      "Pengecualian PPh Pasal 22 adalah kondisi ketika transaksi yang pada dasarnya berada dalam ruang lingkup pemungutan tidak dikenai pungutan karena memenuhi syarat tertentu. Pengecualian diberikan agar pemungutan tidak dikenakan terhadap transaksi yang tidak terutang PPh, memperoleh fasilitas perpajakan, atau secara administratif dikecualikan oleh peraturan. Pengecualian ini penting karena tidak semua transaksi barang otomatis dipungut PPh Pasal 22. Pemungut harus memeriksa apakah transaksi termasuk objek, apakah memenuhi batas nilai pemungutan, dan apakah terdapat fasilitas atau dokumen pembebasan.",
    ],
  },
  {
    id: "tidak-dipungut",
    number: "3.2",
    title: "Transaksi yang Tidak Dipungut PPh Pasal 22",
    level: 2,
    content: [
      "Transaksi yang tidak dipungut PPh Pasal 22 dapat berupa impor atau penyerahan barang yang tidak terutang PPh, pembayaran tertentu oleh pemerintah, pembelian barang tertentu, atau transaksi yang telah dipungut melalui mekanisme lain. PMK Nomor 51 Tahun 2025 mencantumkan beberapa pengecualian, misalnya pembayaran oleh pemungut pemerintah paling banyak Rp2.000.000,00 tidak termasuk PPN dan bukan hasil pemecahan transaksi. Pengecualian juga dapat berlaku untuk pembayaran pembelian BBM, BBG, pelumas, benda pos, air, listrik, gabah atau beras, serta pembelian barang menggunakan dana bantuan operasional pendidikan. Dengan demikian, pengecualian dibuat agar pemungutan tidak membebani transaksi kecil atau transaksi yang secara khusus dikecualikan.",
    ],
  },
  {
    id: "impor-tertentu",
    number: "3.3",
    title: "Pengecualian atas Impor Barang Tertentu",
    level: 2,
    content: [
      "Pengecualian atas impor diberikan terhadap barang tertentu yang memperoleh fasilitas pembebasan bea masuk dan/atau PPN, impor sementara yang akan diekspor kembali, serta impor kembali atas barang yang sebelumnya telah diekspor. DJP menjelaskan bahwa pengecualian atas barang impor tetap berlaku meskipun barang impor tersebut dikenakan tarif bea masuk 0%, sepanjang memenuhi syarat yang ditentukan. Pengecualian impor ini biasanya berkaitan dengan tujuan tertentu, seperti kepentingan negara, penelitian, bantuan sosial, barang tertentu yang mendapat fasilitas, atau barang yang hanya masuk sementara ke wilayah pabean Indonesia.",
    ],
  },
  {
    id: "skb",
    number: "3.4",
    title: "Surat Keterangan Bebas PPh Pasal 22",
    level: 2,
    content: [
      "Surat Keterangan Bebas PPh Pasal 22 adalah dokumen yang digunakan sebagai dasar administratif agar suatu transaksi tidak dipungut PPh Pasal 22. Dokumen ini diperlukan apabila wajib pajak memenuhi ketentuan pembebasan pemotongan atau pemungutan pajak. Namun, tidak semua pengecualian memerlukan Surat Keterangan Bebas. Beberapa pengecualian berlaku langsung berdasarkan jenis transaksi, nilai transaksi, atau ketentuan khusus. Oleh karena itu, pemungut perlu membedakan antara pengecualian yang memerlukan dokumen pembebasan dan pengecualian yang berlaku langsung menurut peraturan.",
    ],
    notes: [
      "SKB harus diperoleh melalui mekanisme resmi sesuai ketentuan perpajakan.",
    ],
  },
  {
    id: "nilai-transaksi",
    number: "3.5",
    title: "Pengecualian karena Nilai Transaksi atau Ketentuan Khusus",
    level: 2,
    content: [
      "Pengecualian juga dapat terjadi karena nilai transaksi berada di bawah batas tertentu. Contohnya, pembelian barang oleh instansi pemerintah paling banyak Rp2.000.000,00 tidak dipungut PPh Pasal 22 apabila tidak termasuk PPN dan bukan transaksi yang dipecah-pecah. Ketentuan ini bertujuan mencegah pemungutan pada transaksi kecil yang secara administratif kurang efisien. Selain itu, pengecualian dapat diberikan untuk transaksi tertentu karena sifat barang, sumber dana, atau status pihak yang bertransaksi. Dengan adanya ketentuan pengecualian, pemungutan PPh Pasal 22 menjadi lebih proporsional dan tidak diberlakukan secara berlebihan terhadap seluruh transaksi. ",
    ],
  },
];

export default function PemungutPage() {
  const [activeId, setActiveId] = useState("pemungut-pph-22");

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
      <section className="bg-orange-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-black text-orange-600">
            Materi Pembelajaran
          </p>
          <h1 className="mt-3 text-5xl font-black text-slate-950 md:text-6xl">
            Pemungut, Objek, dan Pengecualian PPh Pasal 22
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            Pelajari siapa saja pemungut PPh Pasal 22, transaksi yang menjadi
            objek pemungutan, serta kondisi pengecualiannya.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[410px_1fr]">
          {/* Side Panel */}
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="border-b border-orange-100 bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">
                Daftar Sub Materi
              </h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Klik topik untuk membuka isi pembahasan.
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

          {/* Main Content */}
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

              {activeMateri.examples && (
                <div className="mt-10 bg-slate-950 p-7 text-white">
                  <p className="text-lg font-black text-orange-300">
                    Contoh
                  </p>

                  <ul className="mt-5 space-y-3">
                    {activeMateri.examples.map((example) => (
                      <li
                        key={example}
                        className="border border-white/10 bg-white/10 px-5 py-4 text-lg font-bold"
                      >
                        • {example}
                      </li>
                    ))}
                  </ul>
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

            <div className="mt-8 bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-black">Progress Materi Pemungut</p>
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