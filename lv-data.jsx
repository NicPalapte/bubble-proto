// lv-data.jsx — fixture data for the LV viewer

const LV = {
  project: 'Hellerwiese',
  projects: ['Hellerwiese', 'Quartier Süd', 'Erweiterung Werk Nord'],
  lot: 'Los 1 · Rohbau',
  lots: ['Los 1 · Rohbau', 'Los 2 · Ausbau', 'Los 3 · TGA', 'Los 4 · Außenanlagen'],
  version: 'LV_v3.7',
  versions: ['LV_v3.7 (aktuell)', 'LV_v3.6', 'LV_v3.5', 'LV_v3.0 (Vergabe)'],
  sections: [
    { id:'01', code:'01', label:'Erdarbeiten',         status:'geprüft', volume: 1625,
      positions:[
        { code:'01.010', label:'Oberboden abtragen',        einheit:'m³', menge:340,  ep:6.40,  beton:null,    expo:[],            status:'geprüft', tragend:null,
          langtext:'Mutterboden bis Tiefe **30 cm** abtragen, abfahren und auf der Baustelle zwischenlagern. Boden gemäß **DIN 18915** vor Verdichtung und Vermischung schützen. Wiederverwendung für Außenanlagen vorgesehen.',
          besonderheiten:['Abtrag 30 cm','Zwischenlagerung','Wiederverwendung'] },
        { code:'01.020', label:'Baugrubenaushub',           einheit:'m³', menge:1200, ep:9.80,  beton:null,    expo:[],            status:'geprüft', tragend:null,
          langtext:'Aushub der Baugrube in **Bodenklasse 4** gemäß **DIN 18300**. Böschungswinkel 60° nach DIN 4124. Aushubmaterial zur Wiederverwendung **separieren** (Sand, Kies, Lehm). Sohle waagrecht und tragfähig herstellen.',
          besonderheiten:['Bodenklasse 4','Böschung 60°'] },
        { code:'01.030', label:'Baugrubensicherung',        einheit:'m²', menge:85,   ep:48.20, beton:null,    expo:[],            status:'geprüft', tragend:null,
          langtext:'Trägerbohlwand zur Sicherung der Baugrube an der **Grundstücksgrenze Nord**. Stahlträger HEB 200, e=2,00 m, Ausfachung mit Holzbohlen 80 mm. Rückverankerung gemäß statischer Berechnung.',
          besonderheiten:['HEB 200','Rückverankerung'] },
      ] },
    { id:'02', code:'02', label:'Bodenplatte',         status:'geprüft', volume: 504,
      positions:[
        { code:'02.010', label:'Bodenplatte C30/37 d=30 cm',einheit:'m³', menge:420,  ep:178.60,beton:'C30/37',expo:['XC2','XD1'], status:'geprüft', tragend:true,  dicke:'30 cm',
          langtext:'Stahlbeton-Bodenplatte **C30/37**, Dicke **30 cm**, monolithisch hergestellt. Expositionsklassen **XC2, XD1**. **WA-Beton** (wasserundurchlässig) gemäß DIN 1045-2, Rissbreitenbeschränkung wk ≤ 0,2 mm. Zementart **CEM III/A 42,5 N**. Bewehrung Mattenstahl BSt 500 M, oberes und unteres Lager separat.',
          besonderheiten:['WA-Beton','CEM III/A','wk ≤ 0,2 mm','Bewehrung BSt 500 M'] },
        { code:'02.020', label:'Sauberkeitsschicht C12/15', einheit:'m³', menge:42,   ep:142.40,beton:'C12/15',expo:[],            status:'geprüft', tragend:false, dicke:'10 cm',
          langtext:'Unbewehrte Sauberkeitsschicht **C12/15** unter Bodenplatte, Dicke **10 cm**. Oberfläche **abgezogen**, eben und tragfähig zur Aufnahme der Abdichtung. Konsistenzklasse F3.',
          besonderheiten:['unbewehrt','F3'] },
        { code:'02.030', label:'Zulage Körnung 0/16',       einheit:'m³', menge:42,   ep:12.80, beton:'C30/37',expo:[],            status:'offen', tragend:null,
          langtext:'Zulage zu Position 02.010 für **Größtkorn 0/16 mm** anstelle 0/32 mm. Begründung: hohe Bewehrungsdichte im Anschlussbereich Außenwand, **Mindestabstand** der Bewehrung nicht unterschritten.',
          besonderheiten:['0/16 statt 0/32'] },
      ] },
    { id:'03', code:'03', label:'Außenwände',          status:'offen',   volume: 478,
      positions:[
        { code:'03.010', label:'Außenwand C30/37 tragend',  einheit:'m³', menge:248,  ep:187.40,beton:'C30/37',expo:['XC1'],       status:'geprüft', tragend:true,  dicke:'15–25 cm', hoehe:'3–4 m',
          langtext:'Tragende Stahlbeton-Außenwand **C30/37**, Wanddicke **15–25 cm** variabel je Statik. Geschosshöhe **3,00–4,00 m**. Expositionsklasse **XC1** (außen, geschützt). Oberfläche schalungsglatt, Bauteilfugen mit Quellfugenband. Bewehrung gemäß Bewehrungsplan **B-AW-03**.',
          besonderheiten:['Quellfugenband','schalungsglatt','Plan B-AW-03'] },
        { code:'03.020', label:'Außenwand nichttragend',    einheit:'m³', menge:134,  ep:182.10,beton:'C30/37',expo:['XC1'],       status:'offen',   tragend:false, dicke:'15–25 cm',
          langtext:'**Nichttragende** Außenwand C30/37, Dicke 15–25 cm. **Mineralwollestreifen 30 mm** als Abstellung im Kopfbereich gegen Decke. Keine kraftschlüssige Verbindung — Lastabtrag über tragende Konstruktion.',
          besonderheiten:['Mineralwollestreifen 30 mm','Abstellung Kopfbereich'] },
        { code:'03.030', label:'Außenwand SB2 C30/37',      einheit:'m³', menge:96,   ep:214.80,beton:'C30/37',expo:['XC1','XC3'], status:'offen',   tragend:true,  dicke:'25 cm',
          langtext:'Außenwand mit **Sichtbetonklasse SB2** nach DBV-Merkblatt. Einzelbeschränkung **Nr. 4** (geringe Anforderungen an Porigkeit). Schalung sägerau, Schalstöße geplant. Mock-up 1×1 m vor Ausführung erforderlich.',
          besonderheiten:['Sichtbeton SB2','Einzelbeschr. Nr. 4','Mock-up 1×1 m'] },
      ] },
    { id:'04', code:'04', label:'Innenwände & Stützen', status:'offen',  volume: 534,
      positions:[
        { code:'04.010', label:'Wände EG–3.OG C30/37',      einheit:'m³', menge:312,  ep:172.40,beton:'C30/37',expo:['XC1'],            status:'geprüft', tragend:true,  dicke:'25 cm',
          langtext:'Tragende Innenwände aller Geschosse, **C30/37**, **d=25 cm**. Rissbreitenbeschränkung **wk = 0,4 mm**. Nominale Betondeckung **c_nom ≥ 25 mm**. Oberflächenqualität für Verputz geeignet.',
          besonderheiten:['wk = 0,4 mm','c_nom ≥ 25 mm'] },
        { code:'04.020', label:'Wände/Brüstungen HS-Zement',einheit:'m³', menge:178,  ep:198.60,beton:'C30/37',expo:['XC3','XD1','XS1'],status:'offen',   tragend:true, dicke:'25 cm',
          langtext:'Wände und Brüstungen mit **HS-Zement** (hoher Sulfatwiderstand) wegen Exposition **XS1**. Größtkorn **0/32**. Erhöhter Sulfatangriff durch Tausalz im Spritzwasserbereich.',
          besonderheiten:['HS-Zement','Körnung 0/32','Spritzwasser'] },
        { code:'04.030', label:'Stahlbetonstützen C35/45',  einheit:'m³', menge:44,   ep:241.20,beton:'C35/45',expo:['XC1','XC3'],     status:'geprüft', tragend:true, dicke:'30×30 cm',
          langtext:'Punktförmige tragende Stützen **C35/45**, Querschnitt 30×30 cm, geschossweise. Erhöhte Festigkeit wegen **konzentrierter Lasten**. Bewehrung als Bewehrungskorb vorgefertigt.',
          besonderheiten:['Bewehrungskorb','konzentrierte Lasten'] },
      ] },
    { id:'05', code:'05', label:'Decken',               status:'geprüft', volume: 740,
      positions:[
        { code:'05.010', label:'Decke EG C30/37 d=22 cm',   einheit:'m³', menge:380,  ep:188.40,beton:'C30/37',expo:['XC1'], status:'geprüft', tragend:true, dicke:'22 cm',
          langtext:'Stahlbetondecke über EG, **C30/37**, **d=22 cm**, inklusive **Unterzüge** UZ-1 bis UZ-6. Spannrichtung gemäß Statik. Oberfläche maschinell geglättet für Estrichaufnahme.',
          besonderheiten:['Unterzüge UZ-1…6','maschinell geglättet'] },
        { code:'05.020', label:'Decke OG C30/37 d=20 cm',   einheit:'m³', menge:360,  ep:184.60,beton:'C30/37',expo:['XC1'], status:'geprüft', tragend:true, dicke:'20 cm',
          langtext:'Stahlbetondecken aller Obergeschosse, **C30/37**, **d=20 cm**. Aussparungen für Installation gemäß Plan **D-OG**. Oberfläche maschinell geglättet.',
          besonderheiten:['Aussparungen Plan D-OG'] },
      ] },
    { id:'06', code:'06', label:'Treppen',              status:'entwurf', volume: 86,
      positions:[
        { code:'06.010', label:'Treppe EG → 1.OG',          einheit:'St', menge:4,    ep:2480, beton:'C30/37', expo:['XC1'], status:'entwurf', tragend:true,
          langtext:'Stahlbetontreppe **einläufig gewendelt**, Geschosshöhe 3,20 m, **18 Steigungen**. Schallentkopplung über elastische Auflagerung (Schöck Tronsole oder gleichwertig).',
          besonderheiten:['Schöck Tronsole','schallentkoppelt'] },
        { code:'06.020', label:'Treppe 1.OG → DG',          einheit:'St', menge:3,    ep:2280, beton:'C30/37', expo:['XC1'], status:'entwurf', tragend:true,
          langtext:'Stahlbetontreppe **einläufig gerade**, Geschosshöhe 3,00 m, 17 Steigungen. Schallentkopplung wie 06.010.',
          besonderheiten:['schallentkoppelt'] },
        { code:'06.030', label:'Podestplatten',             einheit:'m²', menge:38,   ep:128.40,beton:'C30/37', expo:['XC1'], status:'entwurf', tragend:true,
          langtext:'Vorgefertigte Podestplatten C30/37, Dicke 16 cm. **Auflagerung elastisch** auf Wandscheiben. Anschluss an Treppenläufe kraftschlüssig.',
          besonderheiten:['Auflagerung elastisch'] },
      ] },
    { id:'07', code:'07', label:'Dach',                 status:'entwurf', volume: 220,
      positions:[
        { code:'07.010', label:'Dachscheibe C30/37 d=24 cm',einheit:'m³', menge:180, ep:192.40, beton:'C30/37', expo:['XC3'], status:'entwurf', tragend:true, dicke:'24 cm',
          langtext:'Dachscheibe **C30/37**, d=24 cm. Expositionsklasse **XC3** (mäßige Feuchte). Gefälle 2 % über Aufbeton zum Dachablauf. Wärmedämmung bauseits.',
          besonderheiten:['Gefälle 2 %','Aufbeton'] },
        { code:'07.020', label:'Attika monolithisch',       einheit:'m³', menge:40,  ep:228.60, beton:'C30/37', expo:['XC4','XF1'], status:'entwurf', tragend:false,
          langtext:'Monolithisch hergestellte Attika **C30/37**, Höhe 50 cm. Expositionsklassen **XC4 + XF1** (Frost ohne Tausalz). Kein Stoß zum Dach, **Bewehrungsanschluss durchlaufend**.',
          besonderheiten:['XF1','durchlaufende Bewehrung'] },
      ] },
  ],
};

