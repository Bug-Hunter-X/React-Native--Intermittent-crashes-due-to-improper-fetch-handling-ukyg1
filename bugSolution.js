The solution uses async/await for better readability and error handling.  It also includes a try-catch block to gracefully handle potential network errors. 
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Process the data
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
}
fetchData();
```