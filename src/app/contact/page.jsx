import ContactForm from '@/components/contactform/ContactForm'


const contactpage = () => {
	return (
		// <div className='flex flex-col items-center justify-center gap-y-12'>
		// 	<div className='mt-12 text-3xl text-gray-400'>Coming Soon.....</div>
		// 	<div className='al'>
		// 		<Image src='/nodding-yes.gif' width={300} height={300} />
		// 	</div>
		// 	<div className='al'>
		// 		<Image src='/honest-work-meme.jpg' width={300} height={300} />
		// 	</div>
		// </div>
		<div className='p-4 max-w-3xl mx-auto'>

			<h1 className='text-3xl font-bold'>Contact Us</h1>
			<p>Please fill in the form below</p>

			<ContactForm />
		</div>
	)
}

export default contactpage
