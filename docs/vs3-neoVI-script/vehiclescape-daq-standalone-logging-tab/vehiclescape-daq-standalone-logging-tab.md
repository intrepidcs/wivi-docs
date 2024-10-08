---
title: "VehicleScape DAQ: Standalone Logging Setup Guide"
description: Learn how to configure standalone logging in VehicleScape DAQ for ICS hardware. Set up signal logging, manage power, and retrieve data from SD cards or Wireless neoVI.
keywords: [VehicleScape DAQ, standalone logging, ICS hardware, SD card logging, CoreMini scripting, Wireless neoVI, neoVI PLASMA, data logging, power management, script generation]
sidebar_position: 1
sidebar_label: "VehicleScape DAQ: Standalone Logging Tab"
---

# VehicleScape DAQ: Standalone Logging Tab

Standalone Logging in VehicleScape DAQ generates a script to allow ICS hardware to collect data independently (while disconnected from a computer). This requires that the ICS hardware support an SD card and CoreMini scripting. This application note contains a walkthrough of setting up a standalone logger.

## Creating a Standalone Logger

Follow these general steps to create a standalone logger using VehicleScape DAQ:

1. Verify that the Databases & Hardware Setup are correct.
2. Select signals to log on the Channels Tab.
3. Configure all Standalone Logging settings and click **Generate**.
4. Send the Standalone Logging script to ICS hardware.

After the hardware has finished logging, the data can be retrieved from its SD card using the Extract/Export feature. If using a neoVI PLASMA, the data can also be retrieved from just about anywhere using the WirelessNeoVI website.

## Standalone Logging Page Layout

The Standalone Logging page is divided into two main areas (Figure 1):

* **Upper Area:** This is where [Collections and Methods](./standalone-logging-collections-and-methods/) are defined; the region includes a list of currently-defined collection sets on the left, collection-specific parameters on the right, and a set of collection method buttons on top. The options in this area change depending on which method is selected for a DAQ setup.

* **Lower Area:** Three sets of options that affect all DAQ setups regardless of the collection method used, though again these can change depending on your selections. These are described further in Table 1, with links to pages containing more information.

**Table 1: Standalone Logging Universal Option Areas**

| Option Area                                                    | Description                                                                                             |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Status Reporting](./standalone-logging-status-reporting/)     | Options for physical logger feedback and live data reporting to a Wireless NeoVI website.               |
| [Power Management](./standalone-logging-power-management/)     | Logger power management, sleep and wakeup selections.                                                   |
| [Generation Options](./standalone-logging-generation-options/) | Generates the final script and opens a dialog to send it to ICS hardware capable of standalone logging. |

<div class="text--center">

<figure>

![std-logging-tab](../../assets/std-logging-tab.png "std-logging-tab")
<figcaption>Figure 1: The VehicleScape DAQ Standalone Logging Tab is logically divided into an upper area that lists collections and shows options that vary depending on the selected collection method, and a lower area with universal options applicable to all methods.</figcaption>
</figure>
</div>