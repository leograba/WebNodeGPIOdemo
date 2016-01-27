/**
 Jquery code for responsive UI and 
 server communication via AJAX
 */

$(function(){ //wait for the page to be fully loaded
	$(".btn").click(function clickHandling(){ //if element of class "btn" is clicked
		var btn_status = {id:"", val:""}; //data to be sent to the server
		
		if(this.checked){ //check whether button is pressed or not
			$(this).siblings().html("ON").css("color","green"); //changes label and color
			btn_status.id = $(this).attr("id"); //get which button was clicked
			btn_status.val = "on"; //tell the server the button is clicked
		}
		
		else{ //if button was unclicked
			$(this).siblings().html("OFF").css("color","red"); //changes label and color
			btn_status.id = $(this).attr("id"); //get which button was clicked
			btn_status.val = "off"; //tell the server the button is unclicked
		}
		
		$.post("/gpio", btn_status, function (data, status){ //send data to the server via HTTP POST
			if(status == "success"){ //if server responds ok
				console.log(data);//print server response to the console
			}
		},"json"); //server response shuld be in JSON encoded format
	});
});