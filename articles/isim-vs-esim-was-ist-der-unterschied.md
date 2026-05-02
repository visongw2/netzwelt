# iSIM vs. eSIM: Was ist der Unterschied? Umfassender Technik-Vergleich 2026

*Die Welt der Mobilfunktechnik entwickelt sich rasant. Nach der eSIM (embedded SIM) folgt nun die **iSIM (Integrated SIM)** – direkt in den Prozessor integriert. Dieser umfassende Artikel erklärt die technischen Unterschiede, Vor- und Nachteile sowie Zukunftsperspektiven von iSIM und eSIM.*

## Einleitung

Die **SIM-Karte** hat in den letzten 30 Jahren eine erstaunliche Evolution durchgemacht:
1. **1991:** Full-size SIM (Plastikkarte, groß wie eine Scheckkarte)
2. **1996:** Mini-SIM (2FF)
3. **2010:** Micro-SIM (3FF, erstmals im iPad und iPhone 4)
4. **2012:** Nano-SIM (4FF, aktueller Standard für physische SIMs)
5. **2018:** **eSIM (embedded SIM)** – Chip fest auf dem Mainboard verlötet
6. **2023-2026:** **iSIM (Integrated SIM)** – SIM-Funktion direkt in den Prozessor (SoC) integriert

**Warum dieser Vergleich wichtig ist:**
- **Platzersparnis:** iSIM benötigt nahezu keinen physischen Platz mehr.
- **Energieeffizienz:** iSIM verbraucht weniger Energie als eSIM.
- **Kosten:** iSIM könnte langfristig günstiger in der Massenproduktion sein.
- **Sicherheit:** iSIM bietet hardwarebasierte Sicherheit auf höchstem Niveau.

In diesem detaillierten Artikel analysieren wir:
1. **Technische Grundlagen** von iSIM und eSIM.
2. **Detaillierter Vergleich** (Platzbedarf, Energieverbrauch, Sicherheit, Kosten).
3. **Verfügbarkeit** (welche Geräte unterstützen iSIM bereits?).
4. **Zukunftstrends** (wird iSIM die eSIM ablösen?).

## Technische Grundlagen**

### Was ist eSIM (Embedded SIM)?

Die **eSIM** ist ein **fest verlöteter Chip** auf dem Mainboard des Geräts, der die Funktionen einer herkömmlichen SIM-Karte digital übernimmt.

**Technische Details:**
- **Formfaktor:** WLCSP (Wafer Level Chip Scale Package), ca. 6 mm × 5 mm.
- **Schnittstelle:** Verbunden mit dem Mainboard über Lötstellen (LGA – Land Grid Array).
- **Programmierung:** Über **Remote Provisioning** (ferne Bereitstellung) gemäß **GSMA RSP-Spezifikationen** (Remote SIM Provisioning).
- **Speicherung mehrerer Profile:** Unterstützung von bis zu **5 Profilen** (nur 1 aktiv) gemäß GSMA RSPv2.
- **Sicherheit:** Entspricht **Common Criteria EAL4+** oder höher.

**Vorteile der eSIM:**
- ✅ Kein SIM-Slot erforderlich (Platzersparnis gegenüber physischer SIM).
- ✅ Flexibel (Tarife können per App oder QR-Code in Sekunden gewechselt werden).
- ✅ Dual-SIM-fähig (eSIM + physische SIM oder zwei eSIMs).
- ✅ Umweltfreundlich (kein Plastikabfall).

**Nachteile der eSIM:**
- ❌ Immer noch ein **separater Chip** auf dem Mainboard (belegt Platz).
- ❌ Leicht höherer Energieverbrauch als iSIM.
- ❌ Reparatur/ Austausch des eSIM-Chips ist nur durch Mainboard-Tausch möglich.

### Was ist iSIM (Integrated SIM)?

Die **iSIM** ist ein **Sicherheits-Element (Secure Element)**, das direkt in den **System-on-Chip (SoC)** des Prozessors integriert ist. Es gibt keinen separaten Chip mehr.

