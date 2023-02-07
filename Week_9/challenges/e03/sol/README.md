# Thinkful - List and Loop Drills: Lists of lists

## Solution 1 😎

```javascript
function processData(data) {
  let product = 1;

  for (let i = 0; i < data.length; i++) {
    let result = data[i][0] - data[i][1];

    product *= result;
  }
  return product;
}
```

## Solution 2 😎

```javascript
function processData(data) {
  return data
    .map((sublist) => sublist[0] - sublist[1])
    .reduce((product, result) => product * result, 1);
}
```
