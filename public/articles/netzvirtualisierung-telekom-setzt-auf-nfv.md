# Netzvirtualisierung: Telekom setzt auf NFV und SDN

*Die Deutsche Telekom transformiert ihr Netzwerk grundlegend: Network Function Virtualization (NFV) und Software-Defined Networking (SDN) ersetzen teure Hardware durch flexible Software. Was das bedeutet und warum es für die Zukunft des Mobilfunks entscheidend ist.*

## Einleitung: Das Netz wird zur Software

Traditionelle Mobilfunknetze sind hardwareintensiv: Jede Netzfunktion – vom Sprachkodierung über Authentifizierung bis zur Datenvermittlung – läuft auf spezialisierten, teuren Hardware-Appliances. Diese sind unflexibel, teuer zu betreiben und aufwändig zu aktualisieren.

Netzvirtualisierung dreht das Prinzip um: Netzfunktionen werden als Software auf Standard-Servern ausgeführt. Das ermöglicht schnellere Innovation, geringere Kosten und – entscheidend für 5G – neue Fähigkeiten wie Network Slicing.

## NFV und SDN erklärt

| Technologie | Was sie macht | Vorteil |
| --- | --- | --- |
| NFV (Network Function Virtualization) | Netzfunktionen als virtuelle Software statt dedizierter Hardware | Schneller deployen, günstiger skalieren |
| SDN (Software-Defined Networking) | Netzsteuerung getrennt vom Datenfluss, per Software kontrolliert | Flexibel konfigurierbar, zentralisiert verwaltbar |
| Cloud-Native Functions | Netzfunktionen als Container (Kubernetes/Docker) | Hochskalierbar, fehlertolerant |
| Network Slicing | Logisch getrennte Netzsegmente auf einer physischen Infrastruktur | Dedizierte QoS für verschiedene Anwendungen |

## Telekoms NFV-Strategie: Open MANO und GAIA-X

Die Deutsche Telekom ist einer der Pioniere der Netzvirtualisierung weltweit. Als Mitgründer der ETSI NFV Industry Specification Group hat Telekom aktiv die globalen Standards geprägt. 2026 sind bereits über 80 % der Kernnetzbetriebe der Telekom virtualisiert.

### Wichtige Projekte und Initiativen

- **Open MANO:** Telekoms Open-Source-Management-Plattform für NFV-Orchestrierung, die weltweit eingesetzt wird

- **GAIA-X:** Europäische Cloud-Infrastruktur-Initiative, an der Telekom als Gründungsmitglied beteiligt ist

- **5G Core (Cloud-Native):** Das 5G-Kernnetz der Telekom läuft vollständig cloud-native auf Standard-Hardware

- **Open RAN:** Auch das Funknetz wird virtualisiert – Hardware von verschiedenen Herstellern wird durch Software-Schnittstellen verbunden

## Network Slicing: Die Killer-Applikation der Virtualisierung

Network Slicing ermöglicht, auf einer physischen 5G-Infrastruktur mehrere logisch getrennte, maßgeschneiderte virtuelle Netze (Slices) zu betreiben. Ein Beispiel:

- **Slice 1 (Massenkommunikation):** Maximale Kapazität, variable Latenz – für normale Smartphone-Nutzer

- **Slice 2 (Ultra-Niedrige Latenz):** Garantiert unter 1 ms – für Industrieroboter und Echtzeit-Steuerung

- **Slice 3 (Hohe Bandbreite):** Garantierte 1 Gbit/s – für 8K-Video-Broadcasting

- **Slice 4 (IoT-Masse):** Millionen simultaner Verbindungen mit wenig Bandbreite – für Smart Meters

Telekom hat 2025 erste kommerzielle Network Slicing-Dienste für B2B-Kunden gestartet. Für Privatkunden sind erste Slice-Angebote (z. B. Premium-Gaming-Slice) für 2027 geplant.

## Vorteile für Kunden und Unternehmen

### Für Privatkunden

- Schnellere Einführung neuer Features (Software-Updates statt Hardware-Austausch)

- Bessere Netzqualität durch intelligente Ressourcenzuteilung

- Zukunftige Premium-Dienste (Gaming-Slice, VR-Slice)

