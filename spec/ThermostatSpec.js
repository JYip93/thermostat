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
            thermostat.down(10)
            expect(thermostat.temperature).toBe(10);
            });    
        });
    });
});