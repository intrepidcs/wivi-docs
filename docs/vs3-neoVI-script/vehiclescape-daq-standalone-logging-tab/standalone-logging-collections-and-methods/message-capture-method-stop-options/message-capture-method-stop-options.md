---
title: Message Capture Stop Options in VehicleScape DAQ Standalone Logging
description: Learn how to configure Stop Options for the Message Capture method in VehicleScape DAQ Standalone Logging. Customize data logging to stop after a set number of messages or based on expressions, pre/post collection, or one-shot reports.
keywords: [VehicleScape DAQ, message capture, stop options, standalone logging, ICS hardware, pre/post collection, one-shot report, trigger expression, data logging]
sidebar_position: 2
sidebar_label: "Message Capture Method: Stop Options"
---

# Message Capture Method: Stop Options

When using the [Message Capture](./../collections-and-methods-message-capture-method/) method for [Standalone Logging](./../../../vehiclescape-daq-standalone-logging-tab/) within VehicleScape DAQ, the choice of [Start Option](../collections-and-methods-message-capture-method/message-capture-method-start-options/) determines the Stop Option choices that appear. Table 1 summarizes the three options, shows the Start Options that each is associated with, and contains links to detailed help pages for all three.

**Table 1: Stop Options for the Message Capture Method**

| **Stop Option**                                                                                                                                                                                                                                                                   | **Description**                                                                                                                                           | **Associated Start Options**                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [Finish after collecting # messages](./message-capture-method-stop-options-finish-after-collecting-messages-or-when-expression-is-true/) or [Finish when expression is true](./message-capture-method-stop-options-finish-after-collecting-messages-or-when-expression-is-true/). | Stop logging after a certain number of messages are logged, or when an expression evaluates as true.                                                      | **Start immediately or Start when expression is true** |
| [Pre/Post Collection](./message-capture-method-stop-options-pre-post-collection/)                                                                                                                                                                                                 | Log data before and after the Collection Start trigger. The capture window can be defined using an expression, a length of time, or a number of messages. | **Start using trigger expression**                     |
| [One-shot Report](./message-capture-method-stop-options-one-shot-report/)                                                                                                                                                                                                         | Log a snapshot of data values after waiting a configurable amount of time after the Collection Start trigger.                                             | **Start using trigger expression**                     |


**Note:** The **One-shot Report** stop option is also used by the [Bus Query](../collections-and-methods-bus-query-method/) method.

