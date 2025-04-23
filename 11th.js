var swapPairs = function(head) {
    let nullpt = new ListNode(0);
    nullpt.next = head;
    let prev = nullpt;
    while (head !== null && head.next !== null) {
        let fst = head;
        let snd = head.next;
        prev.next = snd;
        fst.next = snd.next;
        snd.next = fst;
        prev = fst;
        head = fst.next;
    }
    return nullpt.next;
};