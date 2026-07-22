# 🇩🇪 Julia's Pflanzen-Datenbank (datenbank_bearbeiten.html)

Eine komfortable, browserbasierte Pflege-Maske für `pflanzen.js`, die Datenquelle von [Julia's Gartenplaner](README_Gartenplaner.md) – läuft komplett offline, ohne Server, ohne Installation. Statt den Rohtext der Datei von Hand zu editieren, gibt's hier Listen, Formulare und Buttons.

Die datenbank_bearbeiten.html ist eigentlich der Hauptteil, eine Pflanzen-Datenbank, ehemals eine Office-Tabelle mit Pflanzen-Daten, übertragen in eine nette Umgebung.
Pflanzen, Reihen- und Pflanzabstände auf ein Raster zu übertragen, ist wie ein Taschenrechner für Garten und Beete. :)

**8 Sprachen: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Schalter in der Menüleiste**
Die Standard-Sprache kann in Datei [datenbank_bearbeiten_lang.js](datenbank_bearbeiten_lang.js) festgelegt werden

## Nutzung

1. `datenbank_bearbeiten.html` und `datenbank_bearbeiten_lang.js` **neben** die `pflanzen.js` legen (idealerweise auch neben `gartenplaner.html`).
2. `datenbank_bearbeiten.html` per Doppelklick im Browser öffnen.
3. Fertig – alles läuft lokal im Browser, es wird nichts an einen Server übertragen.

Die `pflanzen.js` wird beim Öffnen **automatisch geladen** (gleiches Prinzip wie beim Gartenplaner). Die Statuszeile zeigt sofort, wie viele Pflanzen- und Material-Einträge gefunden wurden. Über der Statuszeile steht zusätzlich der Name der geladenen Datei – ist es nicht `pflanzen.js`, gibt's einen gut sichtbaren Warnhinweis.

## Funktionen

**Andere Datenbank laden**
- Button „📂 Andere Datenbank laden" öffnet einen Datei-Dialog – nützlich, um z. B. eine Test- oder Sicherungskopie (`pflanzen_neu.js` o. ä.) zu öffnen, statt der Datei im gleichen Ordner
- Beim Speichern wird automatisch der Name der zuletzt geladenen Datei als Vorschlag verwendet

**Übersicht & Suche**
- Zwei getrennte, alphabetisch sortierte Listen: 🌿 Pflanzen und 🧱 Baumaterial (Sortierung berücksichtigt auch Umlaute korrekt)
- Ein Suchfeld durchsucht alle Felder aller Einträge gleichzeitig (Name, id, Nutzung, Notiz, Standort, ...), mit ✖-Button zum schnellen Zurücksetzen
- Icon-Spalte in den Listen zeigt Bild (22×22px-Vorschau), falls hinterlegt, sonst das Icon, sonst bleibt sie leer; ein nicht ladbares Bild springt automatisch zurück auf das Icon
- Klick auf eine Zeile (oder ✏️-Button) öffnet den Eintrag zum Bearbeiten

**Einträge bearbeiten / neu anlegen / löschen**
- „➕ Neue Pflanze" bzw. „➕ Neues Material" öffnet ein leeres Formular
- Formulare enthalten alle Felder aus dem Datenmodell (Pflanzen: Name, Icon, Bild, Farbe, Abstände, Standort, Aussaat, Keimung, Notiz usw.; Material: Name, Icon, Bild, Farbe, Maße, Form, Musterung, Notiz)
- **Farbe (`accent`)**: Textfeld für den Hex-Code plus visueller Farbwähler daneben, beide halten sich automatisch synchron
- **Bild (`image`)**: Pfad wird per Hand eingetragen (z. B. `images/basilikum.png`), darunter erscheint eine Live-Vorschau, sobald die Datei gefunden wird; ein ❓-Hinweis-Icon erklärt per Tooltip, dass der PNG-Export im Gartenplaner Bilder nur einbezieht, wenn dieser per http/https aufgerufen wird
- **Icon**: 😀-Button neben dem Icon-Textfeld öffnet einen Emoji-Picker mit rund 36 kuratierten Emojis (Pflanzen, Bäume, Blüten, Gemüse/Früchte); Klick übernimmt das Emoji direkt, das Feld bleibt trotzdem frei editierbar
- **Form (nur Material)**: Auswahl Eckig/Rund; bei runder Form zusätzliches optionales Feld „Durchmesser (cm)" – bleibt es leer, wird ersatzweise die Breite als Durchmesser verwendet
- **Musterung (`pattern`, nur Material)**: Dropdown mit verständlichen Bezeichnungen („Pflasterstein-Muster", „Mauerziegel-Muster", „Rasen-Muster", „Kein Muster") statt der technischen Namen
- 🗑️-Button (in der Liste oder im Formular) löscht einen Eintrag, nach Sicherheitsabfrage
- Neue oder geänderte Einträge sortieren sich automatisch an die richtige alphabetische Stelle ein
- Doppelte `id`s werden sofort erkannt und mit Warnhinweis blockiert

