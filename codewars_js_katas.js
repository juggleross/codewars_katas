// new with apply
// JavaScript:

function construct(Class) {
  return new (Function.prototype.bind.apply(Class, arguments));
}

// Extract Nested Object Reference
// JavaScript:

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  let name_arr = string.split(".");
  let result = createArrayPath(name_arr, this);
  return result;
}

function createArrayPath(name_arr, main_obj) {
  console.log(main_obj)
  let obj_level = main_obj[name_arr[0]];

  for(let i = 1; i < name_arr.length; i++) {
    if(obj_level[name_arr[i]]) {
      obj_level = obj_level[name_arr[i]];
    } else {
      if(typeof obj_level !== 'string') obj_level = undefined;
      break;
    }
  }
  return obj_level;
}

// SantaClausable Interface
// JavaScript:

function isSantaClausable(obj) {
  if(typeof obj.sayHoHoHo === "function" && typeof obj.distributeGifts === "function" && typeof obj.goDownTheChimney === "function") {
    return true;
  } else {
    return false;
  }
}

// Convert a linked list to a string
// JavaScript:

function stringify(list) {
  if(list === null) return 'null';
  if(list.next === null) return `${list.data} -> null`;
  
  let final_str = '';
  let next_node = list.next;
  let current_data = list.data;

  do {   
      final_str += `${current_data} -> `;   
      current_data = next_node.data;

     if(next_node.next) {
       next_node = next_node.next;
     } else {
       final_str += `${current_data} -> `;
       break;  
     }
  } while(true)

  final_str += 'null';

  return final_str;
}

// Using closures to share class state
// JavaScript:

// Let's make a Cat constructor!
var Cat = (function() {
  let counter = 0;
  let fullWeight = 0;
  let catsArray = [];

  return function Cat(name, weight) {
    if(!name || !weight) throw true;

    Object.defineProperty(this, "weight", {get : function(){ return weight; },
                               set : function(newValue){ weight = newValue; }
    });

    this.name = name;
    this.weight = weight;

    counter += 1;
    fullWeight += this.weight;
    catsArray.push(this);

    Cat.catsArray = catsArray;
    Cat.counter = counter;
    Cat.fullWeight = fullWeight;
  }
})();

Cat.averageWeight = function(){
  let new_weight = 0;
  Cat.catsArray.forEach(function(item, i, arr) {
    new_weight += item.weight;
  });
  return new_weight / Cat.counter;
}


// Function composition
// JavaScript:

let compose = (...functions) => (value) => functions.reduceRight((f,g) => g(f), value) 

// Function Composition
// JavaScript:

function compose(f,g) {
  return function(...a) {
    return f(g(...a));
  }
}

// Handshake problem
// JavaScript:

function getParticipants(handshakes){
  if(handshakes === 0) return 1;
  
  for(let n = 1; n <= handshakes + 1; n++) {
    if( handshakes <= n * (n - 1) / 2) {
      return n;
    }
  }
}

// Mutual Recursion
// JavaScript:

function F(n) {
  return n === 0 ? 1 : n - M(F(n-1));
}

function M(n) { 
  return n === 0 ? 0 : n - F(M(n-1));
}

// Array Deep Count
// JavaScript:

function deepCount(a){
  let final_count = a.length;
  a.forEach(function(item, i, arr) {
    if(is_array(item)) {
      final_count += deepCount(item);
    }
  });
  
  return final_count;
}

function is_array(item) {
  return item instanceof Array;
}

// Calculating with Functions
// JavaScript:

function zero(operation) {
  return result(0, operation);
}
function one(operation) {
  return result(1, operation);
}
function two(operation) {
  return result(2, operation);
}
function three(operation) {
  return result(3, operation);
}
function four(operation) {
  return result(4, operation);
}
function five(operation) {
  return result(5, operation);
}
function six(operation) {
  return result(6, operation);
}
function seven(operation) {
  return result(7, operation);
}
function eight(operation) {
  return result(8, operation);
}
function nine(operation) {
  return result(9, operation);
}

function plus(second_arg) {
  return function(first_arg) {
    return first_arg + second_arg;
  }
}
function minus(second_arg) {
  return function(first_arg) {
    return first_arg - second_arg;
  }
}
function times(second_arg) {
  return function(first_arg) {
    return first_arg * second_arg;
  }
}
function dividedBy(second_arg) {
  return function(first_arg) {
    return first_arg / second_arg;
  }
}

function result(num, operation) {
  if(!operation) return num;
  return operation(num);
}

// Transportation on vacation
// JavaScript:

function rentalCarCost(d) {
  if( d < 3) {
    return d * 40;
  } else if( d >= 3 && d < 7) {
    return d * 40 - 20;
  } else {
    return d * 40 - 50;
  }
}

// A Chain adding function
// JavaScript:

function add(n){
  function myFunction(x) { return add(n + x); }
  myFunction.toString = () => { return n };
  return myFunction;
}

// Can you keep a secret?
// JavaScript:

function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(value) {
      secret = value;
    }
  }
}

// A function within a function
// JavaScript:

// return a function that returns n
function always (n) {
  return function() {
    return n;
  }
}

// Closures and Scopes
// JavaScript:

function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}

// Prefill an Array
// JavaScript:

function prefill(n, v) {
  let number = parseInt(n);
  if(isNaN(number) || n < 0 || n % 1 !== 0) throw new TypeError(n + " is invalid");
  if(n == 0) return [];
  
  let result = new Array(n).fill('')

  result = result.map((val) => { return v; });

  return result;
}

// Partition On
// JavaScript:

function partitionOn(pred, items) {
  let refused_arr = [];
  let accepted_arr = [];

  accepted_arr = items.filter(pred);

  refused_arr = items.filter(function(item){
    return accepted_arr.indexOf(item) === -1;
  });
  
  items.length = 0;
  [].push.apply(items, refused_arr);
  [].push.apply(items, accepted_arr);
  
  return refused_arr.length;
}

// Head, Tail, Init and Last
// JavaScript:

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, arr.length-1);
}

function last(arr) {
  return arr[arr.length-1];
}

// Is a number prime?
// JavaScript:


function isPrime(num) {
  if(num <= 1) return false;

  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;

  return true;
}

// Word Count
// JavaScript:

function countWords(str) {
  str = str.replace(/\s+/g, ' ').trim()
  
  if(str.length === 0) {
    return 0;
  }
  return str.split(' ').length
}


// Get the Middle Character
// JavaScript:

function getMiddle(s)
{
  var length = s.length / 2;
  var odd_length =  Math.trunc(length);
  var even_length =  Math.trunc(length);
  var str_arr = s.split('');
  
  if(s.length % 2 === 0) {
    return str_arr[even_length - 1] + str_arr[even_length]
  } else {
    return str_arr[odd_length]
  }
}


// Printing Array elements with Comma delimiters
// JavaScript:

function printArray(array){
  return array.join(',');
}


// Basic Mathematical Operations
// JavaScript:

function basicOp(operation, value1, value2)
{
  switch (operation) {
  case '+':
    return value1 + value2;
    break;
  case '-':
    return value1 - value2;
    break;
  case '*':
    return value1 * value2;
    break;
  case '/':
    return value1 / value2;
    break;
  }
}

// Opposite number
// JavaScript:

function opposite(number) {
  return -number;
}
