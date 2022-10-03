const user = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, I'm ${user.name} from ${user.campus}`,
    e: "oO",
    T: "U "
}));

