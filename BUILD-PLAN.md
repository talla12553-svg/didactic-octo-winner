# MASTER BUILD PLAN
## SENE FAST FOOD — *Keur Serigne Saliou*
### Senegalese Kitchen · 151 W 116th Street · West Harlem, New York

---

> **Document type:** Creative brief + complete implementation instructions for Claude Code
> **Deliverable:** Award-calibre, Awwwards-quality cinematic static website
> **Stack:** HTML · CSS · Vanilla JavaScript · GSAP · ScrollTrigger · Lenis
> **Status:** Approved build specification

---

# PART ONE — THE CREATIVE BRIEF

---

## 1. WEBSITE OVERVIEW

**Sene Fast Food** is a Senegalese kitchen on 116th Street in West Harlem — the
spine of Little Senegal, the most concentrated West African community in the
United States. The shop is the work of **Talla Sylla**, who started out selling
food on the street and built it, plate by plate, into a neighbourhood
institution that opens at 9 in the morning and does not close until midnight.

The website is not a menu board with a domain name. It is a **cinematic scroll
document** — a short film about a plate of thieboudienne and the man who
carries Dakar across an ocean and sets it down on 116th Street.

| Field | Value |
| --- | --- |
| **Brand** | Sene Fast Food — *Keur Serigne Saliou* |
| **Owner / face of the brand** | Talla Sylla |
| **Category** | Local business — full-service Senegalese restaurant |
| **Location** | 151 W 116th Street, Harlem, New York, NY 10026 |
| **Hours** | Every day, 9:00 AM – 12:00 AM |
| **Phone** | (917) 569-6057 · alt (917) 569-6871 |
| **Kitchen** | Halal · dine-in · takeout · delivery |
| **Primary CTA** | **Get Directions** → Google Maps |
| **Secondary CTA** | Call to order |
| **Audience** | The West African community of Harlem first; adventurous New Yorkers and food travellers second |
| **Languages of the brand** | English primary, Wolof and French woven through as texture |

### The single sentence

> **Sene Fast Food serves Senegal — breakfast, lunch and dinner — to West Harlem.**

### What the site must do

1. Make a stranger hungry inside four seconds.
2. Make a Senegalese person in Harlem feel **seen** — this is *keur*, this is home.
3. Get a body through the door at 151 W 116th Street.

Everything else is decoration.

---

## 2. CORE POSITIONING

### Positioning statement

> For the African community of West Harlem and for every New Yorker who wants
> the real thing, **Sene Fast Food** is the Senegalese kitchen that cooks the
> way home cooks — slow rice, whole fish, charcoal dibi — and keeps the door
> open from nine in the morning until midnight. Unlike a fast-casual "African
> bowl" concept, Sene is not an interpretation. It is the food, made by the
> people whose food it is.

### The competitive truth

Most restaurant sites in this category do one of two things: they go
**cheap-and-functional** (a photo grid, a PDF menu, a phone number), or they go
**anthropological** — mudcloth textures, drum fonts, a Western gaze on an
African kitchen. Sene does neither.

Sene's site is **premium, warm, and confident**. The same visual grammar a
Michelin-starred restaurant uses — huge type, cinematic video, deep negative
space, buttery scroll — applied to a plate of thieboudienne. The message of
that treatment is the whole strategy:

> **This food already deserved this level of presentation. Nobody had given it
> one yet.**

### Positioning pillars

| Pillar | The claim | The proof |
| --- | --- | --- |
| **Authenticity** | Cooked the way it is cooked in Dakar | Whole thiof under the rice, broken rice, charcoal dibi, halal throughout |
| **Belonging** | *Keur* — house, home, family compound | The name itself: Keur Serigne Saliou. A Senegalese family's house on 116th |
| **Endurance** | Street cart to storefront | Fifteen hours a day, seven days a week, since the beginning |

### Messaging hierarchy

1. **Hero line:** `DAKAR ON 116TH`
2. **Support:** Senegalese breakfast, lunch and dinner. Every day, 9am to midnight. West Harlem.
3. **Proof:** the stats strip
4. **Desire:** the three pillars — Dibi Sandwich, Thiebou Dienne, Dibi Plate
5. **Trust:** the story — street vendor to storefront
6. **Action:** Get Directions

### Tone of voice

- **Short sentences.** The kitchen does not explain itself at length.
- **Concrete nouns.** *Thiof. Charcoal. Broken rice. Onion. Lime.* Never "flavourful spices."
- **Wolof used with confidence, never translated apologetically.** `Kaay lekk.` — *Come and eat.* Set the Wolof first, the English small beneath it.
- **No exclamation marks. No emoji. No "Welcome to our website."**
- **Warmth comes from hospitality, not from adjectives.**

Sample voice, correct:

> We open at nine. The rice goes on before that.

Sample voice, wrong:

> Welcome to Sene Fast Food, where we serve delicious authentic African cuisine
> made with love and the finest ingredients!

---

## 3. BRAND PERSONALITY

If Sene Fast Food were a person, it would be **Talla behind the counter at 8pm
on a Friday** — sleeves up, unhurried, knows your order, knows your cousin,
will not rush the rice for anybody.

| Attribute | Dial |
| --- | --- |
| Warm | ████████░░ 9/10 |
| Premium | ███████░░░ 8/10 |
| Friendly | █████████░ 9/10 |
| Confident | ████████░░ 8/10 |
| Loud | ███░░░░░░░ 3/10 |
| Corporate | ░░░░░░░░░░ 0/10 |
| Trendy | ██░░░░░░░░ 2/10 |

### Archetype

**The Provider**, with a streak of **The Everyman**. Not the Hero, not the
Magician. Sene does not promise transformation. Sene promises that there will
be food, it will be good, and the door will be open.

### Brand attributes — the five words

`Generous` · `Charcoal` · `Steady` · `Gold` · `Home`

### What we never do

- Never call the food "exotic," "ethnic," or "a journey."
- Never use stock photography of unrelated African landscapes.
- Never use a drum/tribal display font.
- Never animate for novelty. Every movement serves appetite or clarity.
- Never let motion block someone from finding the address and the hours.

---

## 4. VISUAL DIRECTION

### The governing idea

**Charcoal and gold.** The site lives at night, in the glow of a grill. The
palette is lifted directly from the brand mark — the deep espresso-brown ring,
the Senegalese green, gold and red, the marigold of the *boubou* — but it is
set on a near-black ground so the food is the only thing that glows.

The background is not black. It is **a deep, warm, roasted brown-black**, the
colour of the inside of a charcoal grill after the flame goes down. Food
photography and video sit on it like light sources.

### Three grounds

The page alternates three grounds so the scroll has rhythm and breath:

| Ground | Token | Colour | Carries |
| --- | --- | --- | --- |
| **Ember** | `--ember` | `#140D0A` | Hero, video scenes, pillars, final CTA — the cinematic ground |
| **Charcoal** | `--charcoal` | `#1E1410` | Stats, story, featured — a half-step lighter for sectioning |
| **Bone** | `--bone` | `#F5EFE3` | Practical blocks — hours, address, menu detail. Inverted, for legibility |

The **Bone** ground appears exactly twice. Its rarity is what makes it read as
"this is the information you came for."

