# Basic Calculator

## Solution 😎

```javascript
// Solution 1
function calculate(num1, operation, num2) {
  if (operation === '+') return num1 + num2
  else if (operation === '-') return num1 - num2
  else if (operation === '*') return num1 * num2
  else if (operation === '/' && num2 != 0) return num1 / num2
  else return null
}

// Solution 2
function calculate(num1, operation, num2) {
  switch (operation){
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 != 0 ? num1/num2 : null;
      default:
        return null;
  }
}
```

## Video Solution 📹

[Basic Calculator](https://edpuzzle.com/assignments/63c5887552527441409dbd37/watch)
