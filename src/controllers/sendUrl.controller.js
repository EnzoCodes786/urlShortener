const generateShortUrl = require('../services/generateUrl')
const pool = require(`../db/db`)
async function sendUrl(req,res) {
    const {longUrl} = req.body

    if(!longUrl){
        res.json("Entered Url is empty")
    }

    const shortUrl = await generateShortUrl()
    const database = await pool.query(`
        INSERT INTO hash_table(long_url,short_url)
        VALUES(?,?)
        `,[longUrl,shortUrl])
    res.json({
        newLink : `http://localhost:5000/api/url/${shortUrl}`,
        short : shortUrl
    })
}
module.exports = {sendUrl}