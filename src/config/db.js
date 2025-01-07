const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("conectado a BD")

    }
    catch(error){
        return console.log("error al conectar la base de datos"), error
    }


}
module.exports=connectDB