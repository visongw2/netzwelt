// Main JavaScript for Blog Index Page with Categories

// Articles data organized by categories and subcategories
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
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-erreicht-millionen-marke-bei-5g-nutzern",
                        "title": "Telekom erreicht Millionen-Marke bei 5G-Nutzern",
                        "date": "2024-06-16",
                        "excerpt": "Die Deutsche Telekom kann eine neue Millionen-Marke bei 5G-Nutzern verkünden.",
                        "file": "telekom-erreicht-millionen-marke-bei-5g-nutzern.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-erweitert-netzabdeckung-in-laendlichen-geb",
                        "title": "Telekom erweitert Netzabdeckung in ländlichen Gebieten",
                        "date": "2024-08-16",
                        "excerpt": "Die Deutsche Telekom investiert massiv in die Netzabdeckung ländlicher Gebiete.",
                        "file": "telekom-erweitert-netzabdeckung-in-laendlichen-geb.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-und-huawei-geruechte-ueber-zusammenarbeit",
                        "title": "Telekom und Huawei: Gerüchte über Zusammenarbeit",
                        "date": "2024-11-06",
                        "excerpt": "Es gibt Gerüchte über eine mögliche Zusammenarbeit zwischen der Deutschen Telekom und Huawei.",
                        "file": "telekom-und-huawei-geruechte-ueber-zusammenarbeit.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-startet-5g-netz-in-weiteren-staedten",
                        "title": "Telekom startet 5G-Netz in weiteren Städten",
                        "date": "2026-03-27",
                        "excerpt": "Die Deutsche Telekom hat den 5G-Ausbau in weiteren deutschen Städten gestartet.",
                        "file": "telekom-startet-5g-netz-in-weiteren-staedten.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-berichtet-von-rekordjahr-2025",
                        "title": "Telekom berichtet von Rekordjahr 2025",
                        "date": "2025-05-23",
                        "excerpt": "Die Deutsche Telekom blickt auf ein erfolgreiches Geschäftsjahr 2025 zurück.",
                        "file": "telekom-berichtet-von-rekordjahr-2025.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-fuehrt-neues-kundenservice-konzept-ein",
                        "title": "Telekom führt neues Kundenservice-Konzept ein",
                        "date": "2024-09-28",
                        "excerpt": "Die Deutsche Telekom modernisiert ihr Kundenservice mit KI-gestützten Lösungen.",
                        "file": "telekom-fuehrt-neues-kundenservice-konzept-ein.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-expandiert-nach-osteuropa",
                        "title": "Telekom expandiert nach Osteuropa",
                        "date": "2025-07-10",
                        "excerpt": "Die Deutsche Telekom plant die Expansion ihres Netzes in osteuropäische Märkte.",
                        "file": "telekom-expandiert-nach-osteuropa.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-testet-6g-technologie-in-deutschland",
                        "title": "Telekom testet 6G-Technologie in Deutschland",
                        "date": "2026-02-10",
                        "excerpt": "Die Deutsche Telekom hat begonnen, erste 6G-Technologien in Deutschland zu testen.",
                        "file": "telekom-testet-6g-technologie-in-deutschland.md",
                        "image": "images/cat-telekom.jpg",
                    },
                    {
                        "id": "telekom-und-vodafone-vergleichen-netzqualitaet",
                        "title": "Telekom und Vodafone vergleichen Netzqualität",
                        "date": "2025-10-24",
                        "excerpt": "Ein unabhängiger Test vergleicht die Netzqualität von Telekom und Vodafone.",
                        "file": "telekom-und-vodafone-vergleichen-netzqualitaet.md",
                        "image": "images/cat-telekom.jpg",
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
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "massive-mimo-telekom-setzt-auf-neue-antennentechni",
                        "title": "Massive MIMO: Telekom setzt auf neue Antennentechnik",
                        "date": "2025-04-18",
                        "excerpt": "Massive MIMO-Technologie wird von der Deutschen Telekom eingeführt.",
                        "file": "massive-mimo-telekom-setzt-auf-neue-antennentechni.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "netzvirtualisierung-telekom-setzt-auf-nfv",
                        "title": "Netzvirtualisierung: Telekom setzt auf NFV",
                        "date": "2026-04-05",
                        "excerpt": "Network Function Virtualization wird vom Telekom-Netz zum Standard.",
                        "file": "netzvirtualisierung-telekom-setzt-auf-nfv.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "edge-computing-telekom-baut-rechenzentren-aus",
                        "title": "Edge Computing: Telekom baut Rechenzentren aus",
                        "date": "2025-10-06",
                        "excerpt": "Edge Computing wird von der Telekom für geringe Latenzzeiten genutzt.",
                        "file": "edge-computing-telekom-baut-rechenzentren-aus.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "open-ran-telekom-testet-offene-netzarchitektur",
                        "title": "Open RAN: Telekom testet offene Netzarchitektur",
                        "date": "2024-01-02",
                        "excerpt": "Die Deutsche Telekom testet Open RAN-Technologie in ihrem Netz.",
                        "file": "open-ran-telekom-testet-offene-netzarchitektur.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "volte-und-vowifi-bei-telekom",
                        "title": "VoLTE und VoWiFi bei Telekom",
                        "date": "2025-02-27",
                        "excerpt": "Voice over LTE und Voice over WiFi werden bei Telekom ausführlich erklärt.",
                        "file": "volte-und-vowifi-bei-telekom.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "carrier-aggregation-telekom-buendelt-frequenzen",
                        "title": "Carrier Aggregation: Telekom bündelt Frequenzen",
                        "date": "2025-06-27",
                        "excerpt": "Carrier Aggregation wird von der Telekom genutzt, um die Datenraten zu erhöhen.",
                        "file": "carrier-aggregation-telekom-buendelt-frequenzen.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "netz-kapazitaet-telekom-verdoppelt-bandbreite",
                        "title": "Netz-Kapazität: Telekom verdoppelt Bandbreite",
                        "date": "2025-04-28",
                        "excerpt": "Die Deutsche Telekom hat die Netzkapazität in Großstädten verdoppelt.",
                        "file": "netz-kapazitaet-telekom-verdoppelt-bandbreite.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte",
                        "title": "Glasfaser-Ausbau: Telekom erreicht 50 Mio. Haushalte",
                        "date": "2024-06-24",
                        "excerpt": "Die Deutsche Telekom hat ihr Ziel von 50 Millionen Glasfaser-Haushalten erreicht.",
                        "file": "glasfaser-ausbau-telekom-erreicht-50-mio-haushalte.md",
                        "image": "images/cat-5g-tech.jpg",
                    },
                    {
                        "id": "satelliten-internet-telekom-kooperiert-mit-spacex",
                        "title": "Satelliten-Internet: Telekom kooperiert mit SpaceX",
                        "date": "2024-04-05",
                        "excerpt": "Die Deutsche Telekom prüft eine Kooperation mit SpaceX für Satelliten-Internet.",
                        "file": "satelliten-internet-telekom-kooperiert-mit-spacex.md",
                        "image": "images/cat-5g-tech.jpg",
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
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "telekom-senkt-preise-fuer-datentarife",
                        "title": "Telekom senkt Preise für Datentarife",
                        "date": "2026-04-30",
                        "excerpt": "Die Deutsche Telekom hat die Preise für ihre Datentarife gesenkt.",
                        "file": "telekom-senkt-preise-fuer-datentarife.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "neue-familien-tarife-bei-telekom",
                        "title": "Neue Familien-Tarife bei Telekom",
                        "date": "2026-03-22",
                        "excerpt": "Die Deutsche Telekom führt neue Familien-Tarife mit attraktiven Konditionen ein.",
                        "file": "neue-familien-tarife-bei-telekom.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "telekom-bietet-gratis-monat-fuer-neukunden",
                        "title": "Telekom bietet gratis Monat für Neukunden",
                        "date": "2026-01-27",
                        "excerpt": "Neukunden erhalten bei der Deutschen Telekom einen Monat gratis.",
                        "file": "telekom-bietet-gratis-monat-fuer-neukunden.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "magentaeins-alle-vorteile-im-detail",
                        "title": "MagentaEINS: Alle Vorteile im Detail",
                        "date": "2024-03-27",
                        "excerpt": "MagentaEINS-Pakete werden von der Deutschen Telekom im Detail vorgestellt.",
                        "file": "magentaeins-alle-vorteile-im-detail.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "telekom-erhoeht-datenvolumen-ohne-aufpreis",
                        "title": "Telekom erhöht Datenvolumen ohne Aufpreis",
                        "date": "2024-10-05",
                        "excerpt": "Die Deutsche Telekom erhöht das Datenvolumen vieler Tarife ohne Aufpreis.",
                        "file": "telekom-erhoeht-datenvolumen-ohne-aufpreis.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "business-tarife-telekom-fuer-unternehmen",
                        "title": "Business-Tarife: Telekom für Unternehmen",
                        "date": "2024-06-02",
                        "excerpt": "Die Deutsche Telekom bietet spezielle Business-Tarife für Unternehmen an.",
                        "file": "business-tarife-telekom-fuer-unternehmen.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "telekom-tarif-comparator-der-beste-tarif-fuer-sie",
                        "title": "Telekom Tarif-Comparator: Der beste Tarif für Sie",
                        "date": "2026-03-28",
                        "excerpt": "Die Deutsche Telekom bietet einen Online-Tarif-Comparator an.",
                        "file": "telekom-tarif-comparator-der-beste-tarif-fuer-sie.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le",
                        "title": "Jugend-Tarife: Telekom bietet Rabatte für junge Leute",
                        "date": "2024-05-16",
                        "excerpt": "Junge Leute erhalten bei der Deutschen Telekom spezielle Rabatte.",
                        "file": "jugend-tarife-telekom-bietet-rabatte-fuer-junge-le.md",
                        "image": "images/cat-tarife.jpg",
                    },
                    {
                        "id": "telekom-fuehrt-flexible-prepaid-optionen-ein",
                        "title": "Telekom führt flexible Prepaid-Optionen ein",
                        "date": "2026-04-24",
                        "excerpt": "Die Deutsche Telekom hat neue flexible Prepaid-Optionen eingeführt.",
                        "file": "telekom-fuehrt-flexible-prepaid-optionen-ein.md",
                        "image": "images/cat-tarife.jpg",
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
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "isim-vs-esim-was-ist-der-unterschied",
                        "title": "iSIM vs eSIM: Was ist der Unterschied?",
                        "date": "2026-01-22",
                        "excerpt": "iSIM und eSIM werden in diesem Artikel detailliert verglichen.",
                        "file": "isim-vs-esim-was-ist-der-unterschied.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "physische-sim-karte-noch-immer-relevant",
                        "title": "Physische SIM-Karte: Noch immer relevant?",
                        "date": "2025-08-15",
                        "excerpt": "Der Artikel untersucht, ob physische SIM-Karten noch zeitgemäß sind.",
                        "file": "physische-sim-karte-noch-immer-relevant.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "multi-sim-mehrere-geraete-mit-einer-nummer",
                        "title": "Multi-SIM: Mehrere Geräte mit einer Nummer",
                        "date": "2026-03-20",
                        "excerpt": "Multi-SIM ermöglicht die Nutzung mehrerer Geräte mit einer Rufnummer.",
                        "file": "multi-sim-mehrere-geraete-mit-einer-nummer.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "sim-karten-formate-von-mini-bis-nano",
                        "title": "SIM-Karten-Formate: Von Mini bis Nano",
                        "date": "2025-10-21",
                        "excerpt": "Alle SIM-Karten-Formate werden in diesem Artikel erklärt.",
                        "file": "sim-karten-formate-von-mini-bis-nano.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "esim-bei-aelteren-smartphones-nutzen",
                        "title": "eSIM bei älteren Smartphones nutzen",
                        "date": "2025-04-11",
                        "excerpt": "Ältere Smartphones können mit speziellen Adaptern eSIM-fähig gemacht werden.",
                        "file": "esim-bei-aelteren-smartphones-nutzen.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "dual-sim-zwei-nummern-auf-einem-handy",
                        "title": "Dual-SIM: Zwei Nummern auf einem Handy",
                        "date": "2024-11-14",
                        "excerpt": "Dual-SIM-Funktionalität wird in diesem Artikel erklärt.",
                        "file": "dual-sim-zwei-nummern-auf-einem-handy.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "sim-karten-sperre-so-schuetzen-sie-ihre-karte",
                        "title": "SIM-Karten-Sperre: So schützen Sie Ihre Karte",
                        "date": "2025-04-27",
                        "excerpt": "Eine Anleitung zum Schutz der SIM-Karte vor Missbrauch.",
                        "file": "sim-karten-sperre-so-schuetzen-sie-ihre-karte.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung",
                        "title": "eSIM für IoT-Geräte: Die Zukunft der Vernetzung",
                        "date": "2026-03-16",
                        "excerpt": "eSIM wird immer wichtiger für IoT-Geräte.",
                        "file": "esim-fuer-iot-geraete-die-zukunft-der-vernetzung.md",
                        "image": "images/cat-esim.jpg",
                    },
                    {
                        "id": "sim-karten-portierung-rufnummer-behalten",
                        "title": "SIM-Karten-Portierung: Rufnummer behalten",
                        "date": "2024-03-08",
                        "excerpt": "Eine Anleitung zur Portierung der Rufnummer bei einem Anbieterwechsel.",
                        "file": "sim-karten-portierung-rufnummer-behalten.md",
                        "image": "images/cat-esim.jpg",
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
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "die-besten-prepaid-tarife-2026",
                        "title": "Die besten Prepaid-Tarife 2026",
                        "date": "2026-02-21",
                        "excerpt": "Eine Übersicht der besten Prepaid-Tarife im Jahr 2026.",
                        "file": "die-besten-prepaid-tarife-2026.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-karten-ohne-grundgebuehr",
                        "title": "Prepaid-Karten ohne Grundgebühr",
                        "date": "2025-04-25",
                        "excerpt": "Prepaid-Karten ohne monatliche Grundgebühr werden vorgestellt.",
                        "file": "prepaid-karten-ohne-grundgebuehr.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "eu-roaming-bei-prepaid-karten",
                        "title": "EU-Roaming bei Prepaid-Karten",
                        "date": "2025-03-13",
                        "excerpt": "EU-Roaming ist bei den meisten Prepaid-Karten inklusive.",
                        "file": "eu-roaming-bei-prepaid-karten.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-tarife-fuer-senioren",
                        "title": "Prepaid-Tarife für Senioren",
                        "date": "2024-03-10",
                        "excerpt": "Spezielle Prepaid-Tarife für Senioren werden vorgestellt.",
                        "file": "prepaid-tarife-fuer-senioren.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-mit-unbegrenztem-datenvolumen",
                        "title": "Prepaid mit unbegrenztem Datenvolumen",
                        "date": "2026-01-28",
                        "excerpt": "Einige Anbieter bieten inzwischen Prepaid mit unbegrenztem Datenvolumen.",
                        "file": "prepaid-mit-unbegrenztem-datenvolumen.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-karten-fuer-kurzreisen",
                        "title": "Prepaid-Karten für Kurzreisen",
                        "date": "2024-11-19",
                        "excerpt": "Prepaid-Karten sind ideal für Kurzreisen ins Ausland.",
                        "file": "prepaid-karten-fuer-kurzreisen.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "aufladbare-prepaid-karten-so-funktioniert-es",
                        "title": "Aufladbare Prepaid-Karten: So funktioniert es",
                        "date": "2024-07-23",
                        "excerpt": "Eine Anleitung zum Aufladen von Prepaid-Karten.",
                        "file": "aufladbare-prepaid-karten-so-funktioniert-es.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-tarife-im-test-stiftung-warentest",
                        "title": "Prepaid-Tarife im Test: Stiftung Warentest",
                        "date": "2026-01-02",
                        "excerpt": "Die Stiftung Warentest hat Prepaid-Tarife getestet.",
                        "file": "prepaid-tarife-im-test-stiftung-warentest.md",
                        "image": "images/cat-prepaid.jpg",
                    },
                    {
                        "id": "prepaid-pakete-tages--wochen--und-monatsoptionen",
                        "title": "Prepaid-Pakete: Tages-, Wochen- und Monatsoptionen",
                        "date": "2026-01-26",
                        "excerpt": "Verschiedene Prepaid-Pakete werden in diesem Artikel vorgestellt.",
                        "file": "prepaid-pakete-tages--wochen--und-monatsoptionen.md",
                        "image": "images/cat-prepaid.jpg",
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
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "smartphone-akkulaufzeit-verbessern",
                        "title": "Smartphone-Akkulaufzeit verbessern",
                        "date": "2024-07-17",
                        "excerpt": "Tipps zur Verbesserung der Akkulaufzeit eines Smartphones.",
                        "file": "smartphone-akkulaufzeit-verbessern.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "mobile-daten-optimal-nutzen",
                        "title": "Mobile Daten optimal nutzen",
                        "date": "2024-02-27",
                        "excerpt": "Tipps zur optimalen Nutzung mobiler Daten.",
                        "file": "mobile-daten-optimal-nutzen.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen",
                        "title": "Roaming-Kosten vermeiden: Tipps für Auslandsreisen",
                        "date": "2025-07-14",
                        "excerpt": "Tipps, um Roaming-Kosten im Ausland zu vermeiden.",
                        "file": "roaming-kosten-vermeiden-tipps-fuer-auslandsreisen.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "sicheres-mobiles-surfen-vpn-fuer-smartphones",
                        "title": "Sicheres mobiles Surfen: VPN für Smartphones",
                        "date": "2024-08-04",
                        "excerpt": "Ein VPN schützt beim mobilen Surfen.",
                        "file": "sicheres-mobiles-surfen-vpn-fuer-smartphones.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "wlan-netzwerk-optimieren",
                        "title": "WLAN-Netzwerk optimieren",
                        "date": "2025-01-11",
                        "excerpt": "Tipps zur Optimierung des heimischen WLAN-Netzwerks.",
                        "file": "wlan-netzwerk-optimieren.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "mobilfunk-empfang-verbessern",
                        "title": "Mobilfunk-Empfang verbessern",
                        "date": "2024-07-07",
                        "excerpt": "Tipps zur Verbesserung des Mobilfunk-Empfangs.",
                        "file": "mobilfunk-empfang-verbessern.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "smartphone-speicher-richtig-nutzen",
                        "title": "Smartphone-Speicher richtig nutzen",
                        "date": "2025-05-16",
                        "excerpt": "Tipps zur optimalen Nutzung des Smartphone-Speichers.",
                        "file": "smartphone-speicher-richtig-nutzen.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "mobile-hotspots-einrichten",
                        "title": "Mobile Hotspots einrichten",
                        "date": "2026-01-26",
                        "excerpt": "Eine Anleitung zum Einrichten eines mobilen Hotspots.",
                        "file": "mobile-hotspots-einrichten.md",
                        "image": "images/cat-tips.jpg",
                    },
                    {
                        "id": "datenschutz-auf-dem-smartphone",
                        "title": "Datenschutz auf dem Smartphone",
                        "date": "2026-04-20",
                        "excerpt": "Tipps zum Schutz der Privatsphäre auf dem Smartphone.",
                        "file": "datenschutz-auf-dem-smartphone.md",
                        "image": "images/cat-tips.jpg",
                    }
                ]
            }
        }
    },
    "anbieter": {
        "name": "Anbieter & Tarife",
        "subcategories": {
            "o2": {
                "name": "O2 Tarife & Netz",
                "articles": [
                    {
                        "id": "o2-tarife-2026-der-grosse-vergleich",
                        "title": "O2 Tarife 2026: Der große Vergleich",
                        "date": "2026-05-08",
                        "excerpt": "Suchen Sie nach einem neuen Mobilfunktarif bei O2? In diesem ausführlichen Vergleich stellen wir Ihnen die besten O2 Tarife 2026 vor.",
                        "file": "o2-tarife-2026-der-große-vergleich.md",
                        "image": "images/cat-o2.jpg",
                    },
                    {
                        "id": "o2-5g-netz-abdeckung-und-geschwindigkeit-im-test",
                        "title": "O2 5G Netz: Abdeckung und Geschwindigkeit im Test",
                        "date": "2026-05-08",
                        "excerpt": "O2 hat in den letzten Jahren massiv in den 5G-Ausbau investiert. Wir testen die O2 5G-Abdeckung und messen die Geschwindigkeiten.",
                        "file": "o2-5g-netz-abdeckung-und-geschwindigkeit-im-test.md",
                        "image": "images/cat-o2.jpg",
                    }
                ]
            },
            "blau": {
                "name": "blau Mobilfunk",
                "articles": [
                    {
                        "id": "blau-mobilfunk-guenstige-tarife-im-o2-netz",
                        "title": "blau Mobilfunk: Günstige Tarife im O2-Netz",
                        "date": "2026-05-08",
                        "excerpt": "blau Mobilfunk bietet faire Prepaid-Tarife im starken O2-Netz. In diesem Test zeigen wir, ob sich blau lohnt.",
                        "file": "blau-mobilfunk-günstige-tarife-im-o2-netz.md",
                        "image": "images/cat-blau.jpg",
                    },
                    {
                        "id": "blau-prepaid-tarife-im-detail-test",
                        "title": "blau Prepaid Tarife im Detail-Test",
                        "date": "2026-05-08",
                        "excerpt": "blau Prepaid-Tarife sind bekannt für ihre Transparenz und Fairness. Wir prüfen alle blau Prepaid-Tarife im O2-Netz.",
                        "file": "blau-prepaid-tarife-im-detail-test.md",
                        "image": "images/cat-blau.jpg",
                    }
                ]
            },
            "vodafone": {
                "name": "Vodafone",
                "articles": [
                    {
                        "id": "vodafone-tarife-2026-welcher-ist-der-richtige",
                        "title": "Vodafone Tarife 2026: Welcher ist der Richtige?",
                        "date": "2026-05-08",
                        "excerpt": "Vodafone ist einer der größten Mobilfunkanbieter in Deutschland. Wir vergleichen die besten Vodafone Tarife 2026.",
                        "file": "vodafone-tarife-2026-welcher-ist-der-richtige.md",
                        "image": "images/cat-vodafone.jpg",
                    },
                    {
                        "id": "vodafone-5g-das-leistet-das-netz-wirklich",
                        "title": "Vodafone 5G: Das leistet das Netz wirklich",
                        "date": "2026-05-08",
                        "excerpt": "Vodafone hat massiv in den 5G-Ausbau investiert. Wir testen das Vodafone 5G-Netz und zeigen, wie schnell es wirklich ist.",
                        "file": "vodafone-5g-das-leistet-das-netz-wirklich.md",
                        "image": "images/cat-vodafone.jpg",
                    }
                ]
            },
            "weitere": {
                "name": "Weitere Anbieter",
                "articles": [
                    {
                        "id": "otelo-guenstige-allnet-flat-im-o2-netz",
                        "title": "otelo: Günstige Allnet-Flat im O2-Netz",
                        "date": "2026-05-08",
                        "excerpt": "otelo bietet attraktive Tarife ohne versteckte Kosten im O2-Netz. Wir testen, ob sich otelo lohnt.",
                        "file": "otelo-günstige-allnet-flat-im-o2-netz.md",
                        "image": "images/cat-o2.jpg",
                    },
                    {
                        "id": "freenet-funk-flexibel-telefonieren-ohne-vertrag",
                        "title": "freenet Funk: Flexibel telefonieren ohne Vertrag",
                        "date": "2026-05-08",
                        "excerpt": "freenet Funk bietet innovative Prepaid-Tarife im O2-Netz ohne langfristige Vertragsbindung.",
                        "file": "freenet-funk-flexibel-telefonieren-ohne-vertrag.md",
                        "image": "images/cat-freenet.jpg",
                    },
                    {
                        "id": "freenet-5g-highspeed-internet-unterwegs",
                        "title": "freenet 5G: Highspeed-Internet unterwegs",
                        "date": "2026-05-08",
                        "excerpt": "Mit freenet 5G Highspeed-Internet unterwegs nutzen. Welche Tarife sind verfügbar und wie schnell sind sie?",
                        "file": "freenet-5g-highspeed-internet-unterwegs.md",
                        "image": "images/cat-freenet.jpg",
                    },
                    {
                        "id": "congstar-guenstig-telefonieren-im-telekom-netz",
                        "title": "congstar: Günstig telefonieren im Telekom-Netz",
                        "date": "2026-05-08",
                        "excerpt": "congstar bietet faire Preise für das qualitativ hochwertige Telekom-Netz. Lohnt sich congstar?",
                        "file": "congstar-günstig-telefonieren-im-telekom-netz.md",
                        "image": "images/cat-congstar.jpg",
                    },
                    {
                        "id": "congstar-prepaid-die-besten-tarife-im-ueberblick",
                        "title": "congstar Prepaid: Die besten Tarife im Überblick",
                        "date": "2026-05-08",
                        "excerpt": "congstar Prepaid bietet flexible Tarife im Telekom-Netz ohne langfristige Vertragsbindung.",
                        "file": "congstar-prepaid-die-besten-tarife-im-überblick.md",
                        "image": "images/cat-congstar.jpg",
                    },
                    {
                        "id": "klarmobil-transparente-tarife-im-o2-netz",
                        "title": "klarmobil: Transparente Tarife im O2-Netz",
                        "date": "2026-05-08",
                        "excerpt": "klarmobil bietet klare Preise ohne versteckte Kosten im O2-Netz. Wir testen alle verfügbaren Tarife.",
                        "file": "klarmobil-transparente-tarife-im-o2-netz.md",
                        "image": "images/cat-o2.jpg",
                    }
                ]
            }
        }
    }
};

