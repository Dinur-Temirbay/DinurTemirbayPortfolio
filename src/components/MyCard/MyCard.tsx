import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function MyCard() {
	return (
		<section>
			<div className='bg-gray-800 rounded-lg p-8 text-center '>
				<img
					src='me.jpg'
					alt='Profile Picture'
					className='w-40 md:w-60 rounded-md mx-auto'
				/>
				<h1 className='mt-5 text-2xl md:text-4xl font-bold text-white'>
					Dinur Temirbay
				</h1>
				<p className='text-white text-sm md:text-base mt-2'>
					Frontend Developer | Qazaqstan, Almaty
				</p>
				<div className='mt-5 flex justify-center gap-5'>
					<a href='https://github.com/Dinur-Temirbay'>
						<FaGithub className='text-2xl text-white cursor-pointer transition duration-300 hover:scale-110' />
					</a>
					<a href='https://www.linkedin.com/in/dinur-temirbay-295662274/'>
						<FaLinkedin className='text-2xl text-white cursor-pointer transition duration-300 hover:scale-110' />
					</a>
				</div>

				<button className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-10'>
					Contact Me
				</button>
			</div>
		</section>
	)
}
