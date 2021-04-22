// Hash Table

// Linked List를 사용한다 - 수정 예정
import LinkedList from './LinkedList.js';

const defaultHashTableSize = 32;

class HashTable {
	constructor(hashTableSize = defaultHashTableSize) {
		// 해시 테이블은 먼저 배열(buckets)을 만들어 놓는다.
		this.buckets = Array(hashTableSize)
			.fill(null) // 빈 배열을 만들고
			.map(() => new LinkedList()); // 빈 배열마다 링크드 리스트를 생성해준다.

		this.keys = {}; // 리스트 방을 정하는 키(인덱스)
	}

	// key를 hash number로 변환한다 = 해시함수
	hash(key) {
		// 여러 방법들이 있다.

		const hash = Array.from(key) // key를 from을 이용해 Array객체로 만듬
			.reduce(
				(hashAccumulator, keySymbol) =>
					hashAccumulator + keySymbol.charCodeAt(0),
				0 // 초기값 0
			);
		// hash 값을 배열 방 개수만큼 나눠준다
		return hash % this.buckets.length;
	}

	//
	set(key, value) {
		const keyHash = this.hash(key); // key의 해시값을 구함
		this.keys[key] = keyHash; // 키 배열에 키와 키 해시값 저장

		const bucketLinkedList = this.buckets[keyHash];

		bucketLinkedList.insertLast({ key, value });
	}
}

const ht = new HashTable();
ht.set('a', 1);
ht.set('a', 2);
ht.set('b', 3);
console.log(ht);
