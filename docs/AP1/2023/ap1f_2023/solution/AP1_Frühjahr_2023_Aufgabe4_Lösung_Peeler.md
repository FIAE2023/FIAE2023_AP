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
### Aufgabe 4 da:

Select AVG(Versicherung_Summe) from KFZ_Versicherung 

### Aufgabe 4 db:

Select VID from KFZ_Versicherung where Vertragsbegin == Mai 2022 and VErsicherungssumme > 100.000,000 and garage == false 
