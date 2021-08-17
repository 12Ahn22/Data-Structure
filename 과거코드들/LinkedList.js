// 링크드 리스트
// 선형 데이터 구조
// 논리적 저장 순서는 메모리의 물리적 저장 순서와 일치하지않는다
// 각각의 요소들은 자기 자신의 다음 요소를 가리킨다
// 순서를 표현하는 노드들의 집합이다.

// 시간 복잡도
// 접근 O(n) - 목표 노드에 접근하기 위해서 도착할 때까지 다음 요소를 가리키는 참조를 타고 이동해야함 O(n)
// 탐색 O(n) - 위와 같은 이유
// 삽입 O(1) - 마지막 노드가 새로 만든 노드를 가리키기만 하면되서 O(1)
// 삭제 O(1) - 삭제할 노드를 가리키는 참조를 없애버리면 되서 O(1)

// Node 클래스
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

// 링크드 리스트
export default class LinkedList {
	constructor() {
		this.head = null; // 첫 번째 노드를 가리킨다
		this.size = 0; // 링크드 리스트의 전체 크기
	}

	// 맨 앞에 노드 추가하기
	insertFirst(data) {
		// 맨 앞에 추가했으므로 head가 되어야한다.
		// 기존에 head가 존재한다면 next는 기존에 head 였던 노드를 가리킨다
		this.head = new Node(data, this.head);
		this.size++;
	}

	// 맨 뒤에 노드 추가하기
	insertLast(data) {
		const node = new Node(data);

		// head가 없다면
		if (!this.head) {
			this.head = node;
			this.size++;
			return;
		}

		// List의 맨 마지막을 찾는다
		let current = this.head;
		// head 부터 next를 계속 타고 next가 null인 노드를 찾는다
		// next가 null 인 노드는 마지막 노드이다
		while (current.next) {
			//
			current = current.next;
		}
		// 마지막 노드의 next가 새로 만든 노드를 가리키도록 한다
		current.next = node;
		this.size++;
	}

	// 인덱스로 데이터 얻기
	getAt(index) {
		let current = this.head;
		let count = 0;

		// 찾고자하는 index까지 이동하기
		while (current) {
			if (count === index) return current.data;

			count++;
			current = current.next;
		}
		return null;
	}

	// 데이터로 인덱스 얻기
	get(data) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (current.data === data) return count;

			current = current.next;
			count++;
		}

		return null;
	}

	// 맨 마지막 데이터 삭제
	removeLast() {
		let current = this.head;

		while (current.next) {
			if (current.next.next === null) {
				// 다음 노드의 다 다음이 null이라는 것은 마지막 노드라는 뜻
				// 마지막 노드와의 연결을 끊어버린다
				current.next = null;
				this.size--;
				return 1;
			}
			current = current.next;
		}
		return 0;
	}

	find({ value = undefined, callback = undefined }) {
		if (!this.head) return null;

		let currentNode = this.head;

		while (currentNode) {
			if (callback && callback(currentNode)) return currentNode;

			if (value !== undefined && currentNode.value === value)
				return currentNode;

			currentNode = currentNode.next;
		}
		return null;
	}
}
