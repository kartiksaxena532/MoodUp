const motivation = document.getElementById('motivation');

const quotes = ["Hello", "Hi", "asfvevb", "fv rb trb"];

function randomQuote() {
    let random = Math.floor(Math.random() * (quotes.length));
    console.log(motivation.children.length);
    if (motivation.childNodes.length === 1) {
        return quotes[random];
    } else {
        motivation.children[0].innerHTML = quotes[random];
    }
}



function  showQuote(){
        const node = document.createElement("div");
        const textNode = document.createTextNode(randomQuote());
        node.appendChild(textNode);
        motivation.appendChild(node)
}



motivation.addEventListener('click', showQuote);
