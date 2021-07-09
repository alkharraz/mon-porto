---
title: "Design of a 5-Speed Manual Transmission for FWD cars for Toyota cars."
tags: ["Autodesk Inventor", "Gears Design",]
date: "2020-12-28"
---

The design of the Toyota’s 5 speed manual transmission gearbox include: **gears**, **shafts**, **bearings**, **housing** and the **mechanical keys** and the **shafts**. Designing gears in mechanical engineering is a vast and a complex process. To transmit power from speed and torque, a gear box is used, the transmission is possible due to the meshing of gears teeth. 


<p align ="center">
  <img src="https://i.ibb.co/ZXCtnjq/Assembly1.png"  alt="Gearbox designed in Autodesk Inventor" width="560" class="center"/>
</p>


By knowing the gears ratio for the transmission, the design process began: 

|  1st  	|  2nd  	|  3rd  	|  4th  	|  5th 	| Reverse 	| Final 	|
|:-----:	|:-----:	|:-----:	|:-----:	|:----:	|:-------:	|:-----:	|
| 3.545  	| 1.904 	| 1.310 	| 1.031 	| 0815 	|  3.250  	| 3.941 	|

<p>&nbsp;</p>


##### Gears: 
1. Number of teeth for each gear is calculated in line19 based on the min number of teeth for each gear
2. Rotational speed calculated and torque
3. Diametral pitch chosen based on the size of the gearbox and then diameter and central distance
4. AGMA analysis 

##### Shafts: 
1. The shaft’s length was determined by the face width of the gears, some bearings, and more importantly the space left between gears intentionally for collars which are not included in this design the result was a length of 38 in
2. Calculations were conducted on CD 1020 at the beginning where a factor of safety of 1.25 was considered, but a diameter of 1.08 in was required so a change in material selection was made and AISI 1060 was chosen which required less than an inch in diameter, the diameter was rounded up to 1 and a calculation of the factors of safety was made. The result of the factors of safety was satisfactory in terms of required factors of safety by the company.
3. A calculation for deflection was also conducted to find the maximum deflection in the shaft using an online calculator which yielded a maximum deflection of 0.02227 in considering a 200 GPa modulus of elasticity and a 0.7853 in^4

##### Bearings: 
- Since the reaction forces and the bore diameters are known, the bearing selection is straightforward. Ball bearing is therefore chosen for the gearbox from the ball bearing tables. Then checked in inventory to see if they are suitable.

##### Mechanical Keys
- The key selection was based on their sizes and the shafts sizes. A square key was then selected for the fatigue failure to be less critical according to the distortion energy failure theory, and equal to the maximum shear stress failure theory.







