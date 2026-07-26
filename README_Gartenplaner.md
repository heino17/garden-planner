# 🇩🇪 Julia's Gartenplaner

Ein einfacher, browserbasierter Gartenplaner zum Entwerfen von Beeten und Pflanzflächen (Pflanzen-/Materialraster) – läuft komplett offline, ohne Server, ohne Installation. Einfach `gartenplaner.html` im Browser öffnen und loslegen.

Pflanzen und Baumaterial aus einer Liste in den Garten ziehen, dabei reale Reihen- und Pflanzabstände berücksichtigen, Garten als Bild oder Datei sichern.

**8 Sprachen: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Schalter in der Menüleiste**
Die Standard-Sprache kann in Datei [gartenplaner_lang.js](gartenplaner_lang.js) festgelegt werden

## Nutzung

1. `gartenplaner.html`, `pflanzen.js` und `gartenplaner_lang.js` im selben Ordner speichern.
2. `gartenplaner.html` per Doppelklick im Browser öffnen.
3. Fertig – alles läuft lokal im Browser, es wird nichts an einen Server übertragen.

Für die Bild-Funktion (eigene Fotos statt Icon je Pflanze, siehe unten) sowie deren PNG-Export wird ein lokaler Server empfohlen, da `fetch()` unter `file://` blockiert ist (z. B. VSCodium + Live Server, oder `python3 -m http.server`) – auch offline z. B. von einem USB-Stick aus möglich. Ohne Server funktioniert alles andere unverändert.

## Funktionen

**Garten & Raster**
- Garten als SVG, 1 Einheit = 1 cm, Standardgröße 1000×1000 cm, Breite/Länge oben einstellbar
- Hintergrundfarbe des Rasters frei wählbar (Farbwähler im Header), wirkt sich automatisch auch auf den PNG-Export aus
- Rasterlinien passen ihre Farbe automatisch und stufenlos an die gewählte Hintergrundfarbe an (dunkler Hintergrund → helle Linien, heller Hintergrund → dunkle Linien) – kein abrupter Umschlagpunkt, sondern ein weicher Verlauf über alle Zwischenfarben
- Rasterlinien ein-/ausblendbar (bewusst nicht Teil der Undo/Redo-Historie, reine Anzeige-Einstellung)
- Zoom per Schieberegler (10–500 %) oder Strg/Cmd + Mausrad, mit der Mausposition als Fokuspunkt; startet standardmäßig bei 100 %
- Pan: Klick + Ziehen auf leerem Rasterbereich verschiebt den sichtbaren Ausschnitt; ein reiner Klick ohne Bewegung hebt stattdessen die Auswahl auf

