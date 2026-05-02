#!/usr/bin/env python3
import random
import json
import os

# 定义所有文章的主题
TOPICS = {
    'telekom': {
        'name': 'Telekom & Netz',
        'subcategories': {
            'news': {
                'name': 'Telekom Neuigkeiten',
                'articles': [
                    ('Deutsche Telekom kündigt neue 5G-Initiative an', 'Die Deutsche Telekom hat heute eine neue 5G-Initiative angekündigt, die Millionen von Kunden zugutekommen wird.'),
                    ('Telekom erreicht Millionen-Marke bei 5G-Nutzern', 'Die Deutsche Telekom kann eine neue Millionen-Marke bei 5G-Nutzern verkünden.'),
                    ('Telekom erweitert Netzabdeckung in ländlichen Gebieten', 'Die Deutsche Telekom investiert massiv in die Netzabdeckung ländlicher Gebiete.'),
                    ('Telekom und Huawei: Gerüchte über Zusammenarbeit', 'Es gibt Gerüchte über eine mögliche Zusammenarbeit zwischen der Deutschen Telekom und Huawei.'),
                    ('Telekom startet 5G-Netz in weiteren Städten', 'Die Deutsche Telekom hat den 5G-Ausbau in weiteren deutschen Städten gestartet.'),
                    ('Telekom berichtet von Rekordjahr 2025', 'Die Deutsche Telekom blickt auf ein erfolgreiches Geschäftsjahr 2025 zurück.'),
                    ('Telekom führt neues Kundenservice-Konzept ein', 'Die Deutsche Telekom modernisiert ihr Kundenservice mit KI-gestützten Lösungen.'),
                    ('Telekom expandiert nach Osteuropa', 'Die Deutsche Telekom plant die Expansion ihres Netzes in osteuropäische Märkte.'),
                    ('Telekom testet 6G-Technologie in Deutschland', 'Die Deutsche Telekom hat begonnen, erste 6G-Technologien in Deutschland zu testen.'),
                    ('Telekom und Vodafone vergleichen Netzqualität', 'Ein unabhängiger Test vergleicht die Netzqualität von Telekom und Vodafone.')
                ]
            },
            'technology': {
                'name': 'Netztechnologie',
                'articles': [
                    ('5G-SA: Standalone-Architektur bei Telekom', 'Die Deutsche Telekom rollt die 5G Standalone-Architektur bundesweit aus.'),
                    ('Massive MIMO: Telekom setzt auf neue Antennentechnik', 'Massive MIMO-Technologie wird von der Deutschen Telekom eingeführt.'),
                    ('Netzvirtualisierung: Telekom setzt auf NFV', 'Network Function Virtualization wird vom Telekom-Netz zum Standard.'),
                    ('Edge Computing: Telekom baut Rechenzentren aus', 'Edge Computing wird von der Telekom für geringe Latenzzeiten genutzt.'),
                    ('Open RAN: Telekom testet offene Netzarchitektur', 'Die Deutsche Telekom testet Open RAN-Technologie in ihrem Netz.'),
                    ('VoLTE und VoWiFi bei Telekom', 'Voice over LTE und Voice over WiFi werden bei Telekom ausführlich erklärt.'),
                    ('Carrier Aggregation: Telekom bündelt Frequenzen', 'Carrier Aggregation wird von der Telekom genutzt, um die Datenraten zu erhöhen.'),
                    ('Netz-Kapazität: Telekom verdoppelt Bandbreite', 'Die Deutsche Telekom hat die Netzkapazität in Großstädten verdoppelt.'),
                    ('Glasfaser-Ausbau: Telekom erreicht 50 Mio. Haushalte', 'Die Deutsche Telekom hat ihr Ziel von 50 Millionen Glasfaser-Haushalten erreicht.'),
                    ('Satelliten-Internet: Telekom kooperiert mit SpaceX', 'Die Deutsche Telekom prüft eine Kooperation mit SpaceX für Satelliten-Internet.')
                ]
            },
            'tarife': {
                'name': 'Tarife & Preise',
                'articles': [
                    ('MagentaMobil Tarif-Familie im Überblick', 'Alle MagentaMobil Tarife der Deutschen Telekom im detaillierten Überblick.'),
                    ('Telekom senkt Preise für Datentarife', 'Die Deutsche Telekom hat die Preise für ihre Datentarife gesenkt.'),
                    ('Neue Familien-Tarife bei Telekom', 'Die Deutsche Telekom führt neue Familien-Tarife mit attraktiven Konditionen ein.'),
                    ('Telekom bietet gratis Monat für Neukunden', 'Neukunden erhalten bei der Deutschen Telekom einen Monat gratis.'),
                    ('MagentaEINS: Alle Vorteile im Detail', 'MagentaEINS-Pakete werden von der Deutschen Telekom im Detail vorgestellt.'),
                    ('Telekom erhöht Datenvolumen ohne Aufpreis', 'Die Deutsche Telekom erhöht das Datenvolumen vieler Tarife ohne Aufpreis.'),
                    ('Business-Tarife: Telekom für Unternehmen', 'Die Deutsche Telekom bietet spezielle Business-Tarife für Unternehmen an.'),
                    ('Telekom Tarif-Comparator: Der beste Tarif für Sie', 'Die Deutsche Telekom bietet einen Online-Tarif-Comparator an.'),
                    ('Jugend-Tarife: Telekom bietet Rabatte für junge Leute', 'Junge Leute erhalten bei der Deutschen Telekom spezielle Rabatte.'),
                    ('Telekom führt flexible Prepaid-Optionen ein', 'Die Deutsche Telekom hat neue flexible Prepaid-Optionen eingeführt.')
                ]
            }
        }
    },
    'mobilfunk': {
        'name': 'Mobilfunk & SIM',
        'subcategories': {
            'sim-types': {
                'name': 'SIM-Karten Typen',
                'articles': [
                    ('eSIM: So aktivieren Sie die elektronische SIM-Karte', 'Eine Schritt-für-Schritt-Anleitung zur Aktivierung einer eSIM.'),
                    ('iSIM vs eSIM: Was ist der Unterschied?', 'iSIM und eSIM werden in diesem Artikel detailliert verglichen.'),
                    ('Physische SIM-Karte: Noch immer relevant?', 'Der Artikel untersucht, ob physische SIM-Karten noch zeitgemäß sind.'),
                    ('Multi-SIM: Mehrere Geräte mit einer Nummer', 'Multi-SIM ermöglicht die Nutzung mehrerer Geräte mit einer Rufnummer.'),
                    ('SIM-Karten-Formate: Von Mini bis Nano', 'Alle SIM-Karten-Formate werden in diesem Artikel erklärt.'),
                    ('eSIM bei älteren Smartphones nutzen', 'Ältere Smartphones können mit speziellen Adaptern eSIM-fähig gemacht werden.'),
                    ('Dual-SIM: Zwei Nummern auf einem Handy', 'Dual-SIM-Funktionalität wird in diesem Artikel erklärt.'),
                    ('SIM-Karten-Sperre: So schützen Sie Ihre Karte', 'Eine Anleitung zum Schutz der SIM-Karte vor Missbrauch.'),
                    ('eSIM für IoT-Geräte: Die Zukunft der Vernetzung', 'eSIM wird immer wichtiger für IoT-Geräte.'),
                    ('SIM-Karten-Portierung: Rufnummer behalten', 'Eine Anleitung zur Portierung der Rufnummer bei einem Anbieterwechsel.')
                ]
            },
            'prepaid': {
                'name': 'Prepaid & Verträge',
                'articles': [
                    ('Prepaid vs Postpaid: Vor- und Nachteile', 'Prepaid- und Postpaid-Tarife werden in diesem Artikel verglichen.'),
                    ('Die besten Prepaid-Tarife 2026', 'Eine Übersicht der besten Prepaid-Tarife im Jahr 2026.'),
                    ('Prepaid-Karten ohne Grundgebühr', 'Prepaid-Karten ohne monatliche Grundgebühr werden vorgestellt.'),
                    ('EU-Roaming bei Prepaid-Karten', 'EU-Roaming ist bei den meisten Prepaid-Karten inklusive.'),
                    ('Prepaid-Tarife für Senioren', 'Spezielle Prepaid-Tarife für Senioren werden vorgestellt.'),
                    ('Prepaid mit unbegrenztem Datenvolumen', 'Einige Anbieter bieten inzwischen Prepaid mit unbegrenztem Datenvolumen.'),
                    ('Prepaid-Karten für Kurzreisen', 'Prepaid-Karten sind ideal für Kurzreisen ins Ausland.'),
                    ('Aufladbare Prepaid-Karten: So funktioniert es', 'Eine Anleitung zum Aufladen von Prepaid-Karten.'),
                    ('Prepaid-Tarife im Test: Stiftung Warentest', 'Die Stiftung Warentest hat Prepaid-Tarife getestet.'),
                    ('Prepaid-Pakete: Tages-, Wochen- und Monatsoptionen', 'Verschiedene Prepaid-Pakete werden in diesem Artikel vorgestellt.')
                ]
            },
            'tips': {
                'name': 'Nutzungstipps',
                'articles': [
                    ('Datenvolumen sparen: 10 praktische Tipps', 'Zehn praktische Tipps, um Datenvolumen zu sparen.'),
                    ('Smartphone-Akkulaufzeit verbessern', 'Tipps zur Verbesserung der Akkulaufzeit eines Smartphones.'),
                    ('Mobile Daten optimal nutzen', 'Tipps zur optimalen Nutzung mobiler Daten.'),
                    ('Roaming-Kosten vermeiden: Tipps für Auslandsreisen', 'Tipps, um Roaming-Kosten im Ausland zu vermeiden.'),
                    ('Sicheres mobiles Surfen: VPN für Smartphones', 'Ein VPN schützt beim mobilen Surfen.'),
                    ('WLAN-Netzwerk optimieren', 'Tipps zur Optimierung des heimischen WLAN-Netzwerks.'),
                    ('Mobilfunk-Empfang verbessern', 'Tipps zur Verbesserung des Mobilfunk-Empfangs.'),
                    ('Smartphone-Speicher richtig nutzen', 'Tipps zur optimalen Nutzung des Smartphone-Speichers.'),
                    ('Mobile Hotspots einrichten', 'Eine Anleitung zum Einrichten eines mobilen Hotspots.'),
                    ('Datenschutz auf dem Smartphone', 'Tipps zum Schutz der Privatsphäre auf dem Smartphone.')
                ]
            }
        }
    }
}

