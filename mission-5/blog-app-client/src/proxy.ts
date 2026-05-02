import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { userService } from './services/user.service';
import { Role } from './constants/roles';


// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathname= request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;

  const {data}=await userService.getSession()
  console.log(data.user.role)
  
  if(data){
    isAuthenticated = true;
    isAdmin= data.user.role == Role.admin
  }

  if(!isAuthenticated){
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if(isAdmin && pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL('/admin-dashboard', request.url))
  }

  if(!isAdmin && pathname.startsWith('/admin-dashboard')){
      return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()

}

export const config = {
  matcher: ['/dashboard','/admin-dashboard']

}