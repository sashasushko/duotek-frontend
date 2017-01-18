# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Шаблон для быстрого старта проекта :rocket:

## Старт
1. Скачай [последний релиз](//github.com/sashasushko/duotek-frontend/releases) и распакуй в папку проекта
2. Установи зависимости командой `npm install`

## Запуск
```bash
gulp
```
Единоразово собирает стили, скрипты и спрайт, а после запускает `gulp watch`.

## GULP-задачи
```bash
gulp watch
```
Следит за изменением указанных файлов и вызывает соответствующую задачу. _Например_, после изменения стилей, вызовет `gulp css`.

```bash
gulp css
```
Собирает стили в один файл по _@import_ из `/staticcontent/source/scss/styles.scss`.

```bash
gulp js
```
Собирает скрипты, указанные в массиве `path` в `scripts.js`, в один файл.
Перед сборкой файлы обрабатываются Бабелем для поддержки «старых» браузеров по предустановкам `es2015`.

```bash
gulp sprite-png
```
Собирает спрайт из иконок, добавленных в папку `/staticcontent/img/sprite/png`.
[Требования, ограничения и примеры использования спрайтов](//github.com/sashasushko/duotek-frontend/blob/master/sprites.md)

```bash
gulp deploy
```
Вызывает поочередно задачи для оптимизации и минификации стилей `gulp deploy-css` и скриптов `gulp deploy-js`.

## Файловая структура
```
gulpfile.js                         # Задачи для сборщика
package.json                        # Информация о проекте
/staticcontent
    /css
        all.css                     # Собранные стили
    /js
        all.js                      # Собранные скрипты
    /img
    /fonts
    /source
        /scss
            /helpers                # Переменные, примеси и прочие вспомогательные стили
            /vendor                 # Сторонние библиотеки
            /base                   # Основные стили
            /layout                 # Раскладки и сетки
            /blocks                 # Блоки по БЭМу. Каждый в отдельном файле
            /pages                  # Стили для страниц
            styles.scss             # Список @import для сборки
        /js
            /components             # Папка с JS-компонентами. Каждый в отдельном файле
            scripts.js              # Список файлов для сборки
        /img
            /sprite
                /png                # Иконки для PNG-спрайта
        /fonts                      # Шрифты для конвертации в woff
        /vendor                     # Сторонние библиотеки
```

Движковые JS-библиотеки, например jQuery, лежат в корне в папке `/jscore` и подключаются автоматически.
