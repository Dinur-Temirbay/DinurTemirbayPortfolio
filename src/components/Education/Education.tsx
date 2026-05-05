import { AnimateOnView } from '../Animation/AnimateOnView.tsx'
import { educationInfo } from './educationInfo.ts'

export function Education() {
	return (
		<AnimateOnView delay={0.8}>
			<div id='education'>
				<h2 className='text-center md:text-left text-white text-4xl font-bold'>
					Educa
					<b className='text-cyan-600'>tion</b>
				</h2>
				{educationInfo.map((edu, index) => (
					<div
						key={index}
						className='group border bg-gray-800 rounded p-4 mt-6 hover:border-cyan-600 shadow-md hover:shadow-cyan-600/20 transition-colors cursor-pointer'
					>
						<div className='text-gray-500 text-sm leading-6'>
							<span>{edu.duration}</span>
							<p className='group-hover:text-cyan-600 text-white font-bold text-lg'>
								{edu.degree}
							</p>
							<p>{edu.institution}</p>
						</div>
					</div>
				))}
			</div>
		</AnimateOnView>
	)
}
