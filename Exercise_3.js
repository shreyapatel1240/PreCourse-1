// Time Complexity : O(1)/O(n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
// Java program to implement
// a Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // Linked list Node.
    static Node = class {
        constructor(d) {
            this.data = d
            this.next = null
        }
    }

    // Method to insert a new node
    insert(list, data) {
        // Create a new node with given data
        let newNode = new SinglyLinkedList.Node(data)
        // If the Linked List is empty,
        // then make the new node as head
        if (!this.head) {
            newNode.next = this.head
            list.head = newNode
            list.tail = newNode
        }

        // Else traverse till the last node
        else {
            list.tail.next = newNode
            list.tail = newNode
        }
        // and insert the new_node there

        // Insert the new_node at last node
        // Return the list by head
        list.length++
    }

    // Method to print the LinkedList.
    printList(list) {
        // Traverse through the LinkedList
        let current = list.head
        while (current) {
            // Print the data at current node​
            console.log(current.data)
            // Go to next node
            current = current.next
        }
        // Another approach
        // const values = []
        // while(current) {
        //     values.push(current.data)
        //     current = current.next
        // }
        // console.log(values.join(" -> "))
    }
}
// Driver code
/* Start with the empty list. */
let list = new SinglyLinkedList()

// ******INSERTION******
// Insert the values
list.insert(list, 1)
list.insert(list, 2)
list.insert(list, 3)
list.insert(list, 4)
// Print the LinkedList
list.printList(list)
