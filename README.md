# equeue

## Подготовка

Ставим `pnpm`:

    $ npm i -g pnpm

Ставим зависимости (в директории с проектом):

    $ pnpm i

Прогон тестов:

    $ pnpm test

Форматирование всех файлов перед коммитом:

    $ pnpm fmt

Проверка линтерами:

    $ pnpm lint

## Запуск

Ставим [`caddy`][caddy]. Выполняем в директории с проектом:

    $ caddy run

Открываем http://localhost в браузере.

[caddy]: https://github.com/caddyserver/caddy
