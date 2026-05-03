import { Marquee } from './Marquee.tsx'
import { skillsRow1, skillsRow2 } from './skillsList.ts'

export function Skills() {
	return (
		<div id='#skills'>
			<h2 className='text-center md:text-left text-white text-4xl font-bold'>
				Ski
				<b className='text-cyan-600'>lls</b>
			</h2>
			<div className='mt-8 overflow-hidden flex flex-col gap-5'>
				<Marquee skillsList={skillsRow1} />
				<Marquee skillsList={skillsRow2} reverse />
			</div>
		</div>
	)
}
