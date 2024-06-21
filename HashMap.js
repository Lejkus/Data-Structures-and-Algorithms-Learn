class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    _hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total+= key.charCodeAt(i)
        }
        //to make sure total is from 0 to size - 1 
        return total % this.size
    }

    set(key,value){
        const index = this._hash(key)
        this.table[index] = value
    }
    
    get(key){
        const index = this._hash(key)
        return(this.table[index]);
    }

    remove(key){
        const index = this._hash(key)
        this.table[index] = undefined
    }

    display(){
        console.clear()
        for(let i = 0; i < this.size; i++){
            console.log(this.table[i]);
        }
    }

}

const table = new HashTable(10)

table.set("sp",'Spain')
table.set("fr","France")
table.set('pl','Poland')
table.set('uk','Ukraine')
table.set('ru','Russia')
table.set('nt','Netherland') //france
table.set('br','Brasil')
table.set('ge','Germany') //ukraine

table.display()

//console.log(table.get('pl'));
