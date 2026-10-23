export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  images: string[];
  category: string;
  collection: string;
  price: number;
  originalPrice: number;
  material: string;
  colors: string[];
  sizes: string[];
  details: string;
  care: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isSale: boolean;
  isFeatured: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: CartItem[];
  total: number;
  trackingNumber?: string;
  estimatedDelivery: string;
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  orders: Order[];
  wishlist: string[];
  addresses: Address[];
}

