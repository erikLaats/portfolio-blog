---
title: "Neurofit"
client: "Drexel University"
date: 2030-04-09
tags: portfolio
thumbnail: "/images/portfolio/icons/nf_icon.png"
tech: "Unity/C#"
shipped: 2021
role: "Developer"
platform: "iOS/Android"
url: "https://www.gpb.org/education/gasha-go-world"
workedOn: "June 2021 - March 2022"
splash: "/images/portfolio/neurofit_1.png"
---

{% include "postMeta.njk" %}

Neurofit is a native mobile app developed in Unity using C#, created to support a health and wellness research study by Drexel University's WELL Center. The app encourages participants to engage in daily fitness and nutrition goals by offering sci-fi-themed rewards and progression systems tied to real-world activity. The app will be used for the 5 years the program runs, and has been used by hundreds of participants.

Using the Fitbit API and subscription-based notifications, Neurofit receives real-time updates on participant activity such as exercise, steps, and sleep. Players are grouped into teams and assigned monthly challenges—successful teams level up, earn badges, and unlock customizable components for their spaceship avatar. When certain thresholds are passed for physical activity or weight, OneSignal is used to send notifications to players who aren't curren't using the app to let them know about their achievement.

We also designed and built a Craft CMS implementation to allow the researchers to manage their participants and view and export data. It also made it possible for their team to manually tweak gameplay parameters to ensure the study goes smoothly.

In order to track and reward the consumption of certain foods, we built a food database automatically populated by foods consumed by participants. They would be categorized based on certain characteristics and approved by the researchers, such that whenever that food was recorded, it would be automatically recognized. In this way, the food system grew to be able to handle over 30,000 unique foods.

Participants are prompted to choose foods to "target" and foods to "avoid." To reinforce these choices, the app features a cognitive training minigame, where players pilot their spaceship through an asteroid field filled with their chosen foods. They must collect the foods they have targeted, while avoiding the rest.