### Colour system

```
--ember        #140D0A   deep roasted ground        (primary background)
--charcoal     #1E1410   secondary ground
--espresso     #3A1F14   the logo ring brown; borders, cards
--bone         #F5EFE3   inverted ground / primary text on dark
--gold         #E8A317   marigold — the boubou, the CTA, the kinetic type
--gold-deep    #C1820A   gold on bone (contrast-safe)
--flame        #D6452B   the Senegalese red; accents, hover states, underlines
--teranga      #0E7A4F   the Senegalese green; small accents, "open now" dot
--ash          #A89384   muted body text on dark
--ash-deep     #6A5548   muted body text on bone
```

**Contrast discipline (WCAG AA, non-negotiable):**

- `--gold #E8A317` on `--ember #140D0A` → **9.4:1** ✅ use freely
- `--gold` on `--bone` → **2.1:1** ❌ never. Use `--gold-deep` → 4.8:1 ✅
- `--flame #D6452B` on `--ember` → **4.9:1** ✅ body-safe on dark
- `--flame` on `--bone` → **3.9:1** ⚠️ large text (24px+) only
- `--ash #A89384` on `--ember` → **7.2:1** ✅
- Body copy on dark is `--bone` at 92% opacity, never pure white.

### Texture — the grain

A **subtle film grain** sits over the entire page at `opacity: 0.045`, animated
on an 8-step loop at ~12fps. It is what turns flat CSS into film. Implemented as
a tiled base64 SVG `feTurbulence` noise, `position: fixed`, `pointer-events:
none`, `mix-blend-mode: overlay`, `z-index: 9999`.

It is disabled entirely under `prefers-reduced-motion` (it becomes static, not
absent — the grain stays, the animation stops).

### Photography & video direction

- **Light:** single warm source, hard-ish, from the side. Deep shadow. Never flat or fluorescent.
- **Colour:** warm grade. Push amber and gold. Crush the blacks slightly. Never cool, never clinical.
- **Framing:** extremely close on food. Steam, char, oil, grain of rice, flake of fish. The plate should fill the frame and run off the edges.
- **People:** hands before faces. A hand tearing bread, lifting a plate, passing a bag over the counter.
- **Never:** overhead flat-lay grids, white marble surfaces, minimalist ceramic plating, fake garnish.

### The logo mark

The circular emblem — *SENE FAST FOOD / KEUR SERIGNE SALIOU*, the woman in the
green-and-gold boubou holding a plate of thieboudienne against the Senegalese
flag — is a rich, detailed mark. It is therefore used **sparingly and large**:

- In the header, small (44px), as a circular badge — the full detail is lost at that size and that is fine; it reads as a seal.
- Once, large, in the **Story** section, at 320px, as the emblem it is.
- In the footer, at 72px.
- **Never** stretched, cropped, recoloured, or set on a busy background.

Source of truth: `/Media/sene-fast-food-logo.png`, working copy at
`assets/media/logo.png`.

---

## 5. HIGGSFIELD SEEDANCE 2.0 — ASSET GENERATION

### Identity reference

> **All Seedance 2.0 generations use the same identity reference image:**
> **`/Media/sene-fast-food-logo.png`**
>
> This is the Sene Fast Food brand emblem (*Keur Serigne Saliou*). It supplies:
> the **character identity** of the woman in the green-and-gold boubou and gold
> head-wrap, the **signature dish** (whole fish over red broken rice with
> vegetables), and the **brand colour identity** (Senegal green `#0E7A4F`,
> marigold gold `#E8A317`, flame red `#D6452B`, espresso brown `#3A1F14`).
>
> Pass this image as the identity/character reference on **every one of the
> three generations** so the woman, the dish and the palette stay consistent
> across all three scenes.

### Generation settings — apply to all three clips

| Setting | Value |
| --- | --- |
| Model | Higgsfield **Seedance 2.0** |
| Resolution | **1080p** (1920 × 1080) |
| Duration | **8–12 seconds** per clip |
| Aspect ratio | 16:9 |
| Frame rate | 24fps — cinematic cadence |
| Motion | Slow, deliberate, single continuous move per shot. No cuts inside a clip. |
| Camera | Cinema prime look — shallow depth of field, gentle bokeh |
| Grade | Warm amber key, deep espresso shadows, slightly crushed blacks |
| Identity reference | `/Media/sene-fast-food-logo.png` on all three |
| Negative prompt | `text overlay, watermark, logo, subtitles, distorted hands, extra fingers, plastic food, cool blue grade, fluorescent lighting, fast cuts, camera shake, cartoon, CGI look, white marble surface` |

### Continuity decision — **ONE SEAMLESS FLOW**

The three clips are generated as **one continuous cinematic flow**, each shot
ending on a frame the next shot can begin from. The viewer scrolling the page
experiences a single unbroken piece of film that happens to have website
between its frames.

**The continuity chain:**

```
SCENE 1 ends  →  charcoal smoke rising, fire glow filling frame
SCENE 2 opens →  from that same smoke and glow, into the pot
SCENE 2 ends  →  the finished plate set down, steam rising
SCENE 3 opens →  on that steam, pulling back to reveal the room
```

**Generation instruction for continuity:** generate Scene 1 first. Extract its
final frame as `assets/media/frame-01-end.jpg` and pass it as the **first-frame
/ start-image reference** for Scene 2. Repeat from Scene 2's final frame into
Scene 3. Combined with the shared identity reference, this produces a chain that
cuts together invisibly.

### Output & encoding

Deliver each clip twice, into `assets/media/`:

| File | Purpose | Spec |
| --- | --- | --- |
| `scene-01.mp4` … `scene-03.mp4` | Scrub source | H.264, 1920×1080, CRF 23, **keyframe every frame** (`-g 1`) for smooth scrubbing, `+faststart`, **no audio** |
| `scene-01.webm` … `scene-03.webm` | Modern fallback | VP9, same dimensions, CRF 32 |
| `poster-01.jpg` … `poster-03.jpg` | First-frame poster | 1920×1080, quality 78, ~180KB |

```sh
# Scrub-optimised encode — every frame a keyframe
ffmpeg -i scene-01-raw.mp4 -an -c:v libx264 -preset slow -crf 23 -g 1 \
  -pix_fmt yuv420p -movflags +faststart assets/media/scene-01.mp4

ffmpeg -i scene-01-raw.mp4 -an -c:v libvpx-vp9 -crf 32 -b:v 0 \
  -g 1 assets/media/scene-01.webm

ffmpeg -i scene-01-raw.mp4 -vframes 1 -q:v 4 assets/media/poster-01.jpg
```

**Target: each MP4 under 6MB.** Every-frame-keyframe encoding inflates file
size; if a clip exceeds 6MB, drop to 1600×900 before raising CRF — resolution
loss is less visible than compression artefacts on charcoal.

---

## 6. THE THREE CINEMATIC SCENES

One continuous film in three movements: **Fire → Pot → House.**

---

### SCENE 1 — *THE FIRE*
**Placement:** Hero background, behind the headline
**Duration:** 10s · **Move:** slow push-in

