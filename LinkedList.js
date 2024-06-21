//węzeł
class Node {
  constructor(value) {
    this.value = value;

    // adress
    this.next = null;
  }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    // Metoda dodająca nowy węzeł na końcu listy
    add(value) {
        let node = new Node(value);  // Tworzymy nowy węzeł

        //console.log(this.head);
        if (this.head === null) {    // Sprawdzamy, czy lista jest pusta
            this.head = node;        // Ustawiamy nowy węzeł jako głowę listy
        } else {
            let current = this.head;  // Rozpoczynamy od głowy listy
            while (current.next !== null) {    // Przechodzimy do końca listy: dopóki nie bedzie next = null
                console.log("current: ",current);
                console.log("next: ",current.next);
                
                current = current.next;
            }
            current.next = node;      // Dodajemy nowy węzeł na końcu listy
        }
        //console.log(JSON.stringify(this.head, null, 2));
        this.size++;  // Zwiększamy rozmiar listy
    }

    remove(index){
        if (index < 0 || index >= this.size) return null;
        
        let previous = null
        let current = this.head;    //początek to głowa listy
        
        if(index == 0){
            this.head = current.next //jeśli mamy usunąć pierwy index to zamieniamy głowe listy na następny 
        }else{
            for(let i=0; i<index; i++){
                previous = current     // Ustawiamy previous na bieżący węzeł
                current = current.next // Przechodzimy do następnego węzła
            }
            previous.next = current.next // Ustawiamy next węzła previous na węzeł za current, 
                                         // pomijając current czym tym samym go usuwamy np previous previous.next current current.next
                                         //                                                    B        C            C          D
        }                                //                                                             to --------------------->
        this.size--
        return current
    }
    
}

let list = new LinkedList();
list.add("A");
list.add('B');
list.add("C");
// list.add("D");
// list.add("E")
// list.add("G")

//console.log("usunięty: ",list.remove(2));

//console.log(JSON.stringify(list, null, 2))
