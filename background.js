t = new Date();
time = t.getTime();
t.setTime(time);
theHour = t.getHours();
	
function changeBackground(color){
	
	if (theHour > 17 || theHour < 6){
		display = "Night";
		jQuery('body').removeClass('evening').addClass('night')
	}
	else if (theHour > 16){
		display = "Evening";
		jQuery('body').removeClass('afternoon').addClass('evening')
	}
	else if (theHour > 11){
		display = "Afternoon";
		jQuery('body').removeClass('morning').addClass('afternoon')
	}
	else{
		display = "Morning";
		jQuery('body').removeClass('night').addClass('morning')
	}
	
var greeting = ("Good " + display + "!");
document.write("<div id='greeting'>")
document.write(greeting)
document.write("</div>")
;
}

window.onload=changeBackground();