**Speichern / Export**
- Button „💾 Datenbank speichern" lädt eine neue `pflanzen.js` (bzw. den Namen der geladenen Datei) herunter, im gleichen Format wie das Original – der Gartenplaner liest sie unverändert weiter ein
- Der Button wird orange und pulsiert, sobald ungespeicherte Änderungen vorliegen, damit immer klar ist, ob noch exportiert werden muss
- Vor jedem Export werden doppelte `id`s über beide Listen hinweg nochmal geprüft
- Warnhinweis (Standard-Browser-Popup) beim Neuladen (F5) oder Schließen der Seite, solange ungespeicherte Änderungen bestehen
- Button „📊 Als CSV exportieren" exportiert Pflanzen und Material zusammen in eine Datei (`pflanzen_datenbank.csv`), erste Spalte `typ` (`pflanze`/`material`), danach alle Felder vereinigt; Pipe (`|`) als Trennzeichen mit automatischem Escaping, UTF-8-BOM für korrekte Umlaut-Darstellung (z. B. in Excel)

**Bedienoberfläche**
- Sprachwahl-Dropdown im Kopfbereich
- Hell/Dunkel-Mode, Button (🌙/☀️) neben dem Header-Ein-/Ausklapp-Button — ein Klick schaltet zwischen Hell und Dunkel um
- Header ein-/ausklappbar und oben fixiert (bleibt beim Scrollen sichtbar); im zugeklappten Zustand nur verkürzter Titel und „💾 Datenbank speichern" sichtbar, für mehr Platz auf kleinen Bildschirmen
- Ab einer Bildschirmbreite von ca. 720px stapelt sich das Layout automatisch (Liste oben, Formular darunter), Buttons und Formularfelder werden fingerfreundlicher

## Format-Kompatibilität (wichtig!)

- Das Tool verändert das Datenformat von `pflanzen.js` **nicht** – `PLANTS_DATA` und `MATERIALS_DATA` bleiben genau wie vom Gartenplaner erwartet
- Leere/optionale Felder werden beim Export einfach weggelassen (inhaltlich gleichwertig zu leeren Strings)
- Der Kommentar-Kopf der Datei bleibt beim Export erhalten (bzw. wird ein Standard-Kopf verwendet, falls keiner erkannt wurde)

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks oder Build-Tools nötig). Alles läuft rein im Browser, keine Serveranbindung, kein Backend. Dateien:

- `datenbank_bearbeiten.html` – Struktur, Logik und Styling
- `pflanzen.js` – Pflanzen- und Materialdaten (wird automatisch geladen, muss im selben Ordner liegen)
- `datenbank_bearbeiten_lang.js` – Sprachendatei

**Hintergrundwissen:**
- `pflanzen.js` wird bewusst als `.js`- statt `.json`-Datei geführt, damit sie per `<script src="...">` auch unter `file://` ohne CORS-Probleme geladen werden kann
- Der volle Dateipfad (`file://...`) lässt sich aus Browser-Sicherheitsgründen nicht auslesen, nur der reine Dateiname ist sichtbar
- Bild-Vorschau und späterer PNG-Export im Gartenplaner funktionieren nur zuverlässig, wenn Bilddateien relativ zur jeweiligen HTML-Datei liegen (z. B. im Unterordner `images/`)

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.

Copyright (C) 2026 heino17


---


# 🇺🇸 Julia's Plant Database (datenbank_bearbeiten.html)

A convenient, browser-based editing tool for `pflanzen.js`, the data source for [Julia's Garden Planner](README_Gartenplaner.md) – runs completely offline, with no server and no installation required. Instead of editing the file's raw text by hand, this gives you lists, forms, and buttons.

datenbank_bearbeiten.html is actually the main part—a plant database, formerly an Office spreadsheet containing plant data, converted into a user-friendly interface.
Plotting plants, row spacing, and plant spacing on a grid is like having a calculator for your garden and flower beds. :)

**8 languages: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Switch in menu bar**
The default language can be set in the [datenbank_bearbeiten_lang.js](datenbank_bearbeiten_lang.js) file

## **Usage**

1. Save `datenbank_bearbeiten.html` and `datenbank_bearbeiten_lang.js` **next to** `pflanzen.js` (ideally also next to `gartenplaner.html`).
2. Open `datenbank_bearbeiten.html` in your browser via double-click.
3. Done – everything runs locally in the browser, nothing is transmitted to any server.

