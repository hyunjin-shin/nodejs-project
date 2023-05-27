const app = require("../app");

const HTTP_PORT = process.env.PORT || 3000;

app.listen(HTTP_PORT, (req, res)=>{
    console.log("Server on");
})
