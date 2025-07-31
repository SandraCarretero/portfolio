import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Hero from './pages/Hero';
import Navigation from './components/Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
	const [activeSection, setActiveSection] = useState('about');

	const renderContent = () => {
		switch (activeSection) {
			case 'about':
				return <About />;
			case 'resume':
				return <Resume />;
			case 'projects':
				return <Projects />;
			case 'contact':
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div className='flex flex-col md:flex-row min-h-screen bg-[#f8fafc] dark:bg-gray-900'>
			<GlobalStyles />

			{/* Hero Sidebar */}
			<Hero />

			{/* Navigation */}
			<Navigation
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>

			{/* Main Content */}
			<main className='flex-1 w-full md:ml-80 overflow-y-auto bg-transparent'>
				{renderContent()}
			</main>
		</div>
	);
};

export default App;
