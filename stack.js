// stack

class Stack {
	constructor() {
		// 배열로 스택만들기
		this.arr = [];
		this.count = 0;
	}

	// 비어있는지 확인
	isEmpty() {
		if (this.arr.length === 0) return true;
	}
	// peek, 맨 마지막으로 들어온 요소를 확인
	peek() {
		if (this.isEmpty()) return null;
		// 맨 마지막 요소를 보여줌
		return this.arr[this.count - 1];
	}
	// push, 값을 배열에 넣기
	push(value) {
		this.arr[this.count] = value;
		this.count++;
	}
	// pop, 맨 나중에 들어온 값을 빼내기
	pop() {
		const result = this.arr.splice(this.count - 1, 1);
		this.count--;
		return result;
	}
}

const stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack);
