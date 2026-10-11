# Advika Photo, Film & Graphics — Official Website

A luxury, cinematic, fully responsive photography & cinematography business website built for **Advika Photo, Film & Graphics**.

- **Brand Name:** Advika Photo, Film & Graphics
- **Tagline:** Capturing Moments, Creating Memories
- **Location:** Nimon, Taluka Sangamner, District Ahilyanagar, Maharashtra, India
- **Contact Numbers:** +91 95298 38773, +91 93092 85266
- **WhatsApp Booking:** +91 95298 38773
- **Instagram:** [@advika_visuals](https://www.instagram.com/advika_visuals/)

---

## 📸 Implemented Features & Architecture

### 1. Cinematic Header & Sticky Navigation
- **Sticky Navbar** with smooth transparent-to-dark backdrop blur transition on scroll.
- **Brand SVG Emblem Logo** with luxury gold camera shutter & recording indicator.
- Quick navigation links (`Home`, `About`, `Services`, `Portfolio`, `Our Films`, `Why Us`, `Contact`).
- **Direct Dial CTA** (`+91 95298 38773`) and primary **"Book Your Shoot"** button.
- Smooth mobile navigation drawer with backdrop blur.

### 2. High-Impact Cinematic Hero Section
- Full-screen high-definition wedding background with camera viewfinder HUD aesthetic (`REC [4K 60FPS]`, shutter speed, ISO 800, aperture framing markers).
- Headline: *"Every Frame Tells a Story"* with Playfair Display / Cormorant serif typography.
- Dual CTAs: **"Book Your Shoot"** (modal trigger) and **"Explore Our Work"** (smooth scroll).
- Verified highlight badges: 500+ Weddings, 4K UHD Films, Bespoke Editing, Drone Shoots.

### 3. Editorial About Studio
- *"Your Story. Our Vision. Timeless Memories."*
- Multi-image asymmetric collage featuring bridal portraiture and regal groom aesthetic.
- Camera gear showcase badge (Sony FX cinema line & G-Master glass).
- Studio statistics counter grid.

### 4. Comprehensive Services Suite
- Categorized interactive tabs:
  1. **Photography:** Wedding Photography, Pre-Wedding, Candid, Maternity, Baby & Birthday, Couple/Model, Traditional & Outdoor.
  2. **Films & Cinematography:** Cinematic Wedding Films, Pre-Wedding Film, Teasers & Highlights, Reels/Shorts, Drone Aerial, Traditional Video, Commercials.
  3. **Graphics & Editing:** Luxury Album Design, E-Invites, Photo Retouching, Video Editing, Branding & Logo, Posters/Banners.
- Every card includes an **"Enquire Now"** action that launches the booking modal with that specific service preselected.

### 5. Filterable Portfolio Gallery & Lightbox
- Category filters: *All Work, Weddings, Pre-Wedding, Cinematic Films, Couple Shoots, Events, Maternity & Baby, Creative Graphics*.
- Responsive masonry grid with hover zoom, category tags, and captions.
- **Full-featured Lightbox:**
  - Previous / Next navigation controls.
  - Keyboard shortcuts (`Escape` to close, `Arrow Left` / `Arrow Right` to navigate).
  - Direct *"Enquire This Style"* action inside the lightbox.

### 6. Cinematic Films Showcase & Video Preview
- Anamorphic film-strip borders.
- Featured 4K premiere showcase card with animated play button.
- Video preview modal showing bitrate specs and director inquiry option.

### 7. Why Choose Us (6 Pillars of Distinction)
1. Creative Storytelling
2. Professional Photography
3. Cinematic Video Production
4. Attention to Every Detail
5. Personalized Client Experience
6. High-Quality Editing

### 8. 4-Step Booking Process
- 01 Tell Us Your Story ➔ 02 Choose Your Shoot ➔ 03 Discuss Requirements ➔ 04 Capture Memories.

### 9. Client Testimonials Carousel
- Verified review placeholders with 5-star ratings, event classifications, and prev/next review switcher.

### 10. Contact & Studio Desk
- Direct click-to-call links for both numbers (+91 95298 38773 & +91 93092 85266).
- Direct WhatsApp chat link.
- Instagram handle link ([@advika_visuals](https://www.instagram.com/advika_visuals/)).
- Verified location details with Google Maps link.
- Quick direct WhatsApp message form.

### 11. Professional 3-Step WhatsApp Booking Modal
- Accessible from all major CTAs across the entire website.
- **Step 1 — Personal Details:** Full Name, 10-digit Indian mobile validation (+91), Email (optional), City/Village, Full Address.
- **Step 2 — Shoot Details:** Multi-service selector, Preferred Date (prevents past dates), Time/Muhurat, Venue Location, Duration dropdown, Budget estimate, Additional notes.
- **Step 3 — Review & WhatsApp Dispatch:** Form summary preview and one-click dispatch to `https://wa.me/919529838773` with fully formatted, URL-encoded enquiry message.

### 12. Floating WhatsApp Action Button
- Fixed bottom-right corner with gentle pulse animation and tooltip *"Book Your Shoot"*.

### 13. Luxury Dark Footer
- Film-strip perforation detailing, quick links, specialties list, studio desk information, and dynamic copyright year.

---

## 📁 Image Asset Directory & Replacement Guide

All photography and graphics assets are stored in:
```
public/assets/
```

### File Mapping Table:
| File Name | Purpose & Location | Recommended Dimensions |
| :--- | :--- | :--- |
| `logo.svg` | Primary brand emblem in navbar & footer | SVG or Transparent PNG (600x160) |
| `hero-wedding.jpg` | Main hero background image | 1920x1080 or higher (High Resolution) |
| `wedding-01.jpg` | Signature wedding photography & gallery | 1200x1600 (Portrait 3:4) |
| `wedding-02.jpg` | Traditional ceremonies & rituals | 1200x1600 (Portrait 3:4) |
| `prewedding-01.jpg`| Scenic outdoor sunset pre-wedding shoot | 1600x1066 (Landscape 3:2) |
| `bride-01.jpg` | Candid bridal portrait in About & Gallery | 1200x1500 (Portrait 4:5) |
| `groom-01.jpg` | Royal groom portrait in About collage | 1200x1200 (Square 1:1) |
| `cinematic-01.jpg` | 4K cinematic film thumbnail | 1920x1080 (16:9 Landscape) |
| `event-01.jpg` | Sangeet, celebration & events | 1600x1066 (3:2 Landscape) |
| `maternity-01.jpg`| Gentle maternity & baby milestone | 1200x1200 (Square 1:1) |
| `graphics-01.jpg` | Bespoke photo album & branding art | 1200x1200 (Square 1:1) |
| `camera.jpg` | Camera equipment showcase | 1600x1066 (3:2 Landscape) |

### How to Replace Images:
1. Export your client's high-resolution photos with JPEG/WebP compression (for fast load times).
2. Save the replacement image using the **exact filename** from the table above into `public/assets/`.
3. Vite will automatically update the website via Hot Module Replacement (HMR).

### How to Replace the Logo:
- If you have the official transparent PNG or SVG logo file from the banner:
  - Save it as `public/assets/logo.png` or `public/assets/logo.svg`.
  - In `src/components/Navbar.jsx` and `src/components/Footer.jsx`, update the `src` attribute if changing file format from SVG to PNG.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the development server
npm run dev

# 3. Build for production deployment
npm run build

# 4. Preview the production build
npm run preview
```

The site will run on `http://localhost:5173/`.

---

## 🎨 Color Palette Reference
- **Deep Cinematic Black:** `#090909`
- **Charcoal:** `#171717` / `#121212`
- **Luxury Gold:** `#D4AF37` (Gradient: `#FDE047` to `#AA7C11`)
- **Bold Photography Red:** `#E50914`
- **Warm Ivory:** `#F5F0E8`
