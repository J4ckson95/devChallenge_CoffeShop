/// <reference types="vite/client" />
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.json" {
  const value: any;
  export default value;
}
export type filterType = "all" | "instock";

export type Product = {
  available: boolean;
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
};
export interface ProductContainerProps {
  filter: filterType;
}
export interface CartProductProps {
  dataProduct: Product;
}
