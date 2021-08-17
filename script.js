$(document).ready(function(){
  
  var RandomColor = function() {
    colors = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E', '#E67E22', '#E74C3C', '#F1C40F'];
    return colors[Math.floor(Math.random()*colors.length)];}
  
  $(".btn").click(function(){
    
      setInterval (

    	function(){

    		$("body").each(function(){
  	$(this).css("background", RandomColor);
  });

    		$("body").html("<div class='disco'><p>HAPPY BIRTHDAY!</p></div>")

    	} ,250);
  });
  
});