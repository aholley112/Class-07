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
	  this.observers.push(observer);
	}
  
	removeObserver(observer) {
	  this.observers = this.observers.filter(obs => obs !== observer);
	}
  
	notifyObservers(data) {
	  this.observers.forEach(observer => {
		observer.update(data);
	  });
	}
  
	async fetchAndNotify() {
	  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  
	  try {
		const response = await fetch(url);
		if (!response.ok) {
		  throw new Error(`Failed to fetch data. Status: ${response.status}`);
		}
		const data = await response.json();
		this.notifyObservers(data);
	  } catch (error) {
		this.notifyObservers(error.message);
	  }
	}
  }
  
  class Observer {
	update(data) {
	  if (typeof data === 'string') {
	  } else if (Array.isArray(data) && data.length > 0) {
		const [firstPost] = data;
		console.log('First Post Title:', firstPost.title);
	  }
	}
  }
  
  // Instantiate the Subject
  const subject = new Subject();
  
  // Add multiple observers
  const observer1 = new Observer();
  const observer2 = new Observer();
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // Call fetchAndNotify
  subject.fetchAndNotify();
  