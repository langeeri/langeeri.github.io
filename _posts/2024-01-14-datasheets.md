---
layout: project
permalink: /datasheets/

project_name: Datasheets App

header_caption: For the past two years, I have been working on Datasheets app designed to streamline the management of technical documentation. It comes with multilingual support and a full-featured CRUD management system, enabling flexible handling of product data in the database. Key functionalities include various built-in modules, such as a ticket manager, user management system, and a documentation module. The latter allows for the real-time generation of PDFs for product datasheets.

images: 
- /assets/img/datasheets_login.png
-  /assets/img/datasheets_home.png
- /assets/img/datasheets_card.png
- /assets/img/datasheets_edit.png

url_left: /
url_right: /hil/

build_at: Regulus
build_at_url: https://www.regulus.cz
role: Fullstack developer
responsibilities: Database design, Backend, Frontend

technical_detail_1: Development status
technical_detail_2: Repository status
technical_detail_3: Framework
technical_detail_4: Testing
technical_detail_5: Version control

detail_1: Beta
detail_2: Private / Internal
detail_3: Django
detail_4: Unittest, Coverage
detail_5: Mercurial

long_text_header: Architecture 
long_text: The app leverages the Model-View-Template (MVT) architecture. The backend is structured around Django models, defining the database schema and relationships. Views handle the business logic, processing user requests, and interacting with the models. The URL routing system maps specific URLs to corresponding views, ensuring a clean and organized structure. The user interface is rendered through Django's templating system. 

features_caption: Main Features
features:
- Comprehensive ORM for database interactions
- Localization and Internationalization 
- Authentication and Authorization system
- Custom CRUD and Ticket manager
- User and user groups managemet system
- Complex image processing for PDFs using Reportlab library

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


