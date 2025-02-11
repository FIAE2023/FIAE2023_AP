---
sidebar-position: 2
title: AP1 Frühjahr 2022 Aufgabe 3 - Lösung Löw
description: Dies ist die Lösungsseite zu AP1 Frühjahr 2022 Aufgabe 3
---

# AP1 Frühjahr 2022 Aufgabe 3 Lösung
## Erarbeitet von [Alicia Löw](<../../../user/Auszubildende Michel/loew.md>)

----

## Aufgabe 3 - Thema: Fehleranalyse bei Verbindungsproblemen im Netzwerk (25 Punkte) - Aufgabenstellungen
### Aufgabenstellung 3a - Anmeldung im WLAN (2 Punkte)
![Aufgabe_3A_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_a.jpg)

### Aufgabenstellung 3b - Vor- und Nachteile von EAP/WPA-Enterprise-RADIUS (3 Punkte)
![Aufgabe_3B_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_b.jpg)

### Aufgabenstellung 3c - OSI-Schichten, deren Protokolle und mögliche Fehler (6 Punkte)
![Aufgabe_3C_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_c.jpg)

### Aufgabenstellung 3d - Problemanalyse OSI-Schicht 1 (4 Punkte)
![Aufgabe_3D_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_d.jpg)

### Aufgabenstellung 3ea - Herkunft physischer Adressen (2 Punkte)
![Aufgabe_3EA_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_ea.jpg)

### Aufgabenstellung 3eb - Herkunft verbindungslokaler IPv6-Adressen (2 Punkte)
![Aufgabe_3EB_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_eb.jpg)

### Aufgabenstellung 3fa - Server für Erneuerung der IP-Adresse (1 Punkt)
![Aufgabe_3FA_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_fa.jpg)

### Aufgabenstellung 3fb - Netz-, Host- und Broadcastadresse (3 Punkte)
![Aufgabe_3FB_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_tb.jpg)

### Aufgabenstellung 3fc - Gesamtanalyse der Fehlersuche (2 Punkte)
![Aufgabe_3FC_Bild](/img/AP1/2022/ap1f_2022/AP1_2022_Fruehjahr_Aufgabe3_fc.jpg)

----

## Aufgabe 3 - Lösungen
### Aufgabe 3a)
1. SSID (Service Set Identifier) / Netzwerkname
2. PSK (Pre-Shared Key) / Passwort

### Aufgabe 3b)
![Lösung_3B_Bild](/img/AP1/2022/ap1f_2022/solution/AP1_2022_Fruehjahr_Aufgabe3_b_solution_loew.jpg)

### Aufgabe 3c)
![Lösung_3C_Bild](/img/AP1/2022/ap1f_2022/solution/AP1_2022_Fruehjahr_Aufgabe3_c_solution_loew.jpg)

### Aufgabe 3d)
Der Wert "Aktiviert" im Medienstatus bedeutet, dass die physikalische Verbindung zwischen dem WLAN-Adapter des Laptops und dem WLAN-Zugriffspunkt erfolgreich hergestellt wurde.
In Bezug auf die Bitübertragungsschicht bedeutet dies, dass der physikalische Kanal für die Datenübertragung bereit ist.
Der Laptop sollte dementsprechend Daten senden und empfangen können, weshalb das Problem nicht auf der 1. Schicht liegt.

### Aufgabe 3ea)
Bei der angegebenen Adresse handelt es sich um eine sogenannte MAC-Adresse, welche dazu dient, Geräte innerhalb des Netzwerks eindeutig identifizieren zu können, da jedes Gerät eine einzigartige Adresse zugewiesen bekommt.
MAC-Adressen bestehen aus zwei Teilen zu jeweils drei Bytes/Oktetten:
Die ersten drei identifizieren den Hersteller (OUI - Organisationally Unique Identifier),
die letzten drei sind die spezifische serielle Nummer des jeweiligen Geräts.

