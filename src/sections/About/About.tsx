import { AnimateOnView } from '@ui/Animation/AnimateOnView.tsx'

export function About() {
	return (
		<AnimateOnView>
			<h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-bold mt-10 md:mt-0 dark:text-black'>
				Transforming Your
				<br />
				Ideas into <b className='text-cyan-600'>Reality</b>
			</h1>
			<p className='text-white mt-3 text-sm md:text-base text-center md:text-left dark:text-black'>
				I'm a front-end developer who builds user-friendly, modern websites.
				<br />I love learning new things and turning ideas into high-quality
				products.
			</p>
			<div className='mt-10 text-white flex justify-center md:justify-start gap-6 md:gap-10 dark:text-black'>
				<div>
					<span className='text-4xl md:text-6xl font-semibold'>+1.6</span>
					<p className='text-sm mt-1'>
						YEARS OF
						<br />
						EXPERIENCE
					</p>
				</div>
				<div>
					<span className='text-4xl md:text-6xl font-semibold'>+13</span>
					<p className='text-sm mt-1'>
						PET PROJECTS
						<br />
						COMPLETED
					</p>
				</div>
			</div>
		</AnimateOnView>
	)
}
