import { navIcons } from './navItem.ts'

export function Header() {
	return (
		<nav className='mx-auto sticky md:relative top-5 flex items-center justify-center gap-5 md:gap-7 bg-gray-800 rounded-md p-3 w-fit md:w-1/5'>
			{navIcons.map(({ icon: Icon, label, href }, index) => (
				<a key={index} href={href} className='relative group'>
					<Icon className='text-white transition duration-300 hover:scale-110 cursor-pointer hover:text-cyan-600' />
					<span className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap'>
						{label}
					</span>
				</a>
			))}
		</nav>
	)
}
