// Time Complexity : O(1)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
class StackArray {
    // The logic applied is based on what's provided in constructor()
    constructor() {
        //Initialize your constructor
        this.MAX = 1000;
        this.top = -1;
        this.a = new Array(this.MAX); // This will store the MAX size
    }

    isEmpty() {
        // this.top will keep reference of number of stack elements
        return this.top === -1
    }

    push(x) {
        //Check for stack Overflow
        if (this.top >= this.MAX) {
            console.error("Stack Overflow: Stack is full")
            return false
        }
        // this.top is assigned -1 initially. So when push to an array it has to 0
        this.top++
        // push element at specific top value
        this.a[this.top] = x
        return true
    }

    pop() {
        //If empty return 0 and print " Stack Underflow"
        if (this.isEmpty()) {
            console.error("Stack Underflow: Stack is empty")
            return 0
        }

        // remove element from the top
        const splicedArray = this.a.splice(this.top, 1)
        this.top--
        return splicedArray
    }

    peek() {
        // If empty return 0
        if (this.isEmpty()) {
            console.error("Stack Underflow: Stack is empty")
            return 0
        }
        // current top value
        return this.a[this.top]
    }
}

let s = new StackArray(10);
s.push(10);
s.push(20);
s.push(30);
console.log(s)
console.log(s.pop() + " Popped from stack");
