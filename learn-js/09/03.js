function Apliance(powerOn) {
    this.powerOn = !!powerOn;
}

Apliance.prototype.toggle = function () {
    this.powerOn = !this.powerOn;
    return this.powerOn;
}

function WashingMachine (powerOn, mode) {
    Apliance.call(this, powerOn);
    this.mode = mode || 'normal';
}

WashingMachine.prototype = Object.create(Apliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;
WashingMachine.prototype.wash = function () {
    if (!this.powerOn) return 'Cannot wash: power off';
    return `Wasing ... ${this.mode}`;
}

const wm = new WashingMachine(false, 'quick');
console.log(wm.wash());
console.log(wm.toggle())
console.log(wm.wash());
