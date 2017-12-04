console.log('it is loaded');

class Node {
  constructor() {
    this.value = 0;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(newNumber) {
    console.log('add was called with value: ' + newNumber);

    var newNode = new Node();
    newNode.value = newNumber;

    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

var ourList = new LinkedList();

function addItem() {
  var stringInput = document.getElementById('item').value;
  var inputNumber = Number.parseInt(stringInput);

  ourList.add(inputNumber);
}