// Function to render articles for a category
function renderArticles(categoryId, containerId, limit) {
    try {
        var container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }
        
        var category = articles[categoryId];
        if (!category) {
            console.error('Category not found:', categoryId);
            return;
        }
        
        // Get all articles from all subcategories
        var allArticles = [];
        for (var subKey in category.subcategories) {
            allArticles = allArticles.concat(category.subcategories[subKey].articles);
        }
        
        // Limit number of articles
        if (limit) {
            allArticles = allArticles.slice(0, limit);
        }
        
        // Render articles
        var html = '';
        for (var i = 0; i < allArticles.length; i++) {
            var article = allArticles[i];
            html += '<div class="article-card">';
            html += '<img class="article-card-image" src="' + article.image + '" alt="' + article.title + '" loading="lazy">';
            html += '<div class="article-card-content">';
            html += '<span class="meta">' + article.date + '</span>';
            html += '<h3><a href="article.html?id=' + article.id + '">' + article.title + '</a></h3>';
            html += '<p class="excerpt">' + article.excerpt + '</p>';
            html += '<a href="article.html?id=' + article.id + '" class="read-more">Weiterlesen →</a>';
            html += '</div></div>';
        }
        
        container.innerHTML = html;
        console.log('Articles rendered for', categoryId, ':', allArticles.length);
    } catch (e) {
        console.error('Error rendering articles:', e);
    }
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, rendering articles...');
    renderArticles('telekom', 'telekomArticles', 6);
    renderArticles('mobilfunk', 'mobilfunkArticles', 6);
    renderArticles('anbieter', 'anbieterArticles', 6);
});
