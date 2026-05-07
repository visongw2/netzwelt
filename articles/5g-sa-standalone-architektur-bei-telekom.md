# 5G-SA: Standalone-Architektur bei der Telekom – Technische Innovation trifft auf Netzmodernisierung
<!-- description: 5G-Netzausbau 2026: Aktueller Stand in Deutschland. Erfahren Sie alles über Geschwindigkeit, Abdeckung und die Zukunft der Mobilfunknetze. -->


*Die Deutsche Telekom rollt die 5G Standalone-Architektur bundesweit aus und setzt damit neue Maßstäbe in der Mobilfunktechnologie.*

## Einleitung

Die Evolution des Mobilfunks steht vor einem bedeutenden Meilenstein: Während die erste Phase von 5G (Non-Standalone, NSA) noch auf der bestehenden 4G/LTE-Infrastruktur aufbaute, markiert der Übergang zu 5G Standalone (SA) den Beginn einer völlig neuen Ära der Telekommunikation. Die Deutsche Telekom, als einer der führenden Netzbetreiber in Europa, hat im Jahr 2025 damit begonnen, die 5G-SA-Architektur flächendeckend in ihrem Netz zu implementieren.

Dieser Artikel bietet eine umfassende technische Analyse der 5G-SA-Architektur bei der Telekom, beleuchtet die zugrundeliegenden Technologien, erklärt die Unterschiede zur Vorgängergeneration und diskutiert die praktischen Auswirkungen für Endkunden sowie Unternehmen.

## Was ist 5G Standalone (SA)?

### Grundlegende Architektur-Unterschiede

Um die Bedeutung von 5G Standalone zu verstehen, muss man zunächst die architektonischen Unterschiede zwischen 5G Non-Standalone (NSA) und 5G Standalone (SA) verstehen:

**5G Non-Standalone (NSA):**
- Nutzt das bestehende 4G/LTE-Kernnetz (EPC - Evolved Packet Core)
- 5G-Funkzellen (gNB) werden an das LTE-Netz angebunden
- Stellt primär eine Übergangslösung dar
- Ermöglicht schnelleren 5G-Ausbau, aber mit eingeschränkten Funktionen

**5G Standalone (SA):**
- Verfügt über ein eigenständiges 5G-Kernnetz (5GC - 5G Core)
- Nutzt ausschließlich 5G-Funkzellen (gNB) und 5G-Core
- Bietet die volle Funktionalität des 5G-Standards (3GPP Release 16 und höher)
- Ermöglicht Network Slicing, Ultra-Reliable Low Latency Communications (URLLC) und Massive IoT

### Technische Komponenten der 5G-SA-Architektur

Die 5G-SA-Architektur besteht aus mehreren kritischen Komponenten:

1. **NG-RAN (Next Generation Radio Access Network):**
   - Besteht aus gNB (Next Generation Node B) Basisstationen
   - Unterstützt erweiterte Funktionen wie Beamforming und Massive MIMO
   - Nutzt sowohl niedrige Frequenzen (700 MHz, 900 MHz) als auch mittlere (1,8 GHz, 2,1 GHz) und hohe Frequenzen (3,5 GHz, 26 GHz)

2. **5G Core (5GC):**
   - Service-basierte Architektur (SBA)
   - Besteht aus verschiedenen Network Functions (NFs):
     - AMF (Access and Mobility Management Function)
     - SMF (Session Management Function)
     - UPF (User Plane Function)
     - UDM (Unified Data Management)
     - AUSF (Authentication Server Function)
   - Ermöglicht flexible Skalierung und Virtualisierung (NFV)

3. **Network Slicing:**
   - Logische Trennung des physischen Netzes in mehrere virtuelle Netze
   - Jedes Slice kann individuell für spezifische Anwendungsfälle optimiert werden
   - Beispiele:
     - **eMBB-Slice (Enhanced Mobile Broadband):** Für hohe Datenraten (z.B. Video-Streaming)
     - **URLLC-Slice:** Für extrem niedrige Latenzzeiten (z.B. autonomes Fahren, Industrie 4.0)
     - **mMTC-Slice (Massive Machine Type Communications):** Für Millionen von IoT-Geräten

## Die Implementierung bei der Telekom

### Aktueller Ausbaustatus (Stand 2025-2026)

Die Deutsche Telekom hat im Jahr 2025 die flächendeckende Implementierung von 5G-SA in Deutschland vorangetrieben. Laut offiziellen Unternehmensangaben erreicht das 5G-Netz der Telekom mittlerweile über 95% der deutschen Bevölkerung, wobei die SA-Architektur schrittweise in den Ballungszentren und entlang der Verkehrsachsen aktiviert wird.

