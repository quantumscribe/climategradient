import connectDB from '@/lib/mongodb'
import Contact from '@/app/models/contact'
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function POST(req) {
	const { fullname, email, message } = await req.json()

	console.log('Fullname: ', fullname)
	console.log('Email: ', email)
	console.log('Message: ', message)

	try {
		await connectDB()
		await Contact.create({ fullname, email, message })

		return NextResponse.json({
			msg: ['Message sent successfully'],
			success: true,
		})
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			let errorList = []
			for (let e in error.errors) {
				errorList.push(error.errors[e].message)
			}
			console.log(errorList)
			return NextResponse.json({ msg: errorList })
		} else {
			return NextResponse.json({
				msg: ['Unable to submit message. Please try again later.'],
			})
		}
	}
}
