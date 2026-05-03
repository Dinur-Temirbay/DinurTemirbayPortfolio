export function Marquee({ reverse = false, skillsList }) {
	return (
		<div className='overflow-hidden group'>
			<div
				className={`flex w-max gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
			>
				{[...skillsList, ...skillsList].map((skill, index) => {
					const Icon = skill.icon
					return (
						<div key={index} className='bg-gray-800 w-36 rounded-lg py-4 px-8'>
							<Icon
								style={{ color: skill.color }}
								className='text-3xl mx-auto'
							/>
							<p className='text-white text-center mt-2'>{skill.name}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
