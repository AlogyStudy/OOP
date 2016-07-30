
'use strict';

// 时间接口
interface Base {
	current: string;
	getCurrentDate(): string;
}


// 使用接口
class Times implements Base {
	
	current: string;
	
	constructor( d: string ){
		this.current = d;
	}
	
	getCurrentDate (): string {
		return this.current;
	}
	
}

let d: Times = new Times(new Date().toString());

console.log(d);