// Bubble layout (manual, hand-tuned for a 7-section LV)
// x/y are in % of canvas, r is the base radius
const BUBBLE_LAYOUT = {
  '01': { x:.22, y:.62, r:48 },
  '02': { x:.38, y:.36, r:78 },
  '03': { x:.62, y:.46, r:96 },
  '04': { x:.78, y:.72, r:74 },
  '05': { x:.42, y:.78, r:84 },
  '06': { x:.15, y:.32, r:36 },
  '07': { x:.86, y:.30, r:54 },
};

Object.assign(window, { LV, BUBBLE_LAYOUT });

// ──────────────────────────────────────────────────────────────
// Team roster + deterministic defaults for assignees + tasks
// ──────────────────────────────────────────────────────────────
const TEAM = [
  { id:'jt', name:'J. Thaler',    role:'PL',  color:'#2563eb' },
  { id:'mk', name:'M. Köhler',    role:'BIM', color:'#0891b2' },
  { id:'rh', name:'R. Hoffmann',  role:'Statik', color:'#7c3aed' },
  { id:'cs', name:'C. Schmid',    role:'Kalk.', color:'#0f8a4c' },
  { id:'aw', name:'A. Werner',    role:'AVA', color:'#d97706' },
];

// Deterministic hash → assignee fallback so unassigned entries still have one
function hashStr(s) { let h=0; for (let i=0;i<s.length;i++) h = (h*31 + s.charCodeAt(i)) >>> 0; return h; }
function defaultAssignee(id) {
  // explicit overrides for a few sections / positions
  const OV = {
    '01':'cs', '02':'rh', '03':'mk', '04':'rh', '05':'mk', '06':'aw', '07':'mk',
    '02.010':'rh', '02.030':'aw',
    '03.010':'mk', '03.020':'aw', '03.030':'jt',
    '04.020':'rh', '04.030':'rh',
    '07.020':'jt',
  };
  if (OV[id]) return OV[id];
  return TEAM[hashStr(id) % TEAM.length].id;
}

