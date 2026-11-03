
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../service/userServices";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchUsers() {

            try {
                const data = await getAllUsers();
                setUsers(data);

            } catch (err) {
                console.error(err);
                setError(err.message || "Failed to load users");

            } finally {
                setLoading(false);
            }
        }

        fetchUsers();

    }, []);

    if (loading) {
        return <h2>Loading users...</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>MedGrid Users</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Users;