**Technische Details:**
- **Formfaktor:** Kein separates Gehäuse mehr, da in den Prozessor integriert.
- **Schnittstelle:** Interner Datenbus innerhalb des SoC.
- **Programmierung:** Ebenfalls über **GSMA RSP** (wie eSIM), aber die sichere Speicherung erfolgt in spezialisierten Bereichen des Prozessors (z.B. **ARM TrustZone**, **Apple Secure Enclave**).
- **Speicherung mehrerer Profile:** Ebenfalls bis zu 5 Profile (je nach Implementierung).
- **Sicherheit:** Entspricht **Common Criteria EAL5+** oder höher (noch sicherer als eSIM, da physisch nicht entnehmbar).

**Vorteile der iSIM:**
- ✅ **Kein separater Chip** mehr (maximale Platzersparnis).
- ✅ **Geringerer Energieverbrauch** (kein separater Chip mit eigener Stromversorgung).
- ✅ **Höhere Sicherheit** (nicht physisch entnehmbar, manipulationssicherer).
- ✅ **Kosteneinsparungen** in der Massenproduktion (kein separater Chip, weniger Lötstellen).
- ✅ **Kleinere Geräte möglich** (z.B. superschlanke Smartwatches, IoT-Sensoren).

**Nachteile der iSIM:**
- ❌ **Noch nicht weit verbreitet** (erste Geräte ab 2023/2024).
- ❌ **Reparatur schwieriger** (bei Defekt des Prozessors muss das ganze SoC getauscht werden).
- ❌ **Abhängigkeit vom Prozessorhersteller** (Qualcomm, Sasmsung, Apple – jedes Unternehmen muss iSIM im SoC implementieren).

## Detaillierter Vergleich: iSIM vs. eSIM**

### 1. Platzbedarf**

| Aspekt | eSIM | iSIM |
|--------|------|------|
| **Größe** | Ca. 6 mm × 5 mm (WLCSP) | Keine zusätzliche Grundfläche (integriert in SoC) |
| **Höhe** | Ca. 0,8 mm | Keine (integriert) |
| **Platzersparnis gegenüber Nano-SIM** | Ca. 80% | Ca. 100% |
| **Punktsieg** | eSIM | **iSIM** (deutlicher Sieger) |

**Praktische Auswirkung:**
- **eSIM:** Ermöglichte dünnere Geräte (z.B. iPhone 14 nur 7,8 mm dick).
- **iSIM:** Ermöglichte noch dünnere Geräte (z.B. zukünftige Smartwatches, die nur 5 mm dick sind).

### 2. Energieverbrauch**

| Aspekt | eSIM | iSIM |
|--------|------|------|
| **Stromverbrauch im Idle-Modus** | Ca. 5-10 mW | Ca. 1-3 mW |
| **Stromverbrauch bei der Datenübertragung** | Ca. 50-100 mW | Ca. 30-80 mW |
| **Energieersparnis gegenüber eSIM** | – | Ca. 20-30% |
| **Punktsieg** | eSIM | **iSIM** |

**Praktische Auswirkung:**
- **IoT-Geräte:** iSIM ermöglicht Batterielaufzeiten von **15 Jahren** (statt 10 Jahren bei eSIM).
- **Smartphones:** iSIM könnte die Akkulaufzeit um **1-2 Stunden** (Bildschirmmutzung) verlängern.

### 3. Sicherheit**

| Aspekt | eSIM | iSIM |
|--------|------|------|
| **Physische Entnehmbarkeit** | ❌ Fest verlötet, aber separater Chip | ❌ Im SoC integriert, nicht entnehmbar |
| **Manipulationsschutz** | ✅ Hoch (EAL4+) | ✅ Sehr hoch (EAL5+) |
| **Fernlöschung** | ✅ Möglich | ✅ Möglich |
| **Hacking-Risiko** | ❌ Theoretisch möglich (Zugriff auf Chip) | ❌ Theoretisch möglich (Zugriff auf SoC), aber schwieriger |
| **Punktsieg** | eSIM | **iSIM** (knapp) |

**Praktische Auswirkung:**
- **iSIM** ist geringfügig sicherer, da der Angreifer physisch Zugriff auf den Prozessor haben müsste (sehr schwierig).
- **Beide** sind jedoch sicherer als physische SIM-Karten (die entwendet werden können).

