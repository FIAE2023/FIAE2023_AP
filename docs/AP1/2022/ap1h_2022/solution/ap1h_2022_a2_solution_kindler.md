---
id: ap1h_2022_a2_solution
title: AP1 Herbst 2022 Aufgabe 2 - Lösung Tobias Kindler
description: My document description
---

## AP1 Herbst 2022 Aufgabe 2 Lösung [Tobias Kindler](<../../../../user/Auszubildende Michel/kindler.md>)

## AP1 Aufgabe 2
Die Package AG plant die Anschaffung einer kleinen Fertigungslinie für Karton, welche mit einer Arbeitsbreite von **508 mm** und eine Produktionsgeschwindigkeit von **30,48 m/min** Karton auf Rollen produziert. Die Anlage soll **zwölf Stunden pro Tag** produktiv sein.

Karton wird zum Teil aus Altpapier hergestellt, Unreinheiten wirken sich auf die Qualität des Kartons aus. Zur Qualitätssicherung wird die erzeugte Kartonbahn fortlaufend durch eine Kamera gescannt. Die entstandenen Bilder werden ausgewertet und anschließend gespeichert. Bei erkannten Verfärbungen der Oberfläche oder Einschlüssen im Karon werden die aktuellen Rollen als mindere Qualität eingestuft.

Erfasste Scanfläche:    **50,80 cm** breit x **30,48 cm** lang
Auflösung:  400 dip x 400 dpi
Farbtiefe:  16 Bit
1 Inch: 2,54 cm

### Aufgabe 2a)
Ermitteln Sie zunächst die Zahl der Scans/Aufnahmen pro Tag. Der Rechenweg ist anzugeben.

### Lösung zur AP1 Aufgabe 2a)

30,48m/min / 30,48cm = 100 Bilder  
24h * 60min * 100Bilder = 72.000 Bilder/Tag 

### Aufgabe 2b)
Die Daten der Scans werden einen Tag für Auswertung und Qualitätskontrolle gespeichert.

#### Aufgabe 2 ba)
Ermitteln Sie das zu speichernde Datenvolumen in MiB pro Scan. Der Rechenweg ist anzugeben

#### Lösung zur AP1 Aufgabe 2ba)
50,80cm / 2,54cm/Inch = 20Inch   
30,48cm / 2,54cm/Inch = 12Inch   
20Inch * 12Inch = 240 Inch²   
  
400dpi * 400dpi = 160.000dpi²   
160.000dpi² * 16 = 2.560.000bit/Inch²  
  
38.400.000bit/Inch² * 240Inch²/Scan = 614.400.000bit/Scan   
  
614.400.000bit/Scan / 8 = 76.800.000B/Scan   
76.800.000B/Scan / (2^20) = 73,24MiB/Scan   

#### Aufgabe 2 bb)
Ermitteln Sie anschließend das gesamte zu speichernde Datenvolumenpro Tag in TiB.
Runden Sie das Ergebnis auf volle TiB auf.
Der Rechenweg ist anzugeben.

Hinweis: Sollten Sie Aufgabe a) oder Teilaugabe ba) nicht gelößt haben, gehen Sie von **100.000 Scans/Aufnahmen** pro Tag und **70 MiB** Datenvolumen pro Scan aus.

#### Lösung zur AP1 Aufgabe 2bb)
72.000Bilder * 73,24MiB/Bild = 5.273.280MiB   
5.273.280MiB / (2^20) = 5TiB 

### Aufgabe 2c)
In Abstimmung mit der IT-Abteilung beschließen Sie, ein redundantes Speichersystem einzurichten. Dazu sind folgende Komponennten verfügbar:
- 2 Festplatten (je 3 TB Speicherkapazität)
- 7 Festplatten (je 2 TB Speicherkapazität)
- PCI RAID-Hostadapter

#### Aufgabe 2 ca)
Mit allen vorhandenen Festplatten soll eine fehlertolerante RAID 5-Konfiguration erstellt werden, welche die größtmögliche Nettospeicherkapazität biete.

Berechnen Sie die maximale Nettospeichekapazität in TB. Der Rechenweg ist anzugeben.
___
RAID-Level:
___
Netto-Speicherkapazität:
___

#### Lösung zur AP1 Aufgabe 2ca)
Bei RAID 5 verliert man eine Festplatte für die Parität und alle Festplatten werden auf die Größe der kleinsten Festplatte beschränkt.  
9 - 1 = 8  
8 * 2TB = 16TB  
___
RAID-Level: 5
___
Netto-Speicherkapazität: 16TB
___

