const eventEmitter = require("events").EventEmitter;
const util = require("util");
const baudio = require("baudio");
function user(){
  this.name="dalong"
  this.n =0;
  eventEmitter.call(this);
}
user.prototype.login =function(name,password){
    console.log(name,password);
    this.emit("login",{name,password})
}
user.prototype.audio=function(x){
  var self = this;
  const baudio = require("baudio");
  console.log(this.n);
  var b = baudio(function(t){
    var x =Math.sin(t*262+Math.sin(self.n));
    self.n+=Math.sin(t);
    return x;
  });
  b.play();
}
util.inherits(user,eventEmitter);
module.exports=user;