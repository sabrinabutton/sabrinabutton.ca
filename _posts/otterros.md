---
date: "2023-08-15T11:50:54.000Z"
title: Otter ROS / SaILL
tagline: A ROS 2 package for the Otter USV intended to aid researchers in the field of marine robotics and a novel LiDAR-satellite localization algorithm.
preview: >-
  A ROS 2 package for the Otter USV intended to aid researchers in the field of marine robotics and a novel LiDAR-satellite localization algorithm. Cover photo by Dr. Joshua Marshall.
image: >-
  https://i.imgur.com/ivFebMj.jpeg
---

# Otter ROS

My work on the Otter USV commenced with a series of boat upgrades and hardware integrations. This included attaching LiDAR to the Otter by designing and 3D printing a reinforced carbon-fiber PLA mount. The mount was attached to the retrival hook on the Otter's targa, as shown in Figure 1. I additionally designed and a waterproof wiring box for the lidar, and a two-piece antenna mount, both also on the targa. I additionally assisted in the wiring and concept development of a payload hardware box. This unit incorporated an ethernet switch, power board, Jetson Orin, and radio components, optimizing the Otter's hardware for advanced functionalities.

A significant milestone in this journey involved programming a Robot Operating System 2 (ROS2) driver package tailored to interface seamlessly with the Otter USV's proprietary hardware and the components our team integrated. This effort included the creation of five custom data types, streamlining control, and enabling data reception, including GPS, IMU, power metrics, and odometry data generated by a Kalman filter. This ROS2 integration elevated the Otter's capabilities and paved the way for advanced control and data analysis; our team's paper, [OtterROS: Picking and Programming an Uncrewed Surface Vessel for Experimental Field Robotics Research with ROS 2](https://arxiv.org/abs/2404.05627), was published as a workshop for ICRA 2024.

![Otter USV](https://i.imgur.com/ivFebMj.jpeg)
_Figure 1: The Otter USV with LiDAR mounted on the targa. Photo by Dr. Joshua Marshall._

# SaILL

As an extension to my prior work, I researched an designed novel particle-filter-based global localization algorithm for the Maritime Robotics Otter USV entitled SaILL (Satellite Imagery and LiDAR Localization). This algorithm enables accurate localization in GPS-denied environments, achieving up to 20 meters of global accuracy. The algorithm simulates LiDAR scans of the shoreline by raycasting on regional satellite imagery from random locations, comparing these simulated scans with real LiDAR point clouds from the Otter's LiDAR to generate precise estimates of the Otter's position. Check back later for publication details!

# Field Tests

These endeavors culminated in comprehensive in-water testing, conducted across four distinct locations in Kingston and Minden, Ontario (at the NCRN Field Trials). These tests almost resulted in myself and my labmate being capsized in a collision between our canoe and the Otter USV gone-rogue (not unlike [Stephen King's Christine](<https://en.wikipedia.org/wiki/Christine_(King_novel)>)). I've included a fun field testing photo from Minden in Figure 2!

![Mission Control](https://i.imgur.com/O9p8jia.jpeg)
_Figure 2: Mission control during a field test on a very rainy day in Minden, Ontario at NCRN field trials._

## Tech Stack

### Hardware

- Maritime Robotics AS Otter USV
- Velodyne VLP 16 LiDAR
- Jetson Orin
- GPS/IMU

### Software

- Robot Operating System 2 (ROS2) + Gazebo and RViz
- Python (matplotlib, pandas)
- C++
- OpenCV

---

## Links

- Read [OtterROS: Picking and Programming an Uncrewed Surface Vessel for Experimental Field Robotics Research with ROS 2](https://arxiv.org/abs/2404.05627) on arXiv.
