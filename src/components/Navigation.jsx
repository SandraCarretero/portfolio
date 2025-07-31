import { useState } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: 'about', label: 'About', icon: '👤' },
		{ id: 'resume', label: 'Resume', icon: '📄' },
		{ id: 'projects', label: 'Portfolio', icon: '💼' },
		{ id: 'contact', label: 'Contact', icon: '📧' }
	];

	return (
		<>
			{/* Desktop Navigation */}
			<nav className='hidden md:flex fixed top-8 right-8 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg px-6 py-3'>
				<ul className='flex space-x-6'>
					{menuItems.map(item => (
						<li key={item.id}>
							<button
								onClick={() => setActiveSection(item.id)}
								className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
									activeSection === item.id
										? 'bg-[#6c63ff] text-white'
										: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
								}`}
							>
								<span className='text-lg'>{item.icon}</span>
								<span className='font-medium'>{item.label}</span>
							</button>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Navigation - fixed bottom bar */}
			<nav className='md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#22223b] border-t border-[#33354a] flex justify-between px-2 py-1'>
				{menuItems.map(item => (
					<button
						key={item.id}
						onClick={() => setActiveSection(item.id)}
						className={`flex flex-col items-center flex-1 py-2 transition-all duration-200 ${
							activeSection === item.id
								? 'text-[#ffd600]'
								: 'text-gray-300 hover:text-[#ffd600]'
						}`}
					>
						<span className='text-2xl'>{item.icon}</span>
						<span className='text-xs mt-1'>{item.label}</span>
					</button>
				))}
			</nav>
		</>
	);
};

export default Navigation;
