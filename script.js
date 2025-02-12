// Select elements
const tellBtn = document.getElementById("tellBtn");
const secretBtn = document.getElementById("secretBtn");
const initialText = document.getElementById("initial-text");
const smileText = document.getElementById("share-smile-text");
const audio = document.getElementById("music");

tellBtn.addEventListener("click", function() {
    // Play music
    audio.play();

    // Display the longer text after "Tell Me" is clicked
    setTimeout(() => {
        initialText.innerHTML = "No matter the distance, my thoughts always find you. 💫<br>To the one who stays unknown to my heart, or perhaps the one who never wanted to be... No worries, I understand. Some things are not meant to be held, only admired from afar. Just know, even from a distance, my feelings for you are infinite.";
    }, 1000); // Delay text change for better effect

    // Hide the buttons after clicking "Tell Me"
    tellBtn.style.display = "none";
    secretBtn.style.display = "none";
});

secretBtn.addEventListener("click", function() {
    // Move the secret button when clicked
    secretBtn.style.position = "absolute";
    secretBtn.style.left = Math.random() * window.innerWidth + "px";
    secretBtn.style.top = Math.random() * window.innerHeight + "px";

    // Disable clicking further by changing its pointer events
    secretBtn.style.pointerEvents = "none";
});
