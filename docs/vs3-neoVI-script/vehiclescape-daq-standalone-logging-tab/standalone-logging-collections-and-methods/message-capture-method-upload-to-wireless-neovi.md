---
title: "Wireless Upload Settings for Message Capture in VehicleScape DAQ"
description: Configure wireless upload options for Message Capture in VehicleScape DAQ using neoVI PLASMA. Learn about WiFi, Ethernet, and 3G cellular upload options for automatic log file transfers.
keywords: [VehicleScape DAQ, wireless upload, neoVI PLASMA, WiFi upload, cellular upload, ICS hardware, standalone logging, WirelessNeoVI, data logging]
sidebar_position: 5
sidebar_label: "Message Capture Method: Upload to Wireless neoVI"
---

# Message Capture Method: Upload to Wireless neoVI

In VehicleScape DAQ [Standalone Logging](./../../../vehiclescape-daq-standalone-logging-tab/), the **Upload to Wireless neoVI** settings for the [Message Capture](./../collections-and-methods-message-capture-method/) method enable the wireless communication capabilities of the neoVI PLASMA. There are two options (Figure 1):

**WiFi / Ethernet:** Each time this collection stops, automatically upload its log file to a WirelessNeoVI server using the neoVI PLASMA WiFi or Ethernet link.

**Cellular:** Each time this collection stops, automatically upload its log file to a WirelessNeoVI server using the neoVI PLASMA 3G cellular link.

WiFi is faster than 3G, but WiFi signals may be hard to find in some areas. Cellular is slower, but has more universal signal coverage.

**Note:** These settings may also be used by the [Bus Query](./../collections-and-methods-bus-query-method/) method when the appropriate hardware is in place.

![test](https://placehold.co/600x400 "test")
Figure 1: Upload to Wireless neoVI options for wireless connectivity using the neoVI PLASMA.