**Seitenleiste & Pflanzendaten**
- Seitenleiste mit Suche, zwei Gruppen: „🌿 Pflanzen" und „🧱 Wege & Mauern"
- Die Gruppenüberschriften bleiben beim Scrollen der Liste oben sichtbar („sticky"), lassen sich aber weiterhin per Klick ein-/ausklappen – erspart das Zurückscrollen, um eine lange Liste zu schließen
- Klick auf eine Karte öffnet ein Detail-Panel mit allen vorhandenen Rohdaten (Standort, Wuchshöhe, Keimung, Lebensdauer usw.)
- Klick auf ein Objekt im Garten hebt automatisch die passende Karte in der Seitenleiste hervor und scrollt sie in die Mitte des sichtbaren Bereichs (unterhalb der sticky Überschriften, damit sie nie verdeckt ist)
- Umgekehrt markiert ein Klick auf eine Karte in der Seitenleiste alle bereits im Garten platzierten Objekte dieses Typs – sofern gerade nichts anderes im Garten ausgewählt ist
- Eigene Bilder statt Icon pro Pflanze/Material möglich (optionales `image`-Feld); ist kein Bild hinterlegt, wird das Icon gezeigt, sonst bleibt die Karte leer
- Sidebar lässt sich per Fähnchen-Button ein-/ausblenden (mehr Platz für den Garten auf schmaleren Fenstern)
- Verknüpfung mit der Datenbank-Pflege: Button „Pflanzendatenbank bearbeiten" öffnet `datenbank_bearbeiten.html` (liegt im selben Ordner) in einem neuen Tab

**Platzieren & Bearbeiten**
- Einzelplatzierung: Karte in den Garten ziehen → Kreis (Pflanzen) bzw. Rechteck (Material) in realer Größe wird platziert
- Verschieben platzierter Objekte per Ziehen, Auswählen per Klick, Entfernen per Taste Entf/Backspace oder Button
- Ausgewählte Objekte (und Notizen) lassen sich zusätzlich mit den **Pfeiltasten** verschieben: 1 cm pro Tastendruck, mit gehaltener Umschalttaste 10 cm; gesperrte Objekte werden dabei übersprungen
- Mehrfachauswahl per Shift-Klick oder per Rechteck-Marquee (Strg/Shift + Ziehen auf leerem Hintergrund), inkl. gemeinsamem Verschieben und Löschen
- Flächenfüllung (▦-Button an jeder Karte): Rechteck im Garten aufziehen, Pflanzen nutzen dabei echten Pflanz- und Reihenabstand, Material wird lückenlos gekachelt; bleibt für mehrere Flächen aktiv, bis Esc oder erneuter Klick
- Live-Maßanzeige beim Flächenfüllen: zeigt Breite × Höhe in cm sowie tatsächliche Spalten × Reihen direkt am Auswahlrechteck; bleibt auch am rechten und oberen Rand des Gartens vollständig sichtbar, statt abgeschnitten zu werden
- Icons und eigene Bilder wachsen dynamisch mit der Größe des Kreises bzw. Rechtecks mit (Bilder nutzen 90 %, Icons 62 % der kleineren Kantenlänge) – auch beim PNG-Export exakt zentriert dargestellt

**Objekte sperren / als Fläche fixieren**
- Pflanzen- oder Material-Instanzen im Raster lassen sich sperren, sodass sie nicht mehr aus Versehen verschoben werden können – gedacht für großflächig angelegte Flächen wie Rasen.
- Sperren/Entsperren ist jederzeit möglich über:
  - den 🔒/🔓-Button in der Selektionsleiste (bei bestehender Auswahl),
  - das **Rechtsklick-Kontextmenü** auf einem Objekt.
- Gesperrte Objekte bleiben **anklickbar/auswählbar**, lassen sich aber **nicht mehr ziehen** (Cursor zeigt beim Hover „nicht erlaubt“ an) und werden von der Mehrfachauswahl per Aufziehrahmen (Marquee) ausgenommen.

**Ebenen-Reihenfolge (Vorder-/Hintergrund)**
- Für Pflanzen- und Material-Instanzen lässt sich jetzt die Zeichenreihenfolge ändern – nützlich, wenn sich Objekte überlappen und ein bestimmtes davon optisch oben oder unten liegen soll.
- Verfügbare Aktionen (in der Selektionsleiste **und** im Rechtsklick-Kontextmenü):

| Symbol | Aktion |
|---|---|
| ⬆️ | Ganz nach vorne |
| 🔼 | Eine Ebene nach vorne |
| 🔽 | Eine Ebene nach hinten |
| ⬇️ | Ganz nach hinten |

**Material drehen & Größe ändern**
- Bei einzeln ausgewählten Material-Objekten (z. B. Mauerziegel, Trittsteine) erscheinen zwei Ziehgriffe direkt am Objekt:
  - **Dreh-Griff** (kleiner Kreis oberhalb der Form, mit Verbindungslinie): frei drehbar, rastet bei 0°/90°/180°/270° ein – praktisch, um z. B. einen Ziegel exakt quer zu verlegen, ohne ihn zweimal anlegen zu müssen
  - **Größen-Griff** (unten rechts bzw. am Kreisrand): ändert Breite/Höhe (Rechtecke) bzw. Durchmesser (Kreise), wächst/schrumpft aus der linken oberen Ecke
- Icons und Bilder drehen und skalieren automatisch mit
- Über das Rechtsklick-Kontextmenü lässt sich Drehung/Größe eines veränderten Objekts jederzeit auf den Ursprungszustand zurücksetzen
- Rotation und Größe werden mit in die `.json` gespeichert; ältere Spielstände ohne diese Felder laden weiterhin problemlos
- Gilt ausschließlich für Material – die Größe von Pflanzen bleibt an den hinterlegten Pflanz-/Reihenabstand gekoppelt

**Hintergrundbild fürs Raster**
- Über den Button 🖼️ im Header (neben dem Raster-Ein/Aus-Button) lässt sich ein eigenes Hintergrundbild hinter das komplette Raster legen – zum Beispiel ein Foto des echten Gartenbodens oder eine Textur.
- Das Bild wird in seiner **echten Pixelgröße** (1 px = 1 cm) platziert und **wiederholt sich automatisch** horizontal wie vertikal, falls es kleiner ist als das Raster.
- Ist kein Bild gesetzt, gilt wie bisher nur die einfarbige Rasterfarbe.
- Das Bild wird **eingebettet gespeichert**, dadurch funktioniert auch der **PNG-Export direkt aus dem Browser** – ganz ohne lokalen Server (z. B. LiveServer).
- Das Hintergrundbild ist **nicht Teil von Undo/Redo** (genau wie Rasterfarbe und Raster-Sichtbarkeit).
- Im Dropdown-Menü des 🖼️-Buttons lässt sich ein geladenes Bild jederzeit temporär **ein-/ausblenden**, ohne es zu entfernen – praktisch, um kurz nur das Raster zu sehen. Der Sichtbarkeits-Status wird mitgespeichert.

**Notizzettel**
- Frei platzierbare, gelbe Klebezettel auf dem Raster, mit editierbarem Text – unabhängig vom Pflanzen-System
- Neuer Toolbar-Button 📝 legt einen neuen Zettel in der Mitte des sichtbaren Bereichs an und springt direkt in den Text
- **Verschieben**: am oberen Streifen (Ziehgriff) anfassen, damit Klicks in den Text nicht versehentlich als Drag zählen
- **Text**: direkt reinklicken und tippen
- **Größe ändern**: Eck-Griff unten rechts ziehen, Zettel wächst/schrumpft von der Mitte aus
- **Löschen**: kleiner "×"-Knopf am Zettel, oder Mehrfachauswahl per Marquee + Entf-Taste
- Zettel lassen sich zusammen mit Pflanzen per Marquee auswählen und gemeinsam verschieben/löschen
- Vollständig in Undo/Redo integriert (Verschieben, Resize, Text, Löschen, Styling zählen jeweils als ein Schritt)
- **Styling pro Zettel** (🎨-Knopf öffnet ein Popover): Hintergrundfarbe (Rahmenton wird automatisch als dunklerer Farbton abgeleitet), Textfarbe, Schriftgröße (8–24px); Änderungen wirken sofort live
- Position, Größe, Text und Styling jedes Zettels werden mit in die `.json` gespeichert; ältere Spielstände ohne Notizen laden weiterhin problemlos (Defaults: gelb, bräunlicher Text, 11px)

**Rückgängig / Wiederherstellen**
- Undo/Redo-Buttons im Header, zusätzlich Strg+Z / Strg+Y (bzw. Strg+Umschalt+Z)
- Erfasst: Platzieren, Verschieben (einzeln & Gruppe), Löschen, Flächenfüllung, Notizzettel, Material drehen/skalieren, Gartengröße ändern, Datei laden
- Zoom und Rasterlinien-Anzeige sind bewusst **nicht** Teil der Historie

**Speichern & Exportieren**
- Speichern/Laden ausschließlich über Dateien (`gartenplan.json`), kein Browser-Speicher (localStorage bewusst nicht verwendet)
- Nach dem Laden einer Datei merkt sich „Speichern" den geladenen Dateinamen als Download-Vorschlag, statt immer auf `gartenplan.json` zurückzufallen
- PNG-Export in fester, hoher Auflösung (unabhängig vom aktuellen UI-Zoom), Dateiname enthält automatisch die Gartengröße; Auflösung passt sich bei sehr großen Gärten automatisch nach unten an, damit auch Flächen im Hektar-Bereich noch exportierbar bleiben
- Warnhinweis beim versehentlichen Neuladen oder Verlassen der Seite, solange der Garten nicht leer ist

**Bedienoberfläche**
- Sprachwahl-Dropdown im Kopfbereich
- Ein- und ausklappbare Seitenleiste sowie Kopfbereich für mehr Platz auf kleinen Bildschirmen
- Responsives Layout für Desktop/Tablet (kein Anspruch auf echte Handy-Tauglichkeit)

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks oder Build-Tools nötig). Dateien:

