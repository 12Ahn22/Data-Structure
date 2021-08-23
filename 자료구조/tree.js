// 비선형 자료구조
// 계층적인 관계를 표현하는 자료구조
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  // 값 넣기
  insert(value) {
    // root에 노드가 없을 경우
    if (this.root == null) {
      this.root = new Node(value);
    } else {
      // root에 노드가 있는 경우
      this.insertNode(this.root, value);
    }
  }
  insertNode(current, value) {
    // value가 부모 value보다 작은 경우 왼쪽(left)
    if (value < current.value) {
      // 만약 이미 left에 값이 없다면
      if (current.left == null) {
        // 바로 value로 만든 node를 left에 붙여준다.
        current.left = new Node(value);
      } else {
        // 이미 left에 값이 있다면 다시 insertNode로 내려간다
        // current.left에 다시 노드 삽입
        this.insertNode(current.left, value);
      }
    } // value가 부모 value보다 큰 경우 (right)
    else {
      // right가 비어있으면 바로 넣는다
      if (current.right == null) {
        current.right = new Node(value);
      } else {
        // right가 비어있지 않으면 다시 insertNode
        this.insertNode(current.right, value);
      }
    }
  }

  contains(root, value) {
    if (root == null) {
      // root가 null이면 tree가 없는거라
      return false;
    }
    // 찾는 값을 찾았다면
    if (root.value == value) {
      return true;
    } else if (value < root.value) {
      // 찾는 값이 부모값보다 작으면 왼쪽(left)로 찾으러가기
      return this.contains(root.left, value);
    }
    // 찾는 값이 부모값보다 크면 right로 찾으러가기
    else {
      return this.contains(root.right, value);
    }
  }
  //
  // find Node 노드 찾기
  findNode(root, value) {
    if (root == null) return null;
    // 찾던 값이 있는 노드일 경우
    if (root.value == value) {
      // 해당 노드를 반환
      return root;
    }
    // 작으면 왼쪽으로 찾기
    else if (value < root.value) {
      return this.findNode(root.left, value);
    } else {
      // 크면 오른쪽으로 찾기
      return this.findNode(root.right, value);
    }
  }

  // 삭제하기
  remove(value) {
    // 삭제할 노드를 찾는다.
    const nodeToRemove = this.findNode(this.root, value);
    // 지울 노드가 없는 경우 false 리턴
    if (nodeToRemove == null) {
      return false;
    }
    // 지울 값의 부모 노드 찾기
    let parent = this.findParant(value, this.root);
    console.log('부모', parent);
    // 1. 지울 노드의 left, right에 아무것도 없는 경우 = 그냥 삭제하면 된다.
    if (nodeToRemove.left == null && nodeToRemove.right == null) {
      // 지울 노드 데이터가 부모 노드보다 작으면 left를 지우고 크면 right를 지워야한다
      //  노드 데이터가 부모보다 작을 경우 = 부모의 left에 있다는 뜻
      if (nodeToRemove.value < parent.value) {
        parent.left = null;
      } else parent.right = null;
    }
    // 2. 지울 노드의 left와 right 둘 다 노드가 존재하는 경우
    else if (nodeToRemove.left != null && nodeToRemove.right != null) {
      let next = nodeToRemove.right;
      // 지울 노드의 오른쪽에서 가장 작은 노드 찾기
      // 지울 노드의 오른쪽에 있는 가장 작은 노드(가장 왼쪽아래)는
      while (next.left != null) {
        // 가장 작은 노드 찾기
        next = next.left;
      }
      if (next != nodeToRemove.right) {
        // 가장 작은 노드랑 지울 노드 오른쪽이랑 다르다면,
        // 가장 작은 노드랑 지울노드의 값을 바꾸고, 가장 작은 노드를 지워버린다.
        // 즉, 가장 작은 노드랑 지울 노드랑 자리를 바꾸고 가장 작은 노드를 지우는 것
        this.remove(next.value); // 가장 작은 값 노드 지워버리기
        nodeToRemove.value = next.value; // 지울 노드 자리에 next에 들어있는 가장작은 값 넣기
      }
      // 만약, 지울 노드의 right에 left노드가 없고 가장 작은 노드가 right인 경우
      else {
        nodeToRemove.value = next.value; // 지울 노드랑 값 변경
        nodeToRemove.right = nodeToRemove.right.right; // right도 변경시켜줌
      }
    }
    // 3. 한 쪽만 존재하는 경우
    else {
      // right만 존재할 때
      let next;
      if (nodeToRemove.left == null) {
        next = nodeToRemove.right;
        console.log('next', next);
      }
      // left만 존재할 때
      else {
        next = nodeToRemove.left;
      }
      // 지울 노드가 root인 경우
      if (this.root == nodeToRemove) {
        root = next;
      } else if (parent.left == nodeToRemove) {
        parent.left = next;
      } else if (parent.right == nodeToRemove) {
        parent.right = next;
      }
    }
    return;
  }

  // Find Parent of Node
  findParant(value, root) {
    // 값이 루트의 값이면 부모가 없으니까 null
    if (value == root.value) return null;
    // 값이 작으면 left로
    if (value < root.value) {
      if (root.left == null) {
        return null;
      }
      // left의 값이 찾는 값일 경우, 현재 노드가 값의 부모 노드다
      else if (root.left.value == value) {
        return root;
      } else {
        // 아니면 계속 찾기
        return this.findParant(value, root.left);
      }
    }
    // 값이 크면 right로
    else {
      //
      if (root.right == null) {
        return null;
      }
      // 값을 찾은 경우
      else if (root.right.value == value) {
        return root;
      } else {
        // 계속찾기
        return this.findParant(value, root.right);
      }
    }
  }

  // Traversal 순회하기
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
