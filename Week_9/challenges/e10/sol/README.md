# String incrementer

## Solution 1 😎

```javascript
function incrementString(str) {
  let num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(str[i]))) {
      break;
    }
    num = str[i] + num;
  }
  if (num === "") {
    return str + "1";
  }
  let newNum = (parseInt(num) + 1).toString();
  while (newNum.length < num.length) {
    newNum = "0" + newNum;
  }
  return str.slice(0, str.length - num.length) + newNum;
}
```

## Solution 2 😎

```javascript
function incrementString(str) {
  let match = str.match(/\d+$/);
  if (!match) {
    return str + "1";
  }
  let num = match[0];
  let newNum = (parseInt(num) + 1).toString();
  while (newNum.length < num.length) {
    newNum = "0" + newNum;
  }
  return str.replace(/\d+$/, newNum);
}
```
