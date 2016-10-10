# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Фронтенд-шаблон для быстрого старта проект :rocket:

## Файловая структура
```
/jscore                                     # Содержит движковые JS-библиотеки, например jQuery
    jquery.min.js
/staticcontent
    /img                                    # Изображения
        /sprite
            /svg                            # Иконки для SVG-спрайта
                ...
            /png                            # Иконки для PNG-спрайта
                ...                 
        sprite.png                          # PNG-спрайт (генерируется автоматически)
        sprite@2x.png                       # PNG-спрайт для ретины (генерируется автоматически)
        sprite.svg                          # SVG-спрайт (генерируется автоматически)
        ...
    /fonts                                  # Шрифты. По умолчанию в woff
        ...
    /vendor                                 # Сторонние JS- и CSS-библиотеки. Каждая в своей папке
        /modernizr                          # Модернайзер
            modernizr.json                  # Список отслеживаемых возможностей
            modernizr.js                    # Собранный файл по JSON-списку
        /normalize                          # Нормалайз
            normalize.scss
        ...
    /css
        /source
            /mixins                         # Примеси. Каждая в своём файле
                _media.scss                 # Медиа выражения
                _clearfix.scss              # Сброс для плавающих элементов
                ...
            /base                           # Основные составляющие (конечный список)
                _variables.scss             # Переменные
                _fonts.scss                 # @font-face для нестандартных шрифтов
                _global.scss                # Стили для html, body
                _typo.scss                  # Типографика, стили для WYSIWYG
                _helpers.scss               # Вспомогательных стили                
            /layout                         # Стили раскладки (конечный список)
                _grid.scss                  # Сетки
                _header.scss                # Шапка сайта
                _content.scss               # Содержание сайта
                _footer.scss                # Подвал сайта
            /pages                          # Стили для страниц (опциональны)
                ...
            /blocks                         # Блоки по БЭМу. Каждый в своей папке
                /block
                    _block.scss
                    _block--modifier.scss
                ...
            styles.scss                     # Список @import для сборки
        all.css                             # Собранные стили (генерируется автоматически)
    /js
        /source                             
            /components                     # Папка с JS-компонентами. Каждый в своей папке
                component.js
                ...
            scripts.js                      # Список require для сборки
        all.js                              # Собранные скрипты (генерируется автоматически)
gulpfile.js                                 # Задачи для сборщика
package.json                                # Информация о проекте
```