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

{
  /** 根据参数的类型，推断出返回值的类型也是 number */
  function add1(a: number, b: number) {
    return a + b;
  }

  const x1 = add1(1, 1); // 推断出 x1 的类型也是 number

  /** 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */

  // function add2(a: number, b = 1) {
  //   return a + b;
  // }

  function add2(a: number, b: number | undefined = 1): number {
    return a + b;
  }

  const x2 = add2(1);
  console.log('x2 :>> ', x2);
  const x3 = add2(1, 2);
  console.log('x3 :>> ', x3);
  // const x3 = add2(1, '1'); // ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined
}

export default '666';
