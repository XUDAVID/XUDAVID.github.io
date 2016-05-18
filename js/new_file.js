$(function(){
	var obj = $(".music");
	$(".music").on("click",function(){
		if(obj.hasClass("musiC")){
			addr("close")
		}else{
			addr("open")
		}
		
	})
	function addr(tog){
		if(tog=="open"){
			obj.addClass("musiC");
			audio.play();
			
		}
		if(tog=="close"){
			obj.removeClass("musiC");
			audio.pause();
		}
		
	}
	
})();
