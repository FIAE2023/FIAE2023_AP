## 4. Aufgabe

*Workspace management systems prepare the PC by installation and configuration, so that the user can 
immediately work with the programs. Prerequisite for the automatic installation are customized setups
(packages), which do not require user input. The packages are installed and configured by a software
distribution agent, which must be located on each PC. The path management controls the administration and
automatic installation of patches and updates. The integrated license management combines the data of
available and actually used licenses and can thus not only prevent the procurement of neither too few nor too
many software licenses. The data collection during the inventory is done remotely. It can also make use of
proven network management tools such as SNMP. It is therefore not necessary for the responsible personnel to
obtain physical access to the individual devices, as it is the case with an inventory. The data stock can be
continuously updated by the automatic collection and not only once a year.*


a. Nennen Sie vier Leistungsmerkmale einer Workspace-Management-Software anhand des oben
zitierten Texts.

1. Sie bereiten die Installation und Konfiguration vor, damit die Benutzer sofort mit der Arbeit
anfangen können. 
2. Voraussetzung für die automatische Installation sind die anpassbaren Einrichtungen für die
Pakete, welche keine Benutzereingabe benötigen.
3. Das Patch-Management kontrolliert die Administration und automatische Installation der Patches
und Updates.
4. Die integrated-license kombiniert die Daten von verfügbaren und aktuell benutzten
Lizenzen und kann daher nicht nur die Beschaffung von zu wenig oder zu vielen Lizenzen liefern.


b. Die Workspace-Management-Software wird cloudbasiert oder on-premises angeboten.
Nennen Sie zwei Vor- und Nachteile einer cloudbasierten Software gegenüber der on-premises.

Vorteile:
- Überall zugänglich
- Einfache Skalierung


Nachteile:
- Nur möglich, wenn eine stabile Internetverbindung besteht
- Gehostete Daten können den Gesetzen der Länder unterliegen, in denen der Anbieter liegt


c. Für die Workspace-Management-Software können die Lizenzen von einem externen Anbieter für
25,00 EUR je Lizenz und Jahr bezogen werden.

Für die Eigenentwicklung wird ein Personalaufwand von 12.000 Stunden veranschlagt. Die
jährliche Wartung wird mit 140 Stunden pro Jahr über einen Zeitraum von zehn Jahren
veranschlagt. Eine Mitarbeiterstunde wird mit dem internen Kostensatz von 75 EUR berechnet.

Ab welcher Lizenzanzahl ist die Eigenentwicklung über einen Zeitraum von zehn Jahren günstiger
als der Fremdbezug? (Lohnsteigerungen und Erhöhung der Lizenzpreise sollen nicht berücksichtigt
werden.)


Externer Anbieter:
\- 25,00 EUR pro Lizenz * 10 Jahre = 250,00 EUR

Eigenentwicklung:
\- Personalaufwand = 12.000 Stunden
\- Wartung = 140 Stunden * 10 Jahre = 1.400 Stunden
\- 1 Mitarbeiterstunde = 75,00 EUR

Lizenzanzahl = (12.000 Stunden + 1.400 Stunden) * 75,00 EUR = 1.050.000 EUR / 250,00 EUR = **4200 Lizenzen**

Ab einer von 4.021 Lizenzen ist die Eigenentwicklung günstiger als die vom externen Anbieter.

![Aufgabe_4_c)](../../../../../static/img/AP1/2022/ap1f_2022/AP1_2022_Frühjahr_Aufgabe_4_c\)_Break-Even-Point-Diagramm.png) 

d. Sie planen, eine eigene Lösung für eine automatisierte Konfiguration der Standardarbeitspätze zu
programmieren. Aus einer Datenbank werden alle zu konfigurierenden PCs ausgelesen. Danach
wird für jeden PC aus der Datenbank die zu installierende Software abgefragt und auf dem PC
installiert.

Es gibt folgende Variablen:

PCNr Ganzzahl - Laufvariable
PCNr Ganzzahl - Laufvariable
SoftwareNr Ganzzahl - Laufvariable

Es gibt die folgenden Felder (Array)

PCListe[] Stringliste mit den Namen der PC
SoftwareListe[] Stringliste mit den Namen der Software

Es stehen Ihnen die folgenden Funktionen zur Verfügung:

getPC() - liefert eine Liste von PC-Namen aus der Datenbank
getSoftware(String) liefert zu dem angefragten PC eine Liste der zu installierenden
Software

installSoftware(String, String) - liefert dem angefragten PC eine Liste der zu installieren Software

Tragen Sie die Anweisungen folgerichtig in das nebenstehende Struktogramm ein.

1. installSoftware(SoftwareListe[SoftwareNr], PCListe[PCNr])
2. Solange SoftwareNr < Anzahl der Elemente in SoftwareListe[]
3. PCListe[] = getPC()
4. PCNr = PCNr + 1
5. PCNr = 0
6. SoftwareListe[] = getSoftware(PCListe[PCNr])
7. SoftwareNr = 0
8. SoftwareNr = SoftwareNr + 1
9. Solange PCnr < Anzahl der Elemente in PCListe()

![Aufgabe_4_d)](../../../../../static/img/AP1/2022/ap1f_2022/AP1_2022_Frühjahr_Aufgabe_4_d\)_Struktogramm.png)

e. Die Datenbank soll in der Cloud gesichert werden.

Berechnen Sie die Zeit in Minuten, die für die Übertragung der 100 MiByte großen Datei bei einer
VDSL-Leitung mit 100 Mbit/s Download und 40 Mbit/s Upload benötigt wird.

Das Ergebnis ist auf volle Sekunden aufzurunden.

Der Rechenweg ist anzugeben.

Download: 100 MiByte * 2 ^ 20 = 104.857.600 Byte * 8 = 838.860.800 Bit / 10 ^ 6 = 838,8608 Mbit
838 Mbit / 100 Bit/s = 8,38 Sekunden
~ 8,38 Sekunden = 9 Sekunden

Es benötigt bei einer Downloadgeschwindigkeit von 100 Mbit/s und einer Uploadgeschwindigkeit
von 40 Mbit/s 9 ganze Sekunden.
