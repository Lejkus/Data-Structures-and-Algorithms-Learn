const tab = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];

const set = new Set(tab);
console.log(set); //{1, 2, 3, 4, 5}

const uniqueTab = [...set];
console.log(uniqueTab); //[1, 2, 3, 4, 5]


const set2 = new Set("kot");
console.log(set) //Set {"k", "o", "t"}
set2.add("k");
set2.add("k");
set2.add("t");
set2.add("y");
console.log(set2);