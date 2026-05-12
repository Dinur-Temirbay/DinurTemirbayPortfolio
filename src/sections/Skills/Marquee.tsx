import { skillsList as allSkills } from '@data/skillsList'

type Skill = (typeof allSkills)[0]

export function Marquee({
	reverse = false,
	skillsList,
}: {
	reverse?: boolean
	skillsList: Skill[]
}) {
	return (
		<div className='overflow-hidden group'>
			<div
				className={`flex w-max gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
			>
				{[...skillsList, ...skillsList].map((skill, index) => {
					const Icon = skill.icon
					return (
						<div
							key={index}
							className='bg-gray-800 w-36 rounded-lg py-4 px-8 dark:bg-gray-200'
						>
							<Icon
								style={{ color: skill.color }}
								className='text-3xl mx-auto'
							/>
							<p className='text-white text-center mt-2 dark:text-black'>
								{skill.name}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
