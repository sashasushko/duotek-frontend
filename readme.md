# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Шаблон для быстрого старта проекта :rocket:

## Старт
1. Скачай [последний релиз](//github.com/sashasushko/duotek-frontend/releases) и распакуй в папку проекта
2. Установи зависимости командой `npm install`

## Запуск
```bash
gulp
```
_Единоразово собирает стили, скрипты и спрайт, а после запускает `gulp watch`_

## GULP-задачи
#### Запустить отслеживание изменений:
```bash
gulp watch
```

#### Собрать стили из исходников:
```bash
gulp css
```

#### Собрать скрипты из исходников:
```bash
gulp js
```
_Перед сборкой файлы обрабатываются Бабелем для поддержки «старых» браузеров по предустановкам `es2015`_

#### Собрать растровый спрайт:
```bash
gulp sprite-png
```
_Собирает спрайт из иконок, добавленных в папку `/staticcontent/img/sprite/png`.
[Требования, ограничения и примеры использования спрайтов](//github.com/sashasushko/duotek-frontend/blob/master/sprites.md)_

#### Оптимизировать и минифицировать стили и скрипты
```bash
gulp deploy
```
_Вызывает поочередно задачи для оптимизации и минификации стилей `gulp deploy-css` и скриптов `gulp deploy-js`_


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
            /base                   # Основные стили
            /layout                 # Раскладки и сетки
            /blocks                 # Блоки по БЭМу. Каждый в отдельном файле
            /pages                  # Стили для страниц
            styles.scss             # Список @import для сборки
        /js
            /helpers                # Папка со вспомогательными скриптами
            /polyfills              # Папка с JS-полифилами. Каждый в отдельном файле
            /components             # Папка с JS-компонентами. Каждый в отдельном файле
            app.js                  # Точка входа в клиентский JS
        /img
            /sprite
                /png                # Иконки для PNG-спрайта
        /fonts                      # Шрифты для конвертации в woff
        /vendor                     # Сторонние библиотеки
```

Движковые JS-библиотеки, например jQuery, лежат в корне в папке `/jscore` и подключаются автоматически.
