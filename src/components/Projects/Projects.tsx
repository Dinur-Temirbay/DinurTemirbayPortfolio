import { projectsInfo } from './projectsInfo.ts'

export function Projects() {
	return (
		<div id='#projects'>
			<h2 className='text-center md:text-left text-white text-4xl font-bold'>
				Recent <b className='text-cyan-600'>Projects</b>
			</h2>
			<div className='mt-8 flex flex-wrap justify-center md:justify-start gap-5'>
				{projectsInfo.map((project, index) => (
					<div
						key={index}
						className='w-full md:w-[40%] rounded-lg bg-gray-800 cursor-pointer text-white overflow-hidden'
					>
						<img
							src={project.img}
							alt={project.title}
							className='w-full h-48 object-cover transition duration-300 hover:scale-105'
						/>
						<div className='p-4'>
							<p className='text-left text-xl font-bold mt-2'>
								{project.title}
							</p>
							<p className='text-left text-sm mt-2'>{project.shortDescr}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
