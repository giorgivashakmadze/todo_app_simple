// Add event listener to the submit button with the id 'submit-button'
document.getElementById('submit-button').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the input box and list container elements
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    // Check if the input box is empty
    if (inputBox.value === '') {
        alert('Complete The Field!');
    } else {
        // Create a new list item element
        let li = document.createElement('li');

        // Set the innerHTML of the list item to the value of the input box
        li.innerHTML = inputBox.value;

        // Append the created list item to the list container
        listContainer.appendChild(li);

        // Create a new span element
        let span = document.createElement('span');

        // Set the innerHTML of the span to the Unicode character '×' (multiplication sign)
        span.innerHTML = "\u00d7";

        // Append the span to the created list item
        li.appendChild(span);

        // Add a click event listener to the span for removing the task
        span.addEventListener('click', function() {
            li.remove(); // Remove the corresponding list item when the '×' button is clicked
        });

        // Clear the input box value after adding the task
        inputBox.value = '';
    }
}
document.getElementById('list-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});
