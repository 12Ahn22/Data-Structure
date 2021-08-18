function linearSearch(arr,n){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===n) return true;
  }
}

console.log(linearSearch([1,3,2,5,6,10],3));