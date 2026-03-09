import inquirer from "inquirer"
import fs from "fs"

inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Unesi prvi broj:"
    },
    {
        type: "number",
        name: "num2",
        message: "Unesi drugi broj:"
    }
]).then((answers) =>{
    const text = `Površina: ${answers.num1 * answers.num2}\n`

    fs.appendFileSync("povrsina.txt",text);

    console.log("Podaci su spremljeni u datoteku")
})