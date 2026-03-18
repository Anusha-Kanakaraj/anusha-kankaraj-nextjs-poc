type User={
    id:number;
    name:string;
    email:string;
};

async function getUsers(): Promise<User[]>{
    const result = await fetch("http://localhost:3000/data/users.json");
    return result.json();
    console.log(result);
}
export default async function UserDetails({params,} : 
    {params: Promise<{id:string}>})
{
    
const resolvedParams = await params;
const {id} = await params;
const users: User[] = await getUsers();
const user = users.find(u => u.id === Number(id));

if(!user) return <h1 className = "text-center mt-10 text-red-500">User not found</h1>;

return(
    <div className = "justify-center flex min-h-screen bg-gray-200 items-center p-8">
        <div className = "bg-white rounded-2xl shawdow-lg p-8 w-full max-w-md text-center">
            <div className = "w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
                {user.name.charAt(0)}
                
            </div>  
            <h2 className = "text-2xl font-bold text-gray-800">{user.name}</h2>  
            <p className = "text-gray-500 mb-6">{user.email}</p>       

            <div className ="border-t my-4"></div>  

            <div className ="text-left space-y-3">
                <p className = "text-gray-700">
                    <span className="font-semibold">Status:</span> Active
                </p>
            </div>
        </div>

        
    </div>
);
}