import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js' 

const connectDB = async () => {
    try {
        await mongoose
            .connect(`${process.env.MONGO_URL}/${DB_NAME}`)
            .then(() => {
                console.log('Connected to Database')
            })
            .catch((err) => {
                console.log('Error connecting to Database:', err)
            })
    } catch (err) {
        console.log('Error connecting to Database:', err)
        process.exit(1)
    }
}

export default connectDB
