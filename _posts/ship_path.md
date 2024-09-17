---
date: '2021-07-20T22:36:23.854Z'
title: Dynamic Planning Method of Collision Avoidance Route Based on Ship Kinematics
tagline: 'Genetic Algorithm, Path Planning, IEEE Conference'
preview: 'Genetic Algorithm, Path Planning, IEEE Conference'
image: /images/ship_obstacles.png
---

For more details, you can refer to the [published paper - IEEE link here.](https://ieeexplore.ieee.org/document/9550425)

<h3>
<strong>TL;DR:</strong> This paper presents an improved genetic algorithm (GA) integrated with ship kinematics for dynamic route planning, aimed at autonomous ship navigation and obstacle avoidance. It incorporates a kinematic model that accounts for ship turning dynamics, velocity variations, and static and dynamic obstacle avoidance. The GA is enhanced with a gravitational potential field method to ensure safe routes and improved efficiency by applying coordinate transformations. 
</h3>

<h2><strong>Ship Kinematics Model</strong></h2>
<h3>
The modeling approach in this research is based on ship kinematics, focusing on the turning and velocity dynamics during navigation. The ship’s course angle and velocity changes are described using K-T functions, with considerations for velocity decline during turning. The model simplifies the ship's behavior into a linear system, enabling calculations for navigation time and path planning in the presence of obstacles.
</h3>
<h2><strong>Genetic Algorithm</strong></h2>
<h3>
The genetic algorithm (GA) was improved by separating decisive factors and enhancing fitness evaluation. The algorithm simulates natural selection and evolution to generate optimal routes by evaluating parameters like voyage length, safety, and navigation time. GA ensures that the route avoids collisions while maintaining efficiency.
</h3>

<h2><strong>Gravitational Potential Field Method</strong></h2>
<h3>
A gravitational potential field method was combined with GA to enhance obstacle avoidance. Static obstacles are treated as positive electric charges, creating a repelling force that influences the ship’s path. This method ensures that the ship maintains a safe distance from obstacles while minimizing the complexity of the GA.
</h3>

<h2><strong>Coordinate Transformations</strong></h2>
<h3>
Coordinate transformations play a key role in dynamic obstacle avoidance. By shifting from a static to a dynamic reference system, the algorithm translates moving obstacles into a static frame for easier path planning. This reduces computational load and improves real-time performance, allowing for more efficient handling of complex environments with moving obstacles.
</h3>
<div style="text-align: center;">
  <a href="/images/ship_coordinate.png" target="_blank">
  <img src="/images/ship_coordinate.png" alt="ship"/>
  </a>
</div>
<p style="text-align: center;">Coordinate Transformation</p>

<h2><strong>Conclusion and Results</strong></h2>
<h3>
In the simulation result example below, blue circles indicate location and size of static obstacles while the green indicates the dynamic obstacles. The highlighted line is the final route.The dark dashline is the relative route to the dynamic obstacle. The light green dashline is the dynamic obstacle moving direction. The curve chart below shows the fitness value change over generations.
</h3>
<div style="text-align: center;">
  <a href="/images/ship_sim.png" target="_blank">
  <img src="/images/ship_sim.png" alt="ship_sim"/>
  </a>
</div>
<p style="text-align: center;">Route Planning Result</p>

<div style="text-align: center;">
  <a href="/images/ship_fitness.png" target="_blank">
  <img src="/images/ship_fitness.png" alt="ship_sim"/>
  </a>
</div>
<p style="text-align: center;">GA fitness</p>
<h3>
The simulation results confirm the effectiveness of the improved genetic algorithm (GA) combined with ship kinematics and the potential field method for dynamic route planning. The system successfully generated smooth and safe routes, avoiding both static and dynamic obstacles while optimizing voyage length, time, and safety. The integration of the gravitational potential field ensured safe distances during obstacle avoidance, while the use of coordinate transformations enhanced computational efficiency for navigation. The fitness variation curves showed that the population matured within 500-600 generations, indicating that adding dynamic obstacle avoidance had minimal impact on the algorithm's efficiency.
</h3>



