# Events & Shop
Приложение, состоит из нескольких страниц. 
1. Первая - **страница Логин** по
адресу /login. На странице логина располагается форма авторизации. Форма состоит
из двух полей - email и пароль.
* Валидация полей:
  * Email - проверка на корректный email адрес
  * Пароль - минимум 8 символов, обрезка пробелов, минимум одна заглавная буква

По нажатию на кнопку авторизации проверияется валидность полей, в случае валидности
имитируется запрос на сервер (2 секунды), форма блокируется, появляется loader загрузки, после двух секунд происходит переход на главную страницу по адресу ‘/’

![preview](https://github.com/Victoria-Rozhkova/my-app/blob/preview/preview-2.JPG)

2. **Главная страница:** состоит из шапки с пунктами меню - Главная страница, Авторизация и Магазин.

* В теле главной страницы 2 колонки :
  * Первая - список пользователей с пагинацией.
  * Вторая - список событий.

В списке пользователей выводится по 5 записей с сервера, под таблицей постраничная пагинация.

В таблице списка пользователей выводятся 4 колонки полей пользователя и пятая
колонка с действиями. Действие в последней колонке - удаление пользователя.

Во время загрузки данных в таблице показывается загрузчик.

---
Во второй колонке отображается список событий. События приходят через вебсокет. Используется [react-use-websocket](https://github.com/robtaussig/react-use-websocket).
События генерируются раз в несколько секунд. При получении события это событие
добавляется в список событий и отображается в колонке в виде таблицы.

![preview](https://github.com/Victoria-Rozhkova/my-app/blob/preview/preview.JPG)

3. **Страница Магазин** - статично сверстаная страница с моковыми данными.

Для стилей использовался [Material UI](https://mui.com/).

![preview](https://github.com/Victoria-Rozhkova/my-app/blob/preview/preview-3.JPG)

## Стек: Javascript, React, Router, Redux, Thunk
