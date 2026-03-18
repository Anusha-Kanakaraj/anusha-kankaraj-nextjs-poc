import Link from "next/link";
import {Eye} from "lucide-react"

type User = {
    id: number;
    name: string;
    email: string
}

async function getUsers(){
    const result = await fetch("http://localhost:3000/data/users.json");
    return result.json();
}
export default async function UsersPage(){
    const users : User[] = await getUsers();
    return(
        <div className = "min-h-screen bg-gray-100 p-8">
            <div className ="max-w-5xl mx-auto">
                <div className = "mb-6">
                    <h1 className ="text-center text-3xl font-bold text-gray-800">
                        Users Dashboard
                    </h1>
                    <p className = "text-center text-gray-500 mt-1">
                        Manage and view all users
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className = "w-full border-collapse">
                <thead className ="bg-gray-200 text-gray-700 text-left">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="p-4">{user.id}</td>
                            <td className="p-4 font-medium text-gray-800">{user.name}</td>
                            <td className="p-4 text-gray-600">{user.email}</td>
                            <td className="p-4">
                                <Link href ={`users/${user.id}`} 
                                className = "flex items-center gap-3 rounded-md bg-blue-400 text-white px-3 py-3 text-sm hover:bg-blue-600 trasition">
                                    <Eye size={18}/> View
                            </Link></td>
                        </tr>

                    ))}
                </tbody>

            </table>
            </div>


            
        </div>
    );

}