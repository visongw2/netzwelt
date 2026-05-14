// Article Detail Page JavaScript
// Articles data (same structure as in main.js)
const articlesData = {
    "telekom": {
        "name": "Telekom & Netz",
        "subcategories": {
            "news": {
                "name": "Telekom Neuigkeiten",
                "articles": [
                    {
                        "id": "5g-netzwerk-optimierung-2026",
                        "title": "5G Netzwerk-Optimierung 2026: Praktische Tipps für maximale Geschwindigkeit und Abdeckung",
                        "date": "2026-01-01",
                        "excerpt": "Das Jahr 2026 markiert einen Meilenstein in der 5G-Technologie. Mit der weiteren Verbreitung von 5G Standalone (SA) und fortschrittlichen Optimierungstechniken bietet 5G-Technologie enorme Möglichk...",
                        "file": "5g-netzwerk-optimierung-2026.md",
                        "image": ""
                    },
                    {
                        "id": "5g-sa-standalone-architektur-bei-telekom",
                        "title": "5G-SA: Standalone-Architektur bei der Telekom – Technische Innovation trifft auf Netzmodernisierung",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom rollt die 5G Standalone-Architektur (5G-SA) bundesweit aus und setzt damit neue Maßstäbe in der Mobilfunktechnologie. In diesem umfassenden Artikel erfahren Sie alles über die ...",
                        "file": "5g-sa-standalone-architektur-bei-telekom.md",
                        "image": "images/cat-person-07.jpg"
                    },
                    {
                        "id": "aufladbare-prepaid-karten-so-funktioniert-es",
                        "title": "Aufladbare Prepaid-Karten: So funktioniert das Aufladen – Umfassende Anleitung",
                        "date": "2026-01-01",
                        "excerpt": "Prepaid-Karten sind eine der flexibelsten Arten, Mobilfunkdienste zu nutzen. Doch wie funktioniert das Aufladen genau? Dieser umfassende Artikel bietet eine detaillierte Schritt-für-Schritt-Anleitu...",
                        "file": "aufladbare-prepaid-karten-so-funktioniert-es.md",
                        "image": "images/cat-prepaid-new-04.jpg"
                    },
                    {
                        "id": "blau-mobilfunk-günstige-tarife-im-o2-netz",
                        "title": "blau Mobilfunk: Günstige Tarife im O2-Netz",
                        "date": "2026-01-01",
                        "excerpt": "Suchen Sie einen günstigen Mobilfunktarif ohne versteckte Kosten? **blau Mobilfunk** bietet faire Prepaid-Tarife im starken O2-Netz. In diesem Test zeigen wir, ob sich blau lohnt und wo die Stärken...",
                        "file": "blau-mobilfunk-günstige-tarife-im-o2-netz.md",
                        "image": ""
                    },
                    {
                        "id": "blau-prepaid-tarife-im-detail-test",
                        "title": "blau Prepaid Tarife im Detail-Test",
                        "date": "2026-01-01",
                        "excerpt": "blau Prepaid-Tarife sind bekannt für ihre **Transparenz und Fairness**. In diesem ausführlichen Test prüfen wir alle blau Prepaid-Tarife, messen die Geschwindigkeit im O2-Netz und zeigen Ihnen, wel...",
                        "file": "blau-prepaid-tarife-im-detail-test.md",
                        "image": "images/cat-o2-new-03.jpg"
                    },
                    {
                        "id": "business-tarife-telekom-fuer-unternehmen",
                        "title": "Business-Tarife der Telekom für Unternehmen: Professionelle Mobilfunklösungen im Überblick",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom bietet spezialisierte Business-Tarife für Unternehmen aller Größen an. Von stabilen Mobilfunkverbindungen für mobile Arbeitnehmer bis hin zu komplexen IoT-Lösungen – der Beitra...",
                        "file": "business-tarife-telekom-fuer-unternehmen.md",
                        "image": "images/cat-business-01.jpg"
                    },
                    {
                        "id": "carrier-aggregation-telekom-buendelt-frequenzen",
                        "title": "Carrier Aggregation: Telekom bündelt Frequenzen für maximale Datenraten",
                        "date": "2026-01-01",
                        "excerpt": "Carrier Aggregation (CA) ist eine Schlüsseltechnologie der Telekom, um die Datenraten im Mobilfunknetz drastisch zu erhöhen. Erfahren Sie in diesem umfassenden Artikel, wie die Bündelung mehrerer F...",
                        "file": "carrier-aggregation-telekom-buendelt-frequenzen.md",
                        "image": "images/cat-person-12.jpg"
                    },
                    {
                        "id": "congstar-günstig-telefonieren-im-telekom-netz",
                        "title": "congstar: Günstig telefonieren im Telekom-Netz",
                        "date": "2026-01-01",
                        "excerpt": "Sie suchen nach einem günstigen Mobilfunktarif im **Telekom-Netz**? **congstar** bietet faire Preise für das qualitativ hochwertige Telekom-Netz. In diesem Test zeigen wir, ob sich congstar lohnt.",
                        "file": "congstar-günstig-telefonieren-im-telekom-netz.md",
                        "image": ""
                    },
                    {
                        "id": "congstar-prepaid-die-besten-tarife-im-überblick",
                        "title": "congstar Prepaid: Die besten Tarife im Überblick",
                        "date": "2026-01-01",
                        "excerpt": "congstar Prepaid** bietet flexible Tarife im hochwertigen Telekom-Netz ohne langfristige Vertragsbindung. In diesem Test zeigen wir alle congstar Prepaid-Optionen und helfen Ihnen, den passenden Ta...",
                        "file": "congstar-prepaid-die-besten-tarife-im-überblick.md",
                        "image": ""
                    },
                    {
                        "id": "datenflatrates-2026",
                        "title": "Die besten Datenflatrates 2026 im umfassenden Vergleich: Surfen ohne Grenzen",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: Datenflatrate Vergleich 2026: Finden Sie die beste Datenflatrate für Ihren Bedarf. Preise, Anbieter und Tipps. -->",
                        "file": "datenflatrates-2026.md",
                        "image": ""
                    },
                    {
                        "id": "datenschutz-auf-dem-smartphone",
                        "title": "Datenschutz auf dem Smartphone: Umfassende Tipps für 2026*",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: Smartphone und Mobilfunk: Tipps für den Kauf, Tarifwahl und Optimierung. Alles über Handys und Mobilfunknetze. -->",
                        "file": "datenschutz-auf-dem-smartphone.md",
                        "image": "images/cat-data-new-03.jpg"
                    },
                    {
                        "id": "datenvolumen-sparen-10-praktische-tipps",
                        "title": "Datenvolumen sparen: 10 praktische Tipps für 2026*",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: Das Datenvolumen ist oft der \"Engpass\" in Mobilfunktarifen. Besonders wenn Sie nur ein begrenztes Volumen haben (z.B. 5 GB, 10 GB), kann dieses schnel... -->",
                        "file": "datenvolumen-sparen-10-praktische-tipps.md",
                        "image": "images/cat-privacy-01.jpg"
                    },
                    {
                        "id": "deutsche-telekom-kuendigt-neue-5g-initiative-an",
                        "title": "Deutsche Telekom kündigt neue 5G-Initiative an: Strategie 2026 für ein zukunftssicheres Netz",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom hat im Frühjahr 2026 eine umfassende 5G-Initiative angekündigt, die den weiteren Ausbau des 5G-Netzes, die Implementierung von 5G Standalone (SA) und umfangreiche Investitionen...",
                        "file": "deutsche-telekom-kuendigt-neue-5g-initiative-an.md",
                        "image": "images/cat-5g-network-03.jpg"
                    },
                    {
                        "id": "die-besten-prepaid-tarife-2026",
                        "title": "Die besten Prepaid-Tarife 2026 im Vergleich: Kosten, Leistung und Netzqualität",
                        "date": "2026-01-01",
                        "excerpt": "Prepaid-Tarife bieten Flexibilität ohne lange Vertragsbindung. In diesem umfassenden Vergleich analysieren wir die besten Prepaid-Angebote des Jahres 2026 – mit Fokus auf Netzqualität, Datenvolumen...",
                        "file": "die-besten-prepaid-tarife-2026.md",
                        "image": "images/cat-prepaid-01.jpg"
                    },
                    {
                        "id": "dual-sim-zwei-nummern-auf-einem-handy",
                        "title": "Dual-SIM: Zwei Nummern auf einem Handy",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: SIM-Karten Ratgeber: Von Prepaid bis Vertrag, von eSIM bis physisch. Alles über SIM-Karten und Mobilfunk. -->",
                        "file": "dual-sim-zwei-nummern-auf-einem-handy.md",
                        "image": "images/cat-esim-01.jpg"
                    },
                    {
                        "id": "edge-computing-telekom-baut-rechenzentren-aus",
                        "title": "Edge Computing: Telekom baut Rechenzentren aus für die Zukunft der Telekommunikation",
                        "date": "2026-01-01",
                        "excerpt": "Edge Computing ist eine revolutionäre Technologie, die Rechenleistung näher zum Endnutzer bringt. Die Telekom investiert massiv in den Ausbau von Edge-Rechenzentren, um Latenzzeiten zu minimieren u...",
                        "file": "edge-computing-telekom-baut-rechenzentren-aus.md",
                        "image": "images/cat-network-03.jpg"
                    },
                    {
                        "id": "esim-bei-aelteren-smartphones-nutzen",
                        "title": "eSIM bei älteren Smartphones nutzen",
                        "date": "2026-01-01",
                        "excerpt": "Sie haben ein älteres Smartphone und möchten trotzdem eSIM nutzen? Das ist oft möglich! Erfahren Sie hier, welche älteren Geräte eSIM unterstützen und wie Sie die elektronische SIM-Karte einrichten.",
                        "file": "esim-bei-aelteren-smartphones-nutzen.md",
                        "image": "images/cat-dualsim-01.jpg"
                    },
                    {
                        "id": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung",
                        "title": "eSIM für IoT-Geräte: Die Zukunft der Vernetzung",
                        "date": "2026-01-01",
                        "excerpt": "Die eSIM-Technologie ist nicht nur für Smartphones interessant – sie eröffnet völlig neue Möglichkeiten für das Internet of Things (IoT). Von vernetzten Autos bis hin zu smarten Landwirtschaftssyst...",
                        "file": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung.md",
                        "image": "images/cat-esim-new-01.jpg"
                    },
                    {
                        "id": "esim-komplettguide-2026",
                        "title": "eSIM Komplettguide 2026: Alles über digitale SIM-Karten bei Telekom",
                        "date": "2026-01-01",
                        "excerpt": "Die eSIM (embedded SIM) Revolution hat den Mobilfunkmarkt grundlegend verändert. Im Jahr 2026 ist die eSIM nicht mehr nur ein Nischeprodukt, sondern der Standard für neue Smartphones, Smartwatches ...",
                        "file": "esim-komplettguide-2026.md",
                        "image": ""
                    },
                    {
                        "id": "esim-so-aktivieren-sie-die-elektronische-sim-karte",
                        "title": "So aktivieren Sie eine eSIM: Umfassende Anleitung für alle Geräte",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: eSIM vs. physische SIM-Karte Vergleich 2026. Erfahren Sie Vor- und Nachteile, technische Unterschiede und welche Lösung für Sie am besten geeignet ist. -->",
                        "file": "esim-so-aktivieren-sie-die-elektronische-sim-karte.md",
                        "image": "images/cat-esim-01.jpg"
                    },
                    {
                        "id": "esim-vs-physikalische-sim",
                        "title": "eSIM vs. physikalische SIM-Karte: Umfassender Vergleich 2026",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: eSIM vs. physische SIM-Karte Vergleich 2026. Erfahren Sie Vor- und Nachteile, technische Unterschiede und welche Lösung für Sie am besten geeignet ist. -->",
                        "file": "esim-vs-physikalische-sim.md",
                        "image": ""
                    },
                    {
                        "id": "eu-roaming-bei-prepaid-karten",
                        "title": "EU-Roaming bei Prepaid-Karten: Alle Regeln 2026",
                        "date": "2026-01-01",
                        "excerpt": "Seit 2017 gilt in der EU: Kein Roaming-Aufpreis. Doch wie sieht es bei Prepaid-Karten aus? Wir klären alle Regeln für EU-Roaming bei Prepaid und geben Tipps für die Nutzung im Ausland.",
                        "file": "eu-roaming-bei-prepaid-karten.md",
                        "image": "images/cat-prepaid-01.jpg"
                    },
                    {
                        "id": "freenet-5g-highspeed-internet-unterwegs",
                        "title": "freenet 5G: Highspeed-Internet unterwegs",
                        "date": "2026-01-01",
                        "excerpt": "5G bietet unglaublich schnelle Geschwindigkeiten für unterwegs. In diesem Artikel zeigen wir Ihnen, wie Sie mit **freenet 5G** Highspeed-Internet nutzen können und welche Tarife dafür verfügbar sind.",
                        "file": "freenet-5g-highspeed-internet-unterwegs.md",
                        "image": "images/cat-freenet.jpg"
                    },
                    {
                        "id": "freenet-funk-flexibel-telefonieren-ohne-vertrag",
                        "title": "freenet Funk: Flexibel telefonieren ohne Vertrag",
                        "date": "2026-01-01",
                        "excerpt": "Sie suchen nach einem flexiblen Mobilfunktarif ohne langfristige Vertragsbindung? **freenet Funk** bietet innovative Prepaid-Tarife im O2-Netz. In diesem Test zeigen wir, ob sich freenet Funk lohnt.",
                        "file": "freenet-funk-flexibel-telefonieren-ohne-vertrag.md",
                        "image": "images/cat-network-03.jpg"
                    },
                    {
                        "id": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte",
                        "title": "Telekom Glasfaser-Ausbau: 50 Millionen Haushalte erreicht",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom hat einen historischen Meilenstein erreicht: 50 Millionen Haushalte können nun Glasfaseranschlüsse der Telekom nutzen. Was bedeutet das für die Zukunft des Breitband-Internets ...",
                        "file": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte.md",
                        "image": "images/cat-5g-network-03.jpg"
                    },
                    {
                        "id": "isim-vs-esim-was-ist-der-unterschied",
                        "title": "iSIM vs. eSIM: Was ist der Unterschied? Umfassender Technik-Vergleich 2026",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: eSIM vs. physische SIM-Karte Vergleich 2026. Erfahren Sie Vor- und Nachteile, technische Unterschiede und welche Lösung für Sie am besten geeignet ist. -->",
                        "file": "isim-vs-esim-was-ist-der-unterschied.md",
                        "image": "images/cat-sim-01.jpg"
                    },
                    {
                        "id": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le",
                        "title": "Jugend-Tarife: Telekom bietet Rabatte für junge Leute",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom bietet mit den Young-Tarifen spezielle Konditionen für junge Leute unter 27 Jahren. Erfahren Sie, wie viel Sie sparen können und welcher Young-Tarif der beste für Sie ist.",
                        "file": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le.md",
                        "image": "images/cat-youth-01.jpg"
                    },
                    {
                        "id": "klarmobil-transparente-tarife-im-o2-netz",
                        "title": "klarmobil: Transparente Tarife im O2-Netz",
                        "date": "2026-01-01",
                        "excerpt": "Sie suchen nach einem Mobilfunkanbieter mit **transparenten Tarifen** im O2-Netz? **klarmobil** bietet klare Preise ohne versteckte Kosten. In diesem Test zeigen wir, ob sich klarmobil lohnt und we...",
                        "file": "klarmobil-transparente-tarife-im-o2-netz.md",
                        "image": "images/cat-o2-new-03.jpg"
                    },
                    {
                        "id": "magentaeins-alle-vorteile-im-detail",
                        "title": "MagentaEins: Alle Vorteile des Telekom-Kombiangebots im Detail",
                        "date": "2026-01-01",
                        "excerpt": "MagentaEins ist das Konvergenzangebot der Deutschen Telekom: Wer Mobilfunk, Internet und TV bündelt, erhält dauerhafte Rabatte und exklusive Vorteile. Ob sich das lohnt und für wen es geeignet ist ...",
                        "file": "magentaeins-alle-vorteile-im-detail.md",
                        "image": "images/cat-telekom-01.jpg"
                    },
                    {
                        "id": "magentamobil-tarif-familie-im-ueberblick",
                        "title": "MagentaMobil Tarif Familie im Überblick 2026",
                        "date": "2026-01-01",
                        "excerpt": "Die MagentaMobil-Tariffamilie der Deutschen Telekom bietet für jeden Nutzertyp den passenden Plan. Von S bis XL – hier sind alle Tarife im detaillierten Vergleich mit klarer Empfehlung, wer welchen...",
                        "file": "magentamobil-tarif-familie-im-ueberblick.md",
                        "image": "images/cat-person-14.jpg"
                    },
                    {
                        "id": "massive-mimo-telekom-setzt-auf-neue-antennentechni",
                        "title": "Massive MIMO: Telekom setzt auf neue Antennentechnik",
                        "date": "2026-01-01",
                        "excerpt": "Massive MIMO ist eine Schlüsseltechnologie für die Kapazitätssteigerung in modernen Mobilfunknetzen. Die Deutsche Telekom setzt verstärkt auf diese Technik. Was bedeutet Massive MIMO für Sie als Nu...",
                        "file": "massive-mimo-telekom-setzt-auf-neue-antennentechni.md",
                        "image": "images/cat-person-08.jpg"
                    },
                    {
                        "id": "mobile-daten-optimal-nutzen",
                        "title": "Mobile Daten optimal nutzen: Tipps für längere Laufzeiten und mehr Speed 2026",
                        "date": "2026-01-01",
                        "excerpt": "Datenvolumen ist endlich – und wird schneller verbraucht als gedacht. Mit den richtigen Einstellungen und Strategien lässt sich der mobile Datenverbrauch drastisch reduzieren, ohne auf komfort zu v...",
                        "file": "mobile-daten-optimal-nutzen.md",
                        "image": "images/cat-data-01.jpg"
                    },
                    {
                        "id": "mobile-hotspots-einrichten",
                        "title": "Mobile Hotspots einrichten: Kompletter Guide für unterwegs 2026",
                        "date": "2026-01-01",
                        "excerpt": "Ein mobiler Hotspot verwandelt Ihr Smartphone in einen WLAN-Router und teilt die mobile Datenverbindung mit Laptop, Tablet oder anderen Geräten. Wie Sie das optimal einrichten, welche Einstellungen...",
                        "file": "mobile-hotspots-einrichten.md",
                        "image": "images/cat-battery-01.jpg"
                    },
                    {
                        "id": "mobilfunk-empfang-verbessern",
                        "title": "Mobilfunk-Empfang verbessern: 10 bewährte Methoden 2026",
                        "date": "2026-01-01",
                        "excerpt": "Schlechter Mobilfunkempfang im Keller, im Büro oder auf dem Land ist frustrierend – aber in den meisten Fällen lässt er sich deutlich verbessern. Dieser Guide zeigt technische und praktische Lösung...",
                        "file": "mobilfunk-empfang-verbessern.md",
                        "image": "images/cat-roaming-01.jpg"
                    },
                    {
                        "id": "multi-sim-mehrere-geraete-mit-einer-nummer",
                        "title": "Multi-SIM: Mehrere Geräte mit einer Nummer nutzen",
                        "date": "2026-01-01",
                        "excerpt": "Die Multi-SIM-Funktion erfreut sich wachsender Beliebtheit. Mit einer Multi-SIM können Sie Ihre Mobilfunknummer auf mehreren Geräten gleichzeitig nutzen – sei es Smartphone, Tablet, Smartwatch oder...",
                        "file": "multi-sim-mehrere-geraete-mit-einer-nummer.md",
                        "image": "images/cat-sim-01.jpg"
                    },
                    {
                        "id": "netz-kapazitaet-telekom-verdoppelt-bandbreite",
                        "title": "Netzkapazität: Telekom verdoppelt Bandbreite",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom hat einen massiven Ausbau ihrer Netzkapazität angekündigt. Bis Ende 2026 soll die verfügbare Bandbreite im Mobilfunknetz verdoppelt werden. Was bedeutet das für Sie als Kunde?",
                        "file": "netz-kapazitaet-telekom-verdoppelt-bandbreite.md",
                        "image": "images/cat-person-13.jpg"
                    },
                    {
                        "id": "netzvirtualisierung-telekom-setzt-auf-nfv",
                        "title": "Netzvirtualisierung: Telekom setzt auf NFV und SDN",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom transformiert ihr Netzwerk grundlegend: Network Function Virtualization (NFV) und Software-Defined Networking (SDN) ersetzen teure Hardware durch flexible Software. Was das bed...",
                        "file": "netzvirtualisierung-telekom-setzt-auf-nfv.md",
                        "image": "images/cat-person-09.jpg"
                    },
                    {
                        "id": "neue-familien-tarife-bei-telekom",
                        "title": "Neue Familien-Tarife bei Telekom 2026: Alle Vorteile im Überblick",
                        "date": "2026-01-01",
                        "excerpt": "Mit dem MagentaMobil Family bietet die Deutsche Telekom attraktive Familienpakete, bei denen alle Mitglieder von günstigen Preisen und einem gemeinsamen Datenpool profitieren. Dieser Guide erklärt ...",
                        "file": "neue-familien-tarife-bei-telekom.md",
                        "image": "images/cat-person-15.jpg"
                    },
                    {
                        "id": "o2-5g-netz-abdeckung-und-geschwindigkeit-im-test",
                        "title": "O2 5G Netz: Abdeckung und Geschwindigkeit im Test",
                        "date": "2026-01-01",
                        "excerpt": "O2 hat in den letzten Jahren massiv in den 5G-Ausbau investiert. In diesem Artikel testen wir die O2 5G-Abdeckung, messen die Geschwindigkeiten und zeigen Ihnen, wo das Netz besonders stark ist.",
                        "file": "o2-5g-netz-abdeckung-und-geschwindigkeit-im-test.md",
                        "image": "images/cat-o2-new-02.jpg"
                    },
                    {
                        "id": "o2-tarife-2026-der-große-vergleich",
                        "title": "O2 Tarife 2026: Der große Vergleich",
                        "date": "2026-01-01",
                        "excerpt": "Suchen Sie nach einem neuen Mobilfunktarif bei O2? In diesem ausführlichen Vergleich stellen wir Ihnen die besten O2 Tarife 2026 vor. Wir analysieren Preise, Leistungen und Netzqualität, damit Sie ...",
                        "file": "o2-tarife-2026-der-große-vergleich.md",
                        "image": ""
                    },
                    {
                        "id": "open-ran-telekom-testet-offene-netzarchitektur",
                        "title": "Open RAN: Telekom testet offene Netzarchitektur",
                        "date": "2026-01-01",
                        "excerpt": "Open RAN verspricht, die Mobilfunkbranche zu revolutionieren. Die Deutsche Telekom gehört zu den aktivsten Testern dieser Technologie in Europa. Erfahren Sie, was Open RAN bedeutet und warum es für...",
                        "file": "open-ran-telekom-testet-offene-netzarchitektur.md",
                        "image": "images/cat-person-10.jpg"
                    },
                    {
                        "id": "otelo-günstige-allnet-flat-im-o2-netz",
                        "title": "otelo: Günstige Allnet-Flat im O2-Netz",
                        "date": "2026-01-01",
                        "excerpt": "Sie suchen nach einem günstigen Mobilfunktarif mit Allnet-Flat im O2-Netz? **otelo** bietet attraktive Tarife ohne versteckte Kosten. In diesem Test zeigen wir, ob sich otelo lohnt und wo die Stärk...",
                        "file": "otelo-günstige-allnet-flat-im-o2-netz.md",
                        "image": ""
                    },
                    {
                        "id": "physische-sim-karte-noch-immer-relevant",
                        "title": "Physische SIM-Karte: Noch immer relevant 2026?",
                        "date": "2026-01-01",
                        "excerpt": "Die physische SIM-Karte hat die Mobilkommunikation drei Jahrzehnte lang dominiert. Mit dem Aufstieg der eSIM stellt sich die Frage: Ist der kleine Chip noch zeitgemäß – oder ein Auslaufmodell? Die ...",
                        "file": "physische-sim-karte-noch-immer-relevant.md",
                        "image": "images/cat-person-01.jpg"
                    },
                    {
                        "id": "prepaid-daten-tarife-2026",
                        "title": "Prepaid-Daten-Tarife 2026: Die besten Optionen für flexibles Surfen",
                        "date": "2026-01-01",
                        "excerpt": "Prepaid-Daten-Tarife erfreuen sich wachsender Beliebtheit. Im Jahr 2026 bieten verschiedene Anbieter flexible Optionen für alle, die nicht an einen Mobilfunkvertrag gebunden sein möchten. Erfahren ...",
                        "file": "prepaid-daten-tarife-2026.md",
                        "image": ""
                    },
                    {
                        "id": "prepaid-karten-fuer-kurzreisen",
                        "title": "Prepaid-Karten für Kurzreisen: Der beste Tarif für Ihren Urlaub 2026",
                        "date": "2026-01-01",
                        "excerpt": "Für eine Kurzreise einen neuen Vertrag abzuschließen macht keinen Sinn. Prepaid-Karten bieten die perfekte Lösung für Tagesausflüge, Wochenendreisen und Kurzurlaube – ohne Vertragsbindung und mit v...",
                        "file": "prepaid-karten-fuer-kurzreisen.md",
                        "image": "images/cat-prepaid-new-03.jpg"
                    },
                    {
                        "id": "prepaid-karten-ohne-grundgebuehr",
                        "title": "Prepaid-Karten ohne Grundgebühr: Die besten Angebote 2026",
                        "date": "2026-01-01",
                        "excerpt": "Kein Abo, keine monatliche Pflichtgebühr, keine Kostenfalle – Prepaid-Karten ohne Grundgebühr bieten maximale Freiheit. Wer sein Handy selten nutzt oder nur einen Notfallkontakt braucht, zahlt gena...",
                        "file": "prepaid-karten-ohne-grundgebuehr.md",
                        "image": "images/cat-prepaid-new-06.jpg"
                    },
                    {
                        "id": "prepaid-mit-unbegrenztem-datenvolumen",
                        "title": "Prepaid mit unbegrenztem Datenvolumen: Die besten Flatrates 2026",
                        "date": "2026-01-01",
                        "excerpt": "Unbegrenzte Daten auf Prepaid-Basis – klingt zu gut, um wahr zu sein. Tatsächlich gibt es 2026 mehrere Prepaid-Tarife mit sehr hohem oder unbegrenztem Datenvolumen. Dieser Guide vergleicht die best...",
                        "file": "prepaid-mit-unbegrenztem-datenvolumen.md",
                        "image": "images/cat-prepaid-new-02.jpg"
                    },
                    {
                        "id": "prepaid-pakete-tages--wochen--und-monatsoptionen",
                        "title": "Prepaid-Pakete: Tages-, Wochen- und Monatsoptionen",
                        "date": "2026-01-01",
                        "excerpt": "Manchmal braucht man nur kurzzeitig mobiles Internet oder einen Tarif ohne Langzeitbindung. Prepaid-Pakete bieten flexible Optionen für Tage, Wochen oder Monate. Erfahren Sie hier, welche Pakete si...",
                        "file": "prepaid-pakete-tages--wochen--und-monatsoptionen.md",
                        "image": "images/cat-prepaid-new-03.jpg"
                    },
                    {
                        "id": "prepaid-sim-karten-vergleich",
                        "title": "Prepaid-SIM-Karten im Vergleich 2026",
                        "date": "2026-01-01",
                        "excerpt": "Der Markt für Prepaid-SIM-Karten ist vielfältig wie nie. Im Jahr 2026 buhlen zahlreiche Anbieter mit unterschiedlichen Konzepten um die Gunst der Kunden. Unser großer Vergleich zeigt Ihnen, welche ...",
                        "file": "prepaid-sim-karten-vergleich.md",
                        "image": ""
                    },
                    {
                        "id": "prepaid-tarife-fuer-senioren",
                        "title": "Prepaid-Tarife für Senioren: Die besten Angebote 2026",
                        "date": "2026-01-01",
                        "excerpt": "Senioren haben besondere Anforderungen an ihr Mobilfunkangebot: Einfache Bedienung, transparente Kosten, gute Erreichbarkeit und ein zuverlässiges Netz stehen an erster Stelle. Dieser Guide verglei...",
                        "file": "prepaid-tarife-fuer-senioren.md",
                        "image": "images/cat-prepaid-01.jpg"
                    },
                    {
                        "id": "prepaid-tarife-im-test-stiftung-warentest",
                        "title": "Prepaid-Tarife im Test: Was Stiftung Warentest 2026 empfiehlt",
                        "date": "2026-01-01",
                        "excerpt": "Stiftung Warentest testet regelmäßig Mobilfunktarife und gibt unabhängige Empfehlungen. Dieser Überblick fasst die aktuellen Ergebnisse und Empfehlungen für Prepaid-Tarife 2026 zusammen – und welch...",
                        "file": "prepaid-tarife-im-test-stiftung-warentest.md",
                        "image": "images/cat-prepaid-new-02.jpg"
                    },
                    {
                        "id": "prepaid-vs-postpaid-vor--und-nachteile",
                        "title": "Prepaid vs. Postpaid: Vor- und Nachteile im Vergleich 2026",
                        "date": "2026-01-01",
                        "excerpt": "Prepaid oder Vertrag – diese Frage stellt sich jeder Mobilfunknutzer. Dieser Leitfaden beleuchtet alle Aspekte des Vergleichs und hilft Ihnen, die richtige Entscheidung für Ihre Nutzung zu treffen.",
                        "file": "prepaid-vs-postpaid-vor--und-nachteile.md",
                        "image": "images/cat-prepaid-new-05.jpg"
                    },
                    {
                        "id": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen",
                        "title": "Roaming-Kosten vermeiden: Tipps für Auslandsreisen",
                        "date": "2026-01-01",
                        "excerpt": "Mit dem Smartphone im Ausland surfen – aber wie vermeidet man hohe Roaming-Kosten? Wir zeigen Ihnen, wie Sie im Urlaub oder auf Geschäftsreise Connected bleiben, ohne eine hohe Rechnung zu riskieren.",
                        "file": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen.md",
                        "image": "images/cat-signal-01.jpg"
                    },
                    {
                        "id": "satelliten-internet-telekom-kooperiert-mit-spacex",
                        "title": "Satelliten-Internet: Telekom kooperiert mit SpaceX",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom hat eine Kooperation mit SpaceX angekündigt, um Starlink-Satelliten-Internet nach Deutschland zu bringen. Was bedeutet das für die Breitbandversorgung und welche Kunden profiti...",
                        "file": "satelliten-internet-telekom-kooperiert-mit-spacex.md",
                        "image": "images/cat-5g-tech.jpg"
                    },
                    {
                        "id": "sicheres-mobiles-surfen-vpn-fuer-smartphones",
                        "title": "Sicheres mobiles Surfen: VPN für Smartphones",
                        "date": "2026-01-01",
                        "excerpt": "Öffentliche WLAN-Netzwerke sind praktisch, aber riskant. Mit einem VPN für Ihr Smartphone schützen Sie Ihre Daten vor neugierigen Blicken. Erfahren Sie hier, wie VPNs funktionieren und welche Apps ...",
                        "file": "sicheres-mobiles-surfen-vpn-fuer-smartphones.md",
                        "image": "images/cat-network-04.jpg"
                    },
                    {
                        "id": "sim-karten-formate-von-mini-bis-nano",
                        "title": "SIM-Karten-Formate: Von Mini bis Nano – ein vollständiger Guide",
                        "date": "2026-01-01",
                        "excerpt": "SIM-Karten gibt es in vier Formaten – und welches Ihre SIM hat, ist nicht egal. Dieser Guide erklärt alle Größen, die Unterschiede, Adapter-Lösungen und wie die eSIM alle physischen Formate ablöst.",
                        "file": "sim-karten-formate-von-mini-bis-nano.md",
                        "image": "images/cat-dualsim-01.jpg"
                    },
                    {
                        "id": "sim-karten-portierung-rufnummer-behalten",
                        "title": "SIM-Karten-Portierung: Rufnummer behalten beim Anbieterwechsel",
                        "date": "2026-01-01",
                        "excerpt": "Anbieterwechsel bedeutet nicht automatisch neue Nummer. Die Rufnummernportierung ermöglicht es, Ihre gewohnte Handynummer zu behalten – unabhängig davon, zu welchem Anbieter Sie wechseln. So funkti...",
                        "file": "sim-karten-portierung-rufnummer-behalten.md",
                        "image": "images/cat-esim-new-02.jpg"
                    },
                    {
                        "id": "sim-karten-sperre-so-schuetzen-sie-ihre-karte",
                        "title": "SIM-Karten-Sperre: So schützen Sie Ihre Karte",
                        "date": "2026-01-01",
                        "excerpt": "Eine gesperrte oder verlorene SIM-Karte kann stressig sein. Ob durch Verlust, Diebstahl oder versehentliche Sperrung – wir zeigen Ihnen, wie Sie Ihre SIM-Karte schützen, was Sie im Notfall tun und ...",
                        "file": "sim-karten-sperre-so-schuetzen-sie-ihre-karte.md",
                        "image": "images/cat-esim-new-01.jpg"
                    },
                    {
                        "id": "smartphone-akkulaufzeit-verbessern",
                        "title": "Smartphone-Akkulaufzeit verbessern: 15 effektive Tipps 2026",
                        "date": "2026-01-01",
                        "excerpt": "Ein Smartphone mit gutem Akku macht den Alltag leichter. Mit diesen 15 praxiserprobten Tipps verlängern Sie die Laufzeit deutlich – ohne auf wichtige Funktionen verzichten zu müssen.",
                        "file": "smartphone-akkulaufzeit-verbessern.md",
                        "image": "images/cat-wlan-01.jpg"
                    },
                    {
                        "id": "smartphone-speicher-richtig-nutzen",
                        "title": "Smartphone-Speicher richtig nutzen: Ordnung, Optimierung und Cloud 2026",
                        "date": "2026-01-01",
                        "excerpt": "Immer wieder die Meldung „Speicher fast voll\"? Mit den richtigen Strategien für Dateiverwaltung, Cloud-Nutzung und Speicheroptimierung läuft Ihr Smartphone flüssig – egal ob mit 64 oder 512 GB inte...",
                        "file": "smartphone-speicher-richtig-nutzen.md",
                        "image": "images/cat-data-new-02.jpg"
                    },
                    {
                        "id": "telekom-5g-expansion-2026",
                        "title": "Telekom 5G-Expansion 2026: Netzausbau und neue Standorte",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom treibt den 5G-Ausbau 2026 mit Hochdruck voran. Über 95 % der Bevölkerung sind inzwischen versorgt, neue Frequenzen werden aktiviert und das 5G-Standalone-Netz wächst. Hier erfa...",
                        "file": "telekom-5g-expansion-2026.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-5g-mmwave-tests",
                        "title": "Telekom 5G mmWave Tests: Millimeterwellen-Technologie in Deutschland",
                        "date": "2026-01-01",
                        "excerpt": "5G mmWave (Millimeterwellen) verspricht Gigabit-Datenraten und extrem niedrige Latenz – aber die Technologie hat besondere Eigenschaften und Einsatzszenarien. Hier sind die aktuellen Testergebnisse...",
                        "file": "telekom-5g-mmwave-tests.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-5g-netzausbau-2026",
                        "title": "Telekom 5G-Netzausbau 2026: Alle aktuellen Zahlen und Pläne",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom treibt den 5G-Ausbau 2026 mit Rekordinvestitionen voran. Hier sind alle aktuellen Zahlen, Meilensteine und was Verbraucher in den nächsten Jahren erwarten können.",
                        "file": "telekom-5g-netzausbau-2026.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-berichtet-von-rekordjahr-2025",
                        "title": "Telekom Rekordjahr 2025: Zahlen, Highlights und Ausblick",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom AG schloss das Geschäftsjahr 2025 mit Rekordergebnissen ab. Höchster Umsatz der Unternehmensgeschichte, stärkstes 5G-Wachstum in Deutschland und ein weiterhin dominierender T-M...",
                        "file": "telekom-berichtet-von-rekordjahr-2025.md",
                        "image": "images/cat-person-02.jpg"
                    },
                    {
                        "id": "telekom-bietet-gratis-monat-fuer-neukunden",
                        "title": "Telekom bietet gratis Monat für Neukunden",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom startet eine großangelegte Neukundenaktion. Im Jahr 2026 können interessierte Kunden einen ganzen Monat ihren Wunschtarif kostenlos nutzen. Erfahren Sie hier alle Details zu di...",
                        "file": "telekom-bietet-gratis-monat-fuer-neukunden.md",
                        "image": "images/cat-business-01.jpg"
                    },
                    {
                        "id": "telekom-erhoeht-datenvolumen-ohne-aufpreis",
                        "title": "Telekom erhöht Datenvolumen ohne Aufpreis",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom überrascht ihre Kunden mit einer großzügigen Datenvolumen-Upgrade-Offensive. Ab Sommer 2026 erhalten alle MagentaMobil-Bestandskunden automatisch mehr Datenvolumen – ohne dass ...",
                        "file": "telekom-erhoeht-datenvolumen-ohne-aufpreis.md",
                        "image": "images/cat-tarife-01.jpg"
                    },
                    {
                        "id": "telekom-erreicht-millionen-marke-bei-5g-nutzern",
                        "title": "Telekom erreicht Millionen-Marke bei 5G-Nutzern",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom hat einen wichtigen Meilenstein erreicht: Mehr als 20 Millionen Kunden nutzen aktiv das 5G-Netz. Was bedeutet das für den Mobilfunkmarkt und was kommt als nächstes?",
                        "file": "telekom-erreicht-millionen-marke-bei-5g-nutzern.md",
                        "image": "images/cat-person-01.jpg"
                    },
                    {
                        "id": "telekom-erweitert-netzabdeckung-in-laendlichen-geb",
                        "title": "Telekom erweitert Netzabdeckung in ländlichen Gebieten",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom investiert massiv in die Netzabdeckung ländlicher Gebiete. Mit neuen Mobilfunkstandorten und moderner Technik sollen bald auch abgelegene Regionen mit schnellem Internet versor...",
                        "file": "telekom-erweitert-netzabdeckung-in-laendlichen-geb.md",
                        "image": "images/cat-network-02.jpg"
                    },
                    {
                        "id": "telekom-expandiert-nach-osteuropa",
                        "title": "Telekom expandiert nach Osteuropa: Strategie und Marktpotenzial 2026",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom ist längst kein rein deutsches Unternehmen mehr – über ihre Tochter T-Mobile ist sie in 14 europäischen Ländern aktiv. Die Osteuropa-Expansion ist dabei ein zentraler Wachstums...",
                        "file": "telekom-expandiert-nach-osteuropa.md",
                        "image": "images/cat-person-04.jpg"
                    },
                    {
                        "id": "telekom-fuehrt-flexible-prepaid-optionen-ein",
                        "title": "Telekom führt flexible Prepaid-Optionen ein",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom revolutioniert ihr Prepaid-Angebot. Ab 2026 führt der Marktführer flexible Prepaid-Optionen ein, die sich monatlich anpassen lassen. Keine Laufzeit, keine Kündigungsfrist – und...",
                        "file": "telekom-fuehrt-flexible-prepaid-optionen-ein.md",
                        "image": "images/cat-tarife-01.jpg"
                    },
                    {
                        "id": "telekom-fuehrt-neues-kundenservice-konzept-ein",
                        "title": "Telekom führt neues Kundenservice-Konzept ein",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom revolutioniert ihren Kundenservice. Ab 2026 setzt der Konzern auf ein vollkommen neues Service-Konzept mit KI-gestützten Chatbots, Video-Support und verlängerten Erreichbarkeit...",
                        "file": "telekom-fuehrt-neues-kundenservice-konzept-ein.md",
                        "image": "images/cat-person-03.jpg"
                    },
                    {
                        "id": "telekom-glasfaser-ausbau-2026",
                        "title": "Telekom baut Glasfaser mit Rekordtempo aus",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: Deutsche Telekom: Tarife, Netzabdeckung und Services. Erfahren Sie, warum Telekom der führende Mobilfunkanbieter in Deutschland ist. -->",
                        "file": "telekom-glasfaser-ausbau-2026.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-magenta-mobil-tarife",
                        "title": "Telekom MagentaMobil Tarife 2026: Alles über die populärsten Mobilfunktarife",
                        "date": "2026-01-01",
                        "excerpt": "Die Telekom bietet mit der MagentaMobil-Familie die wohl bekanntesten und am weitesten verbreiteten Mobilfunktarife in Deutschland. Im Jahr 2026 hat die Telekom das Portfolio weiter optimiert, um d...",
                        "file": "telekom-magenta-mobil-tarife.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-q1-2026-zahlen",
                        "title": "Telekom Q1 2026 Zahlen: Rekordumsatz und 5G-Wachstum",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom AG hat für das erste Quartal 2026 starke Zahlen gemeldet. Rekordumsatz, wachsendes 5G-Kundenportfolio und solide Ergebnisse in allen Segmenten – hier sind die wichtigsten Kennz...",
                        "file": "telekom-q1-2026-zahlen.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-senioren-tarif",
                        "title": "MagentaMobil Special: Neuer Tarif für Senioren",
                        "date": "2026-01-01",
                        "excerpt": "<!-- description: Deutsche Telekom: Tarife, Netzabdeckung und Services. Erfahren Sie, warum Telekom der führende Mobilfunkanbieter in Deutschland ist. -->",
                        "file": "telekom-senioren-tarif.md",
                        "image": ""
                    },
                    {
                        "id": "telekom-senkt-preise-fuer-datentarife",
                        "title": "Telekom senkt Preise für Datentarife: Was sich 2026 ändert",
                        "date": "2026-01-01",
                        "excerpt": "In einem zunehmend wettbewerbsintensiven Markt reagiert die Telekom mit Preisanpassungen nach unten: Mehr Datenvolumen für dasselbe Geld und günstigere Einstiegstarife. Was sich konkret ändert – al...",
                        "file": "telekom-senkt-preise-fuer-datentarife.md",
                        "image": "images/cat-youth-01.jpg"
                    },
                    {
                        "id": "telekom-startet-5g-netz-in-weiteren-staedten",
                        "title": "Telekom startet 5G-Netz in weiteren Städten",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom treibt den 5G-Ausbau in Deutschland mit Hochdruck voran. Im Jahr 2026 wurden weitere Großstädte und Ballungsräume mit dem neuen Mobilfunkstandard versorgt. Erfahren Sie hier, w...",
                        "file": "telekom-startet-5g-netz-in-weiteren-staedten.md",
                        "image": "images/cat-5g-network-02.jpg"
                    },
                    {
                        "id": "telekom-tarif-comparator-der-beste-tarif-fuer-sie",
                        "title": "Telekom Tarif-Finder: Der beste Tarif für Sie",
                        "date": "2026-01-01",
                        "excerpt": "Die Deutsche Telekom bietet eine große Auswahl an Tarifen – vom Einsteiger bis zum Premium. Doch welcher Tarif passt wirklich zu Ihnen? Unser Tarif-Finder hilft Ihnen, den perfekten MagentaMobil-Ta...",
                        "file": "telekom-tarif-comparator-der-beste-tarif-fuer-sie.md",
                        "image": "images/cat-family-01.jpg"
                    },
                    {
                        "id": "telekom-testet-6g-technologie-in-deutschland",
                        "title": "Telekom testet 6G-Technologie in Deutschland",
                        "date": "2026-01-01",
                        "excerpt": "Während 5G sich noch im breiten Ausbau befindet, arbeitet die Deutsche Telekom bereits an der Zukunft: 6G. In einem neuen Forschungsprojekt testet der Konzern in Deutschland die sechste Mobilfunkge...",
                        "file": "telekom-testet-6g-technologie-in-deutschland.md",
                        "image": "images/cat-person-05.jpg"
                    },
                    {
                        "id": "telekom-und-huawei-geruechte-ueber-zusammenarbeit",
                        "title": "Telekom und Huawei: Gerüchte über Zusammenarbeit",
                        "date": "2026-01-01",
                        "excerpt": "Immer wieder gibt es Spekulationen über eine mögliche Zusammenarbeit zwischen der Deutschen Telekom und dem chinesischen Technologiekonzern Huawei. Wir ordnen die Gerüchte ein und erklären, was fak...",
                        "file": "telekom-und-huawei-geruechte-ueber-zusammenarbeit.md",
                        "image": "images/cat-5g-tech.jpg"
                    },
                    {
                        "id": "telekom-und-vodafone-vergleichen-netzqualitaet",
                        "title": "Telekom und Vodafone: Netzqualität im Vergleich",
                        "date": "2026-01-01",
                        "excerpt": "Telekom oder Vodafone – welches Netz ist besser? Diese Frage stellen sich Millionen von Mobilfunkkunden in Deutschland. Wir vergleichen die beiden größten Netzbetreiber detailliert in Bezug auf Abd...",
                        "file": "telekom-und-vodafone-vergleichen-netzqualitaet.md",
                        "image": "images/cat-person-06.jpg"
                    },
                    {
                        "id": "vodafone-5g-das-leistet-das-netz-wirklich",
                        "title": "Vodafone 5G: Das leistet das Netz wirklich",
                        "date": "2026-01-01",
                        "excerpt": "Vodafone hat in den letzten Jahren massiv in den 5G-Ausbau investiert. In diesem Artikel testen wir das Vodafone 5G-Netz detailliert und zeigen Ihnen, wie schnell und zuverlässig es wirklich ist.",
                        "file": "vodafone-5g-das-leistet-das-netz-wirklich.md",
                        "image": "images/cat-vodafone.jpg"
                    },
                    {
                        "id": "vodafone-tarife-2026-welcher-ist-der-richtige",
                        "title": "Vodafone Tarife 2026: Welcher ist der Richtige?",
                        "date": "2026-01-01",
                        "excerpt": "Vodafone ist einer der größten Mobilfunkanbieter in Deutschland. In diesem ausführlichen Vergleich stellen wir Ihnen die besten Vodafone Tarife 2026 vor und helfen Ihnen, den passenden Tarif für Ih...",
                        "file": "vodafone-tarife-2026-welcher-ist-der-richtige.md",
                        "image": "images/cat-network-02.jpg"
                    },
                    {
                        "id": "volte-und-vowifi-bei-telekom",
                        "title": "VoLTE und VoWiFi bei Telekom: HD-Telefonie und WLAN-Anrufe erklärt",
                        "date": "2026-01-01",
                        "excerpt": "VoLTE und VoWiFi revolutionieren das Telefonieren: Kristallklare HD-Stimmen, schnellerer Verbindungsaufbau und Telefonieren selbst ohne Mobilfunkempfang. Hier erfahren Sie alles, was Telekom-Kunden...",
                        "file": "volte-und-vowifi-bei-telekom.md",
                        "image": "images/cat-person-11.jpg"
                    },
                    {
                        "id": "wlan-netzwerk-optimieren",
                        "title": "WLAN-Netzwerk optimieren: Der ultimative Guide 2026",
                        "date": "2026-01-01",
                        "excerpt": "Ein langsames oder instabiles WLAN nervt – aber die meisten Probleme lassen sich mit wenigen gezielten Maßnahmen deutlich verbessern. In diesem umfassenden Guide erfahren Sie, wie Sie Ihr WLAN-Netz...",
                        "file": "wlan-netzwerk-optimieren.md",
                        "image": "images/cat-security-01.jpg"
                    }
                ]
            }
        }
    }
};

