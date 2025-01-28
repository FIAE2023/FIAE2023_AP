---
sidebar-position: 2
title: Lösungsseite
description: Dies ist die Lösungseite für die Nr4
---

## Aufgaben:

![Aufgabe 4 a](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4a.png)  
![Aufgabe 4 ba](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgbae_4ba.png)  
![Aufgabe 4 bb](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4bb.png)  
![Aufgabe 4 c](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4c.png)  
![Aufgabe 4 da](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4da.png)  
![Aufgabe 4 db](../../../../../static/img/AP1/2023/ap1f_2023/AP1_2023_Frühjahr_Aufgabe_4db.png)  

## Lösungen:

### Aufgabe 4 a:

![Aufgabe 4a Solution](../../../../../static/img/AP1/2023/ap1f_2023/solution/AP1_2023_Frühjahr_Aufgabe_4a_Solution.png)

### Aufgabe 4 ba:
Das Lastenheft wird vom Auftraggeber erstellt, das Pflichtenheft vom Auftragnehmer 

Während sich das Lastenheft darauf fokussiert was umgesetzt werden soll, fokussiert das Pflichtenheft darauf wie es umgesetzt wird 

### Aufgabe 4 bb:

![Aufgabe 4a Solution](../../../../../static/img/AP1/2023/ap1f_2023/solution/AP1_2023_Frühjahr_Aufgabe_4bb_Solution.png)


### Aufgabe 4 c:
```
class Versicherungsobjekt{  
    public $Neupreis;  
    public $Baujahr;  
    public $Schadenshöhe;  
    public function auszahlen(){}  
}  

class KFZ extends Versicherungsobjekt{  
    public $Hersteller;   
    public $Typschlüssel;   
    public $Laufleistung;   
    public function restwerteBerechnen() : void {}  
}

class Immobilie extends Versicherungsobjekt{  
    public $Wohnfläche;  
    public $Lagebewertung;  
    public function restwertBerechnen(){}  
    public function getLagebewertung(){}  
}
```

### Aufgabe 4 da:

Select AVG(Versicherung_Summe) from KFZ_Versicherung 

### Aufgabe 4 db:

Select VID from KFZ_Versicherung where Vertragsbegin == Mai 2022 and VErsicherungssumme > 100.000,000 and garage == false 

### Lösungen Test Aufgaben 

#### Lösung zur Test Aufgabe 4 a)
Bei der Einführung eines KI-geschützten Chatbots für die Schadenregulierung sind folgende Anforderungen wichtig: 
1. Verschlüsselung: Schutz der Datenübertragung durch Ende-zu-Ende-Verschlüsselung.
2. Einhaltung der DSGVO: Transparente Datenverarbeitung, Nutzereinwilligung und Recht auf Datenöschung.
3. Zugriffsrechte: Nur autorisierte Personen oder Systeme dürfen auf die DAten zugreifen
4. Datenminimierung: Es werden nur notwendige Informationen erhoben und verarbeitet
5. KI-Sicherheit: Regelmäßige Sicherheitsprüfung und Updates der KI.
Die Anforderungen gewährleisten Vertraulichkeit, Rechtkonformität und Kundenvertrauen bei der Nutzung des Chatbots.

#### Lösung zur Test Aufgabe 4 b) 
1. Zielsetzung: Zweck des Chatbots z.B. schnelle und einfache Schadenregulierung.
2. Funktionale Anforderungen: Schadensfallaufnahme, KI-gestützte Antworten, Spracherkennung.
3. Nicht-funktionale Anforderungen: Benutzerfreundlichkeit, kurze Reaktionszeiten, Einhaltung der DSGVO
4. Schnittstellen: Integration in bestehende Systeme, z.B. Schadensfall-Datenbanken.
5. Zielgruppen: Beschreibung der Hauptnutzer (Kunden, Mitarbeiter).
6. Rahmenbedingungen: Zeitplan, Budgetvorgaben.

