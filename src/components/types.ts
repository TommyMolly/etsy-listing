export interface MainImage {
  url_570xN: string;
}

export interface Item {
  listing_id: number;
  state: string;
  url: string;
  MainImage?: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

export interface ListingProps {
  items?: RawItem[];
}

export interface RawItem {
  listing_id: number;
  state: string;
  url: string;
  MainImage?: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}
