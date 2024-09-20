---
title: "Message Capture Restart Options in VehicleScape DAQ"
description: Explore restart options for the Message Capture method in VehicleScape DAQ. Learn how to configure restart behaviors based on selected Start and Stop options for ICS hardware data logging
keywords: [VehicleScape DAQ, message capture, restart options, standalone logging, ICS hardware, start expression, one-shot report, pre/post collection]
sidebar_position: 4
sidebar_label: "Message Capture Method: Restart Options"
---

# Message Capture Method: Restart Options

In VehicleScape DAQ [Standalone Logging](./../../../vehiclescape-daq-standalone-logging-tab/), a number of restart options are available for the [Message Capture](./../collections-and-methods-message-capture-method/) method. There are three possible choices, but which ones are available depends on the selected [Start Option](../collections-and-methods-message-capture-method/message-capture-method-start-options) and [Stop Option](../message-capture-method-stop-options/).

## Start Option = Start Immediately

In this case there are two restart options with the **Force restart** option grayed out (Figure 1):

* **Do not restart the collection when finished:** End logging after data has been captured.
* **Restart the collection when finished:** Start logging again after initial data capture.

![test](https://placehold.co/600x400 "test")
Figure 1: Restart Options when Start Option = Start immediately.

## Start Option = Start When Expression is True

In this case there are three restart options. The option controls what happens after [the correct number of messages are collected or the finish expression is true](./../message-capture-method-stop-options/message-capture-method-stop-options-finish-after-collecting-messages-or-when-expression-is-true/):

* **Do not restart the collection when finished:** End logging.
* **Restart the collection when finished:** Start logging again when the start expression is again true.
* **Force restart (do not wait for start expression):** Restart again regardless of the condition of the start expression.

Figure 2 shows the three options.

![test](https://placehold.co/600x400 "test")
Figure 2: Restart Options when Start Option = Start when expression is true.

## Start Option = Start Using Trigger Expression

There are again here three basic restart options, but which appear depends on other settings made in the Standalone Logging area:

* **Do not restart the collection when finished:** End logging. This option is always available unless the [Pre/Post Collection](./../message-capture-method-stop-options/message-capture-method-stop-options-pre-post-collection/) Method is selected and the **Stop on expression** box is checked (which makes the **Do not restart** option here irrelevant, so it is grayed out).
* **Restart the collection when finished:** Start logging again; if triggering based on when an expression is true, do so when the start expression is true again. This option is always available.
* **Force Restart:** If **Trigger when expression is true** is selected, and the **One-shot Report** Stop Option is chosen, this item is enabled to allow restart regardless of the condition of the start expression.

**Note:** For Pre/Post Collection, choosing **Restart** will erase the oldest capture with new data.

Table 1 summarizes which restart options are available based on selected Standalone Logging settings. Figure 3 shows an example where **Trigger when expression is true** and **One-shot Report** are both selected.

**Table 1: Available Restart Options Based on Trigger Event and Stop Option**

| **Trigger Option**                                                                            | **Pre/Post Collection without Stop on Expression Checked** | **Pre/Post Collection with Stop on Expression Checked** | **One-shot Report**                    |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------|---------------------------------------------------------|----------------------------------------|
| Trigger when expression is true                                                               | Do Not Restart, Restart                                    | Restart                                                 | Do Not Restart, Restart, Force Restart |
| Trigger when expression changes                                                               | Do Not Restart, Restart                                    | Restart                                                 | Do Not Restart, Restart                |
| Trigger when expression increases / decreases / changes / exceeds constant and then decreases | Do Not Restart, Restart                                    | Restart                                                 | Do Not Restart, Restart                |

![test](https://placehold.co/600x400 "test")
Figure 3: Restart Options when Start Option = Using Trigger Expression, the Trigger when expression is true suboption is selected, and the One-shot Report Stop Option has been chosen.