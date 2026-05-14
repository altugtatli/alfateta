'use client'

import { useState } from 'react'

export default function HomePage() {
  const [lang, setLang] = useState('tr')

  const content = {
    tr: {
      nav: {
        approach: 'Yaklaşım',
        areas: 'Çalışma Alanları',
        notes: 'Notlar',
        contact: 'İletişim',
      },
      hero: {
        title: 'İnsan merkezli.\nDüşünsel.\nDönüştürücü.',
        subtitle:
          'Liderlik, gelişim, organizasyonel dönüşüm ve dijital çağ adaptasyonu üzerine çalışan bağımsız bir dönüşüm platformu.',
      },
      approach: {
        title: 'Yaklaşım',
        text: [
          'Dönüşüm bazen büyük kararlarla değil, küçük fark edişlerle başlıyor.',
          'Bir ekibin çalışma biçimi değişiyor. İnsanlar birbirini biraz daha dikkatli dinliyor. Kararlar netleşiyor.',
          'Dışarıdan bakınca çok büyük görünmeyebilir. Ama kalıcı değişim çoğu zaman böyle ilerliyor.',
        ],
      },
      areas: {
        title: 'Çalışma Alanları',
        items: [
          {
            title: 'Liderlik ve Yönetim Gelişimi',
            text: 'Yönetici gelişimi, executive mentoring ve yeni dönem liderlik yaklaşımları.',
          },
          {
            title: 'Organizasyonel Dönüşüm',
            text: 'Kültürel dönüşüm, değişim süreçleri ve insan odaklı organizasyon yapıları.',
          },
          {
            title: 'Dijital Dönüşüm',
            text: 'Teknolojiyi insan ve organizasyon gelişimini destekleyen stratejik bir araç olarak konumlandırmak.',
          },
          {
            title: 'Düşünsel Gelişim',
            text: 'Davranış, iletişim ve multidisipliner düşünme sistemleri üzerine çalışmalar.',
          },
        ],
      },
      notes: {
        title: 'Notlar',
        items: [
          'Liderlik bazen cevap vermekten çok, alan açabilmekle ilgili.',
          'Bir organizasyonun tonu değiştiğinde birçok şey sessizce değişmeye başlıyor.',
          'Bazı problemler çözüm eksikliğinden değil, sürekli hızlanmaktan oluşuyor.',
        ],
      },
      footer: {
        closing:
          'Her şeyi aynı anda çözmek gerekmiyor.\nBazen birkaç şeyi daha net görmek yeterli.',
      },
    },

    en: {
      nav: {
        approach: 'Approach',
        areas: 'Focus Areas',
        notes: 'Notes',
        contact: 'Contact',
      },
      hero: {
        title: 'Human-centered.\nThoughtful.\nTransformative.',
        subtitle:
          'An independent transformation platform focused on leadership, development, organizational transformation and digital-age adaptation.',
      },
      approach: {
        title: 'Approach',
        text: [
          'Transformation rarely begins with big decisions. It often starts with small realizations.',
          'The way teams work begins to shift. People listen more carefully. Decisions become clearer.',
          'From the outside, it may not look dramatic. But lasting change often moves this way.',
        ],
      },
      areas: {
        title: 'Focus Areas',
        items: [
          {
            title: 'Leadership and Executive Development',
            text: 'Executive development, mentoring and contemporary leadership approaches.',
          },
          {
            title: 'Organizational Transformation',
            text: 'Cultural transformation, change processes and human-centered structures.',
          },
          {
            title: 'Digital Transformation',
            text: 'Positioning technology as a strategic tool that supports people and organizations.',
          },
          {
            title: 'Perspective Development',
            text: 'Work focused on communication, behavior and multidisciplinary thinking systems.',
          },
        ],
      },
      notes: {
        title: 'Notes',
        items: [
          'Leadership is sometimes less about answers, and more about creating space.',
          'When the tone of an organization changes, many things begin to shift quietly.',
          'Some problems come not from lack of solutions, but from constant acceleration.',
        ],
      },
      footer: {
        closing:
          'Not everything needs to be solved at once.\nSometimes clarity is enough.',
      },
    },
  }

  const t = content[lang]

  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img
              src="/logo.png"
              alt="AlfaTeta"
              className="h-10 w-auto opacity-95"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/55 tracking-wide">
            <a href="#approach" className="hover:text-white transition-colors duration-300">
              {t.nav.approach}
            </a>
            <a href="#areas" className="hover:text-white transition-colors duration-300">
              {t.nav.areas}
            </a>
            <a href="#notes" className="hover:text-white transition-colors duration-300">
              {t.nav.notes}
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setLang('tr')}
                className={`${lang === 'tr' ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}
              >
                <img src="/tr.svg" alt="TR" className="w-4 h-4 md:w-5 md:h-5 rounded-full" />
              </button>

              <button
                onClick={() => setLang('en')}
                className={`${lang === 'en' ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}
              >
                <img src="/gb.svg" alt="EN" className="w-4 h-4 md:w-5 md:h-5 rounded-full" />
              </button>
            </div>

            <a
              href="https://www.linkedin.com/company/alfateta"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.877v1.909h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604V22h-3v-6.75c0-1.611-.029-3.682-2.244-3.682-2.247 0-2.592 1.755-2.592 3.566V22h-3V8z" />
              </svg>
            </a>

            <a
              href="mailto:info@alfateta.net"
              className="hidden lg:block text-sm text-white/55 hover:text-white transition-colors duration-300"
            >
              info@alfateta.net
            </a>
          </div>
        </div>

        <div className="md:hidden border-t border-white/5 px-6 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/50 overflow-x-auto gap-6">
          <a href="#approach">{t.nav.approach}</a>
          <a href="#areas">{t.nav.areas}</a>
          <a href="#notes">{t.nav.notes}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
      </header>

      <section
        id="top"
        className="min-h-screen flex items-center pt-40 pb-24 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-white/35 uppercase tracking-[0.4em] text-xs mb-10">
              ALFATETA
            </div>

            <h1 className="text-6xl md:text-8xl leading-[0.95] font-light tracking-tight whitespace-pre-line">
              {t.hero.title}
            </h1>

            <p className="mt-12 text-xl text-white/45 leading-relaxed max-w-2xl font-light">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="AlfaTeta Logo"
              className="w-[150px] md:w-[220px] lg:w-[280px] h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.35em] text-white/30 mb-16">
            {t.approach.title}
          </h2>

          <div className="space-y-10 text-2xl md:text-3xl leading-relaxed text-white/80 font-light">
            {t.approach.text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.35em] text-white/30 mb-16">
            {t.areas.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {t.areas.items.map((item, index) => (
              <div key={index} className="bg-black p-10 md:p-14">
                <h3 className="text-2xl font-light mb-6">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-lg font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="px-6 md:px-10 py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.35em] text-white/30 mb-16">
            {t.notes.title}
          </h2>

          <div className="space-y-px bg-white/5">
            {t.notes.items.map((item, index) => (
              <div key={index} className="bg-black p-10 md:p-14">
                <p className="text-2xl md:text-3xl leading-relaxed text-white/80 font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="px-6 md:px-10 py-32 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-4xl md:text-6xl leading-tight font-light whitespace-pre-line text-white/90">
            {t.footer.closing}
          </p>

          <div className="flex items-center justify-center gap-6 pt-12 text-sm text-white/45 flex-wrap">
            <a
              href="mailto:info@alfateta.net"
              className="hover:text-white transition-colors duration-300"
            >
              info@alfateta.net
            </a>

            <a
              href="tel:+905332254068"
              className="hover:text-white transition-colors duration-300"
            >
              +90 533 225 4068
            </a>

            <a
              href="https://www.linkedin.com/company/alfateta"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.877v1.909h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604V22h-3v-6.75c0-1.611-.029-3.682-2.244-3.682-2.247 0-2.592 1.755-2.592 3.566V22h-3V8z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