`pflanzen.js` is loaded **automatically** on opening (same principle as the garden planner). The status line immediately shows how many plant and material entries were found. Above the status line, the name of the loaded file is also shown – if it isn't `pflanzen.js`, a clearly visible warning appears.

## **Features**

### **Loading a different database**
- "📂 Load different database" button opens a file dialog – useful for opening a test or backup copy (e.g. `pflanzen_neu.js`) instead of the file in the same folder
- When saving, the name of the most recently loaded file is automatically used as the suggested filename

### **Overview & Search**
- Two separate, alphabetically sorted lists: 🌿 Plants and 🧱 Building materials (sorting correctly handles umlauts as well)
- A search field searches all fields of all entries simultaneously (name, id, usage, note, location, ...), with a ✖ button for quickly clearing it
- The icon column in the lists shows the image (22×22px preview) if one is set, otherwise the icon, otherwise it stays empty; an image that fails to load automatically falls back to the icon
- Clicking a row (or the ✏️ button) opens the entry for editing

### **Editing / creating / deleting entries**
- "➕ New plant" or "➕ New material" opens an empty form
- Forms contain all fields from the data model (plants: name, icon, image, color, spacing, location, sowing, germination, note, etc.; materials: name, icon, image, color, dimensions, shape, pattern, note)
- **Color (`accent`)**: text field for the hex code plus a visual color picker next to it, both stay automatically in sync
- **Image (`image`)**: the path is entered by hand (e.g. `images/basil.png`), a live preview appears below as soon as the file is found; a ❓ tooltip icon explains that the garden planner's PNG export only includes images when it is accessed via http/https
- **Icon**: a 😀 button next to the icon text field opens an emoji picker with about 36 curated emojis (plants, trees, blossoms, vegetables/fruit); clicking one inserts it directly, and the field remains freely editable
- **Shape (materials only)**: choice of square/round; for round shapes, an additional optional "diameter (cm)" field – if left empty, the width is used as the diameter instead
- **Pattern (`pattern`, materials only)**: dropdown with human-readable labels ("Cobblestone pattern", "Brick pattern", "Grass pattern", "No pattern") instead of the technical names
- 🗑️ button (in the list or the form) deletes an entry after a confirmation prompt
- New or edited entries automatically sort into the correct alphabetical position
- Duplicate `id`s are detected immediately and blocked with a warning

### **Saving / Export**
- "💾 Save database" button downloads a new `pflanzen.js` (or the name of the loaded file) in the same format as the original – the garden planner reads it back in unchanged
- The button turns orange and pulses whenever there are unsaved changes, so it's always clear whether an export is still needed
- Duplicate `id`s across both lists are checked again before every export
- A warning (standard browser popup) appears when reloading (F5) or closing the page while unsaved changes exist
- "📊 Export as CSV" button exports plants and materials together into one file (`pflanzen_datenbank.csv`), first column `type` (`plant`/`material`), followed by all merged fields; pipe (`|`) as the delimiter with automatic escaping, UTF-8 BOM for correct umlaut display (e.g. in Excel)

### **User Interface**
- Language selection dropdown in the header
- Light/Dark Mode, button (🌙/☀️) next to the header expand/collapse button — one click toggles between Light and Dark modes
- Collapsible header, fixed to the top (stays visible while scrolling the lists); in the collapsed state only a shortened title and "💾 Save database" remain visible, for more room on small screens
- From a screen width of about 720px, the layout automatically stacks (list on top, form below), with buttons and form fields becoming more finger-friendly

## **Format Compatibility (important!)**

- The tool does **not** change the data format of `pflanzen.js` – `PLANTS_DATA` and `MATERIALS_DATA` remain exactly as the garden planner expects them
- Empty/optional fields are simply omitted on export (equivalent in meaning to empty strings)
- The file's comment header is preserved on export (or a standard header is used if none was recognized)

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks or build tools required). Everything runs entirely in the browser, no server connection, no backend. Files:

- `datenbank_bearbeiten.html` – structure, logic, and styling
- `pflanzen.js` – plant and material data (loaded automatically, must be in the same folder)
- `datenbank_bearbeiten_lang.js` – languages file

**Background:**
- `pflanzen.js` is deliberately kept as a `.js` rather than a `.json` file, so it can be loaded via `<script src="...">` under `file://` without CORS issues
- The full file path (`file://...`) cannot be read out for browser security reasons, only the plain filename is visible
- Image preview and the later PNG export in the garden planner only work reliably when image files are located relative to the respective HTML file (e.g. in an `images/` subfolder)

## **License**

This project is licensed under the GNU General Public License v3.0. The source code may be freely used, modified, and distributed - any derivative works must also remain open under the GPLv3.

Copyright (C) 2026 heino17
