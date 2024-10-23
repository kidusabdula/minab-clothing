export interface ProductGet{
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    material: string;
    quantity: number;
    details: string;
}

export interface Category{
    id: number;
    name: string;
}