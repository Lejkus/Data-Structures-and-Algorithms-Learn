//dequeue (remove)
//enqueue (add)

class Queue {
    constructor(){
        this.items = []
    }
    
    enqueue(element){
        this.items.push(element) 
    }

    dequeue(){
        if (this.items.length == 0) return "No queue";
        return this.items.shift()
    }

    //check first in queue
    front(){
        if (this.items.length == 0) return "No queue";
        return this.items[0]
    }
}

let queue = new Queue();

queue.enqueue("Grzegorz")
queue.enqueue("Krzyś")
queue.enqueue("Jakub")
queue.enqueue("Maciej")

queue.dequeue()
console.log(queue.front());
console.log(queue.items);