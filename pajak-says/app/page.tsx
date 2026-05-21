import Link from "next/link";

const materiItems = [
  {
    number: "2.1",
    title: "Pengantar Umum Perpajakan dan PPh",
    href: "/materi/pengantar-umum",
  },
  {
    number: "2.2",
    title: "Pajak Penghasilan Pasal 22",
    href: "/materi/pph-pasal-22",
  },
  {
    number: "2.3",
    title: "Dasar Hukum PPh Pasal 22",
    href: "/materi/dasar-hukum",
  },
  {
    number: "2.4",
    title: "Pemungut PPh Pasal 22",
    href: "/materi/pemungut",
  },
  {
    number: "2.5",
    title: "Objek PPh Pasal 22",
    href: "/materi/objek",
  },
  {
    number: "2.6",
    title: "Pengecualian PPh Pasal 22",
    href: "/materi/pengecualian",
  },
  {
    number: "2.7",
    title: "Tarif PPh Pasal 22",
    href: "/materi/tarif",
  },
  {
    number: "2.8",
    title: "Dasar Pengenaan dan Rumus",
    href: "/materi/rumus",
  },
  {
    number: "2.9",
    title: "Studi Kasus dan Contoh Perhitungan",
    href: "/materi/studi-kasus",
  },
  {
    number: "2.10",
    title: "Mekanisme Pemungutan dan Pelaporan",
    href: "/materi/mekanisme",
  },
  {
    number: "2.11",
    title: "Sifat PPh Pasal 22",
    href: "/materi/sifat",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className="relative min-h-screen bg-cover bg-center pt-[78px]"
        style={{
          backgroundImage: "url('/images/hero-port.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl gap-10 px-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Hero Text */}
          <div className="text-white">
            <p className="text-3xl font-medium drop-shadow-lg md:text-4xl">
              Selamat Datang
            </p>

            <h1 className="mt-4 text-[clamp(3.8rem,6vw,5.8rem)] font-black leading-none tracking-tight drop-shadow-xl">
              Pajak Says
            </h1>

            <div className="mt-4 flex items-center gap-6">
              <h2 className="text-3xl font-black drop-shadow-lg md:text-4xl">
                PPh Pasal 22
              </h2>
              <div className="hidden h-[3px] w-56 bg-white md:block" />
            </div>

            <p className="mt-8 max-w-2xl text-xl font-bold leading-relaxed drop-shadow-lg md:text-2xl">
              Kami menyediakan panduan belajar PPh Pasal 22 terlengkap untuk
              memberikan pengalaman belajar pajak yang mudah dan asyik bagi kamu.
              Pilih materi di samping untuk mulai belajar.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/materi/pengantar-umum"
                className="bg-orange-600 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-orange-700"
              >
                Mulai Belajar
              </Link>

              <Link
                href="/kalkulator"
                className="bg-white px-8 py-4 text-lg font-black text-orange-600 shadow-xl transition hover:bg-orange-50"
              >
                Coba Kalkulator
              </Link>
            </div>
          </div>

          {/* Pilihan Materi */}
          <div className="bg-white/95 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-5 border-b border-orange-100 pb-4">
              <p className="text-lg font-black text-orange-600">
                Koleksi Materi
              </p>
              <h3 className="mt-1 text-3xl font-black text-slate-950">
                Bab II PPh Pasal 22
              </h3>
              <p className="mt-2 font-semibold text-slate-600">
                Pilih salah satu materi untuk membuka halaman pembelajaran.
              </p>
            </div>

            <div className="grid max-h-[520px] gap-3 overflow-y-auto pr-2 md:grid-cols-2">
              {materiItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group border border-orange-100 bg-orange-50 p-4 transition hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600 hover:shadow-lg"
                >
                  <p className="text-lg font-black text-orange-600 group-hover:text-white">
                    {item.number}
                  </p>
                  <h4 className="mt-1 text-base font-black leading-6 text-slate-900 group-hover:text-white">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}