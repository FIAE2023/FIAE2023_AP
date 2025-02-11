---
id: ap1h_2023_a4_solution
title: AP1 Herbst 2023 Aufgabe 4 - Lösung Vardakis
description: My document description
---

## AP1 Herbst 2023 Aufgabe 4 Lösung 

## Bearbeitet von [Mathaios Vardakis](<../../../user/Auszubildende Michel/vardakis.md>)

### Themen:

- Example 1

---

## Aufgabe 4: Zur Verwaltung von Serviceanfragen soll ein neues Ticketsystem eingeführt werden.


---


## a)	Ihre Aufgabe in der Planungsabteilung ist es, den Ablauf des Projektes zu überwachen.

### aa) Nennen Sie Jeweils zwei wesentliche Merkmale von Gantt-Diagramm und Netzplan.

```txt
Gantt-Diagramm: 
Ist ein Balken-Diagramm,
Die Horizontale Axe zeigt den Zeitraum in dem die einzelnen Aufgaben erledigt werden sollen. 

Netzplan: 
Zeitplannung
Es hat einen Kritischen Pfad, (ist die Längste Kette der Aufgaben ohne Pufferzeiten)
Kann flexibel angepasst werden.
```


### ab) Bringen Sie die folgenden Vorgänge einer Planungsliste in die richtige Reihenfolge:
1-Test und Validation
2-Entwurf der Verteilung im Netz
3-Logischer Entwurf
4-Konzeptioneller Entwurf
5-Anwendung und Wartung
5-Physischer Entwurf/Implementierung
---
```text
1 – Konzeptioneller Entwurf
2 – Logischer Entwurf 
3 – Entwurf der Verteilung im Netz
4 – Physischer Entwurf/Implementierung
5 – Test und Validation
6 – Anwendung und Wartung

```

## b) Für eine Projektplannung erhalten Sie die folgenden Informationen in einem Gantt-Diagramm vorgelegt:

Ein Projekt beginnt mit dem Vorgang A. Nachdem dieser Vorgang nach drei Tagen abgeschlossen ist, folgen drei parallele Vorgänge: B hat sechs Tage, D dauert acht Tage, E hat fünf Tage Dauer. B hat den Nachfolger C mit vier Tagen, an den sich der Vorgang F mit drei Tagen anschließt. C und D haben zusammen mit E den gemeinsamen Nachfolger F mit drei Tagen, Auf F folgt noch der Vorgang G mit zwei Tagen.

Danach ist das Projekt beendet.

### ba) Erstellen Sie mit Hilfe der Vorgänge ein Gantt-Diagramm und zeichnen Sie die 	Abhängigkeiten ein. 

![AP1h 2023 Aufgabe 4 ba](/img/AP1/2023/ap1h_2023/solution/AP1_2023_Herbst_Aufgabe4_ba.png)

## Lösung:

![AP1h 2023 Aufgabe 4 ba) Lösung](/img/AP1/2023/ap1h_2023/solution/AP1_2023_Herbst_Aufgabe4_ba_Solution.png)

---

## bb) Ermitteln Sie, nach wie vielen Tagen das Projekt frühestens beendet werden kann.
```txt
18
```
---

## bc) ) Ermitteln Sie, welcher Vorgang der größten Puffer in Tagen hat.

```txt
C

```
---

## c)	Die zugehörige Datenbank soll nun erstellt werden. Teile des Datenbnakentwurfs wurden bereits in einem Entity-Relationship-Diagramm (EDR) umgesetzt.

Die Bearbeitung eines Tickets erfolgt in der Regel in einer oder mehreren zum Ticket gehörenden Tätigkeiten, welche durch Mitarbeiter der Serviceabteilung durchgeführt werden. Dieser Umstand soll nun zusätzlich in dem Ticketsystem abgebildet werden.

Zu jeder Tätigkeit soll eine ausführliche Beschreibung der durchgeführten Arbeiten und ein Ergebnis der Aktion gespeichert werden. Start und Ende Tätigkeiten sollen festgehalten werden.

### ca) Ergänzen Sie das ERD um die fehlenden Elemente zur Abbildung der Tätigkeiten in der Datenbank.

