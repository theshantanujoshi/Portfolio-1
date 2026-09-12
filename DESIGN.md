---
name: Harsh Pratap Portfolio
description: A hyper-modern, architectural portfolio featuring massive typography and liquid silver fluid over clear glass.
colors:
  primary: "#000000"
  background: "#f8f9fa"
  surface: "rgba(255, 255, 255, 0.4)"
  border: "rgba(255, 255, 255, 0.6)"
typography:
  display:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 900
  headline:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 900
  body:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 500
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  full: "9999px"
spacing:
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "20px 40px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.3xl}"
    padding: "40px 80px"
---

# Design System: Harsh Pratap Portfolio

## Overview

**Creative North Star: "Liquid Silver & Architectural Glass"**

This system represents a complete structural and aesthetic turnaround. Moving away from dark atmospheric glitch themes, it embraces a clinical, high-end, brutalist aesthetic. The UI is built on a foundation of liquid silver/pearl (a high-brightness Iridescence shader) overlaid with perfectly clear, heavily blurred glass panels. Typography is massive, unapologetic, and purely monochromatic.

**Key Characteristics:**
- Liquid Silver shader fluid (`bg-[#f8f9fa]` with pearl iridescence).
- Heavily blurred Architectural Glass (`bg-white/40 backdrop-blur-[40px]`).
- Brutalist Typography (Inter Black `font-black`, massive `text-[12vw]`, highly negative tracking).
- Absolute high-contrast monochromatic foregrounds (Pure Black and Pure White).
- Scroll-linked cinematic reveals via Framer Motion.

## Colors

### Primary Accent (Pure Monochromatic)
- **Obsidian Black** (`#000000`): Used for all text, headings, and primary buttons. Creates stark architectural contrast.
- **Pure White** (`#ffffff`): Used for glass highlights and button text.

### Neutral (The Environment)
- **Silver Canvas** (`#f8f9fa`): The underlying void that the liquid silver fluid moves across.
- **Clear Glass** (`rgba(255, 255, 255, 0.4)`): Thick, highly blurred panels that catch the fluid motion.

**The Contrast Rule:** This is a light-mode absolute theme. The entire site exists in a blinding, hyper-clean silver environment. No dark mode toggles.

## Typography

**Display Font:** Inter (with sans-serif)
**Body Font:** Inter (with sans-serif)

### Hierarchy
- **Display** (900, `text-[12vw]`, `tracking-tighter`, `uppercase`): Used for the massive hero name split across the screen.
- **Headline** (900, `text-4xl/5xl`, `tracking-tighter`, `uppercase`): Used for major section titles, often stacked.
- **Body** (500, `text-lg/xl`, `text-black/90`): Clean, balanced, and perfectly legible.

## Elevation & Motion

- **Fluid:** The background shader is high-brightness, moving slowly like liquid mercury.
- **Cinematic Reveals:** Elements fade and slide up (`y: 40` to `0`) sequentially as the user scrolls, driven by Lenis and Framer Motion's `whileInView`.
- **Scroll:** Global `Lenis` smooth scrolling provides luxurious, frictionless navigation.

## Shapes

- **Main Sections/Wrappers:** 48px (`rounded-[3rem]`)
- **Cards & Elements:** 32px (`rounded-[2rem]`)
- **Buttons & Tags:** Fully rounded (`rounded-full`)
