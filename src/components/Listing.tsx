import React from "react";
import { Item, ListingProps } from "./types";
import { ItemCard } from "./ItemCard";

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const safeItems = (items as any[]).filter((item) => {
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
  }) as Item[];

  return (
    <div className="item-list">
      {safeItems.map((item) => (
        <ItemCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;
