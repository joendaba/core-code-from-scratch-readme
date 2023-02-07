# Training JS #7: if..else and ternary operator!

## Solution 😎

```javascript
// Solution 1
function saleHotdogs(n){
  if (n < 5) return n * 100
  else if (n < 10) return n * 95
  else return n * 90
}

// Solution 2
function saleHotdogs(n){
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
```

## Video Solution 📹

[Training JS #7: if..else and ternary operator!](https://edpuzzle.com/assignments/63c587bc19904640d633f2c1/watch)
