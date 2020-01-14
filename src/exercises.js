function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a.length < 1 || b.length < 1 ) {
    return false;
  }

  if ((a[0] === b[0]) || (a.pop() === b.pop())) {
    return true;
  }
  else {
    return false;
  }
};

function endsMeet(values, n) {
  let array = [];

  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
  }
  else {
    if (n === 0) {
      return values;
    }
      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          array.push(values[i]);
        }
      }
      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          array.push(values[values.length - i]);
        }
      }
      return array;
    }
  }

function difference(numbers) {

  if (numbers == undefined) {
    return undefined;
  }
 if (numbers < 1) {
      return undefined;
    }
if (numbers.some(isNaN)) {
  return undefined;
}
if (numbers != undefined || numbers >= 1 || !Number.isNaN(numbers)) {
    var largest = Math.max.apply(Math, numbers);
    var smallest = Math.min.apply(Math, numbers);
    let value = largest - smallest;
    return value;
  }
}

function max(number) {
  if (number == undefined || number.length < 3 || number.some(isNaN)) {
    return undefined;
  }
  else if (number.length % 2 == 0) {
    return undefined;
  }
  else {
    let last = number[number.length - 1];
    let middle = number[number.length - (Math.ceil(number.length / 2))];
    let first = number[0];
    let array = [first, middle, last]
    let big = Math.max.apply(null, array)
    return big;
  }

  }

function middle(values) {
  let array = []
  if (values == undefined || values.length < 3) {
    return array;
  }
  else if (values.length % 2 == 0) {
    return array;
  }
  else {
    let middle = values[values.length - (Math.ceil(values.length/2))]
    let anotherMiddle = values[(values.length - 1) - (Math.ceil(values.length / 2))]
    array.push(anotherMiddle, middle)
    return array;
  }
}

function increasing(numbers) {
    if (numbers == undefined || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 3) {
      return false;
    }
    else {
      for (let i = 1; i < numbers.length; i++) {
       if ((numbers[i - 1] + 1) === numbers[i]) {
         i++
         if ((numbers[i - 1] + 1) === numbers[i]) {
           return true;
           break;
         }
       }
      }
     }
     return false;
   }

function everywhere(values, x) {
  if (values == undefined || values < 1 || x == undefined) {
    return false;
  }
  else if (!values.includes(x)) {
    return false;
  }
  else {
        for (let check = values.indexOf(x); check < values.length; check++) {
          if (values[check] === values[check + 1] && values[check + 1] !== undefined) {
            return true;
            break;
          } else if (x === 0) {
            return false;
            break;
          } else if (values[check] === values[check + 2] && values[check + 2] !== undefined && values[check + 1] !== values[check]) {
            return true;
            break;
          } else if (values[check] === values[check + 3] && values[check + 3] !== undefined && (values[check + 1] && values[check + 2]) !== values[check + 3]) {
            return true;
            break;
          } else {
            return false;
            break;
          }
        }
    }
  }

function consecutive(numbers) {
  if (numbers == undefined || numbers < 3 || Number.isInteger(numbers) || numbers.some(isNaN)) {
    return false;
  }
  else {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i-1] + 1 && (numbers[i] % 2 == 0)) {
      i++
      if (numbers[i-1] + 1 && (numbers[i] % 2 == 0)) {
      return true;
      break;
     }
    }
   }
 }
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
