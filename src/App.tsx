import { Routes, Route } from 'react-router-dom'
import { Projects } from '@sections/Projects/Projects.tsx'
import { Skills } from '@sections/Skills/Skills.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Education } from '@sections/Education/Education.tsx'
import { Contact } from '@sections/Contact/Contact.tsx'
import { Layout } from '@layout/Layout.tsx'
import { Home } from '@pages/Home.tsx'
import { ProjectDetail } from '@pages/ProjectDetail.tsx'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/projects/:id' element={<ProjectDetail />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/education' element={<Education />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Routes>
	)
}

export default App
