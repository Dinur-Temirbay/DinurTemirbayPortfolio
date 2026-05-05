import { Header } from './components/Header/Header.tsx'
import { MyCard } from './components/MyCard/MyCard.tsx'
import { About } from './components/About/About.tsx'
import { Projects } from './components/Projects/Projects.tsx'
import { Skills } from './components/Skills/Skills.tsx'
import { Experience } from './components/Experience/Experience.tsx'
import { Education } from './components/Education/Education.tsx'

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col md:flex-row px-6 md:px-64 mt-10 md:mt-20 md:gap-x-20'>
				<section className='min-w-[25%] md:sticky self-start top-8'>
					<MyCard />
				</section>
				<section className='flex-1 flex flex-col gap-y-10 mb-8 overflow-hidden'>
					<About />
					<Projects />
					<Skills />
					<Experience />
					<Education />
				</section>
			</main>
		</>
	)
}

export default App
