// 이중 연결 리스트
// 양방향
// 기존의 링크드 리스트는 한 방향(next)를 따라서만 이동 할 수 있지만
// 이중 연결 리스트는 prev에 뒤에있는 노드의 참조 값을 가지고
// next에는 다음 노드의 참조 값을 가진다

// 시간 복잡도
// Access	Search	Insertion	Deletion
//  O(n)	  O(n)	  O(1)      O(n)

class Node {
	constructor(data, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

// Double Linked List
// head <-> 노드 <-> 노드 ... <-> tail
class DoubleLinkedList {
	constructor() {
		this.head = null; // 맨 앞 포인터
		this.tail = null; // 맨 뒤 포인터
		this.size = 0;
	}

	// Add
	add(value) {
		// head가 없는 경우 = 리스트가 빈 상태
		const newNode = new Node(value);
		this.size++;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return null;
		}

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;

		return null;
	}

	// 해당 값 삭제
	remove(value) {
		// 노드가 없는 경우
		if (!this.head) return null;

		let delNode = null;
		let currentNode = this.head;

		while (currentNode) {
			// 같은 값인 노드를 찾았다면
			if (currentNode.data === value) {
				delNode = currentNode;

				// 지워야 하는 노드가 head 노드라면
				// 다음 노드로 head를 옮겨준다
				if (delNode === this.head) {
					delNode.next.prev = null;
					this.head = delNode.next;
				}

				// 지워야 하는 노드가 tail이라면
				else if (delNode === this.tail) {
					delNode.prev.next = null;
					this.tail = delNode.prev;
				}

				// 둘 다 아닌 경우
				else {
					delNode.prev.next = delNode.next;
					delNode.next.prev = delNode.prev;
				}
			}
			this.size--;
			currentNode = currentNode.next;
		}
		return this;
	}
	// 순회
	traversal() {
		let currentNode = this.head;
		while (currentNode) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
	// 역순회
	reverseTraversal() {
		let currentNode = this.tail;
		while (currentNode) {
			console.log(currentNode.data);
			currentNode = currentNode.prev;
		}
	}
}

const db = new DoubleLinkedList();
db.add('1');
db.add('2');
db.add('3');
db.add('4');
db.remove('2');
db.traversal();
db.reverseTraversal();
console.log(db);
