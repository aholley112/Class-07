// Exercise #4

// Objective: Asynchronous Observer with Destructuring
// Instructions:
// Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
// The data passed to each observer's update method should be the list of posts fetched.
// Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
// Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
// Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
        this.observers.push(observer);
	}
