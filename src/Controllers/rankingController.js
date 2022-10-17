import connection from "../db.js";

export async function ranking(req, res){
    try{
        const ranking = await connection.query(`
        SELECT users.id, users.name, 
        COUNT ("url") AS "linksCount",
        SUM ("visitCount") AS "visitCount"
        FROM users 
        LEFT JOIN url
        ON url."userId" = users.id
        GROUP BY users.id
        ORDER BY "visitCount" DESC LIMIT 10
        `);

        const tenUsers = ranking.rows.map(dataCustomer => dataCustomer.visitCount ? dataCustomer : {...dataCustomer, visitCount: "0"});

        const tenOrdened = [...tenUsers].sort((a, b) => b.visitCount - a.visitCount);

        res.send(tenOrdened).status(200);

    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
}