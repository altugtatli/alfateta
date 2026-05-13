"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("tr");

  const content = {
    tr: {
      services: "Hizmetler",
      approach: "Yaklaşım",
      contact: "İletişim",

      heroTop:
        "STRATEGIC TECHNOLOGY • TRANSFORMATION • INTELLIGENCE",

      title:
        "Teknolojiyi strateji ve operasyonla yeniden tasarlıyoruz.",

      description:
        "AlfaTeta; kurumların dijital dönüşüm yolculuğunu teknoloji, veri, operasyon ve yönetim perspektiflerini aynı çatı altında birleştirerek yeniden tanımlar.",

      servicesTitle: "Hizmetler",

      servicesCard1: "Yapay Zeka & Dijital Dönüşüm",
      servicesCard2: "Strateji & Operasyon",

      servicesText:
        "AlfaTeta; yapay zeka stratejileri, dijital dönüşüm mimarileri, BT organizasyon yapılanmaları, veri odaklı karar sistemleri ve operasyonel verimlilik alanlarında kurumlara uçtan uca danışmanlık sunar. Teknolojiyi yalnızca bir altyapı unsuru olarak değil; büyüme, hız, rekabet avantajı ve sürdürülebilir dönüşümün merkezi olarak konumlandırır.",

      servicesText2:
        "AlfaTeta; yönetim vizyonunu teknolojik uygulama kabiliyetiyle birleştirerek operasyon, yönetişim, veri ve karar mekanizmalarında ölçülebilir iş etkisi oluşturur.",

      approachTitle: "Yaklaşım",

      approachCard1: "Stratejik Hizalanma",
      approachCard2: "Operasyonel Zeka",
      approachCard3: "Sürdürülebilir Dönüşüm",

      approachText1:
        "İş stratejisi ve teknoloji vizyonu birlikte tasarlanır.",

      approachText2:
        "Veri odaklı operasyonel yapılar ölçeklenebilir verimlilik sağlar.",

      approachText3:
        "Yaklaşımımız; teknoloji, insan, operasyon ve yönetim perspektiflerini aynı stratejik çerçevede birleştirmeye dayanır. AlfaTeta yalnızca teknoloji projeleri üretmez; kurumların karar alma biçimlerini, çalışma kültürlerini ve dönüşüm kabiliyetlerini yeniden tasarlar.",

      contactTitle: "İletişim",

      button1: "Hizmetleri İncele",
      button2: "İletişime Geç",
    },

    en: {
      services: "Services",
      approach: "Approach",
      contact: "Contact",

      heroTop:
        "STRATEGIC TECHNOLOGY • TRANSFORMATION • INTELLIGENCE",

      title:
        "We redesign technology with strategy and operations.",

      description:
        "AlfaTeta redefines digital transformation journeys by integrating technology, data, operations and management perspectives under one structure.",

      servicesTitle: "Services",

      servicesCard1: "AI & Digital Transformation",
      servicesCard2: "Strategy & Operations",

      servicesText:
        "AlfaTeta provides end-to-end consulting in AI strategy, digital transformation architectures, IT organizational design, data-driven decision systems and operational excellence. We position technology not merely as infrastructure, but as the core driver of growth, speed, competitive advantage and sustainable transformation.",

      servicesText2:
        "AlfaTeta combines executive vision with technological execution to create measurable business impact across operations, governance, data and decision systems.",

      approachTitle: "Approach",

      approachCard1: "Strategic Alignment",
      approachCard2: "Operational Intelligence",
      approachCard3: "Sustainable Transformation",

      approachText1:
        "Business strategy and technology vision are designed together.",

      approachText2:
        "Data-driven operational structures create scalable efficiency.",

      approachText3:
        "Our approach integrates technology, people, operations and management perspectives within the same strategic framework. AlfaTeta redesigns how organizations make decisions, operate and evolve.",

      contactTitle: "Contact",

      button1: "Explore Services",
      button2: "Contact Us",
    },
  };

  const t = content[lang];

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="AlfaTeta"
              className="w-12 h-12 object-contain"
            />

            <div>
              <div className="text-3xl tracking-[0.35em] font-light">
                ALFA
                <span className="text-blue-500">TETA</span>
              </div>

              <div className="text-xs tracking-[0.35em] text-zinc-400 mt-1">
                INTELLIGENCE IN MOTION
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-zinc-300">
              <a href="#services" className="hover:text-blue-400 transition">
                {t.services}
              </a>

              <a href="#approach" className="hover:text-blue-400 transition">
                {t.approach}
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                {t.contact}
              </a>
            </nav>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("tr")}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  lang === "tr"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-white/10"
                }`}
              >
                <img
                  src="/tr.svg"
                  alt="TR"
                  className="w-5 h-5 rounded-full object-cover"
                />
              </button>

              <button
                onClick={() => setLang("en")}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  lang === "en"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-white/10"
                }`}
              >
                <img
                  src="/gb.svg"
                  alt="EN"
                  className="w-5 h-5 rounded-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="text-blue-500 tracking-[0.35em] text-sm uppercase mb-8">
              {t.heroTop}
            </div>

            <h1 className="text-6xl lg:text-8xl leading-none font-light mb-10">
              {t.title}
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-12">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#services"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-white"
              >
                {t.button1}
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-white/10 hover:border-blue-500 transition"
              >
                {t.button2}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-950 via-black to-black p-16 shadow-2xl">
              <img
                src="/logo.png"
                alt="AlfaTeta"
                className="w-[320px] h-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 border-t border-white/10 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-blue-500 mb-10">
            {t.servicesTitle}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-4">
                {t.servicesCard1}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.servicesText}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-4">
                {t.servicesCard2}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.servicesText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="approach"
        className="py-28 border-t border-white/10 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-blue-500 mb-10">
            {t.approachTitle}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-4">
                {t.approachCard1}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.approachText1}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-4">
                {t.approachCard2}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.approachText2}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-4">
                {t.approachCard3}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.approachText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 border-t border-white/10 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-blue-500 mb-10">
            {t.contactTitle}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-zinc-400 uppercase tracking-[0.25em] text-sm mb-6">
                EMAIL
              </div>

              <div className="text-3xl">
                info@alfateta.net
              </div>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-zinc-400 uppercase tracking-[0.25em] text-sm mb-6">
                PHONE
              </div>

              <div className="text-3xl">
                +90 533 225 4068
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © 2026 AlfaTeta. All rights reserved.
          </div>

          <div className="text-zinc-500 text-sm tracking-[0.2em]">
            INTELLIGENCE IN MOTION
          </div>
        </div>
      </footer>
    </main>
  );
}