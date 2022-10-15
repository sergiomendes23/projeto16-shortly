import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

function validateToken(req, res, next){
    const {authorization} = req.headers;

    try{
        const token = authorization.replace("Bearer ", "");
        const verifyToken = jwt.verify(token, process.env.SECRETKEY_JWT);

        const userId = verifyToken.userId
        res.locals.userId = userId

        next()

    }catch(error){
        console.log(error)
        res.sendStatus(401);
    }
}

export default validateToken;