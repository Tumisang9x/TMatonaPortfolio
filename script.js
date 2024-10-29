function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Tumi, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the chicken cross the road? To get to the other side.";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    
    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("user"); // Use the user class
    userMessage.innerHTML = message;
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot"); // Use the bot class
    botMessage.innerHTML = message;
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
}

function sendMessage() {
    let input = document.getElementById("input").value; // Ensure this ID is correct
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = ""; // Clear input field
    }
}

document.getElementById("toggleChat").addEventListener("click", function() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = (chatbot.style.display === "block") ? "none" : "block";
});

// Add exit functionality
document.getElementById("exitChat").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "none";
});

// Add event listener for the send button
document.getElementById("send").addEventListener("click", sendMessage); // Ensure this ID is correct

// Add keypress event listener for input
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Use event.key for better readability
        sendMessage();
    }
});