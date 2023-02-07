# Encrypt this!

## Solution 😎

```javascript
function encrypt(word) {
  if (word.length === 1) return word.charCodeAt(0);
  const charBackup = word[1];
  word = word.replace(word[0], word.charCodeAt(0));
  word = word.replace(charBackup, word[word.length - 1]);
  word = word.replace(/\w$/, charBackup);
  return word;
}

var encryptThis = function (text) {
  const textArray = text.split(' ');
  let result = '';
  textArray.forEach((w) => {
    result = result + ' ' + encrypt(w);
  });
  return result.trim();
};
```

## Video Solution 📹

[Encrypt this!](https://edpuzzle.com/assignments/63c72008f9773d4133d40021/watch)
