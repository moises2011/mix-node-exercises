//Constructor de Carros
class Car{
    constructor(options){
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'silver';
    }
}
//Constructor de Camiones
class Truck{
    constructor(options){
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}
//Factoría
class VehicleFactory{
    createVehicle(options){
        switch(options.vehicleType){
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
            default:
                this.vehicleClass = Car;
                break;
        }
        return new this.vehicleClass(options);
    }
}
const carFactory = new VehicleFactory();

const car = carFactory.createVehicle({
                vehicleType: 'car',
                color: 'yellow',
                doors: 6 });
console.log('Es un Car:',car instanceof Car);
console.log(car);
const movingTruck = carFactory.createVehicle( {
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small" } );
console.log('Es un Truck:', movingTruck instanceof Truck );
console.log( movingTruck );
const defaultCar = carFactory.createVehicle({});
console.log('Es un Car:',defaultCar instanceof Car);
console.log(defaultCar);