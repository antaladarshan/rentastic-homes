# Rentastic Homes — Google Stitch Prompt Pack

> Brand: **Rentastic Homes** · Tagline: *"Checked In, Worries Out!"*
> Reference structure: stayflh.com · Audience: students (PG) + working professionals (Residences)
> Phase 1 = **static**, no backend. Every Book/Enquire/Submit → **WhatsApp** with the selected details.

---

## How to use this pack in Google Stitch

1. Open Google Stitch (stitch.withgoogle.com) → new **Web** project.
2. **First**, paste **Phase 0 (Global Design System)** so Stitch learns the theme, header, and footer.
3. For each page: **upload the matching reference screenshot**, then paste that phase's prompt.
4. After it generates, tell Stitch: *"also generate the responsive mobile layout."*
5. Reuse the **shared Header & Footer** (defined in Phase 0) on every page for consistency.
6. When finalized, find-and-replace the placeholders:
   `[City]`, `[Area]`, `Property One/Two/Three/Four`, `91XXXXXXXXXX`, `9XXXXXXXXX`, `hello@rentastichomes.com`.

**Reference screenshot map:** Phase 1 ← Homepage shot · Phase 3 ← Property (Terrazzo) shot · Phase 4 ← City Guide shot.
Phases 2, 5, 6, 7, 8 have no screenshot — the prompt text is self-sufficient (the layouts are described in full).

> Each prompt describes an **original layout inspired by** the reference's section order. All copy here is
> generic placeholder text — replace with your own wording before launch.

---

## Phase 0 — Global Design System  *(paste this FIRST, once)*

```
Create a design system for a premium PG / co-living brand website called
"Rentastic Homes" (tagline: "Checked In, Worries Out!"). Warm, cozy, trustworthy,
modern. Audience: college students and young working professionals in India.

COLORS (from the brand logo):
- Primary / accent: golden-amber  #D9943F  (buttons, highlights, active states)
- Secondary accent: warm tan      #E0B070
- Deep brown (text/headlines/icons/footer): #3B2412
- Soft cream page background:      #FBF6EE  and  #F7F1E8
- Pure white card surfaces:        #FFFFFF
- Success/WhatsApp green for WhatsApp buttons: #25D366

TYPOGRAPHY:
- Headings: a friendly rounded display font (e.g. Poppins / Quicksand), bold,
  with selected accent words colored golden-amber (#D9943F).
- Body: clean sans-serif (e.g. Inter), dark brown on cream.

COMPONENTS / STYLE:
- Rounded-pill buttons. Primary = golden-amber fill, dark-brown or white label.
  Secondary = outline brown. A dedicated green "Book on WhatsApp" pill where relevant.
- Cards: soft rounded corners (16px), subtle shadow, image-top.
- Generous spacing, large rounded hero images, soft section dividers.
- A small house-with-key logo mark in the top-left.

GLOBAL BEHAVIOR (static, no backend):
- Every "Enquire Now" / "Book Now" / "Submit" button opens a WhatsApp chat link:
  https://wa.me/91XXXXXXXXXX?text=<pre-filled message with the user's selected
  property, room/sharing type, and name>. Forms collect values client-side and
  build that link — there is no database.

Also produce the two SHARED components below, used on every page:

HEADER (sticky):
- Left: Rentastic Homes logo mark + wordmark.
- Center nav: Home, About Us, Students (dropdown: PG for Girls, PG for Boys),
  Residences (dropdown: For Professionals), City Guide, Contact.
- Right: golden-amber "Enquire Now" pill + a small green WhatsApp icon button.

FOOTER (dark brown #3B2412 background, cream text):
- Column 1: logo + tagline "Checked In, Worries Out!" + social icons (Instagram,
  Facebook, LinkedIn, YouTube).
- Column 2 "Quick Links": Home, About Us, Students, Residences, City Guide, Contact.
- Column 3 "Our Places": [Area 1], [Area 2], [Area 3], [Area 4].
- Column 4 "Our Properties": Property One, Property Two, Property Three, Residences.
- Column 5 "Contact": [Address, City], +91 9XXXXXXXXX, hello@rentastichomes.com.
- Bottom bar: copyright + Refund / Cancellation / Privacy / Terms links + a top
  "Choose your Stay" strip with two pills: Students | Residences.
```

---

## Phase 1 — Homepage  *(reference: Homepage screenshot)*

