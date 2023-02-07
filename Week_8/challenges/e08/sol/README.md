# Your order, please

## Solution 1 😎

```javascript
function order(words) {
  let array = words.split(' ');
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
```

## Solution 2 😎

```javascript
function order(words) {
  const sortWords = words.split(' ').sort((a, b) => {
    let aN = Number(a.replace(/[A-Za-z]/g, ''));
    let bN = Number(b.replace(/[A-Za-z]/g, ''));
    return aN - bN;
  });
  return sortWords.join(' ');
}
```

## Video Solution 📹

[Your order, please](https://edpuzzle.com/assignments/63c71ff3ac840941316902bc/watch)
