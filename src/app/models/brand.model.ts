export interface BrandModel {
    id: number;
    name: string;
    logo: string;
    description: string;
    category: 'luxury' | 'designer' | 'niche';
    country: string;
    foundedYear: number;
    perfumeCount: number;
    featured: boolean;
}
