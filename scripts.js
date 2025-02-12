let tellButton = document.getElementById('tellButton');
let secretButton = document.getElementById('secretButton');
let music = document.getElementById('music');
let petals = document.getElementById('petals');
let initialText = document.getElementById('initial-text');
let buttons = document.getElementById('buttons');

tellButton.addEventListener('click', function() {
    music.play(); // Play music when Tell Me is clicked
    startPetalShower(); // Start the flower petal shower
    initialText.innerHTML = ''; // Clear initial text

    // Long Text after Tell Me click (2-3 mins to read)
    let longText = `
        No Matter the Distance, My Thoughts Always Find You. 💫<br>
        To the One Who Stays Unknown to My Heart, or Perhaps the One Who Never Wanted to Be… No Worries, I Understand.<br>
        Some Things Are Not Meant to Be Held, Only Admired from Afar. Just Know, Even From a Distance, My Heart Still Feels For You. 💖<br>
        I May Never Be Able to Tell You How Much Your Smile Brightens My Day or How Your Laugh Echoes in My Mind. But I Want You to Know, Even in My Silence, I Admire Everything About You.<br>
        There Are Moments When Words Can't Do Justice to How I Feel, But I Hope My Actions and Thoughts Can Speak for Me.<br>
        So Many Times, I've Wanted to Tell You What You Mean to Me, But There Are Things That Can't Be Said in Words—Things That Only the Heart Can Understand.<br>
        And Even Though We Might Be Separated by Time and Space, Just Thinking About You Feels Like the Sun Breaking Through the Clouds, Lighting Up My Life.<br>
        You May Not Know This, But Your Presence in My Life Is Like a Light That Never Fades. I Don’t Know What Tomorrow Holds, But I Know That My Thoughts Will Always Be With You, No Matter Where You Are.<br>
        Even If We Never Cross Paths in This Lifetime, Know That You Are In My Heart, Always. The Distance May Separate Us, But It Will Never Diminish the Care I Have for You. 💖
    `;
    typeText(longText); // Type the long text letter by letter
    buttons.style.display = 'none'; // Hide the buttons after Tell Me is clicked
});

secretButton.addEventListener('click', function() {
    secretButton.style.transform = 'translateX(20px)'; // Move the button on click
    secretButton.classList.add('clicked'); // Make it appear like it's clicked
    secretButton.disabled = true; // Disable it to prevent multiple clicks
});

function startPetalShower() {
    petals.style.display = 'block'; // Make petals visible
    let numPetals = 100;
    for (let i = 0; i < numPetals; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        petals.appendChild(petal);
        petal.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`; // Randomize fall speed
        petal.style.left = `${Math.random() * 100}%`; // Randomize left position
        petal.style.animationDelay = `${Math.random() * 5}s`; // Randomize delay
    }
}

function typeText(text) {
    let index = 0;
    let speed = 40; // Adjust the typing speed (ms between each letter)
    let typingEffect = setInterval(function() {
        if (index < text.length) {
            initialText.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typingEffect);
        }
    }, speed);
}
