export interface PerfumeModel {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    rating: number;
    type: 'Eau de Parfum' | 'Eau de Toilette' | 'Cologne';
    gender: 'Masculino' | 'Femenino' | 'Unisex';
    description?: string;
    notes?: {
      top: string[];
      middle: string[];
      base: string[];
    };
    available: boolean;
    stores?: Store[];   
}

export interface Store {
    name: string;
    price: number;
    url: string;
    inStock: boolean;
}