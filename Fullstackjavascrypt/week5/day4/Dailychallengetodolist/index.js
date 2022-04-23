

let todoList = document.getElementById('todo-list')


function addTodo(){
    let newToDo = document.getElementById('todotodo').value;
    let newTodoDiv = document.createElement('div');
    todoList.appendChild(newTodoDiv);
    newTodoDiv.setAttribute('class', 'todo-item');
    let xIcon = document.createElement('div');
    let xText = document.createTextNode('x');
    xIcon.setAttribute('onclick', 'deleteTask(event)');
    xIcon.appendChild(xText);
    xIcon.style.cursor = 'pointer';
    newTodoDiv.appendChild(xIcon);
    let selectSquare = document.createElement('input');
    selectSquare.setAttribute('type', 'checkbox');
    selectSquare.setAttribute('onchange', 'selected(event)')
    newTodoDiv.appendChild(selectSquare);
    let todoText = document.createElement('p');
    let todoTextInside = document.createTextNode(newToDo);
    todoText.appendChild(todoTextInside);
    newTodoDiv.appendChild(todoText); 
    
}

function deleteTask(event) {
    todoList.removeChild(event.target.parentElement);
}

function selected(event) {
    let styleType = event.target.nextElementSibling.style.textDecoration;
    let target = event.target.nextElementSibling;
    if (styleType == '' || styleType == 'none'){
        target.style.textDecoration = 'line-through';
    } else {
        target.style.textDecoration = 'none';
    }
}

