# Convert string to camel case

## Solution 1 😎

```javascript
function toCamelCase(str) {
  if (str === "") return "";
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}
```

## Solution 2 😎

```javascript
function toCamelCase(str) {
  if (str === "") return "";
  let words = str.split("");
  return words.reduce((acc, val, i) => {
    if (val === "-" || val === "_") {
      return acc + words[i + 1].toUpperCase();
    } else {
      return acc + val;
    }
  }, words[0]);
}
```
