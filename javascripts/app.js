var main=function () {
	"use.strict";
	var massiv=["Шапки, шарфы, снуды",
	"Свитера, платья, кардиганы",
	"Сумки, шляпы, рюкзаки"]
	$(".tabs a span").toArray().forEach(function(element){
		$(element).on("click",function(){
			var el=$(element),$content;
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			if (el.parent().is(":nth-child(1)")){
				$content=$("<ul>");
				var num;
				for (num=massiv.length-1;num!=-1;num=num-1){
					$content.append($("<li>").text(massiv[num]))
					$("main .content").append($content);
				}	
			}
			else if (el.parent().is(":nth-child(2)")){
				$content=$("<ul>");
				massiv.forEach(function(todo){
					$content.append($("<li>").text(todo))
					$("main .content").append($content);
				});
			}
			else{
				console.log("three");
			}
			return false;
		})
		$(".tabs a:first-child span").trigger("click");
	});
};
$(document).ready(main);