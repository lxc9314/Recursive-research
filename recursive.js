// Fibonacci Sequence
// 递归算法是一种直接或者间接调用自身函数或者方法的算法。递归算法的实质是把问题分解成规模缩小的同类问题的子问题，然后递归调用方法来表示问题的解。递归算法对解决一大类问题很有效，它可以使算法简洁和易于理解。递归算法，其实说白了，就是程序的自身调用。它表现在一段程序中往往会遇到调用自身的那样一种coding策略，这样我们就可以利用大道至简的思想，把一个大的复杂的问题层层转换为一个小的和原问题相似的问题来求解的这样一种策略。递归往往能给我们带来非常简洁非常直观的代码形势，从而使我们的编码大大简化，然而递归的思维确实很我们的常规思维相逆的，我们通常都是从上而下的思维问题， 而递归趋势从下往上的进行思维。这样我们就能看到我们会用很少的语句解决了非常大的问题，所以递归策略的最主要体现就是小的代码量解决了非常复杂的问题。

// 递归算法解决问题的特点：
// 递归就是方法里调用自身。
// 在使用递增归策略时，必须有一个明确的递归结束条件，称为递归出口。
// 递归算法解题通常显得很简洁，但递归算法解题的运行效率较低。所以一般不提倡用递归算法设计程序。
// 在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储。递归次数过多容易造成栈溢出等，所以一般不提倡用递归算法设计程序。

// 递归算法要求。递归算法所体现的“重复”一般有三个要求：
// 　　(1) 是每次调用在规模上都有所缩小（通常是减半）；
// 　　(2) 是相邻两次重复之间有紧密的联系，前一次要为后一次做准备（通常前一次的输出就作为后一次的输入）；
// 　　(3) 是在问题的规模极小时必须用直接给出解答而不再进行递归调用，因而每次递归调用都是有条件的(以规模未达到直接解答的大小为条件)，无条件递归调用将会成为死循环而不能正常结束。
import isPlainObject from "is-plain-object";
import * as R from "ramda";
const fibonacci = n => {
  if (n <= 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
/**
 * A Iterator use for get keys or index as path array form deep object
 * @param fn {(value: any, paths: (number|string)[]) => void}
 * @param paths {Array<number|string>}
 * @param data
 * @return void
 */

//  深度优先遍历
export const forEachDeep = (
  fn: (value: any, paths: (number | string)[]) => void,
  paths: (number | string)[],
  data: object
): void => {
  if (Array.isArray(data)) {
    data.forEach((value, index) => {
      const deepPaths = [...paths, index];
      fn(value, deepPaths);
      forEachDeep(fn, deepPaths, data[index]);
    });
  } else if (isPlainObject(data)) {
    R.forEachObjIndexed((value, key) => {
      const deepPaths = [...paths, key];
      fn(value, deepPaths);
      forEachDeep(fn, deepPaths, data[key]);
    }, data);
  }
};
