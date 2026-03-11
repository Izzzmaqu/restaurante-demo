// Datos estáticos del menú: al ser un sitio sin backend, los datos viven aquí
// En el futuro podrías reemplazar esto con una llamada a una API
import { Dish } from '../models/dish.model';

export const MENU_DATA: Dish[] = [

  // --- ENTRADAS ---
  {
    id: 1,
    name: 'Ceviche de Mariscos',
    description: 'Camarones, pulpo y corvina curados en limón con aguacate, cilantro y chile dulce.',
    price: 10500,
    category: 'Entradas',
    imageUrl: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?fm=webp&w=600&q=80',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Tabla de Quesos Artesanales',
    description: 'Selección de quesos locales con miel de abeja, nueces y mermelada de higo.',
    price: 9800,
    category: 'Entradas',
    imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?fm=webp&w=600&q=80',
  },

  // --- PLATOS FUERTES ---
  {
    id: 3,
    name: 'Lomo al Vino Tinto',
    description: 'Corte premium de res marinado 24h en Malbec argentino, con reducción de hierbas y papas gratinadas.',
    price: 18500,
    category: 'Carnes',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?fm=webp&w=600&q=80',
    featured: true,
    badge: 'Chef Recomienda'
  },
  {
    id: 4,
    name: 'Salmón en Costra de Hierbas',
    description: 'Filete de salmón atlántico sellado con costra de albahaca y limón, acompañado de vegetales salteados.',
    price: 16800,
    category: 'Pescados',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?fm=webp&w=600&q=80',
    featured: true,
    badge: 'Nuevo'
  },
  {
    id: 5,
    name: 'Pasta Trufa Negra',
    description: 'Fettuccine artesanal con aceite de trufa negra, parmigiano reggiano 24 meses y mantequilla de hierbas.',
    price: 15800,
    category: 'Pastas',
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?fm=webp&w=600&q=80',
  },
  {
    id: 6,
    name: 'Pollo al Limón y Romero',
    description: 'Suprema de pollo de granja, marinada en limón Meyer y romero fresco, con risotto cremoso.',
    price: 13200,
    category: 'Aves',
    imageUrl: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?fm=webp&w=600&q=80',
  },

  // --- POSTRES ---
  {
    id: 7,
    name: 'Tiramisú Clásico',
    description: 'Receta italiana tradicional con mascarpone, espresso Britt y cacao en polvo belga.',
    price: 6500,
    category: 'Postres',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?fm=webp&w=600&q=80',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 8,
    name: 'Coulant de Chocolate',
    description: 'Volcán de chocolate 70% cacao con centro fundido, helado de vainilla y frambuesas frescas.',
    price: 7200,
    category: 'Postres',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?fm=webp&w=600&q=80',
  },

  // --- BEBIDAS ---
  {
    id: 9,
    name: 'Limonada de Maracuyá',
    description: 'Maracuyá fresco, limón tico, menta y azúcar de caña. Sin gas o con gas mineral.',
    price: 3800,
    category: 'Bebidas',
    imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?fm=webp&w=600&q=80',
  },
  {
    id: 10,
    name: 'Copa de Vino Malbec',
    description: 'Vino tinto argentino Achaval Ferrer, notas de frutas oscuras y especias suaves.',
    price: 5500,
    category: 'Bebidas',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?fm=webp&w=600&q=80',
  },
];

// Filtro rápido para obtener solo los platillos destacados (usados en el Home)
export const FEATURED_DISHES = MENU_DATA.filter(dish => dish.featured);

// Lista de categorías únicas para los tabs del menú (sin duplicados)
export const MENU_CATEGORIES = ['Todos', ...new Set(MENU_DATA.map(d => d.category))];
