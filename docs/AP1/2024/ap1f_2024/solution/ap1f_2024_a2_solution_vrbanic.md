---
id: ap1f_2024_a2_solution_vrbanic
title: AP1 Frühjahr 2024 Aufgabe 2 Lösung Vrbanic
description: Lösung zur AP1 im Frühjahr 2024 Aufgabe 2
---

# AP1 Fruehjahr 2022 Aufgabe 2 Lösung
#### Von [Vrbanic](<../../../../user/Auszubildende Michel/vrbanic.md>)

----

## Aufgabe 2 - Netzwerkkonfiguration - 24 Punkte:
### Aufgabe 2) - Netzwerkeinstellungen
![Aufgabe 2 Situation](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2_Situation.png)
### Aufgabe 2a) - Netzwerk LED - 4 Punkte
![Aufgabe 2a](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2a.png)
### Aufgabe 2b) - OSI-Modell - 4 Punkte
![Aufgabe 2b](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2b.png)
### Aufgabe 2b Vorlage) - OSI-Modell Vorlage
![Aufgabe 2b Vorlage](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2b_Vorgabe.png)
### Aufgabe 2c) - IPv6 - 5 Punkte
![Aufgabe 2c](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2c.png)
### Aufgabe 2d) - DHCP - 2 Punkte
![Aufgabe 2d](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2d.png)
### Aufgabe 2e) - Adress Resolution Protocol - 3 Punkte
![Aufgabe 2e](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2e.png)
### Aufgabe 2f) - Erreichbarkeit - 2 Punkte
![Aufgabe 2f](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2f.png)
### Aufgabe 2g) - Adressenzuweisung - 4 Punkte
![Aufgabe 2g](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2g.png)
### Aufgabe 2g Vorlage) - Adressenzuweisung Vorlage
![Aufgabe 2g Vorlage](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2g_Vorgabe.png)

----

## Lösung zur Aufgabe 2:
### Aufgabe 2a)
**LED leuchtet durchgehend**
Die Bedeutung der grünen LED kann sich je nach Gerät ändern. Es kann anzeigen das ein Anschluss registriert wurde oder welche Geschwindigkeit die Übertragung besitzt.

**LED blinkt unregelmäßig**
Eine grün blinkende LED zeigt einen Datenaustausch an. Je nach Gerät, kann dieser für einen generellen oder spezifischen Datenaustausch von 100 Mbit/s deuten.

### Aufgabe 2b)
![Aufgabe 2b Solution](/img/AP1/2024/ap1f_2024/solution/AP1_2024_Fruehjahr_Aufgabe2b_Solution_Vrbanic.png)

### Aufgabe 2c)
**Länge der IPv6 Adresse in Bits**
128

**Ungekürzte Darstellung der IPv6-Adresse in Hexadezimalschreibweise**
fe80:0000:0000:0000:521a:c5ff:fef2:38b7

**Präfixlänge**
fe80::

>Link-Local Adressen sind meist 64 Bits, automatisch konfiguriert und nur in einem lokalen Netzwerk erreichbar

**Interface-Identifier**
521a:c5ff:fef2:38b7
>Restbits sind 64

### Aufgabe 2d)
Durch DHCP wurde die IPv4 Adresse und die Subnetzmaske vergeben. Die IPv6 Adresse ist irrelevant das sie durch "Autokonfiguration" erstellt wurde.

### Aufgabe 2e)
ARP ist dafür zuständig die logische Adresse (IP) in seine physische Adresse (MAC) umzuwandeln und umgedreht. So können Geräte direkt miteinander kommunizieren.

### Aufgabe 2f)
ping 192.168.0.1

### Aufgabe 2g)
![Aufgabe 2g Solution](/img/AP1/2024/ap1f_2024/solution/AP1_2024_Fruehjahr_Aufgabe2g_Solution_Vrbanic.png)

----

## Selbsterstellte Aufgabe:
### Aufgabe Xa)
>**Xa)** Nach einem Umzug ihrer Abteilung in ein anderes Gebäude richten sie sich ihren Arbeitsplatz neu ein. Vor Abschluss ihrer Arbeit fällt ihnen auf das sie bisher noch kein Netzwerkkabel angebunden haben und öffnen eine Umzugskiste gefüllt mit Kabelen. Diese sind mit unterschiedlichen Kennzeichnungen versehen.

### Aufgabe Xaa)
>**Xaa)** Sie finden mehrmals den Aufdruck "SF/FTP" auf einem Netzwerkkabel.
>
>Erklären sie die Bedeutung dieser Beschriftung.

### Aufgabe Xab)
>**Xab)** Ebenfalls erkennen sie das jene Kabel mit unterschiedlichen Nummern gekennzeichnet worden sind wie z.b. "CAT 5". Sie entscheiden sich für das Kabel mit der höchsten Nummer.
>
>Erläutern sie was sich hinter der Kennzeichnung und Nummerierung verbirgt.

