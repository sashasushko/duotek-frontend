# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Фронтенд-шаблон для быстрого старта проекта :rocket:

## Стиль кода
### HTML и CSS по БЭМу
Блоки называем по-английски, желательно одним словом. Можно брать из [списка часто используемых слов](//github.com/yoksel/common-words).

#### HTML
[Наименование «Два дефиса»](https://ru.bem.info/methodology/naming-convention/#Стиль-two-dashes):

`.block` — [блок](//ru.bem.info/methodology/key-concepts/#Блок)

`.block__element` — [элемент](//ru.bem.info/methodology/key-concepts/#Элемент)
 
`.block__element--modifier` — [модификатор](//ru.bem.info/methodology/key-concepts/#Модификатор)

#### CSS
Вложенность уместна, если нужно [изменить стили элементов в зависимости от модификатора блока](//ru.bem.info/methodology/css/#Вложенные-селекторы).

Вместо стилизации от контекста используем [миксы](//ru.bem.info/methodology/css/#Миксы).

Теги без классов стилизовать нельзя, за исключением `html`, `body` и тегов визивиг-редактора.

Подробнее в спецификации [CSS по БЭМу](//ru.bem.info/methodology/css/)

### JavaScript _(скоро)_

### Шрифты _(скоро)_

### Линтеры _(скоро)_