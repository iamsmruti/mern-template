import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        unique: true
    },
    profilePic: {
        type: String,
        default: ''
    }
})

export default mongoose.model('User', userSchema)