### Aufgabe Xb)
>**Xb)** Benennen Sie die in der folgenden Tabelle aufgeführten Tabelle aufgeführten OSI-Schichten und ordnen Sie zur Strukturierung die vorliegenden Begriffe den richtigen Schichten zu:
>
>> WLAN Protokoll
>> E-Mail Programm
>> Router
>> Dateiübertragung

![Aufgabe Xb Vorgabe](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2_Vrbanic_TaskXb_Vorgabe.png)

### Aufgabe Xc)
>**Xc)** Nach ihrer Eingabe von "ipconfig" erhalten sie auf der Kommandozeile ihres Computers folgende Informationen.
![Aufgabe Xc](/img/AP1/2024/ap1f_2024/AP1_2024_Fruehjahr_Aufgabe2_Vrbanic_TaskXc.png)

### Aufgabe Xca)
>**Xca)** Ihnen fällt auf sie besitzen eine IPv6 und eine IPv4 Adresse. Nennen sie zwei Unterschiede zwischen den Protokollen.

### Aufgabe Xcb)
>**Xcb)** Begründen sie warum sie im Besitz beider Adressen sind.

### Aufgabe Xcc)
>**Xcc)** Während ihrer Recherche über IP-Adressen fällt ihnen auf das meist eine Zahl mit einem Doppelpunkt hinter eine IPv4 Adresse gesetzt wird.
>
>Erläutern sie wofür die genannte Zahl genutzt wird.

### Aufgabe Xd)
>**Xd)** Was ist die grundlegende Aufgabe eines Routers?

----

## Lösung zur Selbsterstellten Aufgabe:
### Aufgabe Xaa)
Die Schirmungsarten werden durch einen Schrägstrich getrennt.
Die vordere Angabe ist die Gesamtschirmung des Kabels, und die zweitere Angabe ist die Adernschirmung. Letztere Angabe ist der Adertyp.

**Schirmung**
* **Ungeschirmt** wird angegeben durch **U**
* **Folienschirm** wird angegeben durch **F**
* **Geflechtschirm** wird angegeben durch **S**
* **Geflecht- und Folienschirm** wird angegeben durch **SF**

**Adertyp**
* **Twisted Pair** wird angegeben durch **TP**
* **Qual Pair** wird angegeben durch **QP**

Das genannte Kabel ist ein Kabel mit Geflechts und Foliengesamtschirmung mit Foliengeschirmten Twisted Pairs.

### Aufgabe Xab)
Netzwerkkabel werden in unterschiedliche Kategorien (CATegory) aufgeteilt.
Die Angabe der Zahl gibt die Generation des Kabels wieder und gibt desto höher die Zahl eine höhere Transfergeschwindigkeit wieder.

### Aufgabe Xb)
![Aufgabe Xb Solution](/img/AP1/2024/ap1f_2024/solution/AP1_2024_Fruehjahr_Aufgabe2_Vrbanic_TaskXb_Solution.png)

### Aufgabe Xca)
**Adresslänge**
IPv4 besitzt 32 Bit / 4 Byte
IPv6 besitzt 128 Bit / 16 Byte

**Anzahl der Adressen**
IPv4 umfasst Ca. 4 Milliarden Adressen
IPv6 umfasst Ca. 340 Undezillionen Adressen

**Adressschreibweise**
IPv4 wird in Dezimal geschrieben
IPv6 wird in Hexadezimal geschrieben

**Trennzeichen**
IPv4 trennt Nummernblöcke mit einem Punkt
IPv6 trennt Nummernblöcke mit einem Doppelpunkt

**Sicherheit**
IPv4 erforder zusätzliche Sicherheitsmaßnahmen
IPv6 besitzt integrierte Sicherheitsfunktionen (IPsec)

**NAT**
IPv4 erfordert es häufig
IPv6 erfordert es selten

**Header**
IPv4 besitzt einen Variablen Header (20-60 Bytes)
IPv6 besitzt einen Festen Header (40 Bytes)

### Aufgabe Xcb)
**Übergangsphase**
Da der Umstieg von IPv4 zu IPv6 noch einige Zeit in Anspruch nehmen wird, werden meist beide Versionen verteilt um in jenen Umständen weiterhin den Zugriff auf das Internet zu ermöglichen.

**Kompatiblität**
Nicht alle Geräte und Dienste sind bereits vollständig auf IPv6 umgestellt, daher ist es wichtig eine IPv4 Adresse als eine Backup Option verfügbar zu haben.

**Sicherheit**
IPv6 bietet im Vergleich zu IPv4 verbesserte Sicherheitsfunktionen welche bei Dualer Nutzung die Vorteiler beider Protokolle ausschöpft.

### Aufgabe Xcc)
Die genannte Zahl ist ein Port. Wie die Übersetzung aus dem Englischen wiedergibt ist es ein "Hafen" welcher designierten Verkehr zulässt oder ablehnt. Ohne einen Port können Daten nicht direkt weitergegeben werden.

### Aufgabe Xd)
Ein Router sorgt dafür das Datenpakete sicher und effizient von einem Netzwerk in ein anderes gelangen. Der Name kommt von seiner Verantwortung den Pfad für diese Pakete zu finden und zu merken.
