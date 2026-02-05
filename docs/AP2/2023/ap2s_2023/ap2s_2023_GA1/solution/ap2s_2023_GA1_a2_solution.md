---
sidebar-position: 2
title: AP2 GA1 Sommer 2023 Aufgabe 2 - Lösung Rücker
description: Dies ist die Lösung zu AP2 GA1 Sommer 2023 Aufgabe 2
---

#
## AP2 GA1 Sommer 2023 Aufgabe 2 - Lösung Rücker [Mia Rücker](<../../../../../user/Auszubildende Michel/ruecker.md>)

### Aufgabe 2 a)
Merkmal 1: Ein Merkmal ist die Fähigkeit, die Software auszubauen, um diese auf neue Umgebungen anpassen zu können.

Merkmal 2: Ein Merkmal ist die Software verbessern zu können um z.B. neuen Anforderungen gerecht zu werden.

### Aufgabe 2 ba)
Polymorphie bedeutet in der Objektorientierten Programmierung bei Klassen mittels Vererbung vorhandene Methoden überschreiben oder in der gleichen Klasse überladen zu können. Es wird dann, während der Laufzeit bestimmt, welche Methode ausgeführt wird.
Überladene Klassen entscheiden über ihre Parameter, welche ausgeführt wird und Überschriebene davon welche Klasse sie aufgerufen hat.

### Aufgabe 2 bb)
![Aufgabe 2 bb)](<../../../../../../static/img/AP2/Sommer/ap2s_2023_GA1/AP2_2023_Sommer_GA1_2bb_solution.png>)

### Aufgabe 2 bc)
``` bash
static createBesucher(typ: String): Besucher {
  IF typ = "STANDARD"
    return new StandardBesucher()
  IF END
  IF typ = "PREMIUM"
    return new PremiumBesucher()
  END IF
  IF typ = "VIP"
    return VIPBesucher()
  END IF
}
```

### Aufgabe 2 bd)
```bash
calculatePreis(basisPreis:Double): Double{
  return basisPreis * 0.95;
}

isExpressEingang(isWerktag: boolean): boolean{
  return isWerktag;
}
```
