# [Duotek Frontend Template](//github.com/sashasushko/duotek-frontend)
Фронтенд-шаблон для быстрого старта проекта :rocket:

## Использование PNG-спрайтов

### Иконки
Спрайт собирается автоматически из иконок в папке `/staticcontent/img/sprite/png`.

Иконки должны быть с чётными высотой и шириной, названы по-английски, желательно одним словом. Дефис допустим. Их название после станет переменной для примеси.

Для ретины иконки должны быть в два раза больше обычной, а в конце названия иметь приписку `@2x`. Сами названия у обычной иконки и для ретины должны совпадать.
Например, обычная `menu.png` 16 на 16 px и для ретины `menu@2x.png` 32 на 32 px.

### Примеси
Утилита **[spritesmith](/twolfson/gulp.spritesmith/)** автоматически генерирует примеси:

`sprite-width($icon-name)` — ширина иконки

`sprite-height($icon-name)` — высота иконки

`sprite-position($icon-name)` — положение иконки в спрайте

`sprite-image($icon-name)` — путь к спрайту

`sprite($icon-name)` — четыре предыдущих свойства сразу

`sprite-background-size($icon-name)` — ширина и высота спрайта

Все примеси возвращают результат как _ключ: значение_. Например:
```scss
.icon--menu {
    @include sprite-width($menu);
}
```
Скомпилируется в:
```css
.icon--menu {
    width: 16px;
}
```

### Стандартное использование 

Примесь для не ретина иконок `sprite($icon)` мы не используем.

Только `retinaSprite($icon-group)`, где `$icon` — название png-иконки, а `-group` — служебная приписка.

Например, для иконки `menu.png` код будет следующий:
```scss
.icon--menu {
    @include retina-sprite($menu-group);
}
```
В скомпилированном CSS мы получим:
```css
.icon--menu {
    width: 16px;
    height: 16px;
    background-image: url('/staticcontent/img/sprite.png');
    background-position: 0 0;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .icon--menu {
        background-image: url('/staticcontent/img/sprite@2x.png');
        background-size: 16px 16px;
    }
}
```

### Эффекты при наведении
Чтобы сменить при наведении иконку на другое её состояние, достаточно указать позицию состояния:
```scss
.icon--menu {
    @include retina-sprite($menu-group);

    &:hover {
        @include sprite-position($menu-hover);
    }
}
```
А вот другое состояние иконки `menu-hover.png` и `menu-hover@2x.png` придётся рисовать отдельно.

В случае, если сменить нужно на другую иконку со своими высотой и шириной, придётся прописать новую примесь: `@include retina-sprite($cross-group);`

### Нестандартное использование

Бывают случаи, когда необходимо получить параметры иконки не как _ключ: значение_, а просто _значение_. Тогда можно обратиться напрямую к массиву параметров иконки, записанному в переменную `$icon-name`.

Например, нам необходимо отцентровать иконку, а современные способы вроде `translate` или `flexbox` не поддерживаются:
```scss
.icon--menu {
    // Примесь вставит: width, height, background-image, background-position и @media для ретины
    @include retina-sprite($menu-group);

    // Центруем
    // Смещаем вниз на 50% и возвращаем вверх на половину собственной ширины
    top: 50%;
    margin-top: ($menu-height / 2) * (-1);
    // Тоже самое по горизонтали
    left: 50%;
    margin-left: ($menu-width / 2) * (-1);
}
```