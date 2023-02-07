# Bit counting

## Solution 😎

```javascript
var countBits = function (n) {
  let binaryNumber = n.toString(2);
  let oneBitCount = 0;
  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === '1') oneBitCount++;
  }
  return oneBitCount;
};
```

## Video Solution 📹

[Bit counting](https://edpuzzle.com/assignments/63c71fdd8c4bef413fadef46/watch)
