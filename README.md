# key-casing
Change casing of an Object key

##Install
```js
npm i key-casing --save
```

##Usage
```js
var keyCase = require('key-casing');

var obj = { 'a': 3, 'b': 3 };

keyCase(obj);

//{ 'A': 3, 'B': 3 }
```

##Use Case
Supports nested objects and flat objects to change casing of keys. Also,
supports array detection in case the key is an array.

Currently only supports changing the first character to a capital letter.

##License
MIT
