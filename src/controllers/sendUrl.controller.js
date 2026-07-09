const generateShortUrl = require('../services/generateUrl')
async function sendUrl(req,res) {
    const {longUrl} = req.body

    if(!longUrl){
        res.json("Entered Url is empty")
    }
    const shortUrl = await generateShortUrl()
    res.json({
        newLink : `http://localhost:5000/api/url/${shortUrl}`,
        short : shortUrl
    })
}
module.exports = {sendUrl}