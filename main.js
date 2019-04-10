var myList = document.getElementsByTagName("li");

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert("You must write something!");
    } 
        else {
            document.getElementById("list").appendChild(li);
        }
    document.getElementById("myInput").value = " ";
}