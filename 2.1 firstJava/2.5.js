var firstVariable = "searchInput"
let firstLet = 2;
const firstConst = [1, 2, 3];

function nameChange() {
    var headingElement = document.getElementById("apple");
    headingElement.textContent = "NEW TITLE";
}

if (firstLet>1){
    alert("above");
}
else if (firstLet=1){
    alert("its one");
}
else {
    alert("below");
}
