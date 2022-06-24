$("ul").on("click", "li", function(){
	
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//store todo from input
		var todoItem = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoItem + '</li>');
	}
});

$("#toggle").click(function() {
	$("input[type='text']").fadeToggle();
});
