import './App.css'
import { Header } from './components/Header/Header.tsx'
import { MyCard } from './components/MyCard/MyCard.tsx'
import { About } from './components/About/About.tsx'
import { Projects } from './components/Projects/Projects.tsx'

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col md:flex-row px-6 md:px-64 mt-10 md:mt-20 md:gap-x-40'>
				<section className='min-w-[25%]'>
					<MyCard />
				</section>
				<section className='flex-1 flex flex-col gap-y-10'>
					<About />
					<Projects />
				</section>
			</main>
		</>
	)
}

export default App
