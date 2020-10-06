class Thermostat{
    constructor(){
        this.temperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.PSM_ON_LIMIT = 25;
        this.PSM_OFF_LIMIT = 32;

    }

    up(num){
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
    return this.temperature === this.MINIMUM_TEMPERATURE
    };

    powerSavingModeOff(){
        this.powerSavingMode = false
    };

};
