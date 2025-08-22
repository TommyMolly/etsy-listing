# Etsy Listing - React + TypeScript + Vite

Проект для отображения списка товаров Etsy с использованием React, TypeScript и Vite.

## Описание

Это приложение отображает список товаров из Etsy API, фильтруя только активные товары с необходимыми полями.

## Особенности

- **TypeScript**: Полная типизация без использования `any` или `as`
- **Type Guards**: Использование type guards для безопасной фильтрации данных
- **React 19**: Современная версия React с хуками
- **Vite**: Быстрый сборщик для разработки

## Структура проекта

```
src/
├── components/
│   ├── ItemCard.tsx      # Компонент карточки товара
│   ├── Listing.tsx       # Компонент списка товаров
│   └── types.ts          # TypeScript типы
├── data/
│   └── etsy.json         # Данные товаров Etsy
└── App.tsx               # Главный компонент
```

## Исправления типизации

### Проблема
В исходном коде использовались:
- `any` для типизации массива
- `as` для приведения типов

### Решение
1. **Создан интерфейс `RawItem`** для сырых данных из API
2. **Расширен интерфейс `Item`** для валидных данных
3. **Реализован type guard `isValidItem`** для безопасной фильтрации
4. **Убраны все использования `any` и `as`**

### Пример исправленного кода

```typescript
// Type guard для проверки валидности элемента
const isValidItem = (item: RawItem): item is Item => {
  return (
    item &&
    item.state === "active" &&
    item.url &&
    item.MainImage &&
    item.MainImage.url_570xN &&
    item.title &&
    item.currency_code &&
    item.price &&
    typeof item.quantity === "number"
  );
};

// Типизированная фильтрация
const safeItems = items.filter(isValidItem);
```

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build
```

## Технологии

- React 19.1.1
- TypeScript 5.8.3
- Vite 7.1.2
- ESLint 9.33.0
