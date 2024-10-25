document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value;
    
    if (userMessage.trim() === '') return;

    // Display user message
    displayMessage(userMessage, 'user-message');
    inputField.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot-message');
    }, 1000);
}

function displayMessage(message, className) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${className}`;
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Simple responses
    const responses = {
        'hello': 'Hi there!',
        'how are you?': 'I am just a bot, but thanks for asking!',
        'what is your name?': 'I am a simple chatbot.',
        'bye': 'Goodbye!',
    };

    return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}