// ===== 以下是新增的渲染逻辑 =====

// 获取URL参数
function getUrlParameter(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// 根据ID查找文章
function findArticleById(articleId) {
    for (var catKey in articlesData) {
        var category = articlesData[catKey];
        for (var subKey in category.subcategories) {
            var subcategory = category.subcategories[subKey];
            for (var i = 0; i < subcategory.articles.length; i++) {
                if (subcategory.articles[i].id === articleId) {
                    return {
                        article: subcategory.articles[i],
                        categoryKey: catKey,
                        subcategoryKey: subKey,
                        categoryName: category.name,
                        subcategoryName: subcategory.name
                    };
                }
            }
        }
    }
    return null;
}

// 获取所有文章
function getAllArticles() {
    var allArticles = [];
    for (var catKey in articlesData) {
        var category = articlesData[catKey];
        for (var subKey in category.subcategories) {
            var subcategory = category.subcategories[subKey];
            for (var i = 0; i < subcategory.articles.length; i++) {
                var article = subcategory.articles[i];
                allArticles.push({
                    article: article,
                    categoryKey: catKey,
                    subcategoryKey: subKey,
                    categoryName: category.name,
                    subcategoryName: subcategory.name
                });
            }
        }
    }
    return allArticles;
}

// 计算阅读时间
function calculateReadingTime(text) {
    var wordsPerMinute = 200;
    var words = text.trim().split(/\s+/).length;
    var minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(minutes, 1);
}

// 生成标签
function generateTags(article, categoryName) {
    var tags = [];
    
    // 添加分类作为标签
    if (categoryName) {
        tags.push(categoryName);
    }
    
    // 根据文章ID添加相关标签
    var id = article.id.toLowerCase();
    if (id.includes('5g')) tags.push('5G');
    if (id.includes('esim')) tags.push('eSIM');
    if (id.includes('telekom')) tags.push('Telekom');
    if (id.includes('prepaid')) tags.push('Prepaid');
    if (id.includes('tarif')) tags.push('Tarife');
    if (id.includes('datenvolumen')) tags.push('Datenvolumen');
    if (id.includes('router') || id.includes('fritz')) tags.push('Router');
    if (id.includes('samsung') || id.includes('galaxy')) tags.push('Samsung');
    if (id.includes('iphone') || id.includes('apple')) tags.push('iPhone');
    if (id.includes('android')) tags.push('Android');
    if (id.includes('netz') || id.includes('mobilfunk')) tags.push('Mobilfunk');
    if (id.includes('glassfaser')) tags.push('Glasfaser');
    if (id.includes('hotspot')) tags.push('Hotspot');
    if (id.includes('roaming')) tags.push('Roaming');
    
    // 如果没有生成足够标签，添加一些通用标签
    if (tags.length < 3) {
        tags.push('Mobilfunk');
        tags.push('Telekommunikation');
    }
    
    return tags;
}

// 加载并渲染文章
async function loadArticle() {
    var articleId = getUrlParameter('id');
    
    if (!articleId) {
        showError('Keine Artikel-ID in der URL gefunden.');
        return;
    }
    
    // 更新页面标题
    document.title = 'Artikel - NetzWelt';
    
    // 使用搜索功能加载文章
    await loadArticleWithSearch(articleId);
}

// 渲染文章头部（标题、日期、图片等）
function renderArticleHeader(article, categoryName, subcategoryName) {
    var container = document.getElementById('articleContent');
    if (!container) {
        console.error('articleContent container not found');
        return;
    }
    
    var headerHtml = '';
    headerHtml += '<div class="article-header">';
    headerHtml += '<span class="category-badge">' + categoryName + ' / ' + subcategoryName + '</span>';
    headerHtml += '<h1>' + article.title + '</h1>';
    headerHtml += '<div class="article-meta">';
    headerHtml += '<span class="date"><i class="fas fa-calendar-alt"></i> ' + article.date + '</span>';
    headerHtml += '<span class="reading-time"><i class="fas fa-clock"></i> <span id="readingTime">...</span> Min. Lesezeit</span>';
    headerHtml += '</div>';
    headerHtml += '</div>';
    
    if (article.image) {
        headerHtml += '<div class="article-featured-image">';
        headerHtml += '<img src="' + article.image + '" alt="' + article.title + '" loading="lazy">';
        headerHtml += '</div>';
    }
    
    headerHtml += '<div class="article-body" id="articleBody">';
    headerHtml += '<p class="article-excerpt">' + article.excerpt + '</p>';
    headerHtml += '<div class="article-content markdown-body">Lade Inhalt...</div>';
    headerHtml += '</div>';
    
    container.innerHTML = headerHtml;
    
    // 计算并显示阅读时间
    if (article.content) {
        var readingTime = calculateReadingTime(article.content);
        document.getElementById('readingTime').textContent = readingTime;
    } else {
        // 估算阅读时间（基于摘要）
        var readingTime = calculateReadingTime(article.excerpt + ' '.repeat(50));
        document.getElementById('readingTime').textContent = readingTime;
    }
}

// 渲染文章侧边栏
function renderArticleSidebar(article, categoryKey, subcategoryKey, categoryName, subcategoryName) {
    // 更新侧边栏信息 - 直接传入分类名称，避免依赖DOM元素
    var sidebarDate = document.getElementById('sidebarDate');
    var sidebarCategory = document.getElementById('sidebarCategory');
    var sidebarReadingTime = document.getElementById('sidebarReadingTime');
    
    if (sidebarDate) sidebarDate.textContent = article.date || '-';
    if (sidebarCategory) sidebarCategory.textContent = categoryName || '-';
    if (sidebarReadingTime) {
        var readingTime = document.getElementById('readingTime')?.textContent || '5';
        sidebarReadingTime.textContent = readingTime + ' Min. Lesezeit';
    }
    
    // 加载相关文章
    loadRelatedArticles(article.id, categoryKey, subcategoryKey);
    
    // 加载热门文章
    loadPopularArticles();
    
    // 生成标签
    generateAndRenderTags(article, categoryName || '');
}

// 加载相关文章
function loadRelatedArticles(currentArticleId, categoryKey, subcategoryKey) {
    var container = document.getElementById('relatedArticles');
    if (!container) return;
    
    var related = [];
    
    // 获取同子分类的文章
    if (articlesData[categoryKey] && 
        articlesData[categoryKey].subcategories[subcategoryKey]) {
        var articles = articlesData[categoryKey].subcategories[subcategoryKey].articles;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id !== currentArticleId) {
                related.push(articles[i]);
            }
        }
    }
    
    // 如果相关文章不足，从同分类其他子分类补充
    if (related.length < 5 && articlesData[categoryKey]) {
        for (var subKey in articlesData[categoryKey].subcategories) {
            if (subKey !== subcategoryKey) {
                var articles = articlesData[categoryKey].subcategories[subKey].articles;
                for (var i = 0; i < articles.length && related.length < 5; i++) {
                    if (articles[i].id !== currentArticleId && 
                        !related.find(r => r.id === articles[i].id)) {
                        related.push(articles[i]);
                    }
                }
            }
        }
    }
    
    // 渲染相关文章
    var html = '';
    for (var i = 0; i < Math.min(related.length, 5); i++) {
        html += '<div class="related-item">';
        html += '<a href="article.html?id=' + related[i].id + '">' + related[i].title + '</a>';
        html += '<div class="related-date"><i class="fas fa-calendar-alt"></i> ' + related[i].date + '</div>';
        html += '</div>';
    }
    
    container.innerHTML = html || '<p style="color: #666; font-size: 0.9rem;">Keine weiteren Artikel gefunden.</p>';
}

