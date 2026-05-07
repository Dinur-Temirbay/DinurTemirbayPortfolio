export function ContactForm() {
	return (
		<form className='mt-8 space-y-5 bg-gray-800 p-7 rounded-lg'>
			<div>
				<label
					htmlFor='name'
					className='block text-white text-sm font-medium mb-2'
				>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					required
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600'
					placeholder='Your name'
				/>
			</div>
			<div>
				<label
					htmlFor='email'
					className='block text-white text-sm font-medium mb-2'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					required
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600'
					placeholder='your@email.com'
				/>
			</div>
			<div>
				<label
					htmlFor='message'
					className='block text-white text-sm font-medium mb-2'
				>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					required
					rows={5}
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600'
					placeholder='Your message'
				/>
			</div>
			<button
				type='submit'
				className='w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
			>
				Send
			</button>
		</form>
	)
}
