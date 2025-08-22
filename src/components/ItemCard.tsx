import React from "react";
import { Item } from "./types";

interface Props {
  item: Item;
}

const formatPrice = (price: string, currency: string) => {
  const num = parseFloat(price).toFixed(2);
  switch (currency) {
    case "USD":
      return `$${num}`;
    case "EUR":
      return `€${num}`;
    default:
      return `${num} ${currency}`;
  }
};

const getQuantityLevel = (quantity: number) => {
  if (quantity <= 10) return "level-low";
  if (quantity <= 20) return "level-medium";
  return "level-high";
};

export const ItemCard: React.FC<Props> = ({ item }) => {
  const title =
    item.title.length > 50 ? item.title.slice(0, 50) + "…" : item.title;

  // Проверяем, что MainImage существует
  if (!item.MainImage || !item.MainImage.url_570xN) {
    return (
      <div className="item">
        <div className="item-image">
          <div className="no-image">No Image</div>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
          <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
            {item.quantity} left
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
        <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};
