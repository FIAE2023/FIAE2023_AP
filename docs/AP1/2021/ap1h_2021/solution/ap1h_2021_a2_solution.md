---
id: ap1h_2021_a2_solution
title: AP1 Herbst 2021 Aufgabe 2
description: My document description
---

## AP1 Herbst 2021 Aufgabe 2 Lösung [Tobias Kindler](<../../../../user/Auszubildende Michel/kindler.md>)

## AP1 Aufgabe 2
Im Rahmen des Umzugs sollen einige PCs neu angeschafft werden. Der Kunde soll sich zwischen zwei PC-Varianten entscheiden.
Beide PC-Varianten sind nahezu baugleich bis auf das verwendete Netzteil.

Sie wurden damit beauftragt, für eine Besprechung die Energieffizienz der beiden PCs unter ökonomischen Gesichtspunkten zu vergleichen.

Betriebsstunden:
- 9 Stunden pro Tag
- Betrieb an 20 Arbeitstagen pro Monat

Die  beiden zu vergleichenden PCs sind wie folgt ausgestattet:
- PC-A hat ein niedrigpreisiges Netzteil ohne Zertifikat
- PC-B hat ein Netzteil nach dem 80Plus Gold Standard

### Aufgabe 2a) - Thema Energiekosten berechnen - 6 Punkte
Errechnen Sie die Leistung und die Energiekosten pro Monat, wenn eine kWh 20 Cent kostet.

Dem englischsprachigen Manual des Netzteilskönnen Sie folgende Definitionen entnehmen:
Efficiency = Useful power output/Total power input  
![Aufgabe a)](/img/AP1/2021/ap1h_2021/H21A2a.png)

### Lösung zur AP1 Aufgabe 2a)

9h/d * 20d/m = 180h/m  
60W * 0,76 = 78,94W  
78,94W * 180h = 14.209Wh = 14,2kWh  
14,2kW * 30cent = 426cent = 4,26€    
  
139,53W * 180 = 25.115W = 25,1kW  
25,1kW * 30cent = 753cent = 7,53€
  
![Aufgabe 2 a Lösung](/img/AP12021/ap1h_2021/solution/H21A2aL.png)

### Aufgabe 2b) - Thema Amortisierungsrechnung  - 4 Punkte
Der PC mit dem Netzteil nach dem 80Plus Gold Standard kostet in der Anschaffung 100EUR mehr.

Berechnen Sie die Dauer in Monaten, ab der sich die Anschaffung amortisiert hat.
Hinweis: Falls Sie Aufgabe a) nicht lösen konnten, rechnen Sie bei PC-A mit 6,83 EUR und bei PC-B mit 4,78 EUR.

### Lösung zur AP1 Aufgabe 2b)
7,53€ - 4,26€ = 3,27€  
100€ / 3,27€/m = 30,58m  
Das Netzteil amortisiert sich in 31 Monaten.  

### Aufgabe 2c) - Thema Energiekosten senken - 3 Punkte
Machen Sie drei weitere Vorschläge zur Senkung der Energiekosten des IT-Arbeitsplatzes.

### Lösung zur AP1 Aufgabe 2c)
- Geräte die nicht benutzt werden sollten ausgeschaltet werden 
und nicht nur in den Energiesparmodus versetzt werden.
- Bildschirmhelligkeit senken
- bei Tageslicht Lampen ausschalten

### Aufgabe 2d) - Thema elektrische Stromstärke berechnen - 4 Punkte
Bei der Installation der Geräte stellen Sie fest, dass folgende Geräte über eine einzige Mehrfachsteckdosemit der Aufschrift "maximal 16 A" angeschlossen werden sollen.
- 3 PCs mit einer maximalen Leistungaufnahme von jeweils 180 W
- Ein Drucker mit einer maximalen Leistungsaufnahmen von 400 W
- Eine Kaffeemaschine mit einer maximalen Leisungsaufnahme von 1.200 W
- Klimagerät mit einer maximalen Leisungsaufnahme von 2.000 W

Weisen Sie durch eine Rechnung nach, dass diese Geräte nicht gleichzeitig betrieben werden können.

### Lösung zur AP1 Aufgabe 2d)
Formel:
P = U * I  
I = P / U  
  
3 * 180W + 400W +1.200W + 2.000W = 4.140W  
4.140W / 230V = 18A  
18A > 16A 

### Aufgabe 2e) - Thema Speicher berechnen (Pseudocode) - 8 Punkte
Für den gewählten Rechner wird eine Datensicherung erstellt. Ihr Kollege hat das folgende Script erstellt, welches eine Warnung ausgeben soll, wenn der Speicherplatz auf dem Ziellaufwerk Z unter 15 % fällt.  
![Aufgabe e)](/img/AP1/2021/ap1h_2021/H21A2e.png)  
Leider funktioniert das Script nicht wie gewünscht und bringt eine Warnmeldung, obwohl das Laufwerk nur zu 50 % gefüllt ist.
Lesen Sie sich die folgende Anleitung (manual) durch und korrigieren Sie in der obigen Tabelle die **zwei Fehler**.

Manual: To use a comparison operator, specify the values that you want to compare together with an operator that separatesthese values. The Shell includes the following comparison operators.:

| **Operators** | **Description** |
| --- | --- |
| -eq | equals |
| -ne | not equals |
| -gt | greater than |
| -ge | greater than or equal |
| -lt | less than |
| -le | less than or equal |

Note:   
Write-Host produce a display output.  
Get-Volume return a Volume object that match the specified criteria.

### Lösung zur AP1 Aufgabe 2e)
![Aufgabe 2 e Lösung](/img/AP12021/ap1h_2021/solution/H21A2eL.png)

## Selbsterstellte Aufgabe

- Hier kommt die selbsterstellte Aufgabe als Bild oder Text rein

## Lösung der Selbsterstellten Aufgabe

- Hier kommt die Lösung zur selbsterstellten Aufgabe als Bild oder Text rein
