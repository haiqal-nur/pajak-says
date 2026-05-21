import MateriTemplate from "@/app/components/MateriTemplate";

export default function TarifPage() {
  return (
    <MateriTemplate
      number="2.7"
      title="Tarif PPh Pasal 22"
      description="Membahas tarif PPh Pasal 22 berdasarkan jenis transaksi, objek pajak, dan pihak yang terlibat."
      content={[
        "Tarif PPh Pasal 22 tidak bersifat tunggal. Tarifnya berbeda-beda sesuai jenis transaksi, objek pajak, dan pihak yang terlibat.",
        "Secara umum, tarif PPh Pasal 22 diterapkan atas dasar pengenaan tertentu, seperti nilai impor, harga pembelian, harga jual, atau nilai pembayaran.",
        "Sebelum menghitung PPh Pasal 22, pemungut harus menentukan terlebih dahulu jenis transaksi dan dasar pengenaan yang benar.",
      ]}
      subMateri={[
        {
          number: "2.7.1",
          title: "Pengantar Tarif PPh Pasal 22",
          content: [
            "Perbedaan tarif PPh Pasal 22 muncul karena objek PPh Pasal 22 sangat beragam, mulai dari impor, pembelian barang, penjualan hasil industri, penjualan BBM, BBG, pelumas, barang sangat mewah, transaksi emas, hingga transaksi melalui sistem pengadaan.",
          ],
        },
        {
            number: "2.7.2",
            title: "Tarif PPh Pasal 22 atas Impor dan Ekspor Barang",
            content: [
              "Tarif PPh Pasal 22 atas impor dan ekspor barang umumnya dibedakan berdasarkan status importir dan jenis barang.",
            ],
            tables: [
              {
                title: "Tabel Tarif Impor",
                headers: ["Jenis Barang", "Status", "Tarif"],
                rows: [
                  ["Barang Tertentu Lampiran A", "Dengan/tanpa API", "10% × Nilai Impor"],
                  ["Barang Tertentu Lainnya Lampiran B", "Dengan/tanpa API", "7,5% × Nilai Impor"],
                  ["Kedelai, Gandum, Tepung Terigu", "Dengan/tanpa API", "0,5% × Nilai Impor"],
                  ["Barang Selain di atas", "Dengan API", "2,5% × Nilai Impor"],
                  ["Barang Selain di atas", "Tanpa API", "7,5% × Nilai Impor"],
                  ["Barang yang Tidak Dikuasai", "Tanpa Syarat", "7,5% × Harga Jual Lelang"],
                ],
              },
              {
                title: "Tabel Tarif Ekspor",
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
          },
        {
          number: "2.7.3",
          title: "Tarif PPh Pasal 22 atas Pembelian Barang oleh Pemerintah",
          content: [
            "Pembelian barang oleh pemerintah dikenai tarif 1,5% dari harga pembelian tidak termasuk PPN.",
            "Tarif ini berlaku atas belanja barang yang memenuhi syarat pemungutan, terutama transaksi yang nilainya melebihi batas pengecualian dan bukan transaksi yang dipecah-pecah.",
          ],
        },
        {
            number: "2.7.4",
            title: "Tarif PPh Pasal 22 atas Penjualan Hasil Produksi Industri Tertentu",
            content: [
              "Tarif PPh Pasal 22 atas penjualan hasil produksi industri tertentu berbeda-beda tergantung jenis industrinya.",
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
          },
          {
            number: "2.7.5",
            title: "Tarif PPh Pasal 22 atas Penjualan BBM, BBG, dan Pelumas",
            content: [
              "Tarif PPh Pasal 22 atas penjualan BBM, BBG, dan pelumas ditentukan berdasarkan jenis produk dan pihak pembelinya.",
              "Perlakuan final berlaku atas penjualan BBM, BBG, dan pelumas oleh produsen atau importir kepada penyalur atau agen.",
            ],
            tables: [
              {
                title: "Tabel Tarif BBM, BBG, dan Pelumas",
                headers: ["Kategori Penjualan", "Tarif"],
                rows: [
                  ["BBM ke SPBU Pertamina", "0,25% × Penjualan tidak termasuk PPN"],
                  ["BBM ke SPBU Swasta / Non-SPBU", "0,3% × Penjualan tidak termasuk PPN"],
                  ["Bahan Bakar Gas / Pelumas", "0,3% × Penjualan tidak termasuk PPN"],
                ],
              },
            ],
          },
        {
          number: "2.7.6",
          title: "Tarif PPh Pasal 22 atas Pembelian Bahan dari Pedagang Pengumpul",
          content: [
            "Pembelian bahan dari pedagang pengumpul oleh industri atau eksportir dikenai tarif 0,25% dari harga pembelian tidak termasuk PPN.",
            "Bahan yang dimaksud meliputi hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur.",
          ],
        },
        {
          number: "2.7.7",
          title: "Tarif PPh Pasal 22 atas Barang Sangat Mewah",
          content: [
            "Penjualan barang sangat mewah dikenai tarif 5% dari harga jual, tidak termasuk PPN dan PPnBM.",
            "Pemungutan ini tidak bersifat final, sehingga dapat menjadi kredit pajak bagi pihak yang dipungut apabila memenuhi ketentuan pengkreditan.",
          ],
          points: [
            "Kendaraan mewah.",
            "Kapal pesiar.",
            "Pesawat pribadi.",
            "Rumah mewah.",
            "Apartemen atau kondominium mewah.",
          ],
        },
        {
          number: "2.7.8",
          title: "Tarif PPh Pasal 22 atas Transaksi Sistem Informasi Pengadaan",
          content: [
            "Transaksi melalui Sistem Informasi Pengadaan dikenai tarif 0,5% dari seluruh nilai pembayaran yang tercantum dalam dokumen tagihan, tidak termasuk PPN dan PPnBM.",
            "Tarif ini berlaku pada transaksi pengadaan barang dan/atau jasa pemerintah yang dilakukan melalui pihak lain dalam sistem pengadaan elektronik.",
          ],
        },
        {
          number: "2.7.9",
          title: "Tarif PPh Pasal 22 atas Penjualan Emas",
          content: [
            "Penjualan emas perhiasan dan emas batangan dapat dikenakan PPh Pasal 22 oleh pihak yang ditunjuk.",
            "Tarif yang sering digunakan dalam ketentuan PPh Pasal 22 atas penjualan emas adalah 0,25% dari harga jual.",
          ],
        },
        {
          number: "2.7.10",
          title: "Tarif Lebih Tinggi bagi Wajib Pajak yang Tidak Memiliki NPWP",
          content: [
            "Wajib Pajak yang tidak memiliki NPWP dikenai tarif 100% lebih tinggi dari tarif normal untuk PPh Pasal 22 yang tidak final.",
            "Artinya, apabila tarif normal suatu transaksi adalah 1,5%, maka tarif bagi pihak tanpa NPWP menjadi 3%.",
          ],
        },
      ]}
      previous={{
        label: "Materi 2.6",
        href: "/materi/pengecualian",
      }}
      next={{
        label: "Materi 2.8",
        href: "/materi/rumus",
      }}
    />
  );
}