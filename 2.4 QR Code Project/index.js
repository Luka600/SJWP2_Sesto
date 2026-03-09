/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { image } from "qr-image";
var qr_svg = qr.image('');


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer
    .prompt([
        {
            message: "Unesi URL:",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("URL.txt",url, (err) => {
            if(err) throw err;
            console.log("Datoteka je sacuvana");
        })
    })
    .catch((error) => {
        if(error.isTtyError){
            //Prompt couldn't be rendered in current evironment
        }else{
            //Something else is wrong
        }

    });