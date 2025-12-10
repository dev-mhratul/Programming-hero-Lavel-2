type user1={
    name: string;
    id: number;
    
}

type result1= "name"|"id";
type user3 = keyof user1;

type User= {
    name: string;
    id: number;
    address: {
        city: string;
    }
}


const user: User= {
    name: "ratul",
    id: 4343,
    address: {
        city: "tangail"
    }
}

// console.log(user['address']['city'])

const userData= (obj: User, value: keyof User)=>{
    return obj[value];
}

const result = userData(user, "id")
console.log(result)