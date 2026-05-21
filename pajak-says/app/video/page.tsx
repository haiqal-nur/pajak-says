import PageHeader from "../components/PageHeader";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        label="Video Pembelajaran"
        title="Video PPh Pasal 22"
        description="Tonton video pembelajaran untuk memahami materi PPh Pasal 22 dengan lebih mudah."
      />

      <section className="bg-orange-50 px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden bg-white p-5 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/eRlbWGZkevM?si=8xvs-DIX1KDmRzos"
                title="Video Pembelajaran PPh Pasal 22"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 border-l-4 border-orange-600 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black text-slate-950">
              Petunjuk Belajar
            </h2>
            <p className="mt-3 text-lg font-semibold leading-8 text-slate-700">
              Setelah menonton video, lanjutkan membaca materi dan coba kerjakan
              kuis untuk menguji pemahaman kamu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}