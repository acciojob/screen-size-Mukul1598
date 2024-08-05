//your JS code here. If required.
// Function to update the size information
function updateSize() {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Find the <h1> element inside the div with id sizeInfo
    const sizeInfoElement = document.querySelector('#sizeInfo h1');

    // Update the text content of the <h1> element
    sizeInfoElement.textContent = `Width: ${width} and Height: ${height}`;
}

// Attach the updateSize function to the window resize event
window.addEventListener('resize', updateSize);

// Call updateSize initially to set the size when the page loads
updateSize();
