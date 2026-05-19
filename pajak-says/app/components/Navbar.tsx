"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const materiItems = [
  { label: "Pengertian", href: "/pengertian" },
  { label: "Tarif", href: "/tarif" },
  { label: "Pemungut", href: "/pemungut" },
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

  const isMateriActive = materiItems.some((item) => item.href === pathname);
  const isFiturActive = fiturItems.some((item) => item.href === pathname);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black text-orange-600">
          Pajak Says
        </Link>

        {/* Menu Tengah */}
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
              Materi
              <span className="text-sm">▼</span>
            </button>

            {openDropdown === "materi" && (
              <div className="absolute right-0 top-14 z-50 w-56 bg-white shadow-xl">
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
              Fitur
              <span className="text-sm">▼</span>
            </button>

            {openDropdown === "fitur" && (
                  <div className="absolute right-0 top-14 z-50 w-56 bg-white shadow-xl">
                {fiturItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`flex items-center gap-3 px-5 py-4 text-base font-bold transition ${
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


      </nav>
    </header>
  );
}