> **Prompt:**
>
> Extreme close-up on a charcoal grill at night. Lamb dibi — thin-cut marinated
> lamb — sears over glowing orange coals, fat rendering and flaring. A hand
> turns a skewer with tongs, unhurried. Embers pulse. Thin blue-grey smoke lifts
> in slow ribbons through a single warm amber key light from frame left,
> everything behind falling to deep espresso black. The camera pushes in very
> slowly toward the coals over the full duration. Shallow depth of field,
> cinematic 35mm prime look, warm grade with crushed blacks, no text, no people's
> faces, no camera shake. Ends with smoke and fire glow filling the frame.

**Ends on:** smoke and glow filling frame → hands to Scene 2

---

### SCENE 2 — *THE POT*
**Placement:** Mid-page scroll-scrub sequence
**Duration:** 12s · **Move:** slow rise + reveal

> **Prompt:**
>
> Opening from drifting smoke and warm fire glow, the camera rises to find a
> wide black pot of Thiebou Dienne. Red broken rice simmers in tomato and fish
> stock. A whole thiof fish rests on top, skin blistered, alongside cassava,
> carrot, cabbage and a wedge of charred lime. Steam pours upward through a warm
> amber side light. A woman's hands in green and gold patterned fabric sleeves
> lower a wooden spoon into the rice and turn it once, slowly, the grains falling
> apart. The camera rises and settles into a three-quarter view as the finished
> plate is set down on dark wood, steam still rising. Deep espresso background,
> cinematic shallow depth of field, warm amber grade, photoreal food, no text,
> no fast movement.

**Ends on:** the plated dish, steam rising → hands to Scene 3

---

### SCENE 3 — *THE HOUSE*
**Placement:** Story / community section
**Duration:** 10s · **Move:** slow pull-back

> **Prompt:**
>
> Opening tight on steam rising from a plate of thieboudienne, the camera pulls
> back slowly to reveal a warm Senegalese restaurant dining room at night in
> Harlem. A woman in a green and gold patterned boubou and matching gold head-wrap
> — the Sene Fast Food identity — carries the plate away from camera toward a table
> where people are already eating and talking, hands over shared food, glasses of
> dark red bissap on the table. Warm tungsten and gold lighting, espresso-brown
> walls, steam and warmth in the air. The camera continues pulling back and settles
> on the full room. It should feel like walking into someone's home, not a
> restaurant — *keur*, a family house. Photoreal, cinematic, warm amber grade,
> shallow depth of field, gentle motion, no text, no fast cuts.

**Ends on:** the full warm room — the emotional landing of the site

---

### Fallback if video generation is unavailable

The site must not break without the clips. Every `<video>` element carries its
`poster-0N.jpg`, and `script.js` detects a missing/failed video and falls back to
a **Ken Burns still** — the poster frame with a 20s CSS `scale(1) → scale(1.12)`
drift. The existing photography in `assets/img/dishes/` supplies posters in the
interim.

---

## 7. WEBSITE STRUCTURE

A **single scrolling page**. One document, ten movements, no navigation away
from the film.

```
┌─ 00  PRELOADER          gold ring draws, "KAAY LEKK" wipes, curtain lifts
├─ 01  HERO               Scene 1 video · "DAKAR ON 116TH" · Get Directions
├─ 02  STATS STRIP        4 counters, marquee rail, gold on ember
├─ 03  MISSION            kinetic type, word-by-word reveal on charcoal
├─ 04  THE THREE          Dibi Sandwich · Thiebou Dienne · Dibi Plate
├─ 05  SCENE 2 SCRUB      full-bleed scroll-scrubbed video + pinned caption
├─ 06  STORY              street cart → storefront, horizontal timeline, logo
├─ 07  THE HOUSE          Scene 3 video · community · hours + address on BONE
├─ 08  FEATURED           menu grid — real dish photography, magnetic cards
├─ 09  FINAL CTA          huge kinetic "KAAY LEKK" · Get Directions
└─ 10  FOOTER             address, hours, phones, logo, credits
```

### Navigation

A **fixed, minimal header**: logo badge left, a live `OPEN NOW ·` pill centre,
`GET DIRECTIONS` button right. No hamburger, no menu links — the page *is* the
menu. The header hides on scroll-down, returns on scroll-up, and gains a
backdrop blur once past the hero.

A thin **gold scroll-progress bar** sits at the very top, 2px, scaling on the
X axis.

---

## 8. HERO SECTION

**Ground:** Ember · **Height:** 100svh · **Video:** `scene-01`

### Layout

Full-bleed `scene-01.mp4` — autoplay, muted, loop, playsinline — under a
vertical scrim (`rgba(20,13,10,.25)` top → `.85` bottom) so the type never
fights the fire.

### Copy

```
eyebrow     KEUR SERIGNE SALIOU · HARLEM, NEW YORK

headline    DAKAR
            ON 116TH

sub         Senegalese breakfast, lunch and dinner.
            Every day, 9am to midnight. Halal kitchen.

cta         GET DIRECTIONS →      (primary, gold fill)
            (917) 569-6057        (secondary, ghost)

corner      ↓ SCROLL       151 W 116TH ST
```

### Type treatment

`DAKAR ON 116TH` is set at `clamp(4.5rem, 16vw, 15rem)`, weight 900, line-height
0.82, letter-spacing `-0.04em`. `DAKAR` in `--bone`; `116TH` in `--gold`.

### Motion

1. Curtain lifts from the preloader — the video is already playing beneath.
2. Headline animates in **by line, masked**: each line sits in an
   `overflow:hidden` wrapper, translating `y: 110% → 0` over 1.1s, `expo.out`,
   0.09s stagger.
3. Eyebrow fades up 0.2s before the headline. Sub and CTAs fade up 0.3s after.
4. `SCROLL` indicator: a 1px gold line, `scaleY` 0→1→0 on a 2s loop.
5. **On scroll out:** the hero pins for 60% of a viewport, the headline drifts
   `y: -80` and fades, the video `scale(1 → 1.15)` and dims to 0.3. The section
   below rises *over* it.

---

## 9. ANIMATED STATS STRIP

**Ground:** Ember → Charcoal gradient · **Height:** ~40vh

A full-width band, top and bottom hairline rules in `--espresso`.

### The four stats

| Figure | Label | Basis |
| --- | --- | --- |
| **15** | HOURS OPEN, EVERY DAY | 9am–12am, verifiable |
| **7** | DAYS A WEEK | Verifiable |
| **100%** | HALAL KITCHEN | Verifiable |
| **1** | BLOCK FROM THE A, B, C, D | 116th St station — verifiable |

> **Note on stats — read before building.** These four are written to be
> *true and checkable* rather than impressive and invented. Talla, if you have
> real figures — years open, plates served, number of dishes on the board,
> five-star review count — swap them in; they will hit harder. Do not publish
> a number the kitchen cannot stand behind.

### Motion

- Each figure counts **0 → value** over 1.6s, `power2.out`, triggered when the strip is 70% up the viewport, once only.
- The `%` and unit glyphs fade in **after** the count settles.
- Labels wipe up from a mask on a 0.06s stagger.
- Beneath the four stats runs a **continuous marquee rail** at 40s per loop, gold on ember, `opacity: .35`, duplicated for a seamless wrap:
  `THIEBOU DIENNE ✦ DIBI ✦ YASSA ✦ MAFÉ ✦ THIEBOU GUINAR ✦ BISSAP ✦ ATTAYA ✦ NEM ✦ FATAYA ✦`
