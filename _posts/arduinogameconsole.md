---
date: "2020-10-12T11:50:54.000Z"
title: Arduino Handheld Game Console
tagline: An arduino-based handheld game console with a 2.8" TFT display, 8 buttons, and a novel lego case.
preview: >-
  An arduino-based handheld game console with a 2.8" TFT display, 8 buttons, and a novel lego case.
image: >-
  https://i.imgur.com/ph30ol9.png
---

# Project Overview

Amid the COVID-19 pandemic, I embarked on a weekend project inspired by online gaming console creations utilizing Raspberry Pi. I sought to replicate a similar concept using an Arduino, spare push buttons, and a display salvaged from a previous endeavor.

I prototyped the console's housing using LEGO bricks. This allowed for precise customization, featuring strategically placed holes for convenient access to the Arduino ports, a dedicated panel for the buttons, and a secure enclosure for the LCD display. The modular design even enabled easy removal of the LCD panel to access the Arduino and the terminal block, which managed connections between the buttons and Arduino I/O pins.

Taking a creative approach, I leveraged binary matrices to craft custom LCD-printable characters for an interactive game. In this game, the user-controlled character navigated the screen, collecting gifts while avoiding traps through button inputs. The gameplay mechanics involved manipulating the LCD display matrix and adjusting character coordinates based on user inputs or predefined paths. The gifts and traps were dynamically generated, constantly advancing towards the left side of the screen, adding an element of challenge and excitement to the gaming experience.

# Demo

Here's a [visual demonstration of this project](https://youtu.be/8fNFOhTsp44).