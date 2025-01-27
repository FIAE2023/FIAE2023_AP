---
id: ap1h_2022_a3_solution
sidebar-position: 2
title: AP1 Herbst 2022 Aufgabe 3 Lösung
description: Lösung AP1 Herbst 2022 Aufgabe 3
---

## AP 3 Herbst 2022 Aufgabe 3 Lösung [Herr Langhammer](../../../../user/Auszubildende%20Michel/langhammer.md) & [Herr Beyer](../../../../user/Auszubildende%20Holldack/beyer.md)

## AP1 Aufgabe 3

### a) Zur fachgerechten Kommunikation zwischen den Einzelkomponenten in der Automatisierung wird über den Einsatz von IPv6 als Ersatz für IPv4 nachgedacht.
Nennen Sie zwei technologische Vorteile der IPv6-Adressierung gegenüber IPv4, die für den Einsatz im Bereich IoT relevant sein können.

#### Vorteile
- IPv6 hat mehr Adressen
- Durch nicht benötigtes NAT (Network Address Translation) schneller

### b)  In einer abgeschlossenen Testumgebung soll die Kommunikation zwischen einigen Netzwerkkomponenten über IPv6 geprüft werden.
Dabei soll eine globale Adresse ähnlich derjenigen aus einem anderen Teilnetz des Betriebs 2001:da8:5f2d:28: : /64 verwendet werden.  
Hier handelt es sich bereits um eine verkürzte Schreibweise.  
Sie besteht aus einem 48-Bit langem Standortpräfix und einer 16-Bit Teilnetz-ID.  
Identifizieren Sie in der gegebenen Adresse die beiden genannten Komponenten und geben Sie die beiden Teile der Adresse in ihrer ungekürzten Form im hexadezimalen Format an.

#### Ungekürztes Standortpräfix:
    128 Bit lang
    8 * 16 Bit
    2001:da8:5f2d:28: : /64 \<- Bits der Netzmaske
    128 - 64 = 64
    2001:0da8:5f2d:

#### Ungekürzte Teilnetz-ID:
    :0028:

### c) Geben Sie an, wie viele Teilnetze mit der gegebenen IPv6-Adresse gebildet werden können.
    Mit den gegebenen 16-Bit der Teilnetz-ID sind
    2 ^ 16 = 65536 Teilnetze möglich.

### d) Vergeben Sie für die abgebildete loT-Testumgebung nutzbare IPv6-Adressen auf der Grundlage der gegebenen globalen Adresse für alle Geräte. Vermischen Sie dabei aus Gründen der Übersichtlichkeit nicht die Adressen der Endgeräte mit denen der Netzwerkgeräte. Richten Sie die IP-Adressierung so ein, dass alle Geräte später auch aus einem anderen Teilnetz über den Router gewartet werden können.

#### Switch:
    Gateway:
    2001:0da8:5f2d:29::1

#### Industrie PC
    Gateway:
    2001:0da8:5f2d:29::1

#### Steuerung mit Netzwerk-Anschluss
    Adresse:
    2001:0da8:5f2d:29::40
    Gateway:
    2001:0da8:5f2d:29::1

#### Sensor mit Netzwerkanschluss
    Adresse:
    2001:0da8:5f2d:29::60
    Gateway:
    2001:0da8:5f2d:29::1

### e) Auf dem loT-Gerät 1 soll nun die Erreichbarkeit des Loopback-Interfaces und des Standard-Gateways auf einer Kommandozeile geprüft werden.
Geben Sie die erforderlichen Befehle an.

    ipconfig oder ip addr
    ping 2001:0da8:5f2d:29::1 Gateway
    ping ::1 Loopback

### f) Nach der Eingabe des Befehls ip addr zur Anzeige der Netzwerkkonfiguration erscheint u. a. die Ausgabe fe80::62eb:69ff:fed2:d2a6/64 
Geben Sie den Grund dafür an, dass eine IPv6-Adresse angezeigt wird, die Sie nicht konfiguriert hatten und benennen Sie dabei die Adressart.

    IPv6 Addressen, die mit fe80: beginnen, sind Link Lokal Adresse, diese weist sich jedes IPv6 Gerät selbst zu