**Wichtige Meilensteine:**
- **2020-2022:** 5G-Start mit NSA-Architektur
- **2023-2024:** Testbetrieb von 5G-SA in ausgewählten Städten (z.B. Berlin, München, Hamburg)
- **2025:** Beginn der kommerziellen Ausrollung von 5G-SA
- **2026:** Geplante flächendeckende Verfügbarkeit in allen größeren Städten

### Technische Details der Telekom-Implementierung

Die Telekom setzt bei ihrem 5G-SA-Ausbau auf folgende technische Strategien:

1. **Frequenzstrategie:**
   - **700 MHz:** Für flächendeckende Versorgung (gute Gebäudedurchdringung)
   - **1,8 GHz und 2,1 GHz:** Für Kapazitätserweiterung in städtischen Gebieten
   - **3,5 GHz:** Für hohe Datenraten in Hotspots
   - **26 GHz (mmWave):** Für spezialisierte Anwendungen (noch im Teststadium)

2. **Antennentechnologie:**
   - Einsatz von **Massive MIMO** (64T64R-Konfigurationen in städtischen Gebieten)
   - **Beamforming** zur gezielten Ausrichtung des Signals auf Endgeräte
   - **Dynamic TDD** zur flexiblen Anpassung von Uplink/Downlink-Kapazitäten

3. **Kernnetz-Virtualisierung:**
   - Einsatz von **NFV (Network Functions Virtualization)** und **SDN (Software-Defined Networking)**
   - Containerisierte Network Functions (Docker, Kubernetes)
   - Redundante Rechenzentrums-Infrastruktur für hohe Ausfallsicherheit

### Network Slicing bei der Telekom

Ein herausragendes Merkmal von 5G-SA ist das Network Slicing, das die Telekom insbesondere für Geschäftskunden (B2B) anbietet:

- **Industry 4.0 Slice:** 
  - Garantierte Latenzzeiten < 1 ms
  - Priorisierter Datenverkehr für kritische industrielle Anwendungen
  - Beispiel: Echtzeit-Steuerung von Robotern in der Automobilproduktion

- **Public Safety Slice:**
  - Dediziertes Netzslice für Behörden und Rettungskräfte
  - Höchste Verfügbarkeit und Priorisierung im Notfall

- **Consumer eMBB Slice:**
  - Optimiert für hohe Datenraten im Downlink
  - Ideal für 4K/8K-Video-Streaming und XR-Anwendungen (VR/AR)

## Praktische Vorteile für Endkunden

### Messbare Verbesserungen

Die Umstellung auf 5G-SA bietet für Endkunden mehrere konkrete Vorteile:

1. **Niedrigere Latenzzeiten:**
   - 4G/LTE: 30-50 ms
   - 5G-NSA: 20-30 ms
   - 5G-SA: 5-10 ms (theoretisch bis zu 1 ms in URLLC-Szenarien)
   - **Praktischer Nutzen:** Verzögerungsfreies Cloud-Gaming, reaktionsschnelle VR-Anwendungen

2. **Höhere Datenraten:**
   - Downlink: Bis zu 1 Gbit/s im realen Netzbetrieb (theoretisch bis zu 20 Gbit/s)
   - Uplink: Bis zu 100 Mbit/s (wichtig für Video-Uploads, Live-Streaming)
   - **Praktischer Nutzen:** Schnellere Downloads, reibungsloses 4K-Streaming

3. **Bessere Netzabdeckung:**
   - Durch die Nutzung der 700-MHz-Frequenz auch in ländlichen Gebieten und im Gebäudeinneren
   - **Praktischer Nutzen:** Weniger Funklöcher, stabilere Verbindungen

4. **Längere Akkulaufzeit:**
   - 5G-SA ermöglicht **Power Saving Mode (PSM)** und **Extended Discontinuous Reception (eDRX)**
   - Das Endgerät kann in tiefere Schlafmodi wechseln, wenn keine Daten übertragen werden
   - **Praktischer Nutzen:** Bis zu 20% längere Akkulaufzeit im Vergleich zu 5G-NSA

### Voraussetzungen für Endkunden

Um die Vorteile von 5G-SA nutzen zu können, benötigen Kunden:

1. **Kompatibles Endgerät:**
   - Smartphone mit 5G-SA-Unterstützung (z.B. iPhone 14/15, Samsung Galaxy S23/S24, Google Pixel 7/8)
   - Das Gerät muss das 5G-Band n78 (3,5 GHz) und idealerweise n28 (700 MHz) unterstützen

2. **Aktivierung durch Provider:**
   - Die Telekom aktiviert 5G-SA schrittweise in verschiedenen Regionen
   - Kunden können in der Telekom-App oder im Kundencenter prüfen, ob 5G-SA in ihrem Gebiet verfügbar ist

3. **Passender Tarif:**
   - 5G-SA ist in der Regel in allen 5G-fähigen Telekom-Tarifen enthalten (MagentaMobil-Tarife)
   - Keine zusätzlichen Kosten für Endkunden

## Auswirkungen auf Unternehmen und Industrie

