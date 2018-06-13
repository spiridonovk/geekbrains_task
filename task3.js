var x =process.argv[2];
var y=process.argv[3];


console.log(gcd(x,y));


function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

