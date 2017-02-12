class Node {
  constructor(data, type) {
    this.data = data;
    this.type = type;
    this.next = null;
  }
}

class AnimalShelter() {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(val, type) {
    let curr = new Node(val, type);

    if (!this.first) {
      first = curr;
      first = last;
    }
    this.last.next = curr;
    this.last = curr;
  }

  dequeueAny() {
    if (this.first === null) {
      throw new Error("Aniaml Shelter is empty. No animals left :)");
    }
    let animal = { this.first.data, this.first.type };
    this.first = this.first.next;
    if (this.first == null) {
      this.last = this.first;
    }
    return animal;
  }
  dequeueDog() {
    if (this.first === null) {
      throw new Error("Aniaml Shelter is empty. No animals left :)");
    }

    let curr = this.first;

    while (curr.next) {
      if (curr.next.type === 'Dog') {
        break;
      }
      curr = curr.next 
    }

    if (!curr || !curr.next) {
      throw new Error("Could not found any dogs");
    }
    let animal = curr.next.data;
    curr.next = curr.next.next;

  }
  dequeueCat() {
    if (this.first === null) {
      throw new Error("Aniaml Shelter is empty. No animals left :)");
    }

  }
}