const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String, 
    first_name:String,
    last_name: String,
    email: String,
    last_login: Date,
})

mongoose.model('users', userSchema)