// 加载热门文章
function loadPopularArticles() {
    var container = document.getElementById('popularArticles');
    if (!container) return;
    
    // 获取所有文章并随机选取（实际应用中应基于浏览量）
    var allArticles = getAllArticles();
    var shuffled = allArticles.sort(function() { return 0.5 - Math.random(); });
    var popular = shuffled.slice(0, 5);
    
    var html = '';
    for (var i = 0; i < popular.length; i++) {
        html += '<div class="popular-item">';
        html += '<span class="popular-number">' + (i + 1) + '</span>';
        html += '<a href="article.html?id=' + popular[i].article.id + '">' + popular[i].article.title + '</a>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// 生成并渲染标签
function generateAndRenderTags(article, categoryName) {
    var container = document.getElementById('tagCloud');
    if (!container) return;
    
    var tags = generateTags(article, categoryName);
    
    var html = '';
    for (var i = 0; i < tags.length; i++) {
        html += '<a href="category.html?cat=telekom" class="tag">' + tags[i] + '</a>';
    }
    
    container.innerHTML = html;
}

// 分享文章
function shareArticle(platform) {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    var shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
            break;
        case 'facebook':
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
            break;
        case 'linkedin':
            shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
            break;
        case 'whatsapp':
            shareUrl = 'https://wa.me/?text=' + title + '%20' + url;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// 复制链接
function copyLink() {
    var url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            alert('Link wurde in die Zwischenablage kopiert!');
        });
    } else {
        // Fallback
        var input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('Link wurde in die Zwischenablage kopiert!');
    }
}