### Industrie 4.0 und IIoT (Industrial Internet of Things)

5G-SA ist ein Schlüsselenabler für die vierte industrielle Revolution. Die Telekom bietet spezialisierte 5G-SA-Lösungen für Unternehmen an:

**Anwendungsbeispiele:**
1. **Echtzeit-Steuerung von Produktionsanlagen:**
   - Latenzzeiten < 1 ms ermöglichen die Echtzeit-Steuerung von Robotern und CNC-Maschinen
   - Beispiel: BMW nutzt 5G-SA in seiner Produktion für drahtlose Steuerung von Robotern

2. **Augmented Reality (AR) in der Wartung:**
   - Techniker können über AR-Brillen (z.B. Microsoft HoloLens) in Echtzeit von Experten fernunterstützt werden
   - 5G-SA garantiert die notwendige Bandbreite und Latenz für hochauflösende Videostreams

3. **Drahtlose Sensorik und Aktuatorik:**
   - Tausende von Sensoren in einer Fabrikhalle können drahtlos angebunden werden (mMTC)
   - Kostenersparnis durch Wegfall von teuren Kabelinstallationen

### Private 5G-Netze (Private SA Networks)

Die Telekom bietet Unternehmen auch den Aufbau privater 5G-SA-Netze an:

- **Dedizierte Hardware:**private 5G-Core und Basisstationen auf dem Firmengelände
- **Vollständige Kontrolle:** Das Unternehmen verwaltet sein eigenes Netz (Sicherheit, Latenz, Bandbreite)
- **Beispiele:**
  - **Luftfahrt:** Airbus nutzt ein privates 5G-SA-Netz in seiner Produktion in Hamburg
  - **Logistik:** Containerhäfen nutzen 5G-SA für die Steuerung von automatisierten Kränen

## Technische Herausforderungen und Lösungen

### Spektrumkoordination und Nachbarschaftsinterferenzen

Ein technisches Problem bei der Implementierung von 5G-SA ist die Koordination der Frequenzen mit bestehenden 4G/LTE-Netzen. Die Telekom nutzt **Dynamic Spectrum Sharing (DSS)**, um Frequenzen flexibel zwischen 4G und 5G aufzuteilen.

### Abdeckungslücken in ländlichen Gebieten

Um auch in ländlichen Gebieten eine gute 5G-SA-Abdeckung zu gewährleisten, setzt die Telekom auf:
- **700-MHz-Frequenz:** Große Reichweite, gute Gebäudedurchdringung
- **Small Cells:** Ergänzende kleine Zellen in entlegene Gebiete
- **Satelliten-Backhaul:** Für extrem abgelegene Gebiete ohne Glasfaseranbindung

### Energieeffizienz des 5G-SA-Netzes

5G-SA ist energieeffizienter als 4G/LTE (pro übertragenem Bit). Die Telekom setzt auf:
- **Sleep-Modi** für Basisstationen in Zeiten geringer Auslastung
- **Erneuerbare Energien** zur Stromversorgung von Mobilfunkstandorten

## Zukunftsperspektiven: 6G und Beyond

Während 5G-SA gerade erst kommerziell ausgerollt wird, forscht die Telekom bereits an der nächsten Generation:

- **6G:** Geplante Kommerzialisierung ab 2030
  - Erwartete Datenraten: Bis zu 1 Tbit/s
  - Latenzzeiten: < 0,1 ms
  - Integration von KI in das Netz (AI-Native Air Interface)

- **Satelliten-Integration (NTN - Non-Terrestrial Networks):**
  - 5G-SA wird um Satellitenkommunikation erweitert (z.B. Starlink-Integration)
  - Globale Abdeckung, auch in abgelegenen Gebieten

## Fazit

Die Einführung von 5G Standalone bei der Deutschen Telekom markiert einen technologischen Wendepunkt in der deutschen Mobilfunklandschaft. Im Gegensatz zur ersten 5G-Phase (NSA) bietet 5G-SA die volle Funktionalität des 5G-Standards: niedrigere Latenzzeiten, höhere Datenraten, Network Slicing und massive IoT-Unterstützung.

Für Endkunden bedeutet dies spürbare Verbesserungen bei der Netzleistung, während Unternehmen durch neue Anwendungsmöglichkeiten (Industrie 4.0, private 5G-Netze) wettbewerbsfähiger werden.

Die Telekom hat sich ehrgeizige Ziele gesetzt: Bis 2026 soll 5G-SA in allen größeren deutschen Städten verfügbar sein. Angesichts des derzeitigen Ausbautempos und der technologischen Überlegenheit von 5G-SA ist dies ein realistisches Ziel.

**Die Zukunft des Mobilfunks ist 5G Standalone – und die Telekom ist dabei ganz vorne mit dabei.**

---

*Stand der Informationen: Mai 2026. Technische Daten können sich durch laufende Netzoptimierungen ändern.*
