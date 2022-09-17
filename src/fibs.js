const fibs = (n) => {
  if (n === 0) return [];
  if (n == 1) return [0];
  const fibs = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    fibs.push(fibs[i] + fibs[i + 1]);
  }
  return fibs;
};

const fibsRec = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
};

module.exports = { fibs, fibsRec };
