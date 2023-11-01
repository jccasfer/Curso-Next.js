Crear React arrow function component
	rafce (snippet-extension ES7+ React/Redux/React-Native/JS snippets)

Routing (nuevo) by convention:
	Añadir carpetas en /app/ y dentro un fichero .tsx (por typescript) en minusculas
	Ej: 	/app/users/page.tsx
		/app/users/new/page.tsx

Todos los componentes en /app son server components by default: 
	SSR no pueden tener interactividad en cliente
	para hacer el componente de tipo cliente, simplemente añadir al componente
		'use client';
	al inicio de su fichero
	El componente y todos de los que depende automaticamente se incluiran en el js bundle que envía el cliente
	Para hacer la app mas rápida y search engine friendly, hay que poner el max num de compos en SSR
	y solo enviar al cliente lo minimo necesario con interactividad. hacer estos compos lo mas pequeños posible y incluirlos en otros mas grandes SSR
	


Usamos Link Component de react para en vez
  de un a href para que no recargue todos los javascripts/fuentes... asociados a la pagina, 
  solo los del componente a ver

Static Rendering
	Por defecto la web es Dynamic Rendering
	Para hacerla static (irá mas rápida pero esta pregenerada)
		npm run build 
	Ahora si la ejecutamos en producción
		npm start


PRISMA ORM:
	instalar:
		npm i prisma
	inicializar:
		npx prisma init
		modificar en .env la cadena de conexion (ejemplos https://www.prisma.io/docs/reference/database-reference/connection-urls)
		y en prisma/schema.prisma el provider SQL que usemos (va con )


------------------------

Summary
- Next.js is a framework for building fast, and search-engine friendly applications. 
- It includes a compiler for transforming and minifying JavaScript code, a Command-line Interface (CLI) for building and starting our application, and a Node.js runtime for running backend code. This enables full-stack development. 
- With Next.js, we can render our components on the server and return their content to the client. This technique is called Server-side Rendering (SSR) and makes our applications search-engine friendly. 
- To further improve performance, we can pre-render pages and components that have static data during the build and serve them whenever needed. This technique is called Static Site Generation (SSG).
- The new app router in Next.js 13 makes it incredibly easy to create routes. We can define route segments by creating directories. To make a route public, we add a page file (page.js, page.jsx, or page.tsx) in the corresponding directory. 

- Next.js provides the Link component to enable client-side navigation. This means as the user navigates between pages, the new content is loaded quickly and smoothly without the entire page being reloaded. 
- Next.js 13 supports client and server components introduced in React 18. Client components are rendered on the client within a web browser. This technique is called Client-side Rendering (CSR) and it’s how traditional React apps work. Server components are rendered on the server within a Node.js runtime. This technique is called Server-side Rendering (SSR).
- Server components lead to reduced bundle sizes, better performance, increased search engine visibility, and enhanced security. But they cannot handle browser events, access browser APIs, or use the state or effect hooks. These functionalities are only available in client components. So we should use them whenever possible unless we need interactivity.
- All the components and pages in the /app directory are server components by default. To make a component a client component, we add the ‘use client’ directive on top of the component file.
- Server components are great for fetching data because they don’t require extra server trips, making our application faster and more search-engine friendly. 
- Next.js enhances the fetch() function by adding automatic caching. This boosts performance and reduces the need to retrieve the same piece of data twice.
- In Next.js, components can be rendered at build time (called Static Rendering) or at request time (called Dynamic Rendering). If we have pages or components with static data, we can pre-render them during build time to improve our application’s performance. 





------------------------



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
