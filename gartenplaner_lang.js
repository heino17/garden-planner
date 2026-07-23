/*
   Dieses File ist bewusst als eigenständige, reine JS-Datei gehalten
   (kein separates .json/.yml + fetch), weil fetch() bei lokal per
   Doppelklick geöffneten HTML-Dateien (file://) in vielen Browsern aus
   Sicherheitsgründen (CORS) blockiert wird. <script src="gartenplaner_lang.js">
   hat dieses Problem nicht – bleibt also offline- und server-frei nutzbar.

   Neue Sprache hinzufügen:
   1. Neuen Eintrag nach dem Vorbild von "de" anlegen (alle Keys kopieren).
   2. Alle Werte übersetzen. Platzhalter wie {name}, {w}, {h}, {px}, {msg}
      unverändert übernehmen - die werden zur Laufzeit ersetzt.
   3. Im Editor (gartenplaner.html) im <select id="langSelect"> eine
      <option> ergänzen.
   4. In I18N_AVAILABLE weiter unten den Code ergänzen.
   Fertig – der Rest (Umschalten, Speichern der Wahl) funktioniert automatisch.
*/

// ==========================================================
// Start-Sprache
// ==========================================================
// Diese Sprache wird beim allerersten Öffnen verwendet (bzw. immer dann,
// wenn im Browser noch keine eigene Sprachwahl gespeichert ist).
// Muss einer der Codes aus I18N_AVAILABLE weiter unten sein: 'de', 'en',
// 'ru', 'es', 'fr', 'ja', 'ko', 'zh_CN'.
// Hat der Nutzer die Sprache schon einmal über das Dropdown gewechselt,
// hat diese gespeicherte Wahl weiterhin Vorrang vor dieser Einstellung.
const APPLICATION_STARTUP_LANGUAGE_CODE = "de";

