---
id: ap1h_2022_a4_solution_vrbanic
title: AP1 Herbst 2022 Aufgabe 4 Lösung Vrbanic
description: Lösung zur AP1 im Herbst 2022 Aufgabe 4
---

# AP1 Fruehjahr 2022 Aufgabe 2 Lösung
#### Von [Vrbanic](../../../user/Auszubildende%20Michel/vrbanic.md)

----

## Aufgabe 4 - SQL und Diagramme - 24 Punkte:
### Aufgabe 4a) - Walzanlage
![Aufgabe 4a Aufgabenstellung](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4a_Aufgabenstellung.png)
### Aufgabe 4aa) - Output ohne ID - 3 Punkte
![Aufgabe 4aa](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4aa.png)
### Aufgabe 4ab) - Spezfizierte Dicke - 4 Punkte
![Aufgabe 4ab](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4ab.png)
### Aufgabe 4ac) - Produktionsanzahl - 4 Punkte
![Aufgabe 4ac](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4ac.png)
### Aufgabe 4b) - Struktogramm - 7 Punkte
![Aufgabe 4b](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4b.png)
### Aufgabe 4b Vorlage) - Struktogramm Vorlage
![Aufgabe 4b Vorgabe](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4b_Vorgabe.png)
### Aufgabe 4c) - Entity-Relationship-Modell - 6 Punkte
![Aufgabe 4c](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4c.png)
### Aufgabe 4c Vorlage) - Entity-Relationship-Modell Vorlage
![Aufgabe 4c Vorgabe](/img/AP1/2022/ap1h_2022/AP1_2022_Herbst_Aufgabe4c_Vorgabe.png)

----

## Lösung zur Aufgabe 4:
### Aufgabe 4aa)
SELECT Width, Length, Thickness, Quantity FROM ProductionData WHERE OrderID = 736298;

### Aufgabe 4ab)
SELECT COUNT(*) FROM ProductionData WHERE Thickness = 2;

### Aufgabe 4ac)
SELECT SUM(Quantity) FROM ProductionData WHERE Thickness = 2 AND Width = 200 AND Length = 300;

---

### Aufgabe 2b)
[Aufgabe 4b Solution](/img/AP1/2022/ap1h_2022/solution/AP1_2022_Herbst_Aufgabe4b_Solution_Vrbanic.png)

### Aufgabe 2c)
[Aufgabe 4c Solution](/img/AP1/2022/ap1h_2022/solution/AP1_2022_Herbst_Aufgabe4c_Solution_Vrbanic.png)

----

## Test Aufgabe:

----

## Lösung zur Selbsterstellten Aufgabe:
