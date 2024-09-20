---
title: "Message Capture Stop Options: One-shot Report in VehicleScape DAQ"
description: Configure the One-shot Report Stop option in VehicleScape DAQ Standalone Logging. Define trigger delay and record time to capture data snapshots after a trigger event for ICS hardware.
keywords: [VehicleScape DAQ, message capture, one-shot report, stop options, standalone logging, ICS hardware, trigger expression, data snapshot, bus query method]
sidebar_position: 3
sidebar_label: "Message Capture Method: Stop Options: One Shot Report"
---

# Message Capture Method: Stop Options: One Shot Report

When using the [Message Capture](./../../collections-and-methods-message-capture-method/) method for [Standalone Logging](./../../../../vehiclescape-daq-standalone-logging-tab/) within VehicleScape DAQ, selecting **Using Trigger Expression** for the [Collection Start Option](../../collections-and-methods-message-capture-method/message-capture-method-start-options/) causes the [Collection Configuration](../../message-capture-method-stop-options/) to consist of two options: [Pre/Post Collection](../message-capture-method-stop-options-pre-post-collection/) and One-shot Report (described here). The One-shot Report is also used for the [Bus Query](./../../collections-and-methods-bus-query-method/) method.

Figure 1 shows the appearance of the Stop Options subsection of the Standalone Logging tab when **One-shot Report** is selected.

![test](https://placehold.co/600x400 "test")
Figure 1: The One-shot Report Collection Configuration.


## After trigger delay

This entry specifies how long the logger should wait after the trigger event to log the data snapshot. If set to 0, the one-shot report occurs immediately.

## Record time

How much time the logger should spend capturing bus messages.