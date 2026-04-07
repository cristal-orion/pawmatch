export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">
            Paw<span className="text-orange-500">Match</span>
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">
              Funzioni
            </a>
            <a href="#how" className="hover:text-gray-900 transition">
              Come funziona
            </a>
            <a href="#download" className="hover:text-gray-900 transition">
              Scarica
            </a>
          </nav>
          <a
            href="#download"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
          >
            Inizia ora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center pt-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Il Tinder
              <br />
              <span className="text-orange-500">per cani.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg">
              Trova il compagno di giochi perfetto per il tuo amico a quattro
              zampe. Swipe, match, e organizza passeggiate insieme nel tuo
              quartiere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition shadow-lg shadow-orange-500/25"
              >
                Scarica gratis
              </a>
              <a
                href="#how"
                className="rounded-full border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-600 transition"
              >
                Scopri di piu
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-96 rounded-3xl bg-white shadow-2xl border border-gray-100 flex flex-col items-center justify-center overflow-hidden">
              <div className="text-8xl">🐕</div>
              <div className="mt-4 text-center px-6">
                <p className="font-bold text-xl text-gray-900">Rocky, 3 anni</p>
                <p className="text-gray-500 text-sm mt-1">
                  Golden Retriever &bull; 500m da te
                </p>
              </div>
              <div className="absolute bottom-6 flex gap-4">
                <button className="w-14 h-14 rounded-full bg-red-100 text-red-500 text-2xl flex items-center justify-center shadow-md hover:scale-110 transition">
                  ✕
                </button>
                <button className="w-14 h-14 rounded-full bg-green-100 text-green-500 text-2xl flex items-center justify-center shadow-md hover:scale-110 transition">
                  ♥
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Perche PawMatch?
          </h2>
          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            Tutto quello che serve per socializzare il tuo cane, in una sola app.
          </p>
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Match di quartiere",
                desc: "Trova cani compatibili vicino a te per razza, taglia ed energia.",
              },
              {
                icon: "💬",
                title: "Chat integrata",
                desc: "Organizza passeggiate e incontri al parco direttamente in app.",
              },
              {
                icon: "🛡️",
                title: "Profili verificati",
                desc: "Ogni profilo include vaccini, carattere e preferenze di gioco.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition"
              >
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-orange-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Come funziona
          </h2>
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Crea il profilo",
                desc: "Aggiungi foto, razza, eta e personalita del tuo cane.",
              },
              {
                step: "2",
                title: "Swipe & Match",
                desc: "Scorri i profili e fai match con i cani piu compatibili.",
              },
              {
                step: "3",
                title: "Incontratevi!",
                desc: "Organizza la prima passeggiata e lascia che si annusino.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center shadow-lg">
                  {s.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-500 max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Download */}
      <section id="download" className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Pronto a trovare nuovi amici?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Scarica PawMatch e unisciti a migliaia di padroni e cani felici.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100 transition">
              App Store
            </button>
            <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100 transition">
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; 2026 PawMatch. Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}
