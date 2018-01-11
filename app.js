console.log(__dirname,__filename);
const fs = require("fs");
fs.readFile("./app.txt",(er,buf)=>{
    if(er){
        console.log("is wrong");
    }
    else{
        let result =buf.toString("base64");
        console.log(new Buffer(result,"base64").toString());
        console.log(result);
    }
})