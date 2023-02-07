# The Hashtag Generator

## Solution 1 😎

```javascript
function generateHashtag(str) {
  if (str.length === 0) return false;
  let words = str.split(" ");
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  let hashtag = "#" + words.join("");
  if (hashtag.length > 140) return false;
  return hashtag;
}
```

## Solution 2 😎

```javascript
function generateHashtag(str) {
  if (str.length === 0) return false;
  let hashtag = str
    .split(" ")
    .reduce(
      (acc, val) => (acc += val.charAt(0).toUpperCase() + val.slice(1)),
      "#"
    );
  if (hashtag.length > 140) return false;
  return hashtag;
}
```
