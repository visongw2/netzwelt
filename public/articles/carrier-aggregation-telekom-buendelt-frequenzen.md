# Carrier Aggregation: Telekom bündelt Frequenzen für maximale Datenraten
<!-- description: Deutsche Telekom: Tarife, Netzabdeckung und Services. Erfahren Sie, warum Telekom der führende Mobilfunkanbieter in Deutschland ist. -->


*Carrier Aggregation (CA) ist eine Schlüsseltechnologie der Telekom, um die Datenraten im Mobilfunknetz drastisch zu erhöhen. Erfahren Sie, wie die Bündelung mehrerer Frequenzbänder funktioniert und welche Vorteile sie für Kunden bietet.*

## Einleitung

In der modernen Mobilfunktechnologie ist die effiziente Nutzung des Frequenzspektrums entscheidend für die Bereitstellung hoher Datenraten und einer stabilen Netzabdeckung. **Carrier Aggregation (CA)**, zu Deutsch "Trägerbündelung", ist eine Technologie, die es ermöglicht, mehrere Frequenzbänder (Carrier) gleichzeitig zu nutzen, um die verfügbare Bandbreite und damit die Datenübertragungsrate zu erhöhen.

Die Deutsche Telekom hat Carrier Aggregation bereits im 4G/LTE-Netz eingeführt und setzt die Technologie nun verstärkt in ihrem 5G-Netz ein. In diesem Artikel erklären wir detailliert, wie Carrier Aggregation funktioniert, welche technischen Voraussetzungen erfüllt sein müssen und wie die Telekom die Technologie in ihrem Netz einsetzt, um Kunden die bestmögliche Surfgeschwindigkeit zu bieten.

## Was ist Carrier Aggregation?

### Grundlagen der Trägerbündelung

Carrier Aggregation ist eine Funktion, die im 3GPP-Standard (3rd Generation Partnership Project) spezifiziert ist. Sie wurde erstmals im Rahmen von **LTE-Advanced (Release 10)** im Jahr 2011 eingeführt und ist seitdem ein fester Bestandteil moderner Mobilfunknetze.

**Das Grundprinzip:**
- Ein Endgerät (Smartphone, Tablet, Router) kann gleichzeitig Daten über **mehrere Frequenzbänder** senden und empfangen
- Die Daten werden auf die verschiedenen Träger (Carrier) aufgeteilt, um die Gesamtbandbreite zu erhöhen
- Die Bandbreite eines einzelnen Carriers ist durch die zugewiesenen Frequenzen begrenzt (z.B. 20 MHz bei LTE)
- Durch Bündelung mehrerer Carrier kann die Bandbreite erhöht werden (z.B. 20 MHz + 20 MHz = 40 MHz effektive Bandbreite)

### Technische Klassifizierung der Carrier Aggregation

Es gibt verschiedene Arten der Carrier Aggregation, abhängig davon, wie die Frequenzbänder kombiniert werden:

1. **Intra-Band Contiguous CA:**
   - Bündelung von benachbarten Frequenzblöcken innerhalb desselben Frequenzbands
   - Beispiel: Bündelung von zwei 10-MHz-Blöcken im 1,8-GHz-Band zu einem 20-MHz-Block
   - **Vorteil:** Einfachste Implementierung, keine komplexe Filterung erforderlich
   - **Nachteil:** Erfordert zusammenhängendes Spektrum, das oft nicht verfügbar ist

2. **Intra-Band Non-Contiguous CA:**
   - Bündelung von nicht-benachbarten Frequenzblöcken innerhalb desselben Frequenzbands
   - Beispiel: Bündelung von 10 MHz bei 1,81 GHz und 10 MHz bei 1,83 GHz (beide im 1,8-GHz-Band)
   - **Vorteil:** Effizientere Nutzung fragmentierter Spektrumsteile
   - **Nachteil:** Erfordert komplexere Filter und Signalverarbeitung

3. **Inter-Band CA:**
   - Bündelung von Frequenzbändern in unterschiedlichen Frequenzbereichen
   - Beispiel: Bündelung von 1,8 GHz (LTE) und 3,5 GHz (5G)
   - **Vorteil:** Maximale Flexibilität, da Funkzellen oft mehrere Bänder gleichzeitig nutzen
   - **Nachteil:** Erfordert mehrere Sendeempfänger (Transceiver) im Endgerät

### Carrier Aggregation im LTE- vs. 5G-Netz

**LTE-Advanced (4G):**
- Theoretisch maximal **5 Carrier** (5CA) mit einer Gesamtbandbreite von bis zu 100 MHz
- Datenraten: Theoretisch bis zu 1 Gbit/s im Downlink
- In der Praxis: Meist 2CA oder 3CA mit Bandbreiten von 40-60 MHz

**5G (NR - New Radio):**
- Theoretisch maximal **16 Carrier** mit einer Gesamtbandbreite von bis zu 1000 MHz (1 GHz)
- Datenraten: Theoretisch bis zu 20 Gbit/s im Downlink
- In der Praxis (2025/2026): Meist 4CA oder 5CA mit Bandbreiten von 100-200 MHz

