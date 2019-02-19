# Asteroid
 Simulation of the disintegration of an Asteroid on the Earth's atmosphere
 
 ## Introduction
 - Particle system is a technique to represent real phenomena as a large number of very small sprites
 - A particle is a visible element during its life cycle
 - Each particle has determined shape,color(or bitmap),size,speed,weight and life time
 - The phenomena to be reproduced is the disintegration of this asteroid
 
 ## Particle Management
- Particle has been managed with the use of the GPU
- We create each particle and put it in a vector , then we pass all to the GPU
- In this way we manage a large number of particles
- We have tested the program with a maximum of 100,000 particles
 
 ### Asteroid
An asteroid is a little celestial body similar to a terrestrial planet
The asteroid is modified by changing the particle specifications
 The disintegration has been represented in several level :
 - Out of the Atmosphere
 - Inside the Atmosphere
 - Near to the earth
### Earth
- We used the default libraries of THREE.js
- It has been represented as a Sphere Geometry where material , geometry and texture were handled
- The rotation of the earth is manage with the function ‘rotation’ in THREE.js

### Atmosphere
- Similarly to the earth the atmosphere have been managed with THREE.JS
- It has been represented as a Sphere Geometry where material , geometry and texture were handled like the earth
- To give the effect of  transparency and opacity to sorround the earth we have managed the relative properties of the material

## THREE.js
- Three.js is an Open Source javascript library that offers methods for creating 3D graphics element in a web browser.
- Three.js allows to create complex 3D animations and system that may be much difficult using only javascript
- A well explained documentation can be found here : https://threejs.org/

## Procedure
Vertex Shader
- Attributes
- Uniforms
- Particle Size
Fragment Shader
- Texture
- Uniforms
Three.js
- Initialize scene
- Initialize Earth, Atmosphere,Asteroid


## Formulation of Motion
- Before entering the Earth's atmosphere the asteroid performs a uniformly accelerated motion without loss of mass
- When it impacts with the Earth's atmosphere, the asteroid begins to crumble and loses its mass
- When it is near the Earth, the asteroid crumbles completely into non-perceptible particle

## Resulting Scene
- The resulting scene will see the asteroid move of uniform rectilinear motion towards the earth
- Approcching the atmosphere will decrease its spreed and begin to lose particles leaving a trail
- Entering the atmosphere its speed increase and here begins the fade of the particle 
- Once he arrives at the earth he will cease to exist by finishing the fading

## How to Start Disgragation
- The first step is to decide how many particles the asteroid will be made of
- The second step is to press the button “Let's go”
- We next move the camera to see le disgragation in other views

## Conclusion
- The first step is to decide how many particles the asteroid will be made of
- The second step is to press tab
- We next move the camera to see le disgragation in other views





