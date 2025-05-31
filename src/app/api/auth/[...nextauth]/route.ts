// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth'; // Importa la función principal de NextAuth.
// Importa tus opciones de autenticación.
// Dado tu estructura de archivos (Screenshot 2025-05-29 224003.png), tus opciones están en auth.config.ts dentro de la misma carpeta.
import { authOptions } from './auth.config';

// Inicializa NextAuth con tus opciones. Esto devuelve un handler que Next.js puede usar.
const handler = NextAuth(authOptions);

// Exporta el handler directamente para los métodos GET y POST.
// Esta es la forma correcta de integrar NextAuth con el App Router de Next.js.
export { handler as GET, handler as POST };

// Opcional: Para asegurar que la ruta se ejecute dinámicamente en cada solicitud.
export const dynamic = 'force-dynamic';