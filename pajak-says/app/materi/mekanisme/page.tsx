import MateriTemplate from "@/app/components/MateriTemplate";

export default function MekanismePage() {
  return (
    <MateriTemplate
      number="2.10"
      title="Mekanisme Pemungutan, Penyetoran, dan Pelaporan PPh Pasal 22"
      description="Membahas alur administrasi PPh Pasal 22 mulai dari pemungutan, penyetoran, pelaporan, hingga bukti pemungutan."
      content={[
        "Pemungutan PPh Pasal 22 dilakukan oleh pihak yang ditunjuk pemerintah pada saat transaksi terjadi atau pada saat pembayaran dilakukan.",
        "Pemungut harus mengidentifikasi objek pajak, menentukan tarif dan dasar pengenaan, menghitung jumlah pajak, memungut pajak, menyetor pajak ke kas negara, dan melaporkannya sesuai ketentuan.",
      ]}
      subMateri={[
        {
          number: "2.10.1",
          title: "Mekanisme Pemungutan PPh Pasal 22",
          content: [
            "Pemungutan PPh Pasal 22 dilakukan oleh pemungut yang ditunjuk ketika transaksi terjadi atau pembayaran dilakukan.",
            "Pemungut terlebih dahulu mengidentifikasi apakah transaksi termasuk objek PPh Pasal 22, lalu menentukan tarif dan dasar pengenaan yang sesuai.",
          ],
          points: [
            "Terjadi transaksi.",
            "Pemungut menentukan apakah transaksi termasuk objek PPh Pasal 22.",
            "Pemungut menentukan tarif yang sesuai.",
            "Pemungut menghitung PPh Pasal 22.",
            "Pemungut memungut pajak dari pihak yang dikenai pajak.",
            "Pemungut membuat bukti pemungutan.",
          ],
        },
        {
          number: "2.10.2",
          title: "Mekanisme Penyetoran PPh Pasal 22",
          content: [
            "Setelah dipungut, PPh Pasal 22 harus disetorkan ke kas negara.",
            "Penyetoran dilakukan oleh pemungut pajak sesuai ketentuan administrasi perpajakan yang berlaku.",
            "Dalam transaksi impor, PPh Pasal 22 impor dilunasi bersamaan dengan pembayaran Bea Masuk.",
          ],
        },
        {
          number: "2.10.3",
          title: "Mekanisme Pelaporan PPh Pasal 22",
          content: [
            "PPh Pasal 22 yang telah dipungut dan disetor harus dilaporkan oleh pemungut pajak.",
            "Pelaporan dilakukan melalui SPT Masa PPh Pasal 22 atau SPT Masa PPh Unifikasi sesuai ketentuan yang berlaku.",
            "Bagi pihak yang dipungut, bukti pemungutan penting karena dapat digunakan sebagai kredit pajak apabila PPh Pasal 22 bersifat tidak final.",
          ],
        },
        {
          number: "2.10.4",
          title: "Bukti Pemungutan PPh Pasal 22",
          content: [
            "Bukti pemungutan PPh Pasal 22 adalah dokumen yang menunjukkan bahwa pajak telah dipungut oleh pemungut.",
            "Bagi pemungut, bukti pungut menjadi dokumen administrasi bahwa pemungutan telah dilakukan.",
            "Bagi pihak yang dipungut, bukti pungut dapat menjadi dasar untuk mengkreditkan pajak dalam SPT Tahunan apabila PPh Pasal 22 tersebut tidak final.",
          ],
        },
        {
          number: "2.10.5",
          title: "Alur Sederhana PPh Pasal 22",
          content: [
            "Alur sederhana PPh Pasal 22 menggambarkan proses dari terjadinya transaksi sampai bukti pungut digunakan oleh wajib pajak.",
          ],
          points: [
            "Transaksi terjadi, misalnya impor barang, pembelian barang oleh pemerintah, atau penjualan hasil produksi tertentu.",
            "Pemungut mengidentifikasi apakah transaksi termasuk objek PPh Pasal 22.",
            "Pemungut menghitung pajak menggunakan tarif dan dasar pengenaan yang sesuai.",
            "PPh Pasal 22 dipungut dari pihak yang dikenai pajak.",
            "Pajak disetor ke kas negara.",
            "Pajak dilaporkan dalam SPT Masa.",
            "Bukti pungut digunakan oleh wajib pajak, terutama jika PPh Pasal 22 bersifat tidak final.",
          ],
        },
      ]}
      miniQuiz={[
        {
          question: "Mekanisme PPh Pasal 22 dimulai ketika …",
          options: [
            "Terjadi transaksi yang termasuk objek PPh Pasal 22",
            "Wajib Pajak menerima gaji bulanan",
            "Perusahaan menutup laporan tahunan saja",
            "Barang digunakan secara pribadi tanpa transaksi",
          ],
          answer: "Terjadi transaksi yang termasuk objek PPh Pasal 22",
          explanation:
            "Pemungutan PPh Pasal 22 dimulai ketika terjadi transaksi yang termasuk objek pemungutan.",
        },
        {
          question: "Setelah PPh Pasal 22 dipungut, pemungut wajib…",
          options: [
            "Menyetorkannya ke kas negara",
            "Menyimpannya sebagai pendapatan pribadi",
            "Menghapus bukti transaksi",
            "Membagikannya kepada pegawai",
          ],
          answer: "Menyetorkannya ke kas negara",
          explanation:
            "PPh Pasal 22 yang telah dipungut merupakan titipan negara, sehingga harus disetorkan ke kas negara.",
        },
        {
          question: "Bukti pemungutan PPh Pasal 22 penting bagi pihak yang dipungut karena…",
          options: [
            "Mengganti NPWP",
            "Menghapus seluruh kewajiban pajak selamanya",
            "Dapat digunakan sebagai dasar kredit pajak jika PPh Pasal 22 bersifat tidak final",
            "Menghapus kewajiban SPT Tahunan",
          ],
          answer:
            "Dapat digunakan sebagai dasar kredit pajak jika PPh Pasal 22 bersifat tidak final",
          explanation:
            "Untuk PPh Pasal 22 yang tidak final, bukti pemungutan diperlukan agar pajak yang telah dipungut dapat dikreditkan dalam SPT Tahunan.",
        },
      ]}
      previous={{
        label: "Materi 2.9",
        href: "/materi/studi-kasus",
      }}
      next={{
        label: "Materi 2.11",
        href: "/materi/sifat",
      }}
    />
  );
}