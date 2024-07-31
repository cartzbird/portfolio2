---
date: '2024-07-20T22:36:23.854Z'
title: System Identification on Drones Attitude Control System
tagline: 'System Identification, MATLAB, Digital Control, Quadcopter, UBC'
preview: 'System Identification, MATLAB, Digital Control, UAV, Quadcopter, UBC'
image: /images/System Identification of a Quadrotor.jpg
---

<h3>
<strong>TL;DR:</strong> The scope of work for this project is to model and analyze the dynamics of a quadcopter's low-level attitude control system using MATLAB’s high-fidelity simulations from the UAV Design toolbox. The following tasks were undertaken-
Experiment Design, Data Collection, Data Handling and Model Selection, Cross-Validation and Analysis and Result Interpretation.
</h3>

<h3>
DUTIES: Identified an unknown UAV attitude dynamics by input design, FFT, and model construction & estimation in MATLAB.
</h3>

<h3>
ACHIEVEMENTS: 100% output prediction accuracy. Intepreted models’ differences in noise(Residuals) from frequency and time domain perspectives.
</h3>
<div style="text-align: center;">
  <a href="/images/Drone.png" target="_blank">
  <img src="/images/Drone.png" alt="Drone"/>
  </a>
</div>

<p style="text-align: center;">UAV reference system</p>

<h2><strong>Introduction</strong></h2>
<h3>
The project explores UAV advancements, specifically focusing on quadrotors. It aims to identify a linear model for the attitude dynamics using indirect closed-loop system identification techniques. The complexity of quadrotor control due to its under-actuated nature and cascaded control loops is highlighted, setting the stage for the identification tasks.
Experiment Design and Simulator Description
</h3>
<h3>
The project employs MATLAB's UAV Design toolbox to simulate the quadrotor's dynamics, including environmental effects like gravity and drag. Input signals, such as pseudo-random binary sequences (PRBS) and sums of sinusoids (SoS), were designed for data collection. The data collected included responses to pitch and roll commands in both SISO and MIMO configurations, emphasizing the careful handling of system complexity and non-linear behavior.
</h3>

<a href="/images/fig_UAV_simulator.png" target="_blank">
  <img src="/images/fig_UAV_simulator.png" alt="alt text" />
</a>

<p style="text-align: center;">Simulink model of the Closed loop system with disturbances</p>
<h2><strong>Indirect Closed-loop System Identification</strong></h2>
<h3>
We focus on identifying transfer functions for both the process and disturbance models. ARX and ARIMAX models were considered, and data was preprocessed by splitting into training and validation sets. The identification process involved deriving linear models from closed-loop data, ensuring model accuracy through reduction techniques.
</h3>

<h2><strong>Challenges and Solutions</strong></h2>
<h3>
1. Complexity of System:
The quadrotor system includes both position and attitude controllers. To simplify the study, the x and y position controllers were removed. This allowed the focus to be on pitch and roll dynamics, excluding yaw control due to its independent control mechanisms in quadcopters.
</h3>
<h3>
2. Limitation of Input Design:
The study faced limitations in the amplitude of the designed input signals. When the amplitude exceeded a certain threshold, the model's behavior went beyond the simulation's boundaries. Therefore, input amplitudes were capped to maintain the model's validity.
</h3>
<h3>
3. Data Truncation for Linearity:
The plant response to the designed input often showed significant variations in the z-axis and steep angles in pitch and roll, indicating non-linear behavior. To focus on linear system identification, the data was truncated to include only the linear operating regions
</h3>
<a href="/images/SoS.png" target="_blank">
  <img src="/images/SoS.png" alt="SoS" />
</a>
<p style="text-align: center;">SoS input trajectory and UAV response</p>

<h2><strong>Validation</strong></h2>
<h3>
Validation was conducted using fit and correlation metrics. Models were cross-validated using different input signal types, including PRBS and SoS. The ARX and ARIMAX models achieved high accuracy up to 100%, with some failing correlation tests but generally performing well. The validation emphasized the robustness of the models across varying scenarios, including SISO and MIMO cases.

![alt text](image.png)

<a href="/images/validation_example.png" target="_blank">
  <img src="/images/validation_example.png" alt="validation" />
</a>
<p style="text-align: center;">E.g. Simulated output fits and correlation–ARX, training set: PRBS/SoS, validation set: SoS</p>

<h2><strong>Further Observation and Interpretation</strong></h2>
</h3>
<h3>
The impact of model structure on auto-correlation tests was examined, noting that adjusting poles and zeros could improve model performance. The training set's influence was analyzed, showing that PRBS models outperformed SoS models in certain validations. The SoS models struggled with high-frequency predictions, as revealed through a frequency domain analysis using fast Fourier transform(FFT), highlighting the limitations of input signal design.
</h3>
<a href="/images/FFT.png" target="_blank">
  <img src="/images/FFT.png" alt="validation" />
</a>
<p style="text-align: center;">FFT on PRBS (Deep blue) and SoS (Pale blue)</p>

<h2><strong>Conclusion</strong></h2>
<h3>
The project successfully identified linear models for quadrotor attitude dynamics. MATLAB's tools facilitated data collection and model validation. The report suggests future work in exploring non-linear models and adaptive control systems to enhance UAV performance and safety, indicating potential improvements in modeling and real-world application.
</h3>




