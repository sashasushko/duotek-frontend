# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Фронтенд-шаблон для быстрого старта проект :rocket:

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
                /png                    # Иконки для PNG-спрайта
        /fonts                      # Шрифты для конвертации в woff
        /vendor                     # Сторонние библиотеки
```

Движковые JS-библиотеки, например jQuery, лежат в корне в папке `/jscore` и подключаются автоматически.
