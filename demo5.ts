/**
 * 函数参数及返回类型定义
 */
function add(a:number, b:number): number {
    console.log(a+ b)
    return a + b
}

add(1, 2)

interface Obj {
    [propName: string]: any;
}

let obj:Obj = {
    a:1,
    b:2
}
console.log(obj)
function funcReturnObj({a, b}:Obj):Obj{
    return {a,b}
}

console.log(funcReturnObj(obj))