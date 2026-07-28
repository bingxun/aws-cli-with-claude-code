# Minerva Strategies — Accounting Firm Website

A complete, production-ready marketing website for a Singapore corporate services and
accounting firm. Static HTML, CSS and vanilla JavaScript — no build step, no framework,
no dependencies to install.

The design brief drew on three reference sites: [Osome](https://osome.com/sg/company-secretary-singapore/)
for the conversion-focused landing page structure, [AG Singapore](https://ag-singapore.com/)
for the restrained professional-services tone, and
[3E Accounting](https://www.3ecpa.com.sg/fees/) for the fully itemised published fee schedule.

---

## Contents

| Path | What it is |
|---|---|
| `index.html` | Home — hero, value props, service grid, onboarding steps, package pricing, testimonials, FAQ |
| `services.html` | Six practice areas in detail, each deep-linked (`#incorporation`, `#secretarial`, `#accounting`, `#tax`, `#payroll`, `#advisory`) |
| `pricing.html` | Three annual packages plus the full itemised fee schedule across seven categories |
| `about.html` | Firm story, working principles, credentials, statistics |
| `contact.html` | Quote request form, office details, pre-contact FAQ |
| `assets/css/styles.css` | The entire stylesheet — design tokens at the top |
| `assets/js/main.js` | Mobile nav, scroll reveals, pricing category scrollspy, form handler |
| `assets/img/logo.svg` | Full lockup — compass mark plus wordmark |
| `assets/img/logo-mark.svg` | Compass mark alone, used in the header, footer and as the favicon |
| `assets/img/accreditations/` | Seven **placeholder** accreditation marks — see below |

---

## Running it

There is nothing to build. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Publishing on GitHub Pages

1. Push this branch to GitHub.
2. Repository **Settings → Pages**.
3. Under *Build and deployment*, choose **Deploy from a branch**.
4. Select the branch and the `/ (root)` folder, then **Save**.

The site is served from the repository root, so no further configuration is required.

---

## Design system

The palette is derived from the supplied logo — a faceted gold compass rose on ivory.
All tokens live in `:root` at the top of `assets/css/styles.css`; change them there and
the whole site follows.

| Token | Value | Used for |
|---|---|---|
| `--gold` | `#a5853c` | Primary actions, rules, accents |
| `--gold-light` | `#c9ac6e` | Highlights, the lighter compass facets |
| `--gold-deep` | `#8a6d2c` | Link and hover states |
| `--gold-wash` | `#f6f1e5` | Tinted callouts and table hovers |
| `--ink` | `#12171f` | Headings |
| `--body` | `#4c5464` | Body copy |
| `--navy` | `#101820` | Dark CTA bands, table headers, footer |
| `--line` | `#e7e2d6` | Borders and dividers |

**Typography** — Cormorant Garamond for display headings (matching the wordmark),
Inter for body and UI. Both load from Google Fonts with serif and system-sans fallbacks,
so the page still reads correctly if the fonts are blocked.

**Layout** — a `1180px` maximum content width, CSS Grid with `auto-fit` throughout, and
a single breakpoint at `900px` where the navigation collapses to a toggle. Long fee tables
scroll horizontally inside their own container rather than pushing the page sideways.

---

## The logo

The supplied artwork was rebuilt as vector SVG so it stays crisp at every size and can be
recoloured through CSS. The mark is an eight-pointed compass rose: four long cardinal
points at radius 82 and four short intercardinal points at radius 52, each split into a
light and a dark facet from the centre.

To use the original raster artwork instead, drop it into `assets/img/` and update the
`src` in the header and footer `.brand` blocks on all five pages, plus the
`<link rel="icon">` in each `<head>`. The SVG is recommended for the favicon regardless —
it scales without artefacts.

---

## Accreditation badges — action required before publishing

The "Our qualifications" section sits directly below the hero on the home page, and
again under *Credentials* on the About page. It carries seven badges: ACRA, ISCA, MOM,
IMDA, IRAS, QuickBooks and Xero.

**The marks in `assets/img/accreditations/` are placeholders, not the real logos.** Each
is a plain typographic setting of the body's short name over a simple geometric glyph —
deliberately *not* a reproduction of anyone's logotype. Those logos are the trademarks of
the organisations concerned, and displaying them requires permission from each body.

Hand-drawn approximations were tried and rejected: an inexact version of a regulator's
mark looks worse than an honest placeholder and misrepresents the authority's brand. Use
the official files or the placeholders — nothing in between.

### Adding the official artwork

Images pasted into a chat session are not written to the session filesystem, and this
environment's network policy blocks the sites that host logo files. The reliable route is
GitHub itself:

1. On GitHub, open `assets/img/accreditations/` and choose **Add file → Upload files**.
2. Drag the official logo in, named `acra`, `isca`, `mom`, `imda`, `iras`, `quickbooks`
   or `xero`, and commit.
3. SVG drops straight in. A PNG needs its one `src` updated in `index.html` and
   `about.html` — no CSS change, since the slot sizes on height and the aspect ratio
   supplies the width.

Before publishing, also obtain permission to display each mark — ACRA, ISCA, IMDA and
Xero all publish brand or partner guidelines governing use — and fill in your real
registration numbers. Two are currently masked: `FA20XXXXXX` for the ACRA filing agent
licence and `XXXXXXXX` for the MOM employment agency licence. Both appear in `index.html`
and `about.html`.

Only claim an accreditation the firm actually holds — each of these is verifiable on the
issuing authority's public register, which is exactly why the badges carry weight.

The badge slot is fixed at 54px tall and the width follows each mark's aspect ratio, so
logos of differing proportions still align on a common baseline.

## Pricing content

The fee schedule follows Singapore market conventions and is structured the way
established local firms publish theirs:

- **Three annual packages** — Essential (S$95/mo) for dormant and pre-revenue companies,
  Growth (S$225/mo) for trading companies, Scale (S$470/mo) for GST-registered companies
  with staff.
- **Seven itemised categories** — incorporation, corporate secretarial, accounting,
  corporate tax, GST, payroll and HR, and other services. Each is a sortable-looking
  table with the service, a short scope note, the fee and its billing basis.

Figures were set against published 2026 Singapore market rates — corporate secretarial
retainers cluster between S$300 and S$1,500 a year, with corporate actions such as
resolutions (S$50–100) and share transfers (S$100–200) billed per event. Regulatory
thresholds referenced in the copy — the S$1 million GST registration threshold, the 9% GST
rate, the 17% corporate tax rate, the small-company audit exemption test, and the six-month
deadline to appoint a company secretary — reflect the rules in force as at July 2026.

> **These are sample figures for a fictional firm.** Replace them with your own before
> publishing. Each page footer and the pricing page callout carry a visible note saying so;
> remove those notes once the numbers are real.

---

## Customising

**Firm details.** Name, address, phone and email are repeated in the header and footer of
each page. Search and replace `Minerva Strategies`, `hello@minervastrategies.sg`,
`+65 6000 1234` and the `10 Anson Road` address block.

**Prices.** All in `pricing.html`, plus the three package cards echoed on `index.html` —
update both so they do not drift apart.

**The contact form.** It currently runs against a demo handler in `assets/js/main.js` that
shows a confirmation and clears the fields; nothing is sent anywhere. To receive
submissions, point the `<form>` at an endpoint and remove the `data-demo="true"` attribute:

```html
<form class="form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

Netlify Forms, Formspree and a custom handler all work the same way — the field `name`
attributes are already set.

**Analytics.** No trackers are included. Add your snippet before `</body>` on each page.

---

## Accessibility and performance

- Skip-to-content link, landmark elements, and a labelled primary navigation
- Every form field carries an associated `<label>`; the status message is an `aria-live` region
- Visible focus rings with a gold ring on inputs, `aria-current="page"` on the active nav item
- Decorative logo images use empty `alt`; the SVGs carry `role="img"` and a label
- Scroll animations are disabled entirely under `prefers-reduced-motion: reduce`
- No JavaScript dependencies; the site is fully readable with JS off, apart from the
  mobile menu toggle and scroll reveals

---

## Browser support

Current versions of Chrome, Firefox, Safari and Edge. `IntersectionObserver` drives the
scroll reveals and the pricing scrollspy, with a graceful fallback that simply shows all
content where it is unavailable.
