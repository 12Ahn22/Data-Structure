// Map을 사용해서 해시테이블 구현하기

// 해시 함수
const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 10;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const test = new HashTable();

test.insert('야옹', '고양이');
test.insert('멍멍', '강아지');
test.insert('찍찍', '쥐');
test.insert('어흥', '사자');
test.insert('어휴', '사람');
test.insert('충돌?', '충돌났어요');
console.log(test);
