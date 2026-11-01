// Të gjitha të dhënat e faqes në një vend — ndryshojini vetëm këtu.

export const firm = {
  name: 'Kasaj Tako',
  suffix: 'Studio Ligjore',
  initials: 'KT',
  email: 'studio@kasajtako-law.com',
  address: 'Pallati Alva Construction, Rr. Haxhi Hysen Daliu',
  city: 'Tiranë 1000, Shqipëri',
  hours: 'E hënë – E premte, 09:00 – 18:00',
  nipt: '', // fshehur për momentin — shtojeni NIPT-in dhe shfaqet vetë në footer
}

// Numrat e kontaktit. `tel` është numri pa hapësira (për linkun tel:),
// `display` është ashtu si shfaqet në faqe.
export const phones = [
  { label: 'Telefon · WhatsApp', display: '+355 68 402 3376', tel: '+355684023376' },
]

export const navLinks = [
  { href: '#fushat', label: 'Fushat e praktikës' },
  { href: '#rreth', label: 'Rreth nesh' },
  { href: '#ekipi', label: 'Ekipi' },
  { href: '#kontakt', label: 'Kontakt' },
]

export const practiceAreas = [
  {
    title: 'E drejta tregtare dhe korporative',
    text: 'Themelimi i shoqërive, statute dhe marrëveshje ortakësh, kontrata tregtare, due diligence, ristrukturime dhe likuidim.',
  },
  {
    title: 'E drejta civile dhe pronësia',
    text: 'Regjistrimi dhe transferimi i pasurive të paluajtshme, mosmarrëveshje pronësie, trashëgimi, qira dhe detyrime kontraktore.',
  },
  {
    title: 'E drejta e punës',
    text: 'Kontrata individuale dhe kolektive, rregullore të brendshme, zgjidhje e marrëdhënies së punës dhe përfaqësim në konflikte pune.',
  },
  {
    title: 'E drejta familjare',
    text: 'Zgjidhje martese, kujdestaria dhe detyrimi për ushqim, ndarja e pasurisë bashkëshortore, marrëveshje paramartesore.',
  },
  {
    title: 'E drejta administrative dhe tatimore',
    text: 'Ankime ndaj akteve administrative, kontrolle dhe detyrime tatimore, licenca, leje dhe përfaqësim para institucioneve.',
  },
  {
    title: 'Mosmarrëveshjet dhe arbitrazhi',
    text: 'Përfaqësim në gjykata të të gjitha niveleve, negociata dhe marrëveshje jashtëgjyqësore, mediacion dhe arbitrazh tregtar.',
  },
]

export const process = [
  {
    title: '1. Konsulta e parë',
    text: 'Dëgjojmë çështjen, kërkojmë dokumentet bazë dhe vlerësojmë mundësitë ligjore.',
  },
  {
    title: '2. Plani dhe kostoja',
    text: 'Marrni me shkrim hapat e propozuar, afatet e pritshme dhe tarifën para se të nisim.',
  },
  {
    title: '3. Zbatimi',
    text: 'Përgatitja e akteve, negociatat dhe përfaqësimi në institucione ose gjykatë.',
  },
  {
    title: '4. Informimi i vazhdueshëm',
    text: 'Njoftim për çdo zhvillim, pa pyetur, dhe dokumentacion i arkivuar për klientin.',
  },
]

export const team = [
  {
    name: 'Emror Kasaj',
    role: 'Partner',
    email: 'studio@kasajtako-law.com',
  },
  {
    name: 'Gjergji Tako',
    role: 'Partner',
    email: 'studio@kasajtako-law.com',
  },
]
