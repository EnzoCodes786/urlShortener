const generateShortUrl = require('../services/generateUrl')
const pool = require(`../db/db`)
async function sendUrl(req,res) {
    const {longUrl} = req.body

    if(!longUrl){
        res.json("Entered Url is empty")
    }
    const [databaseCheck] = await pool.query(`
        SELECT * FROM hash_table
        WHERE long_url = (?)
        `,[longUrl])
    const preShortUrl = databaseCheck[0].short_url
  
    if(!preShortUrl){
    const shortUrl = await generateShortUrl()
    const database = await pool.query(`
        INSERT INTO hash_table(long_url,short_url)
        VALUES(?,?)
        `,[longUrl,shortUrl])
    res.json({
        newLink :`http://localhost:5000/api/urls/${shortUrl}`,
        short : shortUrl
    })
}
    else{
         res.json({
        newLink :`http://localhost:5000/api/urls/${preShortUrl}`,
        short : preShortUrl
    })
    }

}
module.exports = {sendUrl}