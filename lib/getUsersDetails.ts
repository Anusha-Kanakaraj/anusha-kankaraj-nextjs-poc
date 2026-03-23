import { base_url } from "./constants";
 interface User {
    id:number;
    name:string;
    email:string;
    status:boolean;
};

export default async function getUsersDetails(): Promise<User[] | null> {
  try {
    const result = await fetch(`${base_url}/data/users.json`);

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }
    const data: User[] = await result.json();
    if (!data) return null;
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

export async function getUsersDetailsById(userId: number): Promise<User | null> {
  try {
    const users = await getUsersDetails();
    if (!users) return null;

    const user = users.find((user) => user.id === userId) ?? null;
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
}
