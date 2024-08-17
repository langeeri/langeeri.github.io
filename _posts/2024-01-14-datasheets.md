---
layout: project
permalink: /datasheets/

project_name: Datasheets

header_caption: Aplikace obsahuje vícejazyčnou podporu a na míru vyvinutý CRUD systém pro správu dat produktů v databázi. Klíčové funkce zahrnují různé integrované moduly, jako je správce tiketů, systém pro správu uživatelů a modul pro dokumentaci. Plně nahrazuje práci sazeče a grafika, snížila chybovost a zredukovala čas přípravy a vydávání dokumentace o 50 %.

images: 
- /assets/img/datasheets_login.png
-  /assets/img/datasheets_home.png
- /assets/img/datasheets_card.png
- /assets/img/datasheets_edit.png

url_left: /
url_right: /hil/

build_at: Regulus
build_at_url: https://www.regulus.cz
role: Fullstack vývojář
responsibilities: Databázové schéma, backend, frontend

technical_detail_1: Verze
technical_detail_2: Repozitář
technical_detail_3: Framework
technical_detail_4: Testování
technical_detail_5: Verzovací systém

detail_1: Beta
detail_2: Soukromý / Interní
detail_3: Django
detail_4: Unittest, Coverage
detail_5: Mercurial

long_text_header: Architektura
long_text: Aplikace využívá architekturu Model-View-Template (MVT). Backend je strukturován Django modely, které definují databázové schéma. Pohledy zpracovávají uživatelské požadavky a komunikují s modely. Systém routování URL mapuje konkrétní URL na odpovídající pohledy. Uživatelské rozhraní se vykresluje prostřednictvím Django templating systému.

features_caption: Hlavní funkce
features:
- Komplexní ORM pro interakce s databází
- Lokalizace a internacionalizace
- Systém autentifikace a autorizace
- Vlastní CRUD a manažer tiketů
- Systém správy uživatelů a uživatelských skupin
- Real-time generování lokalizovaných PDF pomocí knihovny ReportLab

tech_stack:
  - devicon-django-plain
  - devicon-python-plain
  - devicon-pandas-original
  - devicon-sqlite-plain
  - devicon-javascript-plain
  - devicon-html5-plain
  - devicon-css3-plain
  - devicon-tortoisegit-plain
  - devicon-nginx-original
---


