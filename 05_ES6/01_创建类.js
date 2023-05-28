
class Person {
    // 类的每一个实例所需要的参数，都会传递到constroutor 中
    // 与函数中的属性相似
    constructor(name,age){
        // 相当与new 一个实例
        this.name = name
        this.age = age
    }

    // 这里的方法称为实例方法，相当于把这里的方法放到 Person.prototype.方法 中的
    // 所以要实例化一个类才能调用
    // 这个相当于语法糖
    running(){
        console.log("running")
    }
}

// 构造函数和类的区别（大体没有很大区别）
// 构造函数可以作为一个函数直接调用，Person("yanqi",18)
// 而类的话，必须要实例化一个类才能调用，否则报错