## Carrier Aggregation bei der Telekom

### Frequenzportfolio der Telekom

Die Telekom verfügt über ein breites Frequenzspektrum, das sie für Carrier Aggregation nutzt:

| Frequenzbereich | Band | Bandbreite | Primärnutzung |
|----------------|------|-------------|---------------|
| 700 MHz | Band 28 | 2x 5 MHz (erweiterbar) | Flächendeckung, 5G |
| 800 MHz | Band 20 | 2x 10 MHz | Flächendeckung, 4G/5G |
| 1,8 GHz | Band 3 | 2x 20 MHz | Kapazität, 4G/5G |
| 2,1 GHz | Band 1 | 2x 15 MHz | Kapazität, 4G/5G |
| 2,6 GHz (TDD) | Band 38/41 | 20 MHz | Hotspots, 4G/5G |
| 3,5 GHz (TDD) | Band 78 | 40-100 MHz | 5G Hotspots, hohe Datenraten |
| 26 GHz (mmWave) | Band 261/257 | bis zu 400 MHz | 5G, spezialisierte Anwendungen |

### Carrier Aggregation in der Praxis (Telekom-Netz)

Die Telekom setzt Carrier Aggregation in verschiedenen Konfigurationen ein:

**Typische 4G-LTE-Konfigurationen:**
1. **2CA (Dual Carrier):**
   - Kombination: 1,8 GHz (20 MHz) + 800 MHz (10 MHz)
   - Gesamtbandbreite: 30 MHz
   - Typische Datenrate: 150-225 Mbit/s im Downlink

2. **3CA (Triple Carrier):**
   - Kombination: 1,8 GHz (20 MHz) + 2,1 GHz (15 MHz) + 800 MHz (10 MHz)
   - Gesamtbandbreite: 45 MHz
   - Typische Datenrate: 225-337 Mbit/s im Downlink

**Typische 5G-NSA/SA-Konfigurationen (2025/2026):**
1. **4CA in 5G:**
   - Kombination: 3,5 GHz (100 MHz) + 1,8 GHz (20 MHz) + 700 MHz (10 MHz) + 26 GHz (200 MHz)
   - Gesamtbandbreite: 330 MHz
   - Typische Datenrate: 500 Mbit/s bis 1 Gbit/s im Downlink

### Voraussetzungen für Carrier Aggregation

Damit Kunden von Carrier Aggregation profitieren können, müssen mehrere technische Voraussetzungen erfüllt sein:

1. **Endgerät-Unterstützung:**
   - Das Smartphone/Modem muss die genutzten Frequenzbänder und die CA-Konfiguration unterstützen
   - Beispiele für unterstützte Geräte:
     - **Samsung Galaxy S23/S24:** Unterstützt bis zu 5CA in 5G
     - **iPhone 14/15:** Unterstützt 4CA in 5G
     - **Google Pixel 7/8:** Unterstützt 3CA in 5G

2. **Netzabdeckung:**
   - Die Funkzelle muss mehrere Frequenzbänder gleichzeitig ausstrahlen
   - In ländlichen Gebieten oft nur 2CA (z.B. 800 MHz + 1,8 GHz)
   - In städtischen Gebieten oft 3CA oder 4CA (zusätzliche Nutzung von 2,1 GHz und 3,5 GHz)

3. **Netzauslastung:**
   - Carrier Aggregation wird dynamisch zugewiesen
   - Bei hoher Netzauslastung kann die Anzahl der aggregierten Carrier reduziert werden

## Technische Details und Protokolle

### MAC-Layer-Anpassungen für Carrier Aggregation

Die Implementierung von Carrier Aggregation erfordert signifikante Änderungen im **Medium Access Control (MAC)**-Layer des Mobilfunkprotokolls:

1. **Scheduling:**
   - Der Netzbetreiber (eNodeB bei LTE, gNB bei 5G) muss den Datenverkehr dynamisch auf die verschiedenen Carrier verteilen
   - **Proportional Fair Scheduling:** Berücksichtigt Kanalqualität und Fairness zwischen Nutzern
   - **Water-Filling-Algorithmus:** Optimale Leistungsverteilung über die Carrier hinweg

2. **HARQ (Hybrid Automatic Repeat Request):**
   - Fehlerkorrektur muss über mehrere Carrier koordiniert werden
   - Jeder Carrier hat eigene HARQ-Prozesse

3. **Link Adaptation:**
   - Die Modulation und Codierung (MCS - Modulation and Coding Scheme) wird für jeden Carrier individuell angepasst
   - Berücksichtigt die spezifische Kanalqualität (CQI - Channel Quality Indicator) jedes Carriers

### Uplink Carrier Aggregation (UL CA)

Während Downlink-Carrier-Aggregation (vom Netz zum Endgerät) bereits weit verbreitet ist, wird **Uplink-Carrier-Aggregation** erst seit 5G (3GPP Release 16) häufiger eingesetzt:

