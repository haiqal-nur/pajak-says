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
            "Dengan adanya pengecualian ini, transaksi yang bersifat kecil, rutin, atau memiliki fungsi sosial tertentu tidak dibebani pemungutan PPh Pasal 22. Contohnya adalah penggunaan dana Bantuan Operasional Sekolah atau BOS, pembelian gabah atau beras oleh Perum BULOG, vaksin polio untuk Pekan Imunisasi Nasional, serta buku ilmu pengetahuan, buku pelajaran, dan kitab suci.",
            " Transaksi-transaksi tersebut dikecualikan karena memiliki fungsi penting bagi pendidikan, kesehatan masyarakat, ketahanan pangan, dan kepentingan sosial-keagamaan.  ",
          ],
        },
        {
          number: "2.6.3",
          title: "Pengecualian atas Impor Barang Tertentu",
          content: [
            "Pengecualian atas impor diberikan terhadap barang tertentu yang memperoleh fasilitas pembebasan bea masuk dan/atau PPN.",
            "Pengecualian juga dapat berlaku untuk impor sementara yang akan diekspor kembali serta impor kembali atas barang yang sebelumnya telah diekspor.",
            "Pengecualian impor biasanya berkaitan dengan tujuan tertentu, seperti kepentingan negara, penelitian, bantuan sosial, barang yang mendapat fasilitas, atau barang yang hanya masuk sementara ke wilayah pabean Indonesia.",
            "Beberapa contoh impor khusus yang termasuk dalam pengecualian PPh Pasal 22 antara lain: ",
          ],
          points: [
            "Barang diplomatik dan barang untuk badan internasional, sepanjang memenuhi asas timbal balik dan ketentuan yang berlaku. Pengecualian ini diberikan karena barang tersebut berkaitan dengan hubungan diplomatik atau kepentingan lembaga internasional.",
            "Impor sementara yang nyata-nyata akan diekspor kembali. Barang jenis ini tidak diperlakukan sebagai impor konsumsi biasa karena hanya masuk sementara ke wilayah Indonesia dan akan dikeluarkan kembali.",
            "Persenjataan militer untuk TNI/Polri. Pengecualian ini diberikan karena barang tersebut berkaitan dengan kepentingan pertahanan dan keamanan nasional.",
            "Barang untuk museum, penelitian ilmiah, atau kepentingan ilmu pengetahuan. Barang seperti ini dikecualikan karena penggunaannya bukan untuk kegiatan komersial biasa, melainkan untuk pengembangan ilmu pengetahuan, pendidikan, atau pelestarian.",
            "Peti atau kemasan lain yang berisi jenazah. Pengecualian ini diberikan karena barang tersebut berkaitan dengan kepentingan kemanusiaan dan tidak memiliki sifat transaksi komersial biasa.",
            "Barang kiriman hadiah atau hibah untuk ibadah, sosial, dan bencana alam. Barang tersebut dikecualikan karena memiliki tujuan sosial, kemanusiaan, dan bantuan masyarakat.",
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
      miniQuiz={[
        {
          question: "Pengecualian PPh Pasal 22 berarti …",
          options: [
            "PPh Pasal 22 tidak perlu dilaporkan",
            "Semua transaksi bebas pajak",
            "Transaksi tertentu tidak dipungut PPh Pasal 22 karena memenuhi syarat tertentu",
            "Tarif PPh Pasal 22 selalu nol",
          ],
          answer:
            "Transaksi tertentu tidak dipungut PPh Pasal 22 karena memenuhi syarat tertentu",
          explanation:
            "Pengecualian PPh Pasal 22 diberikan pada transaksi tertentu yang memenuhi syarat berdasarkan peraturan.",
        },
        {
          question: "Salah satu contoh transaksi yang dapat dikecualikan dari PPh Pasal 22 adalah…",
          options: [
            "Semua impor barang mewah",
            "Pembelian barang oleh pemerintah dengan nilai tertentu yang tidak melebihi batas pengecualian",
            "Semua penjualan emas",
            "Seluruh penjualan kendaraan",
          ],
          answer:
            "Pembelian barang oleh pemerintah dengan nilai tertentu yang tidak melebihi batas pengecualian",
          explanation:
            "Pembelian barang oleh instansi pemerintah dengan nilai tertentu dapat dikecualikan sepanjang memenuhi ketentuan.",
        },
        {
          question: "Surat Keterangan Bebas PPh Pasal 22 berfungsi sebagai…",
          options: [
            "Dasar administratif agar transaksi tertentu tidak dipungut PPh Pasal 22",
            "Bukti bahwa semua pajak dihapus selamanya",
            "Pengganti NPWP untuk seluruh transaksi",
            "Faktur penjualan barang",
          ],
          answer: "Dasar administratif agar transaksi tertentu tidak dipungut PPh Pasal 22",
          explanation:
            "Surat Keterangan Bebas digunakan sebagai dasar bagi pemungut untuk tidak melakukan pemungutan PPh Pasal 22.",
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