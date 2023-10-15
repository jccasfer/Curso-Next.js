import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    /*Data fetching from Server Side*/
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        /* {cache: no-store} para que no cachee*/
        { next: { revalidate: 10 } });      /*Data Caching en el fetch*/
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <p>{ new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UsersPage