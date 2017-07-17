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
    changeTodo: function(oldTodo,newTodo){
        this.todos[this.todos.indexOf(oldTodo)]=newTodo;
        this.displayTodos();
    },
    //It should have a deleteTodo function
    deleteTodo:function(todo){
        this.todos.splice(this.todos.indexOf(todo),1);
        this.displayTodos();
    },
    //clearTodos
    clearTodos:function(){
        this.todos.splice(0,this.todos.length-1);
        this.displayTodos();
    }
};