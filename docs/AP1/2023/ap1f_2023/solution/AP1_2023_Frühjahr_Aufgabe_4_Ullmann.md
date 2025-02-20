## 4. Aufgabe

a. Geben Sie in jedem Feld ein zutreffendes Argument ein.

## KI unterstützter Chatbot

#### wirtschaftliche Aspekte
Vorteile:
- Direkte und schnelle Fehlermeldungen werden gesendet
- Personalmangel wird reduziert

Nachteile:
- Es können ungenaue Daten gesendet werden
- Die Verbindung könnte abbrechen

#### soziale Aspekte
Vorteile:
- Einfache Kommunikation über einen Chat
- Dauerhaft verfügbare Gespräche

Nachteile:
- Der Datenschutz muss gewährleistet werden
- Fragen müssen konkret und einfach gestellt werden können

b. Die SecuRita AG hat sich für den Einsatz des Chatbots entschieden. Dazu soll in einem ersten
Schritt ein Lastenheft erstellt werden.

ba. Beschreiben Sie zwei Unterschiede zwischen einem Lastenheft und einem Pflichtenheft

#### Lastenheft
1. Erstellt der Auftraggeber
2. Ist-Zustand

#### Pflichtenheft
1. Erstellt der Auftragnehmer
2. Soll-Zustand

bb. Nennen Sie zwei weitere Inhalte, die neben der Ausgangssituation in ein Lastenheft gehören.
- Muss- und Kann-Kriterien
- Definieren der Schnittstellen
- Zuständige Personen/Stakeholder

c. Für die Versicherungsfälle KFZ und Immobilie sollen eigene Klassen entworfen werden.

Die Klasse KFZ hat die Eigenschaften:
\- Hersteller
\- Typschlüssel
\- Neupreis
\- Baujahr
\- Laufleistung
\- Schadenshöhe

und Methoden:
\- restBerechnen()
\- auszahlen()

Die Klasse Immobilie hat die Eigenschaften:
\- Neupreis
\- Baujahr
\- Wohnfläche
\- Lagebewertung
\- Schadenshöhe

und Methoden:
\- restwertBerechnen()
\-getLagebewertung()
\- auszahlen()

**Aufgabe:** Erstellen Sie eine sinnvolle Klassenhierarchie mit einer gemeinsamen Oberklasse
"Versicherungsobjekt".

**Hinweis:** Die Restwertberechnung erfolgt beim KFZ und bei der Immobilie unterschiedlich.
Zusätzliche Methoden, Konstruktoren und Zugriffsmodifikatoren sind nicht erforderlich.

![Aufgabe 4c)](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4_c\)_Klassendiagramm.png) 

d. Bei der Schadensregulierung im KFZ-Bereich werden die notwendigen Informationen in einer
relationalen Datenbank gespeichert. Wichtig dabei ist die Zuordnung der Versicherungsnehmer
zu den jeweiligen KFZ-Daten. So werden zum Beispiel unter dem Attribut Fahrzeugtyp, die
Fahrzeuge nach SUV, Limousine, Geländewagen oder Cabriolet unterschieden. Das Attribut
"Garage" wird mit dem Datentyp BOOLEAN abgespeichert. Ein Teilauszug aus dieser Datenbank
sehen Sie in dem untenstehenden Entity-Relationship-Modell.

![](../../../../../static/img/AP1_2023_Frühjahr_Aufgabe_4_d\)_relationale_Datenbank.png)
**PK** bezeichnet ein Primärschlüsselattribut, Primärschlüsselattribute werden unterstrichen.
**FK** bezeichnet ein Fremdschlüsselattribut, Fremdschlüsselattribute werden durch ein
nachgestelltes Hash-Zeichen (#) kenntlich gemacht.

da. Sie erhalten von der Versicherungszentrale den Auftrag, die durchschnittliche
Versicherungssumme über alle KFZ-Versicherungsverträge zu ermitteln.

Erstellen Sie dazu eine geeignete SQL-Abfrage.

SQL: SELECT AVG(Versicherung_Summe)
FROM KFZ_Versicherung;

db. Sie erhalten von der Versicherungszentrale den Auftrag, die Versicherungsnummern (VID) zu ermitteln, welche im Mai 2022 abgeschlossen wurden und eine maximale Versicherungssumme von über 100.000,00 EUR beinhalten. Alle Fahrzeuge, die in einer Garage abgestellt werden, sollen in dieser Abfrage nicht angezeigt werden.
Erstellen Sie dazu eine geeignete SQL-Abfrage.

SQL: SELECT VID 
FROM kfz_versicherung 
WHERE Versicherung_Summe > 100000.00 
AND Garage = 0 
AND MONTH(Vertragsbeginn) = 05 
AND YEAR(Vertragsbeginn) = 2022;
