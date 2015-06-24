// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //test if obj is undefined --> returns undefined
  if (obj === undefined) {
  	return undefined;
  }

  //test if obj is a function --> returns undefined
  if (typeof obj === 'function') {
  	return undefined;
  }

  //test if obj is a number --> returns "number"
  if (typeof obj === 'number') {
  	return obj + "";
  } 

  //test if obj is a boolean --> returns "boolean"
  if (typeof obj === 'boolean') {
  	return obj + ""; 
  }

  //test if obj is equal to null --> returns "null"
  if (obj === null) {
  	return obj + "";
  }

  if (typeof obj === 'string') {
  	return "\"" + obj.toString() + "\"";
  }

  //test if obj is an array --> returns "[obj]" 
  if (Array.isArray(obj)) {
  	if (obj.length === 0) {
  		return "[]";
  	} else {
  		var res = '[';
        for (var i = 0; i < obj.length; i++) 
        	res += (i ? ',' : '') + stringifyJSON(obj[i]); 
  	}
  	return res + ']';
  }

  //test if obj is an object --> returns "{obj}"

  if (toString.call(obj) === '[object Object]') {
 	var tmp = [];
    for (var k in obj) {
    	if (obj.hasOwnProperty(k)) {
           	tmp.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k]));
           }
        }
        if (obj[k] === undefined) {
        	return "{}";
        }
    return '{' + tmp.join(',') + '}';
  }

};

/*
stringify will work on primitives
primitives include: numbers, boolean, strings, null, and undefined
functions and undefined will return undefined
if typeof obj is a number or boolean or === null, then it will return those into a string ("" + value)
*/