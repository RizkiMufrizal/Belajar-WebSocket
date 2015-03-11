# Belajar-WebSocket

Aplikasi ini dibuat dalam rangka belajar Web Socket

Teknologi yang digunakan :

Server Side :
* Spring MVC
* Spring Web Socket
* Jackson
* Thymeleaf
* Slf4j
* Jetty 9

Client Side :
* Grunt
* Grunt Wiredep
* Bower
* NPM
* Angular JS
* Sock JS
* Stomp Web Socket
* Bootstrap

Cara menggunakan :
* download dependency library Client Side terlebih dahulu, masuk ke folder src/main/webapp
  lalu jalankan perintah :

  `bower install` dan `npm install`

* kemudian untuk menjalankan web browser jalankan perintah berikut :

  `mvn clean jetty:run`

  untuk melihat full debug aplikasi dapat dijalankan perintah berikut :

  `mvn clean jetty:run --debug`

* buka browser dan hit url berikut : `http://localhost:8080/index`
* Untuk menguji Web Socket buka 2 browser dan lakukan chatting
* Log aplikasi terdapat di ${ROOT PROJECT}/log/LogAplikasi.log
* Untuk Melihat Log JavaScript silahkan buka web console pada browser
