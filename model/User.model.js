import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide Password"],
        unique: false,
    },

    hash_password :{
        type: String,
        required: [true, "Please provide Password"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide Email"],
        unique: true,
    },
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type: Number},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    profile: {type: Number},

    // firstName,
    // lastName,
    // email,
    // hash_password,
    // username: shortid.generate(),
    // role,

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin',
    }

})


export default mongoose.model.Users || mongoose.model('User', UserSchema);
