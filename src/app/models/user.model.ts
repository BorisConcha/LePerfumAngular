export interface UserModel {
    id: number;
    name: string;
    email: string;
    phone?: string;
    birthdate?: Date;
    address?: string;
    role: 'Cliente' | 'Tienda' | 'Admin';
    preferences?: FragrancePreferences;
    createdAt: Date;
}

export interface FragrancePreferences {
    fresh: boolean;
    woody: boolean;
    floral: boolean;
    oriental: boolean;
}
