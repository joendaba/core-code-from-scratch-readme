# "this" is a problem

## Solution 1 😎

```javascript
function spinWords(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}
```

## Solution 2 😎

```javascript
function spinWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
```

## Video Solution 📹

["this" is a problem](https://edpuzzle.com/assignments/63cec9a3eba44e4115b62fb5/watch)
