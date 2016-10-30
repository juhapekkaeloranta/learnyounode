
var sum = 0;
var i = 2;
while (process.argv[i] != null) {
    sum = sum + Number(process.argv[i]);
    i = i + 1;
}
console.log(sum)
