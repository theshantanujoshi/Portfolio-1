---
name: Harsh Pratap Portfolio
description: A bold, glitched technical portfolio featuring rust and deep midnight blue hues.
colors:
  primary: "#B45309"
  background: "#070b14"
  surface: "rgba(15, 23, 42, 0.7)"
  border: "rgba(120, 53, 15, 0.3)"
typography:
  display:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 700
  headline:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 700
  body:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 500
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  full: "9999px"
spacing:
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#fef3c7"
    rounded: "{rounded.lg}"
    padding: "20px 40px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.3xl}"
    padding: "32px 48px"
---

# Design System: Harsh Pratap Portfolio

## Overview

**Creative North Star: "Glitched Rust & Midnight"**

This system replaces the prior clean slate with a highly kinetic, atmospheric identity. A deep, dark bluish metallic background (`#070b14`) is driven by a restless, iridescent rust-brown shader. The UI floats on thick, dark midnight glass panels, accented heavily by saturated amber and bronze (`bg-amber-800`, `text-amber-200`). The focal point of the identity is a CSS-driven chromatic glitch effect on the hero typography, lending it a chaotic, futuristic hacker aesthetic.

**Key Characteristics:**
- Kinetic, fast-moving bronze/rust fluid background over midnight blue.
- Deep midnight glass cards (`bg-[#0f172a]/70`).
- Saturated Bronze/Rust typography and buttons (`text-amber-200`, `bg-amber-800`).
- Chromatic aberration glitch effects (`glitch-effect`) on massive display text.
- Heavy tactile elevation combined with buttery Lenis smooth scrolling.

## Colors

### Primary Accent (The Rust)
- **Amber/Bronze** (`text-amber-200`, `bg-amber-800`): The signature accent color used for all highlights, buttons, and titles. It brings a fiery, metallic contrast against the dark background.

### Neutral (The Midnight)
- **Deep Midnight Canvas** (`#070b14`): The underlying void.
- **Midnight Glass** (`bg-[#0f172a]/70`): Translucent navy cards that capture the kinetic shader fluid behind them.

**The Contrast Rule:** Never use light mode backgrounds. The entire site exists in a perpetual dark/midnight state, illuminated only by the rust-colored fluid and amber typography.

## Typography

**Display Font:** Inter (with sans-serif)
**Body Font:** Inter (with sans-serif)

### Hierarchy
- **Display** (700, text-9xl, tracking-tighter, `.glitch-effect`): The hero title, constantly flickering with red and blue chromatic offsets.
- **Headline** (700, text-4xl/5xl, text-amber-200): Used for major section titles.
- **Body** (500, text-lg/xl, text-amber-200/80): Rust-tinted body text.

## Elevation & Motion

- **Fluid:** The background shader runs at `speed={1.5}` for a restless, churning effect.
- **Glitch:** Continuous `clip-path` animation with `text-shadow` offsets creates the signature glitch identity.
- **Scroll:** Global `Lenis` smooth scrolling provides luxurious, frictionless navigation.

## Shapes

- **Main Sections/Wrappers:** 40px (`rounded-[2.5rem]`)
- **Cards:** 32px (`rounded-[2rem]`)
- **Buttons & Small Containers:** 16px (`rounded-2xl`)
