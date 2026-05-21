import MateriTemplate from "@/app/components/MateriTemplate";

export default function PemungutPage() {
  return (
    <MateriTemplate
      number="2.4"
      title="Pemungut PPh Pasal 22"
      description="Membahas pihak-pihak yang ditunjuk sebagai pemungut PPh Pasal 22."
      content={[
        "Pemungut PPh Pasal 22 adalah pihak yang ditunjuk oleh peraturan perpajakan untuk memungut pajak atas transaksi tertentu.",
        "Penunjukan pemungut dilakukan karena pihak tersebut berada pada posisi strategis dalam transaksi, sehingga pemungutan pajak dapat dilakukan secara lebih efektif dan mudah diawasi.",
        "Dalam PPh Pasal 22, pemungut tidak selalu merupakan pihak yang menerima penghasilan. Pemungut dapat berupa instansi pemerintah, DJBC, bank devisa, BUMN, badan usaha tertentu, industri tertentu, produsen atau importir, maupun pihak lain yang ditetapkan.",
      ]}
      subMateri={[
        {
          number: "2.4.1",
          title: "Pengertian Pemungut PPh Pasal 22",
          content: [
            "Pemungut PPh Pasal 22 adalah pihak yang diberi kewenangan untuk menghitung, memungut, menyetor, dan melaporkan PPh Pasal 22 sesuai ketentuan.",
            "Pemungut dipilih karena berada pada titik transaksi yang mudah diawasi oleh pemerintah.",
          ],
        },
        {
          number: "2.4.2",
          title: "Bendahara Pemerintah dan Instansi Pemerintah",
          content: [
            "Bendahara pemerintah dan instansi pemerintah bertindak sebagai pemungut atas pembayaran pembelian barang.",
            "Pemungutan dilakukan ketika pemerintah melakukan belanja barang kepada rekanan.",
            "Untuk belanja barang oleh instansi pemerintah, PPh Pasal 22 dipungut dengan tarif 1,5% atas belanja barang di atas Rp2.000.000,00 dan bukan transaksi yang dipecah-pecah.",
          ],
        },
        {
          number: "2.4.3",
          title: "Direktorat Jenderal Bea dan Cukai",
          content: [
            "Direktorat Jenderal Bea dan Cukai berperan sebagai pemungut dalam kegiatan impor barang.",
            "Posisi DJBC sangat strategis karena barang impor berada dalam pengawasan kepabeanan saat masuk ke wilayah Indonesia.",
            "Pemungutan PPh Pasal 22 atas impor dapat dilakukan bersamaan dengan proses kepabeanan.",
          ],
        },
        {
          number: "2.4.4",
          title: "Badan Usaha Milik Negara dan Badan Usaha Tertentu",
          content: [
            "BUMN dan badan usaha tertentu dapat ditunjuk sebagai pemungut atas pembelian barang dan/atau bahan untuk keperluan kegiatan usahanya.",
            "Dalam transaksi ini, BUMN atau badan usaha tertentu berperan sebagai pihak pembeli sekaligus pemungut PPh Pasal 22.",
            "Pihak penjual atau pemasok menjadi pihak yang dipungut.",
          ],
        },
        {
          number: "2.4.5",
          title: "Industri Tertentu",
          content: [
            "Industri tertentu yang ditunjuk sebagai pemungut meliputi industri semen, kertas, baja, otomotif, dan farmasi.",
            "Pemungutan dilakukan atas penjualan hasil produksi kepada distributor di dalam negeri.",
            "Pemungutan oleh industri tertentu bertujuan menjangkau transaksi penjualan hasil produksi yang memiliki nilai ekonomi besar dan berlangsung secara rutin.",
          ],
        },
        {
          number: "2.4.6",
          title: "Produsen atau Importir BBM, BBG, dan Pelumas",
          content: [
            "Produsen atau importir BBM, BBG, dan pelumas menjadi pemungut atas penjualan produk tersebut.",
            "Transaksi ini memiliki karakter khusus karena komoditas BBM, BBG, dan pelumas memiliki perputaran luas dan nilai ekonomi besar.",
            "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen bersifat final.",
          ],
        },
        {
          number: "2.4.7",
          title: "Industri atau Eksportir Pembeli Bahan dari Pedagang Pengumpul",
          content: [
            "Industri atau eksportir tertentu menjadi pemungut ketika membeli bahan dari pedagang pengumpul.",
            "Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur.",
            "Pemungutan ini dilakukan agar transaksi sektor primer sebelum masuk proses industri atau ekspor dapat tercatat dan diawasi.",
          ],
        },
        {
          number: "2.4.8",
          title: "Pihak Lain yang Ditunjuk sebagai Pemungut PPh Pasal 22",
          content: [
            "Selain pihak-pihak di atas, terdapat pihak lain yang dapat ditunjuk sebagai pemungut PPh Pasal 22 sesuai jenis transaksi.",
            "Pihak tersebut dapat berupa agen atau importir kendaraan bermotor, badan usaha pembeli komoditas tambang, pihak lain dalam Sistem Informasi Pengadaan, pengusaha emas, serta lembaga jasa keuangan penyelenggara kegiatan usaha bulion.",
          ],
        },
      ]}
      miniQuiz={[
        {
          question: "Pemungut PPh Pasal 22 adalah …",
          options: [
            "Semua pembeli barang di pasar",
            "Pihak yang ditunjuk untuk memungut pajak atas transaksi tertentu",
            "Semua orang pribadi yang menerima gaji",
            "Seluruh konsumen akhir",
          ],
          answer: "Pihak yang ditunjuk untuk memungut pajak atas transaksi tertentu",
          explanation:
            "Pemungut PPh Pasal 22 adalah pihak yang ditunjuk oleh ketentuan perpajakan untuk memungut pajak saat terjadi transaksi tertentu.",
        },
        {
          question: "Direktorat Jenderal Bea dan Cukai berperan sebagai pemungut PPh Pasal 22 terutama atas …",
          options: [
            "Pajak restoran daerah",
            "Pembayaran gaji pegawai",
            "Sewa rumah pribadi",
            "Kegiatan impor barang",
          ],
          answer: "Kegiatan impor barang",
          explanation:
            "DJBC berperan sebagai pemungut PPh Pasal 22 atas kegiatan impor karena barang impor berada dalam pengawasan kepabeanan.",
        },
        {
          question: "Industri tertentu yang dapat menjadi pemungut PPh Pasal 22 antara lain …",
          options: [
            "Pendidikan dasar dan rumah tangga",
            "Pariwisata, musik, dan hiburan",
            "Semen, kertas, baja, otomotif, dan farmasi",
            "Restoran kecil dan toko kelontong",
          ],
          answer: "Semen, kertas, baja, otomotif, dan farmasi",
          explanation:
            "Industri semen, kertas, baja, otomotif, dan farmasi termasuk industri tertentu yang dapat ditunjuk sebagai pemungut PPh Pasal 22.",
        },
      ]}
      previous={{
        label: "Materi 2.3",
        href: "/materi/dasar-hukum",
      }}
      next={{
        label: "Materi 2.5",
        href: "/materi/objek",
      }}
    />
  );
}