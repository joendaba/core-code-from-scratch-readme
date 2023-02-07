# Convert string to camel case

## Solution 1 😎

```javascript
function toCamelCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && (str[i - 1] === '_' || str[i - 1] === '-')) {
      result += str[i].toUpperCase();
    } else if (str[i] != '-' && str[i] != '_') {
      result += str[i];
    }
  }
  return result;
}
```

## Solution 2 😎

```javascript
function toCamelCase(str) {
  return str
    .replace(/-/g, '_')
    .split('_')
    .map((word, i) => (i > 0 ? word.toUpperCase()[0] + word.substr(1) : word))
    .join('');
}
```

## Video Solution 📹

[Convert string to camel case](https://edpuzzle.com/assignments/63c720c793ad2e411755f081/watch)
