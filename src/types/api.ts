// Product interfaces for fakestoreapi.com/products
export interface Product {
  id: number;
  title: string;
  price: number; // float
  description: string;
  category: string;
  image: string; // URI
  // The API may return these additional fields, but they're not in the core documentation
  rating?: {
    rate: number;
    count: number;
  };
}

// User interfaces for fakestoreapi.com/users/{id}
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  // The API may return these additional fields, but they're not in the core documentation
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: {
    geolocation?: {
      lat: string;
      long: string;
    };
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
  };
  phone?: string;
}
