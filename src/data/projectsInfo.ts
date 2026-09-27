import type { Project } from '@/types/index.ts'

export const projectsInfo: Project[] = [
	{
		id: 'Spendly',
		name: 'Spendly',
		tech: 'React.js, TypeScript, TailWindCSS, Node.js, Express.js, MongoDB',
		shortDescr:
			'Personal finance dashboard with expense categorization, real-time balance calculations, budget tracking and data-driven analytics',
		desc: 'Track your expenses and manage your budget effectively.A comprehensive personal finance dashboard built with strict TypeScript typing to ensure reliable data handling and mathematical accuracy. The app implements complex logic for real-time balance calculations, expense categorization, and budget tracking. It showcases advanced React patterns for managing transaction history and visualizing financial health through a clean, data-driven interface.',
		images: [
			'/spendly/spendly1.png',
			'/spendly/spendly2.png',
			'/spendly/spendly3.png',
		],
		link: 'https://github.com/Dinur-Temirbay/Expense-tracker',
	},
	{
		id: 'wishbone',
		name: 'Wishbone',
		tech: 'Html, Scss, JavaScript',
		shortDescr:
			'Interactive architecture showcase featuring property galleries, construction phases, and integrated contact forms with immersive UX design',
		desc: 'Architectural design concepts and modern housing solutions. An interactive showcase of architectural concepts featuring detailed property galleries, construction phase modules, and integrated contact forms. The primary goal was to create a seamless user experience (UX) that immerses potential clients in the studio`s design philosophy through interactive elements and a refined interface.',
		images: ['/wishbone/wishbone1.png', '/wishbone/wishbone2.png'],
		link: 'https://github.com/Dinur-Temirbay/wishbone',
	},
	{
		id: 'trailly',
		name: 'Trailly',
		tech: 'React, TypeScript, TailwindCSS, Node.js, Express, PostgreSQL, Prisma, Google Places API',
		shortDescr:
			'City discovery platform that turns any city name into curated places to visit, organized by category — cafes, museums, parks and more',
		desc: 'Discover places worth visiting in any city around the world. A travel discovery platform that lets users search a city and instantly get a curated list of places — cafes, restaurants, museums, parks, and landmarks — automatically sorted into categories. The application features JWT-based authentication, a personal saved places collection, and a caching layer that stores results in PostgreSQL to minimize external API calls. Built with a focus on clean data architecture and type safety, it leverages TypeScript across the full stack, Prisma ORM for database access, and the Google Places API for real-world location data.',
		images: [
			'/trailly/trailly1.png',
			'/trailly/trailly2.png',
			'/trailly/trailly3.png',
		],
		link: 'https://github.com/Dinur-Temirbay/Trailly',
	},
	{
		id: 'weather-app',
		name: 'Weather App',
		tech: 'Html, Css, JavaScript',
		shortDescr:
			'Real-time weather dashboard with city search, REST API integration, humidity, wind speed, and responsive design across all devices',
		desc: 'Get up-to-date information about the weather in the selected city. A dynamic weather application that fetches real-time meteorological data from a REST API. It features a robust search system, asynchronous data handling, and provides detailed insights including humidity, wind speed, and local time. Built with clean, modular JavaScript to ensure fast performance and a responsive user experience across all devices.',
		images: ['/weather-app/weather-app1.png', '/weather-app/weather-app2.png'],
		link: 'https://github.com/Dinur-Temirbay/weather-app',
	},
	{
		id: 'todo-list',
		name: 'To-Do-List',
		tech: 'React.js, TailWindCss',
		shortDescr:
			'Clean task manager with full CRUD operations, intuitive UI and smooth user experience for daily productivity',
		desc: 'Task management: add, edit, complete and delete with a clean UI.',
		images: ['/todo-list/todo-list1.png', '/todo-list/todo-list2.png'],
		link: 'https://github.com/Dinur-Temirbay/ToDo-List',
	},
	{
		id: 'qr-generator',
		name: 'QR Generator',
		tech: 'Html, Css, JavaScript',
		shortDescr:
			'Lightweight utility for instant custom QR code generation from links or text with real-time encoding and download capability',
		desc: 'Generate customized QR codes instantly from any URLs or text inputs. A lightweight, client-side utility built with pure JavaScript for fast, on-the-fly QR code generation. The application features a clean, minimal user interface that handles real-time encoding, input validation, and offers instant download capabilities for the generated images, ensuring smooth and seamless tool utility.',
		images: [
			'/qr-generator/qr-generator1.png',
			'/qr-generator/qr-generator2.png',
		],
		link: 'https://github.com/Dinur-Temirbay/qr-generator',
	},
]
