//main class
class SingletonFundamental {
   private static instance: SingletonFundamental;
   private constructor() { }
    public static create() {
        if (!SingletonFundamental.instance) {
            SingletonFundamental.instance = new SingletonFundamental();
        }
        return SingletonFundamental.instance
    }

}
const instance_1 = SingletonFundamental.create();
const instance_2 = SingletonFundamental.create();
console.log("Check:",instance_1 == instance_2)