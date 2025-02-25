---
sidebar-position: 2
title: AP1 Frühjahr 2024 Aufgabe 3 - Lösung Löw
description: Dies ist die Lösungsseite zu AP1 Frühjahr 2024 Aufgabe 3
---

# AP1 Frühjahr 2024 Aufgabe 3 Lösung
## Erarbeitet von [Alicia Löw](<../../../../user/Auszubildende%20Michel/loew.md>)

----

# Aufgabe 3 - Thema: Dateiformate, Speicherberechnung und Energieeffizienz (24 Punkte)

----

## Aufgabenstellungen
### Aufgabenstellung 3a - Informationssuche zu unbekannten Dateiformaten (3 Punkte)
![Aufgabe_3A_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_a.png)

### Aufgabenstellung 3b - Inkompatible Dateiformate im eigenen System verwenden (2 Punkte)
![Aufgabe_3B_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_b.png)

### Aufgabenstellung 3c - Unterschied von Dateien im ASCII und Binär Format (4 Punkte)
![Aufgabe_3C_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_c.png)

### Aufgabenstellung 3da - Speicherbedarf in Kibibyte berechnen (3 Punkte)
![Aufgabe_3DA_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_da.png)

### Aufgabenstellung 3db - Farbdarstellung berechnen (2 Punkte)
![Aufgabe_3DB_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_db.png)

### Aufgabenstellung 3dc - Speicherbedarf in Prozent berechnen (3 Punkt)
![Aufgabe_3DC_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_dc.png)

### Aufgabenstellung 3e - Leistungsaufnahme mit Puffer berechnen und Netzteil auswählen (4 Punkte)
![Aufgabe_3E_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_e.png)

### Aufgabenstellung 3f - Stromkosten berechnen (3 Punkte)
![Aufgabe_3F_Bild](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe3_f.png)

----

## Lösungen
### Aufgabe 3a)
#### Antwort
1. Im Internet recherchieren
2. In evtl. vorhandenen Büchern nachschlagen
3. Kollegen fragen

### Aufgabe 3b)
#### Antwort
PLY-Datei in OBJ- oder STL-Format konvertieren.

### Aufgabe 3c)
#### Antwort
Da die Daten von Dateien im Binär Format als Sequenzen von Einsen und Nullen gespeichert werden, sind diese Dateien für Menschen i.d.R. unleserlich.\
Bei einer Datei im ASCII Format werden die Daten als ASCII-Charaktere gespeichert, welche z.B. mit einem Texteditor für Menschen leicht zu lesen sind.

### Aufgabe 3da)
#### Antwort
Der Gesamtspeicherbedarf beträgt __45 KiB__.

#### Rechenweg
##### Eckdaten für die Berechnung
* 3'840 Punkte
* x, y, z Koordinaten (3 verschiedene Koordinaten)
* 32-Bit-Float pro Koordinate (4 Byte)

##### Gesamtspeicherbedarf in Byte - Berechnung

> Gesamtbedarf = n (Anzahl der Punkte) * Anzahl der Koordinaten * Speicherbedarf pro Koordinate

n = _3'840_\
Anzahl der Koordinaten = x, y, z Koordinaten = _3_\
Speicherbedarf pro Koordinate = _4 Byte_

Gesamtbedarf = 3'840 * 3 * 4 Byte = __46'080 Byte__

##### Gesamtspeicherbedarf konvertiert in Kibibyte - Berechnung

> :bulb: Umrechnung in Kibibyte = Byte / 1'024

Gesamtbedarf = 46'080 Byte / 1'024 = __45 KiB__

### Aufgabe 3db)
#### Antwort
Es lässt sich eine Anzahl von __16'777'216__ Farben darstellen.

#### Rechenweg
##### Eckdaten für die Berechnung
* _8 Bit_ pro Farbkanal
* RGB-Farbraum (_3 Kanäle_)

##### Berechnung der Farbanzahl
> :bulb: Eine Farbtiefe von 8 Bit ermöglicht eine Darstellung von 256 verschiedenen Farben.
>
> _Gratzke, Hauser, Patett, Ringhand. "IT-Berufe Grundstufe Lernfelder 1-5" (1. Auflage). westermann. S. 478_

