export interface Feedback {
  user: string;
  rating: number;
  comment?: string;
  likes?: number;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
  description: string;
  url: string;
  sellerId: number;
  quantity: number;
  feedback: Feedback[];
}
