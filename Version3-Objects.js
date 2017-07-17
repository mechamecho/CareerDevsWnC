//It should store the todos array on an Object
var todoList={
    todos: ['item1', 'item2', 'item3'],
    //It should have a displayTodos method
    displayTodos: function(){
        console.log('My todos:', todoList.todos);
    },
    //It should have an addTodo method
    addTodo: function(newTodo){
        this.todos.push(newTodo);
        this.displayTodos();
    },
     //It should have a changeTodo method
    changeTodo: function(position,newTodo){
        this.todos[position]=newTodo;
        this.displayTodos();
    },
    //It should have a deleteTodo function
    deleteTodo:function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    }
};
//test
todoList.displayTodos();
//test 
todoList.addTodo('do HW')