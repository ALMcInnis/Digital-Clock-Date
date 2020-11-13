function clockData(time){
			var t = new Date();
			var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
			var weekday = days[t.getDay()];
			var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			var month = monthName[t.getMonth()];
			var day = t.getDate();
			var year = t.getFullYear();
			var seconds = t.getSeconds();
			var minutes = t.getMinutes();
			var hours = t.getHours();
			var meridian = t.getHours()> 11?'PM':'AM';
		    if (hours>12){
				hours=hours-12
				}
			if (hours<=0){
				hours==12
				}
			
			return{
			'total':t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
			'meridian': meridian,
			'month':month,
			'day':day,
			'year':year,
			'weekday':weekday
			};
		}
		
		function initializeClock(id,time){
			var clock = document.getElementById(id);
			var clockSpan = clock.querySelector('.clock');
		
		function updateClock(){
			var t = clockData(time);
			clockSpan.innerHTML = t.hours + ":" + ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2) + " " + t.meridian;
		}

	updateClock();
	var timeinterval = setInterval(updateClock,1000);
	}
	initializeClock("calendar");
	
	
		function initializeDate(id,time){
			var clock = document.getElementById(id);
			var monthSpan = clock.querySelector('.month');
			var weekdaySpan = clock.querySelector('.weekday');
			var daySpan = clock.querySelector('.day');
			var yearSpan = clock.querySelector('.year');
		
		function updateDate(){
			var t = clockData(time);
			monthSpan.innerHTML = t.month; 
			weekdaySpan.innerHTML = t.weekday; 
			daySpan.innerHTML = ('0'+ t.day).slice(-2);
			yearSpan.innerHTML = t.year;
		}

	updateDate();
	var timeinterval = setInterval(updateDate,3600000);
	}
	initializeDate("calendar");