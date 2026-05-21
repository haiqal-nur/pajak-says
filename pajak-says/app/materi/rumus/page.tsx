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
              "Rumus umum PPh Pasal 22 digunakan untuk menghitung jumlah pajak yang harus dipungut atas transaksi tertentu.",
              "Rumus ini digunakan untuk hampir semua transaksi PPh Pasal 22. Perbedaannya hanya terletak pada tarif dan dasar pengenaan yang digunakan.",
            ],
            formulas: [
              "PPh Pasal 22 = Tarif × Dasar Pengenaan",
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
              "Rumus PPh Pasal 22 atas impor digunakan untuk menghitung pajak atas kegiatan impor barang.",
              "Nilai pabean ditambah bea masuk menjadi dasar perhitungan PPh Pasal 22 impor.",
            ],
            formulas: [
              "PPh Pasal 22 Impor=Tarif PPh Pasal 22 Impor × Nilai Impor ",
            ],
            points: [
              "PPh Pasal 22 Impor adalah pajak yang dipungut atas kegiatan impor.",
              "Tarif PPh Pasal 22 Impor adalah tarif yang berlaku atas impor, misalnya 2,5% atau 7,5%.",
              "Nilai Impor adalah nilai barang impor yang digunakan sebagai dasar perhitungan kewajiban kepabeanan. Terdiri dari Cost, Insurance, dan Freight (CIF) + Bea Masuk",
              "Bea Masuk pungutan negara atas barang impor. Nilai impor + Bea Masuk dan pungutan lainnya disebut sebagai dasar perhitungan PPh Pasal 22 impor.",
            ],
          },
          {
            number: "2.8.4",
            title: "Rumus PPh Pasal 22 atas Pembelian Barang",
            content: [
              "Rumus ini digunakan untuk transaksi pembelian barang oleh instansi pemerintah, BUMN, atau badan usaha tertentu.",
            ],
            formulas: [
              "PPh Pasal 22 = Tarif × Harga Pembelian",
            ],
            points: [
              "Tarif yang sering digunakan untuk pembelian barang oleh instansi pemerintah adalah 1,5%.",
              "Harga pembelian umumnya tidak termasuk PPN.",
            ],
          },
          {
            number: "2.8.5",
            title: "Rumus PPh Pasal 22 atas Penjualan Barang",
            content: [
              "Rumus ini digunakan untuk penjualan hasil produksi industri tertentu, penjualan barang sangat mewah, penjualan emas, dan transaksi penjualan barang lainnya yang dikenakan PPh Pasal 22.",
            ],
            formulas: [
              "PPh Pasal 22 = Tarif × Harga Jual atau DPP PPN",
            ],
            points: [
              "Harga jual adalah nilai penjualan barang.",
              "DPP PPN adalah Dasar Pengenaan Pajak Pertambahan Nilai yang digunakan sebagai dasar perhitungan dalam transaksi tertentu.",
            ],
          },
      ]}
      miniQuiz={[
        {
          question: "Dasar pengenaan PPh Pasal 22 adalah …",
          options: [
            "Nilai transaksi yang digunakan untuk menghitung pajak",
            "Nama perusahaan pembeli",
            "Jumlah pegawai perusahaan",
            "Nomor rekening pribadi",
          ],
          answer: "Nilai transaksi yang digunakan untuk menghitung pajak",
          explanation:
            "Dasar pengenaan adalah nilai yang menjadi dasar penghitungan PPh Pasal 22, seperti nilai impor, harga pembelian, harga jual, atau nilai pembayaran.",
        },
        {
          question: "Rumus umum PPh Pasal 22 adalah…",
          options: [
            "Laba Bersih × Jumlah Karyawan",
            "Tarif + Jumlah Pegawai",
            "PPN - PPh",
            "Tarif × Dasar Pengenaan",
          ],
          answer: "Tarif × Dasar Pengenaan",
          explanation:
            "PPh Pasal 22 dihitung dengan mengalikan tarif sesuai ketentuan dengan dasar pengenaan yang berlaku.",
        },
        {
          question: "Rumus nilai impor dalam perhitungan PPh Pasal 22 impor adalah …",
          options: [
            "CIF + Bea Masuk + Pungutan Lain",
            "Gaji + Bonus + THR",
            "Harga Jual - Laba",
            "PPN + PPnBM saja",
          ],
          answer: "CIF + Bea Masuk + Pungutan Lain",
          explanation:
            "Nilai impor terdiri dari CIF, bea masuk, dan pungutan lain sesuai ketentuan kepabeanan.",
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