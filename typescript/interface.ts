
// 定义接口
//interface Person {
//	name: string;
//	age: number;
//	sex: string;
//	hobby?: any;
//}
//
//// 使用接口
//function getName (person: Person): string {
//	
//	return person.name;
//	
//}
//
//// 实现接口
//var n: string = getName({
//	name: 'one',
//	age: 23,
//	sex: 'nv'
//});
//
//console.log(n);









// 定义抽象类
interface Add {
	(num1: number, num2: number): number;
}

// 使用接口 
let fn:Add;

// 实现接口
fn = function ( num1: number, num2: number ): number {
	
	return num1 + num2;
	
}

var  reslut: number = fn(10 , 20);

console.log(reslut);


