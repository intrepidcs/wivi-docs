---
title: "Status Reporting in VehicleScape DAQ Standalone Logging"
description: Explore Status Reporting options in VehicleScape DAQ Standalone Logging, including LEDs, neoVI MOTE feedback, and Beep on Wakeup (PLASMA only). Customize how logger status is displayed and controlled.
keywords: [Status Reporting, Standalone Logging, VehicleScape DAQ, LED indicators, neoVI MOTE, Beep on Wakeup, logging feedback, Intrepid hardware]
sidebar_position: 2
sidebar_label: "Standalone Logging: Status Reporting"
---

# Standalone Logging: Status Reporting

In the [Standalone Logging](./../../vehiclescape-daq-standalone-logging-tab/) mode of VehicleScape DAQ, the Status Reporting section contains options that specify how feedback is provided on the state of the logging process. These are universal settings that apply to all collections using any of the four collection methods: [Message Capture](./../standalone-logging-collections-and-methods/), [Histogram](../standalone-logging-collections-and-methods/collections-and-methods-histogram-method/), [Bus Query](../standalone-logging-collections-and-methods/collections-and-methods-bus-query-method/) or [Ethernet DAQ](../standalone-logging-collections-and-methods/collections-and-methods-ethernet-daq-method/).

The default appearance of this subsection of the Standalone Logging screen can be found in Figure 1.

<div class="text--center">

<figure>

![std-report](../../assets/std-report.png "std-report")
<figcaption>Figure 1: Standalone Logging Status Reporting Options.</figcaption>
</figure>
</div>

There are three main options here, each of which is enabled with a checkbox: **LEDs, Use neoVI MOTE** and **Beep on Wakeup (PLASMA only)**.

## LEDs

Use LEDs to indicate the current logger status:

* **<span class="text-red">Red LED</span> Flashing:** Logger is running.
* **<span class="text-green">Green LED</span> Flashing Slowly:** Data is being captured to the SD card.
* **<span class="text-green">Green LED</span> Flashing Quickly:** Post-trigger data is being captured.

## Use neoVI MOTE

Use the neoVI MOTE for simple feedback and control features. Enabling this option causes additional options to appear in the right half of the Status Reporting box (Figure 2).

<div class="text--center">

<figure>

![std-report-mote](../../assets/std-report-mote.png "std-report-mote")
<figcaption>Figure 2: Standalone Logging Reporting Options including neoVI MOTE options.</figcaption>
</figure>
</div>

Special options for using the neoVI MOTE for reporting:

* **Network:** Which network to use.
* **Expressions to Display:** Select one or more expressions to be displayed in scrolling text on the neoVI MOTE.
* **Buzz on Start/Trigger:** The neoVI MOTE will make a sound (selectable using the adjacent drop-down box) when the logger is started or triggered.
* **Show "Triggered" Message:** The neoVI MOTE will display a message when the logger has triggered.

## Beep on Wakeup (PLASMA Only)

When enabled, the neoVI PLASMA will beep each time it wakes up.