def random_date():
    """生成2024-01-01到2026-05-02之间的随机日期"""
    year = random.randint(2024, 2026)
    if year == 2026:
        month = random.randint(1, 4)
        if month == 4:
            day = random.randint(1, 30)
        else:
            day = random.randint(1, 28)
    else:
        month = random.randint(1, 12)
        day = random.randint(1, 28)
    return f"{year}-{month:02d}-{day:02d}"

def make_id(title):
    """根据标题生成文章ID"""
    import re
    id_str = title.lower()
    id_str = id_str.replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss')
    id_str = re.sub(r'[^a-z0-9\s-]', '', id_str)
    id_str = re.sub(r'\s+', '-', id_str)
    return id_str[:50]

def make_markdown(title, excerpt):
    """生成Markdown文章内容"""
    return f"""# {title}

*{excerpt}*

## Einleitung

In diesem Artikel befassen wir uns ausführlich mit diesem wichtigen Thema rund um Telekommunikation und Mobilfunk in Deutschland.

## Hauptinhalt

### Hintergrundinformationen

Die Deutsche Telekom ist einer der führenden Telekommunikationsanbieter in Europa. Mit innovativen Technologien und zuverlässigen Dienstleistungen überzeugt das Unternehmen Millionen von Kunden.

### Technische Details

Moderne Telekommunikation erfordert leistungsfähige Netze und innovative Lösungen. 5G-Technologie, Fiber-Optik und Satellitenkommunikation sind nur einige der Technologien, die heute zum Einsatz kommen.

### Praktische Anwendung

Für Endkunden bedeutet dies schnellere Datenraten, bessere Netzabdeckung und innovative Dienste. Ob im Home-Office, bei der Nutzung von Streaming-Diensten oder in der Smart-Home-Steuerung - moderne Telekommunikation macht vieles möglich.

## Fazit

Zusammenfassend lässt sich sagen, dass dieser Bereich der Telekommunikation sich rasant entwickelt. Es bleibt spannend zu beobachten, welche Innovationen in Zukunft folgen werden.
"""

