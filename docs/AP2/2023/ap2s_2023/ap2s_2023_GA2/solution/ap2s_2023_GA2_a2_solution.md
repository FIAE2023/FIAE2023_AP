---
sidebar-position: 2
title: AP2 GA2 Sommer 2023 Aufgabe 2 - Lösung Rücker
description: Dies ist die Lösung zu AP2 GA2 Sommer 2023 Aufgabe 2
---

#
## AP2 GA2 Sommer 2023 Aufgabe 2 - Lösung Rücker [Mia Rücker](<../../../../../user/Auszubildende Michel/ruecker.md>)

### Aufgabe 2

``` bash
countVisitors(entry: ComeLeave): Integer[][]
result[][] # filled with 0

curVis := 0
leftVis := 0
curTime := 0
curDay := 0

FOREACH row in entry
  IF curTime != row.date.getHout()
    curVis := curVis-LeftVis
    curTime := row.date.getHour()
  END IF
  IF curDay != row.date.getDay()
    curVis := 0
  END IF
  IF row.comeInOut = 0
    result[row.date.getDay(),row.date.getHour-9] := curVis + row.getNoPeople()
    curVis += row.getNoPeople
  ELSE
    leftVis += row.getNoPeople
  END ELSE
```
