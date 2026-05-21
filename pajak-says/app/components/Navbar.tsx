"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const materiItems = [
  { label: "2.1 Pengantar Umum", href: "/materi/pengantar-umum" },
  { label: "2.2 PPh Pasal 22", href: "/materi/pph-pasal-22" },
  { label: "2.3 Dasar Hukum", href: "/materi/dasar-hukum" },
  { label: "2.4 Pemungut", href: "/materi/pemungut" },
  { label: "2.5 Objek", href: "/materi/objek" },
  { label: "2.6 Pengecualian", href: "/materi/pengecualian" },
  { label: "2.7 Tarif", href: "/materi/tarif" },
  { label: "2.8 Rumus", href: "/materi/rumus" },
  { label: "2.9 Studi Kasus", href: "/materi/studi-kasus" },
  { label: "2.10 Mekanisme", href: "/materi/mekanisme" },
  { label: "2.11 Sifat PPh 22", href: "/materi/sifat" },
];

const fiturItems = [
  { label: "Kalkulator", href: "/kalkulator", icon: "🧮" },
  { label: "Video", href: "/video", icon: "▶️" },
  { label: "Kuis", href: "/kuis", icon: "✅" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<"materi" | "fitur" | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMateriActive = materiItems.some((item) => item.href === pathname);
  const isFiturActive = fiturItems.some((item) => item.href === pathname);

  return (
    <header className="fixed left-0 top-0 z-50 w-full overflow-visible bg-white shadow-sm">
      <nav className="relative mx-auto flex h-[78px] max-w-7xl items-center justify-between overflow-visible px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black text-orange-600">
          Pajak Says
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className={`text-lg font-bold transition ${
              pathname === "/"
                ? "rounded-full bg-orange-600 px-7 py-3 text-white"
                : "text-orange-600 hover:text-orange-800"
            }`}
          >
            Home
          </Link>

          {/* Dropdown Materi */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "materi" ? null : "materi")
              }
              className={`flex items-center gap-2 text-lg font-bold transition ${
                isMateriActive
                  ? "rounded-full bg-orange-600 px-7 py-3 text-white"
                  : "text-orange-600 hover:text-orange-800"
              }`}
            >
              Materi <span className="text-sm">▼</span>
            </button>

            {openDropdown === "materi" && (
              <div className="absolute right-0 top-full z-[999] mt-4 max-h-[70vh] w-80 overflow-y-auto bg-white shadow-xl">
                {materiItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-5 py-4 text-base font-bold transition ${
                      pathname === item.href
                        ? "bg-orange-600 text-white"
                        : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Fitur */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "fitur" ? null : "fitur")
              }
              className={`flex items-center gap-2 text-lg font-bold transition ${
                isFiturActive
                  ? "rounded-full bg-orange-600 px-7 py-3 text-white"
                  : "text-orange-600 hover:text-orange-800"
              }`}
            >
              Fitur <span className="text-sm">▼</span>
            </button>

            {openDropdown === "fitur" && (
              <div className="absolute right-0 top-full z-[999] mt-4 w-64 bg-white shadow-xl">
                {fiturItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`flex items-center gap-3 px-6 py-5 text-base font-bold transition ${
                      pathname === item.href
                        ? "bg-orange-600 text-white"
                        : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-orange-600 transition hover:bg-orange-50 lg:hidden"
          aria-label="Menu"
        >
          <svg width="34" height="34" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-78px)] overflow-y-auto border-t border-orange-100 bg-white px-6 py-5 shadow-xl lg:hidden">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`mb-3 block px-5 py-4 text-lg font-black ${
              pathname === "/"
                ? "bg-orange-600 text-white"
                : "bg-orange-50 text-orange-600"
            }`}
          >
            Home
          </Link>

          <div className="mb-4">
            <p className="mb-2 px-2 text-sm font-black uppercase tracking-wide text-slate-500">
              Materi
            </p>

            <div className="grid gap-2">
              {materiItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block border px-5 py-4 text-base font-bold ${
                    pathname === item.href
                      ? "border-orange-600 bg-orange-600 text-white"
                      : "border-orange-100 bg-orange-50 text-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 px-2 text-sm font-black uppercase tracking-wide text-slate-500">
              Fitur
            </p>

            <div className="grid gap-2">
              {fiturItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 border px-5 py-4 text-base font-bold ${
                    pathname === item.href
                      ? "border-orange-600 bg-orange-600 text-white"
                      : "border-orange-100 bg-orange-50 text-slate-800"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}