## Hello! This is the BestRunner App.
**This App allows you to track your workouts activities, and to view the weekly chart based on your distance.**

<img src="https://user-images.githubusercontent.com/62475313/92962082-6651ad80-f43e-11ea-9637-d7b5f3379874.jpg"/>


ENGLISH && RUSSIAN &#8595;

### Overview and Goals:

**1. Add a new workout / Edit the existing one:**

* by distance in km;
* by date;
* by type (walk/run/bike/ski)
* nclude a comment;

**3. Delete the existing workout;**

**4. Filter Workouts:**

* by date: oldest-newest, newest-oldest;
* by type: bike/walk/run/ski;
* by km: max-min, min-max

### App construction.
* React.js to build the front-end;
* Redux for state managemet;
* React-router for routing;
* Redux-reselect to implement complex filter to memoize expensive calculations;
* Redux-persist to save data in localStorage;
* Material UI for Forms and Input Fields;
* Styled Components to keep the concerns of styling and element architecture separated and make components more readable.
* Canvas.js to make the weekly chart with the data;

### What Would I Like to Improve?
1. UX/UI design;

___ 

## Что можно делать в приложении:

**1. Добавьте новую тренировку или отредактируйте существующую:**

* по расстоянию в км;
* по дате;
* по типу (прогулка / бег / велосипед / лыжи)
* добавить комментарий;

**3. Удалите существующую тренировку;**

**4. Фильтр тренировок:**

* по дате: старая-новая, новая-старая;
* по типу: велосипед / прогулка / бег / лыжи;
* по км: макс-мин, мин-макс

## Структура приложения.

* React.js для создания интерфейса;
* Redux для управления состоянием приложения;
* React-router для маршрутизации;
* Reselect для реализации фильтра, и запоминания дорогостоящих вычислений;
* Redux-persist для сохранения данных в localStorage;
* Material UI для форм и полей ввода и UI компонентов;
*Не использовала Formik/React-hook-form, потому что не было смысла в валидация форм.
* Styled-components, чтобы отделить стили и архитектуру элементов и сделать компоненты удобочитаемыми.
* Canvas.js для построения недельного графика с данными;

