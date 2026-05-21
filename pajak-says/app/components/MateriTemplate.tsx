import Link from "next/link";

type TableData = {
  title: string;
  headers: string[];
  rows: string[][];
};

type SubMateri = {
  number: string;
  title: string;
  content: string[];
  points?: string[];
  formulas?: string[];
  tables?: TableData[];
};

type MateriTemplateProps = {
  number: string;
  title: string;
  description: string;
  content: string[];
  subMateri?: SubMateri[];
  previous?: {
    label: string;
    href: string;
  };
  next?: {
    label: string;
    href: string;
  };
};

export default function MateriTemplate({
  number,
  title,
  description,
  content,
  subMateri,
  previous,
  next,
}: MateriTemplateProps) {
  return (
    <main className="min-h-screen bg-white pt-[78px]">
      <section className="bg-orange-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-black text-orange-600">
            Materi {number}
          </p>
          <h1 className="mt-3 text-5xl font-black text-slate-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
            {description}
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="h-fit border border-orange-100 bg-white shadow-xl lg:sticky lg:top-28">
            <div className="bg-orange-600 px-6 py-5">
              <h2 className="text-xl font-black text-white">
                Daftar Materi
              </h2>
              <p className="mt-1 text-sm font-semibold text-orange-100">
                Bab II Modul PPh Pasal 22
              </p>
            </div>

            <div className="p-3">
              {[
                ["2.1", "Pengantar Umum", "/materi/pengantar-umum"],
                ["2.2", "PPh Pasal 22", "/materi/pph-pasal-22"],
                ["2.3", "Dasar Hukum", "/materi/dasar-hukum"],
                ["2.4", "Pemungut", "/materi/pemungut"],
                ["2.5", "Objek", "/materi/objek"],
                ["2.6", "Pengecualian", "/materi/pengecualian"],
                ["2.7", "Tarif", "/materi/tarif"],
                ["2.8", "Rumus", "/materi/rumus"],
                ["2.9", "Studi Kasus", "/materi/studi-kasus"],
                ["2.10", "Mekanisme", "/materi/mekanisme"],
                ["2.11", "Sifat PPh 22", "/materi/sifat"],
              ].map(([num, label, href]) => {
                const active = num === number;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`mb-2 flex gap-3 border px-4 py-4 font-bold transition ${
                      active
                        ? "border-orange-600 bg-orange-600 text-white"
                        : "border-orange-100 bg-orange-50 text-slate-800 hover:border-orange-400 hover:bg-white"
                    }`}
                  >
                    <span
                      className={active ? "text-white" : "text-orange-600"}
                    >
                      {num}
                    </span>
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <div>
            <div className="border border-orange-100 bg-white p-8 shadow-xl md:p-10">
              <p className="text-lg font-black text-orange-600">
                Materi {number}
              </p>
              <h2 className="mt-2 text-4xl font-black leading-tight text-slate-950">
                {title}
              </h2>

              <div className="mt-8 space-y-6">
                {content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xl font-semibold leading-9 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {subMateri && (
                <div className="mt-10 space-y-8">
                  {subMateri.map((sub) => (
                    <div key={sub.number} className="bg-orange-50 p-6">
                      <p className="text-lg font-black text-orange-600">
                        {sub.number}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-slate-950">
                        {sub.title}
                      </h3>

                      <div className="mt-5 space-y-5">
                        {sub.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-lg font-semibold leading-8 text-slate-700"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {sub.points && (
                        <ol className="mt-5 list-decimal space-y-3 pl-8 text-lg font-semibold leading-8 text-slate-700">
                          {sub.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-10 flex flex-wrap justify-between gap-4">
                {previous ? (
                  <Link
                    href={previous.href}
                    className="bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:bg-slate-800"
                  >
                    ← {previous.label}
                  </Link>
                ) : (
                  <div />
                )}

                {next && (
                  <Link
                    href={next.href}
                    className="bg-orange-600 px-7 py-4 text-lg font-black text-white transition hover:bg-orange-700"
                  >
                    {next.label} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}