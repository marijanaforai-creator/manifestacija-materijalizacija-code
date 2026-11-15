"use client";

import { useState } from "react";
import {
  ArrowRight, Sparkles, Flower2, Brain, Wallet, MoonStar, Compass,
  BookOpen, ShoppingBag, CircleUserRound, Menu, X, ChevronRight,
  HeartPulse, Target, Sun, LockKeyhole, Play
} from "lucide-react";

const areas = [
  { icon: Sparkles, title: "Manifestacija i materijalizacija", desc: "Pretvori nameru u jasan pravac, a pravac u konkretne korake.", tag: "Tvoj početak", tone: "lilac" },
  { icon: MoonStar, title: "Integracija senke", desc: "Upoznaj obrasce, unutrašnje konflikte i delove sebe koje često zanemaruješ.", tag: "Samospoznaja", tone: "rose" },
  { icon: Compass, title: "Arhetipovi ličnosti", desc: "Istraži simbole i uloge koje ti pomažu da razumeš svoje izbore.", tag: "Istraživanje", tone: "gold" },
  { icon: Brain, title: "Unutrašnji dijalog", desc: "Oblikuj podržavajući unutrašnji govor koji je realan i primenljiv.", tag: "Svakodnevna praksa", tone: "blue" },
  { icon: HeartPulse, title: "Nervni sistem i telo", desc: "Nežne vežbe pažnje i uzemljenja za više prisutnosti i stabilnosti.", tag: "Regulacija", tone: "green" },
  { icon: Wallet, title: "Novac i izobilje", desc: "Istraži uverenja o novcu, odnos prema sigurnosti i sledeće finansijske poteze.", tag: "Posebna oblast", tone: "gold" },
  { icon: Target, title: "Poslovni uspeh", desc: "Poveži viziju sa ponudom, odlukama, planom i merljivom akcijom.", tag: "Realizacija", tone: "lilac" },
  { icon: BookOpen, title: "Biblioteka znanja", desc: "Tekstovi, vodiči i praktični materijali za lični i poslovni razvoj.", tag: "Učenje", tone: "blue" }
];

const navItems = [
  ["Početna", "home"], ["Moj razvoj", "progress"], ["AI vodič", "guide"],
  ["Novac i izobilje", "money"], ["Biblioteka", "library"], ["Prodavnica", "shop"]
];

