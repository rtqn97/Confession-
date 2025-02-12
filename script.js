/* General Styles */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f1f1f1;
}

#background {
    background-color: #ffebf1;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}

/* Button Styles */
button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

button:hover {
    transform: scale(1.1);
}

/* Flower Petal Shower Effect */
@keyframes petals {
    0% {
        transform: translateY(-100px) rotate(0deg);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}

.petal {
    position: absolute;
    top: -50px;
    left: 50%;
    z-index: -1;
    pointer-events: none;
    animation: petals 5s infinite ease-in;
    width: 20px;
    height: 20px;
    background-color: pink;
    border-radius: 50%;
    opacity: 0.6;
      }
