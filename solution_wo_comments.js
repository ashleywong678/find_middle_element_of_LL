class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function findMiddle(head) {
    if(!head) return null
    let fast  = head
    let slow = head
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow.value
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(new ListNode(1))) // 1
