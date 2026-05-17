import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@layout/Header/Header.tsx'
import { Sidebar } from '@layout/Sidebar/Sidebar.tsx'

export function Layout() {
	const { pathname } = useLocation()
	const isHome = pathname === '/'

	return (
		<>
			<Header />
			<main className='flex flex-col md:flex-row mt-10 md:mt-20 md:gap-x-20 max-w-6xl mx-auto px-6'>
				<section
					className={`min-w-[25%] md:sticky self-start top-8 ${!isHome ? 'hidden md:block' : ''}`}
				>
					<Sidebar />
				</section>
				<section className='flex-1 flex flex-col gap-y-10 mb-8 overflow-hidden'>
					<Outlet />
				</section>
			</main>
		</>
	)
}
