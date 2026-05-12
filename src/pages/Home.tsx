import { About } from '@sections/About/About.tsx'
import { Education } from '@sections/Education/Education.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Projects } from '@sections/Projects/Projects.tsx'
import { Skills } from '@sections/Skills/Skills.tsx'

export function Home() {
	return (
		<>
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Education />
		</>
	)
}