Dies kann auch wie folgt berechnet werden:
> Anzahl der Farben pro Kanal = 2<sup>Bitanzahl</sup>

Daraus ergeben sich 2<sup>8</sup> = _256_ Farben pro Kanal.

> Gesamtanzahl der Farben = Anzahl der Farben pro Kanal<sup>Anzahl der Kanäle</sup>

Da der RGB-Farbraum 3 Kanäle besitzt (Rot, Grün, Blau), kann die Gesamtanzahl der Farben wie folgt berechnet werden:\
Gesamtanzahl der Farben = 256 (Rot) * 256 (Grün) * 256 (Blau) = 256<sup>3</sup> = __16'777'216__


### Aufgabe 3dc)
#### Antwort
Es werden zusätzlich __25__% Speicher pro Bildpunkt benötigt.

#### Rechenweg
##### Eckdaten für die Berechnung
* RGB-Farbraum (aus Aufgabe 3db)
    * 3 Kanäle
    * 8 Bit pro Kanal
* Jeder Punkt wird durch x, y, z Koordinaten bestimmt (aus Aufgabenstellung 3d)
* Jede Koordinate benötigt 32 Bit (= 4 Byte) 

##### Berechnung des zusätzlichen Speicherbedarfs
Ursprünglicher Speicherbedarf pro Bildpunkt:\
3 Koordinaten * 4 Byte Speicherbedarf pro Koordinate = _12 Byte_

Speicherbedarf der Farbwerte pro Bildpunkt:\
3 Kanäle * 8 Bit/Kanal = 24 Bit -> _3 Byte_

##### Berechnung des neuen Speicherbedarfs pro Bildpunkt: 
Um den gesamten Speicherbedarf pro Bildpunkt zu ermitteln, wird der Speicherbedarf der Farbwerte auf den ursprünglichen Speicherbedarf addiert:
> Ursprünglicher Speicherbedarf + Speicherbedarf der Farbwerte

12 Byte + 3 Byte = __15 Byte__

##### Berechnung des prozentuellen Anstieg:
> Zusätzlicher Speicherbedarf Ursprünglicher Speicherbedarf * 100

Dementsprechend:\
3 Byte / 12 Byte * 100 = __25%__

### Aufgabe 3e)
#### Antwort
Die Leistungsaufnahme (inkl. Puffer) beträgt __609,4 W__ und das geeignete Netzteil dafür ist jenes mit einer Nennleistung von __650 W__.

#### Rechenweg
##### Gesamtleistungsaufnahme berechnen
Maximale Leistungsaufnahme aller Komponenten (in Watt) addieren:
20 + 172 + 12 + (4 * 5) + 310 + (2 * 5) + (2 * 5) = __554__

##### Puffer von 10% hinzurechnen
Puffer (Prozentwert) errechnen:
> W = p * G

Eingesetzt ergibt das:\
Puffer = 0,1 * 554 = __55,4__

Puffer auf Gesamtleistungsaufnahme addieren:\
554 W + 55,4 W = __609,4 W__

Da die Netzteile von 400 W bis 1'200 W in 50-W-Schritten zur Verfügung stehen und das Netzteil mit 600 W nicht genügend Leistung mit sich bringt, sollte das _650 W_ Netzteil gewählt werden.

### Aufgabe 3f)
#### Antwort
Die  jährlichen Stromkosten belaufen sich auf __260,00__ EUR.

#### Rechenweg
##### Eckdaten für die Berechnung
* 200 Arbeitstage à 9 Stunden
* 90% Wirkungsgrad des Netzteils
* 50% Auslastung des Netzteils im Schnitt
* 0,40 EUR pro kWh
* 650 W Netzteil (aus Aufgabe 3e)

##### Berechnung der effektiven Leistung des Netzteils
Das Netzteil hat eine Nennleistung von _650 Watt_. 
Da es im Durchschnitt _50%_ ausgelastet ist, kann folgende Formel für die Berechnung verwendet werden:
> Effektive Leistung = Nennleistung * Auslastung (dezimal)

Einsetzen der Werte:\
Effektive Leistung = 650 * 0,5 = __325 W__