export default function Home() {
  const [active, setActive] = useState("Početna");
  const [menuOpen, setMenuOpen] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <main className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Sparkles size={19} strokeWidth={1.7} /></div>
          <div><span className="brand-name">manifestacija</span><span className="brand-sub">MATERIJALIZACIJA CODE</span></div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Zatvori meni"><X size={20}/></button>
        </div>
        <div className="profile-card">
          <div className="profile-avatar">M</div>
          <div><strong>Moj prostor</strong><span>Dobro došla nazad</span></div>
          <ChevronRight size={16} className="muted-icon"/>
        </div>
        <span className="side-label">TVOJ PROSTOR</span>
        <nav className="side-nav">
          {navItems.map(([label, key], i) => {
            const Icon = [Sun, Compass, Sparkles, Wallet, BookOpen, ShoppingBag][i];
            return <button key={key} className={active === label ? "nav-link active" : "nav-link"} onClick={() => { setActive(label); setMenuOpen(false); }}>
              <Icon size={17} strokeWidth={1.8}/><span>{label}</span>{label === "AI vodič" && <span className="nav-dot"/>}
            </button>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="quote-mark">“</div>
          <p>Promena počinje onda kada postaneš svesna svojih izbora.</p>
          <span>PROSTOR ZA TVOJ RAST</span>
        </div>
        <div className="sidebar-footer"><LockKeyhole size={13}/> Tvoj privatni prostor <span>•</span> 0.1</div>
      </aside>

      {menuOpen && <button className="mobile-scrim" onClick={() => setMenuOpen(false)} aria-label="Zatvori meni"/>}

      <section className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Otvori meni"><Menu size={21}/></button>
          <div className="breadcrumb">TVOJ PROSTOR <ChevronRight size={13}/> <strong>{active.toUpperCase()}</strong></div>
          <div className="top-actions"><span className="today-label">Tvoj prostor za svesne promene</span><div className="top-avatar">M</div></div>
        </header>

        <div className="content-wrap">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"/> PROSTOR ZA SVESNU PROMENU</div>
              <h1>Dobro došla u svoj<br/><em>prostor mogućnosti.</em></h1>
              <p className="welcome-copy">Ovde ne moraš da imaš sve odgovore. Dovoljno je da počneš od jednog iskrenog uvida i jednog sledećeg koraka.</p>
              <button className="primary-button" onClick={() => setStarted(true)}>Započni svoj put <ArrowRight size={17}/></button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
              <div className="hero-glow"/>
              <div className="moon-shape"/>
              <div className="star star-a">✦</div><div className="star star-b">✧</div><div className="star star-c">·</div>
              <div className="hero-caption">INTENCIJA <span>·</span> SVESNOST <span>·</span> AKCIJA</div>
            </div>
          </section>

          {started && <div className="notice"><Sparkles size={16}/> Tvoj početak je jednostavan: izaberi oblast koja ti je danas najvažnija.</div>}

          <section className="daily-card">
            <div className="daily-icon"><Flower2 size={23} strokeWidth={1.5}/></div>
            <div className="daily-text"><span className="section-kicker">TVOJ MALI DNEVNI FOKUS</span><h2>Šta danas želiš da promeniš — i koji je najmanji korak?</h2><p>Ne tražimo savršen plan. Tražimo sledeći korak koji zaista možeš da napraviš.</p></div>
            <button className="text-button" onClick={() => setActive("AI vodič")}>Istraži sa AI vodičem <ArrowRight size={16}/></button>
          </section>

          <section className="areas-section">
            <div className="section-heading"><div><span className="section-kicker">ISTRAŽI SVOJE OBLASTI</span><h2>Temelji tvog razvoja</h2></div><span className="section-count">08 OBLASTI</span></div>
            <div className="areas-grid">
              {areas.map((area, i) => {
                const Icon = area.icon;
                return <button className="area-card" key={area.title} onClick={() => setActive(area.title)}>
                  <div className={`area-icon ${area.tone}`}><Icon size={20} strokeWidth={1.7}/></div>
                  <span className="area-tag">{area.tag}</span>
                  <h3>{area.title}</h3><p>{area.desc}</p>
                  <span className="card-arrow"><ArrowRight size={16}/></span>
                </button>;
              })}
            </div>
          </section>

          <section className="bottom-grid">
            <div className="guide-card">
              <div className="guide-orb"><Sparkles size={25}/></div>
              <div><span className="section-kicker">TVOJ AI SAPUTNIK</span><h2>Razgovor koji počinje od tebe.</h2><p>Jedno pitanje. Jedan uvid. Jedan korak koji možeš da primeniš.</p><button className="light-button" onClick={() => setActive("AI vodič")}>Upoznaj AI vodiča <ArrowRight size={16}/></button></div>
            </div>
            <div className="library-card">
              <div className="library-top"><BookOpen size={19}/><span className="section-kicker">BIBLIOTEKA</span></div>
              <h2>Znanje koje postaje praksa.</h2><p>Vodiči, vežbe i sadržaji koji podržavaju tvoj sledeći korak.</p>
              <button className="library-link" onClick={() => setActive("Biblioteka")}>Otvori biblioteku <ArrowRight size={16}/></button>
            </div>
          </section>
          <footer className="page-footer"><span>MANIFESTACIJA — MATERIJALIZACIJA CODE</span><span>SVESNOST · ODGOVORNOST · REALIZACIJA</span></footer>
        </div>
      </section>
    </main>
  );
}