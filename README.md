# 🇩🇪 Julia's Pflanzen-Datenbank und Gartenraster

Zwei zusammenspielende, browserbasierte Tools rund um Gartenplanung – beide laufen komplett offline, ohne Server, ohne Installation.

**Julia's Pflanzen-Datenbank** (`datenbank_bearbeiten.html`) ist eigentlich das Herzstück: eine Pflanzen-Datenbank, die ursprünglich als Office-Tabelle mit Pflanzendaten begann und nun in eine übersichtliche, komfortable Pflegemaske übertragen wurde.

**Julia's Gartenplaner** (`gartenplaner.html`) nimmt diese Daten – inklusive echter Reihen- und Pflanzabstände – und bringt sie aufs Raster: wie ein Taschenrechner für Garten und Beete, der zeigt, wie viele Pflanzen wo tatsächlich hinpassen.

Beide Tools sind 8-sprachig (🇩🇪 🇺🇸 🇷🇺 🇪🇸 🇫🇷 🇯🇵 🇰🇷 🇨🇳) und teilen sich die gemeinsame Datei `pflanzen.js`.

## Die beiden Teile im Überblick

### 🌱 Pflanzen-Datenbank (`datenbank_bearbeiten.html`)
Komfortable Pflege-Maske für `pflanzen.js` statt Handarbeit im Rohtext.

- Zwei sortierte, durchsuchbare Listen: Pflanzen und Baumaterial
- Formulare mit allen Datenfeldern (Farbe, Bild, Abstände, Form, Musterung, uvm.), inkl. Emoji-Picker fürs Icon
- Neue Einträge anlegen, bearbeiten, löschen – mit automatischer Sortierung und Duplikat-Schutz
- Speichern als `pflanzen.js` (gleiches Format wie das Original) oder als CSV-Export
- Ein-/ausklappbarer, fixierter Header; responsives Layout auch für schmalere Bildschirme

➡️ Ausführliche Doku: [README_Datenbank_bearbeiten.md](README_Datenbank_bearbeiten.md)

### 🪴 Gartenplaner (`gartenplaner.html`)
Setzt Pflanzen und Material aus der Datenbank maßstabsgetreu auf ein Garten-Raster.

- Garten als SVG (1 Einheit = 1 cm), frei einstellbare Größe, Zoom & Pan
- Pflanzen/Material per Drag & Drop einzeln platzieren oder ganze Flächen automatisch füllen (mit echtem Pflanz- und Reihenabstand)
- Frei platzierbare Notizzettel fürs Raster
- Vollständiges Undo/Redo, Speichern/Laden als `.json`, PNG-Export in hoher Auflösung

➡️ Ausführliche Doku: [README_Gartenplaner.md](README_Gartenplaner.md)

## Nutzung

1. Alle Dateien (`gartenplaner.html`, `datenbank_bearbeiten.html`, `pflanzen.js`, `gartenplaner_lang.js`, `datenbank_bearbeiten_lang.js`) im selben Ordner speichern.
2. `gartenplaner.html` zum Planen öffnen, `datenbank_bearbeiten.html` zum Pflegen der Pflanzendaten – beide greifen auf dieselbe `pflanzen.js` zu.
3. Alles läuft lokal im Browser, nichts wird an einen Server übertragen.

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks oder Build-Tools nötig). `pflanzen.js` ist bewusst als `.js`-Datei geführt (statt `.json`), damit sie unter `file://` ohne CORS-Probleme geladen werden kann.

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.

Copyright (C) 2026 heino17


---


# 🇺🇸 Julia's Garden Planner Suite

Two interlocking, browser-based tools for garden planning – both run completely offline, with no server and no installation required.

**Julia's Plant Database** (`datenbank_bearbeiten.html`) is really the heart of it: a plant database that started life as an office spreadsheet of plant data and has now been turned into a clear, convenient editing tool.

**Julia's Garden Planner** (`gartenplaner.html`) takes that data – including real row and plant spacing – and lays it out on a grid: like a calculator for gardens and beds, showing exactly how many plants actually fit where.

Both tools support 8 languages (🇩🇪 🇺🇸 🇷🇺 🇪🇸 🇫🇷 🇯🇵 🇰🇷 🇨🇳) and share the same `pflanzen.js` data file.

## **The two parts at a glance**

### 🌱 **Plant Database** (`datenbank_bearbeiten.html`)
A convenient editing tool for `pflanzen.js`, instead of hand-editing raw text.

- Two sorted, searchable lists: plants and building materials
- Forms covering every data field (color, image, spacing, shape, pattern, and more), including an emoji picker for icons
- Create, edit, and delete entries – with automatic sorting and duplicate protection
- Save as `pflanzen.js` (same format as the original) or export as CSV
- Collapsible, fixed header; responsive layout for narrower screens too

➡️ Full documentation: [README_Datenbank_bearbeiten.md](README_Datenbank_bearbeiten.md)

### 🪴 **Garden Planner** (`gartenplaner.html`)
Places plants and materials from the database onto a garden grid, to scale.

- Garden rendered as SVG (1 unit = 1 cm), freely adjustable size, zoom & pan
- Place plants/materials individually via drag & drop, or automatically fill whole areas (using real plant and row spacing)
- Freely placeable sticky notes on the grid
- Full undo/redo, save/load as `.json`, high-resolution PNG export

➡️ Full documentation: [README_Gartenplaner.md](README_Gartenplaner.md)

## **Usage**

1. Save all files (`gartenplaner.html`, `datenbank_bearbeiten.html`, `pflanzen.js`, `gartenplaner_lang.js`, `datenbank_bearbeiten_lang.js`) in the same folder.
2. Open `gartenplaner.html` to plan your garden, and `datenbank_bearbeiten.html` to maintain the plant data – both work with the same `pflanzen.js`.
3. Everything runs locally in the browser, nothing is transmitted to any server.

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks or build tools required). `pflanzen.js` is deliberately kept as a `.js` file (rather than `.json`) so it can be loaded under `file://` without CORS issues.

## **License**

This project is licensed under the GNU General Public License v3.0. The source code may be freely used, modified, and distributed - any derivative works must also remain open under the GPLv3.

Copyright (C) 2026 heino17
