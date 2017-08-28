// check off specific todos by clicking
$('ul').on("click", "li", function(){
   $(this).toggleClass("completed");
});

// click on trashcan to delete todo
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
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

// click on plus to toggle form
$('.fa-plus').on("click", function(){
    $("input[type='text']").fadeToggle();
});