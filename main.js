let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let suits = ["Diamonds", "Spades", "Clubs", "Hearts"];
let arr = [];
function getCardNumber(cards) {
    switch (cards) {
        case 1: return "A"; break;
        case 11: return "J"; break;
        case 12: return "Q"; break;
        case 13: return "K"; break;
        default: return cards; break;
    }
}
function getSuitClass(suit) {
    switch (suit) {
        case "Hearts": return "suit-hearts"; break;
        case "Diamonds": return "suit-diamonds"; break;
        case "Spades": return "suit-spades"; break;
        case "Clubs": return "suit-clubs"; break;
    }
}
let draw = document.querySelector("#draw");
draw.addEventListener("click", (e) => {
    arr = [];
    let inputValue = document.querySelector("#input").value;
    let table = document.querySelector("#table");
    table.innerHTML = "";
    for (let i = 0; i < inputValue; i++) {
        const div = document.createElement("div");
        div.classList.add("card");
        const p = document.createElement("p");

        let randomCard = Math.floor(Math.random() * cards.length);
        let finalcard = cards[randomCard];
        let randomSuit = Math.floor(Math.random() * suits.length);
        let finalSuit = suits[randomSuit];



        let obj = {
            number: cards[randomCard],
            suit: suits[randomSuit],
        }

        div.appendChild(p);
        p.innerHTML = (getCardNumber(finalcard));
        table.appendChild(div);
        div.classList.add(getSuitClass(finalSuit));

        arr.push(obj);

    }
    console.log(arr);
});

const juanito = () => {
    let table2 = document.createElement("div");
            table2.id = "table2";
            for (let i = 0; i < arr.length; i++) {
                const div = document.createElement("div");
                div.classList.add("card");
                const p = document.createElement("p");
                div.classList.add(getSuitClass(arr[i].suit))
                /*   p.innerHTML = arr[i].number; */
                p.innerHTML = getCardNumber(arr[i].number);
                div.appendChild(p);
                table2.appendChild(div);
                document.body.appendChild(table2);
                
            }

}


let sort = document.querySelector("#sort");
sort.addEventListener("click", (e) => {
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j].number < arr[min].number) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp; 
            }
            juanito();     
                  
    }
    return arr;
})















