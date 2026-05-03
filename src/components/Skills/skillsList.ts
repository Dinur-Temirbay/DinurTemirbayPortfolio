import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaGitAlt,
	FaSass,
	FaBootstrap,
	FaFigma,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript, SiTailwindcss, SiPostman } from 'react-icons/si'

export const skillsList = [
	{ name: 'Html', icon: FaHtml5, color: 'orange' },
	{ name: 'Css', icon: FaCss3Alt, color: 'blue' },
	{ name: 'JavaScript', icon: IoLogoJavascript, color: 'yellow' },
	{ name: 'React', icon: FaReact, color: 'cyan' },
	{ name: 'TypeScript', icon: SiTypescript, color: 'blue' },
	{ name: 'Tailwind', icon: SiTailwindcss, color: 'cyan' },
	{ name: 'Git', icon: FaGitAlt, color: 'orange' },
	{ name: 'Sass', icon: FaSass, color: 'pink' },
	{ name: 'Bootstrap', icon: FaBootstrap, color: 'purple' },
	{ name: 'Figma', icon: FaFigma, color: 'red' },
	{ name: 'Postman', icon: SiPostman, color: 'orange' },
]

export const skillsRow1 = skillsList.slice(0, 5)
export const skillsRow2 = skillsList.slice(5)
