# PromptMaestro

Plataforma web para generar y gestionar prompts especializados para desarrollo web.

## Características Principales

- Generación de prompts profesionales
- Sistema de templates predefinidos
- Gestión de prompts personalizados
- Colaboración y compartición de prompts
- Análisis y métricas de uso

## Tecnologías

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Node.js/Express, TypeScript
- **Base de datos:** PostgreSQL, Redis
- **Autenticación:** NextAuth.js
- **Testing:** Jest, Playwright

## Requisitos Previos

- Node.js 18 o superior
- PostgreSQL
- Redis (opcional, para caching)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/promptmaestro.git
cd promptmaestro
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

4. Inicializar la base de datos:
```bash
npx prisma migrate dev
```

5. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter
- `npm test`: Ejecuta los tests unitarios
- `npm run e2e`: Ejecuta los tests end-to-end

## Estructura del Proyecto

```
├── src/
│   ├── app/              # Rutas y páginas de Next.js
│   ├── components/       # Componentes React reutilizables
│   ├── lib/              # Utilidades y configuraciones
│   └── types/            # Definiciones de TypeScript
├── prisma/               # Esquema y migraciones de la base de datos
├── public/               # Archivos estáticos
└── tests/                # Tests unitarios y E2E
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.