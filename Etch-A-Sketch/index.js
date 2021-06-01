// Find container div
const container = document.querySelector(".container");
createBlocks();


// Create blocks
function createBlocks(rowCols = 10){
    removeOldBlocks();
    for (let i = 0; i < rowCols; i++){
        const block = document.createElement("div");
        block.className = 'block';
        container.appendChild(block);
        console.log("Block created!");
        if (i === rowCols - 1) {
            console.log(`Created ${rowCols} rows!`)
        }
    }
}

function removeOldBlocks(){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}