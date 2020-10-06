class Thermostat{
    constructor(){
        this.temperature = 20;
    }

    up(num){
         this.temperature += num
    };

    down(num){
        this.temperature -= num
   };
}