---
sidebar-position: 2
title: AP2 GA2 Sommer 2023 Aufgabe 3 - Lösung Rücker
description: Dies ist die Lösung zu AP2 GA2 Sommer 2023 Aufgabe 3
---

#
## AP2 GA2 Sommer 2023 Aufgabe 3 - Lösung Rücker [Mia Rücker](<../../../../../user/Auszubildende Michel/ruecker.md>)

### Aufgabe 3 aa)
Der letzte Monat in der Liste TicketDataList (hier Februar) wir nicht geprintet.
Die Berechnung vom Jahresdurchschnitt ist falsch. Es wir durch monatTicketZaehler geteilt statt durch jahrTicketZaehler.

### Aufgabe 3 ab)
Zeile 53 austauschen durch:
WriteLn("Durchschnitt:" + jahrNutzungsZaehler / jahrTicketZaehler);

Nach Zeile 48 folgenden Code einfügen:
WriteLn("Auswertung für Monat" + monat);
WriteLn(" Minimale Nutzung:" + monatMin);
WriteLn(" Maximale Nutzung:" + monatMax);
WriteLn(" Durchschnitt:" + monatNutzungsZaehler/monatTicketZaehler);
WriteLn(" Gesamtzahl Tickets:" + monatTicketZaehler);
WriteLn();

jahrTicketZaehler = jahrTicketZaehler + monatTicketZaehler;
jahrNutzungsZaehler = jahrNutzungsZaehler + monatNutzungsZaehler;
if ( jahrMax < monatMax)
  jahrMax = monatMax;
end if
if ( jahrMin > monatMin )
  jahrMin=monatMin;
end if

### Aufgabe 3 ba)
Anweisungsüberdeckung ist eine Kennzahl bei Tests bei dem  geschaut wird, wieviel Prozent der Code-Zeilen erfolgreich ausgeführt worden sind. Ziel is t es, dass jede Anweisung mindestens ein mal ausgeführt worden ist.

### Aufgabe 3 bb)
Zeile 46 wird nicht durchlaufen, da monatMin nie größer als td.Nutzungszaehler sein konnte bei den Testdaten.


### Aufgabe 3 bc)


| Id | Monat | Jahr | Nutzungszaehler |
| -- | ----- | ---- | --------------- |
| 0  | Januar | 2023 | 31 | 
| 1  | Januar | 2023 | 28 |
| 2  | Februar | 2023 | 27 | 
