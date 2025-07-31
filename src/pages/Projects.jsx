import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description:
				'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
			image:
				'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=E-Commerce',
			tags: ['React', 'Node.js', 'MongoDB'],
			github: '#',
			live: '#',
			size: 'large'
		},
		{
			id: 2,
			title: 'Task Management App',
			description:
				'Collaborative task manager with real-time updates and drag-and-drop.',
			image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Task+App',
			tags: ['Next.js', 'Socket.io'],
			github: '#',
			live: '#',
			size: 'small'
		},
		{
			id: 3,
			title: 'Weather Dashboard',
			description:
				'Beautiful weather app with location-based forecasts and analytics.',
			image:
				'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Weather+App',
			tags: ['React', 'API'],
			github: '#',
			live: '#',
			size: 'small'
		},
		{
			id: 4,
			title: 'Portfolio Website',
			description:
				'Real-time messaging app with user authentication and file sharing.',
			image: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Portfolio',
			tags: ['React', 'Firebase'],
			github: '#',
			live: '#',
			size: 'large'
		}
	];

	return (
		<div className='min-h-screen p-8 lg:p-16 bg-transparent'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='mb-12'>
					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
						Portfolio
					</h1>
					<div className='w-20 h-1 bg-[#6c63ff] mb-8'></div>
					<p className='text-lg text-gray-500 max-w-3xl'>
						A curated selection of my most impactful projects, showcasing my
						skills and passion for creating meaningful digital experiences.
					</p>
				</div>
				{/* Bento Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr'>
					{/* Top Row */}
					<div className='space-y-6'>
						{/* Large Project - Top Left */}
						<div className='group relative bg-white rounded-2xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'>
							{/* Project Image */}
							<div className='relative overflow-hidden'>
								<img
									src={projects[0].image}
									alt={projects[0].title}
									className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
									<a
										href={projects[0].github}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<Github className='w-5 h-5 text-[#6c63ff]' />
									</a>
									<a
										href={projects[0].live}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<ExternalLink className='w-5 h-5 text-[#6c63ff]' />
									</a>
								</div>
							</div>
							{/* Project Content */}
							<div className='p-6 h-32'>
								<div className='flex items-center justify-between mb-3'>
									<span className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'>
										{projects[0].tags[0]}
									</span>
									<span className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'>
										{projects[0].tags[1]}
									</span>
									<span className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'>
										{projects[0].tags[2]}
									</span>
								</div>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{projects[0].title}
								</h2>
								<p className='text-gray-500 text-sm'>
									{projects[0].description}
								</p>
							</div>
						</div>
						{/* Small Project - Top Right */}
						<div className='group relative bg-white rounded-2xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'>
							{/* Project Image */}
							<div className='relative overflow-hidden'>
								<img
									src={projects[1].image}
									alt={projects[1].title}
									className='w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
									<a
										href={projects[1].github}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<Github className='w-5 h-5 text-[#6c63ff]' />
									</a>
									<a
										href={projects[1].live}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<ExternalLink className='w-5 h-5 text-[#6c63ff]' />
									</a>
								</div>
							</div>
							{/* Project Content */}
							<div className='p-6 h-32'>
								<div className='flex items-center gap-2 mb-3'>
									{projects[1].tags.map((tag, i) => (
										<span
											key={i}
											className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'
										>
											{tag}
										</span>
									))}
								</div>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{projects[1].title}
								</h2>
								<p className='text-gray-500 text-sm'>
									{projects[1].description}
								</p>
							</div>
						</div>
					</div>
					{/* Bottom Row */}
					<div className='space-y-6'>
						{/* Small Project - Bottom Left */}
						<div className='group relative bg-white rounded-2xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'>
							{/* Project Image */}
							<div className='relative overflow-hidden'>
								<img
									src={projects[2].image}
									alt={projects[2].title}
									className='w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
									<a
										href={projects[2].github}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<Github className='w-5 h-5 text-[#6c63ff]' />
									</a>
									<a
										href={projects[2].live}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<ExternalLink className='w-5 h-5 text-[#6c63ff]' />
									</a>
								</div>
							</div>
							{/* Project Content */}
							<div className='p-6 h-32'>
								<div className='flex items-center gap-2 mb-3'>
									{projects[2].tags.map((tag, i) => (
										<span
											key={i}
											className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'
										>
											{tag}
										</span>
									))}
								</div>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{projects[2].title}
								</h2>
								<p className='text-gray-500 text-sm'>
									{projects[2].description}
								</p>
							</div>
						</div>
						{/* Large Project - Bottom Right */}
						<div className='group relative bg-white rounded-2xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'>
							{/* Project Image */}
							<div className='relative overflow-hidden'>
								<img
									src={projects[3].image}
									alt={projects[3].title}
									className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
									<a
										href={projects[3].github}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<Github className='w-5 h-5 text-[#6c63ff]' />
									</a>
									<a
										href={projects[3].live}
										className='p-3 bg-white rounded-full hover:bg-[#e0e7ef] transition-colors'
									>
										<ExternalLink className='w-5 h-5 text-[#6c63ff]' />
									</a>
								</div>
							</div>
							{/* Project Content */}
							<div className='p-6 h-32'>
								<div className='flex items-center gap-2 mb-3'>
									{projects[3].tags.map((tag, i) => (
										<span
											key={i}
											className='text-sm font-medium text-[#6c63ff] bg-[#e0e7ef] px-3 py-1 rounded-full'
										>
											{tag}
										</span>
									))}
								</div>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{projects[3].title}
								</h2>
								<p className='text-gray-500 text-sm'>
									{projects[3].description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
