# Design Guidelines: Professional Portfolio Website

## Design Approach
**Reference-Based Approach** drawing from:
- **Linear**: Clean typography, minimal aesthetic, smooth interactions
- **Notion**: Elegant card layouts, subtle depth, organized content
- **Dribbble/Behance**: Portfolio-focused project showcases with visual hierarchy

**Key Principles**: Sophisticated minimalism, content-first design, purposeful whitespace, subtle depth through shadows and layering

---

## Typography System

**Primary Font**: Inter (Google Fonts) - body text, descriptions, forms
**Accent Font**: Poppins (Google Fonts) - headings, navigation, emphasis

**Hierarchy**:
- Hero Headline: Poppins, 3xl to 5xl (responsive), font-semibold
- Section Headings: Poppins, 2xl to 3xl, font-semibold
- Subsection Titles: Poppins, xl, font-medium
- Body Text: Inter, base to lg, font-normal, leading-relaxed
- Small Text/Labels: Inter, sm, font-medium
- Navigation: Poppins, sm to base, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing (component internals): 2, 4
- Component spacing: 6, 8, 12
- Section spacing: 16, 20
- Large gaps: 24, 32

**Container Strategy**:
- Content max-width: `max-w-6xl mx-auto`
- Full-bleed sections with inner containers
- Consistent horizontal padding: `px-6 md:px-12 lg:px-16`
- Vertical section padding: `py-16 md:py-20 lg:py-24`

**Grid System**:
- Projects: 1 column mobile, 2 columns tablet, 3 columns desktop
- Certifications: 1-2-3 responsive columns
- Timeline: Single column with connecting line (desktop left-aligned)

---

## Component Library

### Navigation
- Fixed header with backdrop blur effect
- Logo/Name left, navigation links center/right
- Theme toggle icon (sun/moon) in top-right corner
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to section anchors
- Active section indicator in navigation

### Hero Section (Home)
- Full viewport height (min-h-screen)
- Two-column layout (desktop): Left - text content, Right - professional photo placeholder
- Mobile: Stacked (photo top, content below)
- Large circular or rounded-square photo frame with subtle shadow
- Animated greeting text with typewriter effect or fade-in
- Tagline beneath name with subtle opacity
- CTA buttons: "View Projects" and "Contact Me" with distinct styling
- Scroll indicator at bottom

### About Me Section
- Two-column grid (desktop): Personal intro left, values/interests right
- Card-based layout with subtle shadows and rounded corners
- Icon accompaniment for values/interests (Heroicons)
- Quote or motto in larger, lighter text as visual break

### Work Experience Timeline
- Vertical timeline with connecting line
- Each entry: Circle/dot marker on line, card with role details
- Card structure: Role title (bold), Company name (accent), Duration (small text), bulleted responsibilities, achievements in highlight badges
- Hover: Subtle lift with shadow enhancement
- Alternating alignment (desktop) optional for visual interest

### Projects Showcase
- Filter tabs at top: All / Software / Design
- Grid layout with project cards
- Card components:
  - Featured image/thumbnail placeholder (16:9 aspect ratio)
  - Project title (bold)
  - Tech stack badges/pills beneath title
  - Brief description
  - Key highlights as bullet points
  - Action buttons: "View Demo" | "GitHub" | "Case Study"
- Hover: Image zoom effect, card elevation

### Certifications
- Grid of certification cards (cleaner than timeline)
- Each card: Certification icon/logo placeholder, name, provider, year, badge/seal placeholder
- Organized chronologically (newest first) or by category

### Contact Section
- Two-column layout: Form left, info/social right
- Form fields: Name, Email, Subject, Message (all with subtle borders)
- Social icons as large, clickable buttons (LinkedIn, GitHub, Instagram, Email)
- Form submit button prominent with hover state
- Contact info: Email link, phone placeholder displayed elegantly

---

## Interaction Patterns

**Theme Toggle**:
- Icon button in header (sun/moon icons from Heroicons)
- Smooth transition on theme change (transition-colors duration-300)
- Persist preference in localStorage

**Scroll Animations**:
- Fade-in on scroll for sections (using Intersection Observer)
- Stagger animations for grid items (cards appear with slight delay)
- Timeline entries animate in sequentially

**Hover Effects**:
- Cards: Subtle lift (translateY -2 to -4px) with shadow increase
- Buttons: Background color shift, scale 1.02
- Project images: Gentle zoom (scale 1.05)
- Navigation links: Underline animation or color shift

**Transitions**:
- All interactive elements: transition-all duration-200 to 300
- Theme switch: transition-colors duration-300
- No aggressive animations - maintain professional subtlety

---

## Responsive Behavior

**Breakpoints**: Follow Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

**Mobile (< 768px)**:
- Single column layouts
- Stacked hero section
- Hamburger navigation
- Reduced vertical spacing (py-12 instead of py-20)
- Larger touch targets for buttons (min-h-12)

**Tablet (768px - 1024px)**:
- Two-column grids where appropriate
- Maintain readable line lengths
- Adjust font sizes moderately

**Desktop (> 1024px)**:
- Full multi-column layouts
- Timeline with visual line
- Larger hero imagery
- Maximum design sophistication

---

## Icons
**Library**: Heroicons (via CDN)
- Navigation: menu, close icons
- Theme: sun, moon icons
- Social: brand icons (LinkedIn, GitHub, Instagram, envelope, phone)
- About: lightbulb, heart, target, code, palette icons
- Projects: link, code, eye icons
- Form: user, mail, chat icons

---

## Images

**Hero Section**: Large professional photograph
- Placement: Right side of hero (desktop), top (mobile)
- Style: Circular or rounded-square frame (rounded-2xl or rounded-full)
- Size: 400-500px diameter (desktop), full-width mobile
- Alt text: "Professional portrait"

**Project Thumbnails**: Multiple placeholder images
- Placement: Top of each project card
- Aspect ratio: 16:9
- Treatment: Rounded corners (rounded-lg), overflow-hidden
- Hover: Slight zoom effect

**About Section**: Optional secondary photo or illustration
- Placement: Accent image in about cards (optional)
- Style: Smaller, decorative

---

## Accessibility
- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for theme toggle, navigation, form fields
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Sufficient color contrast in both themes (WCAG AA minimum)
- Keyboard navigation fully supported
- Skip-to-content link for screen readers

---

This design balances professional polish with personal warmth, creating a portfolio that showcases both technical skill and design sensibility while maintaining subtle, timeless elegance.