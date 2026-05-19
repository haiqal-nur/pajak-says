import PageHeader from "../components/PageHeader";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        label="Biar Makin Paham"
        title="Video Pembelajaran"
        description="Tonton video penjelasan agar materi PPh Pasal 22 lebih mudah dipahami."
      />

      <section className="px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden bg-slate-950 shadow-2xl">
            <div className="flex aspect-video items-center justify-center text-center text-white">
              <div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-600 text-4xl">
                  ▶
                </div>
                <p className="mt-6 text-3xl font-black">Video PPh Pasal 22</p>
                <p className="mt-3 text-slate-300">
                  Nanti bagian ini bisa diganti dengan embed YouTube.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}