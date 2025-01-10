const mongoose = require("mongoose");
const bcrypt=require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },  
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    role: { type: String, enum: ['admin', 'therapist'], required: true }, 
}, { timestamps: true }

);


userSchema.pre("save",function(next){
  this.password=bcrypt.hashSync(this.password,2)
  next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;
