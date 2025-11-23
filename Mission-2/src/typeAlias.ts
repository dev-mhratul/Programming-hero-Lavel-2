// first type alias

// object
type userType = {
  Name: string;
  address: string;
};

type role= {
    role: "admin" | "user"
}

// Intersection Type
type userWithRole= userType & role;

// user
const user: userType = {
  Name: "ratul",
  address: "tangail"
}
// user-1
const user1: userWithRole = {
  Name: "ratul1",
  address: "tangail1",
  role: "admin"
}

console.log(user)
console.log(user1)

// array

type nameOfArr= string[]

const arr: nameOfArr = ['ratul', 'miraz']
console.log(arr)

// function
type fun= (num1: number, num2: number)=> number;

const function1 : fun =(num1, num2)=> num1+num2
console.log(function1(1,2))



// dev-mhratul check