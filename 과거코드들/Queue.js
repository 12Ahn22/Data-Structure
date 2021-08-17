// Queue : FIFO 방식을 가지는 자료구조이다.
// FIFO - 먼저 집어넣은 데이터를 먼저 꺼낸다

// 간단하게 배열로 큐 구현하기
class Queue {
	constructor() {
		this.arr = [];
	}

	isEmpty() {
		if (this.arr.length == 0) return 'Empty';
	}

	peek() {
		return this.arr[this.arr.length - 1];
	}

	enqueue(value) {
		this.arr.push(value);
	}

	dequeue() {
		// shift는 배열의 가장 앞 요소를 뽑아낸다
		return this.arr.shift();
	}
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue);
