import inquirer from "inquirer"
import fs from "fs"

inquirer.prompt([
    {
        type: "input",
        name: "ime",
        message: "Unesi ime učenika"
    },
    {
        type: "number",
        name: "ocjena",
        message: "Unesi ocjenu"
    }
]).then((answers) =>{
    const text = `Ime: ${answers.ime}, Ocjena ${answers.ocjena}\n`

    fs.appendFileSync("ucenici.txt",text);

    console.log("Podaci su spremljeni u datoteku")
})