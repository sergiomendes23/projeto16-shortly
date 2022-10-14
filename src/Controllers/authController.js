import connection from "../db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res){
    try{
        const {name, email, password} = req.body;

        const dataUser = await connection.query(`SELECT * FROM users WHERE email = $1`, [
            email
        ]);
        
        if(dataUser.rows.length !== 0){
            return res.sendStatus(409);
        }
        
        const hashPass = bcrypt.hashSync(password, 10);

        const user = await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,[
            name,
            email,
            hashPass
        ]);

        res.sendStatus(201);
    }catch(error){
        console.log(error)
        return res.sendStatus(500);
    }
}