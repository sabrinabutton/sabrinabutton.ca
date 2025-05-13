---
date: "2024-12-06T11:50:54.000Z"
title: Autonomous Pet Feeder
tagline: An autonomous pet feeder with AI-driven pet recognition. Created for MREN 318 by Sabrina Button, Ethan Varkul, and Will Steedman. Credit to Will Steedman for the cover render.
preview: >-
  An autonomous pet feeder with AI-driven pet recognition. Designed by Sabrina Button, Ethan Varkul, and Will Steedman. Cover render by Will Steedman.
image: >-
  https://i.imgur.com/KWDSYBS.jpeg
---

This feeder is an intelligent, internet-connected system that ensures pets are fed consistently and safely—even when owners are away. Below is an in-depth dive into our design, engineering trade-offs, and software logic.

➡️ [Demo - AI Pet Recognition + TCP Communication on an Autonomous Pet Feeder](https://youtu.be/ULbh-ibkO7Q)

---

## 📌 Project Summary

**Objective:** Create a customizable, reliable, and safe automated feeder that adjusts to pet type and feeding schedules.
**Company Alias:** Petronix (fictitious for course purposes)
**Core Features:**

* Smart scheduling via a web interface
* Animal recognition using AI
* Dual-motor control for dispensing and bowl serving
* Airtight storage and secure bowl containment

---

## 🛠️ Mechanical Design

Our design separates the feeder into two mechanical subsystems: **Dispensing** and **Serving**.

### Mechanism & Actuator Choice

Each subsystem was sized based on torque and speed requirements. A **helical screw driven by a stepper motor** was used to dispense food. The **serving tray** is actuated via a servo motor and linear guide system.

- Dispensing: 42STH47-1684B Stepper – High torque and speed, continuous rotation
- Serving: HS-422 Servo – Limited rotation, precise position control


A gear-up stage was added for the servo to achieve the necessary range of motion.

---

## 📷 Sensor Integration

We use a multi-sensor approach for robust functionality:

### Ultrasonic Sensor (HCSR04)

* Detects when a pet is in front of the feeder
* Mounted at the front of the hopper
* Fast 60ms cycle time and 4m range

### IR Sensor (GP2Y0A41SK0F)

* Monitors remaining kibble in hopper
* Mounted facing downward from the lid
* Interpolated distance based on manufacturer curves

### ArduCAM Mini

* Captures JPEG stills for pet identification
* Sends images to a Flask server via TCP
* Lightweight CNN processes images to identify dog, cat, or neither

### Load Cell (Abandoned)

Initially used for PID weight control. Abandoned due to dynamic error and sensitivity limitations. We switched to **time-based portioning** for consistency.

---

## 🧠 Software Architecture

### State Machine Overview

The core logic is a loop-driven **state machine**. Each loop iteration does the following:

1. Updates the UI and variables
2. Checks the kibble level
3. Executes a specific state action (e.g. "FILLING BOWL")

![Feeder state machine logic](https://i.imgur.com/UscWxt0.jpeg)

If an error is detected, the system returns to the `IDLE` state for safety.

### State Action Logic

Each state handles specific logic. Here's a breakdown of which actions are triggered in each state:

![State action logic per state](https://i.imgur.com/IwMqspj.jpeg)

### Web UI Features

The lightweight web interface is hosted on the Arduino itself. It supports:

* Reading system variables (hopper fullness, time to next meal, bowl status)
* Setting feeding parameters
* Activating "override mode" (manual control)
* EEPROM saving/loading of settings
* Calibration of the hopper’s empty state

![Screenshot of pet feeder web UI](https://i.imgur.com/NkjT7JY.png)

![Web UI Logic](https://i.imgur.com/Hdx4dSd.jpeg)

---

## 🎯 System Objectives

### Variable Control

System variables are adjustable from the web UI and saved in EEPROM to persist through reboots. This ensures pets receive the correct schedule regardless of power state.

### Portion Control

We use a **time-based method** for feeding: a calibrated 3-second auger run equals one serving. This avoids reliance on the noisy load cell while ensuring consistent portions.

### Web Override Mode

An override mode allows users to remotely control the bowl and auger, halting the automatic loop. This is useful for maintenance or emergency feeding.

![Override control panel](https://i.imgur.com/ZdiKwcf.png)

### Secure Bowl Containment

The bowl is mechanically hidden during the dispensing phase to prevent premature access. The bowl extends only when feeding is complete.

---

## 🧠 AI Pet Recognition via TCP

We implemented **AI-based pet detection** using a JPEG burst from ArduCAM sent to a laptop Flask server over TCP. A lightweight CNN classifies the image as:

* Dog
* Cat
* Neither

This result determines whether the bowl is extended and food is dispensed.

![TCP Logic](https://i.imgur.com/9rpqcRh.png)

---

## 🧩 Key Takeaways

* A modular mechanical and software design makes the system adaptable and repairable
* Despite sensor limitations (notably the load cell), reliable performance was achieved via creative trade-offs
* Real-time web-based control and AI integration added both convenience and novelty
* Mechanical and software safety features ensure pet and device safety

---

This project was completed by the Petronix Feeder Team for MREN 318:

* Sabrina Button
* Will Steedman
* Ethan Varkul
