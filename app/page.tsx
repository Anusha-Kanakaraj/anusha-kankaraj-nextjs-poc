import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen bg-[url('/images/bg.jpg.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className = "home-container">
{/* <h1 className ="home-title">Welcome to Users</h1> */}
<h1 className="text-5xl mb-6 text-gray-200">Welcome to Users</h1>
<p className = "home-subtitle hover:bg-blue-600 transition">
  Mange Users, View Details, and explore data easily
</p>
      <Link href="/users" className = "home-btn">
      Go to Users
      </Link>
      {/* <button onClick={() => router.push("/users")} className = "home-btn">Go to Users</button> */}
      </div>
      
    </div>
  );
}
