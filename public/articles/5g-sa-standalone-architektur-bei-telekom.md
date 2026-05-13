# 5G-SA: Standalone-Architektur bei der Telekom – Technische Innovation trifft auf Netzmodernisierung

*Die Deutsche Telekom rollt die 5G Standalone-Architektur (5G-SA) bundesweit aus und setzt damit neue Maßstäbe in der Mobilfunktechnologie. In diesem umfassenden Artikel erfahren Sie alles über die technischen Hintergründe von 5G-SA, die Vorteile gegenüber herkömmlichem 5G (Non-Standalone) und wie Sie als Telekom-Kunde bereits heute von dieser Zukunftstechnologie profitieren können.*

## Einleitung: Die Evolution von 5G zu 5G Standalone

Das Mobilfunknetz der Zukunft steht bereits heute in den Startlöchern. Während 5G Non-Standalone (NSA) – die erste Phase von 5G – noch stark auf die 4G-Infrastruktur angewiesen war, markiert 5G Standalone (SA) den nächsten großen Evolutionsschritt. Die Telekom hat Ende 2025 und Anfang 2026 begonnen, 5G-SA in vielen deutschen Städten und Regionen flächendeckend auszurollen. Doch was bedeutet dieser Wechsel eigentlich für Sie als Endnutzer?

In diesem Artikel beleuchten wir detailliert, wie 5G-SA funktioniert, welche technischen Verbesserungen es mit sich bringt und warum es ein essenzieller Schritt für Technologien wie autonomes Fahren, industrielle Automatisierung und das Internet der Dinge (IoT) ist. Wir werden tief in die Netzarchitektur eintauchen, die verwendeten Frequenzbänder analysieren und Ihnen zeigen, wie Sie prüfen können, ob Ihr Smartphone und Ihr Tarif bereits 5G-SA unterstützen.

Die Telekom hat sich zum Ziel gesetzt, bis Ende 2026 über 90% der deutschen Bevölkerung mit 5G-SA zu versorgen. Dies erfordert massive Investitionen in neue Basisstationen, Kernnetz-Infrastruktur und die Modernisierung bestehender Antennenstandorte. Als Telekom-Kunde sind Sie Teil dieser technologischen Revolution, auch wenn Sie sie vielleicht noch gar nicht bewusst wahrnehmen.

## Was ist 5G Standalone (SA) und wie unterscheidet es sich von 5G Non-Standalone (NSA)?

Um die Bedeutung von 5G-SA zu verstehen, müssen wir zunächst klären, wie sich diese Technologie von ihrem Vorgänger unterscheidet. 5G wurde ursprünglich in zwei Phasen eingeführt:

### 5G Non-Standalone (NSA): Der erste Schritt

Bei 5G NSA wird das 5G-Funknetz in Kombination mit dem vorhandenen 4G/LTE-Kernnetz betrieben. Das bedeutet:

- **Abhängigkeit von 4G:** Für die Steuerungssignale (Control Plane) wird weiterhin das 4G-Netz genutzt. 5G übernimmt lediglich die Datenebene (User Plane).

- **Schnellerer Rollout:** Da die vorhandene 4G-Infrastruktur genutzt werden kann, konnte 5G NSA schneller ausgerollt werden.

- **Eingeschränkte Funktionalität:** Einige der versprochenen 5G-Features wie ultra-niedrige Latenzzeiten (URLLC) oder Massive IoT-Konnektivität (mMTC) können mit NSA nur eingeschränkt realisiert werden.

Die Telekom und andere Anbieter haben 5G zunächst in der NSA-Variante ausgerollt, um eine schnelle Abdeckung zu gewährleisten. Für den Endnutzer bedeutete dies zwar höhere Geschwindigkeiten, aber noch keine revolutionären Verbesserungen bei Latenz oder Netzwerkslicherung.

### 5G Standalone (SA): Das unabhängige 5G-Netz

5G-SA hingegen nutzt ein komplett unabhängiges 5G-Kernnetz (5G Core) und 5G-Funknetz. Dies ermöglicht:

- **Geringere Latenz:** Durch das neue Kernnetz und optimierte Protokolle können Ping-Zeiten von unter 10 Millisekunden erreicht werden (im Vergleich zu 30-50 ms bei 4G).

