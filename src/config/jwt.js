const jwt=require("jsonwebtoken")
//utilizan metodos de la libreria para realizar los requerimiento que necesitamos


const generateSing=(id)=>{
    //creamos una llave , como?
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"})

}
const verifyJwt=(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET)

}

module.exports={generateSing,verifyJwt}