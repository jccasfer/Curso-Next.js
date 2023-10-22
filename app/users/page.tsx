import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
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
        <table className='table table-ordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td></tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UsersPage