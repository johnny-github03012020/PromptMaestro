// src/app/page.tsx

// Import auth from our local auth.ts file which is configured for NextAuth v5
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home(): Promise<JSX.Element> {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenido a PromptMaestro
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Mis Prompts</h2>
            <p className="text-gray-600">Gestiona tus prompts personalizados</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Biblioteca</h2>
            <p className="text-gray-600">Explora prompts de la comunidad</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Perfil</h2>
            <p className="text-gray-600">Configura tu cuenta y preferencias</p>
          </div>
        </div>
      </div>
    </main>
  );
}