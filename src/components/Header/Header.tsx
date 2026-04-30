import { Briefcase, Folder, House, Mail, Wrench } from 'lucide-react'

export function Header() {
	return (
		<>
			<nav className='mx-auto sticky flex items-center justify-center gap-5 md:gap-7 bg-gray-800 rounded-md p-3 mt-5 w-fit md:w-1/5'>
				<House
					color='white'
					className='transition duration-300 hover:scale-110  cursor-pointer'
				/>
				<Folder
					color='white'
					className='transition duration-300 hover:scale-110  cursor-pointer'
				/>
				<Wrench
					color='white'
					className='transition duration-300 hover:scale-110  cursor-pointer'
				/>
				<Briefcase
					color='white'
					className='transition duration-300 hover:scale-110  cursor-pointer'
				/>
				<Mail
					color='white'
					className='transition duration-300 hover:scale-110  cursor-pointer'
				/>
			</nav>
		</>
	)
}