- The marquee's speed is scroll-velocity-linked via Lenis: scroll faster, the rail accelerates; it also **flips direction** on scroll-up. This one detail does more for "award-winning" than any other single effect.

---

## 10. MISSION SECTION

**Ground:** Charcoal · **Height:** ~120vh (pinned) · **This is the kinetic type moment.**

### Copy

```
label       WHY WE'RE HERE

statement   We came here to put
            Senegal on this block.
            Not a version of it.
            The thing itself.

closer      Kaay lekk.
            — Come and eat.
```

### Motion — word-by-word scrub

The statement is the site's kinetic typography centrepiece.

- Set at `clamp(2.2rem, 6.5vw, 5.5rem)`, weight 800, line-height 1.06.
- Split to **words**, each in an inline-block span.
- Section pins for 100vh. As the user scrubs, each word animates
  `opacity: .12 → 1` and `color: --ash → --bone`, in sequence, via a
  ScrollTrigger with `scrub: 0.8`.
- **`Senegal`** resolves to `--gold`. **`The thing itself.`** resolves to `--bone`
  and scales `0.96 → 1`.
- `Kaay lekk.` is set in italic, `--gold`, and draws a **gold underline**
  (`scaleX 0 → 1`, `transform-origin: left`) as the last word lands.
- The label `WHY WE'RE HERE` is vertical (`writing-mode: vertical-rl`) pinned to
  the left gutter on desktop, horizontal above the statement on mobile.

**Reduced motion:** no pin, no scrub. Words render at full opacity, section
fades in once.

---

## 11. THE THREE PILLARS

**Ground:** Ember · **Layout:** three full-height panels, horizontally scrolled on desktop

### The three

**01 — DIBI SANDWICH**
> Charcoal-grilled lamb, onions cooked down in mustard and vinegar, packed into
> fresh bread. The thing you eat standing up on 116th Street at eleven at night.

**02 — THIEBOU DIENNE**
> The national dish, and the reason people come from Brooklyn. Whole thiof over
> broken rice cooked in tomato and fish stock, with cassava, carrot, cabbage and
> a wedge of charred lime. This one takes all morning. That is the point.

**03 — DIBI PLATE**
> The grill, plated. Lamb off the charcoal with the side of your choice —
> attieke, fries, salad, or rice. Built the way you build it.

### Layout & motion — horizontal scroll

- On desktop (≥1024px), the three panels sit in a horizontal track. The section
  **pins** and the track translates `x: 0 → -200vw` on `scrub: 1`. Three
  viewport-heights of vertical scroll buy three panels of horizontal travel.
- Each panel: giant `01` `02` `03` numeral at `18vw` in `--espresso` behind the
  content; dish photograph clipped in a tall portrait frame; title at
  `clamp(3rem, 7vw, 6rem)`; body at 18px in `--ash`.
- **Parallax inside the horizontal move:** the numeral travels at 1.25×, the
  photograph at 0.85×, the text at 1×. That differential is what sells depth.
- Images reveal by `clip-path: inset(100% 0 0 0) → inset(0 0 0 0)` over 1.2s,
  `expo.out`, as each panel enters.
- A gold progress rail beneath the panels tracks horizontal position.
- **Mobile:** the horizontal track becomes a vertical stack. Each panel is a
  full-width card, revealed on scroll. No pinning.

---

## 12. SCENE 2 — SCROLL-SCRUB SEQUENCE

**Ground:** Ember · **Height:** 300vh of scroll, 100vh pinned · **Video:** `scene-02`

The technical showpiece. The user's scroll **is** the playhead.

### How it works

1. A `100svh` sticky container holds `scene-02.mp4`, `object-fit: cover`, `muted playsinline preload="auto"`, `autoplay={false}`.
2. A ScrollTrigger over a 300vh spacer drives `video.currentTime = progress * video.duration` with `scrub: 0.6`.
3. Writes are throttled through `requestAnimationFrame` and guarded by a `readyState >= 2` check, so we never assign `currentTime` to an unready element.
4. **iOS Safari cannot reliably scrub an unbuffered video.** Detect it; on iOS, fall back to `play()` on enter + the Ken Burns treatment, and let the scrim/caption animation carry the section. The section must look intentional either way.

### Pinned captions

Three captions cross-fade over the video as it scrubs, each on its own
`clip-path` mask reveal:

| Progress | Caption |
| --- | --- |
| 0.05 → 0.30 | `The rice goes on before we open.` |
| 0.35 → 0.62 | `Whole thiof. Tomato. Fish stock. Time.` |
| 0.68 → 0.95 | `Thiebou Dienne. The national dish.` |

Captions sit bottom-left on desktop, bottom-centre on mobile, at
`clamp(1.6rem, 3.6vw, 3rem)`, `--bone`, with a soft `text-shadow` for legibility
against the moving image.

### Scrim

A radial vignette at `rgba(20,13,10,.55)` on the edges and a bottom linear scrim
keep the type readable across the whole clip.

---

## 13. STORY SECTION

**Ground:** Charcoal · **The emotional core.**

### Copy

```
label       THE STORY

headline    From a cart
            to a corner.

body        Talla Sylla started out selling food on the street.
            No dining room, no sign — a cart, a pot, and the
            people who kept coming back for what was in it.

            116th Street is Little Senegal. It has been for
            thirty years. What it did not have was a kitchen
            open from nine in the morning until midnight,
            cooking the way people cook at home.

            So we built one. We called it Keur Serigne Saliou —
            the house of Serigne Saliou. Because that is what
            it is. A house. You are welcome in it.

signature   — Talla Sylla, owner
```

### Layout

Two columns on desktop: the copy left at 52ch max; the **logo emblem** right at
320px, circular, with a slow `rotate: -6deg → 6deg` drift tied to scroll, and a
soft gold radial glow behind it at `opacity: .18`.

### The timeline

Beneath the copy, a horizontal four-beat timeline with a gold line that **draws
left-to-right** on scroll (`scaleX 0 → 1`, `transform-origin: left`, `scrub: 1`).
Each node scales `0 → 1` with a `back.out(2)` pop as the line passes it.

```
THE CART  ──────  THE REGULARS  ──────  151 W 116TH  ──────  9AM – MIDNIGHT
```

### Motion

Headline splits to lines and masks up. Body paragraphs fade + `y: 30 → 0` on a
0.12s stagger. The signature draws its underline last.

---

## 14. THE HOUSE — COMMUNITY & PRACTICAL

**Ground:** Ember (video) → **Bone** (practical) · **Video:** `scene-03`

This section does the two things the site actually has to do: make someone feel
welcome, then tell them exactly where to go.

### Part A — the film (Ember)

`scene-03.mp4` full-bleed at 70svh, autoplay muted loop, with a centred overlay:

```
KEUR
The house of Serigne Saliou.
Dine in. Take out. Delivery. Halal kitchen.
```

