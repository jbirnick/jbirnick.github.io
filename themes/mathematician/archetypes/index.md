+++
title = '{{ replace .Name "-" " " | title }}'
description = ''
keywords = []
[menu.main]
  name = '{{ replace .Name "-" " " | title }}'
  weight = 90
lastmod = {{ dateFormat "2006-01-02" .Date }}
+++

