/* Weather-Button */


Module.register("MM-navbar",{

	getScripts: function(){
		return ["modules/MM-navbar/jquery-3.1.1.js"];
	},
	getStyles: function(){
		return ["weather-icons.css", "navbar.css", "font-awesome.css"];
	},
	notificationReceived: function(notification, payload, sender){
                if (notification === "CALENDAR"){
                        var calendarbutton = document.getElementById('calendar-button');
                        calendarbutton.click();
                }
                if (notification === "NFL"){
                        var nflbutton = document.getElementById('nfl-button');
                        nflbutton.click();
                }
                if (notification === "NEWSFEED"){
                        var newsbutton = document.getElementById('news-button');
                        newsbutton.click();
                }
                if (notification === "WEATHER"){
                        var weatherbutton = document.getElementById('weather-button');
                        weatherbutton.click();
                }
        },

	getDom: function(){

		var wrapper = document.createElement("div");
		
		var weatherhidden = true;
		var calendarhidden = true;
		var newshidden = true;

		var weatherbutton = document.createElement("span");
		var calendarbutton = document.createElement("span");
		var newsbutton = document.createElement("span");

            	wrapper.className = "center";
            	weatherbutton.className = "wi wi-day-rain-mix navbar";
            	weatherbutton.id = 'weather-button';
            	calendarbutton.className = "fa fa-calendar navbar";
            	calendarbutton.id = 'calendar-button';
            	newsbutton.className = "fa fa-newspaper-o navbar";
            	newsbutton.id = 'news-button';

		var forecast = MM.getModules().withClass('weatherforecast');
		var weather = MM.getModules().withClass('currentweather');
		var calendar = MM.getModules().withClass('calendar');
		var news = MM.getModules().withClass('newsfeed');
	
		wrapper.appendChild(weatherbutton);		
		wrapper.appendChild(calendarbutton);
		wrapper.appendChild(newsbutton);
	
		$(weatherbutton).on("click", function(){
			if(weatherhidden){
				forecast[0].show();
				weather[0].show();
				weatherhidden = false;
			}else{
				forecast[0].hide();
				weather[0].hide();
				weatherhidden = true;
			}
		});

		$(calendarbutton).on("click", function(){
			if(calendarhidden){
				calendar[0].show();
				calendarhidden = false;
			}else{
				calendar[0].hide();
				calendarhidden = true;
			}
		});

		$(newsbutton).on("click", function(){
			if(newshidden){
				news[0].show();
				newshidden = false;
			}else{
				news[0].hide();
				newshidden = true;
			}
		});


		return wrapper;				
		
		Log.info("NavigationBar created");


	}


});	


