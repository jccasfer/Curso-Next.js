import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
     /*Data fetching from Server Side*/
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        /* {cache: no-store} para que no cachee*/
        { next: { revalidate: 10 } });      /*Data Caching en el fetch*/
    const users: User[] = await res.json();

    //ordenar
    const sortedUsers = sort(users).asc(sortOrder === 'email' 
        ? user => user.email 
        : user => user.name
    );

  return (
    <table className='table table-ordered'>
    <thead>
        <tr>
            <th>
                <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
                <Link href="/users?sortOrder=email">Email</Link>
            </th>
        </tr>
    </thead>
    <tbody>
        {sortedUsers.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>)}
    </tbody>
</table>
  )
}

export default UserTable