const runningSum = (arr) => {
  let newArr = [];
  let curr = 0;
  let total = 0;

  const output = arr.map((item) => {
    curr += item;
    total += curr;
    newArr.push(curr);
  });

  console.log(`Numbers in array: ${arr}`);
  console.log(`Running sums in array: ${newArr}`);
  console.log(`----------------------------------------------------------`);
  console.log(`Total running sums of array: ${total} \n`);

  return newArr;
};

runningSum([1, 1, 1, 1, 1]);
runningSum([1, 2, 3, 4]);
runningSum([3, 1, 2, 10, 1]);
