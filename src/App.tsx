import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Projects } from '@sections/Projects/Projects.tsx'
import { Skills } from '@sections/Skills/Skills.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Education } from '@sections/Education/Education.tsx'
import { Contact } from '@sections/Contact/Contact.tsx'

import { Home } from '@pages/Home.tsx'
import { ProjectDetail } from '@pages/ProjectDetail.tsx'

import { Header } from '@layout/Header/Header.tsx'
import { Sidebar } from '@layout/Sidebar/Sidebar.tsx'

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
					<Sidebar />
				</section>
				<section className='flex-1 flex flex-col gap-y-10 mb-8 overflow-hidden'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/projects/:id' element={<ProjectDetail />} />
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
