type User = {
    id: number;
    name: string;
    email: string;
    status: boolean;
}

export default async function getUsersDetails(): Promise<User[]>{
    const result = await fetch("http://localhost:3000/data/users.json");
    if (!result.ok) {
    throw new Error(`HTTP error! status: ${result.status}`);
  }
    return await result.json();
}

 export async function getUsersDetailsById(userId:string) :Promise<User | null>{
try{
const id = await userId;
    const users = await getUsersDetails();
    const user = users.find(user=>user.id === Number(id));
    
    return user || null; 

}catch(error){
console.error("Error fetching user:", error);
    return null;
}
    

}
