import React from "react";
import { Item, ListingProps, RawItem } from "./types";
import { ItemCard } from "./ItemCard";

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  // Type guard для проверки, является ли элемент валидным Item
  const isValidItem = (item: RawItem): item is Item => {
    return (
      item &&
      item.state &&
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

  // Фильтруем сырые данные (RawItem[]) в валидные (Item[])
  const safeItems = items.filter(isValidItem);

  return (
    <div className="item-list">
      {safeItems.map((item) => (
        <ItemCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;
