const mongoose = require("mongoose");
const bcrypt=require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['administrador', 'medico'], 
      required: true,
    },
  },
  { timestamps: true,
    collection:"users"
   }
);


userSchema.pre("save",function(next){
  this.password=bcrypt.hashSync(this.password,4)
  next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;