- **Netzwerkslicing (Network Slicing):** Das physische Netz kann logisch in mehrere virtuelle Netze ("Slices") unterteilt werden. Jedes Slice kann spezifisch für eine Anwendung optimiert werden (z.B. ein Slice für autonomes Fahren mit extrem niedriger Latenz, ein anderer für Massen-IoT mit hoher Kapazität).

- **Massive IoT-Konnektivität:** 5G-SA unterstützt deutlich mehr gleichzeitig verbundene Geräte pro Funkzelle.

- **Höhere Effizienz:** Neue Energiesparmodi für Endgeräte und optimierte Signalverarbeitung verlängern die Batterielaufzeit.

- **Edge Computing Integration:** 5G-SA erlaubt die nahtlose Integration von Edge-Computing-Ressourcen, bei denen Daten näher am Endnutzer verarbeitet werden.

Die Telekom setzt bei 5G-SA auf den 3GPP-Standard Release 16 und höher, was fortschrittliche Features wie Dual Connectivity und erweiterte Carrier Aggregation ermöglicht.

## Technische Architektur von 5G-SA bei der Telekom

Der Aufbau eines 5G-SA-Netzes ist komplex und erfordert ein komplett neues Denken in der Netzplanung. Die Telekom nutzt hierbei ein modernes, software-definiertes Netz (SDN) und Network Function Virtualization (NFV).

### Das 5G-Kernnetz (5G Core)

Im Gegensatz zum 4G-EPC (Evolved Packet Core) setzt das 5G-Kernnetz auf eine service-basierte Architektur (SBA). Die wichtigsten Komponenten sind:

- **AMF (Access and Mobility Management Function):** Verwaltet die Konnektivität und Mobilität der Endgeräte.

- **SMF (Session Management Function):** Verwaltet die Datensitzungen und IP-Adresszuweisung.

- **UPF (User Plane Function):** Verarbeitet den eigentlichen Datenverkehr. Durch die Dezentralisierung der UPF (an Edge-Standorten) werden Latenzzeiten minimiert.

- **UDM (Unified Data Management):** Verwaltet Benutzerdaten und Authentifizierung.

Die Telekom nutzt cloud-native Technologien (Container, Microservices), um diese Funktionen dynamisch zu skalieren. Das bedeutet, dass zur Hauptverkehrszeit mehr Ressourcen für die UPF bereitgestellt werden können, während nachts die Kapazität reduziert wird.

### Radio Access Network (RAN): 5G-Sendemasten und Massive MIMO

Die Funkzugangsnetze (RAN) wurden ebenfalls massiv aufgerüstet. Die Telekom setzt verstärkt auf:

- **Massive MIMO (Multiple Input Multiple Output):** Basisstationen mit 64 oder mehr Antennen, die Beamforming nutzen, um das Signal direkt auf das Endgerät zu fokussieren. Dies erhöht die Kapazität und Reichweite drastisch.

- **Small Cells:** In städtischen Hotspots ergänzen klein leistungsstarke Funkzellen (Small Cells) das Makro-Netz, um die Kapazität zu erhöhen.

- **Carrier Aggregation über 5G-Bänder:** 5G-SA erlaubt die Bündelung von bis zu 5 Frequenzbändern (z.B. 700 MHz + 3,6 GHz + 26 GHz), um extrem hohe Datenraten zu erreichen.

Ein wichtiger Aspekt bei 5G-SA ist die Nutzung von höheren Frequenzbändern (C-Band bei 3,6-3,8 GHz und mmWave bei 26 GHz). Während das 700-MHz-Band für die weite Flächenabdeckung sorgt, sorgen die höheren Bänder für die extrem hohen Geschwindigkeiten in städtischen Gebieten.

## Vorteile von 5G-SA für Telekom-Kunden

Warum sollten Sie sich für 5G-SA interessieren? Die Vorteile sind vielfältig und betreffen sowohl private Nutzer als auch Geschäftskunden.

### 1. Deutlich schnelleres Internet und kürzere Ladezeiten

Mit 5G-SA können in theoretischen Idealbedingungen Datenraten von bis zu 3 Gbit/s erreicht werden (bei Nutzung von mmWave und Carrier Aggregation). In der Praxis sind je nach Standort und Netzauslastung Geschwindigkeiten zwischen 500 Mbit/s und 1,5 Gbit/s realistisch. Das bedeutet:

