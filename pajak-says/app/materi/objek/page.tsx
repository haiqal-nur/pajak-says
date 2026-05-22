import MateriTemplate from "@/app/components/MateriTemplate";

export default function ObjekPage() {
  return (
    <MateriTemplate
      number="2.5"
      title="Objek PPh Pasal 22"
      description="Membahas transaksi atau kegiatan yang menjadi objek pemungutan PPh Pasal 22."
      content={[
        "Objek PPh Pasal 22 adalah transaksi atau kegiatan tertentu yang berdasarkan ketentuan perpajakan dikenai pemungutan oleh pihak yang ditunjuk.",
        "Objek tersebut umumnya berkaitan dengan perdagangan barang, impor, pembelian barang, penjualan hasil produksi, penjualan BBM, BBG, pelumas, transaksi emas, dan pengadaan pemerintah.",
        "Objek PPh Pasal 22 tidak mencakup semua transaksi, melainkan hanya transaksi yang secara tegas diatur dalam ketentuan perpajakan.",
      ]}
      subMateri={[
        {
          number: "2.5.1",
          title: "Pengertian Objek PPh Pasal 22",
          content: [
            "Objek PPh Pasal 22 adalah jenis transaksi yang menjadi dasar pemungutan pajak.",
            "Untuk menentukan apakah suatu transaksi dikenai PPh Pasal 22, perlu dilihat jenis transaksi, pihak yang bertransaksi, nilai transaksi, dan ketentuan pengecualiannya.",
          ],
        },
        {
          number: "2.5.2",
          title: "Impor Barang",
          content: [
            "Impor barang merupakan salah satu objek utama PPh Pasal 22.",
            "Pemungutan dilakukan karena impor memiliki nilai ekonomi yang jelas dan berada dalam pengawasan kepabeanan.",
            "Dalam kegiatan impor, dasar pengenaan umumnya adalah nilai impor, yaitu nilai cost, insurance, and freight ditambah bea masuk dan pungutan lain sesuai ketentuan kepabeanan.",
          ],
        },
        {
          number: "2.5.3",
          title: "Pembelian Barang oleh Pemerintah",
          content: [
            "Pembelian barang oleh pemerintah menjadi objek PPh Pasal 22 ketika instansi pemerintah melakukan pembayaran kepada rekanan atas pembelian barang.",
            "Objek ini muncul dalam kegiatan pengadaan barang pemerintah, baik melalui mekanisme uang persediaan maupun pembayaran langsung.",
            "Namun, tidak semua pembelian barang oleh pemerintah dipungut PPh Pasal 22 karena terdapat pengecualian untuk nilai transaksi tertentu dan jenis pembayaran tertentu.",
          ],
        },
        {
          number: "2.5.4",
          title: "Pembelian Barang oleh BUMN atau Badan Usaha Tertentu",
          content: [
            "Pembelian barang oleh BUMN atau badan usaha tertentu menjadi objek PPh Pasal 22 apabila barang atau bahan tersebut dibeli untuk keperluan kegiatan usaha.",
            "Transaksi ini biasanya melibatkan nilai pembelian yang cukup besar dan dilakukan secara rutin.",
            "Dasar pengenaan umumnya adalah harga pembelian tidak termasuk PPN.",
          ],
        },
        {
          number: "2.5.5",
          title: "Penjualan Hasil Produksi Industri Tertentu",
          content: [
            "Penjualan hasil produksi industri tertentu menjadi objek PPh Pasal 22 apabila dilakukan oleh industri yang telah ditetapkan dalam ketentuan perpajakan.",
            "Industri tersebut meliputi industri semen, kertas, baja, otomotif, dan farmasi.",
            "Pemungutan dilakukan pada saat industri menjual hasil produksinya kepada distributor di dalam negeri.",
          ],
        },
        {
          number: "2.5.6",
          title: "Penjualan BBM, BBG, dan Pelumas",
          content: [
            "Penjualan BBM, BBG, dan pelumas oleh produsen atau importir termasuk objek PPh Pasal 22.",
            "Objek ini dikenakan karena komoditas tersebut memiliki nilai ekonomi tinggi dan perputaran transaksi yang luas.",
            "PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen tidak dapat dikreditkan kembali.",
          ],
        },
        {
          number: "2.5.7",
          title: "Pembelian Bahan dari Pedagang Pengumpul",
          content: [
            "Pembelian bahan dari pedagang pengumpul menjadi objek PPh Pasal 22 apabila dilakukan oleh industri atau eksportir tertentu.",
            "Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum diproses secara manufaktur.",
          ],
        },
        {
          number: "2.5.8",
          title: "Penjualan Barang Sangat Mewah",
          content: [
            "Penjualan barang sangat mewah termasuk objek PPh Pasal 22.",
            "Barang yang tergolong sangat mewah dapat berupa kendaraan tertentu, rumah atau apartemen dengan nilai dan luas tertentu, kapal pesiar, atau pesawat udara pribadi sesuai ketentuan perpajakan.",
            "PPh Pasal 22 atas barang sangat mewah dikenai tarif 5% dari harga jual, tidak termasuk PPN dan PPnBM.",
          ],
        },
        {
          number: "2.5.9",
          title: "Transaksi Melalui Sistem Informasi Pengadaan",
          content: [
            "Transaksi melalui Sistem Informasi Pengadaan menjadi objek PPh Pasal 22 dalam pengadaan barang dan/atau jasa pemerintah secara elektronik.",
            "PPh Pasal 22 atas transaksi ini dikenakan sebesar 0,5% dari nilai pembayaran dalam dokumen tagihan, tidak termasuk PPN dan PPnBM.",
          ],
        },
        {
          number: "2.5.10",
          title: "Penjualan Emas Perhiasan dan Emas Batangan",
          content: [
            "Penjualan emas perhiasan dan emas batangan termasuk objek khusus PPh Pasal 22.",
            "Pengusaha emas perhiasan dan/atau emas batangan dapat ditunjuk untuk memungut, menyetor, dan melaporkan PPh Pasal 22 atas penjualan emas.",
            "Tarif yang umum dikenakan atas penjualan emas adalah 0,25% dari harga jual, dengan pengecualian tertentu, misalnya penjualan kepada konsumen akhir atau pihak tertentu sesuai ketentuan yang berlaku.",
          ],
        },
        {
          number: "2.5.11",
          title: "Ekspor komoditas",
          content: [
            "Ekspor komoditas tambang, batubara, mineral logam, dan mineral bukan logam yang dilakukan oleh eksportir, kecuali yang dilakukan oleh Wajib Pajak yang terikat dalam perjanjian kerja sama pengusaha pertambangan dan kontrak atau perjanjian karya.",
          ],
        },
      ]}
      miniQuiz={[
        {
          question: "Objek PPh Pasal 22 adalah …",
          options: [
            "Transaksi atau kegiatan tertentu yang dikenai pemungutan pajak",
            "Semua pengeluaran pribadi masyarakat",
            "Semua kegiatan sosial tanpa pengecualian",
            "Seluruh pinjaman bank",
          ],
          answer: "Transaksi atau kegiatan tertentu yang dikenai pemungutan pajak",
          explanation:
            "Objek PPh Pasal 22 adalah transaksi atau kegiatan tertentu yang dikenai pemungutan oleh pihak yang ditunjuk.",
        },
        {
          question: "Salah satu objek utama PPh Pasal 22 adalah …",
          options: ["Hadiah ulang tahun keluarga", "Iuran warga", "Tabungan pribadi", "Impor barang"],
          answer: "Impor barang",
          explanation:
            "Impor barang merupakan salah satu objek utama PPh Pasal 22 karena memiliki nilai ekonomi yang jelas dan berada dalam pengawasan kepabeanan.",
        },
        {
          question: "Penjualan barang sangat mewah dikenai PPh Pasal 22 karena …",
          options: [
            "Selalu merupakan transaksi kecil",
            "Merupakan transaksi konsumsi bernilai tinggi",
            "Tidak memiliki harga jual",
            "Tidak termasuk kegiatan ekonomi",
          ],
          answer: "Merupakan transaksi konsumsi bernilai tinggi",
          explanation:
            "Barang sangat mewah mencerminkan transaksi konsumsi bernilai tinggi sehingga dapat dikenai PPh Pasal 22.",
        },
      ]}
      previous={{
        label: "Materi 2.4",
        href: "/materi/pemungut",
      }}
      next={{
        label: "Materi 2.6",
        href: "/materi/pengecualian",
      }}
    />
  );
}