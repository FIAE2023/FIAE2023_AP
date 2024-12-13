---
id: howToGit
title: ... Use Git on this Project
sidebar_class_name: hidden
description: Wie nutzt man Git für das Wiki
---

## Einleitung:

Diese Seite zeigt alle Git Commands, die Sie für die Arbeit mit einem lokalen Repository brauchen.

:::warning
Git muss hierfür schon über das Terminal installiert worden sein
:::

## Getting started:

### Erstellung eines Repositorys:

Um ein neues Repository zu erstellen muss man folgenden command nutzen:

```bash
git init
```

Mit diesem wird im derzeitigen Ordner ein git Repository Lokal erstellt und dieses muss später auf Github/Gitlab gepusht werden. 

---

Es gibt aber auch noch den command:

```bash
git clone https://github.com/username/Repositoryname.git

git clone git@github.com:username/Repositoryname.git
```

Der obere von Beiden commands wird genutzt um Repositorys über **https** zu Klonen auf den Rechner.  
Der untere command wird genutzt um über **ssh** zu Klonen.  

---

Um nun das Repository zu Konfigurieren gibt es nun den command:

```bash
git config 
```

Allerdings gibt es noch andere sogenannte Flags die man nutzen muss hierfür.
In dem folgenden Link findet man nochmal mehr dazu.  
[Git Config](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)

### Wie bekomme ich meine Dateien nun auf Github?

Um nun die Dateien auf Github/Gitlab hochzuladen, müssem wir einiges beachten.

Wir haben folgende commands, die zusammen verwendet werden sollten:

```bash
git status

git add '.' 
git add 'Ordner- / Dateipfad'

git commit 
```

*git status* wird dazu genutzt, den Stand vom Lokalen Github Repository und dem online zu verfügung stehenden Github Repository auf bisherige änderungen und gibt dann aus ob alles auf dem gleichen stand ist oder es veränderten Dateien auf dem Lokalen Branch gibt, die nicht commitet und gepushed sind.

---

*git add* ist ein wichtiger command, weil wir damit sagen was für Ordner/Dateien wir für unsere commits beinhalten möchten.  
Da wir vieleicht in einer Vorlage für eine Seite und der Hauptdatei etwas verändert haben.  
Hierbei ist zu beachten, dass man sinvolle zusammenhängende Dateien in einen Commit macht.

---

*git commit* ist der command mit welchem wir letzendlich auf unserem Lokalen branch erstmal eine art speicherung vornehmen müssen.  
Dieser Schritt ist mit dem *git add* Schritt ein Pflicht Schritt da wir sonst keine für git sichtbaren veränderungen haben.  
Daher müssen wir immer unser änderungen commiten bevor wir pushen.

Hier sind Links für genaueres zu den commands:  
[git status](https://www.atlassian.com/git/tutorials/inspecting-a-repository)  
[git add](https://www.atlassian.com/git/tutorials/saving-changes)  
[git commit](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)  

---

Es gibt neben diesen drei commands auch noch die **.gitignore** Datei die genutzt wird um Dateien nicht mit commiten zu müssen.

---

Wenn die änderungen Lokal commitet wurden müssen wir nun auf unseren Branch pushen.  
Das macht man mit dem command:

```bash
git push 
```
*git push* hat viele verschiedene arten genutzt zu werden.  
Im normalfall pushed man auf dem Remote branch in welchem man gerade arbeitet.  
Es gibt aber auch noch andere arten es zu nutzen.

Hier sind Links für genaueres zu *git push*:  
[Git Dokumentation](https://git-scm.com/docs/git-push)  
[Atlassian git push Doku](https://www.atlassian.com/git/tutorials/syncing/git-push)  

---

Um die commits nun auf deinen Lokalen branch zu bekommen und die Dateien upzudaten gibt es die commands:

```bash
git fetch 

git pull
```

*git fetch* downloaded die commits vom remote und updated die Dateien auf deinem Lokalen Branch.  
Während *git pull* die commits downloaded und merged mit deinem Lokalen.

[Git Fetch](https://www.atlassian.com/git/tutorials/syncing/git-fetch)
[Git Pull](https://www.atlassian.com/git/tutorials/syncing/git-pull)

### Branches:

Ich habe ja jetzt schon häufig über Branches gesprochen.  
Aber wie erstelle bzw. benutzt man diese?

```bash
git branch

git checkout 'branchname'
git switch 'branchname'
```

Der obere command wird mit den meisten Flags genutzt.

---

*git checkout* und *git switch* werden dazu verwendet lokal auf einen branch zu wechseln und man kann diese dann auch wieder pushen.  
*git switch* kann nicht genutzt werden neue Branches zu erstellen.

Wenn wir nun mit *git switch main* auf unseren main Branch switchen werden unsere lokalen Dateien von unserem vorherigen branch auf welchem wir uns befunden haben nicht gelöscht, weil wir Lokal unseren branch haben.  
Zusätzlich muss man beachten, dass man wenn man bei der nutzung von *git switch* auf den Lokalen branch wechselt und die updates die dieser Branch bekommen hat erster mit *git fetch* oder *git pull* downloaden muss.

[Git Checkout Dokumentation](https://git-scm.com/docs/git-checkout)  
[Git Switch Dokumentation](https://git-scm.com/docs/git-switch)  

---

Die möglichkeit branches zu Löschen gibt es auch mit folgenden command:
```bash
git branch -d 'branchname'
```

Mit diesem command können wir den branch Löschen.  
Hierbei ist zu beachten, dass der Branch gemerged sein muss mit dem branch von welchem er erstellt wurde.

[Git Branch Dokumentation](https://git-scm.com/docs/git-branch)


