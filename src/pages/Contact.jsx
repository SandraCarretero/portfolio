import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
	return (
		<div className='min-h-screen p-8 lg:p-16 bg-transparent'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='mb-12'>
					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
						Get In Touch
					</h1>
					<div className='w-20 h-1 bg-[#6c63ff]'></div>
				</div>
				{/* Contact Info */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					<div className='bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] p-8 flex flex-col items-start'>
						<h2 className='text-2xl font-bold text-gray-900 mb-4'>
							Contact Information
						</h2>
						<div className='space-y-4'>
							<div className='flex items-center space-x-4'>
								<Mail className='w-5 h-5 text-[#6c63ff]' />
								<span className='text-gray-500'>john.doe@email.com</span>
							</div>
							<div className='flex items-center space-x-4'>
								<Phone className='w-5 h-5 text-[#6c63ff]' />
								<span className='text-gray-500'>+1 (555) 123-4567</span>
							</div>
							<div className='flex items-center space-x-4'>
								<MapPin className='w-5 h-5 text-[#6c63ff]' />
								<span className='text-gray-500'>New York, NY</span>
							</div>
						</div>
					</div>
					<div className='bg-white rounded-3xl shadow-[0_4px_32px_0_rgba(60,72,88,0.08)] p-8'>
						<h2 className='text-2xl font-bold text-gray-900 mb-4'>
							Send a Message
						</h2>
						<form className='space-y-6'>
							<div>
								<label className='block text-gray-700 mb-2'>Name</label>
								<input
									type='text'
									className='w-full px-4 py-3 rounded-xl border border-[#e0e7ef] focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff] outline-none bg-[#f8fafc] text-gray-900'
								/>
							</div>
							<div>
								<label className='block text-gray-700 mb-2'>Email</label>
								<input
									type='email'
									className='w-full px-4 py-3 rounded-xl border border-[#e0e7ef] focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff] outline-none bg-[#f8fafc] text-gray-900'
								/>
							</div>
							<div>
								<label className='block text-gray-700 mb-2'>Message</label>
								<textarea
									rows='5'
									className='w-full px-4 py-3 rounded-xl border border-[#e0e7ef] focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff] outline-none bg-[#f8fafc] text-gray-900'
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full py-3 bg-gradient-to-r from-[#6c63ff] to-pink-400 text-white rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300'
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
