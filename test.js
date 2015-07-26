var keyCase = require('./index'),
    test = require('tape');

//test objects
var obj = { 'a': 3, 'b': 4, 'c': 3 };
var objWithArray = { 'a': 3, 'b': 4, 'c': [] };
var nestedObject = { 'result': objWithArray , 'other': 't' };

//expected object results
var expectObj = { 'A': 3, 'B': 4, 'C': 3 };
var expectObjWithArray = { 'A': 3, 'B': 4, 'C': [] };
var expectNestedObject = { 'Result': expectObjWithArray , 'Other': 't' };

test('validate object is returned', function(t){
  var mapped = keyCase(obj);
  t.equals(typeof mapped, 'object');
  t.end();
});

test('validate object is expected default', function(t){
  var mapped = keyCase(obj);
  t.deepEquals(mapped, expectObj);
  t.end();
});

test('validate object that contains an array', function(t){
  var mapped = keyCase(objWithArray);
  t.deepEquals(mapped, expectObjWithArray);
  t.end();
});

test('validate object that contains an array and nested objects', function(t){
  var mapped = keyCase(nestedObject);
  t.deepEquals(mapped, expectNestedObject);
  t.end();
});