`KEUR` is set enormous — `clamp(5rem, 20vw, 18rem)` — in `--gold` at
`opacity: .92`, with the video visible through it via `mix-blend-mode: overlay`
where supported (feature-detected; solid gold where not).

### Part B — the practical block (**BONE** — the inversion)

The page goes **light**. This is the moment of clarity, and its rarity is the
point.

Three columns on desktop, stacked on mobile:

| FIND US | HOURS | CALL |
| --- | --- | --- |
| 151 W 116th Street | Monday – Sunday | (917) 569-6057 |
| Harlem, New York, NY 10026 | 9:00 AM – 12:00 AM | (917) 569-6871 |
| One block from 116th St (A·B·C·D) | *Open now* / *Closed* pill, live | Dine in · Take out · Delivery |

**`GET DIRECTIONS →`** sits below, full-width on mobile, as a large gold-filled
button — the site's primary conversion point, and the only place it appears in
this ground.

The **Open now** pill is computed live in JS from `OPEN_HOUR = 9` /
`CLOSE_HOUR = 24`, with a pulsing `--teranga` dot when open and a static
`--ash-deep` dot when closed. It reads the visitor's clock; the label says
`Open now · closes 12AM` so the meaning is unambiguous.

---

## 15. FEATURED — WHAT'S ON THE BOARD

**Ground:** Charcoal

A masonry-ish grid of dish cards using the real photography already in
`assets/img/dishes/` — Thiebou Guinar, Thiebou Diaga, C'est Bon, Mbakhal Yapp —
plus typographic tiles for dishes without photos, so a mixed grid reads as
deliberate rather than unfinished.

### Card

- Image in a 4:5 frame, `scale(1.06)` at rest, `scale(1)` on hover over 0.8s `expo.out` — the image *settles* into the frame rather than zooming out of it.
- Dish name in italic display, `--bone`; a one-line description in `--ash`.
- A gold hairline draws across the card's base on hover (`scaleX 0 → 1`).
- **Magnetic hover:** the card translates up to 8px toward the cursor, with the inner content trailing at 0.6× for a parallax lift. Disabled on touch devices.
- Cards reveal on scroll with a `clip-path` wipe + `y: 40 → 0`, on a 0.08s grid stagger.

### Honest pricing

Only the **$10 breakfast special** has a confirmed price. Cards without a price
show no number, under a line that reads: **"Prices change with the market —
call and the kitchen will tell you."** That is better than a wrong number.

---

## 16. FINAL CTA

**Ground:** Ember · **Height:** 100svh

The closing frame of the film.

```
KAAY
LEKK
— Come and eat.

151 W 116th Street · Harlem · Open till midnight

[ GET DIRECTIONS → ]        [ CALL (917) 569-6057 ]
```

### Treatment

- `KAAY LEKK` at `clamp(5rem, 22vw, 20rem)`, weight 900, line-height 0.78, `--gold`.
- The two words **split on scroll**: `KAAY` translates `x: -6vw`, `LEKK` translates `x: +6vw` on `scrub: 1` — they pull apart as the user reaches the bottom.
- Behind them, a slow gold radial glow breathes on an 8s loop at `opacity: .10`.
- The primary button has a **gold fill wipe** on hover: a pseudo-element scales
  `scaleY 0 → 1` from the bottom, `expo.out`, with the label colour crossfading
  to `--ember`.
- The button also carries a **magnetic cursor pull** of up to 10px.

---

## 17. FOOTER

**Ground:** Ember, with a hairline `--espresso` top rule

```
[logo 72px]   SENE FAST FOOD
              Keur Serigne Saliou

FIND US             HOURS                CALL
151 W 116th St      Every day            (917) 569-6057
Harlem, NY 10026    9:00 AM – 12:00 AM   (917) 569-6871

                    Halal kitchen · Dine in · Take out · Delivery

© 2026 Sene Fast Food · Keur Serigne Saliou · Harlem, New York
```

The wordmark `SENE FAST FOOD` is set large (`clamp(2rem, 7vw, 5rem)`) in
`--espresso` — present but receding, the last quiet note. All phone numbers are
`tel:` links; the address is a `maps` link. A small `Kaay lekk.` sits in the
gold at the very bottom.

---

# PART TWO — THE STYLE GUIDE

---

## 18. COMPLETE VISUAL STYLE GUIDE

### Design tokens — the top of `style.css`

```css
:root{
  /* ground */
  --ember:#140D0A; --charcoal:#1E1410; --espresso:#3A1F14; --bone:#F5EFE3;
  /* accent */
  --gold:#E8A317; --gold-deep:#C1820A; --flame:#D6452B; --teranga:#0E7A4F;
  /* text */
  --ash:#A89384; --ash-deep:#6A5548;
  /* type */
  --display:'Anton',"Arial Black",sans-serif;
  --sans:'Archivo','Helvetica Neue',Arial,sans-serif;
  --serif:'Instrument Serif',Georgia,serif;
  /* scale — fluid */
  --t-mega:clamp(4.5rem,16vw,15rem);
  --t-xl:clamp(3rem,8vw,7rem);
  --t-lg:clamp(2rem,5vw,3.75rem);
  --t-md:clamp(1.35rem,2.4vw,1.85rem);
  --t-body:clamp(1rem,1.15vw,1.125rem);
  --t-sm:.8125rem;
  /* rhythm */
  --gutter:clamp(1.25rem,5vw,6rem);
  --section:clamp(6rem,14vh,12rem);
  --max:1560px;
  /* motion */
  --ease-out:cubic-bezier(.16,1,.3,1);
  --ease-io:cubic-bezier(.76,0,.24,1);
  --dur-fast:.35s; --dur:.7s; --dur-slow:1.2s;
  /* chrome */
  --radius:2px;          /* near-square. This brand is not rounded. */
  --hair:1px solid var(--espresso);
}
```

### Spacing

An **8px base**. Every margin, pad and gap is a multiple of 8 — 8, 16, 24, 32,
48, 64, 96, 128, 192. Section padding uses `--section`. Nothing is ever an
arbitrary `13px`.

### Grid

12 columns, `--gutter` outer margin, `max-width: var(--max)` centred. Full-bleed
sections escape the container entirely. Editorial blocks sit on columns 2–8 or
5–12 — never dead centre, except the final CTA, where centring is the whole
point.

### Corners, borders, shadows

- Radius **2px**, effectively square. Buttons and the header pill are the sole
  exception at `999px`.
- Borders are always `1px solid var(--espresso)`.
- **No drop shadows anywhere on the dark ground** — they do nothing on `#140D0A`
  and make the page look cheap. Depth comes from the grain, the scrims and the
  parallax differential. On the Bone ground, a single soft shadow is permitted
  on the primary button.

### Buttons

```
Primary   gold fill · ember label · 999px · 18px/40px pad · 
          uppercase · .08em tracking · 700 · fill-wipe hover · magnetic
Ghost     1px bone border · bone label · transparent · 
          hover: border→gold, label→gold
```

Every interactive element has a visible focus ring: `2px solid var(--gold)` with
a `3px` offset on dark, `var(--gold-deep)` on bone.

---

## 19. TYPOGRAPHY

### The three faces

