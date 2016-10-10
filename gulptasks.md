# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Фронтенд-шаблон для быстрого старта проекта :rocket:

## Отдельные GULP-задачи

### Отслеживание изменений и вызов задач
```bash
gulp watch
```
Следит за изменением указанных файлов и вызывает соответствующую задачу. Например, после изменения стилей, вызовет `gulp css`.

### Сборка стилей
```bash
gulp css
```
Собирает стили в один файл по _@import_ из `/staticcontent/css/source/styles.scss`.

### Сборка скриптов
```bash
gulp js
```
Собирает скрипты в один файл из папки `/staticcontent/js/source` и других папок, указанных в массиве `path` в `gulpfile.js`.

Полученный файл обрабатывается Бабелем, для поддержки «старых» браузеров.

### Генерация PNG-спрайтов
```bash
gulp sprite-png
```
Собирает спрайт из иконок, добавленных в папку `/staticcontent/img/sprite/png`.

[Требования, ограничения и примеры использования спрайтов](//github.com/sashasushko/duotek-frontend/blob/master/sprites.md)