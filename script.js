function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you! what can i help you with?";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Razor from Need for Speed, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the chicken cross the road? To get to the other side.";
    } else if (input.includes("experience")) {
        output = "I have 2 Years experience working as an IT intern.";  
    } else if (input.includes("thank you") || input.includes("thanks")) {
        output = "You're welcome! I'm glad to help.";
    } else if (input.includes("what time is it")) {
        output = `I'm not sure, but you can check your device's clock!`;
    } else if (input.includes("favorite color")) {
        output = "I don't have a favorite color, but I think all colors are beautiful!";
    } else if (input.includes("where are you from")) {
        output = "I exist in the digital world, so I don't have a physical location.";
    } else if (input.includes("help me")) {
        output = "Sure! What do you need help with?";
    } else if (input.includes("news") || input.includes("latest news")) {
        output = "I don't have real-time updates, but you can check reliable news websites.";
    } else if (input.includes("hobbies") || input.includes("interests")) {
        output = "I enjoy chatting with people and learning new things!";
    } else if (input.includes("goodbye") || input.includes("see you later")) {
        output = "Goodbye! Have a great day!";        
    } else if (input.includes("what's the weather like") || input.includes("weather")) {
        output = "I can't check the weather, but you can find updates on a weather website or app.";
    } else if (input.includes("can you sing") || input.includes("sing a song")) {
        output = "I can't sing, but I can share lyrics or song recommendations!";
    } else if (input.includes("favorite movie")) {
        output = "I don't watch movies, but I can suggest popular ones if you're interested!";
    } else if (input.includes("what do you think about AI")) {
        output = "AI has the potential to change many aspects of our lives, for better or worse.";
    } else if (input.includes("tell me a fact")) {
        output = "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!";
    } else if (input.includes("do you have a pet")) {
        output = "I don't have pets, but I think they're wonderful companions!";
    } else if (input.includes("favorite food")) {
        output = "I don't eat, but I've heard pizza and sushi are popular choices!";
    } else if (input.includes("motivation") || input.includes("inspiration")) {
        output = "Believe in yourself and keep pushing forward! Every step counts.";
    } else if(input.includes("information about you")) {
        output = "Please go to the top of the page to navigate to the about page for more information";
    } else if(input.includes("skills")){
        output = "Tumisang is skilled in a variety of areas, for specific technical skills, please download the CV in the about page for your persual"
    }
        else {
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