import MateriTemplate from "@/app/components/MateriTemplate";

export default function DasarHukumPage() {
  return (
    <MateriTemplate
      number="2.3"
      title="Dasar Hukum PPh Pasal 22"
      description="Membahas dasar hukum PPh Pasal 22 berdasarkan Undang-Undang Pajak Penghasilan, Peraturan Menteri Keuangan, dan ketentuan teknis pelaksanaannya."
      content={[
        "Dasar hukum PPh Pasal 22 menjelaskan landasan yuridis mengenai siapa yang dapat ditunjuk sebagai pemungut, transaksi apa saja yang dikenakan, serta bagaimana tata cara pelaksanaan pemungutan PPh Pasal 22.",
        "Pemungutan PPh Pasal 22 tidak dilakukan secara sembarangan, melainkan harus berdasarkan peraturan perpajakan yang berlaku.",
      ]}
      subMateri={[
        {
          number: "2.3.1",
          title: "Undang-Undang Pajak Penghasilan",
          content: [
            "Dasar utama PPh Pasal 22 terdapat dalam Undang-Undang Nomor 7 Tahun 1983 tentang Pajak Penghasilan sebagaimana telah beberapa kali diubah, terakhir melalui Undang-Undang Nomor 6 Tahun 2023.",
            "Pasal 22 UU PPh memberikan kewenangan kepada Menteri Keuangan untuk menunjuk pihak tertentu sebagai pemungut PPh atas transaksi yang ditetapkan.",
            "Dengan dasar hukum ini, PPh Pasal 22 memiliki legitimasi yuridis yang jelas. Pemungutan tidak boleh dilakukan oleh sembarang pihak, tetapi hanya oleh pihak yang ditunjuk berdasarkan ketentuan peraturan perundang-undangan.",
          ],
        },
        {
          number: "2.3.2",
          title: "Peraturan Menteri Keuangan tentang PPh Pasal 22",
          content: [
            "Peraturan Menteri Keuangan berfungsi sebagai aturan pelaksana yang menjelaskan lebih rinci mengenai ruang lingkup, pemungut, objek, tarif, pengecualian, serta tata cara pelaksanaan PPh Pasal 22.",
            "Ketentuan terbaru yang menjadi rujukan utama dalam modul adalah PMK Nomor 51 Tahun 2025. Peraturan ini mengatur pemungutan PPh Pasal 22 atas pembayaran penyerahan barang, impor, ekspor komoditas tambang tertentu, kegiatan usaha bulion, dan kegiatan usaha lain.",
            "Selain itu, terdapat ketentuan khusus untuk objek tertentu. Misalnya, transaksi emas perhiasan dan emas batangan diatur melalui PMK Nomor 48 Tahun 2023 yang telah diubah, antara lain dengan PMK Nomor 52 Tahun 2025.",
          ],
        },
        {
          number: "2.3.3",
          title: "Ketentuan Teknis Pelaksanaan PPh Pasal 22",
          content: [
            "Ketentuan teknis pelaksanaan PPh Pasal 22 mencakup tata cara pemungutan, penyetoran, pelaporan, bukti pemungutan, penggunaan NPWP atau identitas perpajakan, serta pengecualian.",
            "Ketentuan teknis ini penting karena setiap jenis transaksi memiliki dasar pengenaan, tarif, saat terutang, dan pihak pemungut yang berbeda.",
            "Dalam praktiknya, pemungut harus memastikan apakah suatu transaksi termasuk objek PPh Pasal 22, apakah terdapat pengecualian, tarif apa yang digunakan, serta bagaimana cara menyetor dan melaporkan pajaknya.",
          ],
        },
      ]}
      miniQuiz={[
        {
          question: "Dasar utama pengaturan PPh Pasal 22 terdapat dalam…",
          options: [
            "Undang-Undang Pajak Penghasilan",
            "Undang-Undang Lalu Lintas",
            "Undang-Undang Ketenagakerjaan",
            "Undang-Undang Perbankan",
          ],
          answer: "Undang-Undang Pajak Penghasilan",
          explanation:
            "PPh Pasal 22 bersumber dari Undang-Undang Pajak Penghasilan, khususnya Pasal 22.",
        },
        {
          question: "Pihak yang diberi kewenangan untuk menunjuk pemungut PPh Pasal 22 adalah…",
          options: ["Menteri Pendidikan", "Menteri Keuangan", "Gubernur", "Kepala Desa"],
          answer: "Menteri Keuangan",
          explanation:
            "Menteri Keuangan diberi kewenangan untuk menetapkan pihak tertentu sebagai pemungut pajak atas transaksi tertentu.",
        },
        {
          question: "Peraturan Menteri Keuangan dalam PPh Pasal 22 berfungsi untuk …",
          options: [
            "Mengganti semua jenis Pajak Penghasilan",
            "Menghapus seluruh kewajiban pajak",
            "Mengatur teknis pelaksanaan pemungutan PPh Pasal 22",
            "Menentukan harga jual barang di pasar",
          ],
          answer: "Mengatur teknis pelaksanaan pemungutan PPh Pasal 22",
          explanation:
            "PMK mengatur teknis pelaksanaan PPh Pasal 22 seperti objek, pemungut, tarif, pengecualian, penyetoran, dan pelaporan.",
        },
      ]}
      previous={{
        label: "Materi 2.2",
        href: "/materi/pph-pasal-22",
      }}
      next={{
        label: "Materi 2.4",
        href: "/materi/pemungut",
      }}
    />
  );
}