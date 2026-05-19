"use client";

import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";

const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const industriRates = [
  { label: "Industri kertas", rate: 0.001 },
  { label: "Industri semen", rate: 0.0025 },
  { label: "Industri baja", rate: 0.003 },
  { label: "Industri otomotif", rate: 0.0045 },
  { label: "Industri farmasi", rate: 0.003 },
];

export default function KalkulatorPage() {
  const [jenis, setJenis] = useState("pemerintah");
  const [npwp, setNpwp] = useState(true);

  const [harga, setHarga] = useState("");
  const [cost, setCost] = useState("");
  const [insurance, setInsurance] = useState("");
  const [freight, setFreight] = useState("");
  const [beaMasuk, setBeaMasuk] = useState("10");
  const [pungutanLain, setPungutanLain] = useState("");
  const [industri, setIndustri] = useState("Industri semen");

  const hasil = useMemo(() => {
    const hargaNum = Number(harga) || 0;
    const costNum = Number(cost) || 0;
    const insuranceNum = Number(insurance) || 0;
    const freightNum = Number(freight) || 0;
    const beaMasukPct = Number(beaMasuk) || 0;
    const pungutanLainNum = Number(pungutanLain) || 0;

    let tarif = 0;
    let dasar = 0;
    let namaDasar = "Dasar Pengenaan";
    let rumus = "";
    let sifat = "Tidak final";
    let detail: { label: string; value: number }[] = [];

    if (jenis === "pemerintah") {
      tarif = 0.015;
      dasar = hargaNum;
      namaDasar = "Harga Pembelian";
      rumus = "PPh 22 = Tarif × Harga Pembelian";
    }

    if (jenis === "impor_api" || jenis === "impor_non_api") {
      const cif = costNum + insuranceNum + freightNum;
      const bea = cif * (beaMasukPct / 100);
      const nilaiImpor = cif + bea + pungutanLainNum;

      tarif = jenis === "impor_api" ? 0.025 : 0.075;
      dasar = nilaiImpor;
      namaDasar = "Nilai Impor";
      rumus = "PPh 22 Impor = Tarif × Nilai Impor";

      detail = [
        { label: "CIF", value: cif },
        { label: "Bea Masuk", value: bea },
        { label: "Pungutan Lain", value: pungutanLainNum },
        { label: "Nilai Impor", value: nilaiImpor },
      ];
    }

    if (jenis === "industri") {
      const selected = industriRates.find((item) => item.label === industri);
      tarif = selected?.rate || 0;
      dasar = hargaNum;
      namaDasar = "DPP PPN / Nilai Penjualan";
      rumus = "PPh 22 = Tarif Industri × DPP PPN";
    }

    if (jenis === "pengumpul") {
      tarif = 0.0025;
      dasar = hargaNum;
      namaDasar = "Harga Pembelian";
      rumus = "PPh 22 = 0,25% × Harga Pembelian";
    }

    if (jenis === "mewah") {
      tarif = 0.05;
      dasar = hargaNum;
      namaDasar = "Harga Jual";
      rumus = "PPh 22 = 5% × Harga Jual";
    }

    if (jenis === "bbm_pertamina") {
      tarif = 0.0025;
      dasar = hargaNum;
      namaDasar = "Penjualan Tidak Termasuk PPN";
      rumus = "PPh 22 = 0,25% × Penjualan";
      sifat = "Final";
    }

    if (jenis === "bbm_swasta" || jenis === "bbg_pelumas") {
      tarif = 0.003;
      dasar = hargaNum;
      namaDasar = "Penjualan Tidak Termasuk PPN";
      rumus = "PPh 22 = 0,3% × Penjualan";
      sifat = "Final";
    }

    const tarifFinal = !npwp && sifat !== "Final" ? tarif * 2 : tarif;
    const pph = dasar * tarifFinal;

    return {
      tarif,
      tarifFinal,
      dasar,
      namaDasar,
      rumus,
      sifat,
      pph,
      detail,
    };
  }, [jenis, npwp, harga, cost, insurance, freight, beaMasuk, pungutanLain, industri]);

  const isImpor = jenis === "impor_api" || jenis === "impor_non_api";
  const isIndustri = jenis === "industri";
  const showHarga = !isImpor;

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        label="Kalkulator Simulasi Hitung"
        title="Kalkulator PPh Pasal 22"
        description="Hitung PPh Pasal 22 berdasarkan jenis transaksi sesuai contoh perhitungan dalam modul."
      />

      <section className="bg-orange-50 px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-5xl font-black text-slate-950">
              Pilih Jenis Transaksi
            </h2>
            <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
              Kalkulator ini menyesuaikan beberapa contoh dalam modul: belanja
              pemerintah, impor API, impor non-API, industri tertentu, pedagang
              pengumpul, barang sangat mewah, dan BBM/BBG/pelumas.
            </p>

            <div className="mt-8 bg-slate-950 p-7 text-white">
              <p className="text-lg font-bold text-orange-300">Rumus Aktif</p>
              <p className="mt-2 text-2xl font-black">{hasil.rumus}</p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-2xl">
            <label className="text-lg font-black text-slate-800">
              Jenis Transaksi
            </label>
            <select
              value={jenis}
              onChange={(e) => setJenis(e.target.value)}
              className="mt-3 w-full border border-slate-300 bg-white px-5 py-5 text-lg font-bold text-slate-900 outline-none focus:border-orange-600"
            >
              <option className="bg-white text-slate-900" value="pemerintah">
                Pembelian barang oleh pemerintah
              </option>
              <option className="bg-white text-slate-900" value="impor_api">
                Impor barang dengan API
              </option>
              <option className="bg-white text-slate-900" value="impor_non_api">
                Impor barang tanpa API
              </option>
              <option className="bg-white text-slate-900" value="industri">
                Penjualan hasil produksi industri tertentu
              </option>
              <option className="bg-white text-slate-900" value="pengumpul">
                Pembelian bahan dari pedagang pengumpul
              </option>
              <option className="bg-white text-slate-900" value="mewah">
                Penjualan barang sangat mewah
              </option>
              <option className="bg-white text-slate-900" value="bbm_pertamina">
                BBM ke SPBU Pertamina
              </option>
              <option className="bg-white text-slate-900" value="bbm_swasta">
                BBM ke SPBU Swasta / Non-SPBU
              </option>
              <option className="bg-white text-slate-900" value="bbg_pelumas">
                BBG / Pelumas
              </option>
            </select>

            {showHarga && (
              <>
                <label className="mt-6 block text-lg font-black text-slate-800">
                  {hasil.namaDasar}
                </label>
                <input
                  type="number"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  placeholder="Contoh: 200000000"
                  className="mt-3 w-full border border-slate-300 px-5 py-5 text-xl font-bold outline-none focus:border-orange-600"
                />
              </>
            )}

            {isImpor && (
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-lg font-black text-slate-800">
                    Cost / Harga Barang
                  </label>
                  <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="680000000"
                    className="mt-3 w-full border border-slate-300 px-5 py-4 font-bold outline-none focus:border-orange-600"
                  />
                </div>

                <div>
                  <label className="text-lg font-black text-slate-800">
                    Insurance
                  </label>
                  <input
                    type="number"
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                    placeholder="12000000"
                    className="mt-3 w-full border border-slate-300 px-5 py-4 font-bold outline-none focus:border-orange-600"
                  />
                </div>

                <div>
                  <label className="text-lg font-black text-slate-800">
                    Freight
                  </label>
                  <input
                    type="number"
                    value={freight}
                    onChange={(e) => setFreight(e.target.value)}
                    placeholder="28000000"
                    className="mt-3 w-full border border-slate-300 px-5 py-4 font-bold outline-none focus:border-orange-600"
                  />
                </div>

                <div>
                  <label className="text-lg font-black text-slate-800">
                    Bea Masuk (%)
                  </label>
                  <input
                    type="number"
                    value={beaMasuk}
                    onChange={(e) => setBeaMasuk(e.target.value)}
                    placeholder="10"
                    className="mt-3 w-full border border-slate-300 px-5 py-4 font-bold outline-none focus:border-orange-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-lg font-black text-slate-800">
                    Pungutan Lain
                  </label>
                  <input
                    type="number"
                    value={pungutanLain}
                    onChange={(e) => setPungutanLain(e.target.value)}
                    placeholder="8000000"
                    className="mt-3 w-full border border-slate-300 px-5 py-4 font-bold outline-none focus:border-orange-600"
                  />
                </div>
              </div>
            )}

            {isIndustri && (
              <>
                <label className="mt-6 block text-lg font-black text-slate-800">
                  Jenis Industri
                </label>
                <select
                  value={industri}
                  onChange={(e) => setIndustri(e.target.value)}
                  className="mt-3 w-full border border-slate-300 bg-white px-5 py-5 text-lg font-bold text-slate-900 outline-none focus:border-orange-600"
                >
                  {industriRates.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label className="mt-6 flex items-center gap-3 text-lg font-black">
              <input
                type="checkbox"
                checked={npwp}
                onChange={(e) => setNpwp(e.target.checked)}
                className="h-5 w-5 accent-orange-600"
                disabled={hasil.sifat === "Final"}
              />
              Memiliki NPWP
            </label>

            {hasil.sifat === "Final" && (
              <p className="mt-2 text-sm font-bold text-slate-500">
                Catatan: transaksi ini bersifat final, sehingga opsi NPWP tidak
                menaikkan tarif.
              </p>
            )}

            <div className="mt-8 space-y-4 bg-slate-950 p-7 text-white">
              {hasil.detail.map((item) => (
                <div key={item.label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="font-bold text-slate-300">{item.label}</span>
                  <span className="font-black">{rupiah(item.value)}</span>
                </div>
              ))}

              <div className="flex justify-between gap-4">
                <span className="font-bold text-slate-300">{hasil.namaDasar}</span>
                <span className="font-black">{rupiah(hasil.dasar)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-bold text-slate-300">Tarif Normal</span>
                <span className="font-black">{(hasil.tarif * 100).toFixed(2)}%</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-bold text-slate-300">Tarif Digunakan</span>
                <span className="font-black text-orange-300">
                  {(hasil.tarifFinal * 100).toFixed(2)}%
                </span>
              </div>

              <div className="border-t border-white/20 pt-5">
                <p className="text-lg font-bold text-orange-300">
                  Estimasi PPh Pasal 22
                </p>
                <p className="mt-2 text-5xl font-black">{rupiah(hasil.pph)}</p>
                <p className="mt-3 text-sm font-bold text-slate-400">
                  Sifat: {hasil.sifat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}