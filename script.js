// reference all conversations into one NodeList
const conversations = document.querySelectorAll('#conversation');

conversations.forEach(element => {
    element.addEventListener('click', () => {
        const textElement = element.lastElementChild;
        const chatSection = document.querySelector('#chat');

        // generate random number between 1 and 255
        const getRandomNumber = () => {
            return Math.round(Math.random() * 255);
        }

        // set background color of chat section with rgba() format
        chatSection.style.backgroundColor = `rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},0.5)`

        // change unread conversations to read
        if(textElement.classList.contains('unread')) {
            textElement.classList.replace('unread', 'read');
            textElement.lastElementChild.remove();
        }
    });
});