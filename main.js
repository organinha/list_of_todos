var myList = document.getElementsByTagName("li");

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
	//console.log("valor:" + inputValue)  -> Testes no Firefox

    if (inputValue === ' ' || inputValue === '') {  //-> Alerta passa a ocorrer no Firefox também
        alert("You must write something!");
    } 
        else {
            document.getElementById("list").appendChild(li);
        }
    document.getElementById("myInput").value = " ";
}