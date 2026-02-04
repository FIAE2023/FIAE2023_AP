---
sidebar-position: 2
title: AP2 GA2 Sommer 2023 Aufgabe 4 - Lösung Rücker
description: Dies ist die Lösung zu AP2 GA2 Sommer 2023 Aufgabe 4
---

#
## AP2 GA2 Sommer 2023 Aufgabe 4 - Lösung Rücker [Mia Rücker](<../../../../../user/Auszubildende Michel/ruecker.md>)

### Aufgabe 4 a)
```sql
SELECT Count(PID) AS "Anzahl Pflegearbeiten"
FROM Pflegearbeit
WHERE YEAR(Datum_Soll)=2023 AND Datumabschluss IDS NULL
```

### Aufgabe 4 b)
```sql
SELECT Datum_Soll AS Datum, WEEKDAY(Datum_Soll) AS Wochentag, T.Bezeichnung AS Tätigkeit
FROM Pflegearbeit AS P
INNER JOIN Taetigkeit AS T ON P.TID=T.TID
INNER JOIN Objekt AS O ON P.OID=O.OID
WHERE O.Bezeichnung="Außenanlage Nord" AND Datum_Soll Between "19.06.2023" AND "30.06.2023"
Order By Daum
```

### Aufgabe 4 c)
```sql
SELECT MID, Name, Vorname, (COUNT(MID_Ist)/12) AS Durchschnitt
FROM Mitarbeiter AS M
LEFT JOIN(
SELECT MID_Ist
FROM Pflegearbeit
WHERE YEAR(Datum_Abschluss)=2021
) ON MID=MID_Ist
GROUP BY MID, Name, Vorname
```

### Aufgabe 4 d)
```sql
CREATE USER Maier IDENTIFIED BY '5jk2T';
GRANT SELEC ON Objekt TO 'Maier';
```
