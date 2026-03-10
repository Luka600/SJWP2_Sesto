import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req,res) => {
    res.sendFile(_dirname + "/public/index.html")
});

app.post("/login", (req,res) =>{
    console.log(req.body)
});

app.listen(port, "127.0.0.1", () =>{
    console.log(`Listening to port ${port}`)
})