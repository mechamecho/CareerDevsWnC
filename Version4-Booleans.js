//Starting code from Version3
//It should store the todos array on an Object
var todoList={
    todos: [],
    //It should have a displayTodos method
    displayTodos: function(){
        console.log('My todos:', todoList.todos);
    },
    //todoList.addTodos should add objects
    addTodo: function(todoText){
        this.todos.push({
            todoText:todoText,
            completed:false
        });
        this.displayTodos();
    },
     //changeTodo should change the todoText property
    changeTodo: function(position,todoText){
        this.todos[position].todoText=todoText;
        this.displayTodos();
    },
    //It should have a deleteTodo function
    deleteTodo:function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    //toggleCompleted should change the completed property
    toggleCompleted:function(position){
        var todo=this.todos[position];
        todo.completed=!todo.completed;
        this.displayTodos();
    }
};
//test
todoList.displayTodos();
//test 
todoList.addTodo('do HW');
todoList.changeTodo(0,'second try')
todoList.toggleCompleted(0);