//Requirement 1: it should have a function to display todos
var todos=['item1', 'item2', 'item3'];
function displayTodos(){
    console.log('My todos:', todos);
}
//test
displayTodos();

//Requirement 2: It should have a function to add todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
//test
addTodo('Watch and Code V3');

//Requirement 3: It should have a function to change todos
function changeTodo(position, newTodo){
    todos[position]=newTodo;
    displayTodos();
}
//test
changeTodo(0,'changed again');

//Requirement 4: It should have a function to delete todos
function deleteTodo(position){
    todos.splice(position,1);
    displayTodos();
}

//test
deleteTodo(0);