---
name: Harsh Pratap Portfolio
description: An intelligent, data-driven personal portfolio with a dynamic slate fluid background.
colors:
  primary: "#5E6470"
  background: "#f0f0f0"
  surface: "rgba(255, 255, 255, 0.7)"
  border: "rgba(255, 255, 255, 0.4)"
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
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "20px 40px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.3xl}"
    padding: "32px 48px"
---

# Design System: Harsh Pratap Portfolio

## Overview

**Creative North Star: "The Intelligent Slate"**

This system embraces a technical, analytical, and data-driven aesthetic anchored by a dynamic, iridescent slate fluid background. It prioritizes structure and clarity through massive, heavily tracked typography and extremely thick glassmorphism. The design is profoundly tactile, employing heavy drop shadows and exaggerated hover lifts (`-translate-y-2`) to create an interactive experience that feels substantial, polished, and decisive.

**Key Characteristics:**
- Monotonous, technical slate palette.
- Expansive, thick glassmorphic surfaces (`backdrop-blur-2xl`, `bg-white/70`).
- Massive display typography (`text-9xl`) with tight tracking.
- Heavy, physics-based motion and deep shadows (`shadow-xl`).
- A globally interactive, iridescent slate fluid background.

## Colors

A restrained scheme relying entirely on contrast, opacity, and thick glass rather than vibrant hues.

### Primary
- **Technical Slate** (#5E6470): The primary accent color and the base color for the dynamic shader background (`[0.37, 0.39, 0.44]`). It serves as the brand's core identity.

### Neutral
- **Thick Glass Surface** (rgba(255,255,255,0.7)): High-opacity translucent backgrounds used for all structural cards to stand out against the fluid background.
- **Structural Border** (rgba(255,255,255,0.4)): Pronounced borders that define boundaries on glass surfaces.

**The Monotonous Rule.** Stick to the grayscale and slate spectrum. Let the iridescent shader and thick glass create visual hierarchy instead of introducing new hues.

## Typography

**Display Font:** Inter (with sans-serif)
**Body Font:** Inter (with sans-serif)

**Character:** Bold, massive, and highly legible. The typography scale is pushed to its absolute limits for structural impact.

### Hierarchy
- **Display** (700, text-9xl, tracking-tighter): Used for the main hero name.
- **Headline** (700, text-4xl/5xl, tracking-tighter): Used for major section titles.
- **Title** (700, text-2xl/3xl, tracking-tight): Used for project titles and role designations.
- **Body** (500, text-lg/xl): Thick, medium-weight body text for descriptions.
- **Label** (600, text-sm, tracking-widest, uppercase): Used for chips, meta tags, and section kickers.

## Layout

The layout is structured around a central max-width container (`max-w-[1400px]`). Sections are stacked vertically with generous vertical rhythm (`py-10` to `mb-16`). The `Hero` acts as a transparent window revealing the background, while subsequent sections use heavy glass cards.

## Elevation & Depth

The system uses a profoundly tactile philosophy, lifting thick glass cards high off the fluid background.

### Shadow Vocabulary
- **Rest** (`shadow-md`): Applied to cards and buttons to establish strong baseline elevation.
- **Hover** (`shadow-xl`, `-translate-y-2`): Exaggerated lift indicating high interactivity and physical weight.

**The Tactile Lift Rule.** Interactive elements must possess physical weight. When hovered, large cards lift dramatically (`-translate-y-2`) and cast a deep `shadow-xl`.

## Shapes

The form language pairs aggressive typography with exceedingly soft, friendly structural shapes.

- **Main Sections/Wrappers:** 40px (`rounded-[2.5rem]`)
- **Cards:** 32px (`rounded-[2rem]`)
- **Buttons & Small Containers:** 16px (`rounded-2xl`)
- **Chips & Profiles:** Fully rounded (`rounded-full`)

## Components

### Buttons
- **Shape:** Soft rectangle (16px radius, `rounded-2xl`).
- **Primary:** Technical Slate (#5E6470) or true Black (#000000) background with bold white text. 
- **Hover:** Significant lift (`-translate-y-1`) and `shadow-xl`.

### Cards
- **Corner Style:** Extra Large (32px - 40px radius).
- **Background:** Thick glass (`white/70` in light, `white/10` in dark) with aggressive background blur (`backdrop-blur-2xl`).
- **Border:** Pronounced translucent border (`white/40` or `white/60`).
- **Shadow Strategy:** Rests at `shadow-md`, lifts to `shadow-xl` and `-translate-y-2` on hover.

### Chips / Tags
- **Style:** Small, bold text (`text-sm font-semibold`), fully rounded or 16px radius, translucent background (`white/80`) with a visible border.
- **State:** Static, used for displaying tech stacks and skills.

## Do's and Don'ts

### Do:
- **Do** use massive border radii (32px - 40px) to balance the aggressive typography.
- **Do** apply `backdrop-blur-2xl` and `bg-white/70` to create thick, substantial glass against the dynamic background.
- **Do** exaggerate tactile transitions (`-translate-y-2`, `shadow-xl`).

### Don't:
- **Don't** revert to flat colors; allow the global Iridescence shader to define the canvas.
- **Don't** use thin or standard typography; keep headings at `font-bold` and `tracking-tighter`.
- **Don't** use subtle shadows (`shadow-sm`) for structural cards; they must feel heavy.
