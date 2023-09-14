// Exercise #3
// Objective: Understand and Implement Asynchronous Code Using Async/Await.

// Instructions:

// Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
// Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
// Invoke the fetchPosts function and log the results.
// Starting Code:

async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        // add to webpage
      } catch (error) {
        console.log("ERROR ", error)
      }
}
// Call the function to fetch posts
fetchPosts();