// 加载Markdown内容（优先使用内嵌内容，无需fetch）
function loadMarkdownContent(article) {
    // 如果有内嵌的内容，直接使用
    if (article.content) {
        console.log('Using embedded content for:', article.title);
        renderMarkdown(article.content);
        return;
    }
    
    // 否则尝试加载外部文件（需要HTTP服务器）
    var markdownPath = '/articles/' + article.file;
    
    fetch(markdownPath)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            return response.text();
        })
        .then(function(markdownText) {
            renderMarkdown(markdownText);
        })
        .catch(function(error) {
            console.error('Error loading markdown:', error);
            var contentDiv = document.querySelector('#articleBody .markdown-body');
            if (contentDiv) {
                contentDiv.innerHTML = '<p class="error">Fehler beim Laden des Artikelinhalts: ' + error.message + '</p>' +
                    '<p>Die Datei <code>' + markdownPath + '</code> konnte nicht geladen werden.</p>' +
                    '<p><strong>Hinweis:</strong> Bitte öffnen Sie diese Seite über einen Web-Server (z.B. <code>python -m http.server</code>), ' +
                    'da <code>file://</code> Protokoll keine externen Dateien laden darf.</p>';
            }
        });
}

// 使用marked.js渲染Markdown
function renderMarkdown(markdownText) {
    var contentDiv = document.querySelector('#articleBody .markdown-body');
    if (!contentDiv) {
        console.error('Markdown content container not found');
        return;
    }
    
    if (typeof marked !== 'undefined') {
        contentDiv.innerHTML = marked.parse(markdownText);
    } else {
        // 如果marked.js未加载，显示原始markdown
        contentDiv.innerHTML = '<pre>' + escapeHtml(markdownText) + '</pre>';
        console.warn('marked.js not loaded, showing raw markdown');
    }
}

