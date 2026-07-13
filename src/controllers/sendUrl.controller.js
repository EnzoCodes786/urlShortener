const generateShortUrl = require("../services/generateUrl");
const pool = require(`../db/db`);
let user_count = 0;
async function sendUrl(req, res) {
  const { longUrl } = req.body;

  if (!longUrl) {
    res.json("Entered Url is empty");
  }
  const [databaseCheck] = await pool.query(
    `
        SELECT * FROM hash_table
        WHERE long_url = (?)
        `,
    [longUrl],
  );
  
  if (!databaseCheck[0]) {
    const shortUrl = await generateShortUrl();
    user_count++;
    const database = await pool.query(
      `
        INSERT INTO hash_table(long_url,short_url)
        VALUES(?,?)
        `,
      [longUrl, shortUrl],
    );
    res.json({
      newLink: `http://localhost:5000/api/urls/${shortUrl}`,
      short: user_count,
    });
  } else {
    preShortUrl = databaseCheck[0].short_url
    res.json({
      newLink: `http://localhost:5000/api/urls/${preShortUrl}`,
      short: preShortUrl,
    });
  }
}
module.exports = { sendUrl };
