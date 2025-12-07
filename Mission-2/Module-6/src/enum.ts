enum user {
    Admin= 'Admin',
    User= 'User'
}

const userRole=(role: user)=>{
    if(role === user.Admin){
        return true;
    }return false
        
}

const userL= userRole(user.Admin)
console.log(userL)