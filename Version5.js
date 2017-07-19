//Starting code from Version4
//It should store the todos array on an Object
var todoList={
    todos: [],
    //It should have a displayTodos method
    //should display todoText
    displayTodos: function(){
        if(this.todos.length===0){
            console.log("Your todo List is empty!");
        }else{
            console.log('My todos:');
            for(var i=0;i<this.todos.length;i++){
                //it should show if the todo was completed
                if (this.todos[i].completed===true){
                    console.log(" (X)",this.todos[i].todoText );
                }else{
                    console.log("( )",this.todos[i].todoText);
                }
        }    
        }
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