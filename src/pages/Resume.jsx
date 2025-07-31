import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
	const experience = [
		{
			title: 'Senior Full Stack Developer',
			company: 'TechCorp Inc.',
			period: '2022 - Present',
			location: 'New York, NY',
			description:
				'Led development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices.',
			technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB']
		},
		{
			title: 'Full Stack Developer',
			company: 'StartupXYZ',
			period: '2020 - 2022',
			location: 'San Francisco, CA',
			description:
				'Built scalable web applications and REST APIs. Collaborated with design team to implement responsive UI/UX.',
			technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Redis']
		},
		{
			title: 'Frontend Developer',
			company: 'Digital Agency',
			period: '2019 - 2020',
			location: 'Los Angeles, CA',
			description:
				'Developed responsive websites and e-commerce platforms. Optimized performance and user experience.',
			technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'Shopify', 'SEO']
		}
	];

	const education = [
		{
			degree: 'Bachelor of Computer Science',
			school: 'University of Technology',
			period: '2015 - 2019',
			location: 'Boston, MA',
			description:
				'Graduated with honors. Specialized in software engineering and web development.'
		},
		{
			degree: 'Web Development Bootcamp',
			school: 'Coding Academy',
			period: '2019',
			location: 'Online',
			description:
				'Intensive 12-week program covering modern web technologies and best practices.'
		}
	];

	return (
		<div className='min-h-screen p-8 lg:p-16 bg-transparent'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='mb-12'>
					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
						Resume
					</h1>
					<div className='w-20 h-1 bg-[#6c63ff]'></div>
				</div>

				{/* Education Section */}
				<div className='mb-16'>
					<div className='flex items-center space-x-3 mb-8'>
						<div className='w-12 h-12 bg-[#6c63ff] rounded-lg flex items-center justify-center'>
							<GraduationCap className='w-6 h-6 text-white' />
						</div>
						<h2 className='text-2xl font-semibold text-gray-900'>Education</h2>
					</div>

					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300'></div>

						<div className='space-y-8'>
							{education.map((edu, index) => (
								<div key={index} className='relative flex items-start'>
									{/* Timeline point */}
									<div className='absolute left-6 w-3 h-3 bg-[#6c63ff] rounded-full -translate-x-1/2'></div>

									{/* Content */}
									<div className='ml-12 flex-1'>
										<h3 className='text-xl font-semibold text-gray-900 mb-1'>
											{edu.degree}
										</h3>
										<p className='text-[#6c63ff] font-medium mb-2'>
											{edu.period}
										</p>
										<div className='flex items-center space-x-2 text-[#6c63ff] mb-3'>
											<GraduationCap className='w-4 h-4' />
											<span className='font-medium'>{edu.school}</span>
											<span>•</span>
											<div className='flex items-center space-x-1'>
												<MapPin className='w-4 h-4' />
												<span>{edu.location}</span>
											</div>
										</div>
										<p className='text-gray-500 leading-relaxed'>
											{edu.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Experience Section */}
				<div>
					<div className='flex items-center space-x-3 mb-8'>
						<div className='w-12 h-12 bg-[#6c63ff] rounded-lg flex items-center justify-center'>
							<Briefcase className='w-6 h-6 text-white' />
						</div>
						<h2 className='text-2xl font-semibold text-gray-900'>Experience</h2>
					</div>

					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300'></div>

						<div className='space-y-8'>
							{experience.map((job, index) => (
								<div key={index} className='relative flex items-start'>
									{/* Timeline point */}
									<div className='absolute left-6 w-3 h-3 bg-[#6c63ff] rounded-full -translate-x-1/2'></div>

									{/* Content */}
									<div className='ml-12 flex-1'>
										<h3 className='text-xl font-semibold text-gray-900 mb-1'>
											{job.title}
										</h3>
										<p className='text-[#6c63ff] font-medium mb-2'>
											{job.period}
										</p>
										<div className='flex items-center space-x-2 text-[#6c63ff] mb-3'>
											<Briefcase className='w-4 h-4' />
											<span className='font-medium'>{job.company}</span>
											<span>•</span>
											<div className='flex items-center space-x-1'>
												<MapPin className='w-4 h-4' />
												<span>{job.location}</span>
											</div>
										</div>
										<p className='text-gray-500 mb-4 leading-relaxed'>
											{job.description}
										</p>
										<div className='flex flex-wrap gap-2'>
											{job.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className='bg-[#e0e7ef] text-[#6c63ff] px-3 py-1 rounded-full text-xs font-medium'
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
