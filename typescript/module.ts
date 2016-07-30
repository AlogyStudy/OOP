//
//'use strict';
//
//// 定义模块
//
//module startModuel {
//	
//	import sayH;
//	
//	let info: string = 'colors';
//	
//	// 暴露一个class
//	export class Satrt {
//		
//		name: string;
//		
//		constructor(name: string) {
//			
//			this.name = name;
//			
//		}
//		
//		getName(): string {
//			
//			return this.name;
//			
//		}
//		
//	}
//	
//	export SayHello (): string {
//		
//		return sayH.sayHello;
//		
//	}
//	
//}
//
//export module sayH {
//	
//	let sayHello: string = 'hello';
//	
//}
//
//
//// 实例化模块中暴露的接口
//let satr:startModuel.Satrt = new startModuel.Satrt('cyan');
//
//console.log( satr );
//
//console.log(satr.getName());
//




// 导出

//export interface StringValidator {
//	
//	isAcce(s: string): boolean;
//	
//}
//
//export const numberRegExp = /^[0-9]+$/;
//
//export class ZipCode implements  StringValidator {
//	
//	isAcce(s: string) {
//		return s.length === 5 && numberRegExp.test(s);
//	}
//	
//}
//
//
//export { ZipCode }
//
//import { ZipCode } form './ZipCode';
//
//let myValid = new ZipCode();








// 命名空间

namescope Valiation {
	export interface StringValidator {
		isAcce(s: string): boolean;
	}
}

namescope Valiation {
	const lettesRegExp = /^[A-Za-z]+$/;
	expots class LetterOnly implements StringValidator {
		isAcce(s: string): boolean {
			return s.length && lettesRegExp.test(s);
		}
	}
}
