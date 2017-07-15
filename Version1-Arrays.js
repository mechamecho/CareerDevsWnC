//Requirement 1: a place to store the todos
var todos=['item1', 'item2', 'item3', 'item4'];
//Requirement 2: a way to display todos
console.log(todos);
//Requirement 3: A way to add todos:
todos.push('new item');
//Requirement 4: a way to change a todo:
var index_of_item_to_be_changed;
todos[index_of_item_to_be_changed]='new value';
//Requirement 5: a way to remove a todo:
var index_of_item_to_be_removed;
todos.splice(index_of_item_to_be_removed,1);
//upgrading Version1
function deleteItem(array, item){
    return array.splice(array.indexOf(item),1);    
}
//new way of removing items:
deleteItem(todos,'item4');