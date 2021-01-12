let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let suits = ["Diamonds", "Spades", "Clubs", "Hearts"];
let arr = [];
/* dos variables donde asigno numeros de cartas y palo respectivamente */
/* obtengo random card y random suit y las guardo en las dos variables respectivas */
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

let sort = document.querySelector("#sort");
sort.addEventListener("click", (e) => {
    let inputValue = document.querySelector("#input").value;
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (arr[index].number > arr[index + 1].number) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
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
                
            }
            document.body.appendChild(table2)
            index++;
        }
        wall--; //decrease the wall for optimization
    }

});










