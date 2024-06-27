class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insertNode(root, newNode){              
        if(newNode.value < root.value){ 
            if(root.left === null){         //jeśli strzałka jest pusta wstawiamy
                root.left === newNode   
            }else{                          //jeśli nie wywołujemy rekurencje która "zejdzie" niżej w drzewku w lewo
                this.insertNode(root.left,newNode)
            }
        }else{                              //to samo tylko lewo
            if(root.right === null){         
                root.right === newNode   
            }else{                          
                this.insertNode(root.right,newNode)
            }
        }
    }

    insert(value){
        const newNode = new Node(value)

        if(this.isEmpty()){             //sprawdzamy czy jest pusta
            this.value = newNode        //jeśli tak ustawiamy nowego roota
        }else{
            insertNode(this.root,newNode)//wywołujemy funkcje wstawiania 
        }
    }

    
}