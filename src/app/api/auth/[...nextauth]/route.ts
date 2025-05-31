// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
// CORRECCIÓN CLAVE: Importa authOptions desde el archivo local 'auth.config'
// ya que está en la misma carpeta que route.ts
import { authOptions } from './auth.config'; // <-- CAMBIO AQUÍ

// Inicializa NextAuth con tus opciones. Esto devuelve un handler.
const handler = NextAuth(authOptions);

// Exporta el handler directamente para los métodos GET y POST.
// Esta es la forma correcta para el App Router de Next.js 14 con NextAuth v5.
export { handler as GET, handler as POST };

// Opcional: Para asegurar que la ruta se ejecute dinámicamente
export const dynamic = 'force-dynamic';