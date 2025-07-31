import { useState } from 'react';
import {
	Mail,
	MapPin,
	Phone,
	Github,
	Linkedin,
	Twitter,
	Calendar,
	ChevronDown,
	ChevronUp
} from 'lucide-react';

const Hero = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className='w-full md:w-80 bg-transparent md:bg-transparent md:fixed md:top-0 md:left-0 md:h-full flex md:flex-col items-center md:items-stretch p-4 md:p-8 mb-6 md:mb-0'>
			<div className='w-full bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] flex flex-col md:flex-col items-center md:items-stretch p-6 md:p-8'>
				{/* Mobile Layout - Horizontal */}
				<div className='md:hidden w-full flex items-center relative'>
					{/* Avatar */}
					<div className='flex-shrink-0 mr-4'>
						<img
							src='/avatar.png'
							alt='Avatar'
							className='w-16 h-16 rounded-full border-4 border-[#6c63ff]'
						/>
					</div>
					{/* Name and role */}
					<div className='flex-1'>
						<h2 className='text-lg font-bold text-gray-900 mb-1'>
							Richard hanrick
						</h2>
						<div className='text-xs bg-[#22223b] text-white rounded-full px-3 py-1 inline-block'>
							Web developer
						</div>
					</div>
					{/* Expand/Collapse button */}
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className='flex-shrink-0 p-2 text-[#6c63ff] hover:text-pink-400 transition-colors'
					>
						{isExpanded ? (
							<ChevronUp className='w-5 h-5' />
						) : (
							<ChevronDown className='w-5 h-5' />
						)}
					</button>
				</div>

				{/* Desktop Layout - Vertical */}
				<div className='hidden md:block'>
					{/* Avatar */}
					<div className='flex justify-center mb-4'>
						<img
							src='/avatar.png'
							alt='Avatar'
							className='w-20 h-20 rounded-full border-4 border-[#6c63ff]'
						/>
					</div>
					{/* Name and role */}
					<h2 className='text-xl md:text-2xl font-bold text-gray-900 text-center mb-1'>
						Richard hanrick
					</h2>
					<div className='text-xs md:text-sm bg-[#22223b] text-white rounded-full px-3 py-1 text-center mb-4'>
						Web developer
					</div>
				</div>

				{/* Contact info - Hidden by default on mobile, always visible on desktop */}
				<div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
					<hr className='border-[#e0e7ef] my-4' />
					{/* Contact info */}
					<div className='space-y-2 mb-4'>
						<div className='flex items-center gap-2 text-gray-500 text-sm'>
							<Mail className='w-4 h-4 text-[#6c63ff]' /> richard@example.com
						</div>
						<div className='flex items-center gap-2 text-gray-500 text-sm'>
							<Phone className='w-4 h-4 text-[#6c63ff]' /> +1 (213) 352-2795
						</div>
						<div className='flex items-center gap-2 text-gray-500 text-sm'>
							<Calendar className='w-4 h-4 text-[#6c63ff]' /> June 23, 1982
						</div>
						<div className='flex items-center gap-2 text-gray-500 text-sm'>
							<MapPin className='w-4 h-4 text-[#6c63ff]' /> Sacramento,
							California, USA
						</div>
					</div>
					<hr className='border-[#e0e7ef] my-4' />
					{/* Social links */}
					<div className='flex justify-center gap-4 mt-2'>
						<a href='#' className='text-[#6c63ff] hover:text-pink-400 text-2xl'>
							<i className='fab fa-facebook-f'></i>
						</a>
						<a href='#' className='text-[#6c63ff] hover:text-pink-400 text-2xl'>
							<i className='fab fa-twitter'></i>
						</a>
						<a href='#' className='text-[#6c63ff] hover:text-pink-400 text-2xl'>
							<i className='fab fa-instagram'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
