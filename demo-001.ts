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
// let sym1: symbol = Symbol();
// console.log(`sym1`, sym1);
// let sym2: symbol = Symbol(123);
// console.log(`sym2`, sym2);

// 5.0 TypeScript 还包含 Number、String、Boolean、Symbol 等类型（注意区分大小写）
// let sym1: Symbol = Symbol('b');
// let sym2: symbol = Symbol('a');
// sym1 = sym2; // ok
// console.log(`sym1`, sym1);
// // sym2 = sym1; // fail 不能将类型“Symbol”分配给类型“symbol”, “symbol”是基元，但“Symbol”是包装器对象。如可能首选使用“symbol”

// let str1: String = new String('a');
// let str2: string = 'a';
// str1 = str2; // ok
// console.log(`str1:`, str1);
// // str2 = str1; // fail 不能将类型“String”分配给类型“string”, “string”是基元，但“String”是包装器对象。如可能首选使用“string”

// 6.0
// {
//   let mustBeNum = '111';
//   console.log(`mustBeNum:`, mustBeNum)
// }
// {
//   let mustBeNum: number = '111'; // 不能将类型“"111"”分配给类型“number”。
//   console.log(`mustBeNum:`, mustBeNum)
// }

// 7.0
