import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
                  .then(()=>{
                    console.log("Connected to Mongodb");
                  })
                  .catch((err) => {
                    console.log(err);
                  })
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;