function createList() {
    var input = document.getElementById("items");
    var list = document.getElementById("list");
    var liText = input.value;
    var toDoArr = liText.split(",");
    var display = document.getElementById("display");
    for (i = 0; i < toDoArr.length; i++) {
        var item = document.createElement("LI");
        item.innerText = toDoArr[i];
        item.onclick = function(event){
            event.target.classList.toggle("strikethrough");
        };
        list.appendChild(item);
    }
    display.appendChild(list);
    input.value = '';
}
