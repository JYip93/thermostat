"use strict";

describe("Thermostat", function(){
    describe("Temperature", function(){
        it("Thermostat starts at 20 degrees", function(){
            let thermostat = new Thermostat
            expect(thermostat.temperature).toBe(20);
        });
    });

    describe("Adjust temperature", function(){
        describe("Up will increase the temperature", function(){
            it("Temperature will be 30 degrees", function(){
            let thermostat = new Thermostat
            thermostat.up(10)
            expect(thermostat.temperature).toBe(30);
            });   
        });
        describe("Up will increase the temperature", function(){
            it("Temperature will be 30 degrees", function(){
            let thermostat = new Thermostat
            thermostat.down(5)
            expect(thermostat.temperature).toBe(15);
            });    
        });
    });

    describe("Minimum temperature", function(){
        describe("Temperature will not go below minimum", function(){
            it("Temperature will not go below 10", function(){
                let thermostat = new Thermostat
                //for(let i = 0; i < 10; i++){
                  //  thermostat.down(1);
                //};
                thermostat.down(10);
                expect(thermostat.temperature).toBe(10)
            });
        });
    });
    describe("Power Saving Mode", function(){
        describe("On", function(){
            it("Check power saving mode is on", function(){
                let thermostat = new Thermostat
                expect(thermostat.powerSavingMode).toBe(true)
            });
        }); 
        describe("On", function(){
            it("Check power saving mode is on", function(){
                let thermostat = new Thermostat
                thermostat.powerSavingModeOff();
                expect(thermostat.powerSavingMode).toBe(false)
            });
        });    
    });

    describe("Maximum temperature", function(){
        describe("PSM On", function(){
            it("Maximum temperature should be 25", function(){
                let thermostat = new Thermostat
                for(let i = 0; i < 5; i++){
                   thermostat.up(1);
                };
                expect(thermostat.temperature).toBe(25)
            });
        });
        describe("PSM Off", function(){
            it("Maximum temperature should be 32", function(){
                let thermostat = new Thermostat
                thermostat.powerSavingModeOff();
                for(let i = 0; i < 12; i++){
                   thermostat.up(1);
                };
                expect(thermostat.temperature).toBe(32)
            });
        });

    });
});