import './App.css'
import { Header } from './components/Header/Header.tsx'
import { MyCard } from './components/MyCard/MyCard.tsx'
import { About } from './components/About/About.tsx'

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col md:flex-row px-6 md:px-64 mt-10 md:mt-20 gap-x-20'>
				<MyCard />
				<section className='flex-1'>
					<About />
				</section>
			</main>
		</>
	)
}

export default App