### Für Unternehmen (B2B)

- Private 5G-Campus-Netze als virtuelles Slice buchbar

- Garantierte SLAs (Service Level Agreements) für kritische Anwendungen

- Flexible Skalierung: Mehr Kapazität buchen wenn nötig, weniger wenn ruhig

- Edge Computing: Daten werden am Netzrand verarbeitet, nicht erst in der Cloud – minimale Latenz

## Häufig gestellte Fragen (FAQ)

## **Frage 1: Was bedeutet Netzvirtualisierung für die Netzausfallsicherheit?**

Gut durchdachte Virtualisierung erhöht die Ausfallsicherheit, weil Workloads automatisch auf funktionierende Server verschoben werden können (automatisches Failover). Allerdings können schlecht konfigurierte Cloud-Systeme neue Fehlerquellen einführen. Telekom betreibt alle virtuellen Netzfunktionen mit N+1-Redundanz auf geografisch verteilten Rechenzentren, was einen sehr hohen Ausfallschutz gewährleistet.

## **Frage 2: Was ist der Unterschied zwischen NFV und einer normalen Server-Virtualisierung?**

Technisch ähnlich – NFV nutzt dieselben Virtualisierungsgrundlagen (VMs, Container). Der Unterschied liegt in den spezifischen Netzfunktionen, die virtualisiert werden (Core-Netz-Elemente wie HSS, SMF, UPF), und in den sehr strengen Latenz- und Performanceanforderungen: Netzfunktionen müssen Millionen von Paketen pro Sekunde mit Mikrosekunden-Genauigkeit verarbeiten – das sind Anforderungen weit über normalen Enterprise-Server-Anwendungen.

## **Frage 3: Was ist Open RAN und wie unterscheidet es sich von konventionellem RAN?**

Konventionelles RAN (Radio Access Network) nutzt proprietäre Hardware und Software vom selben Hersteller (z. B. Nokia oder Ericsson). Open RAN trennt Software von Hardware über offene Schnittstellen (O-RAN Alliance Standards), sodass Komponenten verschiedener Hersteller interoperieren können. Das senkt die Abhängigkeit von einzelnen Lieferanten, kann Kosten reduzieren und Innovation beschleunigen. Telekom hat 1.000 Open-RAN-Standorte 2025 aktiviert und plant weiteren Ausbau bis 2028.

## **Frage 4: Wie sicher ist ein virtualisiertes Netz?**

Virtualisierte Netze haben eine komplexere Angriffsfläche als traditionelle Hardware-Appliances, da sie auf Standard-IT-Infrastruktur laufen, die klassische IT-Sicherheitsschwachstellen hat. Telekom begegnet dem mit: (1) Zero-Trust-Sicherheitsarchitektur für alle Netzfunktionen. (2) Dediziertes Security Operations Center (SOC) für Telekommunikationsinfrastruktur. (3) Regelmäßige Penetrationstests. (4) Einhaltung der ETSI-Sicherheitsstandards für NFV.

## **Frage 5: Wann profitieren Privatnutzer von Network Slicing?**

Erste Privatnutzer-Anwendungen von Network Slicing sind für 2027–2028 in Deutschland geplant. Mögliche Szenarien: Ein Premium-Gaming-Tarif mit garantierter niedrigster Latenz, ein Business-Tarif mit garantierter Mindestbandbreite für Homeoffice oder ein VR-Streaming-Dienst mit reservierter Kapazität. Die technische Infrastruktur ist vorhanden – das Produkt-Design und die Preisfindung für B2C-Slices dauern noch.

## Fazit & Ausblick

Die Netzvirtualisierung ist die unsichtbare Revolution hinter 5G: Während Kunden die verbesserte Geschwindigkeit und Abdeckung wahrnehmen, läuft im Hintergrund eine fundamental neue Netzarchitektur. Telekom ist einer der global führenden Betreiber bei der NFV-Umsetzung.

Die Früchte dieser Transformation – Network Slicing, Edge Computing, Private 5G-Netze – werden schrittweise für Unternehmens- und Privatkunden zugänglich. Das Netz von morgen ist so flexibel wie Software: konfigurierbar, skalierbar und ständig aktualisierbar.

*Letztes Update: Mai 2026*

