// Time Complexity : O(1)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
class StackAsLinkedList {
    static stackNode = class {
        constructor(d) {
            //Constructor here
            this.data = d;
            this.next = null;
        }
    }

    constructor() {
        this.MAX = 1000; // This is assumed because the call does not pass any MAX size
        this.top = null; // points to head
        this.size = 0;
    }

    isEmpty() {
        //Write your code here for the condition if stack is empty.
        return this.size === 0
    }

    push(data) {
        //Write code to push data to the stack.
        if (this.size >= this.MAX) {
            console.error("Stack Overflow: Stack is full")
            return false
        }
        const newStackNode = new StackAsLinkedList.stackNode(data)
        newStackNode.next = this.top
        this.top = newStackNode
        this.size++
        return true
    }

    pop() {
        //If Stack Empty Return 0 and print "Stack Underflow"
        if (this.isEmpty()) {
            console.error("Stack Underflow: Stack is empty")
            return 0
        }
        //Write code to pop the topmost element of stack.
        const poppedValue = this.top.data
        this.top = this.top.next
        this.size--
        //Also return the popped element
        return poppedValue
    }

    peek() {
        //Write code to just return the topmost element without removing it.
        if (this.isEmpty()) {
            console.error("Stack Underflow: Stack is empty")
            return 0
        }
        return this.top.data
    }
}
//Driver code
const sll = new StackAsLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
console.log(sll.pop() + " popped from stack");
console.log("Top element is " + sll.peek());
