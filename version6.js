
var todoList={
    todos: [],
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
    },
    //it should have a toggleAll function that changes the completion status of all todos
    toggleAll:function(){
        var totalTodos=this.todos.length;
        var completedTodos=0;
        //Get number of completed todos
        for(var i=0; i<this.todos.length;i++){
            if(this.todos[i].completed===true){
                completedTodos++;
            }
        }
        
        //If everything is true, make everything false
        if(completedTodos===totalTodos){
            //Make everything false
            for (var i=0;i<totalTodos; i++){
                this.todos[i].completed=false;
            }
            //Otherwise make everything true
        }else{
           for (var i=0;i<totalTodos; i++){
                this.todos[i].completed=true;
            } 
        }
        this.displayTodos();
    }
};

var handlers={
  displayTodos: function(){
    todoList.displayTodos();
  },

addTodo:function(){
    var addTodoTextInput=document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value="";
}, 
changeTodo:function(){
    var changeTodoPositionInput=document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput=document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value="";
    changeTodoTextInput.value="";
},
deleteTodo:function(){
    var deleteTodoPositionInput=document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value="";
},
toggleCompleted:function(){
    var toggleCompletedPositionInput=document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value="";
},
  toggleAll:function(){
    todoList.toggleAll();
}
};
