# A wolf in sheep's clothing

## Solution 1 😎

```javascript
function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf('wolf');
  if (wolfPosition == queue.length - 1)
    return 'Pls go away and stop eating my sheep';
  const sheepNumber = queue.length - (wolfPosition + 1);
  return (
    'Oi! Sheep number ' + sheepNumber + '! You are about to be eaten by a wolf!'
  );
}
```

## Solution 2 😎

```javascript
function warnTheSheep(queue) {
  let wolf = queue.indexOf('wolf');
  return ++wolf === queue.length
    ? 'Pls go away and stop eating my sheep'
    : 'Oi! Sheep number ' +
        (queue.length - wolf) +
        '! You are about to be eaten by a wolf!';
}
```

## Video Solution 📹

[A wolf in sheep's clothing](https://edpuzzle.com/assignments/63c71f8b59da3f4143d583aa/watch)
