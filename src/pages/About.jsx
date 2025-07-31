import {
	Code,
	Palette,
	Smartphone,
	Globe,
	Download,
	Calendar,
	MapPin,
	Mail,
	Phone
} from 'lucide-react';

const About = () => {
	const skills = [
		{ name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
		{ name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
		{ name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
		{ name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-700' },
		{ name: 'UI/UX Design', level: 70, color: 'from-purple-500 to-purple-600' },
		{
			name: 'Mobile Development',
			level: 65,
			color: 'from-pink-500 to-pink-600'
		},
		{ name: 'DevOps', level: 60, color: 'from-indigo-500 to-indigo-600' }
	];

	const stats = [
		{ number: '50+', label: 'Projects Completed', icon: '🚀' },
		{ number: '5+', label: 'Years Experience', icon: '⏰' },
		{ number: '30+', label: 'Happy Clients', icon: '😊' },
		{ number: '100%', label: 'Client Satisfaction', icon: '⭐' }
	];

	return (
		<div className='min-h-screen p-8 lg:p-16 bg-transparent'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='mb-12'>
					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
						About
					</h1>
					<div className='w-20 h-1 bg-[#6c63ff] rounded-full'></div>
				</div>

				{/* Hero Section */}
				<div className='mb-16'>
					<div className='text-center mb-12'>
						<h2 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight'>
							Hello, I'm{' '}
							<span className='bg-gradient-to-r from-[#6c63ff] to-pink-400 bg-clip-text text-transparent'>
								John Doe
							</span>
						</h2>
						<p className='text-xl lg:text-2xl text-gray-500 max-w-5xl mx-auto leading-relaxed font-light'>
							A passionate full-stack developer with 5+ years of experience
							creating beautiful, functional, and user-centered digital
							experiences that make a difference.
						</p>
					</div>
					{/* Stats Grid */}
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className='text-center p-8 bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
							>
								<div className='text-4xl mb-3'>{stat.icon}</div>
								<div className='text-3xl lg:text-4xl font-bold text-[#6c63ff] mb-2'>
									{stat.number}
								</div>
								<div className='text-gray-500 font-medium'>{stat.label}</div>
							</div>
						))}
					</div>
					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
						<button className='px-10 py-5 bg-gradient-to-r from-[#6c63ff] to-pink-400 text-white rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3 group'>
							<Download className='w-6 h-6 text-white group-hover:animate-bounce' />
							<span>Download CV</span>
						</button>
						<button className='px-10 py-5 border-2 border-[#6c63ff] text-[#6c63ff] rounded-2xl font-semibold text-lg hover:bg-[#6c63ff] hover:text-white transition-all duration-300 shadow-md'>
							View Portfolio
						</button>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className='grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20'>
					{/* Left Column - Story */}
					<div className='space-y-8'>
						<h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-8'>
							My Story
						</h3>
						<div className='space-y-6 text-gray-500 leading-relaxed text-lg'>
							<p className='text-lg'>
								I'm a passionate full-stack developer with over 5 years of
								experience in creating digital solutions that make a difference.
								My journey in technology began when I built my first website at
								15, and since then, I've been constantly learning and evolving.
							</p>
							<p>
								I specialize in modern web technologies like React, Node.js, and
								TypeScript, but I'm always eager to explore new tools and
								frameworks. I believe in writing clean, maintainable code and
								creating user experiences that are both beautiful and
								functional.
							</p>
							<p>
								When I'm not coding, you'll find me exploring new technologies,
								contribuyendo a open-source o compartiendo conocimiento con la
								comunidad. Siempre busco nuevos retos y oportunidades para
								crecer.
							</p>
						</div>
						{/* Personal Info */}
						<div className='bg-white rounded-3xl p-8 shadow-[0_4px_32px_0_rgba(60,72,88,0.08)]'>
							<h4 className='text-xl font-bold text-gray-900 mb-6'>
								Personal Information
							</h4>
							<div className='space-y-4'>
								<div className='flex items-center space-x-4'>
									<Calendar className='w-5 h-5 text-[#6c63ff]' />
									<span className='text-gray-500'>Born: January 15, 1995</span>
								</div>
								<div className='flex items-center space-x-4'>
									<MapPin className='w-5 h-5 text-[#6c63ff]' />
									<span className='text-gray-500'>Location: New York, NY</span>
								</div>
								<div className='flex items-center space-x-4'>
									<Mail className='w-5 h-5 text-[#6c63ff]' />
									<span className='text-gray-500'>john.doe@email.com</span>
								</div>
								<div className='flex items-center space-x-4'>
									<Phone className='w-5 h-5 text-[#6c63ff]' />
									<span className='text-gray-500'>+1 (555) 123-4567</span>
								</div>
							</div>
						</div>
					</div>
					{/* Right Column - Skills */}
					<div className='space-y-8'>
						<h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-8'>
							My Skills
						</h3>
						<div className='space-y-8'>
							{skills.map((skill, index) => (
								<div key={index} className='space-y-3'>
									<div className='flex items-center justify-between'>
										<span className='font-semibold text-gray-900 text-lg'>
											{skill.name}
										</span>
										<span className='text-lg text-gray-500 font-medium'>
											{skill.level}%
										</span>
									</div>
									<div className='w-full bg-[#e0e7ef] rounded-full h-4 overflow-hidden'>
										<div
											className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1500 ease-out shadow-md`}
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* Personality Cards */}
				<div className='mb-16'>
					<h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center'>
						What I Bring to the Table
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center p-10 bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
							<div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
								🎯
							</div>
							<h4 className='text-xl font-bold text-gray-900 mb-4'>
								Problem Solver
							</h4>
							<p className='text-gray-500 text-lg leading-relaxed'>
								I love tackling complex challenges and finding elegant,
								efficient solutions that exceed expectations.
							</p>
						</div>
						<div className='text-center p-10 bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
							<div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
								🚀
							</div>
							<h4 className='text-xl font-bold text-gray-900 mb-4'>
								Fast Learner
							</h4>
							<p className='text-gray-500 text-lg leading-relaxed'>
								Always eager to learn new technologies and stay up-to-date with
								the latest industry trends and best practices.
							</p>
						</div>
						<div className='text-center p-10 bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
							<div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
								🤝
							</div>
							<h4 className='text-xl font-bold text-gray-900 mb-4'>
								Team Player
							</h4>
							<p className='text-gray-500 text-lg leading-relaxed'>
								Great at collaborating and communicating with team members,
								clients, and stakeholders to deliver exceptional results.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
