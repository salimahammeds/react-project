import type { UserType } from '../types/UserType'
export const getUser = async ():Promise<UserType[]>=>{
     const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
     return response.json()
}


