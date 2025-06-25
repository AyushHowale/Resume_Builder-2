import jwt from 'jsonwebtoken';





// protected route

export const requiresignin=async(req,res,next)=>{
   try {
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user=decode
    next()
   } catch (error) {
    console.log(error)
    res.status(404).send({
        success:false,
        error
    })
   }

}