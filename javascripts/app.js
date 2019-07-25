var act=function(n){
	$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(n) span").addClass("active");
		$("main .content").empty();
		return false;
}
var main=function () {
	"use.stict";
	$(".tabs a:nth-child(1)").on("click",function(){
		var n=1;
		act(1);
	});
	$(".tabs a:nth-child(2)").on("click",function(){
		var n=2;
		act(2);
	});
	$(".tabs a:nth-child(3)").on("click",function(){
		var n=3;
		act(3);
	});

};
$(document).ready(main);