const I18N = {

  // ============================================================
  // DEUTSCH
  // ============================================================
  de: {
    title_full: "Julia's Gartenplaner",
    title_short: "Gartenplaner",
    slogan: "Pflanzendatenbank und Gartenraster",

    bed_width_label: "Gartenbreite",
    bed_height_label: "Gartenlänge",

    tooltip_save: "Speichern",
    tooltip_load: "Laden",
    tooltip_export_png: "Als PNG exportieren",
    tooltip_undo: "Rückgängig (Strg+Z)",
    tooltip_redo: "Wiederherstellen (Strg+Y)",
    tooltip_toggle_grid: "Rasterlinien ein-/ausblenden",
    tooltip_canvas_bg: "Hintergrund des Rasters",
    tooltip_db_editor: "Pflanzendatenbank bearbeiten",
    tooltip_header_collapse: "Kopfzeile einklappen",
    tooltip_header_expand: "Kopfzeile ausklappen",
    tooltip_sidebar_hide: "Seitenleiste ausblenden",
    tooltip_sidebar_show: "Seitenleiste einblenden",
    tooltip_search_clear: "Suche leeren",
    tooltip_fill_area: "Fläche mit {name} füllen",
    tooltip_lang_select: "Sprache wählen",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} Stück",

    search_placeholder: "Suchen …",

    group_plants: "🌿 Pflanzen",
    group_materials: "🧱 Baumaterial",

    empty_no_matches: "Keine Treffer.",
    empty_detail_hint: "Klick auf einen Eintrag links für Details, oder zieh ihn in den Garten →",
    selection_empty: "Nichts ausgewählt — ziehe etwas aus der Liste in den Garten.",
    selection_empty_full: "Nichts ausgewählt — ziehe etwas aus der Liste in den Garten, oder klick ▦ für eine Flächenfüllung. (Shift-Klick fügt mehrere Objekte zur Auswahl hinzu, Strg/Shift + Rechteck-Ziehen wählt mehrere auf einmal aus)",
    selection_fill_hint: "Fläche für {visual} {name} aufziehen — im Garten mit gedrückter Maustaste ein Rechteck aufziehen.",
    selection_fill_esc: "Esc zum Beenden.",
    btn_finish: "Beenden",
    selection_one_selected: "{name} ausgewählt ({x}, {y}) cm",
    btn_remove: "Entfernen",
    selection_many_selected: "{count} Objekte ausgewählt",
    btn_remove_all: "Alle entfernen",

    detail_size: "Größe",
    detail_use: "Verwendung",
    detail_sow_depth: "Saattiefe",
    detail_row_spacing: "Reihenabstand",
    detail_plant_spacing: "Pflanzabstand",
    detail_pot_size: "Topfgröße",
    detail_location: "Standort / Boden",
    detail_height: "Wuchshöhe",
    detail_bloom: "Aussaat / Blüte",
    detail_germination: "Keimung",
    detail_germ_rate: "Keimfähigkeit",
    detail_culture_duration: "Kulturdauer",
    detail_lifespan: "Lebensdauer",
    detail_origin: "Herkunft",
    detail_note: "Notiz",

    tooltip_add_note: "Notiz hinzufügen",
    note_style_bg_label: "Hintergrund",
    note_style_color_label: "Text",
    note_style_font_label: "Schriftgröße",
    note_placeholder: "Notiz …",
    note_single: "Notiz",

    footer_scale: "Maßstab: 1 Kachel im Garten = 100 cm. Reihen-/Pflanzabstände aus der Gemüse-Tabelle",
    footer_credits_tooltip: "Diese Anwendung wurde im Auftrag zu 100% von Anthropic's Claude.ai, in einem kostenlosen Konto erstellt. Ganz erstaunlich! 🧚🏻‍♀️",
    footer_credits_link: "Credits",

    alert_png_export_failed: "PNG-Export leider fehlgeschlagen. Magst du es nochmal versuchen?",
    alert_export_resolution_note: "Hinweis: Bei dieser Gartengröße ({w}×{h} cm) wurde die Export-Auflösung automatisch auf {px} px/cm reduziert (statt der üblichen 4 px/cm), damit der Export nicht an Browser-Grenzen scheitert.",
    alert_load_failed: "Konnte Datei nicht laden: {msg}",

    fill_locked_toggle: "Als Ebene fixieren (nicht klickbar)",
    tooltip_send_back: "Ganz nach hinten",
    tooltip_move_backward: "Eine Ebene zurück",
    tooltip_move_forward: "Eine Ebene vor",
    tooltip_bring_front: "Ganz nach vorne",
    tooltip_lock: "Sperren",
    tooltip_unlock: "Entsperren",
    ctx_bring_front: "Ganz nach vorne",
    ctx_move_forward: "Eine Ebene vor",
    ctx_move_backward: "Eine Ebene zurück",
    ctx_send_back: "Ganz nach hinten",
    ctx_lock: "Sperren",
    ctx_unlock: "Entsperren",
    ctx_reset_transform: "Ausrichtung/Größe zurücksetzen",

    tooltip_bg_image: "Hintergrundbild",
    bg_image_choose: "Bild wählen …",
    bg_image_remove: "Bild entfernen",
    bg_image_hide: "Bild ausblenden",
    bg_image_show: "Bild einblenden",
    alert_bg_image_failed: "Bild konnte nicht geladen werden."
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    title_full: "Julia's Garden Planner",
    title_short: "Garden Planner",
    slogan: "Plant database and garden grid",

    bed_width_label: "Garden width",
    bed_height_label: "Garden length",

    tooltip_save: "Save",
    tooltip_load: "Load",
    tooltip_export_png: "Export as PNG",
    tooltip_undo: "Undo (Ctrl+Z)",
    tooltip_redo: "Redo (Ctrl+Y)",
    tooltip_toggle_grid: "Show/hide grid lines",
    tooltip_canvas_bg: "Grid background color",
    tooltip_db_editor: "Edit plant database",
    tooltip_header_collapse: "Collapse header",
    tooltip_header_expand: "Expand header",
    tooltip_sidebar_hide: "Hide sidebar",
    tooltip_sidebar_show: "Show sidebar",
    tooltip_search_clear: "Clear search",
    tooltip_fill_area: "Fill area with {name}",
    tooltip_lang_select: "Choose language",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} pcs",

    search_placeholder: "Search …",

    group_plants: "🌿 Plants",
    group_materials: "🧱 Materials",

    empty_no_matches: "No matches.",
    empty_detail_hint: "Click an entry on the left for details, or drag it into the garden →",
    selection_empty: "Nothing selected — drag something from the list into the garden.",
    selection_empty_full: "Nothing selected — drag something from the list into the garden, or click ▦ to fill an area. (Shift-click adds multiple objects to the selection, Ctrl/Shift + drag-rectangle selects several at once)",
    selection_fill_hint: "Drag out an area for {visual} {name} — hold down the mouse button in the garden and drag a rectangle.",
    selection_fill_esc: "Press Esc to cancel.",
    btn_finish: "Finish",
    selection_one_selected: "{name} selected ({x}, {y}) cm",
    btn_remove: "Remove",
    selection_many_selected: "{count} objects selected",
    btn_remove_all: "Remove all",

    detail_size: "Size",
    detail_use: "Use",
    detail_sow_depth: "Sowing depth",
    detail_row_spacing: "Row spacing",
    detail_plant_spacing: "Plant spacing",
    detail_pot_size: "Pot size",
    detail_location: "Location / soil",
    detail_height: "Growth height",
    detail_bloom: "Sowing / bloom",
    detail_germination: "Germination",
    detail_germ_rate: "Germination rate",
    detail_culture_duration: "Growing duration",
    detail_lifespan: "Lifespan",
    detail_origin: "Origin",
    detail_note: "Note",

    tooltip_add_note: "Add note",
    note_style_bg_label: "Background",
    note_style_color_label: "Text",
    note_style_font_label: "Font size",
    note_placeholder: "Note …",
    note_single: "Note",

    footer_scale: "Scale: 1 tile in the garden = 100 cm. Row/plant spacing from the vegetable table",
    footer_credits_tooltip: "This application was created entirely by Anthropic's Claude.ai, on a free account. Pretty amazing! 🧚🏻‍♀️",
    footer_credits_link: "Credits",

    alert_png_export_failed: "PNG export unfortunately failed. Would you like to try again?",
    alert_export_resolution_note: "Note: For this garden size ({w}×{h} cm), the export resolution was automatically reduced to {px} px/cm (instead of the usual 4 px/cm) so the export doesn't hit browser limits.",
    alert_load_failed: "Could not load file: {msg}",

    fill_locked_toggle: "Fix as layer (not clickable)",
    tooltip_send_back: "Send to back",
    tooltip_move_backward: "Move one layer back",
    tooltip_move_forward: "Move one layer forward",
    tooltip_bring_front: "Bring to front",
    tooltip_lock: "Lock",
    tooltip_unlock: "Unlock",
    ctx_bring_front: "Bring to front",
    ctx_move_forward: "Move one layer forward",
    ctx_move_backward: "Move one layer back",
    ctx_send_back: "Send to back",
    ctx_lock: "Lock",
    ctx_unlock: "Unlock",
    ctx_reset_transform: "Reset rotation/size",

    tooltip_bg_image: "Background image",
    bg_image_choose: "Choose image …",
    bg_image_remove: "Remove image",
    bg_image_hide: "Hide image",
    bg_image_show: "Show image",
    alert_bg_image_failed: "Could not load image."
  },

  // ============================================================
  // РУССКИЙ
  // ============================================================
  ru: {
    title_full: "Планировщик сада Юлии",
    title_short: "Планировщик сада",
    slogan: "База растений и сетка сада",

    bed_width_label: "Ширина сада",
    bed_height_label: "Длина сада",

    tooltip_save: "Сохранить",
    tooltip_load: "Загрузить",
    tooltip_export_png: "Экспорт в PNG",
    tooltip_undo: "Отменить (Ctrl+Z)",
    tooltip_redo: "Повторить (Ctrl+Y)",
    tooltip_toggle_grid: "Показать/скрыть линии сетки",
    tooltip_canvas_bg: "Цвет фона сетки",
    tooltip_db_editor: "Редактировать базу растений",
    tooltip_header_collapse: "Свернуть шапку",
    tooltip_header_expand: "Развернуть шапку",
    tooltip_sidebar_hide: "Скрыть боковую панель",
    tooltip_sidebar_show: "Показать боковую панель",
    tooltip_search_clear: "Очистить поиск",
    tooltip_fill_area: "Заполнить область: {name}",
    tooltip_lang_select: "Выбрать язык",
    measure_label: "{w} × {h} см  —  {cols} × {rows} шт.",

    search_placeholder: "Поиск …",

    group_plants: "🌿 Растения",
    group_materials: "🧱 Материалы",

    empty_no_matches: "Совпадений нет.",
    empty_detail_hint: "Нажмите на запись слева для подробностей или перетащите её в сад →",
    selection_empty: "Ничего не выбрано — перетащите что-нибудь из списка в сад.",
    selection_empty_full: "Ничего не выбрано — перетащите что-нибудь из списка в сад или нажмите ▦ для заливки области. (Shift+клик добавляет несколько объектов в выбор, Ctrl/Shift + выделение рамкой выбирает сразу несколько)",
    selection_fill_hint: "Растяните область для {visual} {name} — зажмите кнопку мыши в саду и потяните прямоугольник.",
    selection_fill_esc: "Esc для отмены.",
    btn_finish: "Готово",
    selection_one_selected: "{name} выбрано ({x}, {y}) см",
    btn_remove: "Удалить",
    selection_many_selected: "Выбрано объектов: {count}",
    btn_remove_all: "Удалить всё",

    detail_size: "Размер",
    detail_use: "Использование",
    detail_sow_depth: "Глубина посева",
    detail_row_spacing: "Расстояние между рядами",
    detail_plant_spacing: "Расстояние между растениями",
    detail_pot_size: "Размер горшка",
    detail_location: "Место / почва",
    detail_height: "Высота роста",
    detail_bloom: "Посев / цветение",
    detail_germination: "Прорастание",
    detail_germ_rate: "Всхожесть",
    detail_culture_duration: "Срок выращивания",
    detail_lifespan: "Продолжительность жизни",
    detail_origin: "Происхождение",
    detail_note: "Заметка",

    tooltip_add_note: "Добавить заметку",
    note_style_bg_label: "Фон",
    note_style_color_label: "Текст",
    note_style_font_label: "Размер шрифта",
    note_placeholder: "Заметка …",
    note_single: "Заметка",

    footer_scale: "Масштаб: 1 клетка сада = 100 см. Расстояния между рядами/растениями — из таблицы овощей",
    footer_credits_tooltip: "Это приложение было полностью создано Claude.ai от Anthropic на бесплатном аккаунте. Удивительно! 🧚🏻‍♀️",
    footer_credits_link: "Авторы",

    alert_png_export_failed: "К сожалению, экспорт в PNG не удался. Попробовать ещё раз?",
    alert_export_resolution_note: "Примечание: при таком размере сада ({w}×{h} см) разрешение экспорта было автоматически снижено до {px} px/см (вместо обычных 4 px/см), чтобы не превысить ограничения браузера.",
    alert_load_failed: "Не удалось загрузить файл: {msg}",

    fill_locked_toggle: "Закрепить как слой (не кликабельно)",
    tooltip_send_back: "На задний план",
    tooltip_move_backward: "На уровень назад",
    tooltip_move_forward: "На уровень вперёд",
    tooltip_bring_front: "На передний план",
    tooltip_lock: "Заблокировать",
    tooltip_unlock: "Разблокировать",
    ctx_bring_front: "На передний план",
    ctx_move_forward: "На уровень вперёд",
    ctx_move_backward: "На уровень назад",
    ctx_send_back: "На задний план",
    ctx_lock: "Заблокировать",
    ctx_unlock: "Разблокировать",
    ctx_reset_transform: "Сбросить поворот/размер",

    tooltip_bg_image: "Фоновое изображение",
    bg_image_choose: "Выбрать изображение …",
    bg_image_remove: "Удалить изображение",
    bg_image_hide: "Скрыть изображение",
    bg_image_show: "Показать изображение",
    alert_bg_image_failed: "Не удалось загрузить изображение."
  },

  // ============================================================
  // ESPAÑOL
  // ============================================================
  es: {
    title_full: "Planificador de jardín de Julia",
    title_short: "Planificador de jardín",
    slogan: "Base de datos de plantas y cuadrícula del jardín",

    bed_width_label: "Ancho del jardín",
    bed_height_label: "Largo del jardín",

    tooltip_save: "Guardar",
    tooltip_load: "Cargar",
    tooltip_export_png: "Exportar como PNG",
    tooltip_undo: "Deshacer (Ctrl+Z)",
    tooltip_redo: "Rehacer (Ctrl+Y)",
    tooltip_toggle_grid: "Mostrar/ocultar líneas de la cuadrícula",
    tooltip_canvas_bg: "Color de fondo de la cuadrícula",
    tooltip_db_editor: "Editar base de datos de plantas",
    tooltip_header_collapse: "Contraer cabecera",
    tooltip_header_expand: "Expandir cabecera",
    tooltip_sidebar_hide: "Ocultar barra lateral",
    tooltip_sidebar_show: "Mostrar barra lateral",
    tooltip_search_clear: "Borrar búsqueda",
    tooltip_fill_area: "Rellenar área con {name}",
    tooltip_lang_select: "Elegir idioma",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} uds.",

    search_placeholder: "Buscar …",

    group_plants: "🌿 Plantas",
    group_materials: "🧱 Materiales",

    empty_no_matches: "Sin resultados.",
    empty_detail_hint: "Haz clic en una entrada a la izquierda para ver detalles, o arrástrala al jardín →",
    selection_empty: "Nada seleccionado — arrastra algo de la lista al jardín.",
    selection_empty_full: "Nada seleccionado — arrastra algo de la lista al jardín, o haz clic en ▦ para rellenar un área. (Shift+clic añade varios objetos a la selección, Ctrl/Shift + arrastrar un rectángulo selecciona varios a la vez)",
    selection_fill_hint: "Arrastra para definir un área para {visual} {name} — mantén pulsado el ratón en el jardín y arrastra un rectángulo.",
    selection_fill_esc: "Esc para cancelar.",
    btn_finish: "Terminar",
    selection_one_selected: "{name} seleccionado ({x}, {y}) cm",
    btn_remove: "Eliminar",
    selection_many_selected: "{count} objetos seleccionados",
    btn_remove_all: "Eliminar todos",

    detail_size: "Tamaño",
    detail_use: "Uso",
    detail_sow_depth: "Profundidad de siembra",
    detail_row_spacing: "Espaciado entre hileras",
    detail_plant_spacing: "Espaciado entre plantas",
    detail_pot_size: "Tamaño de maceta",
    detail_location: "Ubicación / suelo",
    detail_height: "Altura de crecimiento",
    detail_bloom: "Siembra / floración",
    detail_germination: "Germinación",
    detail_germ_rate: "Tasa de germinación",
    detail_culture_duration: "Duración del cultivo",
    detail_lifespan: "Vida útil",
    detail_origin: "Origen",
    detail_note: "Nota",

    tooltip_add_note: "Añadir nota",
    note_style_bg_label: "Fondo",
    note_style_color_label: "Texto",
    note_style_font_label: "Tamaño de fuente",
    note_placeholder: "Nota …",
    note_single: "Nota",

    footer_scale: "Escala: 1 casilla del jardín = 100 cm. Espaciado entre hileras/plantas según la tabla de hortalizas",
    footer_credits_tooltip: "Esta aplicación fue creada íntegramente por Claude.ai de Anthropic, en una cuenta gratuita. ¡Sorprendente! 🧚🏻‍♀️",
    footer_credits_link: "Créditos",

    alert_png_export_failed: "La exportación a PNG ha fallado. ¿Quieres intentarlo de nuevo?",
    alert_export_resolution_note: "Aviso: para este tamaño de jardín ({w}×{h} cm), la resolución de exportación se redujo automáticamente a {px} px/cm (en lugar de los habituales 4 px/cm) para que la exportación no supere los límites del navegador.",
    alert_load_failed: "No se pudo cargar el archivo: {msg}",

    fill_locked_toggle: "Fijar como capa (no clicable)",
    tooltip_send_back: "Enviar al fondo",
    tooltip_move_backward: "Bajar un nivel",
    tooltip_move_forward: "Subir un nivel",
    tooltip_bring_front: "Traer al frente",
    tooltip_lock: "Bloquear",
    tooltip_unlock: "Desbloquear",
    ctx_bring_front: "Traer al frente",
    ctx_move_forward: "Subir un nivel",
    ctx_move_backward: "Bajar un nivel",
    ctx_send_back: "Enviar al fondo",
    ctx_lock: "Bloquear",
    ctx_unlock: "Desbloquear",
    ctx_reset_transform: "Restablecer giro/tamaño",

    tooltip_bg_image: "Imagen de fondo",
    bg_image_choose: "Elegir imagen …",
    bg_image_remove: "Quitar imagen",
    bg_image_hide: "Ocultar imagen",
    bg_image_show: "Mostrar imagen",
    alert_bg_image_failed: "No se pudo cargar la imagen."
  },

  // ============================================================
  // FRANÇAIS
  // ============================================================
  fr: {
    title_full: "Planificateur de jardin de Julia",
    title_short: "Planificateur de jardin",
    slogan: "Base de données des plantes et grille du jardin",

    bed_width_label: "Largeur du jardin",
    bed_height_label: "Longueur du jardin",

    tooltip_save: "Enregistrer",
    tooltip_load: "Charger",
    tooltip_export_png: "Exporter en PNG",
    tooltip_undo: "Annuler (Ctrl+Z)",
    tooltip_redo: "Rétablir (Ctrl+Y)",
    tooltip_toggle_grid: "Afficher/masquer les lignes de la grille",
    tooltip_canvas_bg: "Couleur de fond de la grille",
    tooltip_db_editor: "Modifier la base de données des plantes",
    tooltip_header_collapse: "Réduire l'en-tête",
    tooltip_header_expand: "Déplier l'en-tête",
    tooltip_sidebar_hide: "Masquer la barre latérale",
    tooltip_sidebar_show: "Afficher la barre latérale",
    tooltip_search_clear: "Effacer la recherche",
    tooltip_fill_area: "Remplir la zone avec {name}",
    tooltip_lang_select: "Choisir la langue",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} pièces",

    search_placeholder: "Rechercher …",

    group_plants: "🌿 Plantes",
    group_materials: "🧱 Matériaux",

    empty_no_matches: "Aucun résultat.",
    empty_detail_hint: "Cliquez sur une entrée à gauche pour les détails, ou faites-la glisser dans le jardin →",
    selection_empty: "Rien de sélectionné — faites glisser un élément de la liste dans le jardin.",
    selection_empty_full: "Rien de sélectionné — faites glisser un élément de la liste dans le jardin, ou cliquez sur ▦ pour remplir une zone. (Maj+clic ajoute plusieurs objets à la sélection, Ctrl/Maj + glisser un rectangle en sélectionne plusieurs à la fois)",
    selection_fill_hint: "Tracez une zone pour {visual} {name} — maintenez le bouton de la souris enfoncé dans le jardin et tracez un rectangle.",
    selection_fill_esc: "Échap pour annuler.",
    btn_finish: "Terminer",
    selection_one_selected: "{name} sélectionné ({x}, {y}) cm",
    btn_remove: "Supprimer",
    selection_many_selected: "{count} objets sélectionnés",
    btn_remove_all: "Tout supprimer",

    detail_size: "Taille",
    detail_use: "Utilisation",
    detail_sow_depth: "Profondeur de semis",
    detail_row_spacing: "Espacement des rangs",
    detail_plant_spacing: "Espacement entre plants",
    detail_pot_size: "Taille du pot",
    detail_location: "Emplacement / sol",
    detail_height: "Hauteur de croissance",
    detail_bloom: "Semis / floraison",
    detail_germination: "Germination",
    detail_germ_rate: "Taux de germination",
    detail_culture_duration: "Durée de culture",
    detail_lifespan: "Durée de vie",
    detail_origin: "Origine",
    detail_note: "Remarque",

    tooltip_add_note: "Ajouter une note",
    note_style_bg_label: "Fond",
    note_style_color_label: "Texte",
    note_style_font_label: "Taille de police",
    note_placeholder: "Note …",
    note_single: "Note",

    footer_scale: "Échelle : 1 case du jardin = 100 cm. Espacements des rangs/plants d'après le tableau des légumes",
    footer_credits_tooltip: "Cette application a été entièrement créée par Claude.ai d'Anthropic, sur un compte gratuit. Assez incroyable ! 🧚🏻‍♀️",
    footer_credits_link: "Crédits",

    alert_png_export_failed: "Malheureusement, l'export PNG a échoué. Voulez-vous réessayer ?",
    alert_export_resolution_note: "Remarque : pour cette taille de jardin ({w}×{h} cm), la résolution d'export a été automatiquement réduite à {px} px/cm (au lieu des 4 px/cm habituels) afin que l'export ne dépasse pas les limites du navigateur.",
    alert_load_failed: "Impossible de charger le fichier : {msg}",

    fill_locked_toggle: "Fixer comme calque (non cliquable)",
    tooltip_send_back: "Envoyer à l'arrière-plan",
    tooltip_move_backward: "Reculer d'un niveau",
    tooltip_move_forward: "Avancer d'un niveau",
    tooltip_bring_front: "Amener au premier plan",
    tooltip_lock: "Verrouiller",
    tooltip_unlock: "Déverrouiller",
    ctx_bring_front: "Amener au premier plan",
    ctx_move_forward: "Avancer d'un niveau",
    ctx_move_backward: "Reculer d'un niveau",
    ctx_send_back: "Envoyer à l'arrière-plan",
    ctx_lock: "Verrouiller",
    ctx_unlock: "Déverrouiller",
    ctx_reset_transform: "Réinitialiser rotation/taille",

    tooltip_bg_image: "Image de fond",
    bg_image_choose: "Choisir une image …",
    bg_image_remove: "Retirer l'image",
    bg_image_hide: "Masquer l'image",
    bg_image_show: "Afficher l'image",
    alert_bg_image_failed: "Impossible de charger l'image."
  },

  // ============================================================
  // 日本語
  // ============================================================
  ja: {
    title_full: "Juliaのガーデンプランナー",
    title_short: "ガーデンプランナー",
    slogan: "植物データベースとガーデングリッド",

    bed_width_label: "庭の幅",
    bed_height_label: "庭の奥行き",

    tooltip_save: "保存",
    tooltip_load: "読み込み",
    tooltip_export_png: "PNGとしてエクスポート",
    tooltip_undo: "元に戻す (Ctrl+Z)",
    tooltip_redo: "やり直し (Ctrl+Y)",
    tooltip_toggle_grid: "グリッド線の表示/非表示",
    tooltip_canvas_bg: "グリッドの背景色",
    tooltip_db_editor: "植物データベースを編集",
    tooltip_header_collapse: "ヘッダーを折りたたむ",
    tooltip_header_expand: "ヘッダーを展開する",
    tooltip_sidebar_hide: "サイドバーを隠す",
    tooltip_sidebar_show: "サイドバーを表示",
    tooltip_search_clear: "検索をクリア",
    tooltip_fill_area: "{name}でエリアを塗りつぶす",
    tooltip_lang_select: "言語を選択",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} 個",

    search_placeholder: "検索 …",

    group_plants: "🌿 植物",
    group_materials: "🧱 資材",

    empty_no_matches: "一致するものがありません。",
    empty_detail_hint: "左のエントリをクリックすると詳細が表示されます。またはガーデンにドラッグしてください →",
    selection_empty: "何も選択されていません — リストから何かをガーデンにドラッグしてください。",
    selection_empty_full: "何も選択されていません — リストから何かをガーデンにドラッグするか、▦をクリックしてエリアを塗りつぶしてください。（Shiftクリックで複数選択に追加、Ctrl/Shift + ドラッグで矩形選択により複数選択）",
    selection_fill_hint: "{visual} {name} のエリアをドラッグして指定 — ガーデン内でマウスボタンを押したまま矩形をドラッグします。",
    selection_fill_esc: "Escで中止。",
    btn_finish: "終了",
    selection_one_selected: "{name} を選択中（{x}, {y}）cm",
    btn_remove: "削除",
    selection_many_selected: "{count} 個のオブジェクトを選択中",
    btn_remove_all: "すべて削除",

    detail_size: "サイズ",
    detail_use: "用途",
    detail_sow_depth: "播種深さ",
    detail_row_spacing: "条間",
    detail_plant_spacing: "株間",
    detail_pot_size: "鉢のサイズ",
    detail_location: "場所 / 土壌",
    detail_height: "草丈",
    detail_bloom: "播種 / 開花",
    detail_germination: "発芽",
    detail_germ_rate: "発芽率",
    detail_culture_duration: "栽培期間",
    detail_lifespan: "寿命",
    detail_origin: "原産地",
    detail_note: "メモ",

    tooltip_add_note: "メモを追加",
    note_style_bg_label: "背景",
    note_style_color_label: "文字",
    note_style_font_label: "文字サイズ",
    note_placeholder: "メモ…",
    note_single: "メモ",

    footer_scale: "縮尺：庭の1マス = 100cm。条間・株間は野菜表に基づく",
    footer_credits_tooltip: "このアプリケーションはAnthropicのClaude.aiによって、無料アカウントで100%作成されました。すごいですね！🧚🏻‍♀️",
    footer_credits_link: "クレジット",

    alert_png_export_failed: "残念ながらPNGのエクスポートに失敗しました。もう一度試しますか？",
    alert_export_resolution_note: "注意：この庭のサイズ（{w}×{h} cm）では、ブラウザの制限に達しないよう、エクスポート解像度が通常の4px/cmから{px}px/cmに自動的に下げられました。",
    alert_load_failed: "ファイルを読み込めませんでした：{msg}",

    fill_locked_toggle: "レイヤーとして固定（クリック不可）",
    tooltip_send_back: "最背面へ",
    tooltip_move_backward: "ひとつ後ろへ",
    tooltip_move_forward: "ひとつ前へ",
    tooltip_bring_front: "最前面へ",
    tooltip_lock: "ロック",
    tooltip_unlock: "ロック解除",
    ctx_bring_front: "最前面へ",
    ctx_move_forward: "ひとつ前へ",
    ctx_move_backward: "ひとつ後ろへ",
    ctx_send_back: "最背面へ",
    ctx_lock: "ロック",
    ctx_unlock: "ロック解除",
    ctx_reset_transform: "回転/サイズをリセット",

    tooltip_bg_image: "背景画像",
    bg_image_choose: "画像を選択…",
    bg_image_remove: "画像を削除",
    bg_image_hide: "画像を非表示",
    bg_image_show: "画像を表示",
    alert_bg_image_failed: "画像を読み込めませんでした。"
  },

  // ============================================================
  // 한국어
  // ============================================================
  ko: {
    title_full: "율리아의 정원 플래너",
    title_short: "정원 플래너",
    slogan: "식물 데이터베이스와 정원 그리드",

    bed_width_label: "정원 너비",
    bed_height_label: "정원 길이",

    tooltip_save: "저장",
    tooltip_load: "불러오기",
    tooltip_export_png: "PNG로 내보내기",
    tooltip_undo: "실행 취소 (Ctrl+Z)",
    tooltip_redo: "다시 실행 (Ctrl+Y)",
    tooltip_toggle_grid: "격자선 표시/숨김",
    tooltip_canvas_bg: "격자 배경색",
    tooltip_db_editor: "식물 데이터베이스 편집",
    tooltip_header_collapse: "헤더 접기",
    tooltip_header_expand: "헤더 펼치기",
    tooltip_sidebar_hide: "사이드바 숨기기",
    tooltip_sidebar_show: "사이드바 표시",
    tooltip_search_clear: "검색어 지우기",
    tooltip_fill_area: "{name}(으)로 영역 채우기",
    tooltip_lang_select: "언어 선택",
    measure_label: "{w} × {h} cm  —  {cols} × {rows} 개",

    search_placeholder: "검색 …",

    group_plants: "🌿 식물",
    group_materials: "🧱 자재",

    empty_no_matches: "일치하는 항목이 없습니다.",
    empty_detail_hint: "왼쪽 항목을 클릭하면 세부정보가 표시됩니다. 또는 정원으로 드래그하세요 →",
    selection_empty: "선택된 항목이 없습니다 — 목록에서 정원으로 드래그하세요.",
    selection_empty_full: "선택된 항목이 없습니다 — 목록에서 정원으로 드래그하거나 ▦를 클릭해 영역을 채우세요. (Shift+클릭으로 여러 개 선택에 추가, Ctrl/Shift + 사각형 드래그로 한 번에 여러 개 선택)",
    selection_fill_hint: "{visual} {name}을(를) 채울 영역을 드래그하세요 — 정원에서 마우스 버튼을 누른 채 사각형을 드래그합니다.",
    selection_fill_esc: "Esc로 취소.",
    btn_finish: "완료",
    selection_one_selected: "{name} 선택됨 ({x}, {y}) cm",
    btn_remove: "제거",
    selection_many_selected: "{count}개 객체 선택됨",
    btn_remove_all: "모두 제거",

    detail_size: "크기",
    detail_use: "용도",
    detail_sow_depth: "파종 깊이",
    detail_row_spacing: "줄 간격",
    detail_plant_spacing: "포기 간격",
    detail_pot_size: "화분 크기",
    detail_location: "위치 / 토양",
    detail_height: "생장 높이",
    detail_bloom: "파종 / 개화",
    detail_germination: "발아",
    detail_germ_rate: "발아율",
    detail_culture_duration: "재배 기간",
    detail_lifespan: "수명",
    detail_origin: "원산지",
    detail_note: "메모",

    tooltip_add_note: "메모 추가",
    note_style_bg_label: "배경",
    note_style_color_label: "글자",
    note_style_font_label: "글자 크기",
    note_placeholder: "메모 …",
    note_single: "메모",

    footer_credits_tooltip: "이 애플리케이션은 Anthropic의 Claude.ai가 무료 계정으로 100% 제작했습니다. 정말 놀랍네요! 🧚🏻‍♀️",
    footer_credits_link: "크레딧",

    alert_png_export_failed: "안타깝게도 PNG 내보내기에 실패했습니다. 다시 시도하시겠습니까?",
    alert_export_resolution_note: "안내: 이 정원 크기({w}×{h} cm)에서는 브라우저 한계에 부딪히지 않도록 내보내기 해상도가 기본 4px/cm 대신 {px}px/cm로 자동 축소되었습니다.",
    alert_load_failed: "파일을 불러올 수 없습니다: {msg}",

    fill_locked_toggle: "레이어로 고정 (클릭 불가)",
    tooltip_send_back: "맨 뒤로 보내기",
    tooltip_move_backward: "한 단계 뒤로",
    tooltip_move_forward: "한 단계 앞으로",
    tooltip_bring_front: "맨 앞으로 가져오기",
    tooltip_lock: "잠그기",
    tooltip_unlock: "잠금 해제",
    ctx_bring_front: "맨 앞으로 가져오기",
    ctx_move_forward: "한 단계 앞으로",
    ctx_move_backward: "한 단계 뒤로",
    ctx_send_back: "맨 뒤로 보내기",
    ctx_lock: "잠그기",
    ctx_unlock: "잠금 해제",
    ctx_reset_transform: "회전/크기 재설정",

    tooltip_bg_image: "배경 이미지",
    bg_image_choose: "이미지 선택…",
    bg_image_remove: "이미지 제거",
    bg_image_hide: "이미지 숨기기",
    bg_image_show: "이미지 표시",
    alert_bg_image_failed: "이미지를 불러올 수 없습니다."
  },

  // ============================================================
  // 简体中文
  // ============================================================
  zh_CN: {
    title_full: "Julia 的花园规划器",
    title_short: "花园规划器",
    slogan: "植物数据库与花园网格",

    bed_width_label: "花园宽度",
    bed_height_label: "花园长度",

    tooltip_save: "保存",
    tooltip_load: "加载",
    tooltip_export_png: "导出为 PNG",
    tooltip_undo: "撤销 (Ctrl+Z)",
    tooltip_redo: "重做 (Ctrl+Y)",
    tooltip_toggle_grid: "显示/隐藏网格线",
    tooltip_canvas_bg: "网格背景颜色",
    tooltip_db_editor: "编辑植物数据库",
    tooltip_header_collapse: "折叠标题栏",
    tooltip_header_expand: "展开标题栏",
    tooltip_sidebar_hide: "隐藏侧边栏",
    tooltip_sidebar_show: "显示侧边栏",
    tooltip_search_clear: "清除搜索",
    tooltip_fill_area: "用{name}填充区域",
    tooltip_lang_select: "选择语言",
    measure_label: "{w} × {h} 厘米  —  {cols} × {rows} 个",

    search_placeholder: "搜索 …",

    group_plants: "🌿 植物",
    group_materials: "🧱 材料",

    empty_no_matches: "没有匹配项。",
    empty_detail_hint: "点击左侧条目查看详情，或将其拖入花园 →",
    selection_empty: "未选择任何内容 — 将列表中的内容拖入花园。",
    selection_empty_full: "未选择任何内容 — 将列表中的内容拖入花园，或点击 ▦ 填充区域。（Shift+点击可添加多个对象到选择中，Ctrl/Shift + 拖动矩形可一次选择多个）",
    selection_fill_hint: "为 {visual} {name} 拖出一个区域 — 在花园中按住鼠标按键并拖动出一个矩形。",
    selection_fill_esc: "按 Esc 取消。",
    btn_finish: "完成",
    selection_one_selected: "已选择 {name}（{x}, {y}）厘米",
    btn_remove: "移除",
    selection_many_selected: "已选择 {count} 个对象",
    btn_remove_all: "全部移除",

    detail_size: "尺寸",
    detail_use: "用途",
    detail_sow_depth: "播种深度",
    detail_row_spacing: "行距",
    detail_plant_spacing: "株距",
    detail_pot_size: "花盆尺寸",
    detail_location: "位置 / 土壤",
    detail_height: "株高",
    detail_bloom: "播种 / 花期",
    detail_germination: "发芽",
    detail_germ_rate: "发芽率",
    detail_culture_duration: "栽培周期",
    detail_lifespan: "寿命",
    detail_origin: "产地",
    detail_note: "备注",

    tooltip_add_note: "添加便签",
    note_style_bg_label: "背景",
    note_style_color_label: "文字",
    note_style_font_label: "字号",
    note_placeholder: "便签…",
    note_single: "便签",

    footer_credits_tooltip: "此应用完全由 Anthropic 的 Claude.ai 在免费账户中创建。相当惊人！🧚🏻‍♀️",
    footer_credits_link: "制作信息",

    alert_png_export_failed: "很遗憾，PNG 导出失败了。要再试一次吗？",
    alert_export_resolution_note: "提示：由于此花园尺寸（{w}×{h} 厘米），导出分辨率已自动从通常的 4 px/cm 降低为 {px} px/cm，以避免超出浏览器限制。",
    alert_load_failed: "无法加载文件：{msg}",

    fill_locked_toggle: "固定为图层（不可点击）",
    tooltip_send_back: "置于底层",
    tooltip_move_backward: "下移一层",
    tooltip_move_forward: "上移一层",
    tooltip_bring_front: "置于顶层",
    tooltip_lock: "锁定",
    tooltip_unlock: "解锁",
    ctx_bring_front: "置于顶层",
    ctx_move_forward: "上移一层",
    ctx_move_backward: "下移一层",
    ctx_send_back: "置于底层",
    ctx_lock: "锁定",
    ctx_unlock: "解锁",
    ctx_reset_transform: "重置旋转/大小",

    tooltip_bg_image: "背景图片",
    bg_image_choose: "选择图片…",
    bg_image_remove: "移除图片",
    bg_image_hide: "隐藏图片",
    bg_image_show: "显示图片",
    alert_bg_image_failed: "无法加载图片。"
  }

};

// ==========================================================
// Sprachen, die aktuell in der Auswahl auftauchen (siehe select#langSelect).
// Sobald weitere Sprachen oben ergänzt sind, hier + im <select> freischalten.
// ==========================================================
const I18N_AVAILABLE = ['de', 'en', 'ru', 'es', 'fr', 'ja', 'ko', 'zh_CN'];
