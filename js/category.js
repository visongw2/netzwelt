// Category Page JavaScript

// Same articles data as in main.js
const articles = {
    "telekom": {
        "name": "Telekom & Netz",
        "subcategories": {
            "news": {
                "name": "Telekom Neuigkeiten",
                "articles": [
                    {
                        "id": "deutsche-telekom-kuendigt-neue-5g-initiative-an",
                        "title": "Deutsche Telekom kündigt neue 5G-Initiative an",
                        "date": "2026-02-01",
                        "excerpt": "Die Deutsche Telekom hat heute eine neue 5G-Initiative angekündigt, die Millionen von Kunden zugutekommen wird.",
                        "file": "deutsche-telekom-kuendigt-neue-5g-initiative-an.md",
                        "image": "https://picsum.photos/400/300?random=9698"
                    },
                    {
                        "id": "telekom-erreicht-millionen-marke-bei-5g-nutzern",
                        "title": "Telekom erreicht Millionen-Marke bei 5G-Nutzern",
                        "date": "2024-06-16",
                        "excerpt": "Die Deutsche Telekom kann eine neue Millionen-Marke bei 5G-Nutzern verkünden.",
                        "file": "telekom-erreicht-millionen-marke-bei-5g-nutzern.md",
                        "image": "https://picsum.photos/400/300?random=4882"
                    },
                    {
                        "id": "telekom-erweitert-netzabdeckung-in-laendlichen-geb",
                        "title": "Telekom erweitert Netzabdeckung in ländlichen Gebieten",
                        "date": "2024-08-16",
                        "excerpt": "Die Deutsche Telekom investiert massiv in die Netzabdeckung ländlicher Gebiete.",
                        "file": "telekom-erweitert-netzabdeckung-in-laendlichen-geb.md",
                        "image": "https://picsum.photos/400/300?random=8654"
                    },
                    {
                        "id": "telekom-und-huawei-geruechte-ueber-zusammenarbeit",
                        "title": "Telekom und Huawei: Gerüchte über Zusammenarbeit",
                        "date": "2024-11-06",
                        "excerpt": "Es gibt Gerüchte über eine mögliche Zusammenarbeit zwischen der Deutschen Telekom und Huawei.",
                        "file": "telekom-und-huawei-geruechte-ueber-zusammenarbeit.md",
                        "image": "https://picsum.photos/400/300?random=6663"
                    },
                    {
                        "id": "telekom-startet-5g-netz-in-weiteren-staedten",
                        "title": "Telekom startet 5G-Netz in weiteren Städten",
                        "date": "2026-03-27",
                        "excerpt": "Die Deutsche Telekom hat den 5G-Ausbau in weiteren deutschen Städten gestartet.",
                        "file": "telekom-startet-5g-netz-in-weiteren-staedten.md",
                        "image": "https://picsum.photos/400/300?random=1563"
                    },
                    {
                        "id": "telekom-berichtet-von-rekordjahr-2025",
                        "title": "Telekom berichtet von Rekordjahr 2025",
                        "date": "2025-05-23",
                        "excerpt": "Die Deutsche Telekom blickt auf ein erfolgreiches Geschäftsjahr 2025 zurück.",
                        "file": "telekom-berichtet-von-rekordjahr-2025.md",
                        "image": "https://picsum.photos/400/300?random=4669"
                    },
                    {
                        "id": "telekom-fuehrt-neues-kundenservice-konzept-ein",
                        "title": "Telekom führt neues Kundenservice-Konzept ein",
                        "date": "2024-09-28",
                        "excerpt": "Die Deutsche Telekom modernisiert ihr Kundenservice mit KI-gestützten Lösungen.",
                        "file": "telekom-fuehrt-neues-kundenservice-konzept-ein.md",
                        "image": "https://picsum.photos/400/300?random=5453"
                    },
                    {
                        "id": "telekom-expandiert-nach-osteuropa",
                        "title": "Telekom expandiert nach Osteuropa",
                        "date": "2025-07-10",
                        "excerpt": "Die Deutsche Telekom plant die Expansion ihres Netzes in osteuropäische Märkte.",
                        "file": "telekom-expandiert-nach-osteuropa.md",
                        "image": "https://picsum.photos/400/300?random=5131"
                    },
                    {
                        "id": "telekom-testet-6g-technologie-in-deutschland",
                        "title": "Telekom testet 6G-Technologie in Deutschland",
                        "date": "2026-02-10",
                        "excerpt": "Die Deutsche Telekom hat begonnen, erste 6G-Technologien in Deutschland zu testen.",
                        "file": "telekom-testet-6g-technologie-in-deutschland.md",
                        "image": "https://picsum.photos/400/300?random=2319"
                    },
                    {
                        "id": "telekom-und-vodafone-vergleichen-netzqualitaet",
                        "title": "Telekom und Vodafone vergleichen Netzqualität",
                        "date": "2025-10-24",
                        "excerpt": "Ein unabhängiger Test vergleicht die Netzqualität von Telekom und Vodafone.",
                        "file": "telekom-und-vodafone-vergleichen-netzqualitaet.md",
                        "image": "https://picsum.photos/400/300?random=1019"
                    }
                ]
            },
            "technology": {
                "name": "Netztechnologie",
                "articles": [
                    {
                        "id": "5g-sa-standalone-architektur-bei-telekom",
                        "title": "5G-SA: Standalone-Architektur bei Telekom",
                        "date": "2024-11-13",
                        "excerpt": "Die Deutsche Telekom rollt die 5G Standalone-Architektur bundesweit aus.",
                        "file": "5g-sa-standalone-architektur-bei-telekom.md",
                        "image": "https://picsum.photos/400/300?random=1170"
                    },
                    {
                        "id": "massive-mimo-telekom-setzt-auf-neue-antennentechni",
                        "title": "Massive MIMO: Telekom setzt auf neue Antennentechnik",
                        "date": "2025-04-18",
                        "excerpt": "Massive MIMO-Technologie wird von der Deutschen Telekom eingeführt.",
                        "file": "massive-mimo-telekom-setzt-auf-neue-antennentechni.md",
                        "image": "https://picsum.photos/400/300?random=822"
                    },
                    {
                        "id": "netzvirtualisierung-telekom-setzt-auf-nfv",
                        "title": "Netzvirtualisierung: Telekom setzt auf NFV",
                        "date": "2026-04-05",
                        "excerpt": "Network Function Virtualization wird vom Telekom-Netz zum Standard.",
                        "file": "netzvirtualisierung-telekom-setzt-auf-nfv.md",
                        "image": "https://picsum.photos/400/300?random=5065"
                    },
                    {
                        "id": "edge-computing-telekom-baut-rechenzentren-aus",
                        "title": "Edge Computing: Telekom baut Rechenzentren aus",
                        "date": "2025-10-06",
                        "excerpt": "Edge Computing wird von der Telekom für geringe Latenzzeiten genutzt.",
                        "file": "edge-computing-telekom-baut-rechenzentren-aus.md",
                        "image": "https://picsum.photos/400/300?random=6059"
                    },
                    {
                        "id": "open-ran-telekom-testet-offene-netzarchitektur",
                        "title": "Open RAN: Telekom testet offene Netzarchitektur",
                        "date": "2024-01-02",
                        "excerpt": "Die Deutsche Telekom testet Open RAN-Technologie in ihrem Netz.",
                        "file": "open-ran-telekom-testet-offene-netzarchitektur.md",
                        "image": "https://picsum.photos/400/300?random=5453"
                    },
                    {
                        "id": "volte-und-vowifi-bei-telekom",
                        "title": "VoLTE und VoWiFi bei Telekom",
                        "date": "2025-02-27",
                        "excerpt": "Voice over LTE und Voice over WiFi werden bei Telekom ausführlich erklärt.",
                        "file": "volte-und-vowifi-bei-telekom.md",
                        "image": "https://picsum.photos/400/300?random=6257"
                    },
                    {
                        "id": "carrier-aggregation-telekom-buendelt-frequenzen",
                        "title": "Carrier Aggregation: Telekom bündelt Frequenzen",
                        "date": "2025-06-27",
                        "excerpt": "Carrier Aggregation wird von der Telekom genutzt, um die Datenraten zu erhöhen.",
                        "file": "carrier-aggregation-telekom-buendelt-frequenzen.md",
                        "image": "https://picsum.photos/400/300?random=2826"
                    },
                    {
                        "id": "netz-kapazitaet-telekom-verdoppelt-bandbreite",
                        "title": "Netz-Kapazität: Telekom verdoppelt Bandbreite",
                        "date": "2025-04-28",
                        "excerpt": "Die Deutsche Telekom hat die Netzkapazität in Großstädten verdoppelt.",
                        "file": "netz-kapazitaet-telekom-verdoppelt-bandbreite.md",
                        "image": "https://picsum.photos/400/300?random=3521"
                    },
                    {
                        "id": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte",
                        "title": "Glasfaser-Ausbau: Telekom erreicht 50 Mio. Haushalte",
                        "date": "2024-06-24",
                        "excerpt": "Die Deutsche Telekom hat ihr Ziel von 50 Millionen Glasfaser-Haushalten erreicht.",
                        "file": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte.md",
                        "image": "https://picsum.photos/400/300?random=9547"
                    },
                    {
                        "id": "satelliten-internet-telekom-kooperiert-mit-spacex",
                        "title": "Satelliten-Internet: Telekom kooperiert mit SpaceX",
                        "date": "2024-04-05",
                        "excerpt": "Die Deutsche Telekom prüft eine Kooperation mit SpaceX für Satelliten-Internet.",
                        "file": "satelliten-internet-telekom-kooperiert-mit-spacex.md",
                        "image": "https://picsum.photos/400/300?random=2209"
                    }
                ]
            },
            "tarife": {
                "name": "Tarife & Preise",
                "articles": [
                    {
                        "id": "magentamobil-tarif-familie-im-ueberblick",
                        "title": "MagentaMobil Tarif-Familie im Überblick",
                        "date": "2025-02-19",
                        "excerpt": "Alle MagentaMobil Tarife der Deutschen Telekom im detaillierten Überblick.",
                        "file": "magentamobil-tarif-familie-im-ueberblick.md",
                        "image": "https://picsum.photos/400/300?random=7678"
                    },
                    {
                        "id": "telekom-senkt-preise-fuer-datentarife",
                        "title": "Telekom senkt Preise für Datentarife",
                        "date": "2026-04-30",
                        "excerpt": "Die Deutsche Telekom hat die Preise für ihre Datentarife gesenkt.",
                        "file": "telekom-senkt-preise-fuer-datentarife.md",
                        "image": "https://picsum.photos/400/300?random=341"
                    },
                    {
                        "id": "neue-familien-tarife-bei-telekom",
                        "title": "Neue Familien-Tarife bei Telekom",
                        "date": "2026-03-22",
                        "excerpt": "Die Deutsche Telekom führt neue Familien-Tarife mit attraktiven Konditionen ein.",
                        "file": "neue-familien-tarife-bei-telekom.md",
                        "image": "https://picsum.photos/400/300?random=3297"
                    },
                    {
                        "id": "telekom-bietet-gratis-monat-fuer-neukunden",
                        "title": "Telekom bietet gratis Monat für Neukunden",
                        "date": "2026-01-27",
                        "excerpt": "Neukunden erhalten bei der Deutschen Telekom einen Monat gratis.",
                        "file": "telekom-bietet-gratis-monat-fuer-neukunden.md",
                        "image": "https://picsum.photos/400/300?random=6394"
                    },
                    {
                        "id": "magentaeins-alle-vorteile-im-detail",
                        "title": "MagentaEINS: Alle Vorteile im Detail",
                        "date": "2024-03-27",
                        "excerpt": "MagentaEINS-Pakete werden von der Deutschen Telekom im Detail vorgestellt.",
                        "file": "magentaeins-alle-vorteile-im-detail.md",
                        "image": "https://picsum.photos/400/300?random=6164"
                    },
                    {
                        "id": "telekom-erhoeht-datenvolumen-ohne-aufpreis",
                        "title": "Telekom erhöht Datenvolumen ohne Aufpreis",
                        "date": "2024-10-05",
                        "excerpt": "Die Deutsche Telekom erhöht das Datenvolumen vieler Tarife ohne Aufpreis.",
                        "file": "telekom-erhoeht-datenvolumen-ohne-aufpreis.md",
                        "image": "https://picsum.photos/400/300?random=3171"
                    },
                    {
                        "id": "business-tarife-telekom-fuer-unternehmen",
                        "title": "Business-Tarife: Telekom für Unternehmen",
                        "date": "2024-06-02",
                        "excerpt": "Die Deutsche Telekom bietet spezielle Business-Tarife für Unternehmen an.",
                        "file": "business-tarife-telekom-fuer-unternehmen.md",
                        "image": "https://picsum.photos/400/300?random=6390"
                    },
                    {
                        "id": "telekom-tarif-comparator-der-beste-tarif-fuer-sie",
                        "title": "Telekom Tarif-Comparator: Der beste Tarif für Sie",
                        "date": "2026-03-28",
                        "excerpt": "Die Deutsche Telekom bietet einen Online-Tarif-Comparator an.",
                        "file": "telekom-tarif-comparator-der-beste-tarif-fuer-sie.md",
                        "image": "https://picsum.photos/400/300?random=2944"
                    },
                    {
                        "id": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le",
                        "title": "Jugend-Tarife: Telekom bietet Rabatte für junge Leute",
                        "date": "2024-05-16",
                        "excerpt": "Junge Leute erhalten bei der Deutschen Telekom spezielle Rabatte.",
                        "file": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le.md",
                        "image": "https://picsum.photos/400/300?random=4409"
                    },
                    {
                        "id": "telekom-fuehrt-flexible-prepaid-optionen-ein",
                        "title": "Telekom führt flexible Prepaid-Optionen ein",
                        "date": "2026-04-24",
                        "excerpt": "Die Deutsche Telekom hat neue flexible Prepaid-Optionen eingeführt.",
                        "file": "telekom-fuehrt-flexible-prepaid-optionen-ein.md",
                        "image": "https://picsum.photos/400/300?random=415"
                    }
                ]
            }
        }
    },
    "mobilfunk": {
        "name": "Mobilfunk & SIM",
        "subcategories": {
            "sim-types": {
                "name": "SIM-Karten Typen",
                "articles": [
                    {
                        "id": "esim-so-aktivieren-sie-die-elektronische-sim-karte",
                        "title": "eSIM: So aktivieren Sie die elektronische SIM-Karte",
                        "date": "2026-02-05",
                        "excerpt": "Eine Schritt-für-Schritt-Anleitung zur Aktivierung einer eSIM.",
                        "file": "esim-so-aktivieren-sie-die-elektronische-sim-karte.md",
                        "image": "https://picsum.photos/400/300?random=8858"
                    },
                    {
                        "id": "isim-vs-esim-was-ist-der-unterschied",
                        "title": "iSIM vs eSIM: Was ist der Unterschied?",
                        "date": "2026-01-22",
                        "excerpt": "iSIM und eSIM werden in diesem Artikel detailliert verglichen.",
                        "file": "isim-vs-esim-was-ist-der-unterschied.md",
                        "image": "https://picsum.photos/400/300?random=1535"
                    },
                    {
                        "id": "physische-sim-karte-noch-immer-relevant",
                        "title": "Physische SIM-Karte: Noch immer relevant?",
                        "date": "2025-08-15",
                        "excerpt": "Der Artikel untersucht, ob physische SIM-Karten noch zeitgemäß sind.",
                        "file": "physische-sim-karte-noch-immer-relevant.md",
                        "image": "https://picsum.photos/400/300?random=8876"
                    },
                    {
                        "id": "multi-sim-mehrere-geraete-mit-einer-nummer",
                        "title": "Multi-SIM: Mehrere Geräte mit einer Nummer",
                        "date": "2026-03-20",
                        "excerpt": "Multi-SIM ermöglicht die Nutzung mehrerer Geräte mit einer Rufnummer.",
                        "file": "multi-sim-mehrere-geraete-mit-einer-nummer.md",
                        "image": "https://picsum.photos/400/300?random=8457"
                    },
                    {
                        "id": "sim-karten-formate-von-mini-bis-nano",
                        "title": "SIM-Karten-Formate: Von Mini bis Nano",
                        "date": "2025-10-21",
                        "excerpt": "Alle SIM-Karten-Formate werden in diesem Artikel erklärt.",
                        "file": "sim-karten-formate-von-mini-bis-nano.md",
                        "image": "https://picsum.photos/400/300?random=9641"
                    },
                    {
                        "id": "esim-bei-aelteren-smartphones-nutzen",
                        "title": "eSIM bei älteren Smartphones nutzen",
                        "date": "2025-04-11",
                        "excerpt": "Ältere Smartphones können mit speziellen Adaptern eSIM-fähig gemacht werden.",
                        "file": "esim-bei-aelteren-smartphones-nutzen.md",
                        "image": "https://picsum.photos/400/300?random=679"
                    },
                    {
                        "id": "dual-sim-zwei-nummern-auf-einem-handy",
                        "title": "Dual-SIM: Zwei Nummern auf einem Handy",
                        "date": "2024-11-14",
                        "excerpt": "Dual-SIM-Funktionalität wird in diesem Artikel erklärt.",
                        "file": "dual-sim-zwei-nummern-auf-einem-handy.md",
                        "image": "https://picsum.photos/400/300?random=5236"
                    },
                    {
                        "id": "sim-karten-sperre-so-schuetzen-sie-ihre-karte",
                        "title": "SIM-Karten-Sperre: So schützen Sie Ihre Karte",
                        "date": "2025-04-27",
                        "excerpt": "Eine Anleitung zum Schutz der SIM-Karte vor Missbrauch.",
                        "file": "sim-karten-sperre-so-schuetzen-sie-ihre-karte.md",
                        "image": "https://picsum.photos/400/300?random=3688"
                    },
                    {
                        "id": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung",
                        "title": "eSIM für IoT-Geräte: Die Zukunft der Vernetzung",
                        "date": "2026-03-16",
                        "excerpt": "eSIM wird immer wichtiger für IoT-Geräte.",
                        "file": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung.md",
                        "image": "https://picsum.photos/400/300?random=6287"
                    },
                    {
                        "id": "sim-karten-portierung-rufnummer-behalten",
                        "title": "SIM-Karten-Portierung: Rufnummer behalten",
                        "date": "2024-03-08",
                        "excerpt": "Eine Anleitung zur Portierung der Rufnummer bei einem Anbieterwechsel.",
                        "file": "sim-karten-portierung-rufnummer-behalten.md",
                        "image": "https://picsum.photos/400/300?random=3643"
                    }
                ]
            },
            "prepaid": {
                "name": "Prepaid & Verträge",
                "articles": [
                    {
                        "id": "prepaid-vs-postpaid-vor--und-nachteile",
                        "title": "Prepaid vs Postpaid: Vor- und Nachteile",
                        "date": "2024-05-14",
                        "excerpt": "Prepaid- und Postpaid-Tarife werden in diesem Artikel verglichen.",
                        "file": "prepaid-vs-postpaid-vor--und-nachteile.md",
                        "image": "https://picsum.photos/400/300?random=3930"
                    },
                    {
                        "id": "die-besten-prepaid-tarife-2026",
                        "title": "Die besten Prepaid-Tarife 2026",
                        "date": "2026-02-21",
                        "excerpt": "Eine Übersicht der besten Prepaid-Tarife im Jahr 2026.",
                        "file": "die-besten-prepaid-tarife-2026.md",
                        "image": "https://picsum.photos/400/300?random=1623"
                    },
                    {
                        "id": "prepaid-karten-ohne-grundgebuehr",
                        "title": "Prepaid-Karten ohne Grundgebühr",
                        "date": "2025-04-25",
                        "excerpt": "Prepaid-Karten ohne monatliche Grundgebühr werden vorgestellt.",
                        "file": "prepaid-karten-ohne-grundgebuehr.md",
                        "image": "https://picsum.photos/400/300?random=3842"
                    },
                    {
                        "id": "eu-roaming-bei-prepaid-karten",
                        "title": "EU-Roaming bei Prepaid-Karten",
                        "date": "2025-03-13",
                        "excerpt": "EU-Roaming ist bei den meisten Prepaid-Karten inklusive.",
                        "file": "eu-roaming-bei-prepaid-karten.md",
                        "image": "https://picsum.photos/400/300?random=7061"
                    },
                    {
                        "id": "prepaid-tarife-fuer-senioren",
                        "title": "Prepaid-Tarife für Senioren",
                        "date": "2024-03-10",
                        "excerpt": "Spezielle Prepaid-Tarife für Senioren werden vorgestellt.",
                        "file": "prepaid-tarife-fuer-senioren.md",
                        "image": "https://picsum.photos/400/300?random=4318"
                    },
                    {
                        "id": "prepaid-mit-unbegrenztem-datenvolumen",
                        "title": "Prepaid mit unbegrenztem Datenvolumen",
                        "date": "2026-01-28",
                        "excerpt": "Einige Anbieter bieten inzwischen Prepaid mit unbegrenztem Datenvolumen.",
                        "file": "prepaid-mit-unbegrenztem-datenvolumen.md",
                        "image": "https://picsum.photos/400/300?random=4198"
                    },
                    {
                        "id": "prepaid-karten-fuer-kurzreisen",
                        "title": "Prepaid-Karten für Kurzreisen",
                        "date": "2024-11-19",
                        "excerpt": "Prepaid-Karten sind ideal für Kurzreisen ins Ausland.",
                        "file": "prepaid-karten-fuer-kurzreisen.md",
                        "image": "https://picsum.photos/400/300?random=1671"
                    },
                    {
                        "id": "aufladbare-prepaid-karten-so-funktioniert-es",
                        "title": "Aufladbare Prepaid-Karten: So funktioniert es",
                        "date": "2024-07-23",
                        "excerpt": "Eine Anleitung zum Aufladen von Prepaid-Karten.",
                        "file": "aufladbare-prepaid-karten-so-funktioniert-es.md",
                        "image": "https://picsum.photos/400/300?random=2827"
                    },
                    {
                        "id": "prepaid-tarife-im-test-stiftung-warentest",
                        "title": "Prepaid-Tarife im Test: Stiftung Warentest",
                        "date": "2026-01-02",
                        "excerpt": "Die Stiftung Warentest hat Prepaid-Tarife getestet.",
                        "file": "prepaid-tarife-im-test-stiftung-warentest.md",
                        "image": "https://picsum.photos/400/300?random=9347"
                    },
                    {
                        "id": "prepaid-pakete-tages--wochen--und-monatsoptionen",
                        "title": "Prepaid-Pakete: Tages-, Wochen- und Monatsoptionen",
                        "date": "2026-01-26",
                        "excerpt": "Verschiedene Prepaid-Pakete werden in diesem Artikel vorgestellt.",
                        "file": "prepaid-pakete-tages--wochen--und-monatsoptionen.md",
                        "image": "https://picsum.photos/400/300?random=6751"
                    }
                ]
            },
            "tips": {
                "name": "Nutzungstipps",
                "articles": [
                    {
                        "id": "datenvolumen-sparen-10-praktische-tipps",
                        "title": "Datenvolumen sparen: 10 praktische Tipps",
                        "date": "2026-04-14",
                        "excerpt": "Zehn praktische Tipps, um Datenvolumen zu sparen.",
                        "file": "datenvolumen-sparen-10-praktische-tipps.md",
                        "image": "https://picsum.photos/400/300?random=1337"
                    },
                    {
                        "id": "smartphone-akkulaufzeit-verbessern",
                        "title": "Smartphone-Akkulaufzeit verbessern",
                        "date": "2024-07-17",
                        "excerpt": "Tipps zur Verbesserung der Akkulaufzeit eines Smartphones.",
                        "file": "smartphone-akkulaufzeit-verbessern.md",
                        "image": "https://picsum.photos/400/300?random=644"
                    },
                    {
                        "id": "mobile-daten-optimal-nutzen",
                        "title": "Mobile Daten optimal nutzen",
                        "date": "2024-02-27",
                        "excerpt": "Tipps zur optimalen Nutzung mobiler Daten.",
                        "file": "mobile-daten-optimal-nutzen.md",
                        "image": "https://picsum.photos/400/300?random=2324"
                    },
                    {
                        "id": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen",
                        "title": "Roaming-Kosten vermeiden: Tipps für Auslandsreisen",
                        "date": "2025-07-14",
                        "excerpt": "Tipps, um Roaming-Kosten im Ausland zu vermeiden.",
                        "file": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen.md",
                        "image": "https://picsum.photos/400/300?random=1626"
                    },
                    {
                        "id": "sicheres-mobiles-surfen-vpn-fuer-smartphones",
                        "title": "Sicheres mobiles Surfen: VPN für Smartphones",
                        "date": "2024-08-04",
                        "excerpt": "Ein VPN schützt beim mobilen Surfen.",
                        "file": "sicheres-mobiles-surfen-vpn-fuer-smartphones.md",
                        "image": "https://picsum.photos/400/300?random=9841"
                    },
                    {
                        "id": "wlan-netzwerk-optimieren",
                        "title": "WLAN-Netzwerk optimieren",
                        "date": "2025-01-11",
                        "excerpt": "Tipps zur Optimierung des heimischen WLAN-Netzwerks.",
                        "file": "wlan-netzwerk-optimieren.md",
                        "image": "https://picsum.photos/400/300?random=1581"
                    },
                    {
                        "id": "mobilfunk-empfang-verbessern",
                        "title": "Mobilfunk-Empfang verbessern",
                        "date": "2024-07-07",
                        "excerpt": "Tipps zur Verbesserung des Mobilfunk-Empfangs.",
                        "file": "mobilfunk-empfang-verbessern.md",
                        "image": "https://picsum.photos/400/300?random=6120"
                    },
                    {
                        "id": "smartphone-speicher-richtig-nutzen",
                        "title": "Smartphone-Speicher richtig nutzen",
                        "date": "2025-05-16",
                        "excerpt": "Tipps zur optimalen Nutzung des Smartphone-Speichers.",
                        "file": "smartphone-speicher-richtig-nutzen.md",
                        "image": "https://picsum.photos/400/300?random=2970"
                    },
                    {
                        "id": "mobile-hotspots-einrichten",
                        "title": "Mobile Hotspots einrichten",
                        "date": "2026-01-26",
                        "excerpt": "Eine Anleitung zum Einrichten eines mobilen Hotspots.",
                        "file": "mobile-hotspots-einrichten.md",
                        "image": "https://picsum.photos/400/300?random=6119"
                    },
                    {
                        "id": "datenschutz-auf-dem-smartphone",
                        "title": "Datenschutz auf dem Smartphone",
                        "date": "2026-04-20",
                        "excerpt": "Tipps zum Schutz der Privatsphäre auf dem Smartphone.",
                        "file": "datenschutz-auf-dem-smartphone.md",
                        "image": "https://picsum.photos/400/300?random=6577"
                    }
                ]
            }
        }
    }
};

