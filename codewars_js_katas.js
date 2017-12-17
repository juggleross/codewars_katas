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
