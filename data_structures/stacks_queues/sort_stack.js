function sortStack(stack) {
  let temp = [];

  while(stack.length > 0) {
    let val = stack.pop();
    while (temp.length > 0 && temp[temp.length - 1] > val) {
      stack.push(temp.pop());
    }
    temp.push(val);
  }

  while(temp.length) {
    stack.push(temp.pop());
  }
}

let stack = [4, 5, 3, 12, 1, 6];

sortStack(stack)
console.log(stack);

let stack2 = [2, 1];
sortStack(stack2);
console.log(stack2);

let stack3= [1];
sortStack(stack3);
console.log(stack3);

let stack4 = [1, 4, 5, 1];
sortStack(stack4);
console.log(stack4);