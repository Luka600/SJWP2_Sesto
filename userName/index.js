import inquirer from "inquirer"
import fs from "fs"

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Unesi ime:"
    },
    {
        type: "input",
        name: "prezime",
        message: "Unesi prezime:"
    }
]).then((answers) =>{
    const ime = answers.name.toLowerCase();
    const prezime = answers.prezime.toUpperCase();
    const text = ime + prezime;

    fs.appendFileSync("users.txt",text);

    console.log("Podaci su spremljeni u datoteku")
})