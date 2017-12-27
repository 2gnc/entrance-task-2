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
* для упрощения кроссбраузерности к проекту подключен normalize.css (как модуль npm)
* поскольку работаю над проектом одна, все коммиты сделаны сразу в ветку master
* использую линтер (плагин) для проверки sass

### Структура папок
<pre>
/-prepare              папка для вспомогательных файлов: макеты, схема блоков и прочее
/node_modules          утилиты
/public                скомпилированные ресурсы, html файлы лежат в корне
  /fonts               шрифты
  /img                 картинки
  /scripts             JS - скрипты для смены состояний интерфейса
  /styles              скомпилированные и минифицированные стили
/src                   все исхоники
  /blocks              для блоков, каждый блок в своей папке
    /simlpe-block      один блок
  /pages               pug разметка страниц, собранных из блоков
  /styles              вспомогательные файлы стилей
    /helpers           миксины, переменнные
</pre>

### Вспомогательные инструменты

Для задач, даже кога работаю над проектом одна, используюу Trello см. [доску для подготовки к всех трех заданий ШРИ](https://trello.com/b/H0OuhODB/%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BA-%D1%88%D1%80%D0%B8-2018-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0)

Для учета затраченного времени обычно использую Togglr (использую не только для рабочих задач, а вообще для всех - позволяет не распыляться и поддерживать нужный ритм)

Для планирования и прототипирования использую [Draw.io](https://www.draw.io/) и Xmind (см папку ```/_prepare```)

* [блоки](https://github.com/2gnc/entrance-task-2/blob/master/_prepare/bem.xmind)

### Верстка
* по заданию сверстаны статические страницы: 
1. ```/public/index.html```
2. Два
3. Три 
4. ...

* использован свой [кодстайл](http://tgnc.ru/css-%D0%BA%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%B9%D0%BB/)
* для построения сетки расписание использованы колонки ```.schedule__timeslot```, внутри каждой из них - ```.schedule__rowslot```. 
По дата-атрибутам будет определено, к какому этажу или конкретной переговорной будет отнесена ячейка ```.schedule__rowslot```. 
Связь колонки ```.schedule__timeslot``` и соответствующего ей временного промежутка осуществлена также через дата-атрибут.
* для разметки занятого / свободного времени внутрь каждого ```.schedule__rowslot``` будут помещаться блоки ```.schedule__innerslot``` 
с модификаторами ```--empty-n``` и/или ```--busy-n```, где n - число от 1 до 12, определяющее ширину вложенного блока. Например, если часовой 
слот полностью свободен, то будет ```.schedule__rowslot > .schedule__innerslot--empty-12```, если полностью занят - то ```.schedule__rowslot > .schedule__innerslot--busy-12```,
если же половина слота занята, а половина свободна, то будет ```.schedule__rowslot > .schedule__innerslot--empty-6 + .schedule__innerslot--busy-6```. Таким образом, 
в сетке расписания занятые/свободные слоты буду отображаться с шагом 5 минут. При построении сетки на JS, время начала и окончания событий будет кратно 5 минутам.
Модификатороры и кратность введены для того, чтобы для отображения занятого времени на графике не использовать инлайновые стили.
* шрифты подключены из ```/public/fonts```, тк на компьютере с win7 шрифта HelveticaNeue не было (возможно и на других данный шрифт не установлен). Использован только формат woff как наиболее универсальный.
* в разметке этажей ```.rooms__floor-name``` , переговорок ```.room``` и заголовков временных слотов ```.schedule__time``` использованы data-атрибуты. По ним в дальнейшем будет строиться сетка расписания на выбранный день.

### Запуск

В корне ```/entrance-task-2``` вполнить: 

```
npm i
gulp production

```
