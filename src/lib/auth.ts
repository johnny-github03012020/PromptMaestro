import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from '@/lib/prisma'; // Asegúrate de que esta ruta sea correcta

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      // Aseguramos que session.user exista y que token.sub exista
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      // 'user' solo está presente en la primera llamada después de iniciar sesión (o al actualizar la sesión con un proveedor)
      // Aseguramos que 'user' y 'user.id' existan
      if (user && user.id) {
        token.sub = user.id; // Asigna el ID del usuario al 'sub' del token
      }
      return token;
    },
  },
  // Es CRÍTICO tener un secret para NextAuth en producción
  secret: process.env.NEXTAUTH_SECRET,
};