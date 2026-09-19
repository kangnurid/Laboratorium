---
name: Precision Scientific LIMS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#00113b'
  on-tertiary: '#ffffff'
  tertiary-container: '#002367'
  on-tertiary-container: '#5f8aff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1rem
  data-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  data-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0em
  data-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system establishes a high-performance, clinical-grade digital environment engineered for certified testing laboratories, clinical diagnostics, and industrial quality-assurance facilities. 

### Brand Personality & Philosophy
- **Uncompromising Precision:** Every UI element prioritizes absolute visual clarity, scan efficiency, and zero ambiguity under high-stress laboratory workflows.
- **Sterile Authority:** The interface projects scientific rigor through cool neutral substrates, disciplined typographic scale, and structural alignment reminiscent of analytical instrumentation software.
- **High-Density Focus:** Real estate is maximized for rich tabular data, reagent tracking, batch lineage, and real-time instrument telemetry without introducing visual exhaustion.

### Visual Style
The design system combines **Corporate Precision** with **Functional Minimalism**:
- Subtly differentiated tonal planes create clean hierarchy without decorative noise.
- Laser-sharp 1px structural dividers replace ambiguous drop shadows to support rapid cognitive grouping across dense specimen grids.
- High functional contrast guarantees immediate visibility across varying environmental conditions, including sterile cleanrooms, low-light microscopy suites, and portable tablet carts.

## Colors

The palette employs an analytical, light-dominant scheme that delivers distinct chromatic coding for critical states while maintaining a pristine clinical canvas.

### Color Rules & Architecture
- **Primary Canvas & Layering:** The primary application canvas rests on `#F8FAFC`, with functional panel containers on `#FFFFFF`. Secondary sub-panels, headers, and grouping bars leverage `#F1F5F9` bounded by fine `#E2E8F0` structural lines.
- **Primary Interactive & Deep Text:** `#0F172A` and `#1E293B` form the bedrock for critical labels, high-contrast headings, and foundational interactive elements. `#2563EB` and `#1D4ED8` function as focused action anchors for primary executions, active navigations, and verified inputs.
- **Scientific Accent:** `#0D9488` alongside `#06B6D4` is reserved for scientific instruments, reagent verification indicators, sensor links, and active telemetry states.
- **Clinical Lifecycle Tokens:** Specimen lifecycle states must strictly map to their dedicated semantic tokens. Foreground tokens are high-contrast tones passing WCAG AAA (contrast ratio > 7:1 against their companion tint backgrounds). Alert red (`#E11D48`) is preserved solely for out-of-spec QC drifts, biohazard flags, reagent depletion, and critical equipment halts.

## Typography

Typography balances rapid scanning and numeric fidelity.

### Typographic Roles & Rules
- **Inter:** Functions as the operational workhorse for structural layout, forms, table headers, narrative notes, and system alerts. Always pair `font-feature-settings: "cv02", "cv03", "cv04", "cv11", "tnum"` to enforce tabular numeric figures across all analytical data representations.
- **JetBrains Mono:** Mandated for all laboratory-unique identifiers—sample barcodes, accession numbers, test panel keys, lot/reagent identifiers, and cryo-storage coordinate tokens (e.g., `FRZ-04::RK-B2::SL-14`). The monospaced geometry eliminates misinterpretation of zero (`0`) vs capital `O` and one (`1`) vs capital `I`.
- **Case Conventions:** Systematic metadata labels (such as `BATCH STATUS`, `EXPIRY`, `INSTRUMENT ID`) strictly use `label-caps` styled with uppercase transformation and precise tracking.

## Layout & Spacing

The layout is built on an ultra-dense, responsive 12-column fluid grid system optimized for data-dense telemetry dashboards, multi-step assay protocols, and side-by-side run comparisons.

### Grid & Density Rules
- **Desktop (≥ 1440px):** 12 columns with `1.5rem` gutters and `2rem` outer margins. Accommodates dual-pane specimen inspection panels, sticky batch action bars, and collapsible sidebar trees.
- **Tablet / Workstation (768px - 1439px):** 12 columns with `1rem` gutters and `1.5rem` outer margins. Side inspection drawers shift to slide-over sheets to preserve table data column integrity.
- **Mobile / Cart Handheld (< 768px):** 4 columns with `0.75rem` gutters and `1rem` outer canvas padding. Tables convert into compact structured record cards, preserving barcode scanning fields at full touch width.
- **Data Density Metric:** Data rows default to a strict `36px` height (compact) and `44px` height (comfortable/touch) to optimize visual scan depth without accidental click target interference.

