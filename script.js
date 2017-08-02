
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
        this.todos.forEach(function(todo){
           if(todo.completed===true){
               completedTodos++;
           } 
        });
        
        //If everything is true, make everything false
        // if(completedTodos===totalTodos){
        //     //Make everything false
        //     this.todos.forEach(function(todo){
        //       todo.completed=false; 
        //     });
        //     //Otherwise make everything true
        // }else{
        // this.todos.forEach(function(todo){
        //     todo.completed=true;
        // })
        // }
        this.todos.forEach(function(todo){
            //Case1: if everything's true, make everything false
            if(completedTodos===totalTodos){
                todo.completed=false;
            //Case2: make everything true
            }else{
                todo.completed=true;
            }
        })
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
deleteTodo:function(position){
    todoList.deleteTodo(position);
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
        // for (var i=0; i<todoList.todos.length;i++){

        //     var todoLi=document.createElement('li');
        //     var todo=todoList.todos[i];
        //     var todoTextWithCompletion='';
        //     //create string for to do and completion depending on todos completion status
        //     if (todo.completed===true){
        //         todoTextWithCompletion="(X)"+todo.todoText;
        //     }else{
        //         todoTextWithCompletion="( )"+todo.todoText;    
        //     }
        //     //to give each li element the to do position as an id
        //     todoLi.id=i;
        //     //insert text into li element
        //     todoLi.textContent=todoTextWithCompletion;
        //     todoLi.appendChild(this.createDeleteButton());
        //     todosUl.appendChild(todoLi); 
            
        // }
        todoList.todos.forEach(function(todo,position){
            var todoLi=document.createElement('li');
            var todoTextWithCompletion='';
            //create string for to do and completion depending on todos completion status
            if (todo.completed===true){
                todoTextWithCompletion="(X)"+todo.todoText;
            }else{
                todoTextWithCompletion="( )"+todo.todoText;    
            }
            //to give each li element the to do position as an id
            todoLi.id=position;
            //insert text into li element
            todoLi.textContent=todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);    
        }, view)
    },
    createDeleteButton:function(){
        var deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.className="deleteButton";
        return deleteButton;
    },
    setUpEventListeners:function(){
        var todosUl=document.querySelector("ul");
        todosUl.addEventListener('click', function(event){
        console.log(event.target.parentNode.id);
        //get the element that was clicked
        var elementClicked=event.target;
        //check if element clicked is a delete button
        if (elementClicked.className==='deleteButton'){
            //run handlers.deleteTodo()
            handlers.deleteTodo(parseInt(event.target.parentNode.id));
    }
    
})
    }
};

view.setUpEventListeners();