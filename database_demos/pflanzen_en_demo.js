/* ==================================================================
   Julias's Gartenplaner- Pflanzen-Datenbank-Editor
   Copyright (C) 2026 heino17
   https://github.com/heino17/garden-planner

   pflanzen.js
   Datenquelle für den Gartenplaner. Bewusst als .js (nicht .json)
   ausgelagert, damit die Datei auch unter file:// per <script src>
   geladen werden kann, ohne an CORS/fetch-Restriktionen zu scheitern
   (gleiches Prinzip wie lang.js beim Strickmuster-Editor).

   Zum Pflegen: Kopiere ein bestehendes Objekt und passe die Werte an.
   Felder, die du nicht hast, einfach weglassen oder leer lassen -
   der Gartenplaner kommt mit fehlenden Werten klar.
================================================================== */

// -------------------- PFLANZEN --------------------
// shape:"circle" -> Kreis-Durchmesser wird aus plantSpacing/rowSpacing
// automatisch berechnet (Mittelwert, falls Bereich angegeben).
const PLANTS_DATA = [
  {
    id:"engelwurz", kind:"plant", shape:"circle", name:"Angelica",
    icon:"🌿", accent:"#5c8f5c", plantSpacing:"?", latin:"Angelica archangelica, Doldenblütler",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"anis", kind:"plant", shape:"circle", name:"Anise",
    icon:"🌿", image:"images/anis.png", accent:"transparent", listAccent:"#c36f22",
    plantSpacing:"?", rowSpacing:"20", latin:"Pimpinella anisum, Doldenblütler", use:"Küchenkraut",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"artischocke", kind:"plant", shape:"circle", name:"Artichoke",
    icon:"🌿", image:"images/artischocke.png", accent:"transparent", listAccent:"#009701",
    plantSpacing:"100", rowSpacing:"100", keimfaehigkeit:"4 – 6"
  },
  {
    id:"spargel", kind:"plant", shape:"circle", name:"Asparagus",
    icon:"🌱", accent:"#7a9c4a", plantSpacing:"?", standort:"wärmeliebend, winterhart",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"basilikum", kind:"plant", shape:"circle", name:"Basil",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"25", latin:"Ocimum basilicum, Lippenblütler",
    use:"Küchenkraut", sowDepth:"Saat nur andrücken", standort:"sonnig, sehr frostempfindlich, frisch, nährstoffreich, durchlässig, humos", hoehe:"50 – 60",
    aussaat:"Vorkultur IV – V, direkt V- VI, blüht VI – IX", keimung:"7 – 10, N1, Lichtkeimer", keimfaehigkeit:"4 – 6", lebensdauer:"einjährig"
  },
  {
    id:"lorbeer", kind:"plant", shape:"circle", name:"Bay Laurel",
    icon:"🍃", accent:"#3f6b3b", plantSpacing:"?", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"bohnen", kind:"plant", shape:"circle", name:"Beans, Runner Bean",
    icon:"🫘", accent:"#6b8c3f", plantSpacing:"8-15", rowSpacing:"(40-) 60",
    sowDepth:"3", standort:"wärmeliebend, frostempfindlich", keimfaehigkeit:"2 – 4", lebensdauer:"einjährig, Selbst~",
    topfgroesse:"5 – 10 L"
  },
  {
    id:"bohnen_dicke_bohne_ackerbohne", kind:"plant", shape:"circle", name:"Beans: Broad Bean, Fava Bean",
    icon:"🫘", accent:"#6b8c3f", plantSpacing:"15-20", rowSpacing:"40 (45)",
    sowDepth:"5", keimfaehigkeit:"2 – 4"
  },
  {
    id:"bohnen_buschbohne", kind:"plant", shape:"circle", name:"Beans: Bush Bean",
    icon:"🫘", accent:"#6b8c3f", plantSpacing:"20", rowSpacing:"45",
    sowDepth:"2", keimfaehigkeit:"2 – 4", lebensdauer:"einjährig, Selbst~"
  },
  {
    id:"bohnen_limabohne", kind:"plant", shape:"circle", name:"Beans: Lima Bean",
    icon:"🫘", accent:"#6b8c3f", plantSpacing:"40-50", rowSpacing:"100-120",
    keimfaehigkeit:"2 – 4"
  },
  {
    id:"bohnen_feuerbohne", kind:"plant", shape:"circle", name:"Beans: Runner Bean (Scarlet)",
    icon:"🫘", accent:"#c1442d", plantSpacing:"25-30", rowSpacing:"60-75",
    keimfaehigkeit:"2 – 4"
  },
  {
    id:"bohnen_sojabohne", kind:"plant", shape:"circle", name:"Beans: Soybean",
    icon:"🫘", accent:"#a0a83f", plantSpacing:"10-15", rowSpacing:"30-50",
    keimfaehigkeit:"2 – 4"
  },
  {
    id:"goldmelisse", kind:"plant", shape:"circle", name:"Bee Balm, Wild Bergamot",
    icon:"🌺", accent:"#c0392b", plantSpacing:"?", latin:"Monarda didyma, Lippenblütler",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"rote_beete", kind:"plant", shape:"circle", name:"Beetroot",
    icon:"🫜", accent:"#8b2a3f", plantSpacing:"4-5 (10)", rowSpacing:"(20-) 25 (30)",
    sowDepth:"2", standort:"kühleliebend, winterhart", keimfaehigkeit:"4", lebensdauer:"zweijährig, Wind~",
    topfgroesse:"Blumenkasten"
  },
  {
    id:"paprika", kind:"plant", shape:"circle", name:"Bell Pepper, Sweet Pepper",
    icon:"🫑", image:"images/paprika.png", accent:"#c0392b", plantSpacing:"40",
    rowSpacing:"40", sowDepth:"1", keimfaehigkeit:"3 – 5", topfgroesse:"15 – 20 l"
  },
  {
    id:"vogelwicke", kind:"plant", shape:"circle", name:"Bird Vetch",
    icon:"🌸", accent:"#7a5fb0", plantSpacing:"50", latin:"Vicia cracca, Schmetterlingsblütler",
    use:"Salatkraut, Gründüngung", sowDepth:"1 – 2", standort:"sonnig, winterhart, mäßig trocken bis frisch, mäßig nährstoffreich, humos", hoehe:"120",
    aussaat:"Vorkultur III – VI (auspflanzen V - X), direkt III – VI, blüht VI – VIII", keimung:"N2", lebensdauer:"mehrjährig", notiz:"produziert eine große Menge an Pollen für Hummeln und Bienen."
  },
  {
    id:"bitterkresse", kind:"plant", shape:"circle", name:"Bittercress, Land Cress",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"10-20", rowSpacing:"20-30",
    latin:"Cochlearia officinalis, Kreuzblütler", use:"Salatkraut"
  },
  {
    id:"schwarzkummel", kind:"plant", shape:"circle", name:"Black Cumin, Nigella",
    icon:"🌸", accent:"#3f5fb0", plantSpacing:"?", latin:"Nigella sativa",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"brombeere", kind:"plant", shape:"circle", name:"Blackberry",
    icon:"🫐", accent:"#3a2a5c", plantSpacing:"150", latin:"Rubus fruticosus,",
    use:"Beerenobst, Heilpflanze"
  },
  {
    id:"borretsch", kind:"plant", shape:"circle", name:"Borage",
    icon:"💠", accent:"#4a7fc9", plantSpacing:"25-40", latin:"Borago officinalis, Rauhblattgewächs",
    use:"Salatkraut", standort:"sonnig – halbschattig, normaler Gartenboden, anspruchslos", aussaat:"direkt IV – VII", keimung:"Dunkelkeimer, 15 – 22° C"
  },
  {
    id:"brokkoli", kind:"plant", shape:"circle", name:"Broccoli",
    icon:"🥦", accent:"#4c7a3d", plantSpacing:"40-50 (15-45)", rowSpacing:"50 (30-60)",
    sowDepth:"1-2", standort:"kühleliebend, winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 10",
    keimfaehigkeit:"3 – 5", lebensdauer:"einjährig, Insekten~"
  },
  {
    id:"rosenkohl", kind:"plant", shape:"circle", name:"Brussels Sprouts",
    icon:"🥬", accent:"#4c7a3d", plantSpacing:"40 (60-70)", rowSpacing:"60 (90)",
    sowDepth:"(1-) 2", standort:"kühleliebend, winterhart", keimfaehigkeit:"2 – 4", lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"buchweizen", kind:"plant", shape:"circle", name:"Buckwheat",
    icon:"🌾", accent:"#b08b2a", plantSpacing:"10–15", latin:"Fagopyrum esculentum, Polygonum fagopyrum, Knöterichgewächs",
    use:"Getreide, Heilpflanze, Gründüngung", sowDepth:"3 – 4", standort:"sonnig, sehr frostempfindlich, trocken bis mäßig frisch, nährstoffarm, durchlässig, kalkarm", hoehe:"60",
    aussaat:"direkt V – VII, blüht VII – X", keimung:"N1", lebensdauer:"einjährig", kulturdauer:"10 – 12 Wochen",
    notiz:"kein Getreide (Körner sind glutenfrei), auch für Böden in schlechtem Zustand, Bienenweide, sehr schnellwüchsig"
  },
  {
    id:"ochsenzunge", kind:"plant", shape:"circle", name:"Bugloss",
    icon:"🌸", accent:"#3f5fb0", plantSpacing:"40 – 50", latin:"Anchusa officinalis,",
    use:"Heilkraut, Färberpflanze", standort:"sonnig, winterhart, durchlässig, nicht zu nährstoffarm, keine Staunässe, kalkreicher Boden ungeeignet, Pfahlwurzel bis zu 1 m tief", hoehe:"30 – 100", aussaat:"blüht VI – IX",
    lebensdauer:"zwei- bis mehrjährig", notiz:"Bienen, Schmetterlinge, Hummeln und div. Falter"
  },
  {
    id:"klette", kind:"plant", shape:"circle", name:"Burdock",
    icon:"🌿", accent:"#6b6b3f", plantSpacing:"?", latin:"Arctium lappa, Korbblütler",
    use:"Wildkraut, Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"kummel", kind:"plant", shape:"circle", name:"Caraway",
    icon:"🌿", accent:"#7a9c4a", plantSpacing:"?", latin:"Carum carvi, Doldenblütler",
    use:"Küchenkraut", keimung:"Lichtkeimer", keimfaehigkeit:"1 – 2", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"karotte", kind:"plant", shape:"circle", name:"Carrot",
    icon:"🥕", accent:"#d4772c", plantSpacing:"3-5", rowSpacing:"20-30",
    sowDepth:"3", standort:"wärmeliebend, winterhart", keimfaehigkeit:"1 – 2", lebensdauer:"zweijährig, Insekten~",
    topfgroesse:"mind. 40 cm Bodentiefe"
  },
  {
    id:"blumenkohl", kind:"plant", shape:"circle", name:"Cauliflower",
    icon:"🥦", accent:"#4c7a3d", plantSpacing:"40-50 (50-60)", rowSpacing:"50 (60)",
    sowDepth:"(1-) 2", standort:"kühleliebend, halbschattig, keine große Hitze, bedingt winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 10",
    keimfaehigkeit:"2 – 4", lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"sellerie", kind:"plant", shape:"circle", name:"Celery, Celeriac",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"30", rowSpacing:"40",
    sowDepth:"0,5", standort:"wärmeliebend", aussaat:"8 Wochen vor dem letzten Frost", keimung:"14 – 21",
    keimfaehigkeit:"4 – 6", lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"sellerie_stangensellerie_schnittsellerie", kind:"plant", shape:"circle", name:"Celery, Stalk Celery, Cutting Celery",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"30 (35)", rowSpacing:"35",
    latin:"Apium graveolens, Doldenblütler", use:"Küchenkraut", sowDepth:"2", keimfaehigkeit:"4 – 6"
  },
  {
    id:"kamille", kind:"plant", shape:"circle", name:"Chamomile",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", latin:"Matricaria chamomilla, Chamomilla recutita, Korbblütler",
    use:"Heilkraut", standort:"anspruchslos", hoehe:"50", keimung:"Lichtkeimer",
    lebensdauer:"einjährig", herkunft:"heimisch in ganz Europa", notiz:"wird von Schnecken gemieden; die Samen ähneln denen des echten Schwarzkümmels, Schwarzkümmel schmeckt leicht nach Sesam, die Jungfer im Grünen erinnert an Waldmeister. [Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"mangold", kind:"plant", shape:"circle", name:"Chard",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"15-20 (40-60)", rowSpacing:"30",
    sowDepth:"2", standort:"wärmeliebend, winterhart", keimfaehigkeit:"3 – 4", lebensdauer:"zweijährig, Wind~"
  },
  {
    id:"mangold_schnittmangold", kind:"plant", shape:"circle", name:"Chard, Cutting Chard",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"20-30", rowSpacing:"30"
  },
  {
    id:"kerbel", kind:"plant", shape:"circle", name:"Chervil",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"15", rowSpacing:"30",
    latin:"Anthriscus cerefolium, Doldenblütler", use:"Küchenkraut", keimung:"Lichtkeimer"
  },
  {
    id:"chicoree", kind:"plant", shape:"circle", name:"Chicory, Endive",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"25-30", rowSpacing:"30-35",
    sowDepth:"1-2"
  },
  {
    id:"chili", kind:"plant", shape:"circle", name:"Chili Pepper",
    icon:"🌶️", accent:"#c0392b", plantSpacing:"40-50", topfgroesse:"10 l"
  },
  {
    id:"peperoni", kind:"plant", shape:"circle", name:"Chili Pepper (hot)",
    icon:"🌶️", accent:"#c0392b", plantSpacing:"45", rowSpacing:"45",
    latin:"Capsicum annuum, Nachtschattengewächs", use:"Küchengewürz", keimfaehigkeit:"3 – 5", notiz:"Die Peperoni ist eine Unterart der Paprika"
  },
  {
    id:"chinakohl", kind:"plant", shape:"circle", name:"Chinese Cabbage",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"40", rowSpacing:"30",
    keimfaehigkeit:"4 – 6", topfgroesse:"geeignet für Topfkultur."
  },
  {
    id:"schnittlauch", kind:"plant", shape:"circle", name:"Chives",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"30", latin:"Allium schoenoprasum, Liliengewächs, Lauchgewächs",
    use:"Küchenkraut", sowDepth:"flache Ablage", standort:"sonnig - halbschattig, winterhart in Zone 3 – 9, frisch – feucht, nährstoffreich, durchlässig, humos, kalkhaltig", hoehe:"30 – 45",
    aussaat:"Vorkultur III – IV, direkt IV oder VIII, blüht V – VIII, Ernte IV – X", keimung:"7 – 14, N1", keimfaehigkeit:"1 – 2", lebensdauer:"mehrjährig"
  },
  {
    id:"klee", kind:"plant", shape:"circle", name:"Clover: Hare's-foot Clover, Field Clover",
    icon:"☘️", accent:"#5c9c4a", plantSpacing:"?", latin:"Trifolium arvense, Hülsenfrüchtler",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"huflattich", kind:"plant", shape:"circle", name:"Coltsfoot",
    icon:"🌼", accent:"#d4a72c", plantSpacing:"?", latin:"Tussilago farfara, Korbblütler",
    use:"Wildkraut, Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"beinwell", kind:"plant", shape:"circle", name:"Comfrey",
    icon:"🌿", accent:"#4a6b3f", plantSpacing:"45", latin:"Symphytum officinale, Rauhblattgewächs",
    use:"Wildkraut, Heilkraut", notiz:"4-6 pro m²"
  },
  {
    id:"koriander", kind:"plant", shape:"circle", name:"Coriander",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"?", latin:"Coriandrum sativum, Doldenblütler",
    use:"Küchenkraut", sowDepth:"flache Ablage", standort:"sonnig – halbschattig, mäßig trocken – frisch, nährstoffreich, durchlässig, humos", hoehe:"60",
    aussaat:"Vorkultur ganzjährig, direkt IV – VIII, blüht VI – VIII", keimung:"N1, Dunkelkeimer", lebensdauer:"einjährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"klatschmohn", kind:"plant", shape:"circle", name:"Corn Poppy",
    icon:"🌺", accent:"#c0392b", plantSpacing:"25-30", rowSpacing:"10",
    latin:"Papaver rhoeas, Mohngewächs", standort:"sonnig, nährstoff- und basenreich, normale bis trockene Gartenerde, anspruchslos", hoehe:"30 – 80", aussaat:"blüht V – VII (essbar)",
    keimfaehigkeit:"100", lebensdauer:"einjährig", notiz:"bis zu 5000 Samen pro Kapsel (können 100 Jahre lang keimfähig überdauern)."
  },
  {
    id:"mais", kind:"plant", shape:"circle", name:"Corn, Maize",
    icon:"🌽", accent:"#e0b32c", plantSpacing:"45", rowSpacing:"45",
    sowDepth:"4", keimfaehigkeit:"4 – 6"
  },
  {
    id:"kornblume", kind:"plant", shape:"circle", name:"Cornflower",
    icon:"🌸", accent:"#3f5fb0", plantSpacing:"?", latin:"Centaurea cyanus L., Korbblütler",
    standort:"sonnig, kalkarm, sandig, nährstoffreich, normal bis trockene Gartenerde, anspruchslos", hoehe:"20 – 80", aussaat:"blüht VI – IX (essbar)", keimfaehigkeit:"3",
    lebensdauer:"einjährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"storchschnabel", kind:"plant", shape:"circle", name:"Cranesbill, Soft",
    icon:"🌸", accent:"#a0629c", plantSpacing:"?", latin:"Geranium molle, Storchschnabelgewächs",
    standort:"halbschattig, anspruchslos, normal düngen und wässern", hoehe:"10 – 30", aussaat:"blüht V – IX (essbar)", lebensdauer:"einjährig",
    notiz:"Bodendecker, Dauerblüher, nach der Blüte oder bei Austriebsbeginn im Frühjahr handhoch zurückschneiden. [Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"kresse_gartenkresse", kind:"plant", shape:"circle", name:"Cress: Garden Cress",
    icon:"🥬", accent:"#4a8f5c", plantSpacing:"?", latin:"Lepidium sativum, Kohlgewächs",
    use:"Salatkraut", keimung:"Lichtkeimer", keimfaehigkeit:"4", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"kresse", kind:"plant", shape:"circle", name:"Cress: Watercress",
    icon:"🥬", accent:"#4a8f5c", plantSpacing:"?", latin:"Nasturtium officinale, Kohlgewächs",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"gurke", kind:"plant", shape:"circle", name:"Cucumber: Outdoor Cucumber",
    icon:"🥒", accent:"#4c7a3d", plantSpacing:"30-45 (50)", rowSpacing:"100 (180)",
    sowDepth:"1", standort:"wärmeliebend, sehr frostempfindlich", keimfaehigkeit:"4 – 6", lebensdauer:"einjährig, Insekten~",
    topfgroesse:"30 l"
  },
  {
    id:"ganseblumchen", kind:"plant", shape:"circle", name:"Daisy",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", latin:"Bellis perennis, Korbblütler",
    use:"Wildkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"lowenzahn", kind:"plant", shape:"circle", name:"Dandelion",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", latin:"Taraxacum officinale, Korbblütler",
    use:"Salatkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"dill", kind:"plant", shape:"circle", name:"Dill",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"25", latin:"Anethum graveolens, Doldenblütler",
    use:"Küchenkraut", sowDepth:"flache Ablage", standort:"sonnig – halbschattig, windgeschützt, frisch, feucht, nährstoffreich (Phosphor ist notwendig), durchlässig, humos, keine Staunässe, keine Bodenverdichtung, Wassermangel darf nicht entstehen", hoehe:"60 – 90, bis 120",
    aussaat:"Vorkultur III – IV in Topfpaletten, Aussaat direkt IV – VI (ab 6 Wochen vor dem letzten Frost), blüht V – IX, Ernte ab 20 cm Höhe, blühendes Kraut schmeckt intensiver, verliert getrocknet viel Aroma", keimung:"21 – 28, N1, (12 – 14° C)", keimfaehigkeit:"2 – 4", lebensdauer:"einjährig",
    notiz:"Frostsaat ist möglich, bei früher Aussaat ist die Gefahr von Krankheiten und Schädlingen geringer; wegen der Pfahlwurzel nicht umpflanzen Mischkultur mit: Dill kräftigt andere Pflanzen. Direktaussaat auf Gemüsebeete fördert die Hauptfrucht. Dill beschleunigt das Anlaufen von Gurken, Kohl, Möhren, Rote Beete, Salat und Zwiebeln. Dill ist mit sich selbst und mit Basilikum, Fenchel, Gartenkresse und Kümmel unverträglich."
  },
  {
    id:"farberkamille", kind:"plant", shape:"circle", name:"Dyer's Chamomile",
    icon:"🌼", image:"images/faerberkamille.png", accent:"#d4a72c", plantSpacing:"40",
    latin:"Anthemis tinctoria, Korbblütler", use:"Färberpflanze", sowDepth:"flache Ablage", standort:"sonnig, winterhart in Zone 3 – 7, trocken – frisch, nährstoffarm, durchlässig, keine Staunässe, bei ungeeignetem Standort anfällig für Mehltau",
    hoehe:"50", aussaat:"Vorkultur III – IV, direkt IV – V oder VIII – IX, blüht VII – IX", keimung:"N1", lebensdauer:"mehrjährig",
    notiz:"exzellente Bienenweide, Dauerblüher, versamt sich leicht ohne lästig zu werden, ein kräftiger Rückschnitt Ende August stärkt für den Winter."
  },
  {
    id:"aubergine", kind:"plant", shape:"circle", name:"Eggplant, Aubergine",
    icon:"🍆", accent:"#5b3a86", plantSpacing:"45", rowSpacing:"(45) 60",
    sowDepth:"1", keimfaehigkeit:"4 – 6", topfgroesse:"10 l"
  },
  {
    id:"alant", kind:"plant", shape:"circle", name:"Elecampane",
    icon:"🌼", accent:"#c9a13b", plantSpacing:"60", latin:"Inula helenium, Korbblütler",
    use:"Heilkraut"
  },
  {
    id:"fenchel_knollenfenchel", kind:"plant", shape:"circle", name:"Fennel: Bulb Fennel",
    icon:"🥬", accent:"#7a9c4a", plantSpacing:"20-25", rowSpacing:"30",
    sowDepth:"1", keimfaehigkeit:"1 – 2", topfgroesse:"geeignet für Topfkultur."
  },
  {
    id:"fenchel", kind:"plant", shape:"circle", name:"Fennel: Herb Fennel",
    icon:"🌿", accent:"#7a9c4a", plantSpacing:"?", latin:"Foeniculum vulgare, Doldenblütler",
    use:"Küchenkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"vergissmeinnicht", kind:"plant", shape:"circle", name:"Forget-me-not, Field~",
    icon:"🌸", accent:"#3f5fb0", plantSpacing:"10", latin:"Myosotis arvensis, Rauhblattgewächs",
    use:"Heilkraut", standort:"halbschattig, feucht", hoehe:"10 – 40", aussaat:"Selbstaussaat, blüht IV – X (essbar)",
    lebensdauer:"ein- bis zweijährig, Insekten~", notiz:"Bodendecker, durch pH-Wert-Änderung von basisch nach sauer wechselt die Blütenfarbe on rosa nach blau."
  },
  {
    id:"knoblauch", kind:"plant", shape:"circle", name:"Garlic",
    icon:"🧄", accent:"#d8d0b8", plantSpacing:"10-15", rowSpacing:"30",
    latin:"Allium sativum, Liliengewächs", use:"Küchengewürz", sowDepth:"4-5", standort:"wärmeliebend, sonnig",
    topfgroesse:"geeignet für Topfkultur."
  },
  {
    id:"giersch", kind:"plant", shape:"circle", name:"Ground Elder",
    icon:"🌿", accent:"#4a7a3f", plantSpacing:"?", latin:"Aegopodium podagraria, Doldenblütler",
    use:"Wildkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"meerrettich", kind:"plant", shape:"circle", name:"Horseradish",
    icon:"🌿", accent:"#c8d4b8", plantSpacing:"?", latin:"Armoracia rusticana, Kohlgewächs",
    use:"Küchengewürz", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"wicke", kind:"plant", shape:"circle", name:"Hungarian Vetch",
    icon:"🌸", accent:"#7a5fb0", plantSpacing:"?", latin:"Vicia pannonica, Schmetterlingsblütler",
    hoehe:"20 – 50", aussaat:"blüht IV – VI", lebensdauer:"einjährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"ysop", kind:"plant", shape:"circle", name:"Hyssop",
    icon:"🌸", accent:"#3f5fb0", plantSpacing:"?", latin:"Hyssopus officinalis, Lippenblütler",
    use:"Küchenkraut", standort:"sonnig, winterhart", hoehe:"90", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"topinambur", kind:"plant", shape:"circle", name:"Jerusalem Artichoke",
    icon:"🌻", accent:"#e0b32c", plantSpacing:"30-40", rowSpacing:"60-80"
  },
  {
    id:"grunkohl", kind:"plant", shape:"circle", name:"Kale",
    icon:"🥬", accent:"#3f6b3b", plantSpacing:"40 (-60)", rowSpacing:"40",
    sowDepth:"(1-) 2", standort:"kühleliebend, winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 8",
    lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"kohlrabi", kind:"plant", shape:"circle", name:"Kohlrabi",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"25-30", rowSpacing:"25-30",
    sowDepth:"1-2", standort:"kühleliebend, winterhart", keimfaehigkeit:"2 – 4", lebensdauer:"zweijährig, Insekten~",
    topfgroesse:"passt in 10 cm tiefe Balkonkästen"
  },
  {
    id:"frauenmantel", kind:"plant", shape:"circle", name:"Lady's Mantle",
    icon:"🌿", accent:"#5c8f5c", plantSpacing:"?", latin:"Alchemilla xanthochlora syn. vulgaris, Rosengewächs",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"lavendel", kind:"plant", shape:"circle", name:"Lavender",
    icon:"🌸", accent:"#8a6bb0", plantSpacing:"?", latin:"Lavandula angustifolia, Lippenblütler",
    use:"Küchenkraut", standort:"frostempfindlich", hoehe:"30 – 60", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"zitronenmelisse", kind:"plant", shape:"circle", name:"Lemon Balm",
    icon:"🌿", accent:"#3fa06b", plantSpacing:"45", latin:"Melissa officinalis, Lippenblütler",
    use:"Küchenkraut", standort:"sonnig-halbschattig", hoehe:"30 – 90", notiz:"4-6 pro m²"
  },
  {
    id:"linsen", kind:"plant", shape:"circle", name:"Lentils",
    icon:"🫘", accent:"#a0834a", plantSpacing:"?", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"salat_kopfsalat", kind:"plant", shape:"circle", name:"Lettuce: Butterhead Lettuce",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"20 (25)", rowSpacing:"20 (30)",
    sowDepth:"1", standort:"kühleliebend, winterhart", aussaat:"8 Wochen vor dem letzten Frost", keimung:"2 – 3",
    keimfaehigkeit:"2 – 4", lebensdauer:"einjährig, Insekten~", topfgroesse:"Blumenkasten oder kleine Tontöpfe"
  },
  {
    id:"salat_feldsalat", kind:"plant", shape:"circle", name:"Lettuce: Corn Salad, Lamb's Lettuce",
    icon:"🥬", accent:"#6b8c3f", plantSpacing:"3-5 (10)", rowSpacing:"15",
    sowDepth:"0,5", standort:"kühleliebend, winterhart", keimfaehigkeit:"2", lebensdauer:"einjährig, Insekten~",
    topfgroesse:"Blumenkasten"
  },
  {
    id:"salat_endiviensalat", kind:"plant", shape:"circle", name:"Lettuce: Endive",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"30", rowSpacing:"20",
    sowDepth:"1", standort:"kühleliebend, winterhart", keimfaehigkeit:"4 – 6", topfgroesse:"Blumenkasten oder kleine Tontöpfe"
  },
  {
    id:"salat", kind:"plant", shape:"circle", name:"Lettuce: Iceberg Lettuce",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"25-30", standort:"kühleliebend, winterhart",
    lebensdauer:"einjährig, Insekten~"
  },
  {
    id:"salat_pflucksalat", kind:"plant", shape:"circle", name:"Lettuce: Loose-leaf Lettuce",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"20", rowSpacing:"20",
    sowDepth:"1", standort:"kühleliebend, winterhart", lebensdauer:"einjährig, Insekten~", topfgroesse:"Blumenkasten oder kleine Tontöpfe"
  },
  {
    id:"salat_radicchio", kind:"plant", shape:"circle", name:"Lettuce: Radicchio",
    icon:"🥬", accent:"#8b2a3f", plantSpacing:"30-40", rowSpacing:"30",
    keimfaehigkeit:"4 – 6"
  },
  {
    id:"linde", kind:"plant", shape:"circle", name:"Lime Tree, Linden",
    icon:"🌳", accent:"#4c7a3d", plantSpacing:"500", rowSpacing:"500",
    latin:"Tilia cordata,", use:"Heilpflanze"
  },
  {
    id:"liebstockel", kind:"plant", shape:"circle", name:"Lovage",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"50 – 75", latin:"Levisticum officinale, Doldenblütler",
    use:"Küchenkraut", sowDepth:"flache Ablage", standort:"sonnig – halbschattig, winterhart in Zone 3 – 9, frisch, nährstoffreich, durchlässig, humos", hoehe:"120 – 180",
    aussaat:"Vorkultur III – V, direkt IV – VI, blüht VII – VIII", keimung:"N2", lebensdauer:"mehrjährig", herkunft:"Persien"
  },
  {
    id:"jungfer_im_grunen", kind:"plant", shape:"circle", name:"Love-in-a-Mist, Damascus Cumin",
    icon:"🌸", accent:"#7a6bb0", plantSpacing:"?", latin:"Nigella damascena, Hahnenfußgewächs",
    standort:"sonnig, normaler Gartenboden, anspruchslos", hoehe:"20", aussaat:"blüht VII – VIII (Samen sind essbar)", keimfaehigkeit:"3",
    lebensdauer:"einjährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"amaranth", kind:"plant", shape:"circle", name:"Love-lies-bleeding, Amaranth",
    icon:"🌾", image:"images/amaranth.png", accent:"#b08b2a", plantSpacing:"40",
    rowSpacing:"40", latin:"Amaranthus caudatus, Fuchsschwanzgewächs", use:"Getreide", sowDepth:"0,5 flache Ablage",
    standort:"sonnig, frisch - feucht, nährstoffreich, durchlässig, humos, pflegeleicht, wächst auch gut in schwerem Boden", hoehe:"100 (170)", aussaat:"Vorkultur III - IV, direkt V - VI, blüht VII – IX", keimung:"N1, Warmkeimer (20° C)",
    lebensdauer:"einjährig", herkunft:"Südamerika", notiz:"Wasserbedarf nicht unterschätzen. Blütenstände nach dem Abblühen entfernen, um ein unkontrolliertes Ausbreiten zu verhindern."
  },
  {
    id:"malve", kind:"plant", shape:"circle", name:"Mallow, Wild",
    icon:"🌸", accent:"#a0629c", plantSpacing:"?", latin:"Malva sylvestris,",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"ringelblume", kind:"plant", shape:"circle", name:"Marigold, Pot Marigold",
    icon:"🌼", accent:"#e08a2c", plantSpacing:"20", rowSpacing:"25",
    latin:"Calendula officinalis, Korbblütler", use:"Heilpflanze, Salatkraut", standort:"sonnig-halbschattig, normaler Gartenboden, anspruchslos", hoehe:"30",
    aussaat:"direkt III – V, blüht VII – X (essbar)", keimung:"innen: 8, außen: 9", keimfaehigkeit:"3 – 5", lebensdauer:"einjährig.",
    notiz:"zur Gesunderhaltung des Bodens, sehr haltbare Schnittblume"
  },
  {
    id:"majoran", kind:"plant", shape:"circle", name:"Marjoram",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"?", latin:"Origanum majorana, Lippenblütler",
    use:"Küchenkraut", standort:"sonnig, sehr frostempfindlich", hoehe:"20 – 30", aussaat:"6-8 Wochen vor dem letzten Frost",
    keimung:"8 – 14, Lichtkeimer", keimfaehigkeit:"1 – 2", lebensdauer:"einjährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"eibisch", kind:"plant", shape:"circle", name:"Marsh Mallow",
    icon:"🌸", accent:"#d68fb0", plantSpacing:"?", latin:"Althaea officinalis, Malvengewächs",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"melone", kind:"plant", shape:"circle", name:"Melon",
    icon:"🍈", accent:"#6b8c3f", plantSpacing:"180", rowSpacing:"200",
    standort:"wärmeliebend, sehr frostempfindlich", keimfaehigkeit:"4 – 6", lebensdauer:"einjährig, Insekten~"
  },
  {
    id:"mariendistel", kind:"plant", shape:"circle", name:"Milk Thistle",
    icon:"🌸", accent:"#9b6bb8", plantSpacing:"?", latin:"Silybum marianum, Distelgewächs",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"hirse", kind:"plant", shape:"circle", name:"Millet",
    icon:"🌾", accent:"#b08b2a", plantSpacing:"?", latin:"Panicum miliaceum, Süßgras",
    use:"Getreide, Gründüngung", sowDepth:"2", standort:"sonnig, mäßig trocken, durchlässig, anspruchslos", hoehe:"100",
    aussaat:"direkt IV – VII, blüht VI – IX", keimung:"N1", lebensdauer:"einjährig", herkunft:"Zentralsasien",
    kulturdauer:"60 – 90 Tage", notiz:"eine der ältesten Nahrungspfanzen, schnell wachsend, keine bedeutenden Krankheiten und Freßfeinde, geringer Wasser- und Nährstoffbedarf. [Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"minze", kind:"plant", shape:"circle", name:"Mint",
    icon:"🌿", accent:"#3fa06b", plantSpacing:"?", standort:"sonnig-halbschattig, winterhart",
    hoehe:"90", keimfaehigkeit:"2 – 3", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"beifuss", kind:"plant", shape:"circle", name:"Mugwort",
    icon:"🌿", accent:"#5c6b3f", plantSpacing:"?", latin:"Artemisia vulgaris, Korbblütler",
    use:"Küchenkraut", keimung:"Lichtkeimer", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"konigskerze", kind:"plant", shape:"circle", name:"Mullein",
    icon:"🌼", accent:"#d4a72c", plantSpacing:"?", latin:"Verbascum densiflorum, Braunwurzgewächs",
    use:"Wildkraut, Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"senf", kind:"plant", shape:"circle", name:"Mustard",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"kapuzinerkresse", kind:"plant", shape:"circle", name:"Nasturtium",
    icon:"🌺", accent:"#e07a2c", plantSpacing:"30", latin:"Tropaeolum majus, Kapuzinerkressegewächs",
    use:"Salatkraut", sowDepth:"0,5 – 1", standort:"sonnig – halbschattig, winterhart in Zone 7 – 10, frisch, mäßig nährstoffreich, durchlässig, humos, stickstoffarm", hoehe:"300",
    aussaat:"Vorkultur IV – VI, direkt V, blüht VI – IX (eßbar)", keimung:"N1", lebensdauer:"mehrjährig", notiz:"Kapernersatz: unreife Blütenknospen in Essig und Salzlake einlegen, zu viele Blätter zu essen kann den Darm zu sehr reizen."
  },
  {
    id:"okra", kind:"plant", shape:"circle", name:"Okra",
    icon:"🫛", accent:"#4c7a3d", plantSpacing:"60", rowSpacing:"30",
    latin:"Abelmoschus esculentus, Malvengewächs", use:"Gemüse", sowDepth:"1,2", standort:"sonnig, kälteempfindlich (Gewächshaus), nährstoffreich (wöchentlich düngen), humos, regelmäßig gießen, Drainage",
    hoehe:"100 – 200", aussaat:"Vorkultur ab IV, auspflanzen ab V, blüht ab VII, Ernte 2 Wochen nach dem Abblühen", keimung:"10 (22 – 25° C), Dunkelkeimer", keimfaehigkeit:"mind. 5",
    lebensdauer:"einjährig", herkunft:"Äthiopien", topfgroesse:"18 l"
  },
  {
    id:"zwiebel", kind:"plant", shape:"circle", name:"Onion",
    icon:"🧅", accent:"#a0629c", plantSpacing:"4-5 (7-10)", rowSpacing:"25 (-30)",
    latin:"Allium spec., Liliengewächs", use:"Küchengewürz", sowDepth:"2", standort:"wärmeliebend, winterhart",
    aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 8", keimfaehigkeit:"1 – 2", lebensdauer:"zweijährig, Insekten~",
    topfgroesse:"15 cm Bodentiefe"
  },
  {
    id:"zwiebel_lauch_porree", kind:"plant", shape:"circle", name:"Onion: Leek",
    icon:"🥬", accent:"#4c7a3d", plantSpacing:"15", rowSpacing:"20-30",
    sowDepth:"2", standort:"wärmeliebend, winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 10",
    keimfaehigkeit:"1 – 2", lebensdauer:"zweijährig, Insekten~", topfgroesse:"geeignet für Topfkultur."
  },
  {
    id:"zwiebel_schalotten", kind:"plant", shape:"circle", name:"Onion: Shallot",
    icon:"🧅", accent:"#a0629c", plantSpacing:"15-20", rowSpacing:"20-30"
  },
  {
    id:"zwiebel_fruhlingszwiebel", kind:"plant", shape:"circle", name:"Onion: Spring Onion",
    icon:"🧅", accent:"#6b8c3f", plantSpacing:"3 (25)", rowSpacing:"15 (30)",
    sowDepth:"1", keimfaehigkeit:"2 – 3"
  },
  {
    id:"melde", kind:"plant", shape:"circle", name:"Orache",
    icon:"🥬", accent:"#6b8c3f", plantSpacing:"?", latin:"Atriplex hortensis, Gänsefußgewächs",
    use:"Salatkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"oregano", kind:"plant", shape:"circle", name:"Oregano",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"40", rowSpacing:"25 – 30",
    latin:"Origanum vulgare, Lippenblütler", use:"Küchenkraut, Färberpflanze", sowDepth:"Saat nur andrücken", standort:"sonnig, winterhart in Zone 4 – 8, trocken – mäßig frisch, nährstoffreich, durchlässig, kalkhaltig",
    hoehe:"50 – 75", aussaat:"Vorkultur III – V, direkt IV – VI, blüht VI – VIII", keimung:"N1", lebensdauer:"mehrjährig"
  },
  {
    id:"stiefmutterchen", kind:"plant", shape:"circle", name:"Pansy, Wild",
    icon:"🌸", accent:"#7a3fb0", plantSpacing:"?", latin:"Viola tricolor, Veilchengewächs",
    use:"Wildkraut, Heilkraut", standort:"sonnig, nährstoffreich, kalkarm, leicht saure Sand- und Lehmböden, normale Gartenerde", hoehe:"10 – 25", aussaat:"blüht IV – X (essbar)",
    keimfaehigkeit:"3", lebensdauer:"ein- bis zweijährig", notiz:"blüht ab Juni des 1. Jahres o. ab April des 2. Jahres [Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"petersilie", kind:"plant", shape:"circle", name:"Parsley",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"20", rowSpacing:"25 – 40",
    latin:"Petroselinum crispum, Doldenblütler", use:"Küchenkraut", sowDepth:"flache Ablage", standort:"kühleliebend, sonnig - halbschattig, winterhart in Zone 5 – 9, frisch – feucht, nährstoffreich, durchlässig, humos",
    hoehe:"30 – 45", aussaat:"Vorkultur II – V, direkt III – VII, blüht VI – VIII", keimung:"10 – 15, N1", keimfaehigkeit:"2",
    lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"petersilie_wurzelpetersilie", kind:"plant", shape:"circle", name:"Parsley: Root Parsley",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"?", keimfaehigkeit:"2",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"pastinake", kind:"plant", shape:"circle", name:"Parsnip",
    icon:"🥕", accent:"#d8c98f", plantSpacing:"10 (-20)", rowSpacing:"30-40",
    sowDepth:"2", keimfaehigkeit:"1 – 2", topfgroesse:"mind. 40 cm Bodentiefe"
  },
  {
    id:"erdnuss", kind:"plant", shape:"circle", name:"Peanut",
    icon:"🥜", accent:"#b08b2a", plantSpacing:"?", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"erbsen", kind:"plant", shape:"circle", name:"Peas",
    icon:"🟢", accent:"#5c9c4a", plantSpacing:"3-5 (5)", rowSpacing:"40-50 (60-70)",
    sowDepth:"5", standort:"kühleliebend, winterhart", keimfaehigkeit:"2 – 4", lebensdauer:"einjährig, Selbst~",
    topfgroesse:"30 cm Bodentiefe"
  },
  {
    id:"erbsen_zuckererbsen", kind:"plant", shape:"circle", name:"Peas: Snow Peas",
    icon:"🟢", accent:"#5c9c4a", plantSpacing:"5-10", rowSpacing:"40 (60)",
    sowDepth:"5", keimfaehigkeit:"2 – 4", topfgroesse:"5 – 10 l (3 Pflanzen)"
  },
  {
    id:"pfefferminze", kind:"plant", shape:"circle", name:"Peppermint",
    icon:"🌿", accent:"#3fa06b", plantSpacing:"?", latin:"Mentha X piperita, Lippenblütler",
    use:"Küchenkraut", keimfaehigkeit:"2 – 3", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"spitzkohl", kind:"plant", shape:"circle", name:"Pointed Cabbage",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"40-50", keimfaehigkeit:"2 – 4"
  },
  {
    id:"kartoffel", kind:"plant", shape:"circle", name:"Potato",
    icon:"🥔", accent:"#a8792f", plantSpacing:"30", rowSpacing:"50 (-75)",
    sowDepth:"10", standort:"wärmeliebend, bedingt winterhart", lebensdauer:"einjährig"
  },
  {
    id:"kurbis", kind:"plant", shape:"circle", name:"Pumpkin, Squash",
    icon:"🎃", accent:"#d4772c", plantSpacing:"90-120", rowSpacing:"120",
    keimfaehigkeit:"4 – 6"
  },
  {
    id:"portulak", kind:"plant", shape:"circle", name:"Purslane",
    icon:"🥬", accent:"#6b8c3f", plantSpacing:"?", latin:"Portulaca oleracea ssp. sativa,",
    use:"Salatkraut", keimung:"Lichtkeimer", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"rettich", kind:"plant", shape:"circle", name:"Radish",
    icon:"⚪", accent:"#d8d0c0", plantSpacing:"5-10", rowSpacing:"25",
    keimfaehigkeit:"2 – 4"
  },
  {
    id:"radieschen", kind:"plant", shape:"circle", name:"Radish (small)",
    icon:"🫜", accent:"#c0392b", plantSpacing:"3-5", rowSpacing:"10-15",
    sowDepth:"1", keimfaehigkeit:"2 – 4", topfgroesse:"Blumenkasten"
  },
  {
    id:"raps", kind:"plant", shape:"circle", name:"Rapeseed",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", latin:"Brassica napus, Kreuzblütler",
    hoehe:"100 – 150", aussaat:"blüht VI – VII", lebensdauer:"ein- bis zweijährig", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"rotkohl", kind:"plant", shape:"circle", name:"Red Cabbage",
    icon:"🥬", accent:"#6b2a5c", plantSpacing:"50", rowSpacing:"60",
    sowDepth:"2", standort:"kühleliebend, winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 8",
    keimfaehigkeit:"2 – 4", lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"rhabarber", kind:"plant", shape:"circle", name:"Rhubarb",
    icon:"🌱", accent:"#c0392b", plantSpacing:"?", standort:"wärmeliebend",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"spitzwegerich", kind:"plant", shape:"circle", name:"Ribwort Plantain",
    icon:"🌿", accent:"#5c8f5c", plantSpacing:"?", latin:"Plantago lanceolata, Wegerichgewächs",
    use:"Wildkraut, Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"rucola", kind:"plant", shape:"circle", name:"Rocket: Salad Rocket",
    icon:"🥬", accent:"#4a8f5c", plantSpacing:"5-15", rowSpacing:"15-20",
    latin:"Eruca sativa ssp. sativa, Kreuzblütler", use:"Salatkraut", topfgroesse:"Blumenkasten"
  },
  {
    id:"rucola_wilde_rauke", kind:"plant", shape:"circle", name:"Rocket: Wild Rocket",
    icon:"🥬", accent:"#4a8f5c", plantSpacing:"2 – 10", latin:"Diplotaxis tenuifolia, Kreuzblütler",
    use:"Salatkraut", sowDepth:"flache Ablage", standort:"kühleliebend, sonnig – halbschattig, winterhart in Zone 5 – 9, frisch, mäßig nährstoffreich, durchlässig, humos", hoehe:"60",
    aussaat:"Vorkultur II – V, direkt IV – VIII, blüht VI – IX", keimung:"N1", lebensdauer:"mehrjährig", topfgroesse:"Blumenkasten",
    kulturdauer:"30 – 50 Tage"
  },
  {
    id:"rosmarin", kind:"plant", shape:"circle", name:"Rosemary",
    icon:"🌿", accent:"#3f6b5c", plantSpacing:"50", latin:"Rosmarinus officinalis, Lippenblütler",
    use:"Küchenkraut", sowDepth:"flache Ablage", standort:"sonnig, mäßig trocken, nährstoffreich, durchlässig, humos, kalkhaltig, sehr frostempfindlich", hoehe:"50 – 180",
    aussaat:"Vorkultur III – V, direkt IV – VI, blüht V – VII", keimung:"N1, keimt schlecht", lebensdauer:"mehrjährig"
  },
  {
    id:"weinraute", kind:"plant", shape:"circle", name:"Rue",
    icon:"🌿", accent:"#5c8f5c", plantSpacing:"30-40", latin:"Ruta graveolens, Korbblütler",
    use:"Küchenkraut"
  },
  {
    id:"steckrube", kind:"plant", shape:"circle", name:"Rutabaga, Swede",
    icon:"🥔", accent:"#d4c98f", plantSpacing:"8-10 (20-30)", rowSpacing:"20 (30)",
    sowDepth:"2", keimfaehigkeit:"4 – 6"
  },
  {
    id:"salbei", kind:"plant", shape:"circle", name:"Sage",
    icon:"🌿", accent:"#7a9c8a", plantSpacing:"?", latin:"Salvia officinalis, Lippenblütler",
    use:"Küchenkraut", standort:"sonnig, winterhart", hoehe:"60", keimung:"Lichtkeimer",
    keimfaehigkeit:"2 – 3", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"pimpinelle", kind:"plant", shape:"circle", name:"Salad Burnet",
    icon:"🌿", accent:"#5c8f5c", plantSpacing:"?", latin:"Sanguisorba minor, Rosengewächs",
    use:"Salatkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"bohnenkraut", kind:"plant", shape:"circle", name:"Savory, Summer~",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"20 – 25", latin:"Satureja hortensis, Lippenblütler",
    use:"Küchenkraut", sowDepth:"Saat nur andrücken", standort:"sonnig, mäßig trocken – frisch, nährstoffreich, durchlässig, humos, kalkhaltig", hoehe:"50",
    aussaat:"Vorkultur III – V, direkt V - VI, blüht VII – IX", keimung:"N1, Lichtkeimer", keimfaehigkeit:"1 – 2", lebensdauer:"einjährig"
  },
  {
    id:"bohnenkraut_winter", kind:"plant", shape:"circle", name:"Savory, Winter~",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"30", latin:"Satureja montana, Lippenblütler",
    use:"Küchenkraut", sowDepth:"Saat nur andrücken", standort:"sonnig, winterhart in Zone 5 – 8, mäßig trocken, anspruchslos, durchlässig, kalkhaltig", hoehe:"50",
    aussaat:"Vorkultur III – V, direkt IV – VI, blüht VI – VIII", keimung:"N1", lebensdauer:"mehrjährig"
  },
  {
    id:"wirsingkohl", kind:"plant", shape:"circle", name:"Savoy Cabbage",
    icon:"🥬", accent:"#5c8f5c", plantSpacing:"40-60", rowSpacing:"45",
    sowDepth:"2", keimfaehigkeit:"2 – 4"
  },
  {
    id:"schwarzwurzel", kind:"plant", shape:"circle", name:"Scorzonera, Black Salsify",
    icon:"🌱", accent:"#3a2a1c", plantSpacing:"5-8 (10)", rowSpacing:"30",
    sowDepth:"1-2", keimfaehigkeit:"1 – 2"
  },
  {
    id:"meerkohl", kind:"plant", shape:"circle", name:"Sea Kale",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"?", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"lowenmaul", kind:"plant", shape:"circle", name:"Snapdragon",
    icon:"🌸", accent:"#c0392b", plantSpacing:"25", rowSpacing:"25",
    latin:"Antirrhinum majus, Wegerichgewächs", use:"Blüten sind essbar", hoehe:"85", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"sauerampfer", kind:"plant", shape:"circle", name:"Sorrel",
    icon:"🌿", accent:"#4a7a3f", plantSpacing:"20", rowSpacing:"20",
    latin:"Rumex acetosa, Knöterichgewächs", use:"Wildkraut"
  },
  {
    id:"eberraute", kind:"plant", shape:"circle", name:"Southernwood",
    icon:"🌿", accent:"#5c6b3f", plantSpacing:"30-40", latin:"Artemisia abrotanum, Korbblütler",
    use:"Küchenkraut"
  },
  {
    id:"spinat", kind:"plant", shape:"circle", name:"Spinach",
    icon:"🥬", accent:"#3f6b3b", plantSpacing:"10 (7-15)", rowSpacing:"20 (25)",
    sowDepth:"2", standort:"kühleliebend, winterhart, 4 Std. Sonne pro Tag reichen aus.", keimfaehigkeit:"2 – 4", lebensdauer:"einjährig, Selbst~",
    topfgroesse:"10 cm Bodentiefe"
  },
  {
    id:"fruhlings_hungerblumchen", kind:"plant", shape:"circle", name:"Spring Whitlowgrass",
    icon:"🌼", accent:"#e0c94a", plantSpacing:"?", latin:"Draba verna, Erophila verna, Kreuzblütler",
    use:"Frühblüher", standort:"sonnig, trocken, nährstoffarm", hoehe:"5 – 10", aussaat:"blüht III – V (winzig, schließen sich nachts und bei Regen)",
    lebensdauer:"einjährig, Selbst~", notiz:"die Blätter welken, bevor die Früchte reif sind [Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"johanniskraut", kind:"plant", shape:"circle", name:"St. John's Wort",
    icon:"🌼", accent:"#d4a72c", plantSpacing:"?", latin:"Hypericum perforatum,",
    use:"Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"brennessel", kind:"plant", shape:"circle", name:"Stinging Nettle",
    icon:"🌿", accent:"#3f7a3f", plantSpacing:"25", latin:"Urtica dioica U. urens,",
    use:"Wildkraut", sowDepth:"0,5", notiz:"Lichtkeimer, nicht mit Erde bedecken!"
  },
  {
    id:"tripmadam", kind:"plant", shape:"circle", name:"Stone Orpine, Reflexed Stonecrop",
    icon:"🌱", accent:"#9c8f3f", plantSpacing:"?", latin:"Sedum reflexum, Dickblattgewächs",
    use:"Salatkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"erdbeere", kind:"plant", shape:"circle", name:"Strawberry",
    icon:"🍓", accent:"transparent", listAccent:"#ff2020", plantSpacing:"25-30",
    rowSpacing:"60", lebensdauer:"mehrjährig"
  },
  {
    id:"zuckerrube", kind:"plant", shape:"circle", name:"Sugar Beet",
    icon:"🌱", accent:"#8b2a3f", plantSpacing:"20", rowSpacing:"30 - 50",
    keimfaehigkeit:"4"
  },
  {
    id:"sonnenblume", kind:"plant", shape:"circle", name:"Sunflower",
    icon:"🌻", image:"images/sonnenblume.webp", accent:"#e0b32c", plantSpacing:"?",
    keimfaehigkeit:"5", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"estragon", kind:"plant", shape:"circle", name:"Tarragon, Russian",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"?", latin:"Artemisia dracunculus, Korbblütler",
    use:"Küchenkraut", standort:"windgeschützt, feuchter Boden", aussaat:"Aussaat III – VII", keimung:"(18 – 22° C)",
    notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"thymian", kind:"plant", shape:"circle", name:"Thyme",
    icon:"🌿", accent:"#3f6b5c", plantSpacing:"40", rowSpacing:"25 – 30",
    latin:"Thymus spec., Lippenblütler", use:"Küchenkraut", sowDepth:"Saat nur andrücken", standort:"sonnig, winterhart in Zone 5 – 9, trocken – frisch, nährstoffarm, durchlässig, kalkhaltig",
    hoehe:"20 – 30", aussaat:"Vorkultur III – V, direkt IV – VI, blüht VI – VIII", keimung:"N1, Lichtkeimer, keimt schlecht", keimfaehigkeit:"2 – 3",
    lebensdauer:"mehrjährig"
  },
  {
    id:"tomate", kind:"plant", shape:"circle", name:"Tomato",
    icon:"🍅", accent:"transparent", listAccent:"#ff2020", plantSpacing:"50-80",
    rowSpacing:"50", sowDepth:"1", standort:"wärmeliebend, frostempfindlich", aussaat:"6 Wochen vor dem letzten Frost",
    keimung:"7-10", keimfaehigkeit:"4 – 6", lebensdauer:"einjährig, Selbst~", topfgroesse:"10 – 20 l"
  },
  {
    id:"baldrian", kind:"plant", shape:"circle", name:"Valerian",
    icon:"🌸", accent:"#9b7bb8", plantSpacing:"90-100", latin:"Valeriana officinales, Baldriangewächs",
    use:"Heilkraut", keimung:"Lichtkeimer"
  },
  {
    id:"brunnenkresse", kind:"plant", shape:"circle", name:"Watercress",
    icon:"🥬", accent:"#4a8f5c", plantSpacing:"10", rowSpacing:"30"
  },
  {
    id:"weisskohl", kind:"plant", shape:"circle", name:"White Cabbage",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"50", rowSpacing:"60",
    sowDepth:"2", standort:"kühleliebend, winterhart", aussaat:"10 Wochen vor dem letzten Frost", keimung:"5 – 8",
    keimfaehigkeit:"2 – 4", lebensdauer:"zweijährig, Insekten~"
  },
  {
    id:"barlauch", kind:"plant", shape:"circle", name:"Wild Garlic, Ramsons",
    icon:"🌿", accent:"#3f6b3b", plantSpacing:"15-20", latin:"Allium ursinum, Zwiebelgewächs",
    use:"Wildkraut", notiz:"Bis 25 Pflanzen pro m²"
  },
  {
    id:"walderdbeere", kind:"plant", shape:"circle", name:"Wild Strawberry",
    icon:"🍓", accent:"#f66151", plantSpacing:"30", latin:"Fragaria vesca, Rosengewächs",
    use:"Obst", sowDepth:"flache Ablage", standort:"halbschattig – sonnig, winterhart in Zone 4 – 8, frisch, nährstoffreich, durchlässig, humos, braucht Eisen im Boden für aromatische Früchte", hoehe:"20",
    aussaat:"Vorkultur II – IV, direkt IX – III, blüht V – VII, Ernte VII – X", keimung:"K5", lebensdauer:"mehrjährig", notiz:"in eisenarmem Boden werden die Früchte größer."
  },
  {
    id:"winterpostelein", kind:"plant", shape:"circle", name:"Winter Purslane, Miner's Lettuce",
    icon:"🥬", accent:"#3f6b3b", plantSpacing:"?", latin:"Montia perfoliata, Portulakgewächs",
    use:"Salatkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"barbarakraut", kind:"plant", shape:"circle", name:"Wintercress, Yellow Rocket",
    icon:"🥬", accent:"#8fa04a", plantSpacing:"15", rowSpacing:"15-20",
    latin:"Barbarea vulgaris, Kreuzblütler", use:"Salatkraut"
  },
  {
    id:"wermut", kind:"plant", shape:"circle", name:"Wormwood",
    icon:"🌿", accent:"#8a9c7a", plantSpacing:"?", latin:"Artemisia absinthum, Korbblütler",
    use:"Küchenkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"schafgarbe", kind:"plant", shape:"circle", name:"Yarrow",
    icon:"🌼", accent:"#d8d0c0", plantSpacing:"?", latin:"Achillea millefolium, Korbblütler",
    use:"Wildkraut, Heilkraut", notiz:"[Pflanzabstand nicht in CSV enthalten - noch zu recherchieren/ergaenzen]"
  },
  {
    id:"zucchini", kind:"plant", shape:"circle", name:"Zucchini, Courgette",
    icon:"🥒", accent:"#3f6b3b", plantSpacing:"(60-) 100", rowSpacing:"100",
    sowDepth:"2-3", standort:"wärmeliebend, sehr frostempfindlich", keimfaehigkeit:"4 – 6", lebensdauer:"einjährig, Insekten~",
    topfgroesse:"40 – 60 l"
  }
];

// -------------------- BAUMATERIAL (Wege & Mauern) --------------------
// shape:"rect" -> widthCm x heightCm werden direkt verwendet (kein Mittelwert).
// shape:"circle" -> Durchmesser kommt aus diameterCm, ersatzweise widthCm
// (z.B. für runde Trittsteine oder runde Beet-Einfassungen).
// pattern (optional) -> Name eines <pattern>, das im SVG als Füllung dient
// (pavePattern, brickPattern, grassPattern).
const MATERIALS_DATA = [
  {
    id:"amphore", kind:"material", shape:"circle", name:"Amphora",
    icon:"🏺", image:"images/amphore.png", accent:"transparent", listAccent:"#dd7418",
    shape:"circle", diameterCm:92
  },
  {
    id:"mauerziegel_qeer", kind:"material", shape:"rect", name:"Brick Wall, Horizontal",
    icon:"🧱", accent:"#a8502b", shape:"rect", widthCm:25,
    heightCm:12, pattern:"brickPattern", use:"Mauerbau / Einfassung", notiz:"Platzhaltergröße (25×12 cm) für einen Mauer-/Einfassungsstein – bei Bedarf anpassen."
  },
  {
    id:"mauerziegel_hoch", kind:"material", shape:"rect", name:"Brick Wall, Tall",
    icon:"🧱", image:"images/gehweg_grau.png", accent:"#a8502b", shape:"rect",
    widthCm:12, heightCm:25, pattern:"brickPattern", use:"Mauerbau / Einfassung",
    notiz:"Platzhaltergröße (12×25 cm) für einen Mauer-/Einfassungsstein – bei Bedarf anpassen."
  },
  {
    id:"fliegenpilz", kind:"material", shape:"circle", name:"Fly Agaric",
    icon:"🍄", image:"images/fliegenpilz.png", accent:"transparent", listAccent:"#ff2020",
    shape:"circle", diameterCm:10
  },
  {
    id:"brunnen_1", kind:"material", shape:"circle", name:"Fountain",
    icon:"⛲", image:"images/brunnen.png", accent:"transparent", listAccent:"#99c1f1",
    shape:"circle", diameterCm:96
  },
  {
    id:"rasen_fläche", kind:"material", shape:"rect", name:"Lawn Area",
    icon:"🍀", listAccent:"#009701", shape:"rect", widthCm:50,
    heightCm:50, pattern:"grassPattern"
  },
  {
    id:"geweg-stein-rund", kind:"material", shape:"circle", name:"Round Stone Path",
    icon:"🟪", image:"images/gehweg_grau.png", accent:"#046312", shape:"circle",
    diameterCm:30, pattern:"brickPattern"
  },
  {
    id:"brunnen_klein", kind:"material", shape:"circle", name:"Small Fountain",
    icon:"⛲", image:"images/brunnen.png", accent:"transparent", listAccent:"#99c1f1",
    shape:"circle", diameterCm:50, use:"Dekoration"
  },
  {
    id:"pool_klein", kind:"material", shape:"rect", name:"Small Rectangular Pool",
    image:"images/teich_1.png", accent:"#5ab8e2", shape:"rect", widthCm:250,
    heightCm:400
  },
  {
    id:"teich_klein", kind:"material", shape:"circle", name:"Small Round Pond",
    icon:"🟪", image:"images/teich_1.png", accent:"#5ab8e2", shape:"circle",
    diameterCm:250
  },
  {
    id:"geweg-stein", kind:"material", shape:"rect", name:"Stone Path",
    icon:"🟪", image:"images/gehweg_grau.png", accent:"#046312", shape:"rect",
    widthCm:33, heightCm:33, use:"Wegbau", notiz:"Platzhaltergröße (30×30 cm) für einen Gehweg-Pflasterstein – bei Bedarf anpassen."
  },
  {
    id:"holzzaun_quer", kind:"material", shape:"rect", name:"Wooden Fence, Horizontal",
    icon:"🧱", accent:"#865e3c", shape:"rect", widthCm:50,
    heightCm:4
  },
  {
    id:"holzzaun_hoch", kind:"material", shape:"rect", name:"Wooden Fence, Tall",
    icon:"🧱", accent:"#865e3c", shape:"rect", widthCm:4,
    heightCm:50
  }
];
