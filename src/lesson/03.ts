// 1.数组
// let arrayNum: number[] = [1, 2, 3];
// console.log('arrayNum :>> ', arrayNum);
// let arrayNum1: Array<string | number> = [4, 'a', 6];
// console.log('arrayNum1', arrayNum1)

// type arrType = number | string;
// let arrayOfNumber: arrType[] = [1, 2, 3]; // 提示 ts(2322)
// arrayOfNumber[3] = '4'; // 提示 ts(2322)
// console.log('arrayOfNumber', arrayOfNumber);
// arrayOfNumber.push('b'); // 提示 ts(2345)
// console.log('arrayOfNumber', arrayOfNumber);

//2.元组
// let tom: [string, number] = ['', 0];
// tom = ['Tom', 25];
// tom.push('t');
// tom.push(2);
// // tom.push(true);
// console.log('tom', tom);

// any
// let anything: any = {};
// let z = anything.x.y.z; // z 类型是 any，不会提示错误
// const res = z(); // 不会提示错误

// unknown
let result: unknown;
// result = 1;
// result = 'h';
// let num: number = result; // 提示 ts(2322)
// let str: string = result; // 提示 ts(2322)
let ang: any = result; // 不会提示错误
let unn: unknown = result; // 不会提示错误
