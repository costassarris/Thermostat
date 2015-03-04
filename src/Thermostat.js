var Thermostat = function() {
  this.temp = 20;
  this.powerSave = true;
  this.powerSaveStatus = "ON";
};

Thermostat.prototype.up = function() {
  if ((this.powerSave == true) && (this.temp < 25)) {this.temp += 1};
  if ((this.powerSave == false) && (this.temp < 32)) {this.temp +=1};
};

Thermostat.prototype.down = function() {
  if (this.temp > 10) {this.temp -= 1};
};

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSave = !this.powerSave;
  if (this.powerSave == false) {this.powerSaveStatus = "OFF"};
  if ((this.powerSave == true) && (this.temp > 25)) {(this.temp = 25) && (this.powerSaveStatus = "ON")};
  if (this.powerSave==true) {this.powerSaveStatus = "ON"};
};

Thermostat.prototype.resetButton = function() {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18) {return "low"};
  if (this.temp < 25) {return "medium"};
  return "high";
};