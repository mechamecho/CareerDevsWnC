
var todoList={
    todos: [],
    //todoList.addTodos should add objects
    addTodo: function(todoText){
        this.todos.push({
            todoText:todoText,
            completed:false
        });
    },
     //changeTodo should change the todoText property
    changeTodo: function(position,todoText){
        this.todos[position].todoText=todoText;
    },
    //It should have a deleteTodo function
    deleteTodo:function(position){
        this.todos.splice(position,1);
    },
    //toggleCompleted should change the completed property
    toggleCompleted:function(position){
        var todo=this.todos[position];
        todo.completed=!todo.completed;
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
addTodo:function(){
    var addTodoTextInput=document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value="";
    view.displayTodos();
}, 
changeTodo:function(){
    var changeTodoPositionInput=document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput=document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value="";
    changeTodoTextInput.value="";
    view.displayTodos();
},
deleteTodo:function(){
    var deleteTodoPositionInput=document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value="";
    view.displayTodos();
},
toggleCompleted:function(){
    var toggleCompletedPositionInput=document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value="";
    view.displayTodos();
},
  toggleAll:function(){
    todoList.toggleAll();
    view.displayTodos();
}
};


var view={
    displayTodos:function(){
        var todosUl=document.querySelector("ul");
        todosUl.innerHTML='';
        for (var i=0; i<todoList.todos.length;i++){

            var todoLi=document.createElement('li');
            var todo=todoList.todos[i];
            var todoTextWithCompletion='';
            //create string for to do and completion depending on todos completion status
            if (todo.completed===true){
                todoTextWithCompletion="(X)"+todo.todoText;
            }else{
                todoTextWithCompletion="( )"+todo.todoText;    
            }
            //insert text into li element
            todoLi.textContent=todoTextWithCompletion;
            todosUl.appendChild(todoLi); 
            
        }
    }
};