'use client'

import { useState } from 'react'

export default function ContactForm() {
	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [error, setError] = useState([])
	const [success, setSuccess] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()

		console.log('Fullname: ', fullname)
		console.log('Email: ', email)
		console.log('Message: ', message)

		const res = await fetch('api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullname,
				email,
				message,
			}),
		})
		const { msg, success } = await res.json()
		setError(msg)
		setSuccess(success)

		if (success) {
			setFullname('')
			setEmail('')
			setMessage('')
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='py-4 mt-4 border-t flex-col gap-5'>
				<div>
					<label htmlFor='fullname'>Full Name</label>
					<input
						onChange={(e) => setFullname(e.target.value)}
						value={fullname}
						type='text'
						id='fullname'
						placeholder='John Doe'
					/>
				</div>

				<div>
					<label htmlFor='email'>Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='text'
						id='email'
						placeholder='john@gmail.com'
					/>
				</div>

				<div>
					<label htmlFor='message'>Message</label>
					<textarea
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						className='h-32 text-black'
						id='message'
						placeholder='Your message here...'></textarea>
				</div>

				<button
					className='bg-blue-600 p-3 text-white font-bold mt-8 mx-auto '
					type='submit'>
					Send Message
				</button>
			</form>

			<div className='bg-slate-100 flex flex-col'>
				{error &&
					error.map((e) => (
						<div
							className={`${
								success ? 'text-green-800' : 'text-red-600'
							} px-5 py-2`}>
							{e}
						</div>
					))}
			</div>
		</>
	)
}
