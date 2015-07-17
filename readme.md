# objectizr

Simple function to turn a comma separated String or Array into an Object.

## install

```bash
npm install --save objectizr
```

## usage

```js
var objectizr = require('objectizr');
var obj;

obj = objectizr('edit,copy,rename,delete', true); // comma separated string
// -> {edit:true, copy:true, rename:true, delete:true}

obj = objectizr(['edit','copy','rename','delete'], 'inline'); // array
// -> {edit:'inline', copy:'inline', rename:'inline', delete:'inline'}

obj = objectizr('edit,copy,rename,delete', function(value, i, arr){
  return (i+1) + '-' + value;
});
// -> {edit:'1-edit', copy:'2-copy', rename:'3-rename', delete:'4-delete'}

```

## license
MIT