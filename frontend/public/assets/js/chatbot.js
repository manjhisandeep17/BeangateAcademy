// Define the responses for the chatbot
const responses = {
    "hi": "Hello, how can I help you?",
    "product": "We offer a variety of products for your IT needs. Which product are you interested in?",
    "support": "Our technical support team is available 24/7. What seems to be the problem?",
    "thanks": "You're welcome! Let me know if you need any further assistance.",
    "default": "I'm sorry, I don't understand. Can you please rephrase your question?"
}

// Define a function to generate a chatbot response
function generateResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    if (userInput.includes("hi") || userInput.includes("hello")) {
        return responses["hi"];
    } else if (userInput.includes("product")) {
        return responses["product"];
    } else if (userInput.includes("support")) {
        return responses["support"];
    } else if (userInput.includes("thanks") || userInput.includes("thank you")) {
        return responses["thanks"];
    } else {
        return responses["default"];
    }
}

// Define a function to display the chatbot's response
function displayResponse(response) {
    const chatbotMessages = document.getElementById("chatbot-messages");
    const responseElement = document.createElement("div");
    responseElement.classList.add("chatbot-message");
    responseElement.innerText = response;
    chatbotMessages.appendChild(responseElement);
}

// Define a function to handle user input
function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        displayResponse(userInput);
        document.getElementById("user-input").value = "";
        setTimeout(function() {
            const chatbotResponse = generateResponse(userInput);
            displayResponse(chatbotResponse);
        }, 1000);
    }
}

// Add event listener to send button
document.getElementById("send-btn").addEventListener("click", handleUserInput);

// Add event listener to input field for "Enter" key press
document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        handleUserInput();
    }
});
