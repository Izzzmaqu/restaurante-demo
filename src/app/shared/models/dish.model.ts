// Interfaz TypeScript que define la forma de un platillo del menú
// Usarla garantiza que todos los datos tengan la misma estructura
export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;           // En colones costarricenses
  category: string;
  imageUrl: string;
  featured?: boolean;      // El ? significa que es opcional
  badge?: string;          // Etiqueta como 'Popular', 'Nuevo', 'Chef Recomienda'
}
