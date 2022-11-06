// 1. Учитывая данные, определите интерфейс «Пользователь» и 
// используйте его соответствующим образом.
 interface User {
        name:string;
        age:number;
        occupation: string;
        car?:string;
        children?:number;
    }
    
const users: User[] = [
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

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc 
// Person, который будет соответствовать массиву
interface User{
    name: string,
    age: number,
    occupation: string,
}

interface Admin{
    name: string,
    age: number,
    role: string,
}

type Person = User | Admin;

const persons: Person[] = [
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

    constructor(protected obj:any) {}

    public set(key:string, value:string|number|boolean){
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key:string):string|number{
        return this.obj[key];
    }

    public delete(key:string):object{
        const newObj  = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}




        