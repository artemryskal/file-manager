# ГОСТДок документация ![Логотип](public/favicon.ico)

## Команды для запуска
1. Для запуска сервера разработки
    ```shell
    npm run dev
    ```
   
2. Для запуска билда проекта
    ```shell
    npm run build
    ```

## Как работать
1. Установить все зависимости.
    ```shell
    npm install
    ```
2. Создать файл `.env` (для примера можно взять код из `.example.env`).
3. Запустить локальный сервер для разработки

## Директории

### `src/`
#### `api`
1. `instance.js` является инстансом `axios`.
2. Остальные файлы в директории `endpoints` являются файлами для отправки запросов.

#### `assets`
Папка для хранения файлов-ассетов (изображений, видео и тд)

#### `layouts`
Директория для хранения layouts

#### `plugins`
Директория для хранения плагинов

#### `router`
Инстанс роутера

#### `router`
Инстанс роутера

#### `scss`
1. Файл `main.scss` является файлом импорта в приложение. Также в него импортируются остальные стили.
2. Файл `global.scss` содержит глобальные стили приложения. 
3. Стили в директории `components` изменяют стили компонентов Vuetify.
4. Стили в директории `custom` содержат кастомные стили, которые будут использоваться более одного раза в приложении.

#### `stores` 
Файлы глобального стора

#### `views`
Файлы views (`default` слот в `layout`)