#### Aufgabe 2 cb)
Für einen Vergleich soll auch die Speicherkapazität berechnet werden, wenn man die gegbenen Festplatten als JBOD (Zusammenvassung aller Festplatten zu einem logischen Volumen) nutzt.

Ermitteln Sie die erreichbare Speicherkapazität in TB. Der Rechenweg ist anzugeben.
___
Speicherkapazität in TiB:   *Ich glauge das TiB ist ein Schreibfehler, weil in der Aufgabenstellung TB steht.*
___

#### Lösung zur AP1 Aufgabe 2cb)
2 * 3TB + 7 * 2TB = 20TB
___
Speicherkapazität in TiB: 20TB   
___

#### Aufgabe 2 cc)
Beschreiben Sie zwei Vorteile, die ein Laufwerksverbund als JBOD gegenüber einem RAID 0 bietet. 

#### Lösung zur AP1 Aufgabe 2cc)
- Wenn eine Festplatte kaputt geht, gehen bei JBOD nur die Daten verloren, die auf der Festplatte 
gespeichert sind, bei RAID 0 gehen alle Daten im RAID verloren.
- JBOD kann die ganze Speicherkapazität der Festplatten nutzen, während bei RAID 0 alle Festplatten 
auf die Größe der kleinsten Festplatte begrenzt.

### Aufgabe 2d)
Die im Netzwerk der Hauptverwaltung eingesetzten NAS-Speichersysteme sollen durch ein SAN (Strorage Area Network) abgelöst werden.

Nennen Sie drei Vorteile, die den Einsatz begründen.

### Lösung zur AP1 Aufgabe 2d)
- SAN hat geringere Latenzzeiten
- SAN lässt sich leichter erweitern
- SAN belastet nicht das bestehende Netzwerk, weil es ein eigenes Speichernetzwerk aufbaut

### Aufgabe 2e)
Für die Kennzeichnung der produzierten Kartonrollen durch einen maschienenlesbaren Aufkleber schlägt die Geschäftsleitung die Verwendung von Barcode, QR-Code oder RFID-Chips vor.

Stellen Sie jeweils einen Vor- und Nachteil der Kennzeichnung mit QR-Code bzw. RFID-Chips in der folgenden Tabelle gegenüber.
![Aufgabe 2 e)](/img/AP1/2022/ap1h_2022/H22A2e.png)

### Lösung zur AP1 Aufgabe 2e)
![Aufgabe 2 e Lösung](/img/AP1/2022/ap1h_2022/solution/H22A2eL.png)

## Selbsterstellte Aufgabe

a)  
Gegeben sind die folgenden Daten:
Festplatte: 250 GiB
Auflösung: 1920 x 1080
Farbtiefe: 3 Byte
Wie viele Bilder können auf der Festplatte gespeichert werden?
Gib das Ergebnis in ganzen Bilder an.
___
b)
- 2 Festplatten (je 3 TB Speicherkapazität)
- 7 Festplatten (je 2 TB Speicherkapazität)
Berechnen Sie die Nettospeicherkapazität bei RAID 6
___
c)  
Beschreiben sie den Unterschied zwischen JBOD und RAID 0.  
___
d)  
Was sind drei Vorteile die NAS gegenüber SAN hat?  
___
e)  
Welche Vorteile haben RFID-Chips beim Tracken von Produkten in der Logistik um höhren Aufwand und Kosten zu rechtfertigen.  
Nennen Sie drei Vorteile die RFID-Chips gegenüber herkömmlichen Methoden (Barcode, QR-Code) haben.

## Lösung der Selbsterstellten Aufgabe

a)  
3B * 8 = 24bit  
1920 * 1080 = 2.073.600pixel  
2.073.600pixel * 24bit = 49.766.400bit/Bild  
2^30 = 1.073.741.824bit  
1.073.741.824bit * 250 = 268.435.456.000bit   
268.435.456.000 / 49.766.400bit/Bild = 5.393Bilder  
___
b)  
(9 - 2) * 2TB = 14TB 
___
c)  
JBOD ist einfach der Zusammenschluss mehrerer Festplatten zu einer Einheit, dabei wird 100% der Speicherkapazität genutzt.  
RAID 0 nutzt das Stripe-Prinzip um schnelleren lese und schreibzugriff zu ermöglichen, als Konsequenz werden alle Festplatten auf die Größe der kleinsten Festplatte beschränkt und beim Verlusst einer Festplatte gehen die Daten aller Fesplatten verloren.
___
d)  
- ist günstiger
- leicht zu bedienen und zu warten
- lässt sich leicht in bestehende Netzwerke intgrieren  
___
e)  
- mehrere Artikel können gleichzeitig gescannt werden
- Echtzeit-Tracking
- braucht keinen Sichtkontakt  
