import MateriTemplate from "@/app/components/MateriTemplate";

export default function PPhPasal22Page() {
  return (
    <MateriTemplate
      number="2.2"
      title="Pajak Penghasilan Pasal 22"
      description="Membahas pengertian, definisi, tujuan, karakteristik, dan kedudukan PPh Pasal 22."
      content={[
        "PPh Pasal 22 adalah pemungutan PPh yang dilakukan oleh pihak tertentu yang ditunjuk oleh pemerintah atas transaksi tertentu.",
        "Transaksi tersebut umumnya berkaitan dengan penyerahan barang, impor barang, ekspor komoditas tertentu, pembelian barang oleh instansi pemerintah, pembelian barang oleh badan usaha tertentu, penjualan hasil produksi industri tertentu, penjualan bahan bakar, transaksi emas, serta kegiatan usaha lain yang diatur dalam ketentuan perpajakan.",
      ]}
      subMateri={[
        {
          number: "2.2.1",
          title: "Pengertian PPh Pasal 22",
          content: [
            "PPh Pasal 22 dapat dipahami sebagai pajak yang dipungut di muka pada saat transaksi tertentu terjadi.",
            "Berbeda dengan pajak yang dibayar sendiri oleh wajib pajak, PPh Pasal 22 melibatkan pihak pemungut seperti instansi pemerintah, Direktorat Jenderal Bea dan Cukai, bank devisa, BUMN, industri tertentu, produsen atau importir BBM, BBG, dan pelumas, serta pihak lain yang ditunjuk.",
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
      ]}
      previous={{
        label: "Materi 2.1",
        href: "/materi/pengantar-umum",
      }}
      next={{
        label: "Materi 2.3",
        href: "/materi/dasar-hukum",
      }}
    />
  );
}