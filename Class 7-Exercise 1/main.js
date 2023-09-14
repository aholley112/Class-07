// Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.
// Starting Code:

// exercise 1 (and 4)
class Subject {
    constructor() {
        this.observers = [];
    }

    // add methods for add, remove, and notify
    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data) {
        this.observers.forEach((observer) => observer.update(data));
    }

}
//Not finished