// Function to get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Helper function to format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Function to render category page
function renderCategoryPage() {
    const cat = getUrlParam('cat') || 'telekom';
    const sub = getUrlParam('sub');
    
    const category = articles[cat];
    if (!category) {
        document.getElementById('categoryTitle').textContent = 'Kategorie nicht gefunden';
        return;
    }
    
    // Update page title
    document.title = category.name + ' - Deutsche Telekom & Mobilfunk Blog';
    document.getElementById('categoryTitle').textContent = category.name;
    
    // Render subcategory tabs
    const tabsContainer = document.getElementById('subcategoryTabs');
    let tabsHtml = '';
    const subKeys = Object.keys(category.subcategories);
    
    subKeys.forEach(subKey => {
        const subcat = category.subcategories[subKey];
        const isActive = subKey === sub ? 'active' : '';
        tabsHtml += `<a href="?cat=${cat}&sub=${subKey}" class="subcategory-tab ${isActive}">${subcat.name}</a>`;
    });
    tabsContainer.innerHTML = tabsHtml;
    
    // Determine which subcategory to show
    const targetSub = sub && category.subcategories[sub] ? sub : subKeys[0];
    const subcategory = category.subcategories[targetSub];
    
    // Update active tab
    tabsContainer.querySelectorAll('.subcategory-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('href').includes(`sub=${targetSub}`)) {
            tab.classList.add('active');
        }
    });
    
    // Render articles
    const articlesContainer = document.getElementById('articlesList');
    if (!subcategory || !subcategory.articles || subcategory.articles.length === 0) {
        articlesContainer.innerHTML = '<p class="no-articles">Keine Artikel in dieser Kategorie gefunden.</p>';
        return;
    }
    
    articlesContainer.innerHTML = subcategory.articles.map(article => `
        <div class="article-card">
            <img class="article-card-image" src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="article-card-content">
                <span class="meta">${formatDate(article.date)}</span>
                <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
                <p class="excerpt">${article.excerpt}</p>
                <a href="article.html?id=${article.id}" class="read-more">Weiterlesen →</a>
            </div>
        </div>
    `).join('');
}

// Initialize category page
document.addEventListener('DOMContentLoaded', renderCategoryPage);
