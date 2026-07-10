const pool = require("../db/db");

async function redirectLink(req, res) {
  const userUrl = req.params.shortUrl;
  const [rows] = await pool.query(
    `
        SELECT * FROM hash_table 
        WHERE short_url = (?)
        `,
    [userUrl]
  );
  if (rows.length === 0) {
    res.status(404).json({
      message: "Short URL not found",
    });
  }

  const longUrl = rows[0].long_url;
  
  res.redirect(longUrl);
}

module.exports = { redirectLink };