### Aufgabe 3eb)
Bei dieser Adresse handelt es sich um eine IPv6-Adresse im "Link-Local-Scope", eine Adresse, welche nur innerhalb des lokalen Netzwerks gültig ist.
Erkennbar sind link-lokale Adressen daran, dass ihr Präfix auf "fe80" festgelegt ist, da dieser für eben jene link-lokalen Adressen reserviert ist.
Link-lokale Verbindungen sind direkte Verbindungen, d.h. sie agieren direkt auch Schicht 1 oder 2, typischerweise über Ethernet oder WLAN.

### Aufgabe 3fa)
DHCP-Server

### Aufgabe 3fb)
__Netzadresse:__
192.168.0.0
__Hostadresse:__
192.168.0.1
__Broadcastadresse:__
192.168.0.255

#### Rechenweg
##### Übersicht der Adressen in Binär
__IPv4:__
1100 0000 . 1010 1000 . 0000 0000 . 0011 0100
__Subnetzmaske:__
1111 1111 . 1111 1111 . 1111 1111 . 0000 0000
__Netzadresse:__
1100 0000 . 1010 1000 . 0000 0000 . 0000 0000
__Hostadresse:__
1100 0000 . 1010 1000 . 0000 0000 . 0000 0001
__Broadcastadresse:__
1100 0000 . 1010 1000 . 0000 0000 . 1111 1111

##### Berechnung der Netzadresse
Bei der Berechnung einer Netzadresse wird die logische UND-Verknüpfung zwischen der IP-Adresse und der Subnetzmaske verwendet.

>:bulb: ___Zur Erinnerung:___
>Wenn an einer bestimmten Stelle sowohl in der IP-Adresse als auch in der Subnetzmaske eine 1 steht, wird an dieser Stelle eine 1 in das Ergebnis (die Netzadresse) geschrieben. 
>Steht an einer der beiden Stellen eine 0, wird an dieser Stelle eine 0 in das Ergebnis geschrieben.

Die Subnetzmaske spielt dabei eine wichtige Rolle: Alle Oktette, die den Wert 255 haben, definieren feste Bestandteile der Netzadresse. 
Das bedeutet, dass die Bits, die durch diese Oktette repräsentiert werden, immer zur Netzadresse gehören und somit den Netzwerkbereich der IP-Adresse festlegen.


Folglich können die IP-Adresse und Subnetzmaske in binär umgewandelt werden.
(Dies kann mithilfe einer Tabelle oder Potenzen erreicht werden)

__IPv4 in binär__

_Tabelle_
| Dezimal | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
|:-------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   192   |  1  |  1  |  0  |  0  |  0  |  0  |  0  |  0  |
|   168   |  1  |  0  |  1  |  0  |  1  |  0  |  0  |  0  |
|    0    |  0  |  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|   52    |  0  |  0  |  1  |  1  |  0  |  1  |  0  |  0  |

Ergebnis:
1100 0000 . 1010 1000 . 0000 0000 . 0011 0100

__Subnetzmaske in binär__
_Dezimale Schreibweise_
255.255.255.0

_Tabelle_
| Dezimal | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
|:-------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   255   |  1  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |
|    0    |  0  |  0  |  0  |  0  |  0  |  0  |  0  |  0  |

_Ergebnis_
1111 1111 . 1111 1111 . 1111 1111 . 0000 0000

__UND-Verknüpfung__
1 1 0 0 0 0 0 0 . 1 0 1 0 1 0 0 0 . 0 0 0 0 0 0 0 0 . 0 0 1 1 0 1 0 0
UND 
1 1 1 1 1 1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 1 1 1 1 1 . 0 0 0 0 0 0 0 0
\=
_1 1 0 0 0 0 0 0 . 1 0 1 0 1 0 0 0 . 0 0 0 0 0 0 0 0 . 0 0 0 0 0 0 0 0_

__Netzadresse von binär in dezimal__
_Tabelle_
| Dezimal | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
|:-------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   192   |  1  |  1  |  0  |  0  |  0  |  0  |  0  |  0  |
|   168   |  1  |  0  |  1  |  0  |  1  |  0  |  0  |  0  |
|    0    |  0  |  0  |  0  |  0  |  0  |  0  |  0  |  0  |

