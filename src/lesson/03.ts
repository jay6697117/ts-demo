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
// let result1: unknown;
// let result2: unknown;

// result = 1;
// result = 'h';
// let num: number = result; // 提示 ts(2322)
// let str: string = result; // 提示 ts(2322)
// let ang: any = result; // 不会提示错误
// let unn: unknown = result; // 不会提示错误
// result();//对象的类型为 "unknown"。ts(2571)
// result.x()//对象的类型为 "unknown"。ts(2571)

// result1 = 123;
// result2 = 'hello'

// if (typeof result1 === 'number') {
//   const res1 = result1.toFixed(); // 此处 hover result 提示类型是 number，不会提示错误
//   console.log('res1:', res1)
// }

// if (typeof result2 === 'string') {
//  const res2=  result2.slice(1); // 此处 hover result 提示类型是 string，不会提示错误
//   console.log('res2:', res2)
// }

// void
// function foo(): void {
//   // return undefined;
// }
// console.log('foo', foo);

// let undeclared: undefined = undefined; // 鸡肋
// let nullable: null = null; // 鸡肋
// let unn: unknown = foo;
// let ang: any = foo;
// console.log('unn', unn)
// console.log('ang', ang)

// 类型守卫
// const userInfo: {
//   id?: number;
//   name?: null | string;
// } = { id: 1, name: 'Captain' };

// if (userInfo.id !== undefined) {
//   // Type Guard
//   const res = userInfo.id.toFixed(); // id 的类型缩小成 number
//   console.log('res 0:>> ', res);
// }

// if (userInfo.name !== undefined && userInfo.name !== null) {
//   // Type Guard
//   const res = userInfo.name.toLowerCase(); // name 的类型缩小成 string
//   console.log('res 1:>> ', res);
// }

// const res1 = userInfo.id!.toFixed(); // ok，但不建议
// const res2 = userInfo.name!.toLowerCase(); // ok，但不建议
// console.log('res1 :>> ', res1);
// console.log('res2 :>> ', res2);

// const userInfo: {
//   id?: number;
//   name?: null | string;
// } = { id: 1, name: 'Captain' };

// const userInfo: {
//   id?: number;
//   name?: null | string;
// } = { id: undefined, name: undefined };

// const res1 = userInfo.id?.toFixed(); // Optional Chain 可选链
// const res2 = userInfo.name?.toLowerCase(); // Optional Chain 可选链
// console.log('res1 :>> ', res1);
// console.log('res2 :>> ', res2);

// // 空值合并
// const myName = userInfo.name ?? `my name is ${userInfo.name}`; // 空值合并
// console.log('myName :>> ', myName);

// never
// function ThrowError(msg: string): never {
//   throw new Error(msg);
// }
// ThrowError('报错啦111')

// let Unreachable: never = 1; // ts(2322)

// Unreachable = 'string'; // ts(2322)

// Unreachable = true; // ts(2322)

// let Unreachable: never = 1;
// let num: number = Unreachable; // ok
// let str: string = Unreachable; // ok
// let bool: boolean = Unreachable; // ok

// const str: string | never = 'string';
// console.log('str :>> ', str,typeof str);

// if (typeof str === 'number') {
//   str.toLowerCase(); // Property 'toLowerCase' does not exist on type 'never'.ts(2339)
// }

// const props: {
//   id: number;
//   name?: never;
// } = {
//   id: 1,
//   name: undefined
// };

// props.name = null; // ts(2322)) 不能将类型“"xxx"”分配给类型“undefined”。ts(2322)
// props.name = 'str'; // ts(2322) 不能将类型“"xxx"”分配给类型“undefined”。ts(2322)
// props.name = 1; // ts(2322) 不能将类型“"xxx"”分配给类型“undefined”。ts(2322)

// declare function create(o: object | null): any;
// function create(o: object | null): any {
//   return o;
// }
// create({}); // ok
// create(() => null); // ok
// create([]); // ok
// create(2); // ts(2345)
// create('string'); // ts(2345)


// 类型断言（Type Assertion）
const arrayNumber: number[] = [1, 2, 3, 4];
console.log('arrayNumber :', arrayNumber);
// const tempArr = arrayNumber.find(item => item > 2) as number; //3
const tempArr = <number>arrayNumber.find(item => item > 2); //3
console.log('tempArr :>> ', tempArr);
const greaterThan2: number = tempArr ; // 提示 ts(2322)
console.log('greaterThan2 :>> ', greaterThan2);
