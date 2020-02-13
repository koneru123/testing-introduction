var sumNestedArray = function(arr) {
  let sumArr = [];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
      let arr1 = arr[i];
      let value = arr1.reduce((sum, element) => sum + element);
      sumArr.push(value);
  }
  return sumArr;
}