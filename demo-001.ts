// 1.0 字符串
// let fullname: string = 'zhang, jinhui';
// let age: string = String(123);
// let myinfo = `my nam is ${fullname}, i am ${age} years old`
// console.log('fullname :>> ', fullname);
// console.log('age :>> ', age);
// console.log('myinfo :>> ', myinfo);

// 2.0 数字
// /** 十进制整数 */
// let integer: number = 6;

// /** 十进制整数 */
// let integer2: number = Number(42);

// /** 十进制浮点数 */
// let decimal: number = 3.14;
// console.log('decimal :>> ', decimal);

// /** 二进制整数 */
// let binary: number = 0b1010; // 0b开头
// console.log('binary :>> ', binary);

// /** 八进制整数 */
// let octal: number = 0o744; // 0o开头

// /** 十六进制整数 */
// let hex: number = 0xf00d; // 0x开头

// let big: bigint = 100n;
// // console.log(`big === integer`, big === integer);
// // console.log(`big === integer2`, big === integer2);
// console.log('big :>> ', big);

// 3.0 布尔值
// let tsIsGood: boolean = true;
// console.log(`tsIsGood:`, tsIsGood);
// let tsIsbad: boolean = false;
// console.log(`tsIsbad:`, tsIsbad);

// 4.0 Symbol
let sym1: symbol = Symbol();
console.log(`sym1`, sym1);
let sym2: symbol = Symbol(123);
console.log(`sym2`, sym2);
