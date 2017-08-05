var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

    if(input === "list"){
        console.log(todos);
    }

    // check for input commands
    else if(input === "new"){
        // ask for new todo
        var newTodo = prompt("Enter new todo")

        // add todos to array
        todos.push(newTodo);
    }

    // ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app");
