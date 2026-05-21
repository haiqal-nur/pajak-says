"use client";

import { useState } from "react";

type SubMateri = {
  number: string;
  title: string;
  content: string[];
  points?: string[];
};

type MateriItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  content: string[];
  subMateri?: SubMateri[];
};

const materiList: MateriItem[] = [
  {
    id: "pengantar",
    number: "2.1",
    title: "Pengantar Umum Perpajakan dan PPh",
    description: "Memahami dasar perpajakan dan posisi Pajak Penghasilan dalam sistem perpajakan Indonesia.",
    content: [
      "Pajak merupakan kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan, bersifat memaksa berdasarkan undang-undang, tidak memperoleh imbalan secara langsung, dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat.",
      "Pajak Penghasilan atau PPh dikenakan atas penghasilan yang diterima atau diperoleh wajib pajak dalam suatu tahun pajak. Penghasilan dapat berupa gaji, laba usaha, keuntungan penjualan harta, bunga, dividen, royalti, sewa, hadiah, dan tambahan kemampuan ekonomis lainnya.",
      "Dalam sistem PPh di Indonesia terdapat beberapa jenis pemotongan dan pemungutan pajak, seperti PPh Pasal 21, PPh Pasal 22, PPh Pasal 23, PPh Pasal 24, PPh Pasal 25, dan PPh Pasal 26.",
    ],
  },
  {
    id: "pph22",
    number: "2.2",
    title: "Pajak Penghasilan Pasal 22",
    description: "Membahas pengertian, definisi, tujuan, karakteristik, dan kedudukan PPh Pasal 22.",
    content: [
      "PPh Pasal 22 adalah pemungutan PPh yang dilakukan oleh pihak tertentu yang ditunjuk oleh pemerintah atas transaksi tertentu.",
      "PPh Pasal 22 umumnya berkaitan dengan penyerahan barang, impor barang, ekspor komoditas tertentu, pembelian barang oleh instansi pemerintah, pembelian barang oleh badan usaha tertentu, penjualan hasil produksi industri tertentu, penjualan bahan bakar, transaksi emas, serta kegiatan usaha lain yang diatur dalam ketentuan perpajakan.",
    ],
    subMateri: [
      {
        number: "2.2.1",
        title: "Pengertian PPh Pasal 22",
        content: [
          "PPh Pasal 22 dapat dipahami sebagai pajak yang dipungut di muka pada saat transaksi tertentu terjadi.",
          "Berbeda dengan pajak yang dibayar sendiri oleh wajib pajak, PPh Pasal 22 melibatkan pihak pemungut seperti instansi pemerintah, Direktorat Jenderal Bea dan Cukai, bank devisa, BUMN, industri tertentu, produsen/importir BBM, BBG, dan pelumas, serta pihak lain yang ditunjuk.",
        ],
      },
      {
        number: "2.2.2",
        title: "Definisi PPh Pasal 22 Menurut Ketentuan Perpajakan",
        content: [
          "Menurut ketentuan perpajakan, PPh Pasal 22 merupakan pajak yang dipungut oleh pihak-pihak tertentu atas kegiatan tertentu, terutama yang berhubungan dengan pembayaran atas penyerahan barang, kegiatan impor, atau kegiatan usaha lainnya.",
          "Definisi tersebut menunjukkan bahwa terdapat tiga unsur penting dalam PPh Pasal 22, yaitu:",
        ],
        points: [
          "Adanya transaksi atau kegiatan tertentu, seperti impor, pembelian barang, atau penjualan barang tertentu.",
          "Adanya pihak pemungut, yaitu pihak yang ditunjuk oleh pemerintah.",
          "Adanya kewajiban pemungutan pajak, yaitu pajak dipungut pada saat transaksi terjadi atau pada saat pembayaran dilakukan.",
        ],
      },
      {
        number: "2.2.3",
        title: "Latar Belakang dan Tujuan Pemungutan PPh Pasal 22",
        content: [
          "PPh Pasal 22 dilatarbelakangi oleh kebutuhan pemerintah untuk mengamankan penerimaan pajak dari transaksi yang bernilai ekonomi besar dan mudah diidentifikasi.",
          "Pemungutan dilakukan langsung pada saat transaksi agar penerimaan pajak dapat dihimpun lebih awal.",
        ],
        points: [
          "Mengamankan penerimaan negara.",
          "Meningkatkan kepatuhan Wajib Pajak.",
          "Mempermudah pengawasan transaksi.",
          "Mendorong tertib administrasi perpajakan.",
          "Menjadi alat kontrol atas transaksi strategis.",
        ],
      },
      {
        number: "2.2.4",
        title: "Karakteristik PPh Pasal 22",
        content: [
          "PPh Pasal 22 menggunakan mekanisme pemungutan oleh pihak tertentu yang ditunjuk.",
          "Objeknya banyak berhubungan dengan transaksi barang, bukan semata-mata penghasilan dari pekerjaan atau jasa.",
          "Tarifnya tidak tunggal karena bergantung pada jenis transaksi, pihak yang terlibat, serta dasar pengenaan pajaknya.",
        ],
      },
      {
        number: "2.2.5",
        title: "Kedudukan PPh Pasal 22 dalam Pajak Penghasilan",
        content: [
          "Dalam sistem PPh, PPh Pasal 22 berkedudukan sebagai salah satu mekanisme pelunasan pajak dalam tahun berjalan.",
          "Apabila bersifat tidak final, pajak yang telah dipungut dapat digunakan sebagai kredit pajak untuk mengurangi PPh terutang pada akhir tahun.",
        ],
      },
    ],
  },
  {
    id: "dasar-hukum",
    number: "2.3",
    title: "Dasar Hukum PPh Pasal 22",
    description: "Menjelaskan dasar hukum PPh Pasal 22 dari UU PPh, PMK, dan ketentuan teknis.",
    content: [
      "Dasar hukum PPh Pasal 22 menjelaskan landasan yuridis mengenai siapa yang dapat ditunjuk sebagai pemungut, transaksi apa yang dikenakan, serta bagaimana tata cara pemungutannya.",
    ],
    subMateri: [
      {
        number: "2.3.1",
        title: "Undang-Undang Pajak Penghasilan",
        content: [
          "Dasar utama PPh Pasal 22 terdapat dalam Undang-Undang Pajak Penghasilan.",
          "Pasal 22 UU PPh memberikan kewenangan kepada Menteri Keuangan untuk menunjuk pihak tertentu sebagai pemungut PPh atas transaksi yang ditetapkan.",
        ],
      },
      {
        number: "2.3.2",
        title: "Peraturan Menteri Keuangan tentang PPh Pasal 22",
        content: [
          "Peraturan Menteri Keuangan berfungsi sebagai aturan pelaksana yang menjelaskan ruang lingkup, pemungut, objek, tarif, pengecualian, serta tata cara pelaksanaan PPh Pasal 22.",
        ],
      },
      {
        number: "2.3.3",
        title: "Ketentuan Teknis Pelaksanaan PPh Pasal 22",
        content: [
          "Ketentuan teknis mencakup tata cara pemungutan, penyetoran, pelaporan, bukti pemungutan, penggunaan NPWP, serta pengecualian.",
          "Pemungut harus memastikan apakah transaksi termasuk objek PPh Pasal 22, apakah terdapat pengecualian, tarif yang digunakan, serta cara menyetor dan melaporkan pajaknya.",
        ],
      },
    ],
  },
  {
    id: "pemungut",
    number: "2.4",
    title: "Pemungut PPh Pasal 22",
    description: "Membahas pihak-pihak yang ditunjuk sebagai pemungut PPh Pasal 22.",
    content: [
      "Pemungut PPh Pasal 22 adalah pihak yang ditunjuk oleh peraturan perpajakan untuk memungut pajak atas transaksi tertentu.",
      "Pemungut dapat berupa instansi pemerintah, DJBC, bank devisa, BUMN, badan usaha tertentu, industri tertentu, produsen atau importir, maupun pihak lain yang ditetapkan.",
    ],
    subMateri: [
      {
        number: "2.4.1",
        title: "Pengertian Pemungut PPh Pasal 22",
        content: [
          "Pemungut PPh Pasal 22 adalah pihak yang diberi kewenangan untuk menghitung, memungut, menyetor, dan melaporkan PPh Pasal 22 sesuai ketentuan.",
        ],
      },
      {
        number: "2.4.2",
        title: "Bendahara Pemerintah dan Instansi Pemerintah",
        content: [
          "Bendahara pemerintah dan instansi pemerintah bertindak sebagai pemungut atas pembayaran pembelian barang.",
          "Pemungutan dilakukan ketika pemerintah melakukan belanja barang kepada rekanan.",
        ],
      },
      {
        number: "2.4.3",
        title: "Direktorat Jenderal Bea dan Cukai",
        content: [
          "Direktorat Jenderal Bea dan Cukai berperan sebagai pemungut dalam kegiatan impor barang.",
          "Pemungutan PPh Pasal 22 atas impor dapat dilakukan bersamaan dengan proses kepabeanan.",
        ],
      },
      {
        number: "2.4.4",
        title: "BUMN dan Badan Usaha Tertentu",
        content: [
          "BUMN dan badan usaha tertentu dapat ditunjuk sebagai pemungut atas pembelian barang dan/atau bahan untuk keperluan kegiatan usahanya.",
        ],
      },
      {
        number: "2.4.5",
        title: "Industri Tertentu",
        content: [
          "Industri tertentu yang ditunjuk sebagai pemungut meliputi industri semen, kertas, baja, otomotif, dan farmasi.",
        ],
      },
      {
        number: "2.4.6",
        title: "Produsen atau Importir BBM, BBG, dan Pelumas",
        content: [
          "Produsen atau importir BBM, BBG, dan pelumas menjadi pemungut atas penjualan produk tersebut.",
          "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas kepada penyalur atau agen dapat bersifat final.",
        ],
      },
      {
        number: "2.4.7",
        title: "Industri atau Eksportir Pembeli Bahan dari Pedagang Pengumpul",
        content: [
          "Industri atau eksportir tertentu menjadi pemungut ketika membeli bahan dari pedagang pengumpul.",
        ],
      },
      {
        number: "2.4.8",
        title: "Pihak Lain yang Ditunjuk sebagai Pemungut",
        content: [
          "Pihak lain dapat ditunjuk sebagai pemungut PPh Pasal 22 sesuai jenis transaksi, misalnya pihak dalam sistem pengadaan, pengusaha emas, atau lembaga jasa keuangan tertentu.",
        ],
      },
    ],
  },
  {
    id: "objek",
    number: "2.5",
    title: "Objek PPh Pasal 22",
    description: "Mengidentifikasi transaksi yang menjadi objek PPh Pasal 22.",
    content: [
      "Objek PPh Pasal 22 adalah transaksi atau kegiatan tertentu yang berdasarkan ketentuan perpajakan dikenai pemungutan oleh pihak yang ditunjuk.",
      "Objek PPh Pasal 22 tidak mencakup semua transaksi, melainkan hanya transaksi yang secara tegas diatur dalam ketentuan perpajakan.",
    ],
    subMateri: [
      {
        number: "2.5.1",
        title: "Pengertian Objek PPh Pasal 22",
        content: [
          "Objek PPh Pasal 22 adalah jenis transaksi yang menjadi dasar pemungutan pajak.",
        ],
      },
      {
        number: "2.5.2",
        title: "Impor Barang",
        content: [
          "Impor barang merupakan salah satu objek utama PPh Pasal 22 karena berada dalam pengawasan kepabeanan.",
        ],
      },
      {
        number: "2.5.3",
        title: "Pembelian Barang oleh Pemerintah",
        content: [
          "Pembelian barang oleh pemerintah menjadi objek PPh Pasal 22 ketika instansi pemerintah melakukan pembayaran kepada rekanan atas pembelian barang.",
        ],
      },
      {
        number: "2.5.4",
        title: "Pembelian Barang oleh BUMN atau Badan Usaha Tertentu",
        content: [
          "Pembelian barang oleh BUMN atau badan usaha tertentu menjadi objek PPh Pasal 22 apabila barang atau bahan tersebut dibeli untuk keperluan kegiatan usaha.",
        ],
      },
      {
        number: "2.5.5",
        title: "Penjualan Hasil Produksi Industri Tertentu",
        content: [
          "Penjualan hasil produksi industri tertentu menjadi objek PPh Pasal 22 apabila dilakukan oleh industri yang telah ditetapkan dalam ketentuan perpajakan.",
        ],
      },
      {
        number: "2.5.6",
        title: "Penjualan BBM, BBG, dan Pelumas",
        content: [
          "Penjualan BBM, BBG, dan pelumas oleh produsen atau importir termasuk objek PPh Pasal 22.",
        ],
      },
      {
        number: "2.5.7",
        title: "Pembelian Bahan dari Pedagang Pengumpul",
        content: [
          "Pembelian bahan dari pedagang pengumpul menjadi objek PPh Pasal 22 apabila dilakukan oleh industri atau eksportir tertentu.",
        ],
      },
      {
        number: "2.5.8",
        title: "Penjualan Barang Sangat Mewah",
        content: [
          "Penjualan barang sangat mewah termasuk objek PPh Pasal 22 karena merupakan transaksi konsumsi bernilai tinggi.",
        ],
      },
      {
        number: "2.5.9",
        title: "Transaksi Melalui Sistem Informasi Pengadaan",
        content: [
          "Transaksi melalui Sistem Informasi Pengadaan menjadi objek PPh Pasal 22 dalam pengadaan barang dan/atau jasa pemerintah secara elektronik.",
        ],
      },
      {
        number: "2.5.10",
        title: "Penjualan Emas Perhiasan dan Emas Batangan",
        content: [
          "Penjualan emas perhiasan dan emas batangan termasuk objek khusus PPh Pasal 22.",
        ],
      },
    ],
  },
  {
    id: "pengecualian",
    number: "2.6",
    title: "Pengecualian PPh Pasal 22",
    description: "Membahas kondisi ketika transaksi tidak dipungut PPh Pasal 22.",
    content: [
      "Pengecualian PPh Pasal 22 adalah kondisi ketika transaksi yang pada dasarnya berada dalam ruang lingkup pemungutan tidak dikenai pungutan karena memenuhi syarat tertentu.",
    ],
    subMateri: [
      {
        number: "2.6.1",
        title: "Pengertian Pengecualian PPh Pasal 22",
        content: [
          "Pengecualian diberikan agar pemungutan tidak dikenakan terhadap transaksi yang tidak terutang PPh, memperoleh fasilitas perpajakan, atau secara administratif dikecualikan oleh peraturan.",
        ],
      },
      {
        number: "2.6.2",
        title: "Transaksi yang Tidak Dipungut PPh Pasal 22",
        content: [
          "Transaksi tertentu dapat tidak dipungut PPh Pasal 22, misalnya pembayaran oleh pemungut pemerintah paling banyak Rp2.000.000,00 tidak termasuk PPN dan bukan hasil pemecahan transaksi.",
        ],
      },
      {
        number: "2.6.3",
        title: "Pengecualian atas Impor Barang Tertentu",
        content: [
          "Pengecualian atas impor diberikan terhadap barang tertentu yang memperoleh fasilitas pembebasan bea masuk dan/atau PPN, impor sementara, serta impor kembali atas barang yang sebelumnya telah diekspor.",
        ],
      },
      {
        number: "2.6.4",
        title: "Surat Keterangan Bebas PPh Pasal 22",
        content: [
          "Surat Keterangan Bebas PPh Pasal 22 adalah dokumen yang digunakan sebagai dasar administratif agar suatu transaksi tidak dipungut PPh Pasal 22.",
        ],
      },
      {
        number: "2.6.5",
        title: "Pengecualian karena Nilai Transaksi atau Ketentuan Khusus",
        content: [
          "Pengecualian dapat terjadi karena nilai transaksi berada di bawah batas tertentu atau karena adanya ketentuan khusus.",
        ],
      },
    ],
  },
  {
    id: "tarif",
    number: "2.7",
    title: "Tarif PPh Pasal 22",
    description: "Membahas tarif PPh Pasal 22 berdasarkan jenis transaksi.",
    content: [
      "Tarif PPh Pasal 22 tidak bersifat tunggal. Tarifnya berbeda-beda sesuai jenis transaksi, objek pajak, dan pihak yang terlibat.",
    ],
    subMateri: [
      {
        number: "2.7.1",
        title: "Pengantar Tarif PPh Pasal 22",
        content: [
          "Sebelum menghitung PPh Pasal 22, pemungut harus menentukan terlebih dahulu jenis transaksi dan dasar pengenaan yang benar.",
        ],
      },
      {
        number: "2.7.2",
        title: "Tarif atas Impor dan Ekspor Barang",
        content: [
          "Tarif PPh Pasal 22 atas impor dan ekspor barang umumnya dibedakan berdasarkan status importir dan jenis barang.",
        ],
        points: [
          "Barang tertentu Lampiran A: 10% × Nilai Impor.",
          "Barang tertentu lainnya Lampiran B: 7,5% × Nilai Impor.",
          "Kedelai, gandum, dan tepung terigu: 0,5% × Nilai Impor.",
          "Barang selain di atas dengan API: 2,5% × Nilai Impor.",
          "Barang selain di atas tanpa API: 7,5% × Nilai Impor.",
          "Ekspor komoditas tambang tertentu: 1,5% × Nilai Ekspor.",
        ],
      },
      {
        number: "2.7.3",
        title: "Tarif atas Pembelian Barang oleh Pemerintah",
        content: [
          "Pembelian barang oleh pemerintah dikenai tarif 1,5% dari harga pembelian tidak termasuk PPN.",
        ],
      },
      {
        number: "2.7.4",
        title: "Tarif atas Penjualan Hasil Produksi Industri Tertentu",
        content: [
          "Tarif PPh Pasal 22 atas penjualan hasil produksi industri tertentu berbeda-beda tergantung jenis industrinya.",
        ],
        points: [
          "Industri kertas: 0,1% dari DPP PPN.",
          "Industri semen: 0,25% dari DPP PPN.",
          "Industri baja: 0,3% dari DPP PPN.",
          "Industri otomotif: 0,45% dari DPP PPN.",
          "Industri farmasi: 0,3% dari DPP PPN.",
        ],
      },
      {
        number: "2.7.5",
        title: "Tarif atas Penjualan BBM, BBG, dan Pelumas",
        content: [
          "Tarif PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas ditentukan berdasarkan jenis produk dan pihak pembelinya.",
        ],
        points: [
          "BBM ke SPBU Pertamina: 0,25% × penjualan tidak termasuk PPN.",
          "BBM ke SPBU swasta atau Non-SPBU: 0,3% × penjualan tidak termasuk PPN.",
          "Bahan bakar gas atau pelumas: 0,3% × penjualan tidak termasuk PPN.",
        ],
      },
      {
        number: "2.7.6",
        title: "Tarif atas Pembelian Bahan dari Pedagang Pengumpul",
        content: [
          "Pembelian bahan dari pedagang pengumpul oleh industri atau eksportir dikenai tarif 0,25% dari harga pembelian tidak termasuk PPN.",
        ],
      },
      {
        number: "2.7.7",
        title: "Tarif atas Barang Sangat Mewah",
        content: [
          "Penjualan barang sangat mewah dikenai tarif 5% dari harga jual, tidak termasuk PPN dan PPnBM.",
        ],
      },
      {
        number: "2.7.8",
        title: "Tarif atas Transaksi Sistem Informasi Pengadaan",
        content: [
          "Transaksi melalui Sistem Informasi Pengadaan dikenai tarif 0,5% dari seluruh nilai pembayaran dalam dokumen tagihan, tidak termasuk PPN dan PPnBM.",
        ],
      },
      {
        number: "2.7.9",
        title: "Tarif atas Penjualan Emas",
        content: [
          "Penjualan emas perhiasan dan emas batangan dapat dikenakan PPh Pasal 22 sebesar 0,25% dari harga jual.",
        ],
      },
      {
        number: "2.7.10",
        title: "Tarif Lebih Tinggi bagi Wajib Pajak Tanpa NPWP",
        content: [
          "Wajib Pajak yang tidak memiliki NPWP dikenai tarif 100% lebih tinggi dari tarif normal untuk PPh Pasal 22 yang tidak final.",
        ],
      },
    ],
  },
  {
    id: "rumus",
    number: "2.8",
    title: "Dasar Pengenaan dan Rumus Perhitungan PPh Pasal 22",
    description: "Menjelaskan dasar pengenaan dan rumus perhitungan PPh Pasal 22.",
    content: [
      "Dasar pengenaan PPh Pasal 22 adalah nilai yang digunakan sebagai dasar untuk menghitung jumlah pajak yang harus dipungut.",
    ],
    subMateri: [
      {
        number: "2.8.1",
        title: "Pengertian Dasar Pengenaan PPh Pasal 22",
        content: [
          "Dasar pengenaan dapat berupa nilai impor, harga pembelian, DPP PPN, harga jual, atau nilai pembayaran.",
        ],
      },
      {
        number: "2.8.2",
        title: "Rumus Umum PPh Pasal 22",
        content: [
          "Rumus umum PPh Pasal 22 adalah: PPh Pasal 22 = Tarif × Dasar Pengenaan.",
        ],
      },
      {
        number: "2.8.3",
        title: "Rumus PPh Pasal 22 atas Impor",
        content: [
          "Rumus PPh Pasal 22 atas impor adalah: PPh Pasal 22 Impor = Tarif PPh Pasal 22 Impor × (Nilai Pabean + Bea Masuk).",
        ],
      },
      {
        number: "2.8.4",
        title: "Rumus PPh Pasal 22 atas Pembelian Barang",
        content: [
          "Rumus PPh Pasal 22 atas pembelian barang adalah: PPh Pasal 22 = Tarif × Harga Pembelian.",
        ],
      },
      {
        number: "2.8.5",
        title: "Rumus PPh Pasal 22 atas Penjualan Barang",
        content: [
          "Rumus PPh Pasal 22 atas penjualan barang adalah: PPh Pasal 22 = Tarif × Harga Jual atau DPP PPN.",
        ],
      },
    ],
  },
  {
    id: "studi-kasus",
    number: "2.9",
    title: "Studi Kasus dan Contoh Perhitungan PPh Pasal 22",
    description: "Membahas contoh perhitungan PPh Pasal 22 dalam beberapa jenis transaksi.",
    content: [
      "Studi kasus digunakan untuk memahami penerapan rumus PPh Pasal 22 pada transaksi nyata.",
    ],
    subMateri: [
      {
        number: "2.9.1",
        title: "Contoh Pembelian Barang oleh Instansi Pemerintah",
        content: [
          "Instansi pemerintah membeli 25 unit komputer dengan total harga pembelian sebelum PPN sebesar Rp200.000.000,00.",
          "Tarif PPh Pasal 22 adalah 1,5%, sehingga PPh Pasal 22 = 1,5% × Rp200.000.000 = Rp3.000.000.",
        ],
      },
      {
        number: "2.9.2",
        title: "Contoh Impor Barang dengan API",
        content: [
          "PT Sinar Abadi mengimpor mesin produksi dengan nilai CIF Rp720.000.000, bea masuk Rp72.000.000, dan pungutan lain Rp8.000.000.",
          "Nilai impor sebesar Rp800.000.000. Dengan tarif 2,5%, PPh Pasal 22 = Rp20.000.000.",
        ],
      },
      {
        number: "2.9.3",
        title: "Contoh Impor Barang Non-API",
        content: [
          "PT Cahaya Timur melakukan impor tanpa API dengan nilai impor Rp424.000.000.",
          "Dengan tarif 7,5%, PPh Pasal 22 = Rp31.800.000.",
        ],
      },
      {
        number: "2.9.4",
        title: "Contoh Penjualan Hasil Produksi Industri Tertentu",
        content: [
          "PT Semen Kuat menjual hasil produksi semen sebesar Rp600.000.000 tidak termasuk PPN.",
          "Dengan tarif industri semen 0,25%, PPh Pasal 22 = Rp1.500.000.",
        ],
      },
      {
        number: "2.9.5",
        title: "Contoh Pembelian Bahan dari Pedagang Pengumpul",
        content: [
          "PT Agro Makmur membeli hasil pertanian senilai Rp180.000.000 tidak termasuk PPN.",
          "Dengan tarif 0,25%, PPh Pasal 22 = Rp450.000.",
        ],
      },
      {
        number: "2.9.6",
        title: "Contoh Penjualan Barang Sangat Mewah",
        content: [
          "PT Luxury Auto menjual kendaraan sangat mewah seharga Rp6.000.000.000 tidak termasuk PPN dan PPnBM.",
          "Dengan tarif 5%, PPh Pasal 22 = Rp300.000.000.",
        ],
      },
      {
        number: "2.9.7",
        title: "Contoh Transaksi Tanpa NPWP",
        content: [
          "Instansi pemerintah membeli perlengkapan jaringan internet senilai Rp150.000.000 dari wajib pajak tanpa NPWP.",
          "Tarif normal 1,5% menjadi 3%, sehingga PPh Pasal 22 = Rp4.500.000.",
        ],
      },
    ],
  },
  {
    id: "mekanisme",
    number: "2.10",
    title: "Mekanisme Pemungutan, Penyetoran, dan Pelaporan PPh Pasal 22",
    description: "Menjelaskan alur administrasi PPh Pasal 22 dari pemungutan sampai pelaporan.",
    content: [
      "Pemungutan PPh Pasal 22 dilakukan oleh pihak yang ditunjuk pemerintah pada saat transaksi terjadi atau pada saat pembayaran dilakukan.",
    ],
    subMateri: [
      {
        number: "2.10.1",
        title: "Mekanisme Pemungutan PPh Pasal 22",
        content: [
          "Pemungut mengidentifikasi objek pajak, menentukan tarif, menghitung pajak, memungut pajak, dan membuat bukti pemungutan.",
        ],
      },
      {
        number: "2.10.2",
        title: "Mekanisme Penyetoran PPh Pasal 22",
        content: [
          "Setelah dipungut, PPh Pasal 22 harus disetorkan ke kas negara sesuai ketentuan administrasi perpajakan.",
        ],
      },
      {
        number: "2.10.3",
        title: "Mekanisme Pelaporan PPh Pasal 22",
        content: [
          "PPh Pasal 22 yang telah dipungut dan disetor harus dilaporkan oleh pemungut pajak melalui SPT Masa PPh Pasal 22 atau SPT Masa PPh Unifikasi.",
        ],
      },
      {
        number: "2.10.4",
        title: "Bukti Pemungutan PPh Pasal 22",
        content: [
          "Bukti pemungutan menunjukkan bahwa pajak telah dipungut oleh pemungut dan dapat digunakan sebagai kredit pajak apabila PPh Pasal 22 bersifat tidak final.",
        ],
      },
      {
        number: "2.10.5",
        title: "Alur Sederhana PPh Pasal 22",
        content: [
          "Alur sederhana PPh Pasal 22 dimulai dari transaksi terjadi, pemungut mengidentifikasi objek pajak, menghitung pajak, memungut pajak, menyetor ke kas negara, melaporkan pajak, lalu memberikan bukti pungut kepada wajib pajak.",
        ],
      },
    ],
  },
  {
    id: "sifat",
    number: "2.11",
    title: "Sifat PPh Pasal 22",
    description: "Membedakan PPh Pasal 22 final dan tidak final.",
    content: [
      "PPh Pasal 22 dapat bersifat final atau tidak final tergantung jenis transaksinya.",
    ],
    subMateri: [
      {
        number: "2.11.1",
        title: "PPh Pasal 22 Final",
        content: [
          "PPh Pasal 22 final adalah PPh Pasal 22 yang setelah dipungut tidak dapat dikreditkan lagi dalam SPT Tahunan.",
          "Contoh PPh Pasal 22 yang dapat bersifat final adalah PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas kepada penyalur atau agen tertentu.",
        ],
      },
      {
        number: "2.11.2",
        title: "PPh Pasal 22 Tidak Final",
        content: [
          "PPh Pasal 22 tidak final adalah PPh Pasal 22 yang dapat dikreditkan dalam SPT Tahunan.",
        ],
        points: [
          "PPh Pasal 22 atas impor barang.",
          "PPh Pasal 22 atas pembelian barang oleh pemerintah.",
          "PPh Pasal 22 atas penjualan hasil produksi industri tertentu.",
          "PPh Pasal 22 atas pembelian bahan dari pedagang pengumpul.",
        ],
      },
      {
        number: "2.11.3",
        title: "Perbedaan PPh Pasal 22 Final dan Tidak Final",
        content: [
          "PPh Pasal 22 final selesai pada saat dipungut dan tidak menjadi kredit pajak dalam SPT Tahunan.",
          "PPh Pasal 22 tidak final dapat dikreditkan sebagai pengurang pajak terutang pada akhir tahun.",
        ],
      },
    ],
  },
];