### 4. Kosten (in der Massenproduktion)**

| Aspekt | eSIM | iSIM |
|--------|------|------|
| **Chipkosten** | Ca. 1,00 € - 2,00 € pro Einheit | Keine zusätzlichen Kosten (integriert) |
| **Löt-/Montagekosten** | Ca. 0,10 € - 0,20 € pro Einheit | Keine (integriert) |
| **Gesamtkosten pro Gerät** | Ca. 1,10 € - 2,20 € | Ca. 0,00 € - 0,50 € (nur geringe Softwarekosten) |
| **Punktsieg** | eSIM | **iSIM** (deutlicher Sieger) |

**Praktische Auswirkung:**
- **iSIM** senkt die Produktionskosten für Smartphone-Hersteller (bei Millionen von Geräten summieren sich die Einsparungen massiv).
- **Konsumenten** könnten von günstigeren Gerätepreisen profitieren (theoretisch).

### 5. Verfügbarkeit und Marktdurchdringung (Stand 2026)**

| Aspekt | eSIM | iSIM |
|--------|------|------|
| **Verfügbarkeit in Smartphones** | ✅ Weit verbreitet (iPhone 14+, Samsung S21+, Pixel 5+) | ❌ Noch selten (erste Geräte ab 2023/2024) |
| **Verfügbarkeit in IoT-Geräten** | ✅ Häufig (Smartwatches, Tablets) | ❌ Noch in der Anfangsphase |
| **Marktanteil (neu verkaufte Smartphones 2026)** | Ca. 60% | Ca. 5% |
| **Punktsieg** | **eSIM** | eSIM |

**Wichtige Anmerkung:** iSIM ist eine **sehr neue Technologie**. Es dauert in der Regel 3-5 Jahre, bis eine neue Technologie den Markt erobert.

## Aktuelle Geräte mit iSIM-Unterstützung (Stand 2026)**

### 1. Smartphones**

| Gerät | Prozessor (SoC) | iSIM-Unterstützung |
|-------|----------------|-----------------------------------|
| **iPhone 15 / 15 Pro / 15 Pro Max** | Apple A17 Pro | ✅ (Apple nennt es "Apple Secure Enclave + iSIM") |
| **Samsung Galaxy S24 / S24 Ultra** | Qualcomm Snapdragon 8 Gen 3 for Galaxy | ✅ (Qualcomm Snapdragon 8 Gen 3 hat iSIM integriert) |
| **Google Pixel 8 / 8 Pro** | Google Tensor G3 | ✅ (Tensor G3 hat iSIM) |
| **Samsung Galaxy Z Fold 5 / Z Flip 5** | Qualcomm Snapdragon 8 Gen 2 | ✅ (begrenzt) |

### 2. Smartwatches**

| Gerät | Prozessor (SoC) | iSIM-Unterstützung |
|-------|----------------|-----------------------------------|
| **Apple Watch Series 9 / Ultra 2** | Apple S9 SiP | ✅ (Apple Secure Enclave + iSIM) |
| **Samsung Galaxy Watch 6** | Exynos W930 | ❌ Noch eSIM |

### 3. Laptops / 2-in-1-Geräte**

| Gerät | Prozessor (SoC) | iSIM-Unterstützung |
|-------|----------------|-----------------------------------|
| **Microsoft Surface Pro 10** | Intel Core i7-14. Gen | ✅ (Intel vPro mit iSIM) |
| **Apple MacBook Pro 2026 (M3 Pro / M3 Max)** | Apple M3 Pro / M3 Max | ✅ (Apple Secure Enclave + iSIM) |

### 4. IoT-Geräte**

Erste IoT-Chips mit iSIM:
- **Qualcomm Snapdragon X65 Modem-RF System** (für Industrie-IoT).
- **Samsung Exynos 980** (für mid-range Smartphones und IoT).

## Zukunftsperspektiven: Wird iSIM die eSIM ablösen?**

### Prognose der GSMA und Marktanalysten (2026-2032)**

