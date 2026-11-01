# Kasaj Tako Studio Ligjore — React

Faqja e dizenjuar, e shkruar si një projekt React + Vite.

## Si të nisni

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output në dist/ — ngarkojeni në Netlify, Vercel ose çdo hosting statik
```

## Struktura

```
index.html          fontet (Lora + Inter), <title>, meta description
src/main.jsx        pika e nisjes
src/index.css       i gjithë stili — ngjyrat janë variabla CSS në :root
src/site.js         TË GJITHA tekstet/të dhënat: kontakti, fushat, ekipi
src/App.jsx         seksionet: Header, Hero, PracticeAreas, About, Team, Contact, Footer
```

## Çfarë duhet të plotësoni

1. `src/site.js` — numrat e telefonit (`phones`: `display` = si shfaqet, `tel` = numri pa
   hapësira për linkun `tel:`), emaili, adresa, NIPT, emrat e avokatëve.
2. Seksioni i ekipit është pa foto — vetëm emri, roli, përshkrimi dhe emaili.
3. Nuk ka formular kontakti — kontakti bëhet me telefon dhe email (linke `tel:` dhe
   `mailto:`, që hapen direkt nga telefoni).

## Shënime

- Ngjyrat ndryshohen në një vend — `:root` në `index.css` (`--navy`, `--gold`, ...).
- Pa varësi të tjera: vetëm React. Pa Tailwind, pa librari UI.
- Faqja punon edhe në telefon (flex-wrap + grid auto-fit, pa media queries).
- Elementet janë semantike (`<button>`, `<label>`, `<a href>`) për akses dhe SEO.

## Deploy

Faqja është e publikuar në https://kasajtako-law.com (VPS Hostinger, nginx + CloudPanel).

```bash
./deploy.sh
```

Skripti bën `npm run build`, ngarkon `dist/` me rsync te
`/home/kasajtako/htdocs/kasajtako-law.com` dhe pastron cache-n e Varnish.
Kërkon akses SSH si `root@kasajtako-law.com`.
