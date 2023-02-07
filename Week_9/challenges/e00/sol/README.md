# "this" is a problem

## Solution 1 😎

```javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
```

## Solution 2 😎

```javascript
function NameMe(first, last) {
  return {
    firstName: first,
    lastName: last,
    name: `${first} ${last}`,
  };
}
```

## Video Solution 📹

["this" is a problem](https://edpuzzle.com/assignments/63cec9a3eba44e4115b62fb5/watch)
