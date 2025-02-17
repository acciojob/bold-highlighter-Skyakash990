function highlight() {
    let strongElements = document.querySelectorAll('strong');
    strongElements.forEach(element => {
        element.style.color = "rgb(0, 128, 0)"; // Green color
    });
}

function return_normal() {
    let strongElements = document.querySelectorAll('strong');
    strongElements.forEach(element => {
        element.style.color = "rgb(0, 0, 0)"; // Black color
    });
} // <-- Closing brace added