- `gartenplaner.html` – Struktur, Logik und Styling
- `pflanzen.js` – Pflanzen- und Materialdaten (muss im selben Ordner liegen)
- `gartenplaner_lang.js` – Sprachendatei
- `datenbank_bearbeiten.html` – Pflege der Pflanzen-/Materialdatenbank (separat aufrufbar, über Button verlinkt)

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.

Copyright (C) 2026 heino17


---


# 🇺🇸 Julia's Garden Planner

A simple, browser‑based garden planner for designing beds and planting areas (plant/material grid) – runs completely offline, with no server and no installation required. Just open `gartenplaner.html` in your browser and start working.

Drag plants and building materials from a list into the garden, taking real row and plant spacing into account, and save your garden as an image or file.

**8 languages: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Switch in menu bar**
The default language can be set in the [gartenplaner_lang.js](gartenplaner_lang.js) file

## **Usage**

1. Save `gartenplaner.html`, `pflanzen.js` and `gartenplaner_lang.js` in the same folder.
2. Open `gartenplaner.html` in your browser via double‑click.
3. Done – everything runs locally in the browser, nothing is transmitted to any server.

For the image feature (custom photos instead of an icon per plant, see below) and its PNG export, a local server is recommended, since `fetch()` is blocked under `file://` (e.g. VSCodium + Live Server, or `python3 -m http.server`) – this also works offline, e.g. from a USB stick. Everything else works unchanged without a server.