```
Design the HOMEPAGE for Rentastic Homes using the Phase 0 design system, header,
and footer. Desktop web, top to bottom:

1. HERO: full-width warm image of students/young professionals. Big headline
   "You Focus on Living, We'll Handle the Rest." with "Living" in golden-amber.
   Subtext + golden "Enquire Now" pill. Two rounded preview cards below the hero
   labeled "PG for Girls" and "PG for Boys".
2. STATS STRIP: "A Growing Living Ecosystem" + 3 stat tiles on cream cards:
   "1000+ Happy Residents", "10+ Years", "37+ Rooms Managed".
3. "Choose What Works For You": 4 property cards (Property One/Two/Three/Four) each
   with image, name overlay, area label, and a "View detail" link.
4. "What Are You Really Looking For?": 4 image cards with empathetic captions
   (e.g. "First time away from home?", "Want peace of mind for parents?").
5. "Life @ Rentastic": horizontal gallery band of lifestyle photos.
6. "Comfortable Living, Done Right": 3 large feature cards (Comfy Rooms,
   Interactive Spaces, Study/Work Zones) with captions.
7. "Everything Nearby You": filter chips (Cafes, Healthcare, Markets,
   Colleges & Offices) + a row of place cards. "View more" link.
8. "Explore Your Space Before You Move In" banner with CTA.
9. TESTIMONIALS "Voices of Our Community": quote cards + a 4.4-star Google rating badge,
   golden-amber section background.
10. "Our Partners": 3 partner/college logos on a light strip.
11. ENQUIRY FORM "Find Your Home Away From Home": fields Name, Phone, Email,
    "Enquiry For" (Students/Residences), Property (dropdown), Location (dropdown),
    and an "Enquire Now" button that opens WhatsApp pre-filled with these values.
12. FAQ accordion "Frequently Asked Questions" (6 items).
Then header + footer. Also generate the responsive mobile layout.
```

---

## Phase 2 — Listing / Category Page  *(PG for Girls / PG for Boys / Residences)*

```
Design a PROPERTY LISTING / CATEGORY page for Rentastic Homes using the Phase 0
system, header, footer. This template is reused for "PG for Girls", "PG for Boys",
and "Residences for Professionals" (change the copy/audience per use).

Top to bottom:
1. HERO: headline "#1 PG for Girls in [City]" (variant: Boys / Residences),
   subtext "Fully furnished, secure, thoughtfully managed living in [City]",
   golden "Enquire Now" pill.
2. "Explore Our Stays": 2-3 large property cards (Property One, Property Two),
   each with image, "Limited Seats Available" badge, short description, and two
   buttons: "View detail" and a green "Book on WhatsApp".
3. "Designed For You" amenities grid: 11 small icon+label tiles (AC Rooms, Wi-Fi,
   Nutritious Meals, Housekeeping, Laundry, Attached Washroom, Wardrobe, Study Table,
   Hot Water, Gym, Hangout Zones).
4. ENQUIRY FORM "Find Your Home Away From Home" (same fields/WhatsApp behavior as homepage).
5. FAQ accordion (8 items, relevant to this audience).
6. "Choose your Stay" two-pill strip (Students | Residences).
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 3 — Property Detail Page  *(reference: Property screenshot)*

```
Design a single PROPERTY DETAIL page for Rentastic Homes (e.g. "Property One")
using the Phase 0 system, header, footer. Top to bottom:

1. IMAGE GALLERY: one large image left + 4 smaller images right in a rounded grid,
   with a "See all photos" button.
2. TITLE BLOCK: property name "PROPERTY ONE", chips for sharing types (Single /
   Double / Triple Sharing), a "Limited Seats Available" badge, location line with
   pin icon, phone line. On the right, a sticky ENQUIRY CARD (Name, Contact No,
   Email, "Enquiry Now" button -> WhatsApp pre-filled with property name).
3. TRUST ROW: 3 tiles — "Residents Feel Home", "4.5/5 stars", "500+ Reviews".
4. "About the Property": paragraph + "View more".
5. "Choose Your Room": 3 horizontal room cards (Single / Double / Triple Sharing),
   each with thumbnail, description, a row of amenity icons, and an orange
   "Enquire Now" button that opens WhatsApp pre-filled with property + room type.
6. "Everything You Need, Inside Your Place": tabbed amenities (Room Amenities |
   Property Amenities) as checklists.
7. "Find Us": embedded map placeholder + "View on map" button.
8. "Everything Nearby You": filter chips + nearby place cards (reuse homepage style).
9. "Policies & Guidelines": accordion (Cancellation Policy, Refund Policy).
10. TESTIMONIALS carousel "Voices of Our Residents".
11. ENQUIRY FORM "Find Your Home Away From Home".
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 4 — City Guide Page  *(reference: City Guide screenshot)*

```
Design a CITY GUIDE page for Rentastic Homes (e.g. "[City] 2026") using the Phase 0
system, header, footer. Top to bottom:

1. HERO: wide cityscape/landmark image, overlay headline "Reside and Explore [City]"
   + small subtitle, "Read more" pill.
2. STICKY SUB-NAV chips: About | Best Accommodation | Living in [City] | Conclusion | FAQs.
3. "About [City]": intro paragraph + "View more". Sub-blocks: Geography, Weather.
4. "Best Accommodation in [City]": left = map placeholder with pins; right = 3 small
   property cards (Property One/Two/Three) each with a "Book" link.
5. "Top Localities in [City]": tabbed area chips ([Area 1]..[Area 5]) each revealing a
   paragraph about living there.
6. "Living in [City]": accordion (Metro, Bus/Transit, Local transport) with an image.
7. "Best Restaurants & Cafes": grid of 8 place cards with arrow buttons + "View more".
8. "Tourist Attractions": grid of 8 attraction cards + "View more".
9. CONCLUSION: golden-amber full-width band with a closing paragraph.
10. FAQ accordion (5 items).
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 5 — About / Our Story Page

```
Design an ABOUT / OUR STORY page for Rentastic Homes using the Phase 0 system,
header, footer. Top to bottom:

