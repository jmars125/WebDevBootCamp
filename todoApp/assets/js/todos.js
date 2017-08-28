// check off specific todos by clicking
$('ul').on("click", "li", function(){
   $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//create new todo item
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       // grabbing new todo from input
       var todoText = $(this).val();
       // clearing current input
       $(this).val("");
       // create new li and add to ul
       $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});