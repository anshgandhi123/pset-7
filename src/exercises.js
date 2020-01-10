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
    else {
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
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
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
