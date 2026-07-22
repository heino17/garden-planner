/*
   Julias's Gartenplaner- Pflanzen-Datenbank-Editor
   Copyright (C) 2026 heino17
   https://github.com/heino17/garden-planner

   Sprachdatei für datenbank_bearbeiten.html (Pflanzen-Datenbank-Editor).

   Eigenständige Datei, gleiches Prinzip wie gartenplaner_lang.js: reines JS
   (kein .json + fetch), damit es auch unter file:// per <script src> ohne
   CORS-Probleme geladen werden kann.

   Wichtig: Dies ist eine EIGENE Sprachdatei, keine Wiederverwendung von
   gartenplaner_lang.js! Beide Tools haben unterschiedliche UI-Texte, auch
   wenn sich ein paar Begriffe überschneiden (z.B. Feldnamen wie "Verwendung"
   oder "Saattiefe" - die stehen hier bewusst nochmal eigenständig drin,
   damit die beiden Tools unabhängig voneinander gepflegt werden können).

   Neue Sprache hinzufügen:
   1. Neuen Eintrag nach dem Vorbild von "de" anlegen (alle Keys kopieren).
   2. Alle Werte übersetzen. Platzhalter wie {name}, {count}, {msg} etc.
      unverändert übernehmen - die werden zur Laufzeit ersetzt.
   3. Im Editor (datenbank_bearbeiten.html) im <select id="langSelect">
      eine <option> ergänzen.
   4. In I18N_AVAILABLE weiter unten den Code ergänzen.
   Fertig - der Rest (Umschalten, Speichern der Wahl) funktioniert automatisch.
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
    title_full: "🌱 Julia's Pflanzen-Datenbank",
    title_short: "🌱 Pflanzen-Datenbank",
    sub_title: "Editor für pflanzen.js – Pflanzen & Baumaterial für den Gartenplaner",

    tooltip_lang_select: "Sprache wählen",
    tooltip_header_toggle: "Header ein-/ausklappen",
    tooltip_theme_toggle: "Hell/Dunkel umschalten",

    btn_load_other_db: "📂 Andere Datenbank laden",
    btn_new_plant: "➕ Neue Pflanze",
    btn_new_material: "➕ Neues Material",
    btn_export_db: "💾 Datenbank speichern",
    btn_export_db_dirty: "💾 Datenbank speichern (ungespeicherte Änderungen!)",
    btn_export_csv: "📊 Als CSV exportieren",

    heading_overview: "Übersicht",
    status_initial: "Noch keine Datei geladen. Lade zuerst deine pflanzen.js.",
    search_placeholder: "Suchen (Name, id, Nutzung, Notiz ...)",
    tooltip_search_clear: "Suche leeren",

    group_plants: "🌿 Pflanzen",
    group_materials: "🧱 Baumaterial",
    table_head_icon: "Icon",
    table_head_name: "Name",
    table_head_id: "id",
    empty_no_matches: "Keine Treffer",
    row_no_name: "(ohne Namen)",

    form_title_default: "Eintrag bearbeiten",
    form_title_new_plant: "Neue Pflanze anlegen",
    form_title_new_material: "Neues Material anlegen",
    form_title_edit_plant: "Pflanze bearbeiten",
    form_title_edit_material: "Material bearbeiten",
    form_empty_state: "Wähle links einen Eintrag aus der Liste, oder lege über die Buttons oben einen neuen an.",

    btn_save: "💾 Speichern",
    btn_cancel: "Abbrechen",
    btn_delete: "🗑️ Löschen",
    btn_duplicate: "📄 Duplizieren",
    tooltip_emoji_picker: "Emoji auswählen",

    img_preview_hint_empty: "Kein Bild hinterlegt – Icon wird im Gartenplaner verwendet.",
    img_preview_hint_loading: "Lade Vorschau...",
    img_preview_hint_error: "⚠️ Bild unter diesem Pfad nicht gefunden (Vorschau nur möglich, wenn die Datei relativ zu dieser HTML-Datei liegt).",

    dup_id_warning: "⚠️ Diese id gibt es schon bei „{kind}“ – bitte anders benennen.",
    kind_plant_label: "Pflanzen",
    kind_material_label: "Material",

    filename_line: "📄 Geladene Datei: {name}",
    filename_line_warning: "📄 Geladene Datei: {name} ⚠️ Achtung: das ist nicht die pflanzen.js!",

    status_autoload_success: "Automatisch geladen aus pflanzen.js: {plantCount} Pflanzen, {materialCount} Material-Einträge.",
    status_autoload_failed: "Automatisches Laden fehlgeschlagen: {msg}",
    status_no_autoload: "Keine pflanzen.js im gleichen Ordner gefunden. Bitte über den Button laden.",
    status_load_success: "Geladen: {plantCount} Pflanzen, {materialCount} Material-Einträge.",
    status_load_failed: "Fehler beim Einlesen: {msg}",
    status_saved_entry: "Gespeichert: „{name}“.",
    status_deleted_entry: "Gelöscht: „{name}“.",
    status_duplicated_entry: "Dupliziert: „{name}“ – bitte Angaben prüfen und speichern.",
    status_export_js_done: "{name} wurde heruntergeladen.",
    status_export_csv_done: "CSV-Export wurde heruntergeladen.",

    alert_id_empty: "Die id darf nicht leer sein.",
    alert_id_duplicate: "Diese id ist schon vergeben. Bitte eine andere wählen.",
    confirm_delete_entry: "„{name}“ wirklich löschen?",
    alert_duplicate_ids_on_export: "Achtung: doppelte ids gefunden ({ids}). Bitte erst beheben, bevor du exportierst.",

    footer_credits_tooltip: "Diese Anwendung wurde im Auftrag zu 100% von Anthropic's Claude.ai, in einem kostenlosen Konto erstellt. Ganz erstaunlich! 🧚🏻‍♀️",
    footer_credits_link: "Credits",

    // Feld-Labels & Tooltips (gemeinsam für Pflanzen & Material, sofern vorhanden)
    field_id_label: "id (eindeutig, technisch)",
    field_name_label: "Name",
    field_icon_label: "Icon (Emoji)",
    field_image_plant_label: "Bild (Pfad, z.B. images/basilikum.png)",
    field_image_material_label: "Bild (Pfad, z.B. images/pflasterstein.png)",
    field_image_tooltip: "Die Gartenplaner-Funktion `Als PNG exportieren` wird diese Bilder nur in den Export einbeziehen, wenn der Gartenplaner per http/https aufgerufen wird! Weitere Einschränkungen sind nicht zu erwarten.",
    field_accent_label: "Farbe",
    field_listAccent_label: "Listenfarbe (optional)",
    field_listAccent_placeholder: "leer = wie Farbe",
    field_listAccent_tooltip: "Nur für die Pflanzen-/Materialliste in der Seitenleiste. Praktisch, wenn 'Farbe' auf 'transparent' steht (z.B. bei Bildern), die Liste aber trotzdem eine farbige Markierung zeigen soll. Leer lassen, um die normale Farbe zu übernehmen.",
    field_plantSpacing_label: "Pflanzabstand (cm)",
    field_rowSpacing_label: "Reihenabstand (cm)",
    field_latin_label: "Botanischer Name",
    field_use_label: "Nutzung",
    field_sowDepth_label: "Saattiefe",
    field_standort_label: "Standort",
    field_hoehe_label: "Höhe",
    field_aussaat_label: "Aussaat / Kultur-Zeitraum",
    field_keimung_label: "Keimung",
    field_keimfaehigkeit_label: "Keimfähigkeit",
    field_lebensdauer_label: "Lebensdauer",
    field_herkunft_label: "Herkunft",
    field_topfgroesse_label: "Topfgröße",
    field_kulturdauer_label: "Kulturdauer",
    field_notiz_label: "Notiz",

    field_shape_label: "Form",
    field_shape_opt_rect: "Eckig (Rechteck)",
    field_shape_opt_circle: "Rund (Kreis)",
    field_widthCm_label: "Breite (cm)",
    field_widthCm_tooltip: "Bei runder Form: wird als Durchmesser verwendet, falls `Durchmesser` leer bleibt.",
    field_heightCm_label: "Höhe (cm)",
    field_heightCm_tooltip: "Wird bei runder Form ignoriert (Kreis nutzt nur die Breite bzw. den Durchmesser).",
    field_diameterCm_label: "Durchmesser (cm, nur bei runder Form)",
    field_diameterCm_tooltip: "Optional. Nur relevant bei Form \"Rund\". Wenn leer, wird die Breite als Durchmesser verwendet.",
    field_pattern_label: "Musterung",
    field_pattern_opt_none: "Kein Muster (einfarbig)",
    field_pattern_opt_pave: "Pflasterstein-Muster",
    field_pattern_opt_brick: "Mauerziegel-Muster",
    field_pattern_opt_grass: "Rasen-Muster"
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    title_full: "🌱 Julia's Plant Database",
    title_short: "🌱 Plant Database",
    sub_title: "Editor for pflanzen.js – plants & materials for the garden planner",

    tooltip_lang_select: "Choose language",
    tooltip_header_toggle: "Collapse/expand header",
    tooltip_theme_toggle: "Toggle light/dark mode",

    btn_load_other_db: "📂 Load different database",
    btn_new_plant: "➕ New plant",
    btn_new_material: "➕ New material",
    btn_export_db: "💾 Save database",
    btn_export_db_dirty: "💾 Save database (unsaved changes!)",
    btn_export_csv: "📊 Export as CSV",

    heading_overview: "Overview",
    status_initial: "No file loaded yet. Load your pflanzen.js first.",
    search_placeholder: "Search (name, id, use, note ...)",
    tooltip_search_clear: "Clear search",

    group_plants: "🌿 Plants",
    group_materials: "🧱 Materials",
    table_head_icon: "Icon",
    table_head_name: "Name",
    table_head_id: "id",
    empty_no_matches: "No matches",
    row_no_name: "(unnamed)",

    form_title_default: "Edit entry",
    form_title_new_plant: "Create new plant",
    form_title_new_material: "Create new material",
    form_title_edit_plant: "Edit plant",
    form_title_edit_material: "Edit material",
    form_empty_state: "Select an entry from the list on the left, or create a new one using the buttons above.",

    btn_save: "💾 Save",
    btn_cancel: "Cancel",
    btn_delete: "🗑️ Delete",
    btn_duplicate: "📄 Duplicate",
    tooltip_emoji_picker: "Choose emoji",

    img_preview_hint_empty: "No image set – icon will be used in the garden planner.",
    img_preview_hint_loading: "Loading preview...",
    img_preview_hint_error: "⚠️ Image not found at this path (preview only works if the file is located relative to this HTML file).",

    dup_id_warning: "⚠️ This id already exists under \"{kind}\" – please choose a different one.",
    kind_plant_label: "Plants",
    kind_material_label: "Materials",

    filename_line: "📄 Loaded file: {name}",
    filename_line_warning: "📄 Loaded file: {name} ⚠️ Note: this is not pflanzen.js!",

    status_autoload_success: "Automatically loaded from pflanzen.js: {plantCount} plants, {materialCount} material entries.",
    status_autoload_failed: "Automatic loading failed: {msg}",
    status_no_autoload: "No pflanzen.js found in the same folder. Please load one using the button.",
    status_load_success: "Loaded: {plantCount} plants, {materialCount} material entries.",
    status_load_failed: "Error while reading file: {msg}",
    status_saved_entry: "Saved: \"{name}\".",
    status_deleted_entry: "Deleted: \"{name}\".",
    status_duplicated_entry: "Duplicated: \"{name}\" – please review and save.",
    status_export_js_done: "{name} has been downloaded.",
    status_export_csv_done: "CSV export has been downloaded.",

    alert_id_empty: "The id must not be empty.",
    alert_id_duplicate: "This id is already taken. Please choose a different one.",
    confirm_delete_entry: "Really delete \"{name}\"?",
    alert_duplicate_ids_on_export: "Warning: duplicate ids found ({ids}). Please fix this before exporting.",

    footer_credits_tooltip: "This application was created entirely by Anthropic's Claude.ai, on a free account. Pretty amazing! 🧚🏻‍♀️",
    footer_credits_link: "Credits",

    field_id_label: "id (unique, technical)",
    field_name_label: "Name",
    field_icon_label: "Icon (emoji)",
    field_image_plant_label: "Image (path, e.g. images/basil.png)",
    field_image_material_label: "Image (path, e.g. images/paving-stone.png)",
    field_image_tooltip: "The garden planner's 'Export as PNG' feature will only include these images in the export if the garden planner is accessed via http/https! No further restrictions are expected.",
    field_accent_label: "Color",
    field_listAccent_label: "List color (optional)",
    field_listAccent_placeholder: "empty = same as Color",
    field_listAccent_tooltip: "Only affects the plant/material list in the sidebar. Useful when 'Color' is set to 'transparent' (e.g. for image-based items) but the list should still show a colored marker. Leave empty to use the regular color.",
    field_plantSpacing_label: "Plant spacing (cm)",
    field_rowSpacing_label: "Row spacing (cm)",
    field_latin_label: "Botanical name",
    field_use_label: "Use",
    field_sowDepth_label: "Sowing depth",
    field_standort_label: "Location",
    field_hoehe_label: "Height",
    field_aussaat_label: "Sowing / growing period",
    field_keimung_label: "Germination",
    field_keimfaehigkeit_label: "Germination rate",
    field_lebensdauer_label: "Lifespan",
    field_herkunft_label: "Origin",
    field_topfgroesse_label: "Pot size",
    field_kulturdauer_label: "Growing duration",
    field_notiz_label: "Note",

    field_shape_label: "Shape",
    field_shape_opt_rect: "Angular (rectangle)",
    field_shape_opt_circle: "Round (circle)",
    field_widthCm_label: "Width (cm)",
    field_widthCm_tooltip: "For round shapes: used as diameter if 'Diameter' is left empty.",
    field_heightCm_label: "Height (cm)",
    field_heightCm_tooltip: "Ignored for round shapes (circle only uses width/diameter).",
    field_diameterCm_label: "Diameter (cm, round shapes only)",
    field_diameterCm_tooltip: "Optional. Only relevant for shape \"Round\". If empty, the width is used as diameter.",
    field_pattern_label: "Pattern",
    field_pattern_opt_none: "No pattern (solid color)",
    field_pattern_opt_pave: "Paving stone pattern",
    field_pattern_opt_brick: "Brick wall pattern",
    field_pattern_opt_grass: "Grass pattern"
  },

  // ============================================================
  // РУССКИЙ
  // ============================================================
  ru: {
    title_full: "🌱 Julia’s База данных растений",
    title_short: "🌱 База данных растений",
    sub_title: "Редактор pflanzen.js – растения и материалы для планировщика сада",

    tooltip_lang_select: "Выбрать язык",
    tooltip_header_toggle: "Свернуть/развернуть шапку",
    tooltip_theme_toggle: "Переключить светлую/тёмную тему",

    btn_load_other_db: "📂 Загрузить другую базу",
    btn_new_plant: "➕ Новое растение",
    btn_new_material: "➕ Новый материал",
    btn_export_db: "💾 Сохранить базу",
    btn_export_db_dirty: "💾 Сохранить базу (несохранённые изменения!)",
    btn_export_csv: "📊 Экспорт в CSV",

    heading_overview: "Обзор",
    status_initial: "Файл ещё не загружен. Сначала загрузите вашу pflanzen.js.",
    search_placeholder: "Поиск (название, id, применение, заметка ...)",
    tooltip_search_clear: "Очистить поиск",

    group_plants: "🌿 Растения",
    group_materials: "🧱 Стройматериалы",
    table_head_icon: "Значок",
    table_head_name: "Название",
    table_head_id: "id",
    empty_no_matches: "Нет совпадений",
    row_no_name: "(без названия)",

    form_title_default: "Редактировать запись",
    form_title_new_plant: "Добавить новое растение",
    form_title_new_material: "Добавить новый материал",
    form_title_edit_plant: "Редактировать растение",
    form_title_edit_material: "Редактировать материал",
    form_empty_state: "Выберите запись слева из списка или создайте новую с помощью кнопок выше.",

    btn_save: "💾 Сохранить",
    btn_cancel: "Отмена",
    btn_delete: "🗑️ Удалить",
    btn_duplicate: "📄 Дублировать",
    tooltip_emoji_picker: "Выбрать emoji",

    img_preview_hint_empty: "Изображение не задано – в планировщике сада будет использован значок.",
    img_preview_hint_loading: "Загрузка предпросмотра...",
    img_preview_hint_error: "⚠️ Изображение по этому пути не найдено (предпросмотр работает только если файл находится рядом с этим HTML-файлом).",

    dup_id_warning: "⚠️ Такой id уже есть среди «{kind}» – выберите другое имя.",
    kind_plant_label: "растений",
    kind_material_label: "материалов",

    filename_line: "📄 Загруженный файл: {name}",
    filename_line_warning: "📄 Загруженный файл: {name} ⚠️ Внимание: это не pflanzen.js!",

    status_autoload_success: "Автоматически загружено из pflanzen.js: {plantCount} растений, {materialCount} материалов.",
    status_autoload_failed: "Автозагрузка не удалась: {msg}",
    status_no_autoload: "В этой же папке не найден файл pflanzen.js. Загрузите его через кнопку.",
    status_load_success: "Загружено: {plantCount} растений, {materialCount} материалов.",
    status_load_failed: "Ошибка при чтении файла: {msg}",
    status_saved_entry: "Сохранено: «{name}».",
    status_deleted_entry: "Удалено: «{name}».",
    status_duplicated_entry: "Продублировано: «{name}» – проверьте данные и сохраните.",
    status_export_js_done: "Файл {name} был скачан.",
    status_export_csv_done: "CSV-экспорт был скачан.",

    alert_id_empty: "Поле id не может быть пустым.",
    alert_id_duplicate: "Этот id уже занят. Пожалуйста, выберите другой.",
    confirm_delete_entry: "Действительно удалить «{name}»?",
    alert_duplicate_ids_on_export: "Внимание: найдены повторяющиеся id ({ids}). Пожалуйста, исправьте перед экспортом.",

    footer_credits_tooltip: "Это приложение полностью создано Claude.ai от Anthropic на бесплатном аккаунте. Потрясающе! 🧚🏻‍♀️",
    footer_credits_link: "Авторы",

    field_id_label: "id (уникальный, технический)",
    field_name_label: "Название",
    field_icon_label: "Значок (emoji)",
    field_image_plant_label: "Изображение (путь, напр. images/basilikum.png)",
    field_image_material_label: "Изображение (путь, напр. images/pflasterstein.png)",
    field_image_tooltip: "Функция планировщика сада «Экспорт в PNG» включит эти изображения в экспорт только если планировщик открыт по http/https! Других ограничений не ожидается.",
    field_accent_label: "Цвет",
    field_listAccent_label: "Цвет в списке (необязательно)",
    field_listAccent_placeholder: "пусто = как Цвет",
    field_listAccent_tooltip: "Влияет только на список растений/материалов на боковой панели. Полезно, если «Цвет» установлен как «transparent» (например, для объектов с изображением), но в списке всё же нужна цветная метка. Оставьте пустым, чтобы использовать обычный цвет.",
    field_plantSpacing_label: "Расстояние между растениями (см)",
    field_rowSpacing_label: "Междурядье (см)",
    field_latin_label: "Латинское название",
    field_use_label: "Применение",
    field_sowDepth_label: "Глубина посева",
    field_standort_label: "Место посадки",
    field_hoehe_label: "Высота",
    field_aussaat_label: "Посев / период выращивания",
    field_keimung_label: "Прорастание",
    field_keimfaehigkeit_label: "Всхожесть",
    field_lebensdauer_label: "Продолжительность жизни",
    field_herkunft_label: "Происхождение",
    field_topfgroesse_label: "Размер горшка",
    field_kulturdauer_label: "Период выращивания",
    field_notiz_label: "Заметка",

    field_shape_label: "Форма",
    field_shape_opt_rect: "Угловатая (прямоугольник)",
    field_shape_opt_circle: "Круглая",
    field_widthCm_label: "Ширина (см)",
    field_widthCm_tooltip: "Для круглой формы: используется как диаметр, если поле «Диаметр» пустое.",
    field_heightCm_label: "Высота (см)",
    field_heightCm_tooltip: "Игнорируется для круглой формы (круг использует только ширину/диаметр).",
    field_diameterCm_label: "Диаметр (см, только для круглой формы)",
    field_diameterCm_tooltip: "Необязательно. Актуально только при форме «Круглая». Если пусто, в качестве диаметра используется ширина.",
    field_pattern_label: "Узор",
    field_pattern_opt_none: "Без узора (однотонный)",
    field_pattern_opt_pave: "Узор брусчатки",
    field_pattern_opt_brick: "Узор кирпичной кладки",
    field_pattern_opt_grass: "Узор газона"
  },

  // ============================================================
  // ESPAÑOL
  // ============================================================
  es: {
    title_full: "🌱 Julia’s Base de Datos de Plantas",
    title_short: "🌱 Base de Datos de Plantas",
    sub_title: "Editor de pflanzen.js – plantas y materiales para el planificador de jardín",

    tooltip_lang_select: "Elegir idioma",
    tooltip_header_toggle: "Contraer/expandir cabecera",
    tooltip_theme_toggle: "Cambiar modo claro/oscuro",

    btn_load_other_db: "📂 Cargar otra base de datos",
    btn_new_plant: "➕ Nueva planta",
    btn_new_material: "➕ Nuevo material",
    btn_export_db: "💾 Guardar base de datos",
    btn_export_db_dirty: "💾 Guardar base de datos (¡cambios sin guardar!)",
    btn_export_csv: "📊 Exportar como CSV",

    heading_overview: "Resumen",
    status_initial: "Aún no se ha cargado ningún archivo. Carga primero tu pflanzen.js.",
    search_placeholder: "Buscar (nombre, id, uso, nota ...)",
    tooltip_search_clear: "Borrar búsqueda",

    group_plants: "🌿 Plantas",
    group_materials: "🧱 Materiales",
    table_head_icon: "Icono",
    table_head_name: "Nombre",
    table_head_id: "id",
    empty_no_matches: "Sin resultados",
    row_no_name: "(sin nombre)",

    form_title_default: "Editar entrada",
    form_title_new_plant: "Crear nueva planta",
    form_title_new_material: "Crear nuevo material",
    form_title_edit_plant: "Editar planta",
    form_title_edit_material: "Editar material",
    form_empty_state: "Selecciona una entrada de la lista de la izquierda, o crea una nueva con los botones de arriba.",

    btn_save: "💾 Guardar",
    btn_cancel: "Cancelar",
    btn_delete: "🗑️ Eliminar",
    btn_duplicate: "📄 Duplicar",
    tooltip_emoji_picker: "Elegir emoji",

    img_preview_hint_empty: "Sin imagen asignada – se usará el icono en el planificador de jardín.",
    img_preview_hint_loading: "Cargando vista previa...",
    img_preview_hint_error: "⚠️ No se encontró la imagen en esta ruta (la vista previa solo funciona si el archivo está junto a este archivo HTML).",

    dup_id_warning: "⚠️ Este id ya existe en «{kind}» – por favor elige otro nombre.",
    kind_plant_label: "plantas",
    kind_material_label: "materiales",

    filename_line: "📄 Archivo cargado: {name}",
    filename_line_warning: "📄 Archivo cargado: {name} ⚠️ Atención: ¡este no es pflanzen.js!",

    status_autoload_success: "Cargado automáticamente desde pflanzen.js: {plantCount} plantas, {materialCount} materiales.",
    status_autoload_failed: "La carga automática falló: {msg}",
    status_no_autoload: "No se encontró pflanzen.js en la misma carpeta. Cárgalo con el botón.",
    status_load_success: "Cargado: {plantCount} plantas, {materialCount} materiales.",
    status_load_failed: "Error al leer el archivo: {msg}",
    status_saved_entry: "Guardado: «{name}».",
    status_deleted_entry: "Eliminado: «{name}».",
    status_duplicated_entry: "Duplicado: «{name}» – revisa los datos y guarda.",
    status_export_js_done: "Se ha descargado {name}.",
    status_export_csv_done: "Se ha descargado la exportación CSV.",

    alert_id_empty: "El id no puede estar vacío.",
    alert_id_duplicate: "Este id ya está en uso. Por favor elige otro.",
    confirm_delete_entry: "¿Eliminar realmente «{name}»?",
    alert_duplicate_ids_on_export: "Atención: se encontraron ids duplicados ({ids}). Corrígelo antes de exportar.",

    footer_credits_tooltip: "Esta aplicación fue creada íntegramente por Claude.ai de Anthropic, en una cuenta gratuita. ¡Sorprendente! 🧚🏻‍♀️",
    footer_credits_link: "Créditos",

    field_id_label: "id (único, técnico)",
    field_name_label: "Nombre",
    field_icon_label: "Icono (emoji)",
    field_image_plant_label: "Imagen (ruta, p.ej. images/albahaca.png)",
    field_image_material_label: "Imagen (ruta, p.ej. images/adoquin.png)",
    field_image_tooltip: "La función «Exportar como PNG» del planificador de jardín solo incluirá estas imágenes en la exportación si se accede al planificador vía http/https. No se esperan más restricciones.",
    field_accent_label: "Color",
    field_listAccent_label: "Color en la lista (opcional)",
    field_listAccent_placeholder: "vacío = igual que Color",
    field_listAccent_tooltip: "Solo afecta a la lista de plantas/materiales en la barra lateral. Útil cuando «Color» está en «transparent» (p.ej. para elementos con imagen) pero la lista debe mostrar igualmente una marca de color. Déjalo vacío para usar el color normal.",
    field_plantSpacing_label: "Espaciado entre plantas (cm)",
    field_rowSpacing_label: "Espaciado entre hileras (cm)",
    field_latin_label: "Nombre botánico",
    field_use_label: "Uso",
    field_sowDepth_label: "Profundidad de siembra",
    field_standort_label: "Ubicación",
    field_hoehe_label: "Altura",
    field_aussaat_label: "Siembra / periodo de cultivo",
    field_keimung_label: "Germinación",
    field_keimfaehigkeit_label: "Tasa de germinación",
    field_lebensdauer_label: "Vida útil",
    field_herkunft_label: "Origen",
    field_topfgroesse_label: "Tamaño de maceta",
    field_kulturdauer_label: "Duración del cultivo",
    field_notiz_label: "Nota",

    field_shape_label: "Forma",
    field_shape_opt_rect: "Angular (rectángulo)",
    field_shape_opt_circle: "Redonda (círculo)",
    field_widthCm_label: "Ancho (cm)",
    field_widthCm_tooltip: "Para forma redonda: se usa como diámetro si «Diámetro» queda vacío.",
    field_heightCm_label: "Alto (cm)",
    field_heightCm_tooltip: "Se ignora en forma redonda (el círculo solo usa ancho/diámetro).",
    field_diameterCm_label: "Diámetro (cm, solo forma redonda)",
    field_diameterCm_tooltip: "Opcional. Solo relevante con forma «Redonda». Si está vacío, se usa el ancho como diámetro.",
    field_pattern_label: "Textura",
    field_pattern_opt_none: "Sin textura (color liso)",
    field_pattern_opt_pave: "Textura de adoquín",
    field_pattern_opt_brick: "Textura de ladrillo",
    field_pattern_opt_grass: "Textura de césped"
  },

  // ============================================================
  // FRANÇAIS
  // ============================================================
  fr: {
    title_full: "🌱 Julia’s Base de Données des Plantes",
    title_short: "🌱 Base de Données des Plantes",
    sub_title: "Éditeur de pflanzen.js – plantes et matériaux pour le planificateur de jardin",

    tooltip_lang_select: "Choisir la langue",
    tooltip_header_toggle: "Réduire/déplier l'en-tête",
    tooltip_theme_toggle: "Basculer mode clair/sombre",

    btn_load_other_db: "📂 Charger une autre base",
    btn_new_plant: "➕ Nouvelle plante",
    btn_new_material: "➕ Nouveau matériau",
    btn_export_db: "💾 Enregistrer la base",
    btn_export_db_dirty: "💾 Enregistrer la base (modifications non enregistrées !)",
    btn_export_csv: "📊 Exporter en CSV",

    heading_overview: "Aperçu",
    status_initial: "Aucun fichier chargé pour l'instant. Charge d'abord ton pflanzen.js.",
    search_placeholder: "Rechercher (nom, id, usage, note ...)",
    tooltip_search_clear: "Effacer la recherche",

    group_plants: "🌿 Plantes",
    group_materials: "🧱 Matériaux",
    table_head_icon: "Icône",
    table_head_name: "Nom",
    table_head_id: "id",
    empty_no_matches: "Aucun résultat",
    row_no_name: "(sans nom)",

    form_title_default: "Modifier l'entrée",
    form_title_new_plant: "Créer une nouvelle plante",
    form_title_new_material: "Créer un nouveau matériau",
    form_title_edit_plant: "Modifier la plante",
    form_title_edit_material: "Modifier le matériau",
    form_empty_state: "Sélectionne une entrée dans la liste à gauche, ou crée-en une nouvelle avec les boutons ci-dessus.",

    btn_save: "💾 Enregistrer",
    btn_cancel: "Annuler",
    btn_delete: "🗑️ Supprimer",
    btn_duplicate: "📄 Dupliquer",
    tooltip_emoji_picker: "Choisir un emoji",

    img_preview_hint_empty: "Aucune image définie – l'icône sera utilisée dans le planificateur de jardin.",
    img_preview_hint_loading: "Chargement de l'aperçu...",
    img_preview_hint_error: "⚠️ Image introuvable à ce chemin (l'aperçu ne fonctionne que si le fichier se trouve à côté de ce fichier HTML).",

    dup_id_warning: "⚠️ Cet id existe déjà pour « {kind} » – merci d'en choisir un autre.",
    kind_plant_label: "plantes",
    kind_material_label: "matériaux",

    filename_line: "📄 Fichier chargé : {name}",
    filename_line_warning: "📄 Fichier chargé : {name} ⚠️ Attention : ce n'est pas pflanzen.js !",

    status_autoload_success: "Chargé automatiquement depuis pflanzen.js : {plantCount} plantes, {materialCount} matériaux.",
    status_autoload_failed: "Le chargement automatique a échoué : {msg}",
    status_no_autoload: "Aucun pflanzen.js trouvé dans le même dossier. Merci de le charger via le bouton.",
    status_load_success: "Chargé : {plantCount} plantes, {materialCount} matériaux.",
    status_load_failed: "Erreur lors de la lecture du fichier : {msg}",
    status_saved_entry: "Enregistré : « {name} ».",
    status_deleted_entry: "Supprimé : « {name} ».",
    status_duplicated_entry: "Dupliqué : « {name} » – merci de vérifier les données et d'enregistrer.",
    status_export_js_done: "{name} a été téléchargé.",
    status_export_csv_done: "L'export CSV a été téléchargé.",

    alert_id_empty: "L'id ne doit pas être vide.",
    alert_id_duplicate: "Cet id est déjà utilisé. Merci d'en choisir un autre.",
    confirm_delete_entry: "Vraiment supprimer « {name} » ?",
    alert_duplicate_ids_on_export: "Attention : des ids en double ont été trouvés ({ids}). Merci de corriger avant d'exporter.",

    footer_credits_tooltip: "Cette application a été entièrement créée par Claude.ai d'Anthropic, sur un compte gratuit. Assez incroyable ! 🧚🏻‍♀️",
    footer_credits_link: "Crédits",

    field_id_label: "id (unique, technique)",
    field_name_label: "Nom",
    field_icon_label: "Icône (emoji)",
    field_image_plant_label: "Image (chemin, p. ex. images/basilic.png)",
    field_image_material_label: "Image (chemin, p. ex. images/pave.png)",
    field_image_tooltip: "La fonction « Exporter en PNG » du planificateur de jardin n'inclura ces images dans l'export que si le planificateur est ouvert via http/https ! Aucune autre restriction n'est attendue.",
    field_accent_label: "Couleur",
    field_listAccent_label: "Couleur de la liste (optionnel)",
    field_listAccent_placeholder: "vide = comme Couleur",
    field_listAccent_tooltip: "N'affecte que la liste des plantes/matériaux dans la barre latérale. Utile lorsque « Couleur » est réglée sur « transparent » (p. ex. pour les éléments avec image) mais que la liste doit tout de même afficher un repère coloré. Laisser vide pour utiliser la couleur normale.",
    field_plantSpacing_label: "Espacement entre plantes (cm)",
    field_rowSpacing_label: "Espacement entre rangs (cm)",
    field_latin_label: "Nom botanique",
    field_use_label: "Usage",
    field_sowDepth_label: "Profondeur de semis",
    field_standort_label: "Emplacement",
    field_hoehe_label: "Hauteur",
    field_aussaat_label: "Semis / période de culture",
    field_keimung_label: "Germination",
    field_keimfaehigkeit_label: "Taux de germination",
    field_lebensdauer_label: "Durée de vie",
    field_herkunft_label: "Origine",
    field_topfgroesse_label: "Taille du pot",
    field_kulturdauer_label: "Durée de culture",
    field_notiz_label: "Note",

    field_shape_label: "Forme",
    field_shape_opt_rect: "Angulaire (rectangle)",
    field_shape_opt_circle: "Ronde (cercle)",
    field_widthCm_label: "Largeur (cm)",
    field_widthCm_tooltip: "Pour une forme ronde : utilisé comme diamètre si « Diamètre » reste vide.",
    field_heightCm_label: "Hauteur (cm)",
    field_heightCm_tooltip: "Ignoré pour une forme ronde (le cercle n'utilise que la largeur/le diamètre).",
    field_diameterCm_label: "Diamètre (cm, forme ronde uniquement)",
    field_diameterCm_tooltip: "Optionnel. Pertinent uniquement pour la forme « Ronde ». Si vide, la largeur est utilisée comme diamètre.",
    field_pattern_label: "Motif",
    field_pattern_opt_none: "Sans motif (couleur unie)",
    field_pattern_opt_pave: "Motif pavés",
    field_pattern_opt_brick: "Motif briques",
    field_pattern_opt_grass: "Motif gazon"
  },

  // ============================================================
  // 日本語
  // ============================================================
  ja: {
    title_full: "🌱 Julia’s 植物データベース",
    title_short: "🌱 植物データベース",
    sub_title: "pflanzen.js エディター – ガーデンプランナー用の植物と資材",

    tooltip_lang_select: "言語を選択",
    tooltip_header_toggle: "ヘッダーの折りたたみ/展開",
    tooltip_theme_toggle: "ライト/ダークモード切替",

    btn_load_other_db: "📂 別のデータベースを読み込む",
    btn_new_plant: "➕ 新しい植物",
    btn_new_material: "➕ 新しい資材",
    btn_export_db: "💾 データベースを保存",
    btn_export_db_dirty: "💾 データベースを保存（未保存の変更あり！）",
    btn_export_csv: "📊 CSVとしてエクスポート",

    heading_overview: "概要",
    status_initial: "まだファイルが読み込まれていません。先に pflanzen.js を読み込んでください。",
    search_placeholder: "検索（名前、id、用途、メモ ...）",
    tooltip_search_clear: "検索をクリア",

    group_plants: "🌿 植物",
    group_materials: "🧱 資材",
    table_head_icon: "アイコン",
    table_head_name: "名前",
    table_head_id: "id",
    empty_no_matches: "一致なし",
    row_no_name: "（名称なし）",

    form_title_default: "エントリを編集",
    form_title_new_plant: "新しい植物を作成",
    form_title_new_material: "新しい資材を作成",
    form_title_edit_plant: "植物を編集",
    form_title_edit_material: "資材を編集",
    form_empty_state: "左のリストからエントリを選択するか、上のボタンで新規作成してください。",

    btn_save: "💾 保存",
    btn_cancel: "キャンセル",
    btn_delete: "🗑️ 削除",
    btn_duplicate: "📄 複製",
    tooltip_emoji_picker: "絵文字を選択",

    img_preview_hint_empty: "画像が設定されていません – ガーデンプランナーではアイコンが使用されます。",
    img_preview_hint_loading: "プレビューを読み込み中...",
    img_preview_hint_error: "⚠️ このパスに画像が見つかりません（プレビューはこのHTMLファイルからの相対パスの場合のみ機能します）。",

    dup_id_warning: "⚠️ このidは「{kind}」に既に存在します。別の名前を付けてください。",
    kind_plant_label: "植物",
    kind_material_label: "資材",

    filename_line: "📄 読み込んだファイル：{name}",
    filename_line_warning: "📄 読み込んだファイル：{name} ⚠️ 注意：これは pflanzen.js ではありません！",

    status_autoload_success: "pflanzen.js から自動読み込みしました：植物 {plantCount} 件、資材 {materialCount} 件。",
    status_autoload_failed: "自動読み込みに失敗しました：{msg}",
    status_no_autoload: "同じフォルダに pflanzen.js が見つかりません。ボタンから読み込んでください。",
    status_load_success: "読み込みました：植物 {plantCount} 件、資材 {materialCount} 件。",
    status_load_failed: "ファイルの読み込み中にエラーが発生しました：{msg}",
    status_saved_entry: "保存しました：「{name}」。",
    status_deleted_entry: "削除しました：「{name}」。",
    status_duplicated_entry: "複製しました：「{name}」。内容を確認して保存してください。",
    status_export_js_done: "{name} をダウンロードしました。",
    status_export_csv_done: "CSVエクスポートをダウンロードしました。",

    alert_id_empty: "idを空にすることはできません。",
    alert_id_duplicate: "このidは既に使用されています。別のものを選んでください。",
    confirm_delete_entry: "「{name}」を本当に削除しますか？",
    alert_duplicate_ids_on_export: "注意：重複したidが見つかりました（{ids}）。エクスポート前に修正してください。",

    footer_credits_tooltip: "このアプリケーションは Anthropic の Claude.ai によって、無料アカウントで100%作成されました。すごいですね！🧚🏻‍♀️",
    footer_credits_link: "クレジット",

    field_id_label: "id（一意・技術用）",
    field_name_label: "名前",
    field_icon_label: "アイコン（絵文字）",
    field_image_plant_label: "画像（パス、例：images/basilikum.png）",
    field_image_material_label: "画像（パス、例：images/pflasterstein.png）",
    field_image_tooltip: "ガーデンプランナーの「PNGとしてエクスポート」機能は、ガーデンプランナーが http/https 経由でアクセスされている場合にのみ、これらの画像をエクスポートに含めます！それ以外の制限は想定されていません。",
    field_accent_label: "色",
    field_listAccent_label: "リスト表示色（任意）",
    field_listAccent_placeholder: "空欄＝「色」と同じ",
    field_listAccent_tooltip: "サイドバーの植物/資材リストのみに影響します。「色」が「transparent」に設定されている場合（画像を使う項目など）でも、リストには色付きの印を表示したいときに便利です。空欄のままにすると通常の色が使われます。",
    field_plantSpacing_label: "株間（cm）",
    field_rowSpacing_label: "畝間（cm）",
    field_latin_label: "学名",
    field_use_label: "用途",
    field_sowDepth_label: "播種深さ",
    field_standort_label: "植え付け場所",
    field_hoehe_label: "高さ",
    field_aussaat_label: "播種／栽培期間",
    field_keimung_label: "発芽",
    field_keimfaehigkeit_label: "発芽率",
    field_lebensdauer_label: "寿命",
    field_herkunft_label: "原産地",
    field_topfgroesse_label: "鉢のサイズ",
    field_kulturdauer_label: "栽培期間",
    field_notiz_label: "メモ",

    field_shape_label: "形状",
    field_shape_opt_rect: "角形（長方形）",
    field_shape_opt_circle: "丸形（円）",
    field_widthCm_label: "幅（cm）",
    field_widthCm_tooltip: "丸形の場合：「直径」が空欄のとき、直径として使用されます。",
    field_heightCm_label: "高さ（cm）",
    field_heightCm_tooltip: "丸形の場合は無視されます（円は幅／直径のみを使用）。",
    field_diameterCm_label: "直径（cm、丸形のみ）",
    field_diameterCm_tooltip: "任意項目。形状が「丸形」の場合のみ有効です。空欄の場合は幅が直径として使用されます。",
    field_pattern_label: "模様",
    field_pattern_opt_none: "模様なし（単色）",
    field_pattern_opt_pave: "敷石模様",
    field_pattern_opt_brick: "レンガ模様",
    field_pattern_opt_grass: "芝生模様"
  },

  // ============================================================
  // 한국어
  // ============================================================
  ko: {
    title_full: "🌱 Julia’s 식물 데이터베이스",
    title_short: "🌱 식물 데이터베이스",
    sub_title: "pflanzen.js 편집기 – 정원 계획기용 식물 및 자재",

    tooltip_lang_select: "언어 선택",
    tooltip_header_toggle: "헤더 접기/펼치기",
    tooltip_theme_toggle: "라이트/다크 모드 전환",

    btn_load_other_db: "📂 다른 데이터베이스 불러오기",
    btn_new_plant: "➕ 새 식물",
    btn_new_material: "➕ 새 자재",
    btn_export_db: "💾 데이터베이스 저장",
    btn_export_db_dirty: "💾 데이터베이스 저장 (저장되지 않은 변경사항!)",
    btn_export_csv: "📊 CSV로 내보내기",

    heading_overview: "개요",
    status_initial: "아직 파일이 로드되지 않았습니다. 먼저 pflanzen.js를 불러오세요.",
    search_placeholder: "검색 (이름, id, 용도, 메모 ...)",
    tooltip_search_clear: "검색 지우기",

    group_plants: "🌿 식물",
    group_materials: "🧱 자재",
    table_head_icon: "아이콘",
    table_head_name: "이름",
    table_head_id: "id",
    empty_no_matches: "일치하는 항목 없음",
    row_no_name: "(이름 없음)",

    form_title_default: "항목 편집",
    form_title_new_plant: "새 식물 만들기",
    form_title_new_material: "새 자재 만들기",
    form_title_edit_plant: "식물 편집",
    form_title_edit_material: "자재 편집",
    form_empty_state: "왼쪽 목록에서 항목을 선택하거나 위 버튼으로 새로 만드세요.",

    btn_save: "💾 저장",
    btn_cancel: "취소",
    btn_delete: "🗑️ 삭제",
    btn_duplicate: "📄 복제",
    tooltip_emoji_picker: "이모지 선택",

    img_preview_hint_empty: "이미지가 설정되지 않았습니다 – 정원 계획기에서는 아이콘이 사용됩니다.",
    img_preview_hint_loading: "미리보기 로딩 중...",
    img_preview_hint_error: "⚠️ 이 경로에서 이미지를 찾을 수 없습니다 (미리보기는 파일이 이 HTML 파일 기준 상대 경로에 있을 때만 작동합니다).",

    dup_id_warning: "⚠️ 이 id는 이미 「{kind}」에 존재합니다 – 다른 이름을 선택해 주세요.",
    kind_plant_label: "식물",
    kind_material_label: "자재",

    filename_line: "📄 불러온 파일: {name}",
    filename_line_warning: "📄 불러온 파일: {name} ⚠️ 주의: 이것은 pflanzen.js가 아닙니다!",

    status_autoload_success: "pflanzen.js에서 자동으로 불러왔습니다: 식물 {plantCount}개, 자재 {materialCount}개.",
    status_autoload_failed: "자동 불러오기에 실패했습니다: {msg}",
    status_no_autoload: "같은 폴더에서 pflanzen.js를 찾을 수 없습니다. 버튼을 통해 불러와 주세요.",
    status_load_success: "불러왔습니다: 식물 {plantCount}개, 자재 {materialCount}개.",
    status_load_failed: "파일을 읽는 중 오류 발생: {msg}",
    status_saved_entry: "저장됨: 「{name}」.",
    status_deleted_entry: "삭제됨: 「{name}」.",
    status_duplicated_entry: "복제됨: 「{name}」. 내용을 확인하고 저장해 주세요.",
    status_export_js_done: "{name}가 다운로드되었습니다.",
    status_export_csv_done: "CSV 내보내기가 다운로드되었습니다.",

    alert_id_empty: "id는 비워둘 수 없습니다.",
    alert_id_duplicate: "이 id는 이미 사용 중입니다. 다른 것을 선택해 주세요.",
    confirm_delete_entry: "정말로 「{name}」을(를) 삭제하시겠습니까?",
    alert_duplicate_ids_on_export: "주의: 중복된 id가 발견되었습니다 ({ids}). 내보내기 전에 먼저 수정해 주세요.",

    footer_credits_tooltip: "이 애플리케이션은 Anthropic의 Claude.ai가 무료 계정으로 100% 제작했습니다. 정말 놀랍네요! 🧚🏻‍♀️",
    footer_credits_link: "크레딧",

    field_id_label: "id (고유, 기술용)",
    field_name_label: "이름",
    field_icon_label: "아이콘 (이모지)",
    field_image_plant_label: "이미지 (경로, 예: images/basilikum.png)",
    field_image_material_label: "이미지 (경로, 예: images/pflasterstein.png)",
    field_image_tooltip: "정원 계획기의 'PNG로 내보내기' 기능은 정원 계획기가 http/https로 접속된 경우에만 이 이미지들을 내보내기에 포함합니다! 그 외 다른 제한은 예상되지 않습니다.",
    field_accent_label: "색상",
    field_listAccent_label: "목록 색상 (선택 사항)",
    field_listAccent_placeholder: "비워두면 색상과 동일",
    field_listAccent_tooltip: "사이드바의 식물/자재 목록에만 적용됩니다. '색상'이 'transparent'로 설정된 경우(예: 이미지가 있는 항목) 목록에는 그래도 색상 표시가 필요할 때 유용합니다. 비워두면 일반 색상이 사용됩니다.",
    field_plantSpacing_label: "포기 간격 (cm)",
    field_rowSpacing_label: "줄 간격 (cm)",
    field_latin_label: "학명",
    field_use_label: "용도",
    field_sowDepth_label: "파종 깊이",
    field_standort_label: "위치",
    field_hoehe_label: "높이",
    field_aussaat_label: "파종 / 재배 기간",
    field_keimung_label: "발아",
    field_keimfaehigkeit_label: "발아율",
    field_lebensdauer_label: "수명",
    field_herkunft_label: "원산지",
    field_topfgroesse_label: "화분 크기",
    field_kulturdauer_label: "재배 기간",
    field_notiz_label: "메모",

    field_shape_label: "형태",
    field_shape_opt_rect: "각진 형태 (직사각형)",
    field_shape_opt_circle: "둥근 형태 (원)",
    field_widthCm_label: "너비 (cm)",
    field_widthCm_tooltip: "둥근 형태의 경우: '지름'이 비어 있으면 지름으로 사용됩니다.",
    field_heightCm_label: "높이 (cm)",
    field_heightCm_tooltip: "둥근 형태에서는 무시됩니다 (원은 너비/지름만 사용).",
    field_diameterCm_label: "지름 (cm, 둥근 형태 전용)",
    field_diameterCm_tooltip: "선택 사항. 형태가 '둥근 형태'일 때만 적용됩니다. 비어 있으면 너비가 지름으로 사용됩니다.",
    field_pattern_label: "무늬",
    field_pattern_opt_none: "무늬 없음 (단색)",
    field_pattern_opt_pave: "포장석 무늬",
    field_pattern_opt_brick: "벽돌 무늬",
    field_pattern_opt_grass: "잔디 무늬"
  },

  // ============================================================
  // 简体中文
  // ============================================================
  zh_CN: {
    title_full: "🌱 Julia’s 植物数据库",
    title_short: "🌱 植物数据库",
    sub_title: "pflanzen.js 编辑器 – 花园规划器的植物与材料",

    tooltip_lang_select: "选择语言",
    tooltip_header_toggle: "折叠/展开标题栏",
    tooltip_theme_toggle: "切换浅色/深色模式",

    btn_load_other_db: "📂 加载其他数据库",
    btn_new_plant: "➕ 新建植物",
    btn_new_material: "➕ 新建材料",
    btn_export_db: "💾 保存数据库",
    btn_export_db_dirty: "💾 保存数据库（有未保存的更改！）",
    btn_export_csv: "📊 导出为 CSV",

    heading_overview: "概览",
    status_initial: "尚未加载文件。请先加载你的 pflanzen.js。",
    search_placeholder: "搜索（名称、id、用途、备注 ...）",
    tooltip_search_clear: "清除搜索",

    group_plants: "🌿 植物",
    group_materials: "🧱 材料",
    table_head_icon: "图标",
    table_head_name: "名称",
    table_head_id: "id",
    empty_no_matches: "没有匹配项",
    row_no_name: "（未命名）",

    form_title_default: "编辑条目",
    form_title_new_plant: "新建植物",
    form_title_new_material: "新建材料",
    form_title_edit_plant: "编辑植物",
    form_title_edit_material: "编辑材料",
    form_empty_state: "从左侧列表中选择一个条目，或通过上方按钮新建一个。",

    btn_save: "💾 保存",
    btn_cancel: "取消",
    btn_delete: "🗑️ 删除",
    btn_duplicate: "📄 复制",
    tooltip_emoji_picker: "选择表情符号",

    img_preview_hint_empty: "未设置图片 – 花园规划器中将使用图标。",
    img_preview_hint_loading: "正在加载预览...",
    img_preview_hint_error: "⚠️ 在此路径下未找到图片（仅当文件相对于此 HTML 文件时预览才可用）。",

    dup_id_warning: "⚠️ 此 id 已存在于「{kind}」中 – 请另取一个名称。",
    kind_plant_label: "植物",
    kind_material_label: "材料",

    filename_line: "📄 已加载文件：{name}",
    filename_line_warning: "📄 已加载文件：{name} ⚠️ 注意：这不是 pflanzen.js！",

    status_autoload_success: "已从 pflanzen.js 自动加载：{plantCount} 种植物，{materialCount} 个材料条目。",
    status_autoload_failed: "自动加载失败：{msg}",
    status_no_autoload: "在同一文件夹中未找到 pflanzen.js。请通过按钮加载。",
    status_load_success: "已加载：{plantCount} 种植物，{materialCount} 个材料条目。",
    status_load_failed: "读取文件时出错：{msg}",
    status_saved_entry: "已保存：「{name}」。",
    status_deleted_entry: "已删除：「{name}」。",
    status_duplicated_entry: "已复制：「{name}」，请检查内容后保存。",
    status_export_js_done: "{name} 已下载。",
    status_export_csv_done: "CSV 导出已下载。",

    alert_id_empty: "id 不能为空。",
    alert_id_duplicate: "此 id 已被占用。请选择另一个。",
    confirm_delete_entry: "确定要删除「{name}」吗？",
    alert_duplicate_ids_on_export: "注意：发现重复的 id（{ids}）。请在导出前先修复。",

    footer_credits_tooltip: "此应用完全由 Anthropic 的 Claude.ai 在免费账户中创建。相当惊人！🧚🏻‍♀️",
    footer_credits_link: "制作信息",

    field_id_label: "id（唯一，技术性）",
    field_name_label: "名称",
    field_icon_label: "图标（表情符号）",
    field_image_plant_label: "图片（路径，例如 images/basilikum.png）",
    field_image_material_label: "图片（路径，例如 images/pflasterstein.png）",
    field_image_tooltip: "花园规划器的「导出为 PNG」功能仅在通过 http/https 访问花园规划器时才会将这些图片包含在导出中！预计不会有其他限制。",
    field_accent_label: "颜色",
    field_listAccent_label: "列表颜色（可选）",
    field_listAccent_placeholder: "留空 = 与颜色相同",
    field_listAccent_tooltip: "仅影响侧边栏中的植物/材料列表。当「颜色」设置为「transparent」时（例如使用图片的项目）很有用，但列表仍需要显示彩色标记。留空则使用常规颜色。",
    field_plantSpacing_label: "株距（厘米）",
    field_rowSpacing_label: "行距（厘米）",
    field_latin_label: "学名",
    field_use_label: "用途",
    field_sowDepth_label: "播种深度",
    field_standort_label: "种植位置",
    field_hoehe_label: "高度",
    field_aussaat_label: "播种／栽培周期",
    field_keimung_label: "发芽",
    field_keimfaehigkeit_label: "发芽率",
    field_lebensdauer_label: "寿命",
    field_herkunft_label: "产地",
    field_topfgroesse_label: "花盆尺寸",
    field_kulturdauer_label: "栽培周期",
    field_notiz_label: "备注",

    field_shape_label: "形状",
    field_shape_opt_rect: "方形（矩形）",
    field_shape_opt_circle: "圆形",
    field_widthCm_label: "宽度（厘米）",
    field_widthCm_tooltip: "对于圆形：如果「直径」留空，则用作直径。",
    field_heightCm_label: "高度（厘米）",
    field_heightCm_tooltip: "圆形时会被忽略（圆形仅使用宽度/直径）。",
    field_diameterCm_label: "直径（厘米，仅圆形）",
    field_diameterCm_tooltip: "可选。仅在形状为「圆形」时有效。留空时使用宽度作为直径。",
    field_pattern_label: "花纹",
    field_pattern_opt_none: "无花纹（纯色）",
    field_pattern_opt_pave: "铺路石花纹",
    field_pattern_opt_brick: "砖墙花纹",
    field_pattern_opt_grass: "草坪花纹"
  }

};

// ==========================================================
// Sprachen, die aktuell in der Auswahl auftauchen (siehe select#langSelect).
// Sobald weitere Sprachen oben ergänzt sind, hier + im <select> freischalten.
// ==========================================================
const I18N_AVAILABLE = ['de', 'en', 'ru', 'es', 'fr', 'ja', 'ko', 'zh_CN'];
