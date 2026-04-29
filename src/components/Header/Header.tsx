import { Briefcase, Folder, House, Mail, Wrench } from 'lucide-react'

export function Header() {
	return (
		<>
			<nav className='mx-auto sticky flex items-center justify-center gap-7 bg-cyan-950 rounded-md p-3 mt-5 w-1/6'>
				<House color='white' className='hover:bg-purple-500 cursor-pointer' />
				<Folder color='white' className='hover:bg-purple-500 cursor-pointer' />
				<Wrench color='white' className='hover:bg-purple-500 cursor-pointer' />
				<Briefcase
					color='white'
					className='hover:bg-purple-500 cursor-pointer'
				/>
				<Mail color='white' className='hover:bg-purple-500 cursor-pointer' />
			</nav>
		</>
	)
}