| Role | Face | Weights | Why |
| --- | --- | --- | --- |
| **Display** | **Anton** | 400 (it ships one) | Tall, narrow, brutally confident. `DAKAR ON 116TH` at 15rem needs a face that does not get fat. Anton is the poster voice. |
| **UI / body** | **Archivo** | 400, 500, 600, 700 | Grotesque, neutral, excellent at small sizes. Already self-hosted in this repo. |
| **Dish names** | **Instrument Serif Italic** | 400 italic | Reserved *exclusively* for dish names — this is how the kitchen sets them on the menu-du-jour boards. It is the single most brand-specific typographic decision on the site. Never use it for anything else. |

All three are self-hosted `.woff2` from `assets/fonts/`, so the site makes **zero
third-party font requests**. Anton and Archivo carry the SIL Open Font License
1.1; Instrument Serif likewise.

```css
@font-face{font-family:'Anton';src:url('assets/fonts/anton-latin.woff2') format('woff2');
  font-weight:400;font-display:swap;font-style:normal}
```

Every `@font-face` uses `font-display: swap` and a metric-comparable fallback, so
a slow font never blanks the hero.

### The scale in use

| Token | Used for | Set |
| --- | --- | --- |
| `--t-mega` | `DAKAR ON 116TH`, `KAAY LEKK`, `KEUR` | Anton · lh .82 · ls -.04em · uppercase |
| `--t-xl` | Section headlines | Anton · lh .92 · ls -.02em |
| `--t-lg` | Pillar titles, mission statement | Archivo 800 · lh 1.06 |
| `--t-md` | Lead paragraphs, captions | Archivo 400 · lh 1.45 |
| `--t-body` | Body | Archivo 400 · lh 1.65 · max 68ch |
| `--t-sm` | Labels, eyebrows, stats labels | Archivo 600 · ls .18em · uppercase |
| — | **Dish names** | Instrument Serif *italic* · lh 1.15 |

### Typographic rules

- **Uppercase display type always carries positive tracking** at small sizes
  (`.08em`–`.18em`) and **negative** tracking at huge sizes (`-.04em`). This is
  the difference between typeset and typed.
- Body copy never exceeds **68 characters** per line.
- Numerals in the stats strip use `font-variant-numeric: tabular-nums` so the
  count-up does not jitter the layout.
- `text-wrap: balance` on all headlines; `text-wrap: pretty` on body.
- Never letter-space lowercase body text. Never centre a paragraph longer than
  two lines.

---

## 20. ANIMATION DIRECTION

### The philosophy

> **Nothing on this site bounces.** Motion is *weighted* — things arrive with
> momentum and settle, the way a plate is set down. The default easing is
> `expo.out`, which travels fast and lands soft.

### The five motion primitives

Every animation on the site is one of these five. The consistency is what makes
it feel designed rather than assembled.

| # | Primitive | Spec | Used on |
| --- | --- | --- | --- |
| **1** | **Mask-up** | Line in `overflow:hidden`, `y:110%→0`, 1.1s, `expo.out`, 0.09s stagger | Every headline, without exception |
| **2** | **Fade-rise** | `y:32→0`, `opacity:0→1`, 0.9s, `power3.out`, 0.1s stagger | Body copy, labels, buttons |
| **3** | **Clip-wipe** | `clip-path: inset(100% 0 0 0) → inset(0 0 0 0)`, 1.2s, `expo.out` | All images and video frames |
| **4** | **Line-draw** | `scaleX: 0→1`, `transform-origin: left`, 1s, `expo.out` | Rules, underlines, the timeline, the progress rails |
| **5** | **Scrub-link** | Any property tied to `scrub: 0.6–1` | Video playhead, parallax, kinetic type, horizontal track |

### Timing

- Micro-interactions (hover, focus): **200–350ms**
- Content reveals: **700–1200ms**
- Cinematic moves (pins, scrubs, scene transitions): **scroll-linked, no fixed duration**
- Stagger between siblings: **60–120ms**. Never more — it starts to feel slow.

### Load sequence

```
0.0s   Preloader: gold ring draws (SVG stroke-dashoffset, 1.2s)
0.6s   "KAAY LEKK" wipes up under it
1.4s   Curtain lifts — the whole overlay translates y:0 → -100%, 1s, expo.inOut
1.6s   Hero eyebrow fades
1.8s   "DAKAR" masks up
1.9s   "ON 116TH" masks up
2.2s   Sub + CTAs fade-rise
2.6s   SCROLL indicator begins its loop
```

Total: **under 3 seconds to a fully interactive hero.** The preloader has a
**hard 2.5s timeout** — if fonts or video stall, the curtain lifts anyway. A
preloader that can trap a user is a bug, not a feature.

### The scroll-velocity system

A single Lenis `scroll` listener publishes normalised velocity to a CSS custom
property `--vel`. Three things read it:

1. The stats marquee accelerates and reverses direction.
2. Display headlines **skew** up to `2deg` on the Y axis, springing back to `0`
   when scroll stops. Applied at `0.35 * velocity`, capped.
3. Video scrub easing tightens at speed.

This is the single most "expensive-feeling" detail in the build. It costs about
twenty lines.

---

## 21. INTERACTION DESIGN

### Cursor

A custom cursor on pointer devices only (`@media (hover:hover) and (pointer:fine)`):

- **Dot** — 6px, `--gold`, follows at `lerp 0.9` (near-instant)
- **Ring** — 36px, 1px `--bone` at 40% opacity, follows at `lerp 0.12` (trailing)
- On interactive hover: ring scales to 64px, fills `--gold` at 15%, dot hides
- On a dish card: ring scales to 88px and shows the label `VIEW`
- The native cursor is **never** hidden on touch devices, and the whole system is skipped entirely there

### Magnetic elements

Primary buttons and dish cards pull toward the cursor within a 80px radius, at
`0.25 × distance`, capped at 10px, with a `power3.out` release. Touch: disabled.

### Hover states

| Element | At rest | On hover |
| --- | --- | --- |
| Primary button | Gold fill | Fill wipes to `--bone`, label → `--ember`, 350ms |
| Ghost button | Bone border | Border + label → `--gold` |
| Dish card | Image `scale(1.06)` | Image `scale(1)`, gold rule draws, card lifts 8px |
| Text link | Gold, no underline | Underline draws left→right, 300ms |
| Logo badge | 100% | `rotate(8deg)`, 600ms `--ease-out` |

### Keyboard & accessibility

