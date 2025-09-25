//main class
var SingletonFundamental = /** @class */ (function () {
    function SingletonFundamental() {
    }
    SingletonFundamental.create = function () {
        if (!SingletonFundamental.instance) {
            SingletonFundamental.instance = new SingletonFundamental();
        }
        return SingletonFundamental.instance;
    };
    return SingletonFundamental;
}());
var instance_1 = SingletonFundamental.create();
var instance_2 = SingletonFundamental.create();
console.log("Check:", instance_1 == instance_2);
