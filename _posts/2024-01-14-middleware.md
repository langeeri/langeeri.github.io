---
layout: project
permalink: /middleware/

project_name: HiL Middleware

header_caption: During the TACR TK04020326 project, I developed middleware designed for use within Hardware-in-the-Loop testbeds, in conjunction with TRNSYS simulations, to streamline heat pump testing. It allows for seamless communication between TRNSYS simulations and ModBus servers, enabling data exchange for both read-write and read-only operations. The middleware functions as a ModBus client, while the PLCs function as ModBus servers. The middleware is built on top of Type 3157.

images: 
- /assets/img/middleware.png


url_left: /hil/
url_right: /heatdock/

build_at: CTU UCEEB
build_at_url: https://www.uceeb.cz
role: Developer
responsibilities: Design, Programming

technical_detail_1: Location
technical_detail_2: Development status
technical_detail_3: Repository status
technical_detail_4: Language
technical_detail_5: Version control

detail_1: CTU UCEEB
detail_2: Trial testing
detail_3: Private / Internal
detail_4: Python
detail_5: Git

long_text_header: Design 
long_text: The middleware is designed to facilitate data exchange between TRNSYS fortran kernel and multiple PLCs. The whole data exchange is initiated by TRNSYS initiation call. TRNSYS Type 3157 exchanges data with middleware through a nested dictionary leveraging CFFI python package. At the initialization call, the middleware opens all predefined ModBus TCP/IP clients and connects them to PLCs that are operated as standalone ModBus TCP/IP servers. The connection is kept alive till the last simulation call. 


features_caption: Credit
features: This middleware is built upon the groundwork laid by the authors of Type 3157. While I take credit for addressing communication between the middleware and PLCs, it's essential to acknowledge the authors of Type 3157 for resolving data exchange between TRNSYS and Python.


tech_stack:
  - fa-solid fa-microchip
  - devicon-python-plain
  - devicon-bash-plain
  - devicon-git-plain
  - devicon-github-original

---
