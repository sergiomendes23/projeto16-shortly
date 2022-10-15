import connection from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function signUp(req, res){
    try{
        const {name, email, password} = req.body;

        const customer = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);
        
        if(customer.rows.length !== 0){
            return res.sendStatus(401);
        }
        
        const hashPass = bcrypt.hashSync(password, 10);

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,[
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

export async function signIn(req, res){
    try{
        const {email, password} = req.body;

        const customer = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);

        if(customer.rows.length === 0){
            return res.sendStatus(401);
        }

        const validPass = bcrypt.compareSync(password, customer.rows[0].password);

        if(!validPass)return res.sendStatus(401);

        const secretKey = process.env.SECRETKEY_JWT;
        const config = {expiresIn: 60 * 60}

        const token = jwt.sign({userId: customer.rows[0].id}, secretKey, config);

        res.send({token}).status(201);
    }catch(error){
        console.log(error)
        return res.sendStatus(500);
    }
}