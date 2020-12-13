interface Avatar{
    name: string,
    age: number,
    engineer: string
}

const myAvatar = {
    name: 'Yang',
    age: 22,
    engineer: 'Front End',
}




class Avatar {
    name: string;
    age: number;
    engineer: string;
    constructor(_name: string) {
        this.name = _name;
    }   //构造函数
    sayHello(): string {
        return "Hi,everyone"
    }   //方法
}