## Elevation & Depth

This design system eliminates decorative elevations and soft organic shadows, relying on **Structural Boundaries and Tonal Stacking** to establish clinical clarity.

### Depth Strategy
- **Layer 0 (Basebed):** App canvas in `#F8FAFC`.
- **Layer 1 (Surface Panels & Metric Tiles):** Neutral white `#FFFFFF` panels framed with crisp `1px solid #E2E8F0`. No box shadows.
- **Layer 2 (Contextual Popovers & Active Cells):** `#FFFFFF` with `1px solid #CBD5E1` and a low-diffusion clinical shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Layer 3 (Modal Dialogs & Emergency Overrides):** Centered `#FFFFFF` dialogs surrounded by an authoritative clinical scrim: `rgba(15, 23, 42, 0.45)` with backdrop filter `blur(2px)`.
- **Focus States:** Every focused interactive element receives a high-definition double-ring treatment: `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #2563EB` to guarantee immediate keyboard navigation confirmation during batch entry.

## Shapes

The design system uses a strict **Soft (Level 1)** shape radius geometry:
- Standard UI elements, buttons, input fields, and alert panels utilize `0.25rem` (4px) corner radii.
- Surface cards, dialog containers, and metric modules implement `0.5rem` (8px) corner radii (`rounded-lg`).
- Status pills, storage locator badges, and quick-filter chips use complete pill rounding (`9999px`) to create an immediate shape-distinction between containers (rectangular) and categorical flags (capsular).

## Components

### Buttons & Actions
- **Primary:** Filled `#1E293B` or `#2563EB`, text `#FFFFFF`, border-radius `0.25rem`, padding `0.375rem 0.875rem`. Text set in `body-md` semibold. Hover transitions to `#0F172A` / `#1D4ED8`.
- **Secondary / Outline:** Background transparent, border `1px solid #CBD5E1`, text `#1E293B`. Hover shifts to `#F1F5F9`.
- **Destructive / Halt:** Background `#E11D48`, text `#FFFFFF`. Reserved for specimen voiding, run abortion, and discard authorizations.

### Data Tables
- Header row styled with background `#F8FAFC`, border-bottom `1px solid #CBD5E1`, text in `label-caps` color `#64748B`.
- Cells padded with `0.5rem 0.75rem`. Numbers and sample IDs rendered in `data-mono-md` aligned right or monospace-aligned left. Alternating row zebra banding is disabled in favor of a hover highlight (`#F1F5F9`).
- Status cells contain unified status pills.

### Status Pills & Badges
- Constructed with pill geometry (`9999px`), padding `0.125rem 0.625rem`, font `data-mono-sm` or `body-sm` font-weight `600`.
- Includes a leading `6px` solid status circle.
  - **Pending:** Border and dot `#D97706`, text `#B45309`, background `#FEF3C7`.
  - **In Testing:** Border and dot `#0284C7`, text `#0369A1`, background `#E0F2FE`.
  - **Completed:** Border and dot `#059669`, text `#047857`, background `#D1FAE5`.
  - **Archived:** Border and dot `#64748B`, text `#475569`, background `#F1F5F9`.
  - **Alert / Warning:** Border and dot `#E11D48`, text `#BE123C`, background `#FFE4E6`.

### Cryo & Storage Matrix Badges
- Specialized compound badges for sample locations: 
  - Prefix (e.g., `-80°C FRZ-02`): Background `#0F172A`, text `#38BDF8`, font `data-mono-sm`.
  - Suffix (e.g., `RK-B4 :: SL-12`): Background `#F1F5F9`, border `1px solid #CBD5E1`, text `#334155`.

### Metric Cards with Telemetry Sparklines
- Enclosed white panel with `1px solid #E2E8F0`.
- Top row: Metric label in `label-caps` alongside quick delta indicators (`+1.4%`, `-0.02 QC`).
- Center value: Displayed in `headline-lg` tabular numerals.
- Bottom track: Inline 32px height SVG sparkline with `#0D9488` trend stroke and neutral `#E2E8F0` threshold boundary guide.

### Form Inputs & Search Filters
- Inputs feature background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, height `36px`, padding `0.25rem 0.625rem`.
- Search & Filter bar includes prefix search icon, instant barcode scanning trigger button, and dynamic filter tags with quick dismiss (`✕`) tags styled in `#F1F5F9`.