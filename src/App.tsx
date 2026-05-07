import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Header } from './components/Header/Header.tsx'
import { MyCard } from './components/MyCard/MyCard.tsx'
import { About } from './components/About/About.tsx'
import { Projects } from './components/Projects/Projects.tsx'
import { Skills } from './components/Skills/Skills.tsx'
import { Experience } from './components/Experience/Experience.tsx'
import { Education } from './components/Education/Education.tsx'
import { Contact } from './components/Contact/Contact.tsx'

function App() {
	const { pathname } = useLocation()
	const isHome = pathname === '/'

	return (
		<>
			<Header />
			<main className='flex flex-col md:flex-row px-6 md:px-64 mt-10 md:mt-20 md:gap-x-20'>
				<section
					className={`min-w-[25%] md:sticky self-start top-8 ${!isHome ? 'hidden md:block' : ''}`}
				>
					<MyCard />
				</section>
				<section className='flex-1 flex flex-col gap-y-10 mb-8 overflow-hidden'>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<About /> <Projects /> <Skills /> <Experience /> <Education />
								</>
							}
						/>
						<Route path='/projects' element={<Projects />} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/experience' element={<Experience />} />
						<Route path='/education' element={<Education />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</section>
			</main>
		</>
	)
}

export default App
