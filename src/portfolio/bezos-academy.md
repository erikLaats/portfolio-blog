---
title: "[Under NDA]"
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


This application (under NDA) is a web-based language and math assessment platform designed for learners ages 3–5. The core application is built with TypeScript and uses Phaser 3 within an HTML5 canvas to deliver interactive, game-like assessments. Gameplay mechanics include touch-based writing input, drag-and-drop counting, 3D object manipulation, and in-browser audio recording.

The assessment is composed of hundreds of different questions divided into tests, subtests, and forms. The client needed to be able to manage this material themselves, so we developed a Craft CMS instance which publishes the content as a large JSON file to a CDN. The app can consume it at launch and ensure students are taking the most up-to-date version of the assessment.

Due to the sensitive nature of collecting student data, we maintained a high level of security while supporting multiple authentication methods and access paths. AWS Cognito was used to manage different user groups and provide a authentication foundation. A "magic link" system generates temporary tokens and URL parameters for secure, password-free access via email. We also developed a deep-linking mechanism to enable integration with the client’s proprietary LMS, allowing teachers to launch the app directly from their platform with context-aware session tokens.

<img class="portfolio-img" src="/images/portfolio/bella_2.png" />

This project also includes an internal React-based dashboard for teachers and administrators to track student progress, analyze classroom trends, and export performance reports. The dashboard is designed with modular components, role-based access, and flexible data visualization patterns for showing results from different testing periods and classrooms.