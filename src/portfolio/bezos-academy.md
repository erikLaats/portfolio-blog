---
title: "BELLA"
client: "Bezos Academy"
date: 2025-04-09
tags: portfolio
thumbnail: "/images/portfolio/icons/bella_icon.png"
tech: "React/TypeScript"
role: "Lead Developer"
shipped: 2025
platform: "Web"
workedOn: "March 2024 - April 2025"
url: "asdf"
splash: "/images/portfolio/bella_1.png"
---


{% include "postMeta.njk" %}


BELLA is a web-based language and math assessment platform designed for learners ages 3–5. The core application is built with TypeScript and uses Phaser 3 within an HTML5 canvas to deliver interactive, game-like assessments. Gameplay mechanics include touch-based writing input, drag-and-drop counting, 3D object manipulation, and in-browser audio recording.

To support the different use cases of teachers and parents, we implemented multiple authentication methods and access paths. A "magic link" system generates temporary tokens and URL parameters for secure, password-free access via email. We also developed a deep-linking mechanism to enable integration with the client’s proprietary LMS, allowing teachers to launch BELLA directly from their platform with context-aware session tokens.

<img class="portfolio-img" src="/images/portfolio/bella_2.png" />

BELLA also includes an internal React-based dashboard for teachers and administrators to track student progress, analyze classroom trends, and export performance reports. The dashboard is designed with modular components, role-based access, and flexible data visualization patterns for showing results from different testing periods and classrooms.

Craft CMS was used to manage the assessment items, which are organized into item sets, subtests, and forms. Craft publishes the content as a large JSON file to a CDN, so the app can easily consume it and ensure students are taking the most up-to-date version of the assessment.