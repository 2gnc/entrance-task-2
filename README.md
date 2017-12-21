# entrance-task-2
Тестовое задание по вёрстке для [шестой Школы разработки интерфейсов](https://academy.yandex.ru/events/frontend/shri_msk-2018/register/).

### Макеты
* https://yandex-shri-msk-2018.github.io/entrance-task-2/touch-guide/
* https://yandex-shri-msk-2018.github.io/entrance-task-2/desktop-guide/



## Описание решения

### Инфраструктура
* в качестве HTML - шаблонизатора использован PUG
* CSS препроцессор - SASS (диалект sass)
* для сборки используется gulp
* файлы для продакшн (html, css, js) минифицируются
* для упрощения кроссбраузерности к проекту подключен normalize.css
* поскольку работаю над проектом одна, все коммиты сделаны сразу в ветку master
* использую линтер (плагин) для проверки sass

### Структура папок
<pre>
/node_modules          утилиты
/public                скомпилированные ресурсы, html файлы лежат в корне
  /fonts               шрифты
  /img                 картинки
  /scripts             JS - скрипты для смены состояний интерфейса
  /styles              скомпилированные и минифицированные стили
/src                   все исхоники
  /blocks              для блоков, каждый блок в своей папке
    /simlpe-block      один блок со своей разметкой, картинками, стилями и скриптами
  /pages               pug разметка страниц, собранных из блоков
  /styles              вспомогательные файлы стилей
    /helpers           миксины, переменнные
</pre>

### Вспомогательные инструменты

Для задач, даже кога работаю над проектом одна, используюу Trello см. [доску для подготовки к всех трех заданий ШРИ](https://trello.com/b/H0OuhODB/%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BA-%D1%88%D1%80%D0%B8-2018-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0)

Для учета затраченного времени обычно использую Togglr (использую не только для рабочих задач, а вообще для всех - позволяет не распыляться и поддерживать нужный ритм)

Для планирования и прототипирования использую [Draw.io](https://www.draw.io/) и Xmind

* [блоки](https://drive.google.com/file/d/1eX85DT0RUk0LhFVlHwPavc-kp8vO-NmP/view?usp=sharing)

### Верстка
* использован свой [кодстайл](http://tgnc.ru/css-%D0%BA%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%B9%D0%BB/)

### Запуск

В корне /entrance-task-2 вполнить: 

```
npm i
gulp production

```
