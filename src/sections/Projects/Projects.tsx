import { projectsInfo } from '@data/projectsInfo.ts'
import { AnimateOnView } from '@ui/Animation/AnimateOnView.tsx'
import { Link } from 'react-router-dom'

export function Projects() {
	return (
		<AnimateOnView delay={0.2}>
			<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
				Recent <b className='text-cyan-600'>Projects</b>
			</h2>
			<div className='mt-8 flex flex-wrap justify-center md:justify-start gap-5'>
				{projectsInfo.map((project, index) => (
					<Link
						key={index}
						to={`/projects/${project.id}`}
						className='w-full md:w-[40%]'
					>
						<div className='rounded-lg bg-gray-800 cursor-pointer text-white overflow-hidden dark:text-black dark:bg-gray-200'>
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
					</Link>
				))}
			</div>
		</AnimateOnView>
	)
}
