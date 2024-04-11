
const fillArray = function () {
    const numbArrayTab = [];
        for (let i = 1; i < 77; i++) {
            numbArrayTab.push(i);
            }
    return numbArrayTab;
}
console.log("Array Number", fillArray());

const generateMainBoard = function() {
    const numbArrayTab = fillArray();
    const bingoDiv = document.getElementById('tableBingo');
    for (let i = 0; i < numbArrayTab.length; i++ ) {
        const cellNumb = document.createElement("div");
        cellNumb.classList.add('cellNumbS');
        cellNumb.textContent = (numbArrayTab[i]);
        bingoDiv.appendChild(cellNumb);
    }
}




const getRandomNum = function (number) {
    const rangeN = fillArray();
   return number = Math.floor(Math.random()*rangeN.length);
}
console.log("Random Number", getRandomNum());



const LinkClass = function () {
    const randomNumb =  getRandomNum(); 

}


const generateRandNumber = function() { 
   const btnNumb = document.getElementById('buttonNumber');
    btnNumb.addEventListener("click", function(e) {
    const randomNumb =  getRandomNum(); 
    const numbCont = document.getElementById('numberCont');
    const cellNumbCont = document.getElementById('numbSel');
    cellNumbCont.textContent = randomNumb;
    numbCont.appendChild(cellNumbCont);
    
    const AllN = document.querySelectorAll(".cellNumbS");
    
    for (let i = 0; i < AllN.length; i++) {
        let SingN = AllN[i];
        if (parseInt(SingN.textContent) === randomNumb) {
            SingN.classList.add("selected");   
        }
    }})};

const generateUserBoards = function () {
    // genera e gestice le tabelline
}

generateMainBoard();
generateRandNumber();