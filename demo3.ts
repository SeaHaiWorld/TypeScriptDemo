/**
 * 自定义静态类型
 * interface、type、class
 */
function costomType(){
    interface Info {
        name: string
        age: number
    }
    const myInfo: Info = {
        name: 'yhx',
        age: 22
    }
    console.log(myInfo)
    console.log('name:', myInfo.name, 'age:', myInfo.age)
}

/**
 * 对象类型
 */
function typeObj() {
    // 对象
    interface Info {
        name: string
        age: number
    }
    const myInfo: Info = {
        name: 'yhx',
        age: 22
    }
    console.log(myInfo)
    console.log('name:', myInfo.name, 'age:', myInfo.age)
    // 数组
    const array: number[] = [9, 1, 1]
    console.log(array)
    // 类
    class Person {name: string='yang'; age: number=22}
    const person = new Person()
    console.log(person)
    // 函数
    const sun:() => string = () => {
        return 'sun'
    }
    console.log(sun, sun()) // [Function: sun] sun
}