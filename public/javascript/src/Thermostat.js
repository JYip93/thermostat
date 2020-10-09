class Thermostat{
    constructor(){
        this.temperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.PSM_ON_MAX_TEMP = 25;
        this.PSM_OFF_MAX_TEMP = 32;
        this.DEFAULT_TEMPERATURE = 20;
    }

    currentTemp(callback){
        $.get('/temperature', function(res){
            var data = JSON.parse(res)
            console.log(data)
            callback(data);
        });
    };

    up(currentTemperature, callback){
        if (this.isMaximumTemp(currentTemperature)) return;
        this._updateTemperature(currentTemperature +1, callback);
         };


    down(currentTemperature, callback){
        if (this.isMinimumTemp(currentTemperature))return;
        this._updateTemperature(currentTemperature -1, callback); 
   };

   _updateTemperature(value, callback){
       $.post('/temperature', {temperature: value},callback)
   };

   isMinimumTemp(temperature){
        return temperature === this.MINIMUM_TEMPERATURE;
   };

   isMaximumTemp(temperature){
       if (this.powerSavingMode === false){
            return temperature === this.PSM_OFF_MAX_TEMP;
       }    else {
            return temperature === this.PSM_ON_MAX_TEMP; 
       }
    };

    powerSavingModeOff(){
        this.powerSavingMode = false
    };

    powerSavingModeOn(temperature, callback){
        this.powerSavingMode = true
        if (temperature > this.PSM_ON_MAX_TEMP) {
            this._updateTemperature(this.PSM_ON_MAX_TEMP, callback);
        }
    };

    resetTemperature(callback){
        this._updateTemperature(this.DEFAULT_TEMPERATURE, callback)
    };

    energyUsage(temperature){
        if (temperature < 18) {
            return 'low-usage';
        } else if (temperature <= 25) {
            return 'medium-usage';
        } else 
        return 'high-usage';
    };

};