![Aufgabe 4 ca)](/img/AP1/2023/ap1h_2023/AP1_2023_Herbst_Aufgabe4_ca.png)

```text
Tätigkeit – Start, Ende, MitarbeiterID (FK)
```

### cb) Sie erhalten von der Geschäftsleitung den Auftrag, aus statistischen Gründen die Anzahl der Tickets pro Priorität zu ermiteln.
### Die Ausgabe soll die Priorität und die dazugehörige Anzahl erhalten.
Erstellen Sie dazu di geeignete SQL-Abfrage:

```text
SELECT Priorität, COUNT (TicketID) FROM Ticket GROUP BY Priorität;
```

### cc) Dem Unternehemen ist bekannt, wie viele Kunden es insgesamt hat. Nun möchte die Geschäftsleitung den Prozentsatz der Kunden ausrechnen, die Tickets haben.
### Dazu muss die Anzahl der Kunden mit einem Ticket in der Ticketdatenbank bestimmt werden.
Erstellen Sie dazu eine geeignete SQL-Abfrage.

```text
SELECT COUNT (DISTINCT KundenID) AnzahlKunden FROM Ticket;
```

### cd) Sie erhalten vor der Geschäftsleitung den Auftrag zu ermitteln, welche offene Tickets (Zustand=offen) einen Erfassungsmonat haben, der mehr als zwei Monate zurückliegt.
### Analysieren Sie die vorliegende Abfrage und beschreiben Sie das zu erwartende Ergebnis.
### SELECT Problembeschreibung, Prioritaet, Zustand, ErfassungDatum FROM Ticket WHERE Month (NOW()) -Month(ErfassungDatum) > 2 AND Zustand="offen" ORDER BY ErfassungDatum ASC;


```text
Es werden alle offene Tickets die ein Erfassungsmonat haben der älter als 2 Monate ist.
Ausgegeben werden, das Erfassungsdatum, der Zustand, die Priorität und die Problem-Beschreibung.
Das Erfassungsdatum ist aufsteigend sortiert.

```
---

Quelle: Lernfeld 2 Finanzierung und Leasing
---

## Test Aufgabe:

## Aufgabe 1 - Thema Gannt-Diagramm 

Ein Projekt beginnt mit dem Vorgang A. Nach fünf Tagen wird A abgeschlossen. Danach folgen die parallelen Vorgänge B, C und D. B hat eine Dauer von vier Tagen, C dauert sieben Tage und D benötigt drei Tage.

Vorgang B hat den Nachfolger E, der vier Tage in Anspruch nimmt. Vorgang C hat den Nachfolger F, der zwei Tage dauert. D hat keinen Nachfolger.

Vorgänge E und F haben gemeinsam den Nachfolger G, der fünf Tage dauert. Nach G folgt der Abschluss des Projekts.

### 1a) Ergenzes Sie das Gantt-Diagramm. 

| Vorgang | Tag 1 | Tag 2 | Tag 3 | Tag 4 | Tag 5 | Tag 6 | Tag 7 | Tag 8 | Tag 9 | Tag 10 | Tag 11 | Tag 12 | Tag 13 | Tag 14 | Tag 15 | Tag 16 | Tag 17 |
|---------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|--------|--------|--------|
| A       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| B       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| C       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| D       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| E       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| F       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
| G       |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |
|         |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |


### 1b) Ermitteln Sie, nach wie vielen Tagen das Projekt frühestens beendet werden kann.

#### Lösung
````text
Der früheste Abschluss des Projekts erfolgt nach dem letzten Vorgang G, der am Tag 17 endet.
Frühester Projektabschluss: Tag 17
````
    
### 1c) Bestimmen Sie, welcher Vorgang den größten Puffer in Tagen hat.

#### Lösung
````text
Da alle Vorgänge, die wir betrachtet haben, auf dem kritischen Pfad liegen, haben sie keinen Puffer.
Größter Puffer: 0 Tage für alle Vorgänge.
````


## Links zu Themen:

- Hier werden Seiten verlinkt mit denen man die Themen lernen kann.

