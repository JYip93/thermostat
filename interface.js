$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();
  
    $('#increase-temp').click(function() {
      thermostat.up(1);
      updateTemperature();
    });
  
    $('#decrease-temp').click(function() {
      thermostat.down(1);
      updateTemperature();
    });
  
    $('#reset-temp').click(function() {
      thermostat.resetTemperature();
      updateTemperature();
    });
  
    $('#psm-on').click(function() {
      thermostat.powerSavingModeOn();
      $('#power-saving-status').text('on')
      updateTemperature();
    })
  
    $('#psm-off').click(function() {
      thermostat.powerSavingModeOff();
      $('#power-saving-status').text('off')
      updateTemperature();
    })
  
    function updateTemperature() {
      $('#temperature').text(thermostat.current_temp());
      $('#temperature').attr('class', thermostat.energyUsage())
    };

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a636aab4ed9153fe59fddef31a5f94c1&units=metric', function(data) {
    $('#current-temp').text(data.main.temp);
    });

    $('#current-city').change(function(){
        var city = $('#current-city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a636aab4ed9153fe59fddef31a5f94c1&units=metric', function(data) {
        $('#current-temp').text(data.main.temp);
        });
    });

  });