// 提交评论
function submitComment(event) {
    event.preventDefault();
    
    var name = document.getElementById('commentName').value;
    var email = document.getElementById('commentEmail').value;
    var commentText = document.getElementById('commentText').value;
    var saveInfo = document.getElementById('saveInfo').checked;
    
    if (!name || !email || !commentText) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return false;
    }
    
    // 保存用户信息（如果勾选）
    if (saveInfo) {
        localStorage.setItem('commentName', name);
        localStorage.setItem('commentEmail', email);
    }
    
    // 创建新评论（Demo模式，不会真正保存）
    var newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `
        <div class="comment-avatar">
            <i class="fas fa-user-circle"></i>
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${escapeHtml(name)}</span>
                <span class="comment-date">Gerade eben</span>
            </div>
            <p class="comment-text">${escapeHtml(commentText)}</p>
            <div class="comment-actions">
                <a href="#" onclick="replyToComment('${escapeHtml(name)}'); return false;"><i class="fas fa-reply"></i> Antworten</a>
            </div>
        </div>
    `;
    
    // 添加到评论列表顶部
    var commentsList = document.getElementById('commentsList');
    if (commentsList) {
        commentsList.insertBefore(newComment, commentsList.firstChild);
    }
    
    // 更新评论数
    var commentCount = document.getElementById('commentCount');
    if (commentCount) {
        var count = parseInt(commentCount.textContent) + 1;
        commentCount.textContent = count;
    }
    
    // 清空表单
    document.getElementById('commentForm').reset();
    
    // 显示成功消息
    alert('Vielen Dank für Ihren Kommentar! Er wird vor der Veröffentlichung geprüft.');
    
    return false;
}

