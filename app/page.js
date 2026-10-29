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
        title: ['İnsan merkezli.', 'Düşünsel.', 'Dönüştürücü.'],
        subtitle:
          'Liderlik, gelişim, organizasyonel dönüşüm ve dijital çağ adaptasyonu üzerine çalışan bağımsız bir dönüşüm platformu.',
        cta: 'Görüşme planlayın',
        panel: 'Dijital dönüşüm ve kurumsal değişim üzerine danışmanlık ve üst düzey yönetici mentorluğu.',
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
            text: 'Yönetici gelişimi, üst düzey yönetici mentorluğu ve yeni dönem liderlik yaklaşımları.',
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
        title: 'Yansımalar',
        subtitle: 'Satır aralarında',
        items: [
          'Liderlik bazen cevap vermekten çok, alan açabilmekle ilgili.',
          'Bir organizasyonun tonu değiştiğinde birçok şey sessizce değişmeye başlıyor.',
          'Bazı problemler çözüm eksikliğinden değil, sürekli hızlanmaktan oluşuyor.',
        ],
      },
      footer: {
        closing:
          'Her şeyi aynı anda çözmek gerekmiyor. Bazen birkaç şeyi daha net görmek yeterli.',
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
        title: ['Human-centered.', 'Thoughtful.', 'Transformative.'],
        subtitle:
          'An independent transformation platform focused on leadership, development, organizational transformation and digital-age adaptation.',
        cta: 'Book a conversation',
        panel: 'Consulting on digital and organizational transformation, and executive mentoring.',
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
        title: 'Reflections',
        subtitle: 'Between the lines',
        items: [
          'Leadership is sometimes less about answers, and more about creating space.',
          'When the tone of an organization changes, many things begin to shift quietly.',
          'Some problems come not from lack of solutions, but from constant acceleration.',
        ],
      },
      footer: {
        closing:
          'Not everything needs to be solved at once. Sometimes clarity is enough.',
      },
    },
  }

  const t = content[lang]

  return (
    <main className="bg-white text-slate-900 min-h-screen scroll-smooth font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img src="/logo.png" alt="AlfaTeta" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-slate-600">
            <a href="#approach" className="hover:text-[#0E4DA4] transition-colors">{t.nav.approach}</a>
            <a href="#areas" className="hover:text-[#0E4DA4] transition-colors">{t.nav.areas}</a>
            <a href="#notes" className="hover:text-[#0E4DA4] transition-colors">{t.nav.notes}</a>
            <a href="#contact" className="hover:text-[#0E4DA4] transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang('tr')}
              className={`${lang === 'tr' ? 'opacity-100' : 'opacity-40'} transition-opacity`}
              aria-label="Türkçe"
            >
              <img src="/tr.svg" alt="TR" className="w-5 h-5 rounded-full" />
            </button>
            <button
              onClick={() => setLang('en')}
              className={`${lang === 'en' ? 'opacity-100' : 'opacity-40'} transition-opacity`}
              aria-label="English"
            >
              <img src="/gb.svg" alt="EN" className="w-5 h-5 rounded-full" />
            </button>
            <a
              href="https://www.linkedin.com/company/alfateta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0E4DA4] transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.877v1.909h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604V22h-3v-6.75c0-1.611-.029-3.682-2.244-3.682-2.247 0-2.592 1.755-2.592 3.566V22h-3V8z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-bold tracking-tight text-slate-900">
              {t.hero.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-block mt-10 bg-[#0E4DA4] text-white font-bold px-7 py-4 rounded hover:bg-[#0A3A7D] transition-colors"
            >
              {t.hero.cta}
            </a>
          </div>

          <div className="bg-slate-50 rounded-md p-10 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E4DA4] mb-8">ALFATETA</p>
            <img src="/logo.png" alt="AlfaTeta logo" className="w-[180px] md:w-[200px] h-auto" />
            <p className="mt-8 text-base md:text-lg text-slate-600 leading-relaxed">{t.hero.panel}</p>
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 md:px-10 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E4DA4]">
            {t.approach.title}
          </h2>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-800">
            {t.approach.text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="px-6 md:px-10 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E4DA4] mb-10">
            {t.areas.title}
          </h2>

          <div className="grid md:grid-cols-4 border border-slate-200">
            {t.areas.items.map((item, index) => (
              <div
                key={index}
                className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 last:border-r-0 last:border-b-0 min-h-[260px] flex flex-col"
              >
                <span className="text-sm font-bold text-[#0E4DA4] mb-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="px-6 md:px-10 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E4DA4] mb-10">
            {t.notes.title}
          </h2>
          <p className="-mt-6 mb-10 text-lg italic text-slate-500">{t.notes.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.notes.items.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-md p-8 text-lg leading-relaxed text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0E4DA4] text-white px-6 md:px-10 py-24 text-center">
        <p className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          {t.footer.closing}
        </p>
      </div>

      <footer id="contact" className="px-6 md:px-10 py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="mailto:info@alfateta.net" className="hover:text-[#0E4DA4] transition-colors">info@alfateta.net</a>
            <a href="tel:+905332254068" className="hover:text-[#0E4DA4] transition-colors">+90 533 225 4068</a>
          </div>
          <a
            href="https://www.linkedin.com/company/alfateta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0E4DA4] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}
