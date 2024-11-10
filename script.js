
const btnElement = document.querySelector(".btn")
const stopElement = document.querySelector(".btn2")
const textElement = document.querySelector("h1")
const clickElement = document.querySelector(".btn3")
const deleteElement = document.querySelector(".btn4")
const styleElement = document.querySelector(".btn5")

let timeoutId;
let timeintervalId;

// Array to store references to all dynamically created <h2> elements
let h2Elements = [];

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg'
];

// Function to generate a random image URL
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

btnElement.addEventListener("click", () => {
    timeoutId = setTimeout(() => {
        console.log("you click on button")
    }, 1000);
    console.log("Sunil")
})

stopElement.addEventListener("click", () => {
    clearTimeout(timeoutId)
    clearInterval(timeintervalId)
})

clickElement.addEventListener("click", () => {
    timeintervalId = setInterval(() => {
        const newH2 = document.createElement("h2");
        newH2.className = "heading";
        newH2.innerText = "Sunil";
        textElement.appendChild(newH2);

        // Add the new <h2> element to the array
        h2Elements.push(newH2);
    }, 1000);
})

deleteElement.addEventListener("click", () => {
    textElement.innerHTML = ""
    clearInterval(timeintervalId)
    h2Elements = []; // Clear the array of <h2> elements
})

// Add styling to all <h2> elements when "Style" button is clicked
styleElement.addEventListener("click", () => {
    h2Elements.forEach(h2 => {
        h2.classList.add("style");
        // h2.style.fontSize="40px"
        h2.style.backgroundImage = `url(${getRandomImage()})`;
    });
    // clearInterval(timeintervalId)
});

