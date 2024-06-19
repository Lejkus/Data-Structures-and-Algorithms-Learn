//dequeue (remove)
//enqueue (add)

class PriorityQuere{
    constructor(){
        this.items = []
    }
    
    enqueue(element,priority){
        let queueElement = { element, priority };
        
        let added = false
        for(let i=0; i<this.items.length; i++){
            if(queueElement.priority > this.items[i].priority){
                this.items.splice(i,0,queueElement)
                added = true
                break
            }
        }

        if(!added){
            this.items.push(queueElement)
        }
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

let priorityQuere = new PriorityQuere()

priorityQuere.enqueue("Obywatel",1)
priorityQuere.enqueue("Obywatel",1)
priorityQuere.enqueue("Policjant",2)
priorityQuere.enqueue("Obywatel",1)
priorityQuere.enqueue("Minister",4)
priorityQuere.enqueue("Obywatel",1)
priorityQuere.enqueue("Prezydent",5)

console.log(priorityQuere.items);