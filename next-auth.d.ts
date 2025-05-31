// next-auth.d.ts
// Este archivo extiende los tipos de NextAuth para incluir 'id' en el usuario de la sesión y en el token JWT.
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt"; // Importar JWT con un alias

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string; // <-- ¡Aquí es donde añades la propiedad 'id' al tipo de usuario de la sesión!
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object that is passed to the `session` and `jwt` callbacks
   * (No siempre es necesario extenderlo aquí si tu 'User' de la base de datos ya tiene un 'id')
   */
  interface User extends DefaultUser {
    id: string; // <-- Asegúrate de que tu interfaz 'User' también contemple 'id'
  }
}

declare module "next-auth/jwt" {
  /**
   * The shape of the JWT when using JWT strategy
   */
  interface JWT extends NextAuthJWT {
    id: string; // <-- Añade 'id' al tipo JWT para que el token lo reconozca
  }
}