# CariKeras UI

Shared UI foundation for the CariKeras ecosystem.

CariKeras UI is a Bootstrap-based visual layer inspired by the information architecture and presentation style commonly used by Indonesian learning platforms: strong blue/yellow branding, clear navigation, large hero sections, program/catalog cards, rounded white surfaces, and responsive layouts.

It is not a copy of another brand. The components, tokens, copy, naming, and implementation are original to CariKeras.

## Goals

- Bootstrap 5 compatible
- Static-first and framework-agnostic
- Easy to consume from GitHub + jsDelivr
- Responsive by default
- Reusable across every *.cari.cc.cd service
- Small enough to load quickly
- Easy to override with CSS variables

## CDN

Pin a tag or commit in production. Avoid the moving main branch.

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/carikeras/ui@v0.1.0/dist/carikeras.min.css"
    >

CariKeras UI expects Bootstrap 5 CSS to be loaded first:

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/carikeras/ui@v0.1.0/dist/carikeras.min.css"
    >

For interactive Bootstrap components, load the bundled JavaScript:

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

## Primary visual language

- CariKeras Blue: #2386c8
- Sky Blue: #31a9dc
- CariKeras Yellow: #ffc515
- Ink: #20354d
- Surface: #ffffff
- Soft Surface: #f2f7fb

The theme intentionally uses a blue-to-sky hero treatment similar in visual weight to the reference style while keeping CariKeras branding independent.

## Repository layout

    ui/
    ├── css/
    │   └── carikeras.css
    ├── dist/
    │   ├── carikeras.css
    │   └── carikeras.min.css
    ├── js/
    │   └── carikeras.js
    ├── index.html
    ├── package.json
    └── README.md

## Demo

The repository root contains an interactive style guide. Deploy it to ui.cari.cc.cd.

## Versioning

Use semantic version tags:

    v0.1.0
    v0.2.0
    v1.0.0

Keep CDN references pinned to a release tag or commit SHA so every CariKeras service receives deterministic styling.
