const args = process.argv.slice(2);

const num = Number(args[0]);

if(!isNaN(num))
{console.log(`This is a Number: ${num}`)}
else {
    console.log("Not a Number");
}