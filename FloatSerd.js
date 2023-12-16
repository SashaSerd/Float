function toFloat(n) {
  absn = Math.abs(n);
  degr = Math.floor(Math.log2(absn));
  mantiss = absn / Math.pow(2, degr) - 1;
  degr += 127;
  sign = n < 0 ? '1' : '0';
  return sign + ' ' + degr.toString(2).padStart(8, '0') + ' ' + mantiss.toString(2).substring(2).padEnd(23, '0');
}
let n = '112'; //let n = parseFloat(process.argv[2]); чтобы ввести любое число с консоли
let floatb = toFloat(n);
if (!isNaN(n)){
	console.log("Result:");
	console.log(floatb);
}  
else console.log("Error, mistake int");