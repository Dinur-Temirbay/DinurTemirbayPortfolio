import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { navIcons } from './navItem.ts'

export function Header() {
	const { pathname } = useLocation()

	return (
		<nav className='mx-auto sticky md:relative top-5  mt-5 flex items-center justify-center gap-5 md:gap-8 bg-gray-800 rounded-md p-3 w-fit z-50'>
			{navIcons.map(({ icon: Icon, label, href }, index) => (
				<Link key={index} to={href} className='relative group'>
					<Icon
						color={pathname === href ? '#06b6d4' : 'white'}
						className='text-white transition duration-300 hover:scale-110 cursor-pointer hover:text-cyan-600'
					/>
					<span className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap'>
						{label}
					</span>
				</Link>
			))}
		</nav>
	)
}