## **Features**

### **Garden & Grid**
- Garden rendered as SVG, 1 unit = 1 cm, default size 1000×1000 cm, width/length adjustable at the top
- Freely selectable grid background color (color picker in the header), automatically applies to the PNG export as well
- Grid lines automatically and smoothly adapt their color to the chosen background color (dark background → light lines, light background → dark lines) - no abrupt switching point, but a smooth transition across all intermediate colors
- Grid lines toggleable (deliberately not part of the undo/redo history, a pure display setting)
- Zoom via slider (10–500%) or Ctrl/Cmd + mouse wheel, with the mouse position as the focus point; starts at 100% by default
- Pan: click + drag on empty grid area moves the visible viewport; a plain click without movement clears the selection instead

### **Sidebar & Plant Data**
- Sidebar with search, two groups: "🌿 Plants" and "🧱 Paths & Walls"
- The group headings stay visible at the top while scrolling the list ("sticky"), but can still be collapsed/expanded by clicking - saves scrolling back up just to close a long list
- Clicking a card opens a detail panel with all available raw data (location, growth height, germination, lifespan, etc.)
- Clicking an object in the garden automatically highlights the matching card in the sidebar and scrolls it to the center of the visible area (below the sticky headings, so it's never hidden)
- Conversely, clicking a card in the sidebar selects all instances of that type already placed in the garden - as long as nothing else is currently selected in the garden
- Custom images instead of an icon per plant/material are supported (optional `image` field); if no image is set, the icon is shown, otherwise the card stays empty
- Sidebar can be collapsed/expanded via a flag-style button (more room for the garden on narrower windows)
- Linked to database maintenance: "Edit plant database" button opens `datenbank_bearbeiten.html` (located in the same folder) in a new tab

### **Placing & Editing**
- Single placement: drag a card into the garden → a circle (plants) or rectangle (material) in real size is placed
- Move placed objects by dragging, select by clicking, remove via Delete/Backspace key or button
- Selected objects (and notes) can also be moved with the **arrow keys**: 1 cm per key press, 10 cm while holding Shift; locked objects are skipped
- Multi-select via Shift-click or rectangular marquee selection (Ctrl/Shift + drag on empty background), including moving and deleting the whole selection together
- Area fill (▦ button on each card): draw a rectangle in the garden; plants use real plant and row spacing, materials are tiled seamlessly; stays active for multiple areas until Esc or another click
- Live measurement display while filling an area: shows width × height in cm as well as the actual columns × rows directly on the selection rectangle; stays fully visible at the garden's right and top edges instead of being clipped
- Icons and custom images dynamically grow with the size of the circle or rectangle (images use 90%, icons 62% of the shorter side) - rendered exactly centered in the PNG export as well

**Lock Objects / Fix as an Area**
- Plant or material instances in the grid can be locked so they can no longer be moved accidentally—intended for large areas such as lawns.
- Locking/unlocking is possible at any time via:
  - the 🔒/🔓 button in the selection bar (when a selection is active),
  - the **right-click context menu** on an object.
- Locked objects remain **clickable/selectable**, but can **no longer be dragged** (the cursor displays “not allowed” when hovered over) and are excluded from multiple selections made using the marquee tool.

**Layer Order (Foreground/Background)**
- You can now change the drawing order for plant and material instances—useful when objects overlap and you want a specific one to appear on top or bottom.
- Available actions (in the selection bar **and** in the right-click context menu):

| Icon | Action |
|---|---|
| ⬆️ | Bring to Front |
| 🔼 | Move One Layer Forward |
| 🔽 | Move One Layer Backward |
| ⬇️ | Send to Back |

**Rotate & Resize Material**
- When a single material object (e.g. a brick, stepping stone) is selected, two drag handles appear directly on the object:
  - **Rotate handle** (small circle above the shape, with a connecting line): freely rotatable, snaps to 0°/90°/180°/270° - handy for laying a brick exactly crosswise without having to build it twice
  - **Resize handle** (bottom right, or on the circle's edge): changes width/height (rectangles) or diameter (circles), grows/shrinks from the upper-left corner
- Icons and images rotate and scale along with the object automatically
- The right-click context menu lets you reset a changed object's rotation/size back to its original state at any time
- Rotation and size are saved in the `.json` file; older saves without these fields continue to load without issues
- Applies to material only - plant size stays tied to its stored plant/row spacing
    
**Background Image for the Grid**
- Use the 🖼️ button in the header (next to the Grid On/Off button) to place your own background image behind the entire grid—for example, a photo of the actual garden soil or a texture.
- The image is placed at its **actual pixel size** (1 px = 1 cm) and **automatically repeats** both horizontally and vertically if it is smaller than the grid.
- If no image is set, only the solid-color grid color applies, as before.
- The image is **saved as an embedded file**, which also enables **PNG export directly from the browser**—without the need for a local server (e.g., LiveServer).
- The background image is **not included in Undo/Redo** (just like the grid color and grid visibility).
- The 🖼️ button's dropdown menu lets you temporarily **show/hide** a loaded image at any time without removing it - handy for briefly seeing just the grid. The visibility state is saved along with the file.

### **Sticky Notes**
- Freely placeable, yellow sticky notes on the grid, with editable text – independent of the plant system
- New 📝 toolbar button creates a new note in the center of the visible area and jumps straight into the text
- **Move**: grab the strip at the top (drag handle), so clicks in the text aren't accidentally counted as a drag
- **Text**: click directly into it and type
- **Resize**: drag the corner handle at the bottom right, the note grows/shrinks from its center
- **Delete**: small "×" button on the note, or multi-select via marquee + Delete key
- Notes can be selected together with plants via marquee and moved/deleted together
- Fully integrated into undo/redo (move, resize, text, delete, and styling each count as one step)
- **Per-note styling** (🎨 button opens a popover): background color (border tone is automatically derived as a darker shade), text color, font size (8–24px); changes apply live immediately
- Position, size, text, and styling of each note are saved in the `.json` file; older saves without notes continue to load without issues (defaults: yellow, brownish text, 11px)

### **Undo / Redo**
- Undo/redo buttons in the header, plus Ctrl+Z / Ctrl+Y (or Ctrl+Shift+Z)
- Captures: placing, moving (single & group), deleting, area fill, sticky notes, rotating/resizing material, changing garden size, loading a file
- Zoom and grid line display are deliberately **not** part of the history

### **Saving & Export**
- Save/load exclusively via files (`gartenplan.json`), no browser storage (localStorage deliberately not used)
- After loading a file, "Save" remembers the loaded filename as the download suggestion, instead of always defaulting to `gartenplan.json`
- PNG export at a fixed, high resolution (independent of the current UI zoom); the filename automatically includes the garden size; resolution automatically scales down for very large gardens so that even hectare-sized areas remain exportable
- Warning when accidentally reloading or leaving the page while the garden is not empty

### **User Interface**
- Language selection dropdown in header
- Collapsible sidebar and header area for more space on small screens
- Responsive layout for desktop/tablet (no claim to true mobile-phone support)

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks or build tools required). Files:

- `gartenplaner.html` – structure, logic, and styling
- `pflanzen.js` – plant and material data (must be located in the same folder)
- `gartenplaner_lang.js` – languages file
- `datenbank_bearbeiten.html` – maintains the plant/material database (invoked separately, linked via a button)

## **License**

This project is licensed under the GNU General Public License v3.0. The source code may be freely used, modified, and distributed - any derivative works must also remain open under the GPLv3.

Copyright (C) 2026 heino17