### g) Die Geschäftsführung möchte im Umfeld der Maschinenautomatisierung die Mitarbeiter mit weiteren mobilen und robusten Geräten ausstatten. Der Bedarf beträgt im ersten Schritt 30 Stück.
Folgande drei unverbindliche Angebote liegen vor:

|                                                          | Noteplus AG, Mainz                  | Notebook-Clever.de, Berlin  | PC-Genie KG, Frankfurt     |
|----------------------------------------------------------|-------------------------------------|-----------------------------|----------------------------|
| **Bareinkaufspreis pro Stück**                           | 1.000 EUR                           | 1.100 EUR                   | 1.300 EUR                  |
| **Lieferbedingungen/-kosten pro Stück**                  | Ab Werk: 15 EUR                     | Frachtfrei: 10 EUR          | Frei Haus                  |
| **Bezugspreis pro Stück**                                | **1015 €**                          | **1110 €**                  | **1300 €**                 |
| **Lieferzeit**                                           | 5 Wochen                            | 3 Wochen                    | 1 Woche                    |
| **Qualität**                                             | Gut                                 | Durchschnitt                | Sehr Gut                   |
| **Kundenrückmeldungen auf der Homepage der Lieferanten** | Öfter bei Lieferungen kleine Mängel | Lieferung ohne Beanstandung | Sehr gutes Kulanzverhalten |

Berechnen Sie zuerst den Bezugspreis pro Stück.  
Bewerten Sie anschließend die Anbieter und Angebote mit einer Skala von 1 (schwach) bis 3 (sehr gut).

#### Rechenweg:
    Noteplus AG, Mainz
    30 * 1000 + 15 * 30 = 30450 €
    30450 / 30 = 1015 € Bezugspreis pro Stück.

    Notebook-Clever.de, Berlin
    30 * 1100 + 10 * 30 = 33300 €
    33300 / 30 = 1110 € Bezugspreis pro Stück.
    
    PC-Genie KG, Frankfurt
    30 * 1300 + 0 = 39000 €
    39000 / 30 = 1300 € Bezugspreis pro Stück.

#### Wertung
Führen Sie mithilfe der vorliegenden Daten einen gewichteten Angebotsvergleich durch und entscheiden Sie sich für den geeig-
neten Lieferanten.

| Kriterien       | Gewichtung | Noteplus AG, Mainz | Noteplus AG, Mainz | Notebook-Clever.de, Berlin | Notebook-Clever.de, Berlin | PC-Genie KG, Frankfurt | PC-Genie KG, Frankfurt |
|-----------------|------------|--------------------|--------------------|----------------------------|----------------------------|------------------------|------------------------|
| **Bezugspreis** | 11         | 33                 | 3                  | 22                         | 2                          | 11                     | 1                      |
| **Lieferzeit**  | 8          | 8                  | 1                  | 16                         | 2                          | 24                     | 3                      |
| **Qualität**    | 9          | 18                 | 2                  | 9                          | 1                          | 27                     | 3                      |
| **Erfahrung**   | 5          | 5                  | 1                  | 10                         | 2                          | 15                     | 3                      |
|                 |            | **64**             |                    | **57**                     |                            | **77**                 |                        |

##### Rechenweg:
                Noteplus AG, Mainz
    Bezugspreis: 3 * 11 = 33
    Lieferzeit:  1 *  8 =  8
    Qualität:    2 *  9 = 18
    Erfahrung:   1 *  5 =  5
    
    33 + 8 + 18 + 5 = 64
----
                Notebook-Clever.de, Berlin
    Bezugspreis: 2 * 11 = 22
    Lieferzeit:  2 *  8 = 16
    Qualität:    1 *  9 =  9
    Erfahrung:   2 *  5 = 10
    
    22 + 16 + 9 + 10 = 57
----
                PC-Genie KG, Frankfurt
    Bezugspreis: 1 * 11 = 11
    Lieferzeit:  3 *  8 = 24
    Qualität:    3 *  9 = 27
    Erfahrung:   3 *  5 = 15
    
    11 + 24 + 27 + 15 = 77


## Selbsterstellte Aufgabe

- Hier kommt die selbsterstellte Aufgabe als Bild oder Text rein

## Lösung der Selbsterstellten Aufgabe

- Hier kommt die Lösung zur selbsterstellten Aufgabe als Bild oder Text rein