1. HERO: headline "Feels Like Home" + tagline "Checked In, Worries Out!".
2. "Where It Started. Where It's Going.": origin-story narrative + image + "Read more".
3. "When Consistency Became Our Foundation": growth/expansion paragraph.
4. MISSION & VISION: two-column cards.
5. "What Matters When You're Away From Home": 6 value cards with icons — Stability,
   Safety, Clean Spaces, Dependable Daily Living, Comfort, Community & Privacy Balance.
6. CLOSING tagline band on cream.
7. ENQUIRY FORM "Find Your Home Away From Home".
8. "Choose your Stay" two-pill strip.
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 6 — Contact Us Page

```
Design a CONTACT US page for Rentastic Homes using the Phase 0 system, header, footer.
Top to bottom:

1. HEADER BLOCK: "Contact Us" + "Find Your Space at Rentastic Homes", with phone
   +91 9XXXXXXXXX and email hello@rentastichomes.com, plus a big green
   "Chat on WhatsApp" pill (opens wa.me/91XXXXXXXXXX).
2. "Get in Touch": two columns — left = contact form (Name, Phone, Email, Property
   interested in [dropdown], Message) with a "Submit" button that opens WhatsApp
   pre-filled with the entered details; right = contact details + a map placeholder.
3. "Choose your Stay" two-pill strip (Students | Residences).
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 7 — Location / Area Page  *(e.g. "PG in [Area]")*

```
Design a LOCATION / AREA landing page for Rentastic Homes (e.g. "PG in [Area], [City]")
using the Phase 0 system, header, footer. Reuse the Phase 2 listing template but make
it area-specific:

1. HERO: "Best PG in [Area], [City]" + area-focused subtext + "Enquire Now" pill.
2. "Why Live in [Area]": 3-4 benefit tiles (near colleges/offices, transit, food, safety).
3. "Our Stays in [Area]": property cards (filtered to this area) with "View detail" +
   green "Book on WhatsApp".
4. Amenities grid (reuse Phase 2).
5. SHORT area paragraph + map placeholder.
6. ENQUIRY FORM + FAQ (4 items).
Then footer. Also generate the responsive mobile layout.
```

---

## Phase 8 — Legal / Policy Pages  *(Refund, Cancellation, Privacy, Terms)*

```
Design a simple LEGAL / POLICY page template for Rentastic Homes using the Phase 0
system, header, footer. One centered content column on cream:
- Page title (e.g. "Cancellation Policy").
- "Last updated" line.
- A clean readable stack of headings + paragraphs + bullet lists for legal text
  (placeholder body).
- A small "Questions? Chat on WhatsApp" green pill at the bottom.
Then footer. Reuse this template for Refund Policy, Privacy Policy, and Terms &
Conditions. Also generate the responsive mobile layout.
```

---

## WhatsApp link spec  *(for the build phase, after Stitch export)*

Static forms build the link client-side. Example target:

```
https://wa.me/91XXXXXXXXXX?text=Hi%20Rentastic%20Homes%2C%20I%27m%20interested%20in%20{Property}%20-%20{RoomType}.%20Name%3A%20{Name}%2C%20Phone%3A%20{Phone}.
```

A tiny JS snippet reads the form's selected values, URL-encodes them, and sets the
button's `href` before opening WhatsApp. No server required.

```js
function buildWhatsApp({ property = '', roomType = '', name = '', phone = '' }) {
  const msg = `Hi Rentastic Homes, I'm interested in ${property} - ${roomType}. ` +
              `Name: ${name}, Phone: ${phone}.`;
  return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`;
}
```

---

## Placeholder checklist (replace before launch)

| Placeholder | Replace with |
|---|---|
| `91XXXXXXXXXX` | WhatsApp business number (country code + number, no `+` or spaces) |
| `9XXXXXXXXX` | Display phone number |
| `hello@rentastichomes.com` | Real contact email |
| `[City]` | Operating city |
| `[Area 1..5]` / `[Area]` | Real localities / neighborhoods |
| `Property One..Four` | Actual property names |
| `[Address, City]` | Office address |

---

## Reference site — full page inventory (for your own sitemap)

1. Homepage / Students landing — *Phase 1*
2. Listing: PG for Girls · PG for Boys · Residences — *Phase 2*
3. Property detail (one per property) — *Phase 3*
4. City Guide — *Phase 4*
5. About / Our Story — *Phase 5*
6. Contact Us — *Phase 6*
7. Location/Area pages (one per locality) — *Phase 7*
8. Legal: Refund · Cancellation · Privacy · Terms — *Phase 8*

## Next (optional) phase
Once Stitch designs are exported, convert the HTML/CSS into a static site in this folder
(`D:\Darshan\Rentastic-Homes\`), wire the WhatsApp snippet into every form, and drop in the
real logo, photos, and placeholder replacements.
```