// Seed tasks for a handful of sections + positions so the panel feels alive
function defaultTasks(id) {
  const T = {
    '02': [
      { id:'t-02-1', title:'Bewehrungspläne mit Statik abstimmen', done:true,  who:'rh' },
      { id:'t-02-2', title:'WA-Beton Nachweis einholen',           done:false, who:'mk' },
    ],
    '03': [
      { id:'t-03-1', title:'Sichtbeton-Muster 1×1 m beauftragen',  done:false, who:'jt' },
      { id:'t-03-2', title:'Schalungskonzept freigeben',           done:false, who:'mk' },
      { id:'t-03-3', title:'Mengenermittlung prüfen',              done:true,  who:'cs' },
    ],
    '03.010': [
      { id:'t-03010-1', title:'Bewehrungsplan B-AW-03 prüfen',     done:true,  who:'rh' },
      { id:'t-03010-2', title:'Quellfugenband Hersteller wählen',  done:false, who:'mk' },
    ],
    '03.020': [
      { id:'t-03020-1', title:'Klärung: kraftschlüssige Auflagerung nötig?', done:false, who:'rh' },
    ],
    '04.020': [
      { id:'t-04020-1', title:'Sulfatgehalt Boden prüfen lassen',  done:false, who:'rh' },
    ],
    '05': [
      { id:'t-05-1', title:'Unterzüge UZ-1…6 freigeben',           done:true,  who:'rh' },
    ],
    '06': [
      { id:'t-06-1', title:'Tronsole-Auflager mit Bauleiter klären', done:false, who:'aw' },
      { id:'t-06-2', title:'Treppengeometrie endgültig',             done:false, who:'jt' },
    ],
  };
  return T[id] || [];
}

