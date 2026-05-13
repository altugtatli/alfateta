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
        "AlfaTeta; yapay zeka stratejileri, dijital dönüşüm mimarileri, BT organizasyon yapılanmaları, veri odaklı karar sistemleri ve operasyonel verimlilik alanlarında kurumlara uçtan uca danışmanlık sunar.",

      servicesText2:
        "Yönetim vizyonunu teknolojik uygulama kabiliyetiyle birleştirerek operasyon, yönetişim ve karar mekanizmalarında ölçülebilir iş etkisi oluşturur.",

      approachTitle: "Yaklaşım",

      approachCard1: "Stratejik Hizalanma",

      approachCard2: "Operasyonel Zeka",

      approachCard3: "Sürdürülebilir Dönüşüm",

      approachText1:
        "İş stratejisi ve teknoloji vizyonu birlikte tasarlanır.",

      approachText2:
        "Veri odaklı operasyonel yapılar ölçeklenebilir verimlilik sağlar.",

      approachText3:
        "AlfaTeta yalnızca teknoloji projeleri üretmez; kurumların karar alma biçimlerini ve dönüşüm kabiliyetlerini yeniden tasarlar.",

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
        "AlfaTeta provides end-to-end consulting in AI strategy, digital transformation architectures, IT organizational design and operational excellence.",

      servicesText2:
        "AlfaTeta combines executive vision with technological execution to create measurable business impact across operations and governance.",

      approachTitle: "Approach",

      approachCard1: "Strategic Alignment",

      approachCard2: "Operational Intelligence",

      approachCard3: "Sustainable Transformation",

      approachText1:
        "Business strategy and technology vision are designed together.",

      approachText2:
        "Data-driven operational structures create scalable efficiency.",

      approachText3:
        "AlfaTeta redesigns how organizations make decisions, operate and evolve.",

      contactTitle: "Contact",

      button1: "Explore Services",

      button2: "Contact Us",
    },
  };

  const t = content[lang];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="AlfaTeta"
              width={48}
              height={48}

              className="w-9 h-9 lg:w-12 lg:h-12 object-contain"
            />

            <div>
              <div className="text-xl lg:text-3xl tracking-[0.28em] font-light">
                ALFA
                <span className="text-blue-500">TETA</span>
              </div>

              <div className="hidden lg:block text-xs tracking-[0.35em] text-zinc-400 mt-1">
                INTELLIGENCE IN MOTION
              </div>
            </div>
          </a>

          {/* MENU */}
          <div className="flex items-center gap-4 lg:gap-10">
            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">
              <a
                href="#services"
                className="hover:text-blue-400 transition"
              >
                {t.services}
              </a>

              <a
                href="#approach"
                className="hover:text-blue-400 transition"
              >
                {t.approach}
              </a>

              <a
                href="#contact"
                className="hover:text-blue-400 transition"
              >
                {t.contact}
              </a>
            </nav>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("tr")}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition ${
                  lang === "tr"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-white/10"
                }`}
              >
                <img
                  src="/tr.svg"
                  alt="TR"
                  width={16}
                  height={16}
                  className="rounded-full object-cover"
                />
              </button>

              <button
                onClick={() => setLang("en")}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition ${
                  lang === "en"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-white/10"
                }`}
              >
                <img
                  src="/gb.svg"
                  alt="EN"
                  width={16}
                  height={16}
                  className="rounded-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-36 lg:pt-44 pb-24 lg:pb-32 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="text-blue-500 tracking-[0.28em] text-xs lg:text-sm uppercase mb-8">
              {t.heroTop}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl leading-tight font-light mb-10">
              {t.title}
            </h1>

            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-white"
              >
                {t.button1}
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border border-white/10 hover:border-blue-500 transition"
              >
                {t.button2}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
  <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-10 lg:p-16">
              <img
                src="/logo.png"
                alt="AlfaTeta"
                style={{
                  width: "320px",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 border-t border-white/10 px-4 lg:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-blue-500 mb-10">
            {t.servicesTitle}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-5">
                {t.servicesCard1}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.servicesText}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-5">
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
        className="py-24 border-t border-white/10 px-4 lg:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-blue-500 mb-10">
            {t.approachTitle}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-5">
                {t.approachCard1}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.approachText1}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-5">
                {t.approachCard2}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                {t.approachText2}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-2xl mb-5">
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
        className="py-24 border-t border-white/10 px-4 lg:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-blue-500 mb-10">
            {t.contactTitle}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-zinc-400 uppercase tracking-[0.25em] text-sm mb-5">
                EMAIL
              </div>

              <a
                href="mailto:info@alfateta.net"
                className="text-2xl lg:text-3xl break-all hover:text-blue-400 transition"
              >
                info@alfateta.net
              </a>
            </div>

            <div className="p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="text-zinc-400 uppercase tracking-[0.25em] text-sm mb-5">
                PHONE
              </div>

              <a
                href="tel:+905332254068"
                className="text-2xl lg:text-3xl hover:text-blue-400 transition"
              >
                +90 533 225 4068
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-5">
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