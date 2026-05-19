"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const keyword = search.toLowerCase().trim();

    if (keyword.includes("pengertian") || keyword.includes("arti") || keyword.includes("definisi")) {
      router.push("/pengertian");
    } else if (keyword.includes("tarif") || keyword.includes("rumus")) {
      router.push("/tarif");
    } else if (keyword.includes("pemungut") || keyword.includes("objek") || keyword.includes("pengecualian")) {
      router.push("/pemungut");
    } else if (keyword.includes("kalkulator") || keyword.includes("hitung")) {
      router.push("/kalkulator");
    } else if (keyword.includes("video")) {
      router.push("/video");
    } else if (keyword.includes("kuis") || keyword.includes("soal") || keyword.includes("latihan")) {
      router.push("/kuis");
    } else {
      alert("Materi tidak ditemukan. Coba ketik: pengertian, tarif, pemungut, kalkulator, video, atau kuis.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className="relative min-h-screen bg-cover bg-center pt-[78px]"
        style={{
          backgroundImage: "url('/images/hero-port.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] max-w-7xl flex-col justify-center px-8 pb-32">
          <div className="max-w-2xl text-white">
            <p className="text-4xl font-medium drop-shadow-lg">Selamat Datang</p>

            <h1 className="mt-5 text-7xl font-black leading-none tracking-tight drop-shadow-xl md:text-8xl">
              Pajak Says
            </h1>

            <div className="mt-5 flex items-center gap-8">
              <h2 className="text-4xl font-black drop-shadow-lg">PPh Pasal 22</h2>
              <div className="hidden h-[3px] w-72 bg-white md:block" />
            </div>

            <p className="mt-10 max-w-xl text-2xl font-bold leading-relaxed drop-shadow-lg">
              Kami menyediakan panduan belajar PPh Pasal 22 terlengkap untuk
              memberikan pengalaman belajar pajak yang mudah dan asyik bagi kamu.
              Yuk, eksplor materi kami dan cobain langsung kemudahan simulasi hitungnya!
            </p>
          </div>

          <div className="absolute bottom-16 left-1/2 z-20 w-[86%] max-w-3xl -translate-x-1/2">
  <div className="flex h-20 items-center bg-white px-8 shadow-xl">
    <svg
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 24 24"
      className="mr-6 text-orange-600"
    >
      <path
        d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      placeholder="Cari materi..."
      className="h-full w-full border-none text-2xl font-semibold text-slate-700 outline-none placeholder:text-slate-400"
    />

    <button
      onClick={handleSearch}
      className="ml-5 bg-orange-600 px-8 py-4 text-lg font-black text-white transition hover:bg-orange-700"
    >
      Cari
    </button>
  </div>
</div>
        </div>
      </section>
    </main>
  );
}