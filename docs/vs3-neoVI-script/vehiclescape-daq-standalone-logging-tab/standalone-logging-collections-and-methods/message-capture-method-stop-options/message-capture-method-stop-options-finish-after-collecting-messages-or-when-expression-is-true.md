---
title: "Message Capture Stop Options: Finish After Collecting Messages or Expression"
description: Configure Stop Options in the Message Capture method of VehicleScape DAQ Standalone Logging. Stop data logging after collecting a set number of messages or when a specific expression evaluates as true.
keywords: [VehicleScape DAQ, message capture, stop options, collect messages, finish when expression is true, standalone logging, ICS hardware, expression editor]
sidebar_position: 1
sidebar_label: "Message Capture Method: Stop Options: Finish After Collecting Messages or When Expression is True"
---

# Message Capture Method: Stop Options: Finish After Collecting Messages or When Expression is True

When using the [Message Capture](./../../collections-and-methods-message-capture-method/) method for [Standalone Logging](./../../../../vehiclescape-daq-standalone-logging-tab/) within VehicleScape DAQ, selecting **Start immediately** or **Start when expression is true** for the [Start Option](../../collections-and-methods-message-capture-method/message-capture-method-start-options/) causes the [Stop Options](../../message-capture-method-stop-options/) to consist of two choices, as shown in Figure 1:

* **Finish after collecting # messages:** Stop logging when the specified number of messages has been collected after the [Start](../../collections-and-methods-message-capture-method/message-capture-method-start-options/) trigger.
* **Finish when expression is true:** Stop logging when the selected expression is true; use the  button to build the expression using the Expression Editor.

![test](https://placehold.co/600x400 "test")
Figure 1: The Finish after collecting # messages / Finish when expression is true Stop Options.