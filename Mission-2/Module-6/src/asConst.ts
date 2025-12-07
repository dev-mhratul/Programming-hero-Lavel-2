// enum
// enum user {
//     Admin= 'Admin',
//     User= 'User'
// }

// as const 
 const user = {
    Admin: 'ADMIN',
    User: 'USER'
} as const ;

console.log(typeof user)


const userRole=(role: typeof user[keyof typeof user])=>{
    if(role === user.Admin){
        return true;
    }return false
}
// 
const userL= userRole(user.Admin)
console.log(userL)