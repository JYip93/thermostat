class Thermostat{
    constructor(){
        this.temperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.PSM_ON_MAX_TEMP = 25;
        this.PSM_OFF_MAX_TEMP = 32;

    }

    up(num){
         if (this.isMaximumTemp()){
            return
         } 
         this.temperature += num
    };

    down(num){
        if (this.isMinimumTemp()){
            return;
        }
        this.temperature -= num
   };

   isMinimumTemp(){
        return this.temperature === this.MINIMUM_TEMPERATURE
   };

   isMaximumTemp(){
       if (this.powerSavingMode === false){
            return this.temperature === this.PSM_OFF_MAX_TEMP;
       }    else {
            return this.temperature === this.PSM_ON_MAX_TEMP; 
       }
    };

    powerSavingModeOff(){
        this.powerSavingMode = false
    };

    powerSavingModeOn(){
        this.powerSavingMode = true
    };

    resetTemperature(){
        this.temperature = 20
    };

};
