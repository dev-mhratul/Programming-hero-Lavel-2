class user{
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name= name,
        this.id= id
    }

    makeUser(){
        console.log(`i am ratul`)
    }


}


// parameter properties

class Puser{
    constructor(public name: string,public id: number){}

    makeUser(){
        console.log(`i am ratul`)
    }
}




const user1= new user("Ratul", 23)
console.log(user1.id)
user1.makeUser()
