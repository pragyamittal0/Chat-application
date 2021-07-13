function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "how are you") {
        return "I'm good";
    }else if (input == "who are you?") {
        return "I'm a chatbot. Thanks for asking";
    } else {
        return "Try asking something else!";
    }
}