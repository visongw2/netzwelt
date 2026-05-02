# Deutsche Telekom & Mobilfunk Blog

Ein persönlicher Blog über Deutsche Telekom und Mobilfunk-Themen, komplett auf Deutsch.

## Funktionen

✅ **Artikel-Übersicht** - Startseite mit allen Artikeln
✅ **Artikel-Detailseite** - Vollständige Markdown-Rendering
✅ **Tag-Kategorisierung** - Filterung nach Kategorien
✅ **Über mich Seite** - Informationen über den Blogger
✅ **Impressum** - Rechtlich erforderlich in Deutschland
✅ **Datenschutzerklärung** - DSGVO-konform
✅ **Markdown-Support** - Artikel in Markdown geschrieben
✅ **Responsive Design** - Funktioniert auf allen Geräten

## Dateistruktur

```
blog/
├── index.html              # Startseite (Artikel-Liste)
├── article.html            # Artikel-Detailseite
├── about.html              # Über mich Seite
├── impressum.html         # Impressum (Pflicht)
├── datenschutz.html       # Datenschutzerklärung (Pflicht)
├── server.py               # Einfacher HTTP-Server zum Testen
├── css/
│   └── style.css         # Stylesheet
├── js/
│   ├── main.js           # JavaScript für Startseite
│   ├── article.js        # JavaScript für Artikel-Seite
│   └── marked.min.js     # Markdown-Bibliothek (über CDN)
└── articles/
    ├── telekom-5g-netzausbau-2026.md
    ├── prepaid-sim-karten-vergleich.md
    ├── telekom-magenta-mobil-tarife.md
    ├── esim-vs-physikalische-sim.md
    └── datenflatrates-2026.md
```

## Verwendung

### Methode 1: Einfacher HTTP-Server (Empfohlen)

1. Öffnen Sie ein Terminal im `blog`-Ordner
2. Führen Sie aus:
   ```bash
   python -m http.server 8000
   ```
3. Öffnen Sie im Browser: `http://localhost:8000`

### Methode 2: Direkt in Browser öffnen

Öffnen Sie `index.html` direkt im Browser (Achtung: Markdown-Laden funktioniert evtl. nicht wegen CORS).

### Methode 3: Online deployen

Laden Sie den `blog`-Ordner auf einen Webserver hoch.

## Neue Artikel hinzufügen

1. Erstellen Sie eine neue `.md` Datei im `articles/`-Ordner
2. Fügen Sie den Artikel zur `articles`-Array in `js/main.js` und `js/article.js` hinzu:

```javascript
{
    id: 'ihre-eindeutige-id',
    title: 'Ihr Artikel-Titel',
    date: '2026-04-01',
    tags: ['Tag1', 'Tag2'],
    excerpt: 'Kurze Zusammenfassung des Artikels...',
    file: 'ihre-datei.md'
}
```

## Anpassung

### Farben ändern

Bearbeiten Sie `css/style.css` und ändern Sie die CSS-Variablen:

```css
:root {
    --primary-color: #002D6D;    /* Hauptfarbe (Telekom-Blau) */
    --secondary-color: #E20074;  /* Akzentfarbe (Telekom-Magenta) */
    --text-color: #333;           /* Textfarbe */
    --light-bg: #f5f5f5;        /* Hintergrund */
}
```

### Impressum und Datenschutz anpassen

Bearbeiten Sie `impressum.html` und `datenschutz.html` mit Ihren echten Daten.

## Wichtige Hinweise

⚠️ **Impressum**: Muss echte Daten des Betreibers enthalten (Name, Adresse, Kontakt)
⚠️ **Datenschutz**: Muss an die eigene Website angepasst werden
⚠️ **Markdown**: Erfordert einen Webserver für korrektes Laden (kein file:// Protokoll)

## Technologien

- HTML5
- CSS3 (mit CSS-Variablen)
- Vanilla JavaScript
- [Marked.js](https://marked.js.org/) für Markdown-Rendering
- Responsive Web Design

## Lizenz

Dieses Template steht unter der MIT-Lizenz.

---

Erstellt am: 2. Mai 2026
Autor: WorkBuddy AI Assistant