// 回复评论
function replyToComment(authorName) {
    var commentText = document.getElementById('commentText');
    if (commentText) {
        commentText.value = '@' + authorName + ' ';
        commentText.focus();
        document.querySelector('.comment-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// 动态更新 Meta Description
function updateMetaDescription(description) {
    if (!description) return;
    
    // 移除现有的 meta description 标签
    var existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) {
        existingMeta.setAttribute('content', description);
    } else {
        // 创建新的 meta description 标签
        var meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
    }
    
    // 同时更新 Open Graph 和 Twitter Card 的 description
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', description);
    }
    
    var twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', description);
    }
}

// 转义HTML特殊字符
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 显示错误信息
function showError(message) {
    var container = document.getElementById('articleContent');
    if (container) {
        container.innerHTML = '<div class="error-message"><h2>Fehler</h2><p>' + message + '</p>' +
            '<p><a href="index.html">← Zurück zur Startseite</a></p></div>';
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
    
    // 加载保存的用户信息
    var savedName = localStorage.getItem('commentName');
    var savedEmail = localStorage.getItem('commentEmail');
    if (savedName) document.getElementById('commentName').value = savedName;
    if (savedEmail) document.getElementById('commentEmail').value = savedEmail;
    if (savedName && savedEmail) document.getElementById('saveInfo').checked = true;
});