export default function MateriPage() {
  const [activeId, setActiveId] = useState("pengantar");

  const activeIndex = materiList.findIndex((item) => item.id === activeId);
  const activeMateri = materiList[activeIndex];

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveId(materiList[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNext = () => {
    if (activeIndex < materiList.length - 1) {
      setActiveId(materiList[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white pt-[78px]">
      <section className="bg-orange-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-black text-orange-600">
            Bab II Modul Pembelajaran
          </p>
          <h1 className="mt-3 text-5xl font-black text-slate-950 md:text-6xl">
            Materi PPh Pasal 22
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            Materi disusun mengikuti struktur PDF dari 2.1 sampai 2.11 agar alur
            pembelajaran lebih sama dengan modul.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[390px_1fr]">
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="border-b border-orange-100 bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">Daftar Materi</h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Klik materi untuk membuka pembahasan.
              </p>
            </div>

            <div className="max-h-[calc(100vh-190px)] overflow-y-auto p-3">
              {materiList.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className="mb-2 w-full text-left transition"
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

          <div>
            <div className="border border-orange-100 bg-white p-8 shadow-xl md:p-10">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-black text-orange-600">
                    Materi {activeMateri.number}
                  </p>
                  <h2 className="mt-2 text-4xl font-black leading-tight text-slate-950">
                    {activeMateri.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
                    {activeMateri.description}
                  </p>
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

              {activeMateri.subMateri && (
                <div className="mt-10 space-y-8">
                  {activeMateri.subMateri.map((sub) => (
                    <div key={sub.number} className="bg-orange-50 p-6">
                      <p className="text-lg font-black text-orange-600">
                        {sub.number}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-slate-950">
                        {sub.title}
                      </h3>

                      <div className="mt-5 space-y-5">
                        {sub.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-lg font-semibold leading-8 text-slate-700"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {sub.points && (
                        <ol className="mt-5 list-decimal space-y-3 pl-8 text-lg font-semibold leading-8 text-slate-700">
                          {sub.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
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