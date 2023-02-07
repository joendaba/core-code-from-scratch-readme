# Moving Zeros To The End

## Solution 1 😎

```javascript
function moveZeros(nums) {
  let nonZero = [];
  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(nums[i]);
    } else {
      nonZero.push(nums[i]);
    }
  }
  return nonZero.concat(zeros);
}
```

## Solution 2 😎

```javascript
function moveZeros(nums) {
  let nonZero = nums.filter((val) => val !== 0);
  let zeros = nums.filter((val) => val === 0);
  return nonZero.concat(zeros);
}
```
