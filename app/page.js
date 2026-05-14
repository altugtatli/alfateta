'use client'

import { useState } from 'react'

export default function HomePage() {
  const [lang, setLang] = useState('tr')
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden selection:bg-white selection:text-black">
      {/* TOP NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-20 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#top">
              <img
                src="/logo.png"
              alt="AlfaTeta"
              className="h-10 w-auto opacity-95"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/55 font-light tracking-wide">
            <a href="#approach" className="hover:text-white transition-colors duration-300">
              {lang === 'tr' ? 'Yaklaşım' : 'Approach'}
            </a>
            <a href="#services" className="hover:text-white transition-colors duration-300">
              {lang === 'tr' ? 'Çalışma Alanları' : 'Focus Areas'}
            </a>
            <a href="#journal" className="hover:text-white transition-colors duration-300">
              {lang === 'tr' ? 'Notlar' : 'Notes'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              {lang === 'tr' ? 'İletişim' : 'Contact'}
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setLang('tr')}
                className={`${lang === 'tr' ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity duration-300`}
              >
                <img src="/tr.svg" alt="Türkçe" className="w-5 h-5 rounded-full object-cover" />
              </button>

              <button
                onClick={() => setLang('en')}
                className={`${lang === 'en' ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity duration-300`}
              >
                <img src="/gb.svg" alt="English" className="w-5 h-5 rounded-full object-cover" />
              </button>
            </div>

            <a
              href="mailto:info@alfateta.net"
              className="hidden md:block text-sm text-white/55 hover:text-white transition-colors duration-300"
            >
              info@alfateta.net
            </a>
          </div>
        </div>
      

        {/* MOBILE MENU */}
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/50 overflow-x-auto gap-6">
          <a href="#approach" className="whitespace-nowrap">
            {lang === 'tr' ? 'Yaklaşım' : 'Approach'}
          </a>

          <a href="#services" className="whitespace-nowrap">
            {lang === 'tr' ? 'Alanlar' : 'Areas'}
          </a>

          <a href="#journal" className="whitespace-nowrap">
            {lang === 'tr' ? 'Notlar' : 'Notes'}
          </a>

          <a href="#contact" className="whitespace-nowrap">
            {lang === 'tr' ? 'İletişim' : 'Contact'}
          </a>
        </div>
      </header>
      {/* HERO */}
      <section id="top" className="relative px-8 md:px-20 pt-56 pb-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-10">
              AlfaTeta
            </div>

          <h1 className="text-5xl md:text-[110px] leading-[0.92] tracking-[-0.04em] font-light max-w-6xl">
            {lang === 'tr' ? 'Dönüşüm teknolojiyle değil,' : 'Transformation does not begin with technology,'}
            <br />
            {lang === 'tr' ? 'insanla başlar.' : 'it begins with people.'}
          </h1>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-light">
            {lang === 'tr'
              ? 'Liderlik, gelişim, organizasyonel dönüşüm ve dijital çağ adaptasyonu üzerine çalışan bağımsız bir dönüşüm platformu.'
              : 'An independent transformation platform focused on leadership, development, organizational transformation and digital-age adaptation.'}
          </p>

          <div className="flex flex-wrap gap-4 mt-14">
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm tracking-wide hover:scale-[1.03] transition-all duration-500">
              {lang === 'tr' ? 'Yaklaşım' : 'Approach'}
            </button>

            <button className="border border-white/15 text-white/80 px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-500">
              {lang === 'tr' ? 'İletişim' : 'Contact'}
            </button>
          </div>
        </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/logo.png"
              alt="AlfaTeta Logo"
              className="w-[150px] md:w-[220px] lg:w-[280px] h-auto opacity-90"
            />
          </div>
        </div>

        <div className="absolute right-[-200px] top-[-100px] w-[700px] h-[700px] bg-white/[0.03] blur-3xl rounded-full" />
      </section>

      {/* INTRO */}
      <section className="px-8 md:px-20 py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
              {lang === 'tr' ? 'İnsan Merkezli Dönüşüm' : 'Human-Centered Transformation'}
            </div>

            <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em] font-light max-w-2xl">
              {lang === 'tr' ? 'Dönüşüm bazen büyük kararlarla değil,' : 'Transformation rarely begins with big decisions,'}
              <span className="text-white/45"> {lang === 'tr' ? 'küçük fark edişlerle başlıyor.' : 'but with small realizations.'}</span>
            </h2>
          </div>

          <div className="text-white/55 text-lg leading-[1.9] font-light max-w-2xl space-y-7">
            <p>
              {lang === 'tr' ? 'Bir ekibin çalışma biçimi değişir.' : 'The way a team works begins to shift.'}
              <br />
              {lang === 'tr' ? 'İnsanlar birbirini biraz daha dikkatli dinlemeye başlar.' : 'People start listening to each other more carefully.'}
              <br />
              {lang === 'tr' ? 'Kararlar netleşir.' : 'Decisions become clearer.'}
              <br />
              {lang === 'tr' ? 'Tempo biraz olsun nefes alır.' : 'The pace finally finds room to breathe.'}
            </p>

            <p>
              {lang === 'tr' ? 'Dışarıdan bakınca çok büyük görünmez.' : 'From the outside, it may not look dramatic.'}
            </p>

            <p>
              {lang === 'tr' ? 'Ama kalıcı değişim çoğu zaman böyle ilerler.' : 'But lasting change often moves this way.'}
            </p>

            <p>
              {lang === 'tr' ? 'Sessizce.' : 'Quietly.'}
              <br />
              {lang === 'tr' ? 'İnsanların birbirleriyle' : 'When the relationship between people'}
              <br />
              {lang === 'tr' ? 've yaptıkları işle kurduğu ilişki değişmeye başladığında.' : 'and the work they do begins to change.'}
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="px-8 md:px-20 py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
            {lang === 'tr' ? 'Yaklaşım' : 'Approach'}
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em] font-light max-w-3xl">
                {lang === 'tr' ? 'Her şeyi yeniden kurmak gerekmiyor bazen.' : 'Sometimes everything does not need rebuilding.'}
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-[1.9] text-white/55 font-light max-w-2xl">
              <p>
                {lang === 'tr' ? 'Nasıl çalıştığımızı,' : 'The way we work,'}
                <br />
                {lang === 'tr' ? 'nasıl karar verdiğimizi,' : 'how we make decisions,'}
                <br />
                {lang === 'tr' ? 'birbirimizi nasıl duyduğumuzu yeniden görmek yetebiliyor.' : 'how we truly hear each other — sometimes seeing these again is enough.'}
              </p>

              <p>
                {lang === 'tr' ? 'Teknoloji bu sürecin bir parçası.' : 'Technology is part of the process.'}
                <br />
                {lang === 'tr' ? 'Ama merkezinde insan var.' : 'But people remain at the center.'}
              </p>

              <p>
                {lang === 'tr' ? 'Liderlik.' : 'Leadership.'}
                <br />
                {lang === 'tr' ? 'İletişim' : 'Contact'}.
                <br />
                {lang === 'tr' ? 'Düşünme biçimi.' : 'Ways of thinking.'}
                <br />
                {lang === 'tr' ? 'Organizasyon kültürü.' : 'Organizational culture.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 md:px-20 py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
            {lang === 'tr' ? 'Çalışma Alanları' : 'Focus Areas'}
          </div>

          <div className="space-y-0 border-t border-white/10">
            {[
              {
                title: lang === 'tr' ? 'Liderlik ve Yönetim Gelişimi' : 'Leadership and Executive Development',
                text: lang === 'tr'
                  ? 'Yönetici gelişimi, executive mentoring, karar sistemleri ve yeni dönem liderlik yaklaşımları.'
                  : 'Executive development, mentoring, decision systems and contemporary leadership approaches.',
              },
              {
                title: lang === 'tr' ? 'Organizasyonel Dönüşüm' : 'Organizational Transformation',
                text: lang === 'tr'
                  ? 'Kültürel dönüşüm, değişim süreçleri ve insan odaklı organizasyon yapıları.'
                  : 'Cultural transformation, change processes and human-centered organizational structures.',
              },
              {
                title: lang === 'tr' ? 'Dijital Dönüşüm' : 'Digital Transformation',
                text: lang === 'tr'
                  ? 'Teknolojiyi insan ve organizasyon gelişimini destekleyen stratejik bir araç olarak konumlandırmak.'
                  : 'Positioning technology as a strategic tool that supports people and organizational development.',
              },
              {
                title: lang === 'tr' ? 'Düşünsel Gelişim' : 'Perspective and Cognitive Development',
                text: lang === 'tr'
                  ? 'Davranış, iletişim, karar psikolojisi ve multidisipliner düşünme sistemleri üzerine çalışmalar.'
                  : 'Work focused on behavior, communication, decision psychology and multidisciplinary thinking systems.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-10 py-14 border-b border-white/10"
              >
                <div>
                  <h3 className="text-3xl md:text-5xl tracking-[-0.03em] font-light leading-[1.1]">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-lg leading-[1.9] text-white/50 font-light max-w-xl">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-8 md:px-20 py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
              {lang === 'tr' ? 'Organizasyonlar İçin' : 'For Organizations'}
            </div>

            <div className="space-y-5 text-white/55 text-lg leading-[1.9] font-light">
              <p>{lang === 'tr' ? 'Üst yönetim ekipleri.' : 'Executive leadership teams.'}</p>
              <p>Dönüşüm süreçleri yaşayan organizasyonlar.</p>
              <p>Liderlik kültürünü yeniden düşünmek isteyen yapılar.</p>
              <p>İnsan ve teknoloji arasında daha sağlıklı bir denge arayan ekipler.</p>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
              {lang === 'tr' ? 'Bireyler İçin' : 'For Individuals'}
            </div>

            <div className="space-y-5 text-white/55 text-lg leading-[1.9] font-light">
              <p>{lang === 'tr' ? 'Kariyerinde yeni bir döneme girenler.' : 'People entering a new phase in their careers.'}</p>
              <p>Liderlik rolü üstlenen profesyoneller.</p>
              <p>Kendini yeniden yapılandırmak isteyenler.</p>
              <p>Daha sürdürülebilir bir çalışma ve düşünme biçimi arayanlar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section id="journal" className="px-8 md:px-20 py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-10">
            {lang === 'tr' ? 'Notlar' : 'Notes'}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              lang === 'tr'
                ? 'Liderlik bazen cevap vermekten çok, alan açabilmekle ilgili.'
                : 'Leadership is sometimes less about answers, and more about creating space.',
              lang === 'tr'
                ? 'Bir organizasyonun tonu değiştiğinde birçok şey sessizce değişmeye başlıyor.'
                : 'When the tone of an organization changes, many things begin to shift quietly.',
              lang === 'tr'
                ? 'Bazı problemler çözüm eksikliğinden değil, sürekli hızlanmaktan oluşuyor.'
                : 'Some problems come not from lack of solutions, but from constant acceleration.',
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-[30px] p-10 min-h-[260px] flex items-end bg-white/[0.015]"
              >
                <p className="text-2xl leading-[1.5] tracking-[-0.02em] text-white/75 font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section id="contact" className="px-8 md:px-20 py-44 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="text-[11px] tracking-[0.35em] uppercase text-white/35 mb-8">
            AlfaTeta
          </div>

          <h2 className="text-5xl md:text-[92px] leading-[0.95] tracking-[-0.04em] font-light">
            {lang === 'tr' ? 'Her şeyi aynı anda çözmek gerekmiyor.' : 'Not everything needs to be solved at once.'}
          </h2>

          <p className="mt-12 text-lg md:text-xl text-white/50 leading-[1.9] font-light max-w-2xl mx-auto">
            Bazen doğru birkaç şeyi daha net görmek,
            dönüşüm için yeterli oluyor.
          </p>

          <button className="mt-16 bg-white text-black px-10 py-5 rounded-full text-sm tracking-wide hover:scale-[1.03] transition-all duration-500">
            {lang === 'tr' ? 'İletişim' : 'Contact'}e Geç
          </button>
        </div>

        <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.03] blur-3xl rounded-full" />
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-20 py-14 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <img
              src="/logo.png"
              alt="AlfaTeta"
              className="h-10 w-auto opacity-90"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 text-sm text-white/45 font-light">
            <a
              href="mailto:info@alfateta.net"
              className="hover:text-white transition-colors duration-300"
            >
              info@alfateta.net
            </a>

            <a
              href="tel:+905555555555"
              className="hover:text-white transition-colors duration-300"
            >
              +90 533 225 4068
            </a>

            <div className="text-white/25">
              Leadership • Transformation • Development
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
