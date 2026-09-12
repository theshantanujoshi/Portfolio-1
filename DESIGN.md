---
name: Harsh Pratap Portfolio
description: An intelligent, data-driven personal portfolio.
colors:
  primary: "#5E6470"
  background: "#f0f0f0"
  surface: "rgba(255, 255, 255, 0.5)"
  border: "#e5e7eb"
typography:
  display:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 600
  headline:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 600
  body:
    fontFamily: '"Inter", sans-serif'
    fontWeight: 400
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  full: "9999px"
spacing:
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
---

# Design System: Harsh Pratap Portfolio

## Overview

**Creative North Star: "The Intelligent Slate"**

This system embraces a technical, analytical, and data-driven aesthetic. It prioritizes structure and clarity, utilizing a monotonous, restrained color palette to keep the focus on content and achievements. The design is layered and tactile, employing subtle glassmorphic surfaces, soft shadows, and gentle hover movements to create an interactive experience that feels responsive and polished.

**Key Characteristics:**
- Monotonous and restrained color palette.
- Layered, tactile surfaces with glassmorphism.
- Large, friendly border radii contrasting with technical typography.
- Smooth, physics-based motion on interactions.

## Colors

A monotonous and restrained scheme that relies on contrast and transparency rather than vibrant hues.

### Primary
- **Technical Slate** (#5E6470): The primary accent color in light mode, used for buttons, icons, and key text emphasis. In dark mode, this inverts to solid White (#ffffff).

### Neutral
- **Background Light** (#f0f0f0): The main canvas color for light mode.
- **Background Dark** (#080808): The main canvas color for dark mode.
- **Glass Surface** (rgba(255,255,255,0.5)): The translucent background used for cards and floating elements.
- **Subtle Border** (#e5e7eb): Used to define structural boundaries on light surfaces.

**The Monotonous Rule.** Stick to the grayscale and slate spectrum. Avoid introducing new vibrant accent colors; use opacity and contrast to create visual hierarchy.

## Typography

**Display Font:** Inter (with sans-serif)
**Body Font:** Inter (with sans-serif)

**Character:** Clean, highly legible, and objective. Inter provides a technical yet accessible voice suitable for data science and engineering contexts.

### Hierarchy
- **Display** (600, clamp(2.5rem, ...)): Used exclusively for the hero section name.
- **Headline** (600, text-3xl): Used for major section titles (e.g., "About Me", "Experience").
- **Title** (600, text-xl): Used for project titles and role designations.
- **Body** (400, text-base): Used for descriptions, about text, and general reading.
- **Label** (500, text-sm): Used for chips, tags, and secondary metadata.

## Layout

The layout is structured around a central max-width container (`max-w-[1400px]`). Sections are stacked vertically with generous vertical rhythm (`py-16` or `py-24`). Content within sections often uses CSS Grid or Flexbox to manage side-by-side details (like the 3-column footer).

## Elevation & Depth

The system uses a layered and tactile philosophy, combining translucent glassmorphic backgrounds with subtle drop shadows to lift elements off the canvas.

### Shadow Vocabulary
- **Rest** (`shadow-sm`): Applied to cards and buttons by default to establish their distinct layer.
- **Hover** (`shadow-md`, `-translate-y-1`): Used to indicate interactivity on cards and project tiles.

**The Tactile Lift Rule.** Elements that can be interacted with should respond physically. When hovered, cards and buttons should lift slightly (`-translate-y-1`) and increase their shadow spread.

## Shapes

The form language is characterized by extremely rounded, soft corners that offset the technical typography.

- **Main Sections/Wrappers:** 32px (`rounded-[2rem]`)
- **Cards:** 24px (`rounded-[1.5rem]`)
- **Buttons & Small Containers:** 12px (`rounded-xl`)
- **Chips & Profiles:** Fully rounded (`rounded-full`)

## Components

### Buttons
- **Shape:** Soft rectangle (12px radius, `rounded-xl`).
- **Primary:** Technical Slate (#5E6470) background with white text (Light Mode) or White background with black text (Dark Mode).
- **Hover:** Darkens to black (Light Mode) or lightens to gray-200 (Dark Mode), with increased shadow.

### Cards
- **Corner Style:** Large (24px radius, `rounded-[1.5rem]`).
- **Background:** Translucent glass (white/50 in light, white/5 in dark) with background blur (`backdrop-blur-md`).
- **Border:** Delicate 1px solid border (#e5e7eb or white/10).
- **Shadow Strategy:** Rests at `shadow-sm`, lifts to `shadow-md` on hover.

### Chips / Tags
- **Style:** Small text (text-xs or text-sm), fully rounded or 12px radius, translucent background with a subtle border.
- **State:** Static, used for displaying tech stacks and skills.

## Do's and Don'ts

### Do:
- **Do** use large border radii (24px - 32px) for structural containers to maintain the approachable feel.
- **Do** apply `backdrop-blur-md` and semi-transparent backgrounds to cards to create depth against the solid background.
- **Do** ensure physical, tactile transitions on interactive elements (e.g., `-translate-y-1` on hover).

### Don't:
- **Don't** introduce vibrant or saturated colors outside of the monochrome/slate spectrum.
- **Don't** use sharp, 0px border radii on structural elements.
- **Don't** use solid, opaque backgrounds for cards; always retain a degree of glassmorphism.
