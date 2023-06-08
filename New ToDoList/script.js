"use strict";


var listData = [];
var addButton = document.getElementById("addButton");
var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");

addButton.addEventListener("click", add);

function add() {
    var inputValue = todoInput.value.trim();
    
    if (inputValue !== "") {
        if (listData.indexOf(inputValue) === -1) {
            listData.push(inputValue);
            listData.sort();
            display();
        } else {
            alert("Eyni adda ikinci bir data elave edile bilmez");
        }
    } else {
        alert("Bosluq elave edile bilmez");
    }
    
    todoInput.value = "";
}

function display() {
    todoList.innerHTML = "";
    
    for (var i = 0; i < listData.length; i++) {
        var listItem = document.createElement("li");
        var itemText = document.createTextNode(listData[i]);
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Delete";
        removeButton.addEventListener("click", remove.bind(null, i));
        
        listItem.appendChild(itemText);
        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
    }
}

function remove(index) {
    listData.splice(index, 1);
    display();
}

