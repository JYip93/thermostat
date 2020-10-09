$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();
  
    $('#increase-temp').click(function() {
      var currentTemperature = parseInt($('#temperature').text())
      thermostat.up(currentTemperature, updateTemperature);
    });
  
    $('#decrease-temp').click(function() {
      var currentTemperature= parseInt($('#temperature').text())
      thermostat.down(currentTemperature, updateTemperature);
      updateTemperature();
    });
  
    $('#reset-temp').click(function() {
      thermostat.resetTemperature(updateTemperature);
    });
  
    $('#psm-on').click(function() {
      var currentTemperature = parseInt($('#temperature').text())
      thermostat.powerSavingModeOn(currentTemperature, updateTemperature);
      $('#power-saving-status').text('on')
    })
  
    $('#psm-off').click(function() {
      thermostat.powerSavingModeOff();
      $('#power-saving-status').text('off')
    })
  
    function updateTemperature() {
      thermostat.currentTemp(function(data) {
      $('#temperature').text(data.temperature);
      $('#temperature').attr('class', thermostat.energyUsage(data.temperature));
      })
    };
  

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a636aab4ed9153fe59fddef31a5f94c1&units=metric', function(data) {
    $('#current-temp').text(data.main.temp);
    });

    $('#current-city').change(function(){
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a636aab4ed9153fe59fddef31a5f94c1&units=metric', function(data) {
      $('#current-temp').text(data.main.temp);
      });
  })
});
