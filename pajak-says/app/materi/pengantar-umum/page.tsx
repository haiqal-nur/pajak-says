import MateriTemplate from "@/app/components/MateriTemplate";

export default function PengantarUmumPage() {
  return (
    <MateriTemplate
      number="2.1"
      title="Pengantar Umum Perpajakan dan PPh"
      description="Memahami dasar perpajakan dan posisi Pajak Penghasilan dalam sistem perpajakan Indonesia."
      content={[
        "Pajak merupakan kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan, bersifat memaksa berdasarkan undang-undang, tidak memperoleh imbalan secara langsung, dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat.",
        "Dalam sistem keuangan negara, pajak memiliki peranan penting karena menjadi salah satu sumber utama penerimaan negara untuk membiayai pembangunan, pelayanan publik, pendidikan, kesehatan, infrastruktur, serta berbagai program pemerintahan.",
        "Salah satu jenis pajak yang memiliki peranan besar adalah Pajak Penghasilan atau PPh. PPh dikenakan atas penghasilan yang diterima atau diperoleh wajib pajak dalam suatu tahun pajak.",
        "Dalam sistem PPh di Indonesia, terdapat beberapa jenis pemotongan dan pemungutan pajak, seperti PPh Pasal 21, PPh Pasal 22, PPh Pasal 23, PPh Pasal 24, PPh Pasal 25, dan PPh Pasal 26.",
      ]}
      miniQuiz={[
        {
          question: "Pajak memiliki sifat memaksa karena…",
          options: [
            "Dipungut berdasarkan kebiasaan masyarakat",
            "Dipungut berdasarkan undang-undang",
            "Dipungut hanya jika Wajib Pajak setuju",
            "Dipungut oleh perusahaan swasta",
          ],
          answer: "Dipungut berdasarkan undang-undang",
          explanation:
            "Pajak bersifat memaksa karena pemungutannya didasarkan pada undang-undang.",
        },
        {
          question: "Pajak digunakan oleh negara terutama untuk …",
          options: [
            "Keuntungan pribadi pejabat",
            "Membiayai pembangunan dan pelayanan publik",
            "Membayar transaksi pribadi Wajib Pajak",
            "Menggantikan seluruh kegiatan ekonomi masyarakat",
          ],
          answer: "Membiayai pembangunan dan pelayanan publik",
          explanation:
            "Pajak merupakan sumber penerimaan negara untuk membiayai pembangunan, pelayanan publik, pendidikan, kesehatan, infrastruktur, dan kebutuhan pemerintahan lainnya.",
        },
        {
          question: "Pajak Penghasilan atau PPh dikenakan atas …",
          options: [
            "Penghasilan yang diterima atau diperoleh Wajib Pajak",
            "Semua barang yang dimiliki masyarakat",
            "Seluruh tabungan pribadi tanpa penghasilan",
            "Jumlah anggota keluarga Wajib Pajak",
          ],
          answer: "Penghasilan yang diterima atau diperoleh Wajib Pajak",
          explanation:
            "PPh dikenakan atas penghasilan yang diterima atau diperoleh Wajib Pajak dalam suatu tahun pajak.",
        },
      ]}
      next={{
        label: "Materi 2.2",
        href: "/materi/pph-pasal-22",
      }}
    />
  );
}