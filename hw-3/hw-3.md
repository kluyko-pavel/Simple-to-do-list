<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Web Storage API</h1>

## Complete exercise

#### Task 1 💻

Реализовать функциональность:

+ Сохранение карточек с делами в **`localStorage`**:
    + Создать ключ `tasks` в `localStorage`
    + Написать две функции `getName` и `setName` для получения и записи данных в `localStorage`
    + Не забудьте сделать проверку в `localStorage` по ключу если вдруг его не будет.
    + После перезагрузки страницы состояния карточек `checked` / `unchecked` должны сохраняться.
    + `Id` у карточек должны быть разными и генерироваться динамически.

+ Структура хранения данных карточек дел:

    ```javascript
        const tasks = [{}, {}, {}, {}, {}, {}, {}, {}]
    ```

+ Объект карточки дела должен содержать поля: 

    ```javascript
        const task = {
            id: 1,
            date: '26.01.2023', 
            text: 'Play video games',
            isChecked: true,
        }
    ```