// i two nums
// o one num
// c base case should be if length is less than 10
//   either BigInt or multiply by 10
// e 

// create helper merge func
// add first two quarters
//   divide total by two times the total
// call passed in fun on all four combos
//   ac, bd, ad, bc
// return result of 10 times total to the nth * ac + 10 times total to half * ad+bc + bd

// find length of both nums
// construct left and right substrs for both nums
// break substrings into quarters
// call helper with four quarters, passing main func recursively

const karatsuba = (num1, num2) => {
    if (BigInt(num1) < 10n && BigInt(num2) < 10n) {
      return BigInt(num1) * BigInt(num2);
    }
  
    const num1Half = Math.floor(num1.length / 2);
    const num2Half = Math.floor(num2.length / 2);
  
    let q1 = String(num1).slice(0, num1Half);
    let q2 = String(num1).slice(num1Half);
    let q3 = String(num2).slice(0, num2Half);
    let q4 = String(num2).slice(num2Half);
  
    return merge(q1, q2, q3, q4, karatsuba);
  }
  
  const merge = (a, b, c, d, func) => {
    const n = BigInt(a.length + b.length);
    const half = n / 2n;
  
    let ac = func(a, c);
    let bd = func(b, d);
    let ad = func(a, d);
    let bc = func(b, c);
  
    return 10n ** n * ac
      + 10n ** half * (ad + bc)
      + bd;
  }
  
  
//   const x = '3141592653589793238462643383279502884197169399375105820974944592';
//   const y = '2718281828459045235360287471352662497757247093699959574966967627';
  
//   console.log(karatsuba(x, y));