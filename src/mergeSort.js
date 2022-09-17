const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const sortedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  return sortedArray;
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
};

module.exports = mergeSort;
