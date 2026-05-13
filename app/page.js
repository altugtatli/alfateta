import Image from "next/image";

export default function Page() {

  return (
    <main className="min-h-screen bg-[#0B0D12] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-slate-700 blur-[220px] rounded-full" />

      </div>

      {/* NAVBAR */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-10 h-10 relative">

              <Image
                src="/logo.png"
                alt="AlfaTeta Logo"
                fill
                className="object-contain"
              />

            </div>

            <div>

              <div className="text-3xl tracking-[0.22em] font-light">
                ALFA<span className="text-[#007BFF]">TETA</span>
              </div>

              <div className="text-sm tracking-[0.28em] text-white/45 uppercase mt-1">
                Intelligence in Motion
              </div>

            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] text-white/60">

            <a href="#services" className="hover:text-white transition">
              Hizmetler
            </a>

            <a href="#approach" className="hover:text-white transition">
              Yaklaşım
            </a>

            <a href="#contact" className="hover:text-white transition">
              İletişim
            </a>

          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="text-[#007BFF] text-sm uppercase tracking-[0.35em] mb-6">

              Strategic Technology • Transformation • Intelligence

            </div>

            <h1 className="text-6xl md:text-7xl leading-[1.02] font-light tracking-tight mb-8">

              Teknolojiyi
              <br />

              <span className="text-white/50">
                strateji ve operasyonla
              </span>

              <br />

              yeniden tasarlıyoruz.

            </h1>

            <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-10">

              AlfaTeta; kurumların dijital dönüşüm yolculuğunu teknoloji,
              veri, operasyon ve yönetim perspektiflerini aynı çatı altında
              birleştirerek yeniden tanımlar.

            </p>

            <div className="flex flex-wrap gap-4">

              <button className="px-8 py-4 bg-[#007BFF] hover:bg-[#1D9BFF] transition rounded-2xl text-black font-medium">

                Hizmetleri İncele

              </button>

              <button className="px-8 py-4 border border-white/15 hover:border-white/40 transition rounded-2xl text-white/80">

                İletişime Geç

              </button>

            </div>
          </div>

          {/* LOGO SYSTEM VISUAL */}
          <div className="relative">

            <div className="rounded-[36px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl">

              <Image
                src="/logo.png"
                alt="AlfaTeta Brand System"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
                priority
              />

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative z-10 max-w-7xl mx-auto px-8 py-28"
      >

        <div className="mb-16">

          <div className="text-[#007BFF] uppercase tracking-[0.35em] text-sm mb-5">
            Hizmetler
          </div>

          <h2 className="text-5xl font-light mb-6 leading-tight">

            Strateji,
            <br />
            teknoloji ve operasyon
            <br />
            aynı sistemde.

          </h2>

          <p className="text-white/60 text-lg max-w-3xl leading-relaxed">

            AlfaTeta; teknoloji yatırımlarını yalnızca teknik altyapı
            perspektifiyle değil, organizasyonel yapı ve iş gerçekliği
            ekseninde ele alır.

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Dijital Dönüşüm",
            "Operasyonel Teknoloji",
            "Veri & Analitik",
            "Yönetim Danışmanlığı",
          ].map((item, index) => (

            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >

              <div className="text-2xl font-light mb-5">
                {item}
              </div>

              <p className="text-white/60 leading-relaxed">

                Kurumların sürdürülebilir dönüşüm altyapısını
                oluşturan stratejik teknoloji sistemleri.

              </p>

            </div>

          ))}
        </div>
      </section>

    </main>
  );
}