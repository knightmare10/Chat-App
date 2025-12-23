

//Middleware to protect routes
export const protectRoute = async (req,resizeBy,nect)=>{
    try{
         const token=req.headers.token;

        
         const decoded= jwt.verify(token, process.env.JWT_SECRECT)

         const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.json({sucess: false, message: "User not found"});

        req.user=user;
        next();
    } catch(error){
        console.log(error.message);
        res.json({sucess: false,message: error.message});

    }  
    
}
