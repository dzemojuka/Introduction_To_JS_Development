let count = 0;

function increaseCount() {
    count++;// Increment the count by 1
    displayCount();// Display the count
    checkCountValue();// Check count value and display messages
}

function checkCountValue() {
    if (count===10) {
        alert("Your instagram post gained 10 followers! Congratulations!");
    } else if (count ===20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').textContent = count;// Display the count in the HTML
}

function resetCount() {
    count = 0; // Reset the count
    alert ("Your followers count has been reset to 0. Don't give up!");
    displayCount(); //Display count
}