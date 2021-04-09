function sendRequest() {
  // add your citywise weather api here
  apiURL = ;
  $.getJSON(apiURL, function(result){
      data = result;
      var i = dayno;
        day = (8+dayno)/8;
        var cityName = data.city.name;
        var countryCode = data.city.country;
        var generalWeather = data.list[i].weather[0].main;
        var timestamp = data.list[i].dt;
        var weatherDescription = data.list[i].weather[0].description;
        var weatherImg = data.list[i].weather[0].icon;
        var averageTemperature = data.list[i].main.temp;
        var humidity = data.list[i].main.humidity;
        var pressure = data.list[i].main.pressure;
        var visibility = data.list[i].visibility;
        var windSpeed = data.list[i].wind.speed;
      $("#guide").html("");
      $("#city-name").html(cityName+", "+countryCode);
      $("#general-info").html(generalWeather);
      $("#day").html("Day: " +day);
      $("#timestamp").html("Timestamp:  "+ timestamp);
      $("#wether-condition").html("General Weather Condition:  " +weatherDescription);
      $("#avgtemp").html("Avergere Temperature:  "+averageTemperature);
      $("#humidity").html("Humidity:  "+ humidity);
      $("#pressue").html("Pressure: "+ pressure);
      $("#visibility").html("visibility:  "+ visibility);
      $("#speed").html( "Wind Speed:  "+windSpeed);
      if(weatherImg.substring(0,2) == "02" || weatherImg.substring(0,2) == "03" || weatherImg.substring(0,2) == "04"){
        $(document.body).css('background-image', "url('images/clouds.jpeg')");
      }
      else if(weatherImg.substring(0,2) == "09" || weatherImg.substring(0,2) == "10"){
        $(document.body).css('background-image', "url('images/rain.jpeg')");
      }
      else if(weatherImg.substring(0,2) == "11"){
        $(document.body).css('background-image', "url('images/thunder Strom.jpeg')");
      }else if(weatherImg.substring(0,2) == "13"){
        $(document.body).css('background-image', "url('images/snow.jpeg')");
      }
      else if(weatherImg.substring(0,2) == "11"){
        $(document.body).css('background-image', "url('images/mist.jpeg')");
      }
      else{
        $(document.body).css('background-image', "url('images/clear sky.jpeg')");
      } 
  }); 
  }
  
  $( document ).ready(function() {
    city = "";
    day = 1;
    dayno = 0;
    $("#zip-code-input").change(function(){
      city = this.value;
    });
    $(".fas").click(function(){
      if(city == ""){
        alert("First enter the city name....");
      }
      else{
        dayno = 0;
        sendRequest();
      } 
    });
    $("#btn").click(function(){
        dayno = (dayno + 8)%40;
        sendRequest();
       
    });
  });
