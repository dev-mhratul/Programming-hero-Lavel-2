// perent class
class perent{
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name= name;
        this.age= age;
        this.address= address;


    }
}

// student class
class students extends perent{
    

    getTeach(){
        console.log(`${this.name}  good boy.He's ${this.age} year's old`)
    }
}


// teacher class
class teachers extends perent{
    
    role: string;

    constructor(name: string, age: number, address: string, role: string){
        super(name, age, address)
        this.role= role;


    }

    getTeach(){
        console.log(`${this.name} sir good teacher.He's ${this.age} year's old. he's school ${this.role}`)
    }
}


const student1= new students('Ratul', 29, 'tangail')
const teacher1= new teachers('Mh', 24, 'dhaka', 'teacher')

student1.getTeach()
teacher1.getTeach()