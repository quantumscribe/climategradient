import mongoose from 'mongoose'

const connectDB = async () => {

	try {
		if (mongoose.connection.readyState == 0) {
			await mongoose.connect(process.env.MONGODB_URL)
			console.log('MongoDB Connected')
		}
	} catch (error) {
		console.log(error)
	}
}

export default connectDB