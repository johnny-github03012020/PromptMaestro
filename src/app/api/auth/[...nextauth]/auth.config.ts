import { PrismaAdapter } from '@auth/prisma-adapter';
// CORRECCIÓN: Usar 'import type' para NextAuthOptions
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '@/lib/prisma';
import { compare } from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || ''
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Credenciales inválidas');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        // Asegúrate de que user y user.password existan antes de intentar comparar
        if (!user || !user.password) {
          throw new Error('Usuario no encontrado o contraseña no establecida');
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Contraseña incorrecta');
        }

        // Este objeto se adjuntará al JWT (token) y a la sesión
        return {
          id: user.id, // Asegúrate de que 'user' de Prisma tenga un 'id'
          email: user.email,
          name: user.name,
          image: user.image
        };
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  // CRÍTICO: Añadir los callbacks para propagar el ID del usuario al token y la sesión
  callbacks: {
    async jwt({ token, user }) {
      // 'user' solo estará disponible en la primera llamada del callback después de la autenticación
      if (user) {
        token.id = user.id; // Asigna el ID del usuario al token
      }
      return token;
    },
    async session({ session, token }) {
      // 'session.user' puede ser undefined, y 'token.id' debe ser manejado como string.
      // Asegúrate de que ambos existan antes de asignar.
      if (session.user && token.id) {
        session.user.id = token.id as string; // Asigna el ID del token a la sesión del usuario
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET // ¡CRÍTICO para producción!
};