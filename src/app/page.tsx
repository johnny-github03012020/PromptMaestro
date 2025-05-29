import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenido a PromptMaestro
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Mis Prompts</h2>
            <p className="text-gray-600">Accede a tus prompts guardados y edítalos.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Crear Nuevo</h2>
            <p className="text-gray-600">Comienza a crear un nuevo prompt personalizado.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Explorar</h2>
            <p className="text-gray-600">Descubre prompts compartidos por la comunidad.</p>
          </div>
        </div>
      </div>
    </main>
  )
}