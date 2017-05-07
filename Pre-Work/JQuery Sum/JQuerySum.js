var main = function(){
	
	$("p").hide();
	$("button").on("click", function() {
		var num1 = Number($("#num1").val());
		var num2 = Number($("#num2").val());
		var result = num1 + num2;
		$("p").show();
		$("#result").text(result);
	});
 }

$(document).ready(main);	