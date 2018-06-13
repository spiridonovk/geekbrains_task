
var num =process.argv[2];
var base=process.argv[3];
var newBase =process.argv[4];

let dec = parseInt(num, base);
process.stdout.write(dec.toString(newBase));
