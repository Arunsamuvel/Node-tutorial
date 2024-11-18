const os = require("os");
// info about current user
const user = os.userInfo();
console.log(user);

// methods returns the system uptime in seconds 

console.log(`the system running uptime is ${os.uptime()} seconds`);

// current os deatils
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentOS);
