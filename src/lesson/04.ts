// {
//   let str = 'this is string'; // 等价
//   let num = 1; // 等价
//   let bool = true; // 等价
// }

// {
//   const str = 'this is string'; // 不等价
//   const num = 1; // 不等价
//   const bool = true; // 不等价
// }

// {
/** 根据参数的类型，推断出返回值的类型也是 number */
// function add1(a: number, b: number) {
//   return a + b;
// }

// const x1 = add1(1, 1); // 推断出 x1 的类型也是 number

/** 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */

// function add2(a: number, b = 1) {
//   return a + b;
// }

// function add2(a: number, b: number | undefined = 1): number {
//   return a + b;
// }

// const x2 = add2(1);
// console.log('x2 :>> ', x2);
// const x3 = add2(1, 2);
// console.log('x3 :>> ', x3);
// // const x3 = add2(1, '1'); // ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined
// }

// {
//   type Adder = (a: number, b: number) => number;

//   const add: Adder = (a, b) => {
//     return a + b;
//   };

//   const x1 = add(1, 1); // 推断出 x1 类型是 number

//   // const x2 = add(1, '1'); // ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number
// }

// {
//   let str = 'this is string'; // str: string
//   let num = 1; // num: number
//   let bool = true; // bool: boolean
// }

// {
//   const str = 'this is string'; // str: 'this is string'
//   const num = 1; // num: 1
//   const bool = true; // bool: true
// }

// {

//   let specifiedStr: 'this is string' = 'this is string';

//   let specifiedNum: 1 = 1;

//   let specifiedBoolean: true = true;

// }

// {
// let specifiedStr: 'this is string' = 'this is string';
// let str: string = 'any string';
// // specifiedStr = str; // ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'
// str = specifiedStr; // ok
// console.log('str:', str)
// let hello: 'hello' = 'hello';
// console.log(hello)
// }

// type Direction = 'up' | 'down';

// function move(dir: Direction) {

//   console.log('dir:', dir)

// }

// move('up'); // ok
// move('down'); // ok
// // move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'

// interface Config {
//   size: 'small' | 'big'; // 字符串字面量类型
//   isEnable: true | false; // 布尔字面量类型
//   margin: 0 | 2 | 4; // 数字字面量类型
// }
// const temp: Config = {
//   size: 'small',
//   isEnable: false,
//   margin: 2
// };
// console.log('temp', temp)

// {
//   const str: 'this is string' = 'this is string'; // str: 'this is string'
//   console.log('str', str);
//   const num: 1 = 1; // num: 1
//   console.log('num', num);
//   const bool: true = true; // bool: true
//   console.log('bool', bool);
// }

// {

//   let str = 'this is string'; // str: string

//   let num = 1; // num: number

//   let bool = true; // bool: boolean

//   str = 'any string';
//   num = 2;
//   bool = false;
//   console.log('str', str)
//   console.log('num', num)
//   console.log('bool', bool)
// }

// {
//   // let str = 'this is string'; // 类型是 string
//   let str: string = 'this is string'; // 类型是 string

//   // let strFun = (str = 'this is string') => str; // 类型是 (str?: string | undefined) => string;
//   let strFun: (str?: string | undefined) => string = (str = 'this is string') => {
//     console.log('str 0:', str);
//     return str;
//   }; // 类型是 (str?: string | undefined) => string;
//   const res = strFun();
//   console.log('res 1:', res);

//   // const specifiedStr = 'this is string'; // 类型是 'this is string'
//   const specifiedStr: 'this is string' = 'this is string'; // 类型是 'this is string'

//   // let str2 = specifiedStr; // 类型是 'string'
//   let str2 = specifiedStr; // 类型是 'string'
//   // let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string | undefined) => string;
//   let strFun2: (str?: string | undefined) => string = (str = specifiedStr) => str; // 类型是 (str?: string |undefined) => string;
//   const res1 = strFun2();
//   console.log('res 2:', res1);
// }

{
  const specifiedStr: 'this is string' = 'this is string'; // 类型是 '"this is string"'
  let str2 = specifiedStr; // 即便使用 let 定义，类型是 'this is string'
  // str2 = 'hello'; // 不能将类型“"hello"”分配给类型“"this is string"”。ts(2322)
  console.log('str2:', str2);
}
console.log('测试')
export default {};
