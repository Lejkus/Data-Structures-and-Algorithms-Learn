class Stack {
    constructor(){
        this.items = [];
    }

    //add at the top
    push(element){
        this.items.push(element)
    }

    //delete from top
    pop(){
        if(this.items.length == 0 ) return "Empty stack";
        return this.items.pop();
    }

    //show the top element
    peek(){
        if(this.items.length == 0 ) return "Empty stack";
        return this.items[this.items.length - 1]
    }

    search(element){
        if(this.items.length == 0 ) return "Empty stack";
        for(let i = stack.items.length - 1; i >=0; i--){
            if(stack.items[i]==element){
                return i
            }
        }
        return "not found"
    }
}

let stack = new Stack();

stack.push("Dune");
stack.push("Witcher")
stack.push("Metro");
stack.push("Licanus")

console.clear();

// for (let i = stack.items.length - 1; i >= 0 ; i--) {
//     const element = stack.items[i];
    
//     console.log(element);
// }

console.log(stack.search("Metro"));
console.log("peek",stack.peek());
console.log('pop',stack.pop());