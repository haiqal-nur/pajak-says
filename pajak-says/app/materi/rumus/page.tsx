import MateriTemplate from "@/app/components/MateriTemplate";

export default function RumusPage() {
  return (
    <MateriTemplate
      number="2.8"
      title="Dasar Pengenaan dan Rumus Perhitungan PPh Pasal 22"
      description="Membahas dasar pengenaan dan rumus perhitungan PPh Pasal 22 berdasarkan jenis transaksi."
      content={[
        "Dasar pengenaan PPh Pasal 22 adalah nilai yang digunakan sebagai dasar untuk menghitung jumlah pajak yang harus dipungut.",
        "Dasar pengenaan dapat berbeda-beda tergantung jenis transaksinya.",
      ]}
      subMateri={[
        {
          number: "2.8.1",
          title: "Pengertian Dasar Pengenaan PPh Pasal 22",
          content: [
            "Dasar pengenaan PPh Pasal 22 adalah nilai yang digunakan sebagai dasar penghitungan pajak.",
          ],
          points: [
            "Nilai impor, untuk transaksi impor barang.",
            "Harga pembelian, untuk pembelian barang oleh pemerintah atau badan usaha tertentu.",
            "DPP PPN, untuk penjualan hasil produksi industri tertentu.",
            "Harga jual, untuk penjualan barang tertentu.",
            "Nilai pembayaran, untuk transaksi melalui sistem informasi pengadaan.",
          ],
        },
        {
          number: "2.8.2",
          title: "Rumus Umum PPh Pasal 22",
          content: [
            "Rumus umum PPh Pasal 22 adalah: PPh Pasal 22 = Tarif × Dasar Pengenaan.",
            "Rumus ini digunakan untuk hampir semua transaksi PPh Pasal 22. Perbedaannya hanya terletak pada tarif dan dasar pengenaan yang digunakan.",
          ],
          points: [
            "PPh Pasal 22 adalah jumlah pajak yang dipungut atas transaksi tertentu.",
            "Tarif adalah persentase PPh Pasal 22 sesuai jenis transaksi.",
            "Dasar Pengenaan adalah nilai transaksi yang menjadi dasar perhitungan pajak.",
          ],
        },
        {
          number: "2.8.3",
          title: "Rumus PPh Pasal 22 atas Impor",
          content: [
            "Rumus PPh Pasal 22 atas impor adalah: PPh Pasal 22 Impor = Tarif PPh Pasal 22 Impor × (Nilai Pabean + Bea Masuk).",
            "Nilai Pabean + Bea Masuk disebut sebagai dasar perhitungan PPh Pasal 22 impor.",
          ],
          points: [
            "PPh Pasal 22 Impor adalah pajak yang dipungut atas kegiatan impor.",
            "Tarif PPh Pasal 22 Impor adalah tarif yang berlaku atas impor, misalnya 2,5% atau 7,5%.",
            "Nilai Pabean adalah nilai barang impor yang digunakan sebagai dasar perhitungan kewajiban kepabeanan.",
            "Bea Masuk adalah pungutan negara atas barang impor.",
          ],
        },
        {
          number: "2.8.4",
          title: "Rumus PPh Pasal 22 atas Pembelian Barang",
          content: [
            "Rumus PPh Pasal 22 atas pembelian barang adalah: PPh Pasal 22 = Tarif × Harga Pembelian.",
            "Rumus ini digunakan untuk transaksi seperti pembelian barang oleh instansi pemerintah, BUMN, atau badan usaha tertentu.",
          ],
          points: [
            "PPh Pasal 22 adalah pajak yang dipungut atas pembelian barang.",
            "Tarif adalah tarif yang berlaku, misalnya 1,5% untuk pembelian barang oleh instansi pemerintah.",
            "Harga Pembelian adalah nilai barang yang dibeli, umumnya tidak termasuk PPN.",
          ],
        },
        {
          number: "2.8.5",
          title: "Rumus PPh Pasal 22 atas Penjualan Barang",
          content: [
            "Rumus PPh Pasal 22 atas penjualan barang adalah: PPh Pasal 22 = Tarif × Harga Jual atau DPP PPN.",
            "Rumus ini digunakan untuk penjualan hasil produksi industri tertentu, penjualan barang sangat mewah, penjualan emas, dan transaksi penjualan barang lainnya yang dikenakan PPh Pasal 22.",
          ],
          points: [
            "Harga Jual adalah nilai penjualan barang.",
            "DPP PPN adalah Dasar Pengenaan Pajak Pertambahan Nilai yang digunakan sebagai dasar perhitungan dalam transaksi tertentu.",
          ],
        },
      ]}
      previous={{
        label: "Materi 2.7",
        href: "/materi/tarif",
      }}
      next={{
        label: "Materi 2.9",
        href: "/materi/studi-kasus",
      }}
    />
  );
}