- Every interactive element reachable by Tab, in DOM order.
- Visible focus ring: `2px solid var(--gold)`, `3px` offset. **Never** `outline: none` without a replacement.
- A **skip-to-content** link, first in the DOM, revealed on focus.
- Videos are decorative: `aria-hidden="true"` on the `<video>`, with the meaning carried by adjacent real text.
- Landmarks: `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- The Open-now pill uses `aria-live="polite"`.
- `prefers-reduced-motion: reduce` disables **all** pinning, scrubbing, parallax, magnetics, the marquee and the cursor; content renders at its final state. The site must be fully usable and fully beautiful with motion off.

---

## 22. SCROLL BEHAVIOUR

### Lenis configuration

```js
const lenis = new Lenis({
  duration: 1.15,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out
  smoothWheel: true,
  syncTouch: false,     // native momentum on touch. Do not fight iOS.
  touchMultiplier: 1.6,
  lerp: 0.1
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
```

`syncTouch: false` is deliberate. Smooth-scroll libraries that hijack touch make
mobile feel broken; native momentum is better than anything we can fake.

If `prefers-reduced-motion` is set, **Lenis is never instantiated** and the page
uses native scrolling.

### Pinned sections — in order

| Section | Pin length | Scrub |
| --- | --- | --- |
| Hero | 60vh | 0.8 |
| Mission (kinetic type) | 100vh | 0.8 |
| Three pillars (horizontal) | 300vh | 1.0 |
| Scene 2 (video scrub) | 300vh | 0.6 |

Total pinned scroll ≈ 760vh. The page is roughly **9 viewport-heights** end to
end — a two-minute scroll. Long enough to be a film, short enough to finish.

### Section transitions

Sections do not simply abut. Each Ember→Charcoal or Charcoal→Bone boundary gets
a **scrubbed background crossfade** over the last 25vh of the outgoing section,
so the ground shifts underfoot rather than switching. On the Ember→Bone
inversion (Section 14), the transition is faster and more deliberate — 15vh —
because that snap to light is meant to be felt.

### Progress

A 2px gold bar, fixed top, `transform: scaleX()` driven by a single global
ScrollTrigger on `document.body`. `will-change: transform`.

---

## 23. MOBILE BEHAVIOUR

Mobile is not a degraded desktop. It is where most of Sene's customers are,
standing on 116th Street, deciding where to eat. **Design it first.**

### Structural changes

| Desktop | Mobile (<768px) |
| --- | --- |
| Horizontal pinned pillars | Vertical stack, no pin |
| Video scrub (300vh) | Autoplay loop + Ken Burns, 100vh |
| Mission pinned scrub | Non-pinned word reveal on entry |
| Custom cursor | Removed entirely |
| Magnetic hover | Removed entirely |
| 3-col practical block | Stacked, address first |
| Hero 100svh | 100svh with `-webkit-fill-available` fallback |

### Mobile-specific rules

- **`svh` not `vh`.** `100vh` on iOS Safari is wrong by the height of the URL bar. Use `100svh` with a `100vh` fallback for old browsers.
- **Tap targets ≥ 48×48px**, with ≥ 8px between them.
- **`GET DIRECTIONS` is sticky** at the bottom of the viewport from the end of the hero onward — a full-width gold bar, 56px tall, `env(safe-area-inset-bottom)` respected. It is the only persistent chrome on mobile and it is the entire point of the site.
- Display type caps at `14vw` on mobile so `DAKAR ON 116TH` never overflows.
- Videos: `preload="none"` under `(max-width: 768px)`, loaded on intersection. **Never** ship 18MB of video to someone on LTE without asking.
- On `navigator.connection.saveData === true`, or `effectiveType` of `2g`/`slow-2g`, **skip video entirely** and render posters with the Ken Burns treatment.
- Grain opacity drops to `0.03` on mobile — small screens show noise more.
- The marquee runs at half speed and does not read scroll velocity (touch velocity is jumpy).

### Breakpoints

```
360px   floor — everything must work here
480px   small phone → large phone
768px   phone → tablet: stacks become 2-col, sticky CTA retires
1024px  tablet → desktop: horizontal pinning switches on, cursor appears
1440px  desktop → large: type scale opens up
1920px  max container engages, side gutters grow
```

---

# PART THREE — IMPLEMENTATION INSTRUCTIONS FOR CLAUDE CODE

---

## 24. TECHNICAL IMPLEMENTATION

### File structure — build exactly this

```
/
├── index.html              single page, all sections, semantic HTML5
├── style.css               all styling; tokens at the top of the file
├── script.js               all behaviour; ES2020 vanilla, no modules needed
├── BUILD-PLAN.md           this document
├── README.md               updated build + deploy notes
├── .nojekyll               GitHub Pages
└── assets/
    ├── media/
    │   ├── logo.png            brand emblem (working copy)
    │   ├── scene-01.mp4/.webm  THE FIRE   · hero
    │   ├── scene-02.mp4/.webm  THE POT    · scroll scrub
    │   ├── scene-03.mp4/.webm  THE HOUSE  · community
    │   └── poster-01..03.jpg   first-frame posters / fallback stills
    ├── img/
    │   ├── dishes/*.jpg        existing real dish photography — reuse
    │   └── boards/*.jpg        existing menu-du-jour boards — reuse
    └── fonts/
        ├── anton-latin.woff2
        ├── archivo-latin.woff2
        └── instrument-italic-latin.woff2

/Media/
└── sene-fast-food-logo.png     SOURCE OF TRUTH — Higgsfield identity reference
```

**Every path in the site is relative.** No leading `/` in any `src` or `href` —
the site must work under a GitHub Pages project subpath as well as at a domain
root.

### Hard constraints

- ✅ HTML, CSS, vanilla JavaScript only
- ✅ GSAP + ScrollTrigger + Lenis via CDN
- ❌ **No React. No Next.js. No Vue. No Tailwind. No build step. No bundler. No npm.**
- ❌ No jQuery, no Bootstrap, no icon libraries
- ❌ No third-party font CDN — fonts are self-hosted
- ❌ No analytics, no trackers, no cookie banner

### CDN dependencies — exactly these three

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js" defer></script>
<script src="script.js" defer></script>
```

`script.js` must **guard on library presence** and degrade to a plain, static,
fully readable page if a CDN is blocked:

```js
const HAS_GSAP = typeof window.gsap !== 'undefined';
if (!HAS_GSAP) { document.documentElement.classList.add('no-gsap'); }
```

`.no-gsap` CSS forces every `[data-reveal]` element to its final state. **A CDN
outage must never leave a blank page.**

### `script.js` architecture

One IIFE, no globals, a flat list of named init functions called from a single
`boot()`. Each one is independently guarded and independently skippable.

```js
(() => {
  'use strict';
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DESKTOP = matchMedia('(min-width:1024px)').matches;
  const FINE    = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const SAVEDATA = navigator.connection?.saveData === true ||
                   /2g/.test(navigator.connection?.effectiveType || '');

  function boot(){
    initPreloader();       // hard 2.5s timeout
    initLenis();           // skipped if REDUCED
    initHeader();          // hide/show, blur, progress bar
    initHero();            // masked headline, pin, video scale-out
    initStats();           // count-up + velocity marquee
    initMission();         // pinned word-by-word kinetic scrub
    initPillars();         // horizontal pin (DESKTOP only)
    initVideoScrub();      // Scene 2 playhead (skipped on iOS/SAVEDATA)
    initStory();           // timeline draw, logo drift
    initHouse();           // Scene 3, ground inversion
    initFeatured();        // grid reveal, magnetic cards
    initFinalCta();        // KAAY/LEKK split
    initReveals();         // generic [data-reveal] catch-all
    initCursor();          // FINE only
    initOpenNow();         // live hours pill
    initGrain();           // animated film grain
    ScrollTrigger.refresh();
  }

  document.readyState === 'loading'
    ? addEventListener('DOMContentLoaded', boot)
    : boot();
})();
```

**Under `REDUCED`:** `initLenis`, `initCursor`, the marquee, all pins and all
scrubs are skipped; `initReveals` sets final states immediately. Everything else
runs.

### Video scrubbing — the correct implementation

```js
function initVideoScrub(){
  const vid = document.querySelector('[data-scrub-video]');
  if (!vid || REDUCED || SAVEDATA) return fallbackKenBurns(vid);

  // iOS Safari cannot reliably seek an unbuffered video
  const iOS = /iP(hone|ad|od)/.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (iOS) return fallbackAutoplay(vid);

  let target = 0, current = 0, raf = null;

  vid.addEventListener('loadedmetadata', () => {
    ScrollTrigger.create({
      trigger: vid.closest('[data-scrub-section]'),
      start: 'top top', end: 'bottom bottom', scrub: 0.6,
      onUpdate: self => { target = self.progress * (vid.duration || 0); if(!raf) tick(); }
    });
  }, { once: true });

  function tick(){
    current += (target - current) * 0.18;
    if (vid.readyState >= 2) vid.currentTime = current;
    raf = Math.abs(target - current) > 0.01 ? requestAnimationFrame(tick) : null;
  }
}
```

Key points: **never** assign `currentTime` outside a rAF; **always** check
`readyState >= 2`; **always** have a fallback path that looks intentional.

### Performance budget — enforce these

| Metric | Target |
| --- | --- |
| LCP | < 2.0s on 4G |
| CLS | **0** — every image and video carries explicit `width`/`height` or `aspect-ratio` |
| Total JS (excl. CDN) | < 18KB uncompressed |
| `style.css` | < 40KB uncompressed |
| Largest video | < 6MB |
| Total initial payload | < 900KB (hero poster + fonts + CSS + JS; video streams after) |
| Lighthouse Performance | ≥ 90 mobile |
| Lighthouse Accessibility | **100** |

### Performance techniques — required

- `<link rel="preload">` the three fonts and `poster-01.jpg`.
- `loading="lazy" decoding="async"` on **every** image below the fold; the hero poster is `fetchpriority="high"` and eager.
- Explicit `width`/`height` on every `<img>`; `aspect-ratio` on every video wrapper. CLS must be zero.
- `will-change: transform` **only** on actively animating elements, added and removed by GSAP — never left on in static CSS.
- Animate **only** `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`, `margin` or `filter` on scroll.
- Videos: `preload="metadata"` desktop, `preload="none"` mobile with IntersectionObserver load.
- `content-visibility: auto` with a `contain-intrinsic-size` on below-the-fold sections.
- Debounce `ScrollTrigger.refresh()` on resize at 250ms; ignore resize events whose width has not changed (iOS URL-bar scroll fires resize constantly).
- Pause **all** video playback and the grain animation on `document.hidden`.

### SEO & metadata — required in `<head>`

```html
<title>Sene Fast Food — Senegalese Restaurant in Harlem, NYC | 151 W 116th St</title>
<meta name="description" content="Senegalese breakfast, lunch and dinner in West Harlem. Thiebou Dienne, dibi, halal kitchen. Open every day 9am to midnight. 151 W 116th Street, New York.">
<link rel="canonical" href="https://senefastfood.com/">
<meta property="og:type" content="restaurant">
<meta property="og:title" content="Sene Fast Food — Dakar on 116th">
<meta property="og:image" content="assets/media/poster-02.jpg">
<meta name="theme-color" content="#140D0A">
```

Plus **`Restaurant` JSON-LD** — name, `servesCuisine: "Senegalese"`, full
`PostalAddress`, `geo`, `openingHoursSpecification` (Mo–Su 09:00–24:00), both
`telephone` numbers, `priceRange: "$"`, and `hasMenu`. This is what puts Sene in
the Google Maps panel, and for a local restaurant it matters more than any
animation in this document.

### Accessibility floor — non-negotiable

- Lighthouse Accessibility **100**. Not 98.
- All text meets WCAG AA (4.5:1 body, 3:1 large).
- Full keyboard operation, visible focus throughout.
- Reduced-motion path fully designed, not merely disabled.
- Address, hours and phone numbers are **real text in the DOM** — never baked into an image, never injected by JS. If every script on the page fails, a hungry person must still be able to read the address and tap the phone number.

### Build order — work in this sequence

1. **Scaffold** — `index.html` semantic skeleton, all ten sections, real copy, real address and hours. Verify it reads correctly with CSS and JS disabled. *This is the accessibility floor; establish it first.*
2. **Tokens & type** — `style.css` `:root`, `@font-face`, base scale, the three grounds.
3. **Static layout** — every section laid out and responsive, 360px → 1920px, with **no animation at all**. The site must be beautiful frozen before it is beautiful moving.
4. **Media** — generate the three Seedance clips, encode, place in `assets/media/`, wire posters.
5. **Lenis + ScrollTrigger** — smooth scroll, progress bar, generic reveals.
6. **Section choreography** — hero, stats, mission, pillars, scrub, story, house, featured, CTA — in page order.
7. **Interaction layer** — cursor, magnetics, hovers, velocity system.
8. **Grain, preloader, polish.**
9. **Reduced-motion pass** — set the OS flag and walk the entire page. Fix everything that breaks.
10. **Performance pass** — Lighthouse mobile, fix to budget.
11. **Device pass** — 360px, 390px, 768px, 1024px, 1440px, 1920px.
12. **Commit and push** to `claude/website-creative-build-t1r3he`.

### Definition of done

- [ ] Loads and is fully readable with JavaScript disabled
- [ ] Loads and is fully readable with the CDN blocked
- [ ] Fully usable and still beautiful with `prefers-reduced-motion: reduce`
- [ ] Zero horizontal scroll at every breakpoint from 360px up
- [ ] Zero console errors
- [ ] Lighthouse: Performance ≥ 90 mobile, Accessibility 100, Best Practices ≥ 95, SEO 100
- [ ] Every path relative — works under a GitHub Pages subpath
- [ ] Address, hours and both phone numbers correct and present as real text
- [ ] `GET DIRECTIONS` opens Google Maps at 151 W 116th St, and is reachable from every screen size within one scroll
- [ ] The scroll, top to bottom, feels like **one continuous film**

---

## 25. OPEN ITEMS FOR TALLA

Build proceeds on sensible assumptions; these would make it sharper:

1. **Real stats.** Years open, plates served, review count, number of dishes on the board. The four placeholder stats are true but modest.
2. **Prices** for lunch and dinner. Only the $10 breakfast special is confirmed; everything else currently says "call."
3. **A photo of you.** The story section is about Talla Sylla and currently has no Talla Sylla in it. One good portrait would carry that section.
4. **Real interior/exterior photography.** Generated video is the right hero; a real photo of the room is the right proof.
5. **Wolof spellings** — `Kaay lekk`, `Keur`, `Teranga` — worth a native check before launch.
6. **Domain.** The canonical URL currently assumes `senefastfood.com`.

---

*Master Build Plan · Sene Fast Food — Keur Serigne Saliou · 151 W 116th Street, Harlem, New York*
*Prepared for build by Claude Code · Static HTML/CSS/JS · GSAP · ScrollTrigger · Lenis*
