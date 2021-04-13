let a = [10, 11, 9, 2, 3, 4, 5, 6];

let result = [];

// 내장 메서드 사용하기
for (let i = 0; i < 8; i++) {
	result.push(Math.min.apply(null, a));
	a.splice(a.indexOf(Math.min.apply(null, a)), 1);

	console.log(i, ':', a);
}
console.log(result);

//
function selectionSort(arr) {
	let length = arr.length;
	let minIndex, temp;

	for (let i = 0; i < length - 1; i++) {
		minIndex = i;

		// 최솟값 찾기
		// 앞에는 이미 정렬이 되어있으므로 최소값을 찾을 필요가없다. j = i + 1
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) minIndex = j;
		}
		// 자리바꿈
		temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}

	return arr;
}
