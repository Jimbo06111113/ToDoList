// check off to dos by clicking
// if li gray
var x;



$("ul").on("click","li", function(){


    $(this).toggleClass("complete"); 
});
 

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation()
});

$("input[type = 'text']").keypress(function(event){

   if(event.which === 13){
        x = $(this).val();
        $("input").val("");
        
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ x +"</li>");
   }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});