- **Herausforderung:** Endgeräte haben begrenzte Sendeleistung; multiple gleichzeitige Uplinks belasten den Akku stark
- **Lösung:** **Uplink Data Compression (UDC)** und **Power Management**
- **Praktischer Nutzen:** Schnellere Uploads (z.B. Video-Uploads, Cloud-Backups)

## Praktische Vorteile für Telekom-Kunden

### Messbare Verbesserungen der Datenraten

Die Nutzung von Carrier Aggregation führt zu deutlich höheren Datenraten:

| Szenario | Ohne CA | Mit 2CA | Mit 4CA (5G) |
|----------|---------|---------|---------------|
| Downlink (Download) | 75 Mbit/s | 150-225 Mbit/s | 500-1000 Mbit/s |
| Uplink (Upload) | 25 Mbit/s | 50 Mbit/s | 100-200 Mbit/s |
| Latenz | 30-50 ms | 25-40 ms | 5-10 ms (5G-SA) |

### Verbesserte Netzabdeckung und Gebäudedurchdringung

Durch die Bündelung von niedrigen Frequenzen (700 MHz, 800 MHz) mit höheren Frequenzen (1,8 GHz, 3,5 GHz) kombiniert Carrier Aggregation:
- **Reichweite** (durch niedrige Frequenzen)
- **Kapazität und Geschwindigkeit** (durch hohe Frequenzen)

Dies führt zu einer stabileren Verbindung, insbesondere in Gebäudeinneren und ländlichen Gebieten.

### Bessere Unterstützung von Bandbreiten-intensiven Anwendungen

Carrier Aggregation ermöglicht:
- **4K/8K-Video-Streaming** ohne Buffering
- **Cloud-Gaming** (z.B. Xbox Cloud Gaming, GeForce Now) mit minimaler Latenz
- **Videokonferenzen** in hoher Auflösung (4K, HDR)
- **Schnelle Downloads** großer Dateien (z.B. Spiele, Filme)

## Herausforderungen und Lösungen

### Interferenzen zwischen den Carriern

Wenn mehrere Frequenzbänder gleichzeitig genutzt werden, können Interferenzen auftreten:
- **Lösung:** Einsatz von **Advanced Receiver Algorithms** und **Inter-Carrier Interference (ICI)-Unterdrückung**

### Erhöhter Energieverbrauch der Endgeräte

Die Nutzung mehrerer Sendeempfänger (Transceiver) erhöht den Energieverbrauch:
- **Lösung:** **Power Saving Mode (PSM)** und **Discontinuous Reception (DRX)** in 5G

### Komplexität der Netzplanung

Die Planung von Funkzellen mit Carrier Aggregation ist komplexer:
- **Lösung:** Einsatz von **Künstlicher Intelligenz (KI)** und **Self-Organizing Networks (SON)** für automatisierte Optimierung

## Zukunft von Carrier Aggregation

### 5G-Advanced und 6G

In zukünftigen Mobilfunkgenerationen wird Carrier Aggregation weiterentwickelt:
- **5G-Advanced (3GPP Release 18/19):** Unterstützung von bis zu 8CA
- **6G (ab 2030):** Integration von Terahertz-Frequenzen und noch breiteren Bandbreiten

### Integration von Satellitenkommunikation (NTN)

Carrier Aggregation wird in Zukunft auch **terrestrische Netze** mit **Satellitennetzen** (Non-Terrestrial Networks, NTN) bündeln:
- Beispiel: Bündelung von 5G (3,5 GHz) mit LEO-Satelliten (z.B. Starlink)
- **Vorteil:** Globale Abdeckung, auch in abgelegenen Gebieten

## Fazit

Carrier Aggregation ist eine Schlüsseltechnologie, die es der Telekom ermöglicht, die effektive Bandbreite ihres Frequenzspektrums zu maximieren und Kunden höchste Datenraten zu bieten. Durch die Bündelung mehrerer Frequenzbänder (z.B. 700 MHz + 1,8 GHz + 3,5 GHz + 26 GHz) werden theoretische Spitzenraten von über 1 Gbit/s im 5G-Netz erreicht.

Für Endkunden bedeutet dies:
- **Schnellere Downloads und Uploads**
- **Stabilere Verbindungen** in Gebäuden und ländlichen Gebieten
- **Bessere Unterstützung** von bandbreitenintensiven Anwendungen (Video-Streaming, Cloud-Gaming, Videokonferenzen)

Die Telekom wird Carrier Aggregation in Zukunft weiter ausbauen, insbesondere in Kombination mit 5G Standalone (SA) und Network Slicing. Dies wird die Grundlage für zukünftige Anwendungen wie **autonomes Fahren, Industrie 4.0 und XR (Extended Reality)** bilden.

**Carrier Aggregation ist und bleibt ein zentraler Pfeiler der Telekom-Strategie für den Aufbau des leistungsfähigsten Mobilfunknetzes in Deutschland.**

---

*Stand der Informationen: Mai 2026. Technische Daten können sich durch laufende Netzoptimierungen ändern.*
