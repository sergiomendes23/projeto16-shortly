import connection from "../db.js";

function urlData({urlId, url, shortUrl, visitCount}){
    return{id: urlId, shortUrl, url, visitCount};
    console.log("passou")
};

export async function usersMe(req, res){
    try{
        const {userId} = res.locals;
        
        const dataCustomer = await connection.query(`
        SELECT users.id, users.name, url.url, url.id 
        AS "urlId", url."shortUrl", url."visitCount"
        FROM users
        LEFT JOIN url
        ON "userId" = users.id
        WHERE users.id = $1
        GROUP BY users.id, url.url, url.id`, 
        [userId]);

        let visits = 0;
        dataCustomer.rows.forEach(dataCustomer => visits += parseInt(dataCustomer.visitCount));

        const stateCustomer = {
            id: dataCustomer.rows[0].id,
            name: dataCustomer.rows[0].name,
            visitCount: visits ? visits : "0",
            shortenedUrls: dataCustomer.rows[0].urlId ? dataCustomer.rows.map(urlData) : []
        }

        res.send(stateCustomer).status(200);
        
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
};