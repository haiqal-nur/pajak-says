import MateriTemplate from "@/app/components/MateriTemplate";

export default function PengecualianPage() {
  return (
    <MateriTemplate
      number="2.6"
      title="Pengecualian PPh Pasal 22"
      description="Membahas kondisi ketika transaksi tidak dipungut PPh Pasal 22 karena memenuhi syarat tertentu."
      content={[
        "Pengecualian PPh Pasal 22 adalah kondisi ketika transaksi yang pada dasarnya berada dalam ruang lingkup pemungutan tidak dikenai pungutan karena memenuhi syarat tertentu.",
        "Pengecualian diberikan agar pemungutan tidak dikenakan terhadap transaksi yang tidak terutang PPh, memperoleh fasilitas perpajakan, atau secara administratif dikecualikan oleh peraturan.",
        "Pemungut harus memeriksa apakah transaksi termasuk objek, apakah memenuhi batas nilai pemungutan, dan apakah terdapat fasilitas atau dokumen pembebasan.",
      ]}
      subMateri={[
        {
          number: "2.6.1",
          title: "Pengertian Pengecualian PPh Pasal 22",
          content: [
            "Pengecualian PPh Pasal 22 adalah kondisi ketika transaksi yang seharusnya berada dalam ruang lingkup pemungutan tidak dilakukan pemungutan karena memenuhi syarat tertentu.",
            "Pengecualian penting dipahami agar pemungut tidak salah menerapkan kewajiban pemungutan.",
          ],
        },
        {
          number: "2.6.2",
          title: "Transaksi yang Tidak Dipungut PPh Pasal 22",
          content: [
            "Transaksi yang tidak dipungut PPh Pasal 22 dapat berupa impor atau penyerahan barang yang tidak terutang PPh, pembayaran tertentu oleh pemerintah, pembelian barang tertentu, atau transaksi yang telah dipungut melalui mekanisme lain.",
            "Contohnya adalah pembayaran oleh pemungut pemerintah paling banyak Rp2.000.000,00 tidak termasuk PPN dan bukan hasil pemecahan transaksi.",
            "Pengecualian juga dapat berlaku untuk pembayaran pembelian BBM, BBG, pelumas, benda pos, air, listrik, gabah atau beras, serta pembelian barang menggunakan dana bantuan operasional pendidikan.",
          ],
        },
        {
          number: "2.6.3",
          title: "Pengecualian atas Impor Barang Tertentu",
          content: [
            "Pengecualian atas impor diberikan terhadap barang tertentu yang memperoleh fasilitas pembebasan bea masuk dan/atau PPN.",
            "Pengecualian juga dapat berlaku untuk impor sementara yang akan diekspor kembali serta impor kembali atas barang yang sebelumnya telah diekspor.",
            "Pengecualian impor biasanya berkaitan dengan tujuan tertentu, seperti kepentingan negara, penelitian, bantuan sosial, barang yang mendapat fasilitas, atau barang yang hanya masuk sementara ke wilayah pabean Indonesia.",
          ],
        },
        {
          number: "2.6.4",
          title: "Surat Keterangan Bebas PPh Pasal 22",
          content: [
            "Surat Keterangan Bebas PPh Pasal 22 adalah dokumen yang digunakan sebagai dasar administratif agar suatu transaksi tidak dipungut PPh Pasal 22.",
            "Dokumen ini diperlukan apabila wajib pajak memenuhi ketentuan pembebasan pemotongan atau pemungutan pajak.",
            "Namun, tidak semua pengecualian memerlukan Surat Keterangan Bebas karena beberapa pengecualian berlaku langsung berdasarkan jenis transaksi, nilai transaksi, atau ketentuan khusus.",
          ],
        },
        {
          number: "2.6.5",
          title: "Pengecualian karena Nilai Transaksi atau Ketentuan Khusus",
          content: [
            "Pengecualian juga dapat terjadi karena nilai transaksi berada di bawah batas tertentu.",
            "Contohnya, pembelian barang oleh instansi pemerintah paling banyak Rp2.000.000,00 tidak dipungut PPh Pasal 22 apabila tidak termasuk PPN dan bukan transaksi yang dipecah-pecah.",
            "Selain itu, pengecualian dapat diberikan untuk transaksi tertentu karena sifat barang, sumber dana, atau status pihak yang bertransaksi.",
          ],
        },
      ]}
      previous={{
        label: "Materi 2.5",
        href: "/materi/objek",
      }}
      next={{
        label: "Materi 2.7",
        href: "/materi/tarif",
      }}
    />
  );
}