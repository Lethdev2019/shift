# ShiftDB: Use JSON easier

## Introduction


ShiftDB is a tool that makes JSON data development easier, made by [ZDev1](https://repl.it/@ZDev1)

***

## Getting Started

First, install the npm package

```
$ npm install shift-db
```
Now, copy these lines

```js
const Shift = require('shift-db');
const database = new Shift('./jsondatafile.json');
```

So, here we've imported shift-db, and then declared our database variable, with this variable, you can get, delete, set.
First in the `Shift` constructor, you put the entry point, which it is the JSON file.

***


## Documentation

### 1. Get all the keys

To get all the keys that they're in the JSON file, just type:

```js
database.getAll();
```

### 2. Get a key

To get one key and it's value, just type:

```js
database.get('key');
```

### 3. Set a key

To set a key (or to create a key as well), just type:

```js
database.set('key', 'value');
```

### 4. Delete a key

To delete a key from the JSON file, just type:

```js
database.del('key');
```

### 5. Expire a key by seconds

With this function, you delete a key, after a {x} of seconds:

```js
database.expire('key', 3);
```

### 6. Multi set

You can multi-set keys.
With the first argument, you set the first key, and the second argument is the value, and the rest arguments, you add other keys, and it will store them in the JSON database with the value that you entered in the second argument.

```js
database.multiset('key', 'value', 'other', 'keys', 'wohoo', '!');
```

### 7. Rename a key

With this function, you can rename a key

```js
database.rename('key', 'newkey');
```
***

And that's it!
I hope you like it!
If you have feedback or more functions/methods ideas go [here](https://repl.it/talk/ask/I-need-more-methods-ideas/85306)


## - ZDev1, hosted with 💖