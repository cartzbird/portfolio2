---
date: '2024-07-20T22:36:18.886Z'
title: Design of a Simple 32-bit Processor in Verilog
tagline: 'Processor, Modelsim, Verilog, UBC'
preview: >-
  Processor, Modelsim, Verilog, UBC
image: /images/processor.png
---
The goal of this project is to realize the modular design of a 32-bit processor architecture in verilog. The architecture is shown in the figure.
![alt text](../images/processor.png)
In a team of four, I was responsible for register bank & MUX & Decoder module design and test bench, part of memory control module design, RAM instruction auto-fetching function design, and module connecting & debugging.

It’s noteworthy that the architecture of this processor project eliminates a separate instruction control module. Instead, the design integrates a single address bus shared between data access and instruction access, managed through a multiplexer (MUX) controlled by the memory control module. I realized this feature through sequential design within the memory control module.

To achieve auto-fetching, I introduced an output signal named "trigger" in the RAM module. This signal toggles between 1 and 0 each time the current instruction is fetched. The trigger then activates the instruction address counter, which increments its current value used as the instruction access address.

We experienced a Chip corporate-like collaboration in this project using git and github service, from project planning, modular design, testing, to final delivery. All the original design requirements were 100% achieved.


