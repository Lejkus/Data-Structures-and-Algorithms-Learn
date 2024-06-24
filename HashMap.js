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

        const bucket = this.table[index]    //sprawdzamy czy coś już jest w tym 'slocie'

        if(!bucket){
            this.table[index] = [[key,value]]   //jeśli nie , tworzymy nowy slot
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key) //sprawdzamy czy istnieje taki key

            if(sameKeyItem){
                sameKeyItem[1] = value     //jeśli istnieje zamieniamy wartość na nową
            }else{
                bucket.push([key,value])   // jeśli nie to dodajemy 
            }
            
        }
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
        //console.clear()
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
//table.set('br','Brasil')
//table.set('ge','Germany') //ukraine
table.set('pl','Palermo')


//console.log(table.get('pl'));

table.display()

//console.log(table.get('pl'));