// ===== 文章搜索功能 =====
var articleCache = {}; // 缓存已加载的文章

// 从文件名推断分类
function inferCategoryFromFile(fileName) {
    var name = fileName.toLowerCase();
    if (name.includes('telekom') || name.includes('magenta') || 
        name.includes('vodafone') || name.includes('o2')) {
        return { cat: 'telekom', catName: 'Telekom & Netz' };
    }
    return { cat: 'mobilfunk', catName: 'Mobilfunk & SIM' };
}

// 从文件名推断子分类
function inferSubcategoryFromFile(fileName) {
    var name = fileName.toLowerCase();
    if (name.includes('news') || name.includes('meldung')) {
        return { sub: 'news', subName: 'Telekom Neuigkeiten' };
    }
    if (name.includes('tech') || name.includes('5g') || name.includes('netz') ||
        name.includes('glasfaser') || name.includes('antenne') || name.includes('latenz') ||
        name.includes('frequenz') || name.includes('router')) {
        return { sub: 'technology', subName: 'Netztechnologie' };
    }
    if (name.includes('tarif') || name.includes('preis') || name.includes('angebot') ||
        name.includes('magentaeins') || name.includes('mobil') || name.includes('vertrag')) {
        return { sub: 'tarife', subName: 'Tarife & Preise' };
    }
    if (name.includes('sim') || name.includes('esim') || name.includes('isim') ||
        name.includes('dual') || name.includes('multi-sim') || name.includes('nano') ||
        name.includes('portier')) {
        return { sub: 'sim-types', subName: 'SIM-Karten Typen' };
    }
    if (name.includes('prepaid') || name.includes('postpaid') || name.includes('auflad')) {
        return { sub: 'prepaid', subName: 'Prepaid & Verträge' };
    }
    if (name.includes('tipp') || name.includes('spare') || name.includes('datenschutz') ||
        name.includes('roaming') || name.includes('wlan') || name.includes('akku') ||
        name.includes('hotspot') || name.includes('mobilfunk-empfang') || name.includes('speicher')) {
        return { sub: 'tips', subName: 'Nutzungstipps' };
    }
    return { sub: 'news', subName: 'Telekom Neuigkeiten' };
}

