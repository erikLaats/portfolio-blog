---
title: "ELA Village"
client: "K12 Education"
date: 2029-04-09
tags: portfolio
thumbnail: "/images/portfolio/icons/elavillage.png"
tech: "React/TypeScript"
shipped: 2023
role: "Lead Developer"
platform: "Web"
url: "https://www.fablevisionstudios.com/ela-village"
workedOn: "June 2022 - January 2023"
splash: "/images/portfolio/elavillage_1.png"

---

{% include "postMeta.njk" %}

ELA Village is a RPG-style educational game built to engage students in reading comprehension through exploration, quests, and interactive storytelling. The world is filled with characters with tasks and requests the player may fulfill. While navigating the village, players can collect coins to unlock upgrades to their castle and decorate their lawn.

The app is developed in TypeScript with React as a wrapper and state manager, and uses Phaser 3 to render the overworld, animations, and gameplay logic inside an embedded canvas. A custom dialogue and quest system powers branching conversations, tracks quest progress, and ties in directly with reading-based objectives. In order to meet accessibility requirements, some interactive elements are tracked with HTML elements to expose their functionality and behavior to screen readers and browsers.

<!-- ![image info](../../images/portfolio/elavillage_2.png) -->
<img class="portfolio-img" src="/images/portfolio/elavillage_2.png" />

One of the biggest challenges was embedding 4 preexisting minigames created by the client. The application uses React routes to display the minigames in separate iframes and stores the current state of the main game in storage and memory. Once players are done playing, messages are exchanged between layers to reward the player with coins.

The game is playable in browser on both desktop and mobile, and is accessible via screen reader and keyboard.