// 배열로 만든 해시테이블

const hashTableSize = 32;

// 해시함수
function hashFunction(key) {
	// 여러 방법들이 있다.

	const hash = Array.from(key) // key를 from을 이용해 Array객체로 만듬
		.reduce(
			(hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
			0 // 초기값 0
		);
	// hash 값을 배열 방 개수만큼 나눠준다
	return hash % hashTableSize;
}

class HashTable {
	constructor() {
		this.table = new Array(hashTableSize);
		this.keys = [];
		this.size = 0;
	}

	setItem = (key, value) => {
		this.size++;
		if (!this.keys.includes(key)) {
			this.keys.push(key);
		}
		const index = hashFunction(key);

		if (this.table[index]) {
			this.table[index].push([key, value]);
		} else {
			this.table[index] = [[key, value]];
		}
	};
	getItem = (key) => {
		const index = hashFunction(key);

		if (!this.table[index]) return null;

		// find는 주어진 판별 함수를 만족하는 첫 번째 요소 값을 리턴한다
		return this.table[index].find((x) => x[0] === key)[1];
	};

	removeItem(key, value) {
		const index = hashFunction(key);
		// find slice index
		const removeIndex = this.table[index].findIndex((element) => {
			return element[1] === value;
		});

		// 인덱스를 못찾은 경우
		if (removeIndex === -1) return null;

		this.table[index].splice(removeIndex, 1);

		return null;
	}
}

const ht = new HashTable();

ht.setItem('firstName', 'Ahn');
ht.setItem('firstName', 'Rin');
ht.setItem('firstName', 'Dan');
ht.setItem('firstName', 'Kim');
ht.setItem('firstName', 'Su');
ht.setItem('firstName', 'Mun');
ht.setItem('lastName', 'ayong');
ht.setItem('lastName', 'jason');

ht.removeItem('firstName', 'Kim');
ht.removeItem('firstName', 'd');
ht.removeItem('firstName', 'Su');
ht.removeItem('lastName', 'Su');
ht.removeItem('lastName', 'jason');

console.log(ht.table);
