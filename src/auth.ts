import NextAuth from 'next-auth';
import { authOptions } from './app/api/auth/[...nextauth]/auth.config';

// Initialize NextAuth.js with your configuration
export const { auth, signIn, signOut } = NextAuth(authOptions);

// Export the auth function as default for Next.js App Router
export default auth;