_Dezimale Schreibweise_
$ 192.168.0.0 $

##### Berechnung der Hostadresse
> :bulb: Zur Erinnerung:
>
> Die Hostadresse ist (hier) die _erste_ verfügbare/nutzbare Adresse im jeweiligen (Sub-)Netz, deswegen gilt:
>
> Hostadresse = Netzadresse + 1

192.168.0.0 + 1 = $ 192.168.0.1 $

##### Berechnung der Broadcastadresse
> :bulb: Zur Erinnerung:
> 
> Die Broadcastadresse ist die _letzte_ Adresse im (Sub-)Netz und wird durch das Setzen aller Host-Bits der Netzadresse auf 1 ermittelt.

Durch die Subnetzmaske $ 255.255.255.0 $ steht fest, dass die CIDR-Notation _/24_ ist. Dies bedeutet, dass die ersten 24 Bits für den Netzanteil und die restlichen 8 Bits (Differenz zu 32 Bit, der Größe einer IPv4-Adresse) für den Hostanteil verwendet werden.

Dadurch, dass die Broadcastadresse die letzte Adresse im (Sub-)Netz ist, könnte hier direkt logisch geschlussfolgert werden, dass die Broadcastadresse $ 192.168.0.255 $ sein sollte.

Aus der Berechnung der Netzadresse ist bekannt, dass diese in binär $ 1 1 0 0 0 0 0 0 . 1 0 1 0 1 0 0 0 . 0 0 0 0 0 0 0 0 . 0 0 0 0 0 0 0 0 $ ist. Wie gerade festgestellt, sind die ersten 24 Bits für den Netzanteil reserviert. Da die restlichen 8 Bits das letzte Oktett darstellen, können hier die Nullen in Einser umgewandelt werden:

$ 1 1 0 0 0 0 0 0 . 1 0 1 0 1 0 0 0 . 0 0 0 0 0 0 0 0 . 1 1 1 1 1 1 1 1 $

Ein Oktett von nur Einsen besitzt in Dezimalschreibweise immer den Wert _255_. Deswegen ergibt sich hier die Broadcastadresse $ 192.168.0.255 $.


### Aufgabe 3fc)
Da die Verbindung zum Router erfolgreich war, aber möglicherweise keine Internetverbindung hergestellt werden kann, liegt der Fehler wahrscheinlich in fehlenden oder falschen DNS-Einstellungen.

----

## Selbsterstellte Aufgabe - Aufgabenstellung
### Situation
Der Netzwerkadministrator hat festgestellt, dass die Internetverbindung in der Firma zeitweise unterbrochen wird. Um die Ursache des Problems zu untersuchen, sammelt er Protokolle des Routers und der Firewall und legt Ihnen diese vor.

### Aufgabe 1
Nennen Sie zwei Informationen, welche Sie in diesen Protokollen suchen würden.

### Aufgabe 2
Nennen Sie zwei relevante Protokolle und erklären Sie, wie diese bei der Fehlersuche helfen können.

----

## Selbsterstellte Aufgabe - Musterlösung
### Lösung zu Aufgabe 1
1. Fehlermeldungen oder Warnungen
2. Zeitstempel der Verbindungsversuche und -abbrüche

### Lösung zu Aufgabe 2
1. TCP (Transmission Control Protokoll)
_Erklärung:_
TCP ist für die zuverlässige Datenübertragung zwischen Geräten im Netzwerk verantwortlich. Gibt es Probleme mit dieser Datenübertragung, z.B. Paketverlust oder Zeitüberschreitungen, kann dies durch die Analyse von TCP festgestellt werden.

<br>

2. ICMP (Internet Control Message Protocol)
_Erklärung:_
ICMP wird verwendet, um Fehler- und Statusmeldungen im Netzwerk zu senden und dient ebenfalls mithilfe des "Ping"-Tools zur Überprüfung und Erreichbarkeit von Hosts. Durch die Analyse von ICMP-Nachrichten können Probleme mit der Erreichbarkeit bestimmter IP-Adressen sowie Informationen über Netzwerküberlastungen oder Routing-Probleme identifiziert werden.