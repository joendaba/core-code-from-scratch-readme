# Valid parentheses

## Solution 1 😎

```javascript
function validParentheses(parens) {
  let valid = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')') valid--;
    if (parens[i] === '(') valid++;
    if (valid < 0) return false;
  }
  return valid == 0;
}
```

## Solution 2 😎

```javascript
function validParentheses(parens) {
  return [...parens].reduce((a, c) => (a + c).replace('()', ''), '') === '';
}
```

## Video Solution 📹

[Valid parentheses](https://edpuzzle.com/assignments/63c720dfa56d8e415452ff4d/watch)
