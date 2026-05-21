import MateriTemplate from "@/app/components/MateriTemplate";

export default function StudiKasusPage() {
  return (
    <MateriTemplate
      number="2.9"
      title="Studi Kasus dan Contoh Perhitungan PPh Pasal 22"
      description="Membahas penerapan perhitungan PPh Pasal 22 melalui beberapa contoh transaksi."
      content={[
        "Studi kasus digunakan untuk membantu pembaca memahami penerapan rumus PPh Pasal 22 dalam transaksi nyata.",
        "Contoh dalam bagian ini mencakup pembelian barang oleh pemerintah, impor dengan API, impor tanpa API, industri tertentu, pedagang pengumpul, barang sangat mewah, dan transaksi tanpa NPWP.",
      ]}
      subMateri={[
        {
          number: "2.9.1",
          title: "Contoh Pembelian Barang oleh Instansi Pemerintah",
          content: [
            "Sebuah instansi pemerintah daerah membeli 25 unit komputer dari PT Maju Jaya dengan total harga pembelian sebelum PPN sebesar Rp200.000.000,00.",
            "PT Maju Jaya memiliki NPWP, sehingga tarif PPh Pasal 22 yang digunakan adalah 1,5%.",
            "PPh Pasal 22 = 1,5% × Rp200.000.000,00 = Rp3.000.000,00.",
            "Jadi, PPh Pasal 22 yang harus dipungut oleh instansi pemerintah adalah sebesar Rp3.000.000,00.",
          ],
        },
        {
          number: "2.9.2",
          title: "Contoh Impor Barang dengan API",
          content: [
            "PT Sinar Abadi memiliki API dan mengimpor mesin produksi dari Jepang.",
            "Harga barang sebesar Rp680.000.000,00, asuransi Rp12.000.000,00, dan freight Rp28.000.000,00.",
            "CIF = Rp680.000.000,00 + Rp12.000.000,00 + Rp28.000.000,00 = Rp720.000.000,00.",
            "Bea masuk = 10% × Rp720.000.000,00 = Rp72.000.000,00.",
            "Nilai impor = Rp720.000.000,00 + Rp72.000.000,00 + Rp8.000.000,00 = Rp800.000.000,00.",
            "PPh Pasal 22 = 2,5% × Rp800.000.000,00 = Rp20.000.000,00.",
          ],
        },
        {
          number: "2.9.3",
          title: "Contoh Impor Barang Non-API",
          content: [
            "PT Cahaya Timur melakukan impor barang dagangan dari luar negeri tanpa memiliki API.",
            "Harga barang impor sebesar Rp350.000.000,00, asuransi Rp7.500.000,00, dan freight Rp22.500.000,00.",
            "CIF = Rp350.000.000,00 + Rp7.500.000,00 + Rp22.500.000,00 = Rp380.000.000,00.",
            "Bea masuk = 10% × Rp380.000.000,00 = Rp38.000.000,00.",
            "Nilai impor = Rp380.000.000,00 + Rp38.000.000,00 + Rp6.000.000,00 = Rp424.000.000,00.",
            "PPh Pasal 22 = 7,5% × Rp424.000.000,00 = Rp31.800.000,00.",
          ],
        },
        {
          number: "2.9.4",
          title: "Contoh Penjualan Hasil Produksi Industri Tertentu",
          content: [
            "PT Semen Kuat menjual hasil produksi semen kepada distributor di dalam negeri dengan nilai penjualan Rp600.000.000,00 tidak termasuk PPN.",
            "Tarif untuk industri semen adalah 0,25% dari nilai penjualan tidak termasuk PPN.",
            "PPh Pasal 22 = 0,25% × Rp600.000.000,00 = Rp1.500.000,00.",
            "Jadi, PPh Pasal 22 yang dipungut atas penjualan hasil produksi semen tersebut adalah sebesar Rp1.500.000,00.",
          ],
        },
        {
          number: "2.9.5",
          title: "Contoh Pembelian Bahan dari Pedagang Pengumpul",
          content: [
            "PT Agro Makmur membeli hasil pertanian dari pedagang pengumpul senilai Rp180.000.000,00 tidak termasuk PPN.",
            "Karena pembelian dilakukan oleh eksportir dari pedagang pengumpul, transaksi tersebut dikenai tarif 0,25%.",
            "PPh Pasal 22 = 0,25% × Rp180.000.000,00 = Rp450.000,00.",
          ],
        },
        {
          number: "2.9.6",
          title: "Contoh Penjualan Barang Sangat Mewah",
          content: [
            "PT Luxury Auto menjual satu unit kendaraan bermotor yang tergolong barang sangat mewah dengan harga jual Rp6.000.000.000,00.",
            "Harga tersebut belum termasuk PPN dan PPnBM. Tarif yang digunakan adalah 5%.",
            "PPh Pasal 22 = 5% × Rp6.000.000.000,00 = Rp300.000.000,00.",
          ],
        },
        {
          number: "2.9.7",
          title: "Contoh Transaksi dengan Wajib Pajak Tidak Memiliki NPWP",
          content: [
            "Sebuah instansi pemerintah membeli perlengkapan jaringan internet dari CV Mandiri Tekno senilai Rp150.000.000,00 tidak termasuk PPN.",
            "Tarif normal PPh Pasal 22 atas pembelian barang oleh instansi pemerintah adalah 1,5%, tetapi CV Mandiri Tekno tidak memiliki NPWP.",
            "Tarif tanpa NPWP = 1,5% × 200% = 3%.",
            "PPh Pasal 22 = 3% × Rp150.000.000,00 = Rp4.500.000,00.",
          ],
        },
      ]}
      previous={{
        label: "Materi 2.8",
        href: "/materi/rumus",
      }}
      next={{
        label: "Materi 2.10",
        href: "/materi/mekanisme",
      }}
    />
  );
}