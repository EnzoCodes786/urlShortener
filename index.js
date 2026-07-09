const app = require("./src/app");
require('@dotenvx/dotenvx').config()
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running : http://localhost:${PORT}`);
});