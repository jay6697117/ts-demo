// 1.我们可以直接使用 [] 的形式定义数组类型
let numberArr: number[] = [1, 2, 3];
console.log('numberArr :>> ', numberArr);
let stringArr: string[] = ['1', '2', '3'];
console.log('stringArr :>> ', stringArr);

// 2.我们也可以使用 Array 泛型（在第 10 讲会详细介绍泛型）定义数组类型
let numberArray: Array<number> = [4, 5, 6];
console.log('numberArray :>> ', numberArray);
let stringArray: Array<string> = ['4', '5', '6'];
console.log('stringArray :>> ', stringArray);
