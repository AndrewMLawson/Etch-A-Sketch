// Find container div
const container = document.querySelector("#container");

// Find "clear" button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    clear();
})

//Initialize Grid
createBlocks();

// Create blocks
function createBlocks(rowCols = 16){
    removeOldBlocks();
    document.getElementById("container").style.gridTemplateColumns = `repeat(${rowCols}, auto)`;
    for (let i = 0; i < rowCols * rowCols; i++){
        const block = document.createElement("div");
        block.className = 'block';
        container.appendChild(block);
        block.addEventListener("mouseover", () => {
            block.classList.add('blockToggled')
        })
        console.log("Block created!");
        if (i === rowCols - 1) {
            console.log(`Created ${rowCols} rows!`)
        }
    }
}

// Remove old blocks
function removeOldBlocks(){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Clear Function
function clear(){
    console.log("CLEAR");
    let rowCols = prompt("How many rows/columns do you want your grid?");
    console.log(rowCols);
    if (Number(rowCols) && rowCols <= 100) {
        createBlocks(rowCols)
    } else if (Number(rowCols) > 100){
        console.log("Please pick a number less than or equal to 100")
    } else {
        console.log("Please pick a NUMBER by entering a DIGIT")
    }
}