def main():
    base = r"C:\Users\Administrator\WorkBuddy\20260502030018\blog"
    js_dir = os.path.join(base, "js")
    md_dir = os.path.join(base, "articles")
    os.makedirs(md_dir, exist_ok=True)
    
    # 构建文章数据
    articles_data = {}
    all_articles_flat = []
    
    for cat_key, cat_val in TOPICS.items():
        articles_data[cat_key] = {
            'name': cat_val['name'],
            'subcategories': {}
        }
        for sub_key, sub_val in cat_val['subcategories'].items():
            articles_data[cat_key]['subcategories'][sub_key] = {
                'name': sub_val['name'],
                'articles': []
            }
            for title, excerpt in sub_val['articles']:
                art_id = make_id(title)
                # 确保ID唯一
                counter = 1
                while any(a['id'] == art_id for a in all_articles_flat):
                    art_id = f"{make_id(title)}-{counter}"
                    counter += 1
                
                article = {
                    'id': art_id,
                    'title': title,
                    'date': random_date(),
                    'excerpt': excerpt,
                    'file': f"{art_id}.md",
                    'image': f"https://picsum.photos/400/300?random={random.randint(1, 9999)}"
                }
                articles_data[cat_key]['subcategories'][sub_key]['articles'].append(article)
                all_articles_flat.append(article)
                
                # 生成Markdown文件
                md_content = make_markdown(title, excerpt)
                md_path = os.path.join(md_dir, f"{art_id}.md")
                with open(md_path, 'w', encoding='utf-8') as f:
                    f.write(md_content)
                print(f"Created: {art_id}.md")
    
    # 生成JS数据字符串
    js_str = json.dumps(articles_data, indent=4, ensure_ascii=False)
    
    # 写入main.js
    main_js = os.path.join(js_dir, "main.js")
    with open(main_js, 'r', encoding='utf-8') as f:
        old_content = f.read()
    
    # 找到文章数据的起始和结束位置
    start_marker = "const articles = "
    end_marker = "};"
    start_idx = old_content.find(start_marker)
    if start_idx != -1:
        # 找到匹配的};
        brace_count = 0
        in_string = False
        escape_next = False
        end_idx = -1
        
        for i in range(start_idx + len(start_marker), len(old_content)):
            char = old_content[i]
            
            if escape_next:
                escape_next = False
                continue
            
            if char == '\\':
                escape_next = True
                continue
            
            if char == '"' or char == "'":
                in_string = not in_string
                continue
            
            if not in_string:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        # 检查下一个字符是否是;
                        if i + 1 < len(old_content) and old_content[i + 1] == ';':
                            end_idx = i + 2
                            break
        
        if end_idx != -1:
            new_content = old_content[:start_idx] + "const articles = " + js_str + ";"
            with open(main_js, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: main.js")
    
    # 写入category.js（同样的结构）
    cat_js = os.path.join(js_dir, "category.js")
    with open(cat_js, 'r', encoding='utf-8') as f:
        old_content = f.read()
    
    start_idx = old_content.find(start_marker)
    if start_idx != -1:
        brace_count = 0
        in_string = False
        escape_next = False
        end_idx = -1
        
        for i in range(start_idx + len(start_marker), len(old_content)):
            char = old_content[i]
            
            if escape_next:
                escape_next = False
                continue
            
            if char == '\\':
                escape_next = True
                continue
            
            if char == '"' or char == "'":
                in_string = not in_string
                continue
            
            if not in_string:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        if i + 1 < len(old_content) and old_content[i + 1] == ';':
                            end_idx = i + 2
                            break
        
        if end_idx != -1:
            new_content = old_content[:start_idx] + "const articles = " + js_str + ";"
            with open(cat_js, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: category.js")
    
    # 写入article.js（使用articlesData变量）
    art_js = os.path.join(js_dir, "article.js")
    with open(art_js, 'r', encoding='utf-8') as f:
        old_content = f.read()
    
    start_marker2 = "const articlesData = "
    start_idx = old_content.find(start_marker2)
    if start_idx != -1:
        brace_count = 0
        in_string = False
        escape_next = False
        end_idx = -1
        
        for i in range(start_idx + len(start_marker2), len(old_content)):
            char = old_content[i]
            
            if escape_next:
                escape_next = False
                continue
            
            if char == '\\':
                escape_next = True
                continue
            
            if char == '"' or char == "'":
                in_string = not in_string
                continue
            
            if not in_string:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        if i + 1 < len(old_content) and old_content[i + 1] == ';':
                            end_idx = i + 2
                            break
        
        if end_idx != -1:
            new_content = old_content[:start_idx] + "const articlesData = " + js_str + ";"
            with open(art_js, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: article.js")
    
    print(f"\nSuccessfully created {len(all_articles_flat)} articles!")

if __name__ == "__main__":
    random.seed()
    main()
