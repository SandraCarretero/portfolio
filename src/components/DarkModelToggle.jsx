import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
		setIsDark(isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleDarkMode = () => {
		const newDarkMode = !isDark;
		setIsDark(newDarkMode);
		localStorage.setItem('darkMode', newDarkMode.toString());

		if (newDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	return (
		<button
			onClick={toggleDarkMode}
			className='fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200'
			aria-label='Toggle dark mode'
		>
			{isDark ? (
				<Sun className='w-5 h-5 text-yellow-500' />
			) : (
				<Moon className='w-5 h-5 text-gray-700' />
			)}
		</button>
	);
};