// 从Markdown文件内容提取元数据
function extractMetadata(markdownText, fileName) {
    var lines = markdownText.split('\n');
    var metadata = {
        title: '',
        date: '',
        category: '',
        subcategory: '',
        subcategoryName: ''
    };
    
    // 从Markdown标题提取标题（第一个#开头的行）
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.startsWith('# ')) {
            metadata.title = line.substring(2).trim();
            break;
        }
    }
    
    // 从文件名推断分类
    var catInfo = inferCategoryFromFile(fileName);
    var subInfo = inferSubcategoryFromFile(fileName);
    metadata.category = catInfo.cat;
    metadata.categoryName = catInfo.catName;
    metadata.subcategory = subInfo.sub;
    metadata.subcategoryName = subInfo.subName;
    
    // 从文件名提取日期（尝试从文件名中提取或使用默认值）
    var dateMatch = fileName.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
        metadata.date = dateMatch[1] + '-' + dateMatch[2] + '-' + dateMatch[3];
    } else {
        metadata.date = '2026-01-01';
    }
    
    return metadata;
}

// 搜索文章（通过遍历所有已缓存的文章或加载文件）
async function searchArticles(query) {
    // 首先在已缓存的文章中查找
    for (var id in articleCache) {
        var article = articleCache[id];
        if (article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.id.toLowerCase().includes(query.toLowerCase())) {
            return article;
        }
    }
    return null;
}

// 获取文章文件列表（从URL参数推断，或使用已知列表）
function getArticleFileName(articleId) {
    // 如果articlesData中有记录，使用记录的文件名
    var result = findArticleById(articleId);
    if (result) {
        return 'public/articles/' + result.article.file;
    }
    
    // 否则使用ID作为文件名
    return 'public/articles/' + articleId + '.md';
}

// 加载文章内容（带搜索备用方案）
async function loadArticleWithSearch(articleId) {
    var result = findArticleById(articleId);
    
    if (result) {
        // 在articlesData中找到，使用原有逻辑
        loadArticleContent(result.article, result.categoryName, result.subcategoryName, result.categoryKey, result.subcategoryKey);
        return;
    }
    
    // 未找到，尝试从文件加载
    var fileName = articleId + '.md';
    var markdownPath = '/articles/' + fileName;
    
    try {
        var response = await fetch(markdownPath);
        if (!response.ok) {
            showError('Artikel mit ID "' + articleId + '" nicht gefunden.');
            return;
        }
        
        var markdownText = await response.text();
        var metadata = extractMetadata(markdownText, fileName);
        var article = {
            id: articleId,
            title: metadata.title || articleId,
            date: metadata.date,
            file: fileName,
            excerpt: metadata.title || articleId
        };
        
        // 缓存文章
        articleCache[articleId] = article;
        
        loadArticleContent(article, metadata.categoryName, metadata.subcategoryName, metadata.category, metadata.subcategory);
        renderMarkdownWithId(markdownText);
        
    } catch (error) {
        showError('Artikel mit ID "' + articleId + '" nicht gefunden.');
    }
}

// 加载文章内容
function loadArticleContent(article, categoryName, subcategoryName, categoryKey, subcategoryKey) {
    renderArticleHeader(article, categoryName, subcategoryName);
    renderArticleSidebar(article, categoryKey, subcategoryKey, categoryName, subcategoryName);
    loadMarkdownContent(article);
    
    // 动态更新 Meta Description
    updateMetaDescription(article.excerpt);
}

// 渲染Markdown（用于搜索到的文章）
function renderMarkdownWithId(markdownText) {
    var contentDiv = document.querySelector('#articleBody .markdown-body');
    if (!contentDiv) return;
    
    if (typeof marked !== 'undefined') {
        contentDiv.innerHTML = marked.parse(markdownText);
    } else {
        contentDiv.innerHTML = '<pre>' + escapeHtml(markdownText) + '</pre>';
    }
}


