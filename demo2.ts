/**
 * TypeScript 基础静态类型
 * var/let/const [变量名]: [类型] = 值;
 * number, string, boolean, 元组([type, type]), 数组(:type[]), 枚举(enum), null, undefined, any, never, void
 * Notes:
 * 工作使用问题（潜规则）
 * 如果 TS 能够自动分析变量类型， 不需要使用类型注解
 * 如果 TS 无法分析变量类型的话， 需要使用类型注解
 */
function typeStatic(){
    let num: number = 911
    let yuanzu: [string, number] = ['yuanzu', 1]
    let array: number[] = [9, 1, 1]
    let anyArray: any[] = ['9', 1, null, 1]
    console.log('数字:', num, '元组:', yuanzu, '数组:', array, '任意子元素数组:', anyArray)
}


/**
 * 静态类型被申明后，不能改变为其他类型
 */
function typeErrorStatic(){
    let num: number = 1
    num = 'yang' 
    console.log(num) // Type 'string' is not assignable to type 'number'.
}




