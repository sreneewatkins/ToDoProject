// Create a new list item when clicking on the "Add" button
function addToList() {
    let inputValue = document.getElementById("todoInput").value;

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let myList = document.getElementById("myOL");
        let li = document.createElement("li");
        let litxt = document.createTextNode(inputValue);
        li.appendChild(litxt);
        
        let span = document.createElement("SPAN");
        let sptxt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(sptxt);
        li.appendChild(span);
        
        myList.appendChild(li);
    }
    document.getElementById("todoInput").value = ""; 
    document.getElementById("todoInput").focus();
    /*well this just seems weird to call a close fn in the add. had to do this because it would only check for clicks on close class items once at the beginning of execution*/
    removeFromList();
}//end addToList()

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ol'); //can i just use my List here?
list.addEventListener('click', function(ev) {
    //console.log("entered event listener fn on click", ev.target, ev.currentTarget);
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    } 
}, false);

//click on close to hide line display none vs visibility
function removeFromList() {
    let closeItems = document.getElementsByClassName("close"); //why not use quesrySelectorAll here

    let i;
    for(i = 0; i < closeItems.length; i++) {
        closeItems[i].onclick = function() {   //why not use an event listener here
            let div = this.parentElement;
            div.style.display = "none"; //stillpart of ol, not #'d what a/b remove
        }
    }
    //console.log(list);
}//end removeFromList()
