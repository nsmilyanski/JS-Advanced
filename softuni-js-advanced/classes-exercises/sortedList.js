class List {
    constructor() {
        this.array = [];
        this.size = 0;
    }
    add(element) {
        this.array.push(element);
        this.size++;
    }
    remove(index) {
        if(index < 0 || index >= this.size) {
            throw new Error("Invalid Index");
        }
        this.array.splice(index, 1);
        this.size--;
    }

    get(index) {
        if(index < 0 || index >= this.size) {
            throw new Error("Invalid Index");
        }
        return this.array[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
