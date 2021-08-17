// Max Heap

class Heap {
	constructor() {
		// 배열로 heap 나타내기
		this.heapContainer = [];
	}

	// get Index
	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}
	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}
	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	// swap
	swap(indexOne, indexTwo) {
		const temp = this.heapContainer[indexOne];
		this.heapContainer[indexOne] = this.heapContainer[indexTwo];
		this.heapContainer[indexTwo] = temp;
	}

	// add
	add(value) {
		// 일단 가장 끝에 데이터를 붙인다
		this.heapContainer.push(value);
		// 힙의 조건을 맞춰 순서를 정렬해준다
		// heapifyUp을 통해 추가된 값이 부모보다 크다면 swap 해준다
		this.heapifyUp();

		return this;
	}

	// poll
	poll() {
		if (this.heapContainer.length === 0) return null;

		const item = this.heapContainer[0];

		// 마지막 요소를 root로 이동시키기
		this.heapContainer[0] = this.heapContainer.pop();
		this.heapifyDown(); // 힙의 조건을 맞춰 순서 정렬

		return item;
	}

	// 힙의 조건을 맞추기 위해 노드를 이동시키는 함수
	heapifyUp() {
		// 힙의 조건을 맞추기 위해 노드를 위로 이동시키는 함수
		let currentIndex = this.heapContainer.length - 1; // 가장 마지막

		// 현재 index의 값이 부모보다 큰 값이라면 계속 반복
		while (
			this.heapContainer[currentIndex] >
			this.heapContainer[this.getParentIndex(currentIndex)]
		) {
			// 부모와 자식 swap
			this.swap(currentIndex, this.getParentIndex(currentIndex));
			currentIndex = this.getParentIndex(currentIndex); // currentIndex 변경
		}
	}

	heapifyDown() {
		let currentIndex = 0;
		let nextIndex = null;

		// 왼쪽 자식이 있는 경우 반복
		while (this.heapContainer[this.getLeftChildIndex(currentIndex)]) {
			// 오른쪽 자식이 있고
			// 오른쪽 자식의 값이 왼쪽 자식의 값보다 크다면
			// nextIndex는 더 큰 값을 가지고 있는 index가 된다
			if (
				this.heapContainer[this.getRightChildIndex(currentIndex)] &&
				this.heapContainer[this.getRightChildIndex(currentIndex)] >
					this.heapContainer[this.getLeftChildIndex(currentIndex)]
			) {
				nextIndex = this.getRightChildIndex(currentIndex);
			}

			if (this.heapContainer[currentIndex] < this.heapContainer[nextIndex]) {
				this.swap(currentIndex, nextIndex);
				currentIndex = nextIndex;
			} else return;
		}
	}
}

const res = new Heap();
res.add(10);
res.add(4);
res.add(30);
res.add(70);
res.add(100);

res.poll();
console.log(res);
