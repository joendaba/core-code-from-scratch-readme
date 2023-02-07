# Counting duplicates

## Solution 😎

```javascript
function duplicateCount(text) {
  let duplicates = 0;
  text = text.toLowerCase(); // todo minuscula
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      duplicates++;
      text = text.replace(new RegExp(text[i], 'g'), '');
      i = i - 1;
    }
  }
  return duplicates;
}
```

## Video Solution 📹

[Counting duplicates](https://edpuzzle.com/assignments/63c720f07b1e684117574537/watch)
