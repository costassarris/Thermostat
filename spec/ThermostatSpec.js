describe("Thermostat", function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a temperature of 20 degrees when created", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("should be able to increase the temperature by 1 degree", function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it("should be able to decrease the temperature by 1 degree", function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it("should not allow temperature to go below 10 degrees", function() {
    for (i = 0; i < 12; i++) {
      thermostat.down();
    };
    expect(thermostat.temp).toEqual(10);
  });


  describe("power saving mode", function() {

    it("should be on by default", function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it("should be able to turn off", function() {
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toBe(false);
    });

    it("should have a max temperature of 25 degrees when power saving mode is on", function() {
      for (i = 0; i < 7; i++) { thermostat.up() };
      expect(thermostat.temp).toEqual(25);
    });

    it("should have a max temperature of 32 degrees when power saving mode is off", function () {
      thermostat.powerSaveSwitch();
      for (i = 0; i < 14; i++) {
        thermostat.up()
      };
      expect(thermostat.temp).toEqual(32);
    });

    it('should display status as "OFF" when off', function() {
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSaveStatus).toEqual("OFF");
    });

  });

  describe("reset button", function() {

    it("should reset the temperature to 20 degrees", function() {
      thermostat.resetButton();
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe("energy usage", function() {

    it("should be low when set to less than 18 degrees", function() {
      for (i = 0; i < 5; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low");
    });

    it("should be medium when set between 18 and 24 degrees", function() {
      expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("should be high when set to 25 degrees of higher", function() {
      for (i = 0; i < 8; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high");
    });

  });


});