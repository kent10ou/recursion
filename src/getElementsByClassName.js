// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your code here

var results = [];

var body = document.body

//look at current (body) level, search for target class, if yes then push
//if (body.getAttribute('class') === className)
if ($('body').hasClass(className)) {
  results.push(body);
  // console.log(results)
}

//search if current level has child node, if yes then dig deeper

function digDeep (val) {
  // debugger;
  	for (var i = 0; i < val.childNodes.length; i++) {
  		//check if childNode has getAttribute exists... use subgroup.getattribute


  		//if your current level has a class that matches param, then push val into array
  		// if (val.childNodes[i].getAttribute('class') === className) {
        // debugger;
      if ($(val.childNodes[i]).hasClass(className)) {
  			results.push(val.childNodes[i]);
  			console.log(results)

  		}

  		//if your current level has child nodes then recurse
  		if (val.childNodes[i].hasChildNodes) {
  			digDeep(val.childNodes[i]);

  			// console.log(val.childNodes.getAttribute('class'));
  		}
  	}
}

digDeep(body);
return results;
// console.log(results)
};



//find and returns all elements with the same class name under the <body> element  
/*
var getElementsByClassName = function (className) {
  var results = [];
  var scan = function (target) {
  if (_.contains(target.classList, className)) { results.push(target); }
    _.forEach(target.childNodes, scan);
  };
};
*/