##### Wirkungsgrad des Netzteils berechnen
Der Wirkungsgrad des Netzteils beträgt _90%_, ergo nur 90% der zugeführten Energie wird in nützliche Arbeit umgewandelt.
Um die tatsächliche Energieaufnahme aus dem Stromnetz zu berechnen, muss die effektive Leistung durch den Wirkungsgrad geteilt werden:\

Energieaufnahme = 325 W / 0,9 = __361,11 W__

##### Berechnung der Gesamtbetriebsstunden
Laut Aufgabenstellung läuft der PC an _200_ Arbeitstagen je _9_ Stunden:

Betriebsstunden = 200 Tage * 9 Stunden/Tag = __1'800 Stunden__

##### Berechnung des Jahresenergieverbrauchs
Um den jährlichen Energieverbrauch in kWh zu berechnen, wird die Energieaufnahme in kW umwandelt und mit den Betriebsstunden multipliziert:

Energieverbrauch = 361,11 W / 1'000 * 1'800 Stunden = 649,998 kWh = __650 kWh__

##### Berechnung der Stromkosten
Nachdem der Energieverbrauch ermittelt wurde, können nun die Gesamtstromkosten berechnet werden, indem der Energieverbrauch mit dem Preis pro kWh multipliziert wird:

Jährliche Stromkosten = 650 kWh * 0,40 EUR/kWh = __260,00 EUR__

----

## Selbsterstellte Aufgabe - Aufgabenstellung
### Situation - Speicherlösungen
Ihr Unternehmen plant die Implementierung einer neuen Speicherlösung zur Speicherung und Verwaltung von Unternehmensdaten, inklusive Dokumenten, Datenbanken und Mediendateien.

Dabei werden zwei Optionen abgewogen:
- eine SSD mit 1 TB Kapazität und einer Leistungsaufnahme von 2 Watt
- eine HDD mit 2 TB Kapazität und einer Leistungsaufnahme von 6 Watt

Die gewählte Speicherlösung wird rund um die Uhr das ganze Jahr über betrieben.

### Aufgabe 1 - Energieverbrauch
Berechnen Sie den jährlichen Energieverbrauch beider Speicherlösungen in kWh.

### Aufgabe 2 - Vor- und Nachteile diskutieren
Vergleichen Sie die beiden Speicherlösungen und beschreiben Sie jeweils einen Vor- und Nachteil beider Speicherlösungen in Bezug auf Energieeffizienz und Leistung.

### Aufgabe 3 - Lösung auswählen und Meinung begründen
Entscheiden Sie sich für eine der Speicherlösungen und begründen Sie Ihre Wahl.

----

## Selbsterstellte Aufgabe - Musterlösung
### Lösung zu Aufgabe 1
__Eckdaten für die Berechnung:__
- Betrieb rund um die Uhr (24 Stunden)
- Betrieb jeden Tag (356 Tage)
- Leistungsaufnahme:
    - SSD: 2 Watt
    - HDD: 6 Watt

__Berechnung der jährlichen Betriebsstunden:__\
24 Stunden * 365 Tage = __8'760 Stunden/Jahr__

__SSD:__\
Energieverbrauch (kWh) = 0,002 kW * 8'760 h = __17,52 kWh__

__HDD:__\
Energieverbrauch (kWh) = 0,006 kW * 8'760 h = __52,56 kWh__

### Lösung zu Aufgabe 2
Die SSD bietet einen geringeren Energieverbrauch pro Jahr mit 17,52 kWh, was zu niedrigeren Betriebskosten führt. Allerdings hat sie nur eine Speicherkapazität von 1 TB, welche bei der Speicherung größerer Datenmengen eine Einschränkung darstellen kann.
Im Gegensatz dazu zeichnet sich die HDD durch eine höhere Speicherkapazität von 2 TB aus. Durch ihren höheren Energieverbrauch von 52,56 kWh pro Jahr steigen allerdings auch die Stromkosten.

### Lösung zu Aufgabe 3
Dadurch, dass die SSD nur etwa 33,33% des Energieverbrauchs der HDD hat, ist sie um einiges effizienter und günstiger. Zwar bietet sie nur die Hälfte der Speicherkapazität, diese reicht allerdings zur Speicherung von Dokumenten und Datenbanken aus.
Deshalb würde ich die SSD empfehlen.
