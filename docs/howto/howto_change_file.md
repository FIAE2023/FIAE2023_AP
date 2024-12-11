---
id: howToChange
title: How to change an article
description: Übersicht aller vorhandenen AP1 von 2021
---

## Einleitung:

Diese Datei soll zeigen, wie man eine Datei verändert und wie die änderungen auf die Seite letzendlich kommen.

## Findung der Seite:

Wenn Sie zum Beispiel Ihre Nutzerseite verändern wollen, gehen Sie erstmal auf die Seite und wenn Sie runterscrollen sehen Sie nun einen Link mit dem Namen **Edit this page**.

Wenn Sie auf diesen klicken werden Sie auf unser Github Repository weitergeleitet mit der Datei die Sie ändern möchten geöffnet.

## Änderungen an der Datei vornehmen:

Im Repository dürften Sie nun auf der jeweiligen Datei schon sein und müssen nur noch auf der Rechten Seite den Stift suchen und anklicken.

Nachdem Sie auf den Stift geklickt haben können Sie in Github die Datei verändern.

**NICHT VERGESSEN ZU COMMITEN**

## Wie kommen die veränderungen nun auf die Seite?

Damit die Veränderungen nun auf der Seite erscheinen, muss die Frau Michel diese Deployen mit dem command:

> GIT_USER=(username) npm run deploy

Mit dem command oben deployed Sie die Datei und startet einen Building Prozess auf Github da Docusaurus es einfach gestalltet Github Pages zu nutzen.

Nachdem die Frau Michel deployed hat wird nach ein paar Minuten die neue Webseite.