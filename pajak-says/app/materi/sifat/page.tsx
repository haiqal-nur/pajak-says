import MateriTemplate from "@/app/components/MateriTemplate";

export default function SifatPage() {
  return (
    <MateriTemplate
      number="2.11"
      title="Sifat PPh Pasal 22"
      description="Membahas perbedaan PPh Pasal 22 final dan tidak final."
      content={[
        "PPh Pasal 22 dapat bersifat final atau tidak final tergantung pada jenis transaksinya.",
        "Perbedaan sifat ini penting karena menentukan apakah pajak yang telah dipungut dapat dikreditkan dalam SPT Tahunan atau tidak.",
      ]}
      subMateri={[
        {
          number: "2.11.1",
          title: "PPh Pasal 22 Final",
          content: [
            "PPh Pasal 22 final adalah PPh Pasal 22 yang setelah dipungut tidak dapat dikreditkan lagi dalam SPT Tahunan.",
            "Artinya, kewajiban pajak atas transaksi tersebut dianggap selesai pada saat pajak dipungut.",
            "Contoh PPh Pasal 22 yang dapat bersifat final adalah PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas kepada penyalur atau agen tertentu.",
          ],
        },
        {
          number: "2.11.2",
          title: "PPh Pasal 22 Tidak Final",
          content: [
            "PPh Pasal 22 tidak final adalah PPh Pasal 22 yang dapat dikreditkan dalam SPT Tahunan.",
            "Artinya, pajak yang telah dipungut selama tahun berjalan dapat diperhitungkan sebagai pengurang pajak terutang pada akhir tahun.",
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
          points: [
            "Perlakuan pajak final: selesai saat dipungut.",
            "Perlakuan pajak tidak final: dapat dikreditkan.",
            "Pengaruh PPh final dalam SPT Tahunan: tidak menjadi kredit pajak.",
            "Pengaruh PPh tidak final dalam SPT Tahunan: menjadi kredit pajak.",
            "Contoh PPh final: penjualan BBM, BBG, dan pelumas kepada penyalur atau agen tertentu.",
            "Contoh PPh tidak final: impor barang, belanja pemerintah, dan penjualan hasil produksi tertentu.",
          ],
        },
      ]}
      miniQuiz={[
        {
          question: "PPh Pasal 22 final berarti …",
          options: [
            "Pajak tidak memerlukan transaksi",
            "Pajak selalu dikembalikan tunai",
            "Pajak tidak perlu disetor",
            "Pajak yang telah dipungut tidak dapat dikreditkan kembali dalam SPT Tahunan",
          ],
          answer:
            "Pajak yang telah dipungut tidak dapat dikreditkan kembali dalam SPT Tahunan",
          explanation:
            "PPh Pasal 22 final dianggap selesai pada saat dipungut sehingga tidak dapat digunakan sebagai kredit pajak dalam SPT Tahunan.",
        },
        {
          question: "Contoh PPh Pasal 22 yang bersifat final adalah …",
          options: [
            "Pembelian barang oleh pemerintah",
            "Penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen",
            "Impor barang dengan API",
            "Penjualan emas biasa",
          ],
          answer:
            "Penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen",
          explanation:
            "PPh Pasal 22 pada umumnya tidak final, tetapi penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen bersifat final.",
        },
        {
          question: "PPh Pasal 22 tidak final berarti …",
          options: [
            "Tidak perlu disetor",
            "Tidak perlu bukti pemungutan",
            "Dapat dikreditkan dalam SPT Tahunan",
            "Selalu bebas pajak",
          ],
          answer: "Dapat dikreditkan dalam SPT Tahunan",
          explanation:
            "PPh Pasal 22 tidak final dapat diperhitungkan sebagai kredit pajak dalam SPT Tahunan.",
        },
      ]}
      previous={{
        label: "Materi 2.10",
        href: "/materi/mekanisme",
      }}
    />
  );
}