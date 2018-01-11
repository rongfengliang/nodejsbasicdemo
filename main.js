const user = require("./user.js");
const appuser = new user();
appuser.on("login",function(data){
    console.log("get from event ")
    console.log(JSON.stringify(data));
})
appuser.emit("login",{name:"dalong",age:33});
appuser.login("dalongdddd","demodalong")

appuser.audio(10);