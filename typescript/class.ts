
//class Price {
//	
//	price: number = 10;
//	
//	fn( num: number ): string {
//		return num * 2;
//	}
//	
//}


//class Person {
//	
//	static name: string = 'time';
//	
//	static fn(num: number): void {
//		
//		console.log('success');
//		
//	}
//	
//}
//
//let p1: Peson  = new Person();



//class Book {
//	
//	name: string;
//	
//	page: number = 400;
//	
//	constructor(bookName: string) {
//		
//		this.name = bookName;
//		
//		console.log(bookName);
//		
//	}
//	
//}
//
//let p1: Book = new Book('庄子');


class Base {
	
	press: string = 'one';
	name: string;
	constructor ( bookName: string ) {
		this.name = bookName;
	}
		
}

class Book extends Base {
	
	price: number;
//	name: string = '老子';
	
	constructor(bookName: string, price: number) {
		// 父类继承属性
		super(bookName); // 会执行父类的 constructor
		
		this.price = price;
		
	}
	
	sayName(): string {
		return this.name;
	}
	
}

let b: Book = new Book('老子', 40);

let bookname = b.sayName();

console.log(bookname);



