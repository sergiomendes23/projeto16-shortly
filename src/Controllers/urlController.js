import connection from "../db.js";
import  {  nanoid  } from "nanoid";

export async function shortenUrl(req, res){
    try{
        const {url} = req.body;
        const userId = res.locals.userId;

        const urlExist = await connection.query(`SELECT * FROM URL WHERE url = $1`, [url]);

        if(urlExist.rows.length !== 0){
            return res.sendStatus(409)
        }
        
        const shortUrl = nanoid();
        
        await connection.query(`INSERT INTO url (url, "userId", "shortUrl") VALUES ($1, $2, $3)`, [url, userId, shortUrl]);
        
        res.send({shortUrl}).status(201);
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};

export async function getUrl(req, res){
    try{
        const {id} = req.params;

        const urlId = await connection.query(`SELECT id, "shortUrl", url FROM url WHERE id = $1`, [id]);

        if(urlId.rows.length === 0){
            return res.sendStatus(404)
        }

        res.status(200).send(urlId.rows);

    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
}