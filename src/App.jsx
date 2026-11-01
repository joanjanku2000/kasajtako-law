import { firm, phones, navLinks, practiceAreas, process, team } from './site.js'

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#kreu">
          <span className="logo__mark" aria-hidden="true">{firm.initials}</span>
          <span className="logo__text">
            <span className="logo__name">{firm.name}</span>
            <span className="logo__suffix">{firm.suffix}</span>
          </span>
        </a>
        <nav className="nav" aria-label="Menuja kryesore">
          {navLinks.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--gold btn--sm" href="#kontakt">
            Rezervo konsultë
          </a>
        </nav>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="kreu">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--gold">Tiranë · Shqipëri</p>
          <h1 className="hero__title">
            Përfaqësim ligjor i qartë, i besueshëm dhe pranë jush
          </h1>
          <p className="hero__lead">
            Studio Ligjore Kasaj Tako ofron konsulencë dhe përfaqësim ligjor për individë,
            familje dhe biznese — në marrëdhënie tregtare, çështje civile, pronësi, punësim
            dhe procedura gjyqësore. Çdo çështje trajtohet me diskrecion dhe me një plan të
            shpjeguar hap pas hapi.
          </p>
          <div className="hero__actions">
            <a className="btn btn--gold" href="#kontakt">Rezervo një konsultë</a>
            <a className="btn btn--ghost" href="#fushat">Shiko fushat e praktikës</a>
          </div>
        </div>

        <aside className="quickcard">
          <h2 className="quickcard__title">Kontakti i shpejtë</h2>
          <dl className="deflist">
            {phones.map((p) => (
              <DefItem key={p.display} label={p.label} value={p.display} />
            ))}
            <DefItem label="Email" value={firm.email} />
            <DefItem label="Adresa" value={<>{firm.address}<br />{firm.city}</>} />
            <DefItem label="Orari" value={firm.hours} />
          </dl>
        </aside>
      </div>
    </section>
  )
}

function DefItem({ label, value }) {
  return (
    <div>
      <dt className="deflist__label">{label}</dt>
      <dd className="deflist__value">{value}</dd>
    </div>
  )
}

/* ---------- Fushat e praktikës ---------- */
function PracticeAreas() {
  return (
    <section className="section" id="fushat">
      <div className="container">
        <p className="eyebrow">Fushat e praktikës</p>
        <h2 className="h2">Shërbime ligjore për individë dhe biznese</h2>
        <p className="section__lead">
          Punojmë në fushat më të kërkuara të së drejtës shqiptare. Nëse çështja juaj nuk
          përfshihet më poshtë, shkruajini — do t'ju orientojmë qartë, pa kosto për
          kontaktin e parë.
        </p>
        <div className="grid grid--cards">
          {practiceAreas.map((a) => (
            <article className="card" key={a.title}>
              <span className="card__rule" aria-hidden="true" />
              <h3 className="card__title">{a.title}</h3>
              <p className="card__text">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Rreth nesh ---------- */
function About() {
  return (
    <section className="section section--white" id="rreth">
      <div className="container split">
        <div className="split__main">
          <p className="eyebrow">Rreth nesh</p>
          <h2 className="h2">Një studio e vogël, me vëmendje të plotë për çdo klient</h2>
          <p className="prose">
            Studio Ligjore Kasaj Tako është ngritur me bindjen se puna ligjore e mirë nis me
            të shpjeguar: çfarë parashikon ligji, çfarë mund të pritet realisht dhe sa kohë e
            kosto kërkon çdo rrugë.
          </p>
          <p className="prose">
            Klientët e kontaktojnë studion drejtpërdrejt me avokatin që trajton çështjen e
            tyre. Komunikojmë në shqip, anglisht dhe italisht, dhe punojmë në Tiranë dhe në
            rrethe sipas nevojës së çështjes.
          </p>
          <p className="prose prose--note">
            [Zëvendësojeni këtë paragraf me historikun e vërtetë të studios: viti i
            themelimit, bashkëpunimet dhe arritjet kryesore.]
          </p>
        </div>

        <div className="panel">
          <h3 className="panel__title">Si punojmë</h3>
          <ul className="steps">
            {process.map((s) => (
              <li key={s.title}>
                <h4 className="steps__title">{s.title}</h4>
                <p className="steps__text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Ekipi ---------- */
function Team() {
  return (
    <section className="section" id="ekipi">
      <div className="container">
        <h2 className="h2 h2--tight">Ekipi</h2>
        <div className="grid grid--team">
          {team.map((m, i) => (
            <article className="person" key={i}>
              <div className="person__body">
                <h3 className="person__name">{m.name}</h3>
                <p className="person__role">{m.role}</p>
                <a href={`mailto:${m.email}`}>{m.email}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Kontakt ---------- */
function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="container split">
        <div className="contact__info">
          <p className="eyebrow eyebrow--gold">Kontakt</p>
          <h2 className="h2 h2--light">Telefononi për një konsultë</h2>
          <p className="contact__lead">
            Flasim drejtpërdrejt me avokatin që trajton çështjen. Telefononi brenda orarit të
            zyrës ose lini një mesazh dhe ju kthejmë përgjigje brenda një dite pune.
          </p>
          <dl className="deflist">
            <DefItem label="Adresa" value={<>{firm.address}<br />{firm.city}</>} />
            <DefItem label="Orari" value={firm.hours} />
          </dl>
        </div>

        <div className="phonecard">
          <h3 className="phonecard__title">Numrat e kontaktit</h3>

          <div className="phonelist">
            {phones.map((p) => (
              <div className="phonelist__row" key={p.display}>
                <span className="phonelist__label">{p.label}</span>
                <a className="phonelist__number" href={`tel:${p.tel}`}>
                  {p.display}
                </a>
              </div>
            ))}
            <div className="phonelist__row phonelist__row--last">
              <span className="phonelist__label">Email</span>
              <a className="phonelist__email" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          {firm.name} {firm.suffix}
        </p>
        <p className="footer__meta">
          {firm.nipt && `NIPT ${firm.nipt} · `}© {new Date().getFullYear()} Të gjitha të drejtat e rezervuara
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
