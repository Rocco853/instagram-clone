import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  profilePicture: {
    type: String,
    default: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg", // Default profile picture URL
  },
  bio: {
    type: String,
  },
  followers: {
    type: Number,
    default: 0,
  },
  following: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);