- 4K-Videos streamen ohne Pufferung

- Große Dateien (z.B. 10 GB) in unter einer Minute herunterladen

- Cloud-Gaming ohne Verzögerung (z.B. Xbox Cloud Gaming, GeForce Now)

### 2. Stabilere Verbindungen auch in Menschenmengen

Durch Massive MIMO und die höhere Kapazität des 5G-SA-Netzes bleibt die Verbindung auch auf Konzerten, in Stadien oder auf dem Oktoberfest stabil. Die Telekom hat spezielle "Event-Slices" eingerichtet, die Priorität für Mobilfunk in solchen Situationen garantieren.

### 3. Bessere Batterielaufzeit durch 5G Power Saving Features

5G-SA enthält diverse Energiesparmechanismen für Endgeräte:

- **Connected Mode Discontinuous Reception (C-DRX):** Das Gerät schaltet den Empfänger in regelmäßigen Abständen ab, wenn keine Daten übertragen werden.

- **Small Data Transmission:** Für kleine Datenpakete (z.B. WhatsApp-Nachrichten) wird der Verbindungsaufbau übersprungen, was Energie spart.

Studien zeigen, dass moderne 5G-Smartphones im 5G-SA-Netz eine bis zu 15% längere Batterielaufzeit haben können als im 4G-Netz (bei ähnlicher Nutzung).

### 4. Neue Anwendungen durch extrem niedrige Latenz

Die Latenzzeit (Ping) ist bei 5G-SA so gering, dass völlig neue Anwendungen möglich werden:

- **Autonomes Fahren:** Fahrzeuge können in Echtzeit miteinander und mit der Verkehrsinfrastruktur kommunizieren (V2X).

- **Remote-Surgery:** Ärzte können Operationen ferngesteuert durchführen, da die Verzögerung minimal ist.

- **Augmented Reality (AR) & Virtual Reality (VR):** Immersive Erlebnisse ohne Motion Sickness, da die Latenz unter 20 ms liegt.

- **Industrie 4.0:** Echtzeit-Steuerung von Robotern in der Produktion.

### 5. Netzwerkslicherung für spezifische Anwendungen

Ein einzigartiges Feature von 5G-SA ist Network Slicing. Die Telekom kann logische Netzwerk-Slices erstellen, die garantiert Leistungsmerkmale bieten. Beispiele:

