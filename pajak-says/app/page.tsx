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

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] max-w-7xl flex-col justify-center px-8 py-16">
          <div className="max-w-2xl text-white">
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
              Yuk, eksplor materi kami dan cobain langsung kemudahan simulasi hitungnya!
            </p>
            <div className="absolute bottom-12 left-1/2 z-20 w-[82%] max-w-3xl -translate-x-1/2">
            <div className="mt-10 w-full max-w-3xl">
  <div className="flex h-16 items-center bg-white px-6 shadow-xl md:h-20 md:px-8">
    <svg
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 24 24"
      className="mr-6 shrink-0 text-orange-600"
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
      className="h-full w-full border-none text-xl font-semibold text-slate-700 outline-none placeholder:text-slate-400 md:text-2xl"
    />

    <button
      onClick={handleSearch}
      className="ml-4 bg-orange-600 px-6 py-3 text-base font-black text-white transition hover:bg-orange-700 md:px-8 md:py-4 md:text-lg"
    >
      Cari
    </button>
  </div>
</div>
          </div>

  <div className="flex h-16 items-center bg-white px-6 shadow-xl md:h-20 md:px-8">
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
      className="h-full w-full border-none text-xl font-semibold text-slate-700 outline-none placeholder:text-slate-400 md:text-2xl"
    />

    <button
      onClick={handleSearch}
      className="ml-4 bg-orange-600 px-6 py-3 text-base font-black text-white transition hover:bg-orange-700 md:px-8 md:py-4 md:text-lg"
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