**2026:**
- **iSIM:** Ca. 5% Marktanteil bei neu verkauften Smartphones.
- **eSIM:** Ca. 60% Marktanteil.
- **Physische SIM:** Ca. 35% Marktanteil (ältere Geräte, Einsteiger-Smartphones).

**2028:**
- **iSIM:** Ca. 25% Marktanteil.
- **eSIM:** Ca. 65% Marktanteil.
- **Physische SIM:** Ca. 10% Marktanteil.

**2030:**
- **iSIM:** Ca. 50% Marktanteil.
- **eSIM:** Ca. 45% Marktanteil.
- **Physische SIM:** Ca. 5% Marktanteil (Nischenanwendungen).

**2032:**
- **iSIM:** Ca. 70% Marktanteil.
- **eSIM:** Ca. 25% Marktanteil.
- **Physische SIM:** Ca. 5% Marktanteil (nur noch in extremen Nischen).

### Wann wird iSIM zum Standard?

**Prognose:**
- **2027-2028:** iSIM wird bei **Flaggschiff-Smartphones** zum Standard.
- **2029-2030:** iSIM wird bei **mid-range Smartphones** zum Standard.
- **2031-2032:** iSIM wird bei **Einsteiger-Smartphones** zum Standard.

**Wichtig:** Die physische SIM-Karte wird **nie vollständig verschwinden**. Sie wird in Nischenanwendungen (sehr alte Geräte, extreme Low-cost-Geräte, manche IoT-Anwendungen) überleben.

## Praktische Anwendungsfälle**

### 1. Superschlanke Smartwatches**

**Szenario:** Eine Smartwatch, die nur 5 mm dick ist.

- **mit eSIM:** Kaum möglich (eSIM-Chip belegt zu viel Platz).
- **mit iSIM:** Möglich (iSIM ist im Prozessor integriert, belegt keinen extra Platz).

### 2. IoT-Sensoren mit 15 Jahren Batterielaufzeit**

**Szenario:** Ein Sensr in der Landwirtschaft, der mit einer Batterie 15 Jahre laufen soll.

- **mit eSIM:** 10 Jahre Batterielaufzeit.
- **mit iSIM:** 15 Jahre Batterielaufzeit (geringerer Energieverbrauch).

### 3. Günstige Smartphones für Entwicklungsländer**

**Szenario:** Ein Smartphone für 50 €.

- **mit eSIM:** 1,50 € zusätzliche Kosten pro Gerät.
- **mit iSIM:** 0,20 € zusätzliche Kosten pro Gerät (Massenskaleneffekte).

## Fazit

Die **iSIM (Integrated SIM)** ist die **nächste Evolution** der SIM-Technologie. Sie bietet deutliche Vorteile gegenüber der eSIM in Bezug auf **Platzbedarf, Energieeffizienz, Sicherheit und Kosten**.

**Die wichtigsten Erkenntnisse:**
- ✅ **iSIM ist die Zukunft:** Sie wird die eSIM in den nächsten 5-10 Jahren größtenteils ablösen.
- ✅ **Noch nicht weit verbreitet:** Erste Geräte mit iSIM kommen 2023-2026 auf den Markt.
- ✅ **Vorteile:** Platzersparnis, Energieeffizienz, Sicherheit, Kosteneinsparungen.
- ❌ **Nachteile:** Noch teuer in der Kleinserienproduktion, abhängig von Prozessorherstellern.

**Für Konsumenten bedeutet dies:**
- **Aktuell (2026):** eSIM ist der Standard, iSIM nur in wenigen Flaggschiff-Geräten.
- **2027-2030:** iSIM wird zum neuen Standard bei Flaggschiff- und Mid-Range-Smartphones.
- **Ab 2030:** iSIM ist in fast allen neuen Smartphones, Smartwatches und IoT-Geräten integriert.

**Fazit:** Wenn Sie sich 2026 ein neues Smartphone kaufen, achten Sie auf **iSIM-Unterstützung** (z.B. iPhone 15, Samsung S24, Pixel 8). Dies sichert Ihnen **maximale Zukunftsfähigkeit**.

---

*Stand der Informationen: Mai 2026. Die Verfügbarkeit von iSIM in konkreten Geräten kann sich durch neue Produktankündigungen ändern.*
