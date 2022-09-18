const minimist = require("minimist");
const readline=require("readline");
const linedetail=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
linedetail.question('please provide name-',(na)=>{
    console.log('hi',na);
    linedetail.close();
});
//const args=require("minimist")(process.argv.slice(2));
let args=minimist(process.argv.slice(2),{
    alias:{
        n:"name",
        a:"age",
    },
});
console.log(args);