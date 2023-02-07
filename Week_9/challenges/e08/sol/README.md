# Valid Parentheses

## Solution 1 😎

```javascript
function validParentheses(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
}
```

## Solution 2 😎

```javascript
function validParentheses(str) {
  return (
    str.split("").reduce((acc, val) => {
      if (val === "(") {
        acc++;
      } else if (val === ")") {
        acc--;
        if (acc < 0) {
          acc = NaN;
        }
      }
      return acc;
    }, 0) === 0
  );
}
```