| Slice-Typ | Anwendungsfall | Leistungsmerkmale |
| --- | --- | --- |
| eMBB (enhanced Mobile Broadband) | Video-Streaming, Web-Browsing | Hohe Datenrate, moderater Latenz |
| URLLC (Ultra-Reliable Low Latency Communication) | Autonomes Fahren, Industrie-Automatisierung | Extrem niedrige Latenz (
- **Telekom-App:** Unter dem Menüpunkt "Netz & Empfang" finden Sie eine detaillierte Netzabdeckungskarte, auf der 5G-SA-Erweiterungen angezeigt werden.

- **Online-Netzkarte:** Besuchen Sie telekom.de/netz/netzabdeckung und geben Sie Ihre Adresse ein.

- **Smartphone-Einstellungen:** Wenn Ihr Smartphone mit 5G-SA verbunden ist, wird in der Statusleiste oft "5G+" oder "5G UC" (Ultra Capacity) angezeigt (je nach Hersteller).

** Tipp:** Auch wenn 5G-SA an Ihrem Wohnort noch nicht verfügbar ist, profitieren Sie oft dennoch von besserer 4G-Leistung, da die Telekom die Basisstationen gleichzeitig für 4G und 5G modernisiert.

## Voraussetzungen: Welche Geräte und Tarife unterstützen 5G-SA?

Um 5G-SA nutzen zu können, benötigen Sie drei Dinge:

### 1. Ein kompatibles Smartphone

Nicht jedes 5G-Smartphone unterstützt auch 5G-SA. Erforderlich ist:

- **iPhone:** Ab iPhone 12 oder neuer (mit iOS 16.4 oder neuer).

- **Samsung Galaxy:** Ab Galaxy S21, Galaxy Note 20 Ultra, Galaxy Z Fold/Flip 3 oder neuer.

- **Google Pixel:** Ab Pixel 5 (mit aktuellem Update).

- **Weitere Android-Geräte:** Geräte mit Snapdragon 888, 8 Gen 1 oder Dimensity 1200 Chipsatz und höher unterstützen meist 5G-SA.

Um sicherzugehen, ob Ihr Gerät 5G-SA unterstützt, können Sie in den Einstellungen nach "5G Standalone" suchen oder im Internet nach dem Datenblatt Ihres Geräts suchen.

### 2. Einen entsprechenden Tarif

Die meisten modernen Telekom-Tarife beinhalten bereits 5G-SA. Dazu gehören:

- **MagentaMobil:** Alle Tarife (M, L, XL) unterstützen 5G-SA.

- **MagentaStart:** Ebenfalls inklusive, aber mit-contrahierten Datenratenbegrenzungen.

- **Business-Tarife:** Volle 5G-SA-Unterstützung mit Priorisierung.

Bei sehr alten Tarifen (vor 2022 abgeschlossen) kann es sein, dass ein Tarifwechsel oder eine Optionsbuchung notwendig ist. Kontaktieren Sie in diesem Fall die Telekom-Hotline oder prüfen Sie Ihren Tarif in der Telekom-App.

### 3. Eine moderne SIM-Karte (ISIM)

Für 5G-SA wird technisch gesehen keine neue SIM-Karte benötigt. Allerdings empfiehlt die Telekom aus Gründen der Sicherheit und Netzkompatibilität, auf eine moderne ISIM-Karte oder eSIM umzusteigen. ISIMs unterstützen fortschrittliche Authentifizierungsverfahren, die für bestimmte 5G-SA-Features erforderlich sind.

## Einrichtung und Aktivierung von 5G-SA auf Ihrem Smartphone

Nachdem wir die Voraussetzungen besprochen haben, kommen wir nun zur praktischen Umsetzung. Hier ist eine Schritt-für-Schritt-Anleitung, wie Sie 5G-SA auf Ihrem Smartphone aktivieren:

### Bei iPhone (iOS 16.4+)

- Öffnen Sie **Einstellungen**.

- Tippen Sie auf **Mobiles Netz**.

- Tippen Sie auf **Mobile Datenoptionen**.

- Tippen Sie auf **Sprach- & Daten**.

- Wählen Sie **5G On** oder **5G Auto**.

**5G On:** Erzwingt 5G, auch wenn das Signal schwach ist (höhere Geschwindigkeit, aber kürzere Batterielaufzeit).

- **5G Auto:** Das iPhone wechselt intelligente zwischen 5G und 4G, um die Batterie zu schonen (empfohlen).

- Stellen Sie sicher, dass **5G Standalone** (falls sichtbar) aktiviert ist. Bei neueren iOS-Versionen ist diese Option oft automatisch aktiv.

### Bei Samsung Galaxy (Android 12+)

- Öffnen Sie **Einstellungen**.

- Tippen Sie auf **Verbindungen**.

- Tippen Sie auf **Mobilfunknetze**.

- Tippen Sie auf **Netzwerkmodus**.

- Wählen Sie **5G/4G/3G (automatisch verbinden)** oder **5G bevorzugt**.

- Um 5G-SA spezifisch zu aktivieren, tippen Sie auf **5G-Netzwerksuchlauf** (falls verfügbar in Ihrer Region).

Hinweis: Die Menüführung kann je nach Samsung-Modell und Android-Version leicht variieren.

### Bei anderen Android-Smartphones

- Öffnen Sie **Einstellungen**.

- Tippen Sie auf **Netzwerk & Internet** oder **Verbindungen**.

- Tippen Sie auf **Mobilfunk**.

- Tippen Sie auf **Bevorzugte Netzwerkart**.

- Wählen Sie **5G (empfohlen)** oder **NR/LTE** (NR steht für New Radio, den 5G-Standard).

** Warnung:** Nicht alle Android-Smartphones zeigen eine separate Option für 5G-SA an. Oft wird 5G-SA automatisch aktiviert, wenn das Netz und das Gerät es unterstützen. Sie können dies überprüfen, indem Sie die "Telefon-Informationen" (im WLAN- oder Mobilfunk-Menü auf "Status" tippen) ansehen.

## Häufige Probleme und Lösungen bei 5G-SA

Trotz der vielen Vorteile kann die Nutzung von 5G-SA gelegentlich Probleme bereiten. Hier sind die häufigsten Probleme und deren Lösungen:

### Problem 1: 5G-SA wird nicht angezeigt, obwohl es laut Telekom-App verfügbar sein sollte

**Mögliche Ursachen:**

- Ihr Smartphone unterstützt die 5G-Frequenzen Ihrer Region nicht (z.B. importiertes Smartphone aus den USA ohne Unterstützung für deutsche 5G-Bänder).

- Die 5G-SA-Abdeckung ist an Ihrem exakten Standort noch nicht aktiv (die Telekom-Karte zeigt manchmal eine ungefähre Abdeckung an).

- Ihr Tarif unterstützt 5G-SA noch nicht.

**Lösungen:**

- Starten Sie Ihr Smartphone neu, um eine neue Netzwerksuche zu erzwingen.

- Aktualisieren Sie die Netzwerkeinstellungen (iPhone: Einstellungen → Allgemein → Info → Betriebssystem-Update für Mobilfunknetz).

- Kontaktieren Sie die Telekom-Hotline, um sicherzustellen, dass Ihr Tarif 5G-SA beinhaltet.

- Tauschen Sie Ihre SIM-Karte gegen eine moderne eSIM oder ISIM-Karte.

### Problem 2: 5G-SA-Verbindung ist instabil (häufige Wechsel zu 4G)

**Mögliche Ursachen:**

- 5G-SA-Abdeckung ist an Ihrem Standort grenzwertig (Schattenwurf durch Gebäude, Entfernung zur Basisstation).

- Interferenzen durch andere elektronische Geräte.

- Software-Bug im Modem Ihres Smartphones.

**Lösungen:**

- Platzieren Sie sich näher an ein Fenster oder einen anderen Ort mit besserer Sichtlinie zur Basisstation.

- Deaktivieren Sie 5G-SA vorübergehend und nutzen Sie 5G NSA oder 4G, um zu prüfen, ob die Instabilität weiterhin besteht.

- Führen Sie ein Factory Reset Ihres Smartphones durch (nach Datensicherung), um tiefgreifende Softwareprobleme zu beheben.

- Installieren Sie alle verfügbaren Software-Updates für Ihr Smartphone.

### Problem 3: Geringe Geschwindigkeit trotz 5G-SA

**Mögliche Ursachen:**

- Netzüberlastung (zu viele Nutzer in derselben Zelle).

- Ihr Tarif hat eine Datenratenbegrenzung (z.B. bei MagentaStart).

- Ihr Smartphone unterstützt keine Carrier Aggregation über mehrere Bänder.

**Lösungen:**

- Messen Sie die Geschwindigkeit zu verschiedenen Tageszeiten (z.B. nachts ist das Netz weniger ausgelastet).

- Prüfen Sie in der Telekom-App, ob Sie sich in einem Gebiet mit hoher Netzlast befinden.

- Wenn möglich, wechseln Sie in einen höheren Tarif (z.B. von MagentaStart zu MagentaMobil M oder L), der höhere Priorisierung und Datenraten bietet.

- Aktivieren Sie Wi-Fi Call, um Anrufe über WLAN zu führen und die Mobilfunkressourcen für Datentransfer freizugeben.

## Zukunft von 5G-SA und Ausblick auf 6G

Die Telekom blickt nicht nur auf die unmittelbare Zukunft von 5G-SA, sondern bereitet sich auch schon auf die nächste Generation vor. Hier sind einige Entwicklungen, die wir in den nächsten Jahren erwarten können:

### 5G-Advanced (5.5G): Die Brücke zu 6G

5G-Advanced (basierend auf 3GPP Release 18 und höher) wird ab 2027 kommerziell verfügbar sein und bietet weitere Verbesserungen:

- **1024-QAM:** Noch höhere spektrale Effizienz für Datenraten bis zu 10 Gbit/s.

- **AI-gestützte Netzwerkoptimierung:** Das Netz nutzt künstliche Intelligenz, um den Datenverkehr vorherzusagen und Ressourcen dynamisch zuzuweisen.

- **Integrated Sensing and Communication (ISAC):** Das Netz kann nicht nur kommunizieren, sondern auch die Umgebung "sensen" (ähnlich wie Radar), was Anwendungen wie autonomes Fahren weiter verbessert.

- **Satelliten-Integration:** 5G-Advanced wird die nahtlose Integration von Satellitenkommunikation ermöglichen, um global Abdeckung zu bieten (auch in der Wüste oder auf dem Meer).

Die Telekom hat angekündigt, 5G-Advanced ab 2027 in ausgewählten Städten zu testen. Als Telekom-Kunde werden Sie von diesen Verbesserungen automatisch profitieren, sobald Ihr Smartphone und das Netz dafür bereit sind.

### 6G: Die Vision für 2030 und darüber hinaus

Während 5G-SA noch immer im Ausbau ist, forschen die Telekom und andere Partner bereits an 6G. Einige der versprochenen Features von 6G sind:

- **Terabit-Geschwindigkeiten:** 6G könnte theoretische Geschwindigkeiten von 1 Tbit/s erreichen.

- **Sub-Millisekunden-Latenz:** Für Echtzeit-Anwendungen wie Haptik-Feedback in der Telechirurgie.

- **Terahertz-Frequenzen:** Nutzung von Frequenzen über 100 GHz für extrem hohe Datenraten.

- **Holographische Kommunikation:** 6G könnte die Übertragung von Hologrammen in Echtzeit ermöglichen.

- **Brain-Computer Interfaces:** Direkte Kommunikation zwischen menschlichem Gehirn und Netzwerk (noch Zukunftsmusik).

Es wird erwartet, dass 6G ab 2030 kommerziell verfügbar sein wird. Die Telekom ist Mitglied in verschiedenen 6G-Forschungskonsortien und trägt aktiv zur Standardisierung bei.

## Fazit: 5G-SA ist die Zukunft des Mobilfunks – und die Zukunft hat bereits begonnen

5G Standalone ist mehr als nur ein Marketingbegriff. Es ist eine grundlegende Veränderung der Art und Weise, wie Mobilfunknetze aufgebaut sind und wie wir kommunizieren. Durch die Kombination aus extrem niedrigen Latenzzeiten, hohen Datenraten und Netzwerkslicherung eröffnet 5G-SA völlig neue Möglichkeiten für Privatnutzer, Unternehmen und die Gesellschaft als Ganzes.

Die Telekom hat sich zum Ziel gesetzt, Deutschland mit dem modernsten und leistungsfähigsten 5G-SA-Netz auszustatten. Als Telekom-Kunde sind Sie bereits heute Teil dieser technologischen Revolution. Durch die in diesem Artikel beschriebenen Schritte können Sie sicherstellen, dass Sie das volle Potenzial von 5G-SA ausschöpfen.

Zusammenfassend sind hier die wichtigsten Punkte, die Sie sofort umsetzen können:

- Prüfen Sie, ob Ihr Smartphone und Ihr Tarif 5G-SA unterstützen.

- Aktivieren Sie 5G-SA in den Einstellungen Ihres Smartphones.

- Nutzen Sie die Telekom-App, um die 5G-SA-Abdeckung an Ihrem Standort zu prüfen.

- Messen Sie regelmäßig Ihre Geschwindigkeit und senden Sie Feedback an die Telekom, um den Netzausbau in Ihrer Region zu unterstützen.

- Bleiben Sie über die neuesten Entwicklungen (5G-Advanced, 6G) informiert, um in Zukunft keine Möglichkeiten zu verpassen.

Die Reise in die Zukunft des Mobilfunks hat gerade erst begonnen. Mit 5G-SA und der Telekom haben Sie den idealen Partner an Ihrer Seite, um diese aufregende Reise mitzugestalten.

** Abschließender Tipp:** Besuchen Sie regelmäßig die Webseite der Telekom (telekom.de/5g-sa) für die neuesten Informationen zu Netzausbau und 5G-SA-Verfügbarkeit.

**Weitere Ressourcen:**
- Telekom: 5G Standalone Informationen
- Bundesnetzagentur: 5G-Monitoring
- 3GPP Release 16: Der Standard für 5G-SA
- netzpul: 5G Netzwerk-Optimierung 2026

*Letztes Update: Mai 2026*
