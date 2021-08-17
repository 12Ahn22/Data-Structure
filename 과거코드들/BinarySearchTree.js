// Node
class Node {
	constructor(value, left = null, right = null) {
		this.right = null;
		this.left = null;
		this.value = value;
	}
}

// BST
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// insert
	insert(value) {
		// 새 노드 생성
		const newNode = new Node(value);
		// 루트가 없는 경우 루트로 지정
		if (this.root === null) this.root = newNode;

		//
		let current = this.root;
		while (current) {
			// 중복은 허용하지 않는다
			if (current.value === value) return null;

			// 작을 경우 left쪽에 붙인다
			if (value < current.value) {
				// 왼쪽이 빈 경우 바로 붙여준다
				if (current.left === null) {
					current.left = newNode;
					return this;
				} else {
					// 왼쪽으로 이동
					current = current.left;
				}
			} else {
				// 큰 경우 right쪽에 붙인다
				if (current.right === null) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	// find
	find(value) {
		let current = this.root;

		// 찾을 때 까지 반복문
		while (current.value != value) {
			// 값이 작다면 left 탐색
			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
			// 못찾은 경우 탈출문 = 맨 아래까지 탐색이 완료했기때문에
			// cuurent에 null값이 들어있음
			if (current === null) return null;
		}
		return current;
	}

	// Find Parent of Node
	findParant(value, root) {
		// 값이 루트의 값이면 부모가 없으니까 null
		if (value === root.value) return null;
		// 값이 작으면 left로
		if (value < root.value) {
			if (root.left === null) {
				return null;
			}
			// left의 값이 찾는 값일 경우, 현재 노드가 값의 부모 노드다
			else if (root.left.value === value) {
				return root;
			} else {
				// 아니면 계속 찾기
				return this.findParant(value, root.left);
			}
		}
		// 값이 크면 right로
		else {
			//
			if (root.right === null) {
				return null;
			}
			// 값을 찾은 경우
			else if (root.right.value === value) {
				return root;
			} else {
				// 계속찾기
				return this.findParant(value, root.right);
			}
		}
	}

	// remove
	remove(value) {
		// 지울 노드를 값으로 찾기
		const nodeToRemove = this.find(value);
		// 없는 경우 return
		if (nodeToRemove === null) return false;

		// 지울 값의 부모 노드 찾기
		const parent = this.findParant(value, this.root);

		// 1. 지울 노드의 자식이 없는 경우 = 그냥 삭제하기
		if (nodeToRemove.left === null && nodeToRemove.right === null) {
			// 부모 노드와 연결을 끊어준다
			if (nodeToRemove.value < parent.value) {
				// 부모의 왼쪽에 있다면
				parent.left = null;
			} else {
				// 부모의 오른쪽에 있다면
				parent.right = null;
			}
		}
		// 2. 지울 노드의 자식이 양쪽에 있는 경우
		else if (nodeToRemove.left != null && nodeToRemove.right != null) {
			// 지울 노드의 오른쪽 서브 트리에서 가장 작은 노드를 찾는다
			let next = nodeToRemove.right; // 오른쪽 서브트리 next
			while (next.left !== null) {
				// next를 계속 left로 이동해 가장 작은 노드를 찾는다
				next = next.left;
			}
			if (next != nodeToRemove.right) {
				// 가장 작은 노드가 지울 노드의 오른쪽과 다르다면
				// 둘의 값을 변경한다
				const temp = next.value; // 가장 작은 노드 값 임시 저장
				this.remove(next.value); // 가장 작은 노드 삭제
				nodeToRemove.value = temp; // 삭제할 노드 위치에 가장 작은 노드값 넣기
			} else {
				// 삭제할 노드의 오른쪽 서브트리에 left 노드가 없고
				// 가장 작은 노드가 right인 경우
				nodeToRemove.value = next.value;
				nodeToRemove.right = nodeToRemove.right.right;
			}
		}
		// 3. 한쪽만 있는 경우
		else {
			// right 만 있는 경우
			let next;
			if (nodeToRemove.left === null) {
				next = nodeToRemove.right;
			}
			// left만 있는 경우
			else {
				next = nodeToRemove.left;
			}

			// 지울 노드가 root인 경우
			if (this.root == nodeToRemove) {
				root = next;
			}
			// 부모의 왼쪽이 지울 노드인 경우
			else if (parent.left === nodeToRemove) {
				parent.left = next;
			} else {
				parent.right = next;
			}
		}
		return this;
	}

	// Traversal 순회하기
	//
	// 전위 순회 Preorder Traversal
	// : root -> left -> right 순서로 확인한다.
	preorder(root) {
		// 루트가 없으면 실행 안함
		if (root == null) return false;
		// 화면에 표시하기
		console.log(root.value);
		this.preorder(root.left);
		this.preorder(root.right);
		return;
	}
	// 중위 순회 Inorder Traversal
	// : left -> root -> right
	inorder(root) {
		if (root == null) return false;
		this.inorder(root.left);
		console.log(root.value);
		this.inorder(root.right);
		return;
	}
	// 후위 순회 Postorder Traversal
	// left -> right -> root
	postorder(root) {
		if (root == null) return false;
		this.postorder(root.left);
		this.postorder(root.right);
		console.log(root.value);
		return;
	}
}

const bst = new BinarySearchTree();
bst.insert(5); // root
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(10);
bst.insert(9);
bst.insert(15);
bst.insert(13);
bst.insert(12);

bst.remove(10);

bst.inorder(bst.root);

console.log(bst);
