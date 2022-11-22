"use strict";
const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];
console.log(users);
const persons = [
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    }
    // {
    //     name: 'Kate Müller',
    //     age: 23,
    //     occupation: 'Astronaut'
    // },
    // {
    //     name: 'Bruce Willis',
    //     age: 64,
    //     role: 'World saver'
    // }
];
console.log(persons);
// 3. Напишите анотации типов к этому классу.
class ObjectManipulator {
    constructor(obj) {
        this.obj = obj;
    }
    set(key, value) {
        return new ObjectManipulator(Object.assign(Object.assign({}, this.obj), { [key]: value }));
    }
    get(key) {
        return this.obj[key];
    }
    delete(key) {
        const newObj = Object.assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    getObject() {
        return this.obj;
    }
}
