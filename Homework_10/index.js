class Cars {
    constructor( model, color, year, typeTransmission, maxSpeed, fuelEconomy, costOfAuto, typeEngine) {             
    this._typeEngine = typeEngine;
    this._typeTransmission = typeTransmission;
    this._color = color;
    this._maxSpeed = maxSpeed;
    this._year = year;
    this._fuelEconomy = fuelEconomy;
    this._costOfAuto = costOfAuto;
    this._model = model;
    }
    
    
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    get year() {
        return this._year;
    }
    get typeTransmission() {
        return this._typeTransmission;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get fuelEconomy() {
        return this._fuelEconomy;
    }
    get costOfAuto() {
        return this._costOfAuto;
    }
    get typeEngine() {
        return this._typeEngine;
    }
  }
  class PassengerCar extends Cars {
    constructor( model, color, year, typeTransmission, maxSpeed, fuelEconomy, costOfAuto, typeEngine, seatsNumber) {
        super(model, color, year, typeTransmission, maxSpeed, fuelEconomy, costOfAuto, typeEngine);
        this._seatsNumber = seatsNumber;
    }
    get seatsNumber(){
        return this._seatsNumber
  
    }
  }
  
  class CarMiniBus extends Cars{
    constructor(model, color, year, typeTransmission, maxSpeed, fuelEconomy, costOfAuto, typeEngine, seatsNumber, amountOfLuggage){
        super(model, color, year, typeTransmission, maxSpeed, fuelEconomy, costOfAuto, typeEngine, )
        this._seatsNumber = seatsNumber;
        this._amountOfLuggage = amountOfLuggage;
    }
    get seatsNumber(){
        return this._seatsNumber;
    }
    get amountOfLuggage(){
        return this._amountOfLuggage;
    }
  }
  
  class TaxiCompany {
    constructor() {
        this._autoPark = [];
    }
  
    get autoPark() {
        return this._autoPark;
    }
  
    addCarsAutoPark(car) {
        this.autoPark.push(car);
    }
  
    getAutoParkCosts() {
        return this.autoPark.reduce((currentSum, carPrice) => currentSum + carPrice.costOfAuto, 0);
    }
  
    getListOfCars() {
        for (let car of this.autoPark) {
            console.log(car);
        }
    }
  
    sortCarsByFuelEconomy() {
        return this.autoPark.sort((car1, car2) => car1.fuelEconomy - car2.fuelEconomy);
        
    }
   
    getCarByParameters(castomParameters) {
        let searchResult = this.autoPark.filter(car => 
            Object.keys(castomParameters).every(key => car[key] === castomParameters[key])
        );
            return searchResult;
        }
    }
  
  let Camry = new PassengerCar('Toyota Camry', 'Red', 2019, true, 240, 15, 30000, 'Petrol', 4,);
  let Polo = new PassengerCar('WV Polo', 'White', 2019, true, 220, 6, 21000, 'Petrol', 4);
  let Crafter = new CarMiniBus('Volkswagen Crafter', 'Blue', 2017, false, 210, 13, 35000, 'Diesel', 15, 600 + ' Liters');
  let Sprinter = new CarMiniBus('MB Sprinter', 'Green', 2018, false, 180, 12.5, 15000, 'Diesel', 18, 700 + ' Liters');
  
  
  let autopark = new TaxiCompany();
  autopark.addCarsAutoPark(Camry);
  autopark.addCarsAutoPark(Polo);
  autopark.addCarsAutoPark(Crafter);
  autopark.addCarsAutoPark(Sprinter);
  
  
  console.log(`Total cost of the fleet: $${autopark.getAutoParkCosts()}`);
  
  
  autopark.sortCarsByFuelEconomy();
  
  
  autopark.getListOfCars();
  
  
  console.log(autopark.getCarByParameters({typeEngine: 'Diesel', seatsNumber: 18}));