Object.assign(window, { TEAM, defaultAssignee, defaultTasks });

// ──────────────────────────────────────────────────────────────
// Seed notes — includes Bieterfragen, Hinweise, Klärungen, Risiken
// ──────────────────────────────────────────────────────────────
function defaultNotes(id) {
  const N = {
    '01.030': [
      { id:'n-seed-01030-1', type:'bieterfrage', status:'offen',
        text:'Ist die Rückverankerung der Trägerbohlwand im Bauvolumen enthalten oder als gesonderte Position abzurechnen?',
        who:'aw', date:'2026-04-22' },
    ],
    '02.010': [
      { id:'n-seed-02010-1', type:'bieterfrage', status:'beantwortet',
        text:'Welche WU-Richtlinie soll angewendet werden — DAfStb WU 2017 oder Fassung 2003?',
        antwort:'Anwendung DAfStb WU-Richtlinie 2017, Beanspruchungsklasse 1, Nutzungsklasse A.',
        antwortDate:'2026-04-29',
        who:'mk', date:'2026-04-25' },
      { id:'n-seed-02010-2', type:'risiko', status:'offen',
        text:'Grundwasserstand laut Baugrundgutachten 0,8 m unter Sohle — bei starkem Niederschlag kritisch. Wasserhaltung bauseits?',
        who:'rh', date:'2026-05-02' },
    ],
    '02.030': [
      { id:'n-seed-02030-1', type:'klaerung', status:'offen',
        text:'Mehrkosten für Körnung 0/16 gegenüber 0/32 mit AG vereinbaren.',
        who:'aw', date:'2026-05-05' },
    ],
    '03.010': [
      { id:'n-seed-03010-1', type:'hinweis', status:'offen',
        text:'Bewehrungsplan B-AW-03 liegt in Revision C vor — bei Ausführung neueste Version verwenden.',
        who:'mk', date:'2026-05-08' },
    ],
    '03.020': [
      { id:'n-seed-03020-1', type:'bieterfrage', status:'offen',
        text:'Mineralwollestreifen Klemmfilz oder lose verlegt? Brandschutzanforderung A1 bestätigt?',
        who:'aw', date:'2026-05-10' },
      { id:'n-seed-03020-2', type:'klaerung', status:'offen',
        text:'Lastabtragung im Detailpunkt Anschluss Decke prüfen — Statik klärt mit Tragwerksplaner.',
        who:'rh', date:'2026-05-11' },
    ],
    '03.030': [
      { id:'n-seed-03030-1', type:'bieterfrage', status:'offen',
        text:'Wo wird das Mock-up 1×1 m platziert und wann muss es vorliegen? Kosten inklusive Abriss enthalten?',
        who:'jt', date:'2026-05-12' },
      { id:'n-seed-03030-2', type:'hinweis', status:'offen',
        text:'Sichtbeton SB2 erfordert Schalungs-Eignungsnachweis vor Beginn.',
        who:'mk', date:'2026-05-12' },
    ],
    '04.020': [
      { id:'n-seed-04020-1', type:'bieterfrage', status:'offen',
        text:'Liegt aktuelles Boden­gutachten zur Sulfatbelastung vor? Wert in mg/l SO4 erbeten.',
        who:'rh', date:'2026-05-14' },
      { id:'n-seed-04020-2', type:'risiko', status:'offen',
        text:'HS-Zement: Lieferzeit derzeit 6–8 Wochen — Vorlauf in Terminplan berücksichtigen.',
        who:'mk', date:'2026-05-15' },
    ],
    '04.030': [
      { id:'n-seed-04030-1', type:'hinweis', status:'offen',
        text:'Bewehrungskörbe werden vorgefertigt geliefert — Kranlogistik einplanen.',
        who:'cs', date:'2026-05-16' },
    ],
    '05.010': [
      { id:'n-seed-05010-1', type:'bieterfrage', status:'beantwortet',
        text:'Glättgrad der Deckenoberfläche — flügelgeglättet oder abgezogen für Estrichaufnahme?',
        antwort:'Maschinell geglättet, OF-Klasse 3 nach DIN 18202, zur Aufnahme von Verbundestrich.',
        antwortDate:'2026-05-04',
        who:'mk', date:'2026-05-01' },
    ],
    '06.010': [
      { id:'n-seed-06010-1', type:'klaerung', status:'offen',
        text:'Tronsole-Type B oder Q? Schallschutzanforderung gemäß DIN 4109 oder VDI 4100 SSt II?',
        who:'rh', date:'2026-05-17' },
      { id:'n-seed-06010-2', type:'bieterfrage', status:'offen',
        text:'Anzahl Steigungen verbindlich 18 oder Anpassung an Rohbaumaß zulässig?',
        who:'jt', date:'2026-05-18' },
    ],
    '07.020': [
      { id:'n-seed-07020-1', type:'risiko', status:'offen',
        text:'Attika mit XF1 ohne Schutzlage — bei Frühfrost Gefahr von Abplatzungen. Witterungsschutz vorsehen.',
        who:'mk', date:'2026-05-19' },
      { id:'n-seed-07020-2', type:'hinweis', status:'offen',
        text:'Durchlaufende Bewehrung Attika→Dach: Stoßausbildung gemäß Detail D-AT-02.',
        who:'rh', date:'2026-05-19' },
    ],
    // section-level
    '03': [
      { id:'n-seed-03-1', type:'allgemein', status:'offen',
        text:'Schalungskonzept Außenwände wird durch GU bis 30.05. eingereicht.',
        who:'jt', date:'2026-05-15' },
    ],
    '06': [
      { id:'n-seed-06-1', type:'bieterfrage', status:'offen',
        text:'Treppen als Fertigteile oder Ortbeton — beide Varianten anbietbar?',
        who:'cs', date:'2026-05-13' },
    ],
  };
  return N[id] || [];
}

Object.assign(window, { defaultNotes });
