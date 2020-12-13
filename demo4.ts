/**
 * TS 类型注解和类型注解
 */

/**
 * 类型注解
 * var/let/const [变量名]: [类型]
 */
function linkType() {
    let num:number;
    num = 1
    console.log(num)
}

linkType()

/**
 * 类型推断
 */
function judegetType() {
    // 不需要类型推断, TS 会为我们推断数据类型
    let a = 1
    let b = 2
    let sum = a + b
    console.log(sum)

    // 需要使用类型推断，如：函数的输入
    // 未使用类型推断。TS 提示参数 "a" "b" 隐式具有 "any" 类型，但可以从用法中推断出更好的类型。
    function add1(a, b) {
        return a + b
    }

    // 加入类型推断
    function add2(a: number, b: number) {
        return a + b
    }
    console.log(add1(1, 2), add2(1, 2))
}

judegetType()