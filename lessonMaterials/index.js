//ООП Создание новых объектов с помощью functions и classes
function Animal(name){
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const cat = new Animal('cat');
console.log('cat ', cat);

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
const dog = new Animal2('dog');
console.log('dog ', dog);

//4 Принципа ООП. Наследование
// 1) Наследование - inheritance

class Plane{
  constructor(type, numberOfPassengers) {
    this.type = type;
    this.numberOfPassengers = numberOfPassengers;
  }
  startFlight() {
    console.log('Полетели!');
  }
}

class MilitaryPlane extends Plane {
  constructor(type) {
    super(type, 0);
  }

  startFlight() {
    console.log('Полетели в атаку!');
  }

  setNumberOfGuns(numberOfGuns){
    this.numberOfPassengers = numberOfGuns;
  }

  shot() {
    console.log('Стреляем!');
  }
}

const plane = new Plane('Пассажирский', 100);
console.log(plane);
plane.startFlight();

const militaryPlane = new MilitaryPlane('military');
militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shot();

console.log(militaryPlane instanceof militaryPlane)

//2 Инкапсуляция - скрытие данных от дуступа вне класса либо при наследовании

//public - доступны через точку и в дочерних классах
//private # - нет доступа через точку и в дочерних классах
class Developer {
  #salary
  constructor(name, programmingLanguage) {
    this.name = name;
    this.programmingLanguage = programmingLanguage;
    this.#salary = 3000;
  }

  get devSalary(){
    return this.#salary;
  }

  set setSalary(salary){
    this.#salary = salary;
  }

  startCoding(){
    console.log(`${this.name} начинает писать код`);
  }

  printProgrammingLanguage(){
    console.log(`Язык программирования: ${this.programmingLanguage}`);
  }
}

const developer = new Developer('Maxim', 'JS');
console.log(developer);
console.log(developer.name);
developer.startCoding();

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage);
  }
}

const juniorDeveloper = new JuniorDeveloper('Игорь', 'JS');

console.log(developer.devSalary);

developer.setSalary = 5000;
console.log(developer.devSalary);

//3 Полиморфизм - одно действие - несколько реализаций

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound(){}
}

class Dog extends Animal{
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Гав гав');
  }
}

class Horse extends Animal{
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Иго го');
  }
}

//4 Абстракция - использование только тех характеристик, которые представляют его в системе

class Footballer {
  constructor(name,  club) {
    this.name = name;
    this.club = club;
  }

  shoot(){}
  celebrateGoal(){}
  pass(){}
}

class Forward extends Footballer{
  constructor(name, club) {
    super(name, club);
  }

  shoot(){
    console.log('Очень сильный удар');
  }
  celebrateGoal(){
    console.log('Дааа! Я забил гол!');
  }
  pass(){
    console.log('Средненький пас');
  }
}

//Статические методы и их свойства. Используется когда метод не принадлежит конкретному объекту, а принадлежит классу, и когда внутри метода не используется this


class Car {
  static isCar(car) {
    return car instanceof Car;
  }

  static initialParams = {
    name: 'Audi',
    maxSpeed: 150,
  }

  constructor(name, maxSpeed) {
    this.name = name || Car.initialParams.name;
    this.maxSpeed = maxSpeed || Car.initialParams.maxSpeed;
  }

  drive(){
    console.log(`Машина ${this.name} уже в пути`);
  }
}

const car = new Car('BMW', 200);
console.log(car);
const animal = {};
const isCar = Car.isCar(animal);
console.log(isCar);

//Для получения доступа к статическому метотду нужно: Car.isCar();
