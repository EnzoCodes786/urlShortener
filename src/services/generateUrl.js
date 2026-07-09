
async function generateShortUrl() {
    let url = ""
    const elements = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<6;i++){
        url +=elements.charAt(Math.floor(Math.random()*elements.length)) 
    }
    console.log(url)
    return url
}

module.exports = generateShortUrl