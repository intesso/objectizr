var test = require('tape');
var equal = require('object-equal');
var objectizr = require('./index');

var obj;

test('should return an object from string with `true` values', function(t){
  obj = objectizr('edit,copy,rename,delete', true); // comma separated string
  t.ok(equal(obj,{edit:true, copy:true, rename:true, delete:true}));
  t.end();
});

test('should return an object from array with `inline` string values', function(t){
  obj = objectizr(['edit','copy','rename','delete'], 'inline'); // array
  t.ok(equal(obj,{edit:'inline', copy:'inline', rename:'inline', delete:'inline'}));
  t.end();
});

test('should return an object from string with {number-name} values', function(t){
  obj = objectizr('edit,copy,rename,delete', function(value, i, arr){
    return (i+1) + '-' + value;
  });
  t.ok(equal(obj,{edit:'1-edit', copy:'2-copy', rename:'3-rename', delete:'